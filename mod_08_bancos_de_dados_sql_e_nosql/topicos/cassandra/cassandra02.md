
````markdown
# Atividade 2: Evidências das Criações 📜


## Descrição da Atividade 📋

O objetivo desta atividade é demonstrar a criação e gerenciamento de um banco de dados Cassandra utilizando Docker. Serão capturadas pelo menos 3 telas das seguintes ações:
* Sua conta criada
* Criação do BD e Keyspace
* Tela CQL Console com comando DESCRIBE executado

---

## Criar e Gerenciar um Keyspace e Tabela no Cassandra usando Docker 🐳

### 1. Preparação do Ambiente 🛠️

**1. Verifique a versão do Docker:**

```bash
docker --version
````

**Saída:**

```
:/opt/cassandra$ docker --version
 version 28.0.1, build 068a01e
 :/opt/cassandra$
```

**2. Baixe a imagem do Cassandra:**

```bash
docker pull Cassandra
```

**Saída:**

```
/opt/cassandra$ docker pull cassandra
efault tag: latest
Pulling from library/cassandra
sha256:1e6dcf071026032c26c79b3eca115f27566952c71c155de91faa3465dd02ee14
Image is up to date for cassandra: latest
io/library/cassandra: latest
/opt/cassandra$
```

**3. Crie um diretório local para persistência dos dados:**

```bash
sudo mkdir -p /opt/cassandra
```

**4. Inicie o container Cassandra: 🚀**
A imagem abaixo mostra o container 'cassandra' em execução no Docker Desktop.

| Name | Container ID | Image | Port(s) | CPU (%) | Last sta |
| :--- | :--- | :--- | :--- | :--- | :--- |
| cassandra | fe73ade7a253 | cassandra | 232906-2906 | 1.3% | 18 minu |

**Comando para iniciar o container:**

```bash
docker run --name cassandra -p 9042:9042 -v /opt/cassandra:/var/lib/cassandra -d cassandra
```

**5. Acesse o container:**

```bash
docker exec -it cassandra bash
```

### 2\. Conectando ao Cassandra via CQLSH 🔌

**1. Entre no 'cqlsh' (shell interativo do Cassandra):**

```bash
cqlsh
```

**Saída:**

```
root@fe73ade7a253:/# cqlsh
Connected to Test Cluster at 127.0.0.1:9042
[cqlsh 6.2.0 | Cassandra 5.0.4 | CQL spec 3.4.7 | Native protocol v5]
Use HELP for help.
cqlsh>
```

### 3\. Criando o Keyspace 🔑

**1. Comando para criar o Keyspace:**

```sql
CREATE KEYSPACE minhakeyspaceCetec
WITH replication = {
  'class': 'SimpleStrategy',
  'replication_factor': 1
};
```

  * `SimpleStrategy` é uma boa escolha para ambientes de desenvolvimento.
  * `replication_factor: 1` indica que há uma cópia dos dados no cluster.

**2. Verifique se o Keyspace foi criado:**

```sql
DESCRIBE KEYSPACES;
```

**Saída:**

```
cqlsh> DESCRIBE KEYSPACES;
minhakeyspacecetec system_auth
system
system_schema system_views
system_distributed system_traces system_virtual_schema
```

### 4\. Usando o Keyspace Criado 👉

**1. Comando para usar o Keyspace:**

```sql
USE minhakeyspaceCetec;
```

**Saída:**

```
cqlsh> USE minhakeyspaceCetec;
cqlsh:minhakeyspacecetec>
```

### 5\. Criando a Tabela `alunos` 📝

**1. Comando para criar a tabela `alunos`:**

```sql
CREATE TABLE alunos (
    id UUID PRIMARY KEY,
    nome TEXT,
    email TEXT,
    idade INT,
    curso TEXT
);
```

  * `id: UUID` (identificador único).
  * `nome, email, idade, curso:` campos típicos para cadastro de alunos.

### 6\. Inserindo Dados na Tabela ➕

**1. Comando para inserir um aluno:**

```sql
INSERT INTO alunos (id, nome, email, idade, curso)
VALUES (uuid(), 'João Silva', 'joao.silva@cetec.edu', 21, 'Engenharia de Software');
```

  * Usa-se o `uuid()` para gerar um identificador único para o aluno João Silva.

### 7\. Consultando os Dados 🔍

**1. Comando para consultar todos os alunos:**

```sql
SELECT * FROM alunos;
```

**Saída:**

```
cqlsh:minhakeyspacecetec> SELECT * FROM alunos;

 Ld                                   | curso                  | email                | Idadiele
--------------------------------------+------------------------+----------------------+-----------------
 2d364e15-86b8-4754-879f-f991f8cb4f8B | Engenharia de Software | joao.silva@cetec.edu | 21 João Silva
```

-----

## Conclusão ✅

Com esses passos, você aprendeu a:

1.  Configurar o Cassandra no Docker.
2.  Criar um keyspace e uma tabela no Cassandra.
3.  Inserir e consultar dados na tabela de alunos.

<!-- end list -->

```
```

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
