# O Universo dos Bancos de Dados: Uma Visão Abrangente 🌌

Um banco de dados é um sistema projetado para organizar e armazenar dados, resolvendo problemas cruciais para os negócios, como a gestão de grandes volumes de informações, velocidade de acesso, consistência e segurança. As empresas precisam de respostas fundamentadas em dados para perguntas importantes, como "quais são os produtos mais vendidos?" ou "como está o estoque?", e planilhas muitas vezes não são suficientes para essa tarefa.

### Modelos de Bancos de Dados 🏗️

Existem diferentes modelos para estruturar os dados, cada um com suas características:
* **Hierárquico:** Organiza os dados em uma estrutura de árvore 🌳.
* **Relacional:** É o modelo mais comum, onde os dados são armazenados em tabelas 🗂️. Uma tabela, tecnicamente chamada de "relação", é um conjunto de registros (linhas) e cada coluna é um campo ou atributo. A estrutura completa de tabelas e regras de um banco de dados relacional é chamada de esquema de dados.
* **Orientado a objetos:** Armazena dados na forma de objetos.
* **NoSQL:** Uma categoria que inclui diferentes abordagens:
    * **Orientado a agregados:** Inclui modelos como chave-valor, documentos e família de colunas.
    * **Grafos:** Organiza os dados com base em nós e suas relações 🕸️.

### Sistema de Gerenciamento de Banco de Dados (SGBD) ⚙️

Um Sistema de Gerenciamento de Banco de Dados (SGBD), ou DBMS em inglês, é o software que permite a criação e o gerenciamento de bancos de dados. Um bom SGBD deve oferecer soluções para problemas como volume de dados, velocidade, segurança, consistência e concorrência. Exemplos de SGBDs populares incluem MySQL, Postgresql, Oracle e SQL Server.

**Servidor vs. Aplicativo Gráfico** 🖥️
Um SGBD geralmente é distribuído como um "servidor" de banco de dados. Para facilitar a utilização, são disponibilizados aplicativos com interface gráfica (GUI). Por exemplo, para o MySQL Server, pode-se usar o MySQL Workbench, e para o Postgresql Server, o pgAdmin. Existem também aplicativos "multi-SGBD", como DBeaver e HeidiSQL, que se conectam a diferentes tipos de servidores.

### Transações e Integridade dos Dados 🔒

Os dados em um banco de dados precisam ser precisos e consistentes, respeitando as regras de negócio. Por exemplo, um saldo deve corresponder à soma de entradas e saídas, e uma transferência bancária precisa registrar corretamente os valores de crédito e débito.

Para garantir essa consistência, especialmente em operações com múltiplas etapas, os bancos de dados utilizam **transações**. Uma transação é um conjunto de operações que devem ser executadas como uma única unidade indivisível.

#### Princípios ACID

Toda transação confiável deve seguir os princípios ACID:
* **Atomicidade** ⚛️: A transação é "tudo ou nada". Se um erro ocorrer, todas as operações são desfeitas.
* **Consistência** ✅: A transação deve levar o banco de dados de um estado consistente para outro, sem violar as regras de integridade.
* **Isolamento** 🛡️: As operações de uma transação em andamento não devem ser visíveis para outras transações até que ela seja concluída.
* **Durabilidade** 💪: Uma vez que a transação é concluída (commit), suas alterações são permanentes e não podem ser perdidas.

Para controlar uma transação, utilizam-se os seguintes comandos:
* **COMMIT** 👍: Confirma a transação, tornando suas alterações permanentes.
* **ROLLBACK** ↩️: Desfaz todas as operações da transação.

### Áreas de Atuação 🧑‍💻

Existem diversas áreas de atuação em bancos de dados, que podem ser divididas em:
* **Desenvolvimento:** Envolve a modelagem dos dados, a criação de consultas (SQL DQL) e a modificação de dados (SQL DML).
* **Especialista / DBA (Administrador de Banco de Dados):** Foca na criação e atualização da estrutura do banco de dados (SQL DDL), otimizações, segurança e administração geral do SGBD.
* **Análise de Dados** 📊: Abrange áreas como data science e business intelligence, que utilizam os dados para extrair informações e estatísticas valiosas.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
