---
layout: default
title: # Configuração do Spring Boot com H2 e MySQL
---

# # Configuração do Spring Boot com H2 e MySQL


Para configurar o **H2 para homologação** e **MySQL para produção**, siga os passos abaixo.

---

## **1️⃣ Configuração do Banco de Dados no `application.properties`**
📌 **Edite o arquivo** `src/main/resources/application.properties` e configure conforme o ambiente.

### ✅ **H2 (Homologação)**
Use esta configuração quando estiver testando localmente sem precisar de um banco externo.

```properties
# Banco de dados H2 (memória)
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# Configuração do Hibernate para H2
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update  # Cria/atualiza as tabelas automaticamente

# Habilitar console web do H2 para consultas
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
spring.h2.console.settings.trace=false
spring.h2.console.settings.web-allow-others=false
```
✅ **Acesse o console do H2:**  
➡ **http://localhost:8080/h2-console**  
No campo **JDBC URL**, insira:  
```txt
jdbc:h2:mem:testdb
```
Clique em **Connect**.

---

### ✅ **MySQL (Produção)**
Use esta configuração quando for subir para produção ou quando quiser persistir os dados.

```properties
# Banco de dados MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/listatarefas
spring.datasource.username=root
spring.datasource.password=1234
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# Configuração do Hibernate para MySQL
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
spring.jpa.hibernate.ddl-auto=update  # Cria/atualiza as tabelas automaticamente
```

📌 **Certifique-se de que o MySQL está rodando e que o banco de dados `listatarefas` já foi criado**:

```sql
CREATE DATABASE listatarefas;
```

---

## **2️⃣ Configurar o `application.yml` para múltiplos perfis (opcional)**
Caso queira alternar automaticamente entre **H2 (homologação) e MySQL (produção)**, crie um arquivo `src/main/resources/application.yml`:

```yaml
spring:
  profiles:
    active: dev  # Troque para "prod" em produção

---
spring:
  config:
    activate:
      on-profile: dev
  datasource:
    url: jdbc:h2:mem:testdb
    driverClassName: org.h2.Driver
    username: sa
    password: 
  jpa:
    database-platform: org.hibernate.dialect.H2Dialect
    hibernate:
      ddl-auto: update
  h2:
    console:
      enabled: true
      path: /h2-console

---
spring:
  config:
    activate:
      on-profile: prod
  datasource:
    url: jdbc:mysql://localhost:3306/listatarefas
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: 1234
  jpa:
    database-platform: org.hibernate.dialect.MySQL8Dialect
    hibernate:
      ddl-auto: update
```
Agora, para rodar com H2 (homologação):
```sh
mvn spring-boot:run
```
E para rodar em produção com MySQL:
```sh
mvn spring-boot:run -Dspring.profiles.active=prod
```

---

### **3️⃣ Criar os scripts SQL**
Caso o Hibernate não esteja gerando automaticamente as tabelas, crie os arquivos:

📌 **`src/main/resources/schema.sql`**
```sql
CREATE TABLE IF NOT EXISTS produto (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2) NOT NULL
);
```

📌 **`src/main/resources/data.sql`** (Para popular com dados iniciais)
```sql
INSERT INTO produto (id, nome, preco) VALUES (1, 'Notebook Dell', 4500.00);
INSERT INTO produto (id, nome, preco) VALUES (2, 'Mouse Logitech', 120.50);
INSERT INTO produto (id, nome, preco) VALUES (3, 'Teclado Mecânico', 350.75);
```

---

### **4️⃣ Reiniciar a aplicação**
Após configurar tudo, reinicie o Spring Boot:

```sh
mvn spring-boot:run
```

Se estiver usando MySQL, **não esqueça de rodar o servidor MySQL antes**.

Agora, sua aplicação está configurada corretamente para rodar com **H2 em homologação** e **MySQL em produção**! 🚀


---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

