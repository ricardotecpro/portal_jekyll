---
layout: default
title: 🎓 Aula: Integração de Java, Git/GitHub e Docker no Ciclo de Desenvolvimento
---

## 🎓 Aula: Integração de Java, Git/GitHub e Docker no Ciclo de Desenvolvimento

### 🎯 Objetivos da Aula

* Compreender como aplicar conceitos de versionamento com Git/GitHub.
* Criar e executar uma aplicação Java simples.
* Containerizar a aplicação com Docker.
* Orquestrar com Docker Compose.
* Simular um pequeno fluxo de trabalho em equipe.

---

## Aula 1: Teoria e Prática de Programação em Java com Git e GitHub

### Parte 1 – Fundamentos Teóricos (30 minutos)

**Tópicos a serem abordados:**

1. **Programação em Java**

    * Estrutura de um projeto simples em Java (sem frameworks).
    * Compilação e execução via terminal.
2. **Git e GitHub**

    * Conceitos de versionamento: repositório, commit, branch, merge.
    * Diferença entre Git (local) e GitHub (remoto).
    * Boas práticas de commits.

**Material de apoio:**

* Slides explicativos.
* Fluxograma com ciclo `add → commit → push`.

### Parte 2 – Prática (70 minutos)

#### 🛠️ Atividade: Criar uma calculadora Java com Git

**Etapas:**

1. Criar projeto Java (CLI) com `Calculadora.java`.
2. Iniciar um repositório Git (`git init`).
3. Fazer commits em cada funcionalidade:

    * Soma
    * Subtração
    * Multiplicação
    * Divisão
4. Criar um repositório no GitHub e subir o código (`git remote add` + `git push`).
5. Criar uma nova branch `melhoria-interface` e fazer uma melhoria.
6. Realizar merge com `main`.

---

## Aula 2: Docker e Docker Compose com Java

### Parte 1 – Fundamentos Teóricos (30 minutos)

**Tópicos:**

1. **Docker**

    * O que é um container.
    * Diferença entre imagem e container.
    * Vantagens no ambiente de desenvolvimento.
2. **Dockerfile**

    * Como criar uma imagem de aplicação Java.
3. **Docker Compose**

    * Orquestração de múltiplos serviços.
    * Exemplo com app + banco de dados.

### Parte 2 – Prática (70 minutos)

#### 🛠️ Atividade: Dockerizar o Projeto da Calculadora

**Etapas:**

1. Criar um `Dockerfile`:

   ```Dockerfile
   FROM openjdk:17
   COPY . /app
   WORKDIR /app
   RUN javac Calculadora.java
   CMD ["java", "Calculadora"]
   ```

2. Construir e rodar:

   ```bash
   docker build -t calculadora-java .
   docker run --rm calculadora-java
   ```

3. Criar `docker-compose.yml` (simples, apenas um serviço):

   ```yaml
   version: '3'
   services:
     app:
       build: .
       container_name: calculadora
   ```

4. Rodar com Docker Compose:

   ```bash
   docker-compose up --build
   ```

---

## Aula 3 (Opcional): Projeto Integrado Java + PostgreSQL com Docker Compose

**Desafio final:**

* Criar uma aplicação Java que se conecta a um banco PostgreSQL.
* Docker Compose com dois serviços (Java app e PostgreSQL).
* Salvar os resultados das operações da calculadora no banco.

**Exemplo de `docker-compose.yml`:**

```yaml
version: '3.8'
services:
  app:
    build: .
    depends_on:
      - db
  db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: calcdb
    ports:
      - "5432:5432"
```

---

## 📘 Avaliação Sugerida

* **Entrega individual ou em dupla** no GitHub.
* **Critérios:**

    * Uso correto do Git e histórico de commits.
    * Projeto funcional em Java.
    * Dockerfile funcional.
    * Docker Compose funcional (opcional para nota extra).

---

## 📎 Recursos e Links

* [Documentação do Git](https://git-scm.com/doc)
* [GitHub Docs](https://docs.github.com)
* [Docker Docs](https://docs.docker.com)
* [OpenJDK Docker Hub](https://hub.docker.com/_/openjdk)
* [Learning Brach](https://learngitbranching.js.org/?locale=pt_BR)

---
## 📝 Considerações Finais
* Java básico com uma classe `Calculadora.java`.
* Um `Dockerfile` para construir a imagem do projeto Java.
* Um `docker-compose.yml` para orquestrar o container.

---

### 1. Projeto Java simples - `Calculadora.java`

```java
// src/main/java/com/example/calculadora/Calculadora.java
package com.example.calculadora;

public class Calculadora {
    public static void main(String[] args) {
        System.out.println("Soma de 5 + 3 = " + soma(5, 3));
        System.out.println("Subtração de 5 - 3 = " + subtrai(5, 3));
        System.out.println("Multiplicação de 5 * 3 = " + multiplica(5, 3));
        System.out.println("Divisão de 5 / 3 = " + divide(5, 3));
    }

    public static int soma(int a, int b) {
        return a + b;
    }

    public static int subtrai(int a, int b) {
        return a - b;
    }

    public static int multiplica(int a, int b) {
        return a * b;
    }

    public static double divide(int a, int b) {
        if (b == 0) throw new IllegalArgumentException("Divisão por zero não é permitida.");
        return (double) a / b;
    }
}
```

---

### 2. `Dockerfile`

Vamos criar um Dockerfile para construir e rodar a aplicação Java.

```dockerfile
# Usar imagem oficial do OpenJDK 17 como base
FROM openjdk:17-jdk-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar o código fonte para o container
COPY src ./src

# Compilar o código Java
RUN javac src/main/java/com/example/calculadora/Calculadora.java

# Comando para rodar a aplicação
CMD ["java", "-cp", "src/main/java", "com.example.calculadora.Calculadora"]
```

---

### 3. `docker-compose.yml`

Este arquivo vai criar um serviço chamado `calculadora`, que constrói a imagem a partir do Dockerfile.

```yaml
version: '3.8'

services:
  calculadora:
    build: .
    container_name: calculadora-java
```

---

### Estrutura recomendada do projeto:

```
calculadora-java/
├── Dockerfile
├── docker-compose.yml
└── src
    └── main
        └── java
            └── com
                └── example
                    └── calculadora
                        └── Calculadora.java
```

---

### Como usar:

1. Crie a estrutura acima.
2. Na pasta raiz (`calculadora-java`), rode:

   ```bash
   docker-compose up --build
   ```
3. O output será algo assim:

   ```
   Soma de 5 + 3 = 8
   Subtração de 5 - 3 = 2
   Multiplicação de 5 * 3 = 15
   Divisão de 5 / 3 = 1.6666666666666667
   ```

---


