---
layout: default
title: MODULO08
---

Este guia fornecerá toda a teoria e os códigos completos para que os alunos possam containerizar a aplicação e orquestrá-la com um banco de dados de produção.

# 💎 Guia Didático Definitivo: Gestão de Estoques com Spring Boot

**Local:** Assis, SP
**Data:** 08 de Outubro de 2025

-----

## Módulo 8: 🚀 Deployment e Containerização com Docker

**Objetivo:** Ensinar o aluno a empacotar a aplicação Spring Boot e suas dependências em um container Docker, preparando-a para distribuição e execução em qualquer ambiente, do desenvolvimento à produção. Ao final, o aluno será capaz de orquestrar a aplicação junto com um banco de dados PostgreSQL usando `docker-compose`.

-----

### \#\#\# Aula 8.1: O que é Docker e por que usar containers?

**O Problema Clássico:** "Mas funciona na minha máquina\!"
Todo desenvolvedor já passou por isso. A aplicação funciona perfeitamente em seu computador, mas quebra ao ser movida para o ambiente de testes ou produção. Isso acontece por diferenças de ambiente: versões do Java, bibliotecas do sistema operacional, variáveis de ambiente, etc.

**A Solução: Containers**
**Conceito-Chave:** Um **container** é um pacote padronizado que agrupa o código da sua aplicação com **todas as suas dependências** (runtime do Java, bibliotecas, configurações). Ele é isolado do sistema operacional hospedeiro, garantindo que a aplicação se comporte da mesma forma em qualquer lugar.

  - **Analogia:** Pense em um container de transporte marítimo. Não importa se ele está em um navio, trem ou caminhão, o conteúdo dentro dele está protegido e intacto. Um container Docker é a mesma coisa para o software.

**Termos Essenciais do Docker:**

  - **Imagem Docker:** É o "molde" ou a "receita" de um container. É um pacote somente leitura que contém as instruções para criar um container. Nós criamos imagens a partir de um `Dockerfile`.
  - **Container Docker:** É uma instância em execução de uma imagem. É a nossa aplicação rodando de fato. Podemos ter vários containers rodando a partir da mesma imagem.
  - **Dockerfile:** É um arquivo de texto com um script de comandos que o Docker usa para montar uma imagem.
  - **Docker Engine:** É o programa que roda na sua máquina e é responsável por construir, executar e gerenciar os containers.

**Principais Vantagens:**

1.  **Portabilidade:** Roda em qualquer lugar que tenha Docker.
2.  **Consistência:** Garante que os ambientes de desenvolvimento, teste e produção sejam idênticos.
3.  **Isolamento:** Containers não interferem uns com os outros.
4.  **Escalabilidade:** É muito fácil criar e destruir containers para atender à demanda.

-----

### \#\#\# Aula 8.2: Criando um `Dockerfile` para a aplicação Spring Boot

**Conceito-Chave: Multi-Stage Build**
Para criar uma imagem otimizada, usaremos uma técnica chamada "multi-stage build".

  - **Estágio 1 (Build):** Usaremos uma imagem "pesada" com todo o ferramental de compilação (Maven e JDK) para compilar nosso código e gerar o arquivo `.jar`.
  - **Estágio 2 (Runtime):** Começaremos com uma imagem "leve", contendo apenas o necessário para executar Java (JRE), e copiaremos apenas o arquivo `.jar` final do estágio anterior.

O resultado é uma imagem final muito menor e mais segura, pois não contém código-fonte ou ferramentas de compilação.

**Ação:** Na **raiz do seu projeto** (na mesma pasta do `pom.xml`), crie um arquivo chamado `Dockerfile` (sem extensão).

#### Código: `Dockerfile` (Arquivo Completo)

```dockerfile
# ----- ESTÁGIO 1: Build com Maven e JDK -----
# Usamos a imagem oficial do Maven que já contém o JDK 21
FROM maven:3.9-eclipse-temurin-21 AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração do Maven primeiro para aproveitar o cache do Docker
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Baixa as dependências
RUN mvn dependency:go-offline

# Copia o restante do código-fonte da aplicação
COPY src ./src

# Compila a aplicação, gera o .jar e pula os testes para acelerar o build da imagem
RUN mvn clean package -DskipTests


# ----- ESTÁGIO 2: Runtime com JRE -----
# Usamos uma imagem base leve, contendo apenas o Java Runtime Environment (JRE)
FROM eclipse-temurin:21-jre-jammy

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas o arquivo .jar final do estágio de build para a nossa imagem final
COPY --from=builder /app/target/gestaodeestoques-0.0.1-SNAPSHOT.jar app.jar

# Expõe a porta 8080 para que possamos nos conectar ao nosso container de fora
EXPOSE 8080

# Comando que será executado quando o container iniciar
ENTRYPOINT ["java", "-jar", "app.jar"]
```

**Ação:** Agora, vamos construir e executar nosso container.

1.  **Construir a Imagem:** Abra o terminal na raiz do projeto e execute o comando:

    ```sh
    docker build -t gestao-estoque-api .
    ```

    *(O `-t gestao-estoque-api` dá um nome (tag) à nossa imagem. O `.` indica que o Dockerfile está no diretório atual.)*

2.  **Executar o Container:** Após o build terminar, execute o container com o comando:

    ```sh
    docker run -p 8080:8080 gestao-estoque-api
    ```

    *(O `-p 8080:8080` mapeia a porta 8080 da sua máquina para a porta 8080 exposta pelo container.)*

Sua aplicação agora está rodando dentro de um container Docker\! No entanto, ela ainda usa o banco H2 em memória, que é zerado a cada reinicialização.

-----

### \#\#\# Aula 8.3: (Avançado) Orquestrando com `docker-compose` e PostgreSQL

**Conceito-Chave:** `docker-compose` é uma ferramenta para definir e executar aplicações Docker com múltiplos containers. Usamos um arquivo `docker-compose.yml` para descrever os serviços que compõem nossa aplicação (ex: a API e o banco de dados) e como eles se conectam.

**Ação 1:** Preparar a aplicação para se conectar ao PostgreSQL.

#### `pom.xml` (Adicionar Driver do PostgreSQL)

```xml
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
</dependency>
```

#### `src/main/resources/application-prod.properties` (Novo Arquivo para Perfil de Produção)

```properties
# Configurações do Banco de Dados PostgreSQL
spring.datasource.url=jdbc:postgresql://postgres-db:5432/estoquedb
spring.datasource.username=admin
spring.datasource.password=admin123
spring.datasource.driver-class-name=org.postgresql.Driver

# Configura o Hibernate/JDBC para validar o schema (não criar/dropar tabelas)
spring.sql.init.mode=never
```

**Ação 2:** Criar o arquivo `docker-compose.yml` na raiz do projeto.

#### Código: `docker-compose.yml` (Arquivo Completo)

```yaml
version: '3.8'

services:
  # Serviço da nossa API Spring Boot
  app-service:
    # Constrói a imagem a partir do Dockerfile no diretório atual
    build: .
    # Mapeia a porta 8080 do host para a porta 8080 do container
    ports:
      - "8080:8080"
    # Define as variáveis de ambiente para o container da aplicação
    environment:
      # Diz ao Spring para usar o perfil 'prod', ativando o application-prod.properties
      - SPRING_PROFILES_ACTIVE=prod
      # O segredo do JWT (em um projeto real, use um mecanismo de secrets)
      - JWT_SECRET=7d4a1b0b3e6c9d8a3f4b2e1c0a9f8b7c6d5e4a3b2c1d0f9e8a7b6c5d4e3f2a1b
    # Garante que o serviço do banco de dados inicie antes da nossa aplicação
    depends_on:
      - postgres-db

  # Serviço do Banco de Dados PostgreSQL
  postgres-db:
    # Usa a imagem oficial do PostgreSQL
    image: postgres:15
    # Define as variáveis de ambiente para configurar o banco de dados
    environment:
      - POSTGRES_DB=estoquedb
      - POSTGRES_USER=admin
      - POSTGRES_PASSWORD=admin123
    # Mapeia a porta 5432 do container para a 5432 do host (opcional, para acesso externo)
    ports:
      - "5432:5432"
    # Monta um volume para persistir os dados do banco
    volumes:
      - postgres-data:/var/lib/postgresql/data

# Define o volume nomeado para persistência dos dados
volumes:
  postgres-data:
```

**Conceito-Chave (Volumes):** A linha `volumes: - postgres-data:/var/lib/postgresql/data` é crucial. Ela diz ao Docker para "salvar os dados do banco de dados do container em um local gerenciado pelo Docker no seu computador (`postgres-data`)". Isso garante que, mesmo se o container for removido, seus dados estarão seguros.

**Ação 3:** Iniciar o ambiente completo.

1.  **Parar qualquer container anterior:** Se você executou o `docker run` antes, pare-o (Ctrl+C).
2.  **Iniciar com `docker-compose`:** No terminal, na raiz do projeto, execute:
    ```sh
    docker-compose up --build
    ```
      - `up`: Sobe os serviços definidos no arquivo.
      - `--build`: Força a reconstrução da imagem da nossa aplicação (importante se você alterou o código).

O Docker irá baixar a imagem do PostgreSQL, construir a imagem da sua API, criar uma rede para eles se comunicarem e iniciar os dois containers na ordem correta.

-----

### Conclusão do Módulo 8 e Final do Guia

**Parabéns\! Você chegou ao final da nossa jornada\!**

Você não apenas construiu uma aplicação completa, mas também aprendeu a empacotá-la e distribuí-la usando as tecnologias mais requisitadas do mercado. Agora você tem uma aplicação:

  - **Profissional:** Com arquitetura limpa, segura e testada.
  - **Portátil:** Que roda de forma consistente em qualquer máquina com Docker.
  - **Pronta para Produção:** Com um banco de dados persistente e configuração externalizada.

O conhecimento adquirido ao longo destes 8 módulos forma a base sólida de um engenheiro de software completo. O próximo passo é pegar essa base e continuar construindo sobre ela, explorando novos desafios e tecnologias. O céu é o limite\!

