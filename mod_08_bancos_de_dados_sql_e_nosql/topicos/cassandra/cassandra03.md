````markdown
# Atividade 3: Evidências do Tutorial 📜


## Descrição da Atividade 📋

Este tutorial demonstra as operações básicas de CRUD (Create, Read, Update, Delete) em uma tabela do Cassandra usando a Linguagem de Consulta Cassandra (CQL).

---

### CREATE KEYSPACE 🔑

Cria um novo keyspace para armazenar os dados.

```sql
CREATE KEYSPACE minhakeyspaceCetec2
WITH replication = {
  'class': 'SimpleStrategy',
  'replication_factor': 1
};
````

### USE KEYSPACE 👉

Seleciona o keyspace recém-criado para ser utilizado nos comandos seguintes.

```sql
USE minhakeyspaceCetec2;
```

### CREATE TABLE 📝

Cria a tabela `alunos` dentro do keyspace `minhakeyspaceCetec2`.

```sql
CREATE TABLE alunos (
    id UUID PRIMARY KEY,
    nome TEXT,
    email TEXT,
    idade INT,
    curso TEXT
);
```

### INSERT ➕

Insere um novo registro na tabela `alunos`.

```sql
INSERT INTO alunos (id, nome, email, idade, curso)
VALUES (uuid(), 'Maria Silva', 'maria.silva@cetec.edu', 23, 'Analise de Sistema');
```

### SELECT 🔍

Consulta e exibe todos os registros da tabela `alunos`.

```sql
SELECT * FROM alunos;
```

**Saída:**

```
 id                                   | curso              | email                 | idade | nome
--------------------------------------+--------------------+-----------------------+-------+-------------
 a6e8dc1c-b2ab-439d-86ed-be04f83436f5 | Analise de Sistema | maria.silva@cetec.edu |    23 | Maria Silva

(1 rows)
```

### UPDATE 🔄

Atualiza a idade do registro que corresponde ao `id` especificado.

```sql
UPDATE alunos
SET idade = 31
WHERE id = a6e8dc1c-b2ab-439d-86ed-be04f83436f5;
```

**Saída após verificação:**

```
 id                                   | curso              | email                 | idade | nome
--------------------------------------+--------------------+-----------------------+-------+-------------
 a6e8dc1c-b2ab-439d-86ed-be04f83436f5 | Analise de Sistema | maria.silva@cetec.edu |    31 | Maria Silva

(1 rows)
```

### DELETE 🗑️

Remove um registro da tabela `alunos` baseado no seu `id`.

```sql
DELETE FROM alunos
WHERE id = a6e8dc1c-b2ab-439d-86ed-be04f83436f5;
```


---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
