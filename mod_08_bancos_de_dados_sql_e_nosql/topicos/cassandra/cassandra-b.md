### **Tutorial: Como Criar e Gerenciar um Keyspace e Tabela no Cassandra usando Docker**

---

#### **1. Preparação do Ambiente**

Antes de tudo, você precisa ter o Docker configurado e o Cassandra rodando em um container. Aqui estão os passos básicos:

1. **Verifique a versão do Docker**:
    
    ```bash
    docker --version
    ```
    
2. **Baixe a imagem do Cassandra**:
    
    ```bash
    docker pull cassandra
    ```
    
3. **Crie um diretório local para persistência dos dados**:
    
    ```bash
    sudo mkdir -p /opt/cassandra
    ```
    
4. **Inicie o container Cassandra**:
    
    ```bash
    docker run --name cassandra -p 9042:9042 -v /opt/cassandra:/var/lib/cassandra -d cassandra
    ```
    
5. **Acesse o container**:
    
    ```bash
    docker exec -it cassandra bash
    ```
    

---

#### **2. Conectando ao Cassandra via CQLSH**

1. **Entre no `cqlsh`** (shell interativo do Cassandra):
    
    ```bash
    cqlsh
    ```
    
    Isso abrirá o prompt do Cassandra, onde você pode executar comandos SQL para interagir com o banco de dados.
    

---

#### **3. Criando o Keyspace**

Agora, vamos criar o **keyspace**, que é como um banco de dados no Cassandra.

1. **Comando para criar o Keyspace**:
    
    ```sql
    CREATE KEYSPACE minhakeyspaceCetec
    WITH replication = {
      'class': 'SimpleStrategy',
      'replication_factor': 1
    };
    ```
    
    - **SimpleStrategy** é uma boa escolha para ambientes de desenvolvimento.
        
    - **replication_factor: 1** indica que há uma cópia dos dados no cluster.
        
2. **Verifique se o Keyspace foi criado**:
    
    ```sql
    DESCRIBE KEYSPACES;
    ```
    

---

#### **4. Usando o Keyspace Criado**

Agora que o keyspace está criado, precisamos definir que iremos utilizá-lo.

1. **Comando para usar o Keyspace**:
    
    ```sql
    USE minhakeyspaceCetec;
    ```
    

---

#### **5. Criando a Tabela `alunos`**

Vamos criar uma tabela para cadastrar os alunos, com os seguintes campos: `id`, `nome`, `email`, `idade`, e `curso`.

1. **Comando para criar a tabela `alunos`**:
    
    ```sql
    CREATE TABLE alunos (
        id UUID PRIMARY KEY,
        nome TEXT,
        email TEXT,
        idade INT,
        curso TEXT
    );
    ```
    
    - **id**: `UUID` (identificador único) para garantir que cada aluno tenha um ID único.
        
    - **nome, email, idade, curso**: campos típicos para cadastro de alunos.
        

---

#### **6. Inserindo Dados na Tabela**

Agora que a tabela está pronta, podemos inserir alguns dados de exemplo.

1. **Comando para inserir um aluno**:
    
    ```sql
    INSERT INTO alunos (id, nome, email, idade, curso)
    VALUES (uuid(), 'João Silva', 'joao.silva@cetec.edu', 21, 'Engenharia de Software');
    ```
    
    - Usamos o `uuid()` para gerar um identificador único para o aluno João Silva.
        

---

#### **7. Consultando os Dados**

Por fim, vamos consultar todos os alunos cadastrados na tabela.

1. **Comando para consultar todos os alunos**:
    
    ```sql
    SELECT * FROM alunos;
    ```
    

---

### **Conclusão**

Com esses passos, você aprendeu a:

1. Configurar o Cassandra no Docker.
    
2. Criar um keyspace e uma tabela no Cassandra.
    
3. Inserir e consultar dados na tabela de alunos.
    

---
### **Dicas Finais**
- Sempre verifique os logs do container Cassandra para diagnosticar problemas.
- Use o comando `docker logs cassandra` para ver os logs do container.
- Para parar o container, use `docker stop cassandra`.
- Para remover o container, use `docker rm cassandra` após parar.
- Considere usar ferramentas como DataStax Studio para uma interface gráfica mais amigável ao trabalhar com Cassandra.


---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
