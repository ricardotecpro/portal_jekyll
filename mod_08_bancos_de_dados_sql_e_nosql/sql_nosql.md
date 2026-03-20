---
layout: default
title: **Bancos de Dados: Do SQL ao NoSQL**
---

# **Bancos de Dados: Do SQL ao NoSQL**

SQL

---

### **Índice do Projeto de Banco de Dados**

  * [Introdução 🗃️](01_introducao.html)
  * [Primeiros Passos com Modelagem de Dados 🏗️](02_primeiros_passos_com_modelagem_de_dados.html)
  * [Modelo Conceitual 🧠](./03_modelo_conceitual.html)
  * [Modelo Lógico Relacional 🔗](04_modelo_logico_relacional.html)
  * [Normalização de Dados 📦](05_normalizacao.html)
  * [SQL: DDL e DML ✍️](06_sql_ddl_e_dml.html)
  * [Consultas SQL 🔍](07_consultas_sql.html)

# NoSQL

---


### **Módulos - Cassandra**

  * [Cassandra - Atividade 1: Instalação 🔵](cassandra01.html)
  * [Cassandra - Atividade 2: Criação de Tabelas 📝](cassandra02.html)
  * [Cassandra - Atividade 3: Operações CRUD 🔄](cassandra03.html)
  * [Cassandra - Atividade 4: Atividade Final 🏆](cassandra04.html)

---

**Público-Alvo:**
* Desenvolvedores iniciantes e experientes que desejam dominar bancos de dados.
* Estudantes de tecnologia que precisam de uma base sólida e atual sobre o tema.
* Profissionais que buscam atualizar seus conhecimentos sobre as tendências em armazenamento de dados, incluindo NoSQL e Cloud.

**Pré-requisitos:**
* Lógica de programação.
* Conhecimento básico em pelo menos uma linguagem de programação (ex: Python, Java, C# ou JavaScript).

**Ferramentas Utilizadas:**
* **SGBD SQL:** PostgreSQL (moderno, open-source e rico em funcionalidades).
* **SGBDs NoSQL:** MongoDB (banco de dados de documentos) e Redis (banco de dados chave-valor/em memória).
* **Ferramenta Gráfica:** DBeaver (multi-SGBD).
* **Plataforma:** Docker (para facilitar a configuração dos ambientes).

---

### **Estrutura do Curso**

O curso será dividido em seções que constroem o conhecimento de forma progressiva, culminando em um projeto prático que integra os diferentes modelos de banco de dados.

---

### **[Módulo 1: Fundamentos Universais de Bancos de Dados 🏛️]**
* **Aula 1:** O que é um banco de dados e por que ele é crucial? Resolvendo problemas de escala, consistência e segurança.
* **Aula 2:** SQL vs. NoSQL: Uma visão geral das duas filosofias e quando usar cada uma.
* **Aula 3:** Modelagem Conceitual: Desenhando a "planta baixa" dos seus dados (Entidades, Atributos, Relacionamentos).
* **Aula 4:** Configurando o ambiente de desenvolvimento com Docker: PostgreSQL, MongoDB e Redis em minutos.

### **[Módulo 2: O Mundo Relacional com SQL e PostgreSQL 🗃️](./modulo_02_sql_postgresql/)**
* **Aula 1:** Modelagem Lógica Relacional: Transformando o modelo conceitual em tabelas.
* **Aula 2:** Chaves (Primária, Estrangeira) e Integridade Referencial.
* **Aula 3:** Normalização na Prática: Evitando redundância e anomalias de dados (1FN, 2FN, 3FN).
* **Aula 4:** DDL (Data Definition Language): `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE` e `Constraints`.
* **Aula 5:** DML (Data Manipulation Language): `INSERT`, `UPDATE`, `DELETE`.

### **Módulo 3: Consultas SQL: Do Básico ao Avançado 🔍**
* **Aula 1:** A base de tudo: `SELECT`, `FROM`, `WHERE`.
* **Aula 2:** Junções (JOINs): `INNER`, `LEFT`, `RIGHT` e `FULL JOIN` para combinar dados.
* **Aula 3:** Funções de Agregação: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`.
* **Aula 4:** Agrupando dados com `GROUP BY`.
* **Aula 5:** Ordenando com `ORDER BY` e limitando resultados com `LIMIT`.
* **Aula 6:** Subconsultas: Resolvendo problemas complexos.
* **Aula 7:** Transações e os princípios ACID (`COMMIT`, `ROLLBACK`).

### **Módulo 4: Bem-vindo ao Universo NoSQL 🚀**
* **Aula 1:** Por que o NoSQL foi criado? Flexibilidade, escalabilidade e o Big Data.
* **Aula 2:** Teorema CAP (Consistência, Disponibilidade, Tolerância a Partição): Entendendo os trade-offs.
* **Aula 3:** Tipos de Bancos de Dados NoSQL: Documentos, Chave-Valor, Grafos e Família de Colunas.

### **Módulo 5: MongoDB na Prática (Banco de Dados de Documentos) 📄**
* **Aula 1:** Introdução ao MongoDB e ao modelo de documentos (JSON/BSON).
* **Aula 2:** Operações CRUD: `insertOne`, `find`, `updateOne`, `deleteOne`.
* **Aula 3:** Consultas avançadas: Filtrando documentos aninhados e arrays.
* **Aula 4:** Índices e otimização de performance.
* **Aula 5:** Modelagem com MongoDB: Denormalização e relacionamentos incorporados vs. referenciados.

### **Módulo 6: Redis na Prática (Banco de Dados Chave-Valor e Cache) ⚡**
* **Aula 1:** O que é um banco de dados em memória e por que a velocidade importa?
* **Aula 2:** Comandos básicos do Redis: `SET`, `GET`, `DEL`.
* **Aula 3:** Trabalhando com estruturas de dados: Listas, Hashes, Sets.
* **Aula 4:** Caso de Uso Prático 1: Implementando um sistema de cache para aliviar um banco de dados SQL.
* **Aula 5:** Caso de Uso Prático 2: Gerenciando sessões de usuário.

### **Módulo 7: Conectando Bancos de Dados com Aplicações 🔗**
* **Aula 1:** Padrões de acesso a dados (Repository Pattern).
* **Aula 2:** Usando uma biblioteca de acesso a dados em Python para conectar com PostgreSQL.
* **Aula 3:** Usando uma biblioteca de acesso a dados em Node.js para conectar com MongoDB.
* **Aula 4:** Integrando Redis como camada de cache em uma aplicação.

### **Módulo 8: Projeto Final - Sistema de E-commerce Híbrido 🛒**
* **Objetivo:** Desenvolver o backend de um sistema de e-commerce, aplicando o melhor de cada banco de dados.
* **Parte 1 (PostgreSQL):** Modelar e criar o núcleo transacional do sistema: produtos, estoque e pedidos.
* **Parte 2 (MongoDB):** Armazenar informações flexíveis, como avaliações de produtos e logs de eventos.
* **Parte 3 (Redis):** Implementar o carrinho de compras e cache de produtos populares.
* **Aula Final:** Apresentação da solução completa e revisão dos conceitos aplicados.

### **Módulo Bônus: Tópicos Modernos e Futuro dos Dados ☁️**
* **Aula 1:** Bancos de Dados como Serviço (DBaaS) na Nuvem (AWS RDS, MongoDB Atlas).
* **Aula 2:** Infrastructure as Code (IaC) com Terraform para provisionar bancos de dados.
* **Aula 3:** Uma introdução a Bancos de Dados de Grafos (Neo4j) para redes sociais e sistemas de recomendação.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

