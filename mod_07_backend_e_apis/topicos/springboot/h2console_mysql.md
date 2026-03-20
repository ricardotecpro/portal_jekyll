### Guia para o H2 

Seguido por uma nova seção detalhando como configurar seu projeto Spring Boot para se conectar a um banco de dados MySQL. Por fim, mostrarei a abordagem recomendada para gerenciar ambas as configurações usando **Spring Profiles**.

## **Etapa 7: Guia de Conexão de Banco de Dados no Spring Boot

### Opção 1: H2 Database (Para Desenvolvimento e Testes)

Para desenvolvedores que utilizam o Spring Boot, o banco de dados em memória H2 é uma ferramenta extremamente útil. Ele permite a criação de um banco de dados relacional que existe apenas durante a execução da aplicação, sem a necessidade de configurar um servidor externo. Uma de suas grandes vantagens é o console web, que oferece uma interface gráfica para interagir diretamente com o banco de dados.

#### 1\. Adicionando as Dependências Necessárias

Garanta que as dependências do Spring Data JPA e do H2 estejam em seu arquivo `pom.xml` (Maven) ou `build.gradle` (Gradle).

**Maven (`pom.xml`):**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>
```

**Gradle (`build.gradle`):**

```groovy
implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
runtimeOnly 'com.h2database:h2'
```

#### 2\. Configurando o `application.properties`

Adicione as seguintes propriedades ao seu arquivo `src/main/resources/application.properties` para habilitar o console e configurar a conexão.

```properties
# Habilita o console web do H2
spring.h2.console.enabled=true
# Define o caminho para acessar o console
spring.h2.console.path=/h2-console

# Configurações do Datasource para H2
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
```

#### 3\. Configurando o Spring Security (Se aplicável)

Se o seu projeto utiliza Spring Security, é necessário permitir o acesso ao console do H2. Crie ou modifique sua classe de configuração de segurança:

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import static org.springframework.boot.autoconfigure.security.servlet.PathRequest.toH2Console;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(toH2Console()).permitAll() // Permite acesso ao console H2
                .anyRequest().authenticated()
            )
            .csrf(csrf -> csrf
                .ignoringRequestMatchers(toH2Console()) // Desabilita CSRF para o console H2
            )
            .headers(headers -> headers
                .frameOptions(frameOptions -> frameOptions.sameOrigin()) // Permite frames do H2
            );

        return http.build();
    }
}
```

#### 4\. Acessando o Console H2

Inicie sua aplicação e acesse **`http://localhost:8080/h2-console`**. Use a URL JDBC `jdbc:h2:mem:testdb`, usuário `sa` e senha em branco para conectar.

-----

### Opção 2: Conectando a um Banco de Dados MySQL

Para ambientes de produção ou quando você precisa de um banco de dados persistente, o MySQL é uma escolha popular. A configuração é igualmente simples.

#### 1\. Adicionando a Dependência do MySQL

Primeiro, remova ou comente a dependência do H2 e adicione o conector JDBC do MySQL.

**Maven (`pom.xml`):**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <scope>runtime</scope>
</dependency>
```

**Gradle (`build.gradle`):**

```groovy
implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
// runtimeOnly 'com.h2database:h2' // Remova ou comente
runtimeOnly 'com.mysql:mysql-connector-j'
```

#### 2\. Configurando o `application.properties` para MySQL

Agora, altere as propriedades do `datasource` no seu arquivo `application.properties` para apontar para o seu servidor MySQL.

**Certifique-se de que você tenha um banco de dados chamado `meu_banco` criado no seu servidor MySQL antes de continuar.**

```properties
# Configurações do Datasource para MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/meu_banco?useSSL=false&serverTimezone=UTC
spring.datasource.username=seu_usuario # Ex: root
spring.datasource.password=sua_senha

# O Spring Boot geralmente detecta o driver, mas é boa prática especificar
# spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# Dialeto do Hibernate para MySQL
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

# Estratégia de geração do schema (DDL)
# 'update': atualiza o schema com base nas suas entidades. Ótimo para desenvolvimento.
# 'validate': valida se o schema corresponde às entidades.
# 'create-drop': cria o schema na inicialização e o destrói no final.
# 'none': não faz nada. Recomendado para produção.
spring.jpa.hibernate.ddl-auto=update
```

**Observação:** Ao usar MySQL, as propriedades `spring.h2.console.enabled` e a configuração de segurança para o console H2 não são mais necessárias.

-----

### Gerenciando Múltiplas Configurações com Spring Profiles (Recomendado)

A melhor abordagem é manter as duas configurações e alternar entre elas usando **Spring Profiles**. Isso permite usar o H2 para desenvolvimento e testes rápidos e o MySQL para produção ou homologação.

1.  **Renomeie e divida seus arquivos de configuração:**

      * Crie um arquivo chamado `src/main/resources/application-dev.properties` para a configuração do H2.
      * Crie um arquivo chamado `src/main/resources/application-prod.properties` para a configuração do MySQL.

2.  **Conteúdo do `application-dev.properties` (Perfil de Desenvolvimento - H2):**

    ```properties
    # Configurações do H2
    spring.h2.console.enabled=true
    spring.h2.console.path=/h2-console

    # Datasource H2
    spring.datasource.url=jdbc:h2:mem:testdb
    spring.datasource.driverClassName=org.h2.Driver
    spring.datasource.username=sa
    spring.datasource.password=
    spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
    spring.jpa.hibernate.ddl-auto=create-drop
    ```

3.  **Conteúdo do `application-prod.properties` (Perfil de Produção - MySQL):**

    ```properties
    # Datasource MySQL
    spring.datasource.url=jdbc:mysql://localhost:3306/meu_banco?useSSL=false&serverTimezone=UTC
    spring.datasource.username=seu_usuario
    spring.datasource.password=sua_senha

    # Dialeto e DDL
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
    spring.jpa.hibernate.ddl-auto=validate
    ```

4.  **Ative o Perfil Desejado:**
    No seu arquivo principal `src/main/resources/application.properties`, adicione a seguinte linha para definir o perfil padrão:

    ```properties
    # Define o perfil ativo. Mude para 'prod' quando for para produção.
    spring.profiles.active=dev
    ```

Agora, ao iniciar a aplicação, o Spring Boot carregará as configurações de `application-dev.properties`. Para usar a configuração de produção, basta alterar `spring.profiles.active` para `prod` e reiniciar. Você também pode ativar perfis através de variáveis de ambiente ou argumentos de linha de comando, o que é ideal para pipelines de CI/CD.



---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
