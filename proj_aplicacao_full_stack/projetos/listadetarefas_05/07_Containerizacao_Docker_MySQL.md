---
layout: default
title: 🐳 Módulo 7: Containerização com Docker e MySQL
---

# 🐳 Módulo 7: Containerização com Docker e MySQL

**Objetivo:** Empacotar nossa API Spring Boot em um container Docker para garantir portabilidade e consistência entre ambientes. Em seguida, usar o Docker Compose para orquestrar a execução da nossa API junto com um banco de dados MySQL persistente, substituindo o H2 em memória.

### ### 🤔 Por que usar Docker?
* **Consistência:** Garante que a aplicação rode da mesma forma no ambiente de desenvolvimento, teste e produção. "Funciona na minha máquina" deixa de ser um problema.
* **Isolamento:** Cada serviço (API, banco de dados) roda em seu próprio container isolado, com suas próprias dependências, evitando conflitos.
* **Portabilidade:** Um container Docker pode ser executado em qualquer máquina que tenha o Docker instalado, seja ela Windows, macOS, Linux ou um servidor na nuvem.
* **Escalabilidade:** É muito mais fácil criar múltiplas instâncias da sua API para lidar com mais tráfego quando ela está containerizada.

### ### 🛠️ Ferramentas Necessárias
* **Docker Desktop:** Instale o Docker Desktop para Windows, macOS ou Linux. Ele já inclui o Docker Engine e o Docker Compose.

---
### ### 📦 Passo 1: Criando o `Dockerfile` para a API

O `Dockerfile` é uma "receita" de como construir a imagem do nosso container. Ele define o sistema operacional base, o ambiente Java, copia nosso código e especifica como executar a aplicação.

1.  Na **raiz do projeto da API** (`listadetarefas-api/`), crie um novo arquivo chamado `Dockerfile` (sem extensão).

**`Dockerfile`**
```dockerfile
# Estágio 1: Build - Usamos uma imagem do Maven com JDK 17 para compilar nosso projeto.
# Esta imagem contém todas as ferramentas necessárias para o build, mas é grande,
# por isso a usamos apenas temporariamente.
FROM maven:3.9.6-eclipse-temurin-17 AS build

# Define o diretório de trabalho dentro do container.
WORKDIR /app

# Copia o pom.xml primeiro para aproveitar o cache do Docker.
# Se o pom.xml não mudar, o Docker não precisará baixar as dependências novamente.
COPY pom.xml .

# Baixa todas as dependências do projeto.
RUN mvn dependency:go-offline

# Copia o restante do código-fonte da aplicação.
COPY src ./src

# Executa o build do Maven para gerar o arquivo .jar.
# O -DskipTests pula a execução dos testes durante o build da imagem.
RUN mvn clean package -DskipTests


# Estágio 2: Run - Usamos uma imagem base muito menor, apenas com o Java (JRE),
# para executar nossa aplicação. Isso resulta em uma imagem final mais leve e segura.
FROM eclipse-temurin:17-jre-jammy

# Define o diretório de trabalho.
WORKDIR /app

# Copia apenas o .jar gerado no estágio de build para a imagem final.
COPY --from=build /app/target/listadetarefas-api-*.jar app.jar

# Expõe a porta 8080 do container para que possamos nos conectar a ela.
EXPOSE 8080

# Comando que será executado quando o container iniciar.
ENTRYPOINT ["java", "-jar", "app.jar"]
```
* **Boas Práticas (Multi-stage build):** Usamos um *multi-stage build* para criar uma imagem Docker final otimizada. O primeiro estágio (`build`) tem todas as ferramentas pesadas (Maven, JDK completo), mas o estágio final (`run`) contém apenas o mínimo necessário (JRE e nosso JAR), resultando em uma imagem menor e mais segura.

---
### ### 🔄 Passo 2: Adaptando a Aplicação para o MySQL

Para que nossa API Spring Boot se conecte ao MySQL em vez do H2, precisamos fazer duas pequenas alterações.

1.  **Adicionar a Dependência do MySQL no `pom.xml`:**
    Abra o `pom.xml` do projeto `listadetarefas-api` e adicione a dependência do driver MySQL.
    ```xml
    <dependency>
        <groupId>com.mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
        <scope>runtime</scope>
    </dependency>
    ```

2.  **Atualizar o `application.properties`:**
    Altere as configurações de datasource para apontar para o nosso futuro container MySQL.
    ```properties
    # Permite que o servidor aceite conexões de qualquer endereço de rede da máquina.
    server.address=0.0.0.0

    # ------ REMOVA OU COMENTE AS CONFIGURAÇÕES DO H2 ------
    # spring.h2.console.enabled=true
    # spring.h2.console.path=/h2-console
    # spring.datasource.url=jdbc:h2:mem:testdb
    # spring.datasource.driverClassName=org.h2.Driver
    # spring.datasource.username=sa
    # spring.datasource.password=

    # ------ ADICIONE AS NOVAS CONFIGURAÇÕES DO MYSQL ------
    # A URL aponta para o nome do serviço 'db' que definiremos no docker-compose.
    spring.datasource.url=jdbc:mysql://db:3306/tarefasdb
    spring.datasource.username=user
    spring.datasource.password=secret
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
    ```
* **`spring.jpa.hibernate.ddl-auto=update`**: Esta linha instrui o Hibernate a verificar o estado do banco de dados e criar ou atualizar as tabelas automaticamente com base na sua entidade `Tarefa`, o que é muito útil para desenvolvimento.

---
### ### 🐳 Passo 3: Orquestrando com `docker-compose.yml`

O Docker Compose nos permite definir e executar aplicações com múltiplos containers. Vamos criar um arquivo para orquestrar nossa API e nosso banco de dados MySQL.

1.  Na **raiz do projeto da API** (`listadetarefas-api/`), crie um novo arquivo chamado `docker-compose.yml`.

**`docker-compose.yml`**
```yaml
version: '3.8' # Especifica a versão da sintaxe do Docker Compose

services:
  # Serviço 1: Nosso banco de dados MySQL
  db:
    image: mysql:8.0 # Usa a imagem oficial do MySQL versão 8.0
    container_name: mysql_db
    environment:
      MYSQL_DATABASE: 'tarefasdb' # Cria um banco de dados com este nome
      MYSQL_USER: 'user'         # Cria um usuário
      MYSQL_PASSWORD: 'secret'   # Define a senha para o usuário
      MYSQL_ROOT_PASSWORD: 'root' # Define a senha para o usuário root
    ports:
      - "3306:3306" # Mapeia a porta 3306 do container para a porta 3306 da sua máquina
    volumes:
      - mysql_data:/var/lib/mysql # Monta um volume para persistir os dados do banco

  # Serviço 2: Nossa API Spring Boot
  api:
    build: . # Constrói a imagem usando o Dockerfile na pasta atual
    container_name: todolist_api
    depends_on:
      - db # Garante que o container da API só inicie depois do container do banco
    ports:
      - "8080:8080" # Mapeia a porta 8080 do container para a porta 8080 da sua máquina
    environment:
      # Passa a URL do banco de dados para a aplicação. O nome 'db' é resolvido
      # pelo Docker Compose para o IP interno do container do MySQL.
      - SPRING_DATASOURCE_URL=jdbc:mysql://db:3306/tarefasdb
      - SPRING_DATASOURCE_USERNAME=user
      - SPRING_DATASOURCE_PASSWORD=secret

volumes:
  mysql_data: # Define o volume que será usado para persistir os dados do MySQL
```

### ### ✅ Passo 4: Execução e Teste

1.  **Abra um terminal na raiz do projeto `listadetarefas-api`** (onde estão o `Dockerfile` e o `docker-compose.yml`).
2.  **Execute o Docker Compose:**
    ```bash
    docker-compose up --build
    ```
    * **`up`**: Inicia os containers definidos no arquivo.
    * **`--build`**: Força o Docker a reconstruir a imagem da sua API usando o `Dockerfile`. Você só precisa usar `--build` na primeira vez ou quando fizer alterações no código da API.
3.  **Acompanhe os Logs:** O terminal mostrará os logs de ambos os containers (MySQL e a API). Espere até ver a mensagem de que o servidor Tomcat iniciou (`Tomcat started on port(s): 8080`).
4.  **Teste a Aplicação:**
    * Sua API agora está rodando em `http://localhost:8080` como antes, mas dentro de um container Docker.
    * Use o seu **Cliente REST** (Postman/Insomnia) para criar, listar e deletar tarefas.
    * **Teste de Persistência:**
        1. Crie algumas tarefas.
        2. Pare os containers pressionando `Ctrl+C` no terminal.
        3. Inicie os containers novamente com `docker-compose up`.
        4. Faça uma requisição `GET` para `http://localhost:8080/api/tarefas`. As tarefas que você criou anteriormente ainda devem estar lá, provando que os dados foram persistidos no volume do Docker.
```

---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)


