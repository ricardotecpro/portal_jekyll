## SQL (Structured Query Language) 📜 é a linguagem padrão para acessar e manipular bancos de dados. 

Originada da linguagem SEQUEL da IBM em 1973, SQL é hoje um padrão ANSI. A linguagem é dividida em sublinguagens, cada uma com um propósito específico.

### Data Definition Language (DDL) - Linguagem de Definição de Dados 🏗️

A DDL é usada para definir e gerenciar a estrutura (esquema) do banco de dados e seus objetos.

* **`CREATE`** ✨: Cria objetos no banco de dados, como tabelas.
    * **Tipos de Dados:** Ao criar tabelas, é preciso definir o tipo de cada coluna. Alguns tipos comuns no Postgres são:
        * **Texto:** `CHAR(n)` (tamanho fixo), `VARCHAR(n)` (tamanho variável), `TEXT` (variável).
        * **Numéricos:** `INTEGER` (4 bytes), `SERIAL` (similar ao `INTEGER`, mas autoincremental, ideal para chaves primárias).
        * **Data e Hora:** `DATE` (data), `TIMESTAMP` (data e hora).
    * **Restrições de Integridade (Constraints):**
        * `NOT NULL`: Garante que a coluna não pode ter valores nulos.
        * `DEFAULT`: Associa um valor padrão a uma coluna caso nenhum seja especificado.
        * `CHECK`: Especifica uma condição que deve ser verdadeira para todos os registros.
        * `PRIMARY KEY`: Define a chave primária da tabela.
        * `UNIQUE`: Impede valores duplicados em uma coluna.
        * `FOREIGN KEY`: Define uma chave estrangeira para estabelecer um relacionamento com outra tabela.
* **`ALTER`** 🔧: Modifica a estrutura de um objeto existente, como adicionar, remover ou renomear uma coluna em uma tabela.
* **`DROP`** 🗑️: Remove um objeto do banco de dados, como uma tabela ou o próprio banco de dados.

### Data Manipulation Language (DML) - Linguagem de Manipulação de Dados ✍️

A DML é usada para gerenciar os dados armazenados nas tabelas.

* **`INSERT`** 📥: Adiciona novos registros (linhas) a uma tabela.
* **`UPDATE`** 📝: Modifica registros existentes em uma tabela.
* **`DELETE`** ❌: Remove registros de uma tabela.
* **`SELECT`** 🔍: Consulta e recupera dados de uma ou mais tabelas.

### Data Control Language (DCL) - Linguagem de Controle de Dados 🛡️

A DCL é usada para controlar as permissões de acesso dos usuários aos dados.

* **`GRANT`** ✅: Concede privilégios de acesso a um usuário.
* **`REVOKE`** 🚫: Retira privilégios de acesso de um usuário.

### Transaction Control Language (TCL) - Linguagem de Controle de Transação 🔄

A TCL gerencia as transações no banco de dados, agrupando comandos DML em unidades lógicas de trabalho.

* **`COMMIT`** 👍: Salva permanentemente todas as alterações feitas na transação atual.
* **`ROLLBACK`** ↩️: Desfaz todas as alterações feitas na transação atual.
* **`SAVEPOINT`** 📍: Cria um ponto de controle dentro de uma transação para o qual se pode reverter posteriormente.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
