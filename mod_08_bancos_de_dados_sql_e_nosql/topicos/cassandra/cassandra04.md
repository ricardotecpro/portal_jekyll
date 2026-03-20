````markdown
# Atividade 4 Final 📜

## Descrição da Atividade 📝

Executar as tarefas a seguir, criando um documento com os comandos e prints de tela de cada um.

1.  Crie um novo BD com uma keyspace qualquer no DataStax Astra Cassandra.
2.  Crie pelo menos 3 tabelas, que contenham uma chave primária.
3.  Crie um índice secundário em qualquer coluna para cada tabela.
4.  Inclua pelo menos 5 linhas (registros) em cada tabela.
5.  Liste todas as linhas (registros) criadas em cada tabela.
6.  Conte as linhas (registros) de cada tabela.
7.  Faça pelo menos 3 buscas diferentes em cada tabela.
8.  Altere pelo menos duas linhas (registros) em cada tabela.
9.  Liste as linhas (registros) mostrando as alterações feitas.
10. Apague pelo menos um registro de cada tabela.
11. Liste novamente as linhas (registros) de cada tabela, indicando que ocorreram as exclusões.

---

### 1) Criar Keyspace 🔑

```sql
CREATE KEYSPACE minhakeyspaceCetec3
WITH replication = {
  'class': 'SimpleStrategy',
  'replication_factor': 1
};

USE minhakeyspaceCetec3;
````

### 2\) Criar Tabelas 🏗️

```sql
CREATE TABLE alunos (
    id UUID PRIMARY KEY,
    nome TEXT,
    email TEXT,
    idade INT
);

CREATE TABLE professores (
    id UUID PRIMARY KEY,
    nome TEXT,
    especialidade TEXT
);

CREATE TABLE unidade (
    id UUID PRIMARY KEY,
    nome TEXT,
    cidade TEXT
);
```

### 3\) Criar Índices Secundários 🔍

```sql
CREATE INDEX ON alunos (email);
CREATE INDEX ON professores (especialidade);
CREATE INDEX ON unidade (cidade);
```

### 4\) Inserir Registros ➕

**Alunos:**

```sql
INSERT INTO alunos (id, nome, email, idade) VALUES (uuid(), 'Ana', 'ana@cetec.edu', 20);
INSERT INTO alunos (id, nome, email, idade) VALUES (uuid(), 'Bruno', 'bruno@cetec.edu', 22);
INSERT INTO alunos (id, nome, email, idade) VALUES (uuid(), 'Carlos', 'carlos@cetec.edu', 19);
INSERT INTO alunos (id, nome, email, idade) VALUES (uuid(), 'Diana', 'diana@cetec.edu', 23);
INSERT INTO alunos (id, nome, email, idade) VALUES (uuid(), 'Eduardo', 'eduardo@cetec.edu', 21);
```

**Professores:**

```sql
INSERT INTO professores (id, nome, especialidade) VALUES (uuid(), 'Prof. João', 'Matemática');
INSERT INTO professores (id, nome, especialidade) VALUES (uuid(), 'Prof. Luana', 'Fisica');
INSERT INTO professores (id, nome, especialidade) VALUES (uuid(), 'Prof. Marcos', 'Química');
INSERT INTO professores (id, nome, especialidade) VALUES (uuid(), 'Prof. Paula', 'Biologia');
INSERT INTO professores (id, nome, especialidade) VALUES (uuid(), 'Prof. Rafael', 'História');
```

**Unidades:**

```sql
INSERT INTO unidade (id, nome, cidade) VALUES (uuid(), 'Unidade Central', 'Lins');
INSERT INTO unidade (id, nome, cidade) VALUES (uuid(), 'Unidade Norte', 'Bauru');
INSERT INTO unidade (id, nome, cidade) VALUES (uuid(), 'Unidade Sul', 'Marília');
INSERT INTO unidade (id, nome, cidade) VALUES (uuid(), 'Unidade Leste', 'Botucatu');
INSERT INTO unidade (id, nome, cidade) VALUES (uuid(), 'Unidade Oeste', 'Assis');
```

### 5\) Listar Registros 📋

**Alunos:**

```sql
SELECT * FROM alunos;
```

| id | email | idade | nome |
|---|---|---|---|
| 616792c1-8460-444e-9ee4-21cdebfb7993 | bruno@cetec.edu | 22 | Bruno |
| ef8612b4-93c1-4405-bd99-046580820710 | eduardo@cetec.edu | 21 | Eduardo |
| 8eab1eb0-3d79-4fd8-b852-ec3ba1fec2d1 | carlos@cetec.edu | 19 | Carlos |
| 50a0b613-7f95-43ca-905c-8c1c68c1389c | ana@cetec.edu | 20 | Ana |
| bc975dfe-cf5f-45f7-9de2-e4f331502a8e | diana@cetec.edu | 23 | Diana |

**Professores:**

```sql
SELECT * FROM professores;
```

| id | especialidade | nome |
|---|---|---|
| de252ed3-06df-40e4-8535-0c06f911bd24 | Biologia | Prof. Paula |
| 801f6be5-d41b-4e13-abc5-b6a35a250069 | História | Prof. Rafael |
| e9a3031f-f012-437f-83c6-162c04816ec7 | Matemática | Prof. João |
| 8fc26bff-2c65-43ea-94a5-51c7d21d6b65 | Física | Prof. Luana |
| 68c4daad-5dc3-4014-816b-42062da29c32 | Química | Prof. Marcos |

### 6\) Contar Registros 🔢

```sql
SELECT COUNT(*) FROM alunos;
SELECT COUNT(*) FROM professores;
SELECT COUNT(*) FROM unidade;
```

Para todas as tabelas, o resultado foi:

```
 count
-------
     5

(1 rows)
```

### 7\) Buscar Registros 🔎

```sql
SELECT * FROM alunos WHERE email = 'ana@cetec.edu';
SELECT * FROM professores WHERE especialidade = 'Fisica';
SELECT * FROM unidade WHERE cidade = 'Lins';
```

### 8\) Alterar Registros 🔄

```sql
-- Alterando idade de Bruno para 25
UPDATE alunos SET idade = 25 WHERE id = 616792c1-84b0-444e-9ee4-21cdebfb7993;

-- Alterando idade de Carlos para 18
UPDATE alunos SET idade = 18 WHERE id = 8eab1eb0-3d79-4fd8-b852-ec3ba1fec2d1;

-- Alterando especialidade da Prof. Luana
UPDATE professores SET especialidade = 'Fisica Avançada' WHERE id = 8fc26bff-2c65-43ea-94a5-51c7d21d6b65;

-- Alterando especialidade do Prof. Marcos
UPDATE professores SET especialidade = 'Química Orgânica' WHERE id = 68c4daad-5dc3-4014-816b-42062da29c32;
```

### 9\) Listar Alterações ✨

**Alunos (idades de Bruno e Carlos alteradas):**

```sql
SELECT * FROM alunos;
```

| id | email | idade | nome |
|---|---|---|---|
| 616792c1-84b8-444e-9ee4-21cdebfb7993 | bruno@cetec.edu | **25** | Bruno |
| ef8612b4-93c1-4405-bd99-046580a2d710 | eduardo@cetec.edu | 21 | Eduardo |
| 8eab1eb0-3d79-4fd8-b852-ec3ba1fec2d1 | carlos@cetec.edu | **18** | Carlos |
| 50a0b613-7f95-43ca-905c-8c1c68c1389c | ana@cetec.edu | 20 | Ana |
| bc975dfe-cf5f-45f7-9de2-e4f331502a8e | diana@cetec.edu | 23 | Diana |

**Professores (especialidades alteradas):**

```sql
SELECT * FROM professores;
```

| id | especialidade | nome |
|---|---|---|
| de252ed3-06df-40e4-8535-0c06f911bd24 | Biologia | Prof. Paula |
| 801f6be5-d41b-4e13-abc5-b6a35a250069 | História | Prof. Rafael |
| e9a3031f-f012-437f-83c6-162c04816ec7 | Matemática | Prof. João |
| 8fc26bff-2c65-43ea-94a5-51c7d21d6b65 | **Física Avançada** | Prof. Luana |
| 68c4daad-5dc3-4014-816b-42062da29c32 | **Química Orgânica**| Prof. Marcos |

### 10\) Apagar Registros 🗑️

```sql
-- Apagando o registro de Bruno (usando o id da listagem anterior)
DELETE FROM alunos WHERE id = 616792c1-84b0-444e-9ee4-21cdebfb7993;

-- Apagando o registro do Prof. Rafael
DELETE FROM professores WHERE id = 801f6be5-d41b-4e13-abc5-b6a35a2500b9;

-- Apagando o registro da Unidade Leste
DELETE FROM unidade WHERE id = a0c2ea99-3d09-480f-8f6f-c94143ca505f;
```

### 11\) Listar Após Exclusões 📉

**Alunos (4 registros restantes):**

```sql
SELECT * FROM alunos;
```

| id | email | idade | nome |
|---|---|---|---|
| ef8612b4-93c1-4406-bd99-046580a2d710 | eduardo@cetec.edu | 21 | Eduardo |
| 8eab1eb0-3079-4fd8-b852-ec3ba1fec2d1 | carlos@cetec.edu | 18 | Carlos |
| 50a0b613-7f95-43ca-905c-8c1c68c1389c | ana@cetec.edu | 20 | Ana |
| bc975dfe-cf5f-45f7-9de2-e4f331502a8e | diana@cetec.edu | 23 | Diana |

**Professores (4 registros restantes):**

```sql
SELECT * FROM professores;
```

| id | especialidade | nome |
|---|---|---|
| de252ed3-06df-40e4-8535-0c06f911bd24 | Biologia | Prof. Paula |
| e9a3031f-f012-437f-83c6-162c04816ec7 | Matemática | Prof. João |
| 8fc26bff-2c65-43ea-94a5-51c7d21d6b65 | Física Avançada | Prof. Luana |
| 68c4daad-5dc3-4014-816b-42062da29c32 | Química Orgânica | Prof. Marcos |

**Unidades (4 registros restantes):**

```sql
SELECT * FROM unidade;
```

| id | cidade | nome |
|---|---|---|
| cb953940-6cf5-4320-b5e7-78443d88fac1 | Lençóis Paulista | Unidade Sul |
| 26946074-839f-434c-9a8a-6c19d788f149 | Bauru | Unidade Norte |
| 2df175d2-b31d-407b-887f-e46fc8357eae | Ourinhos | Unidade Oeste |
| ea8a08c5-a129-425c-93e9-4048d48964ec | Lins | Unidade Central |

```
```


---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
