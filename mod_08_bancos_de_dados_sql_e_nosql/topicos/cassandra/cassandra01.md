### **Instalando o Cassandra com Docker 🚀**

Este tutorial detalha o processo de instalação e configuração de um ambiente Cassandra de nó único usando Docker, ideal para desenvolvimento e estudos.

#### **Passo 1: Verificar a Instalação do Docker 🧐**

Antes de começar, é crucial garantir que o Docker esteja instalado e em execução no seu sistema.

**Comando:**

```bash
docker --version
```

Este comando exibirá a versão instalada do Docker, confirmando que o ambiente está pronto para os próximos passos.

#### **Passo 2: Baixar a Imagem Oficial do Cassandra 📥**

O próximo passo é baixar a imagem mais recente do Apache Cassandra do Docker Hub, que é o registro oficial de imagens de contêineres.

**Comando:**

```bash
docker pull cassandra
```

#### **Passo 3: Listar Imagens (Verificação) ✅**

Para confirmar que a imagem foi baixada com sucesso, você pode listar todas as imagens Docker disponíveis localmente.

**Comando:**

```bash
docker images
```

Você deverá ver `cassandra` na lista de repositórios, junto com sua tag (geralmente `latest`).

#### **Passo 4: Criar um Diretório para Persistência de Dados 📂**

Para garantir que os dados do seu banco de dados não sejam perdidos quando o contêiner for parado ou removido, é uma boa prática criar um diretório local e mapeá-lo para o diretório de dados dentro do contêiner.

**Comando:**

```bash
sudo mkdir -p /opt/cassandra
```

  * **Observação:** O uso de `sudo` pode ser necessário dependendo das permissões do seu sistema. O `-p` garante que o diretório seja criado mesmo que os diretórios pais não existam.

#### **Passo 5: Iniciar o Contêiner Cassandra ▶️**

Este é o passo mais importante, onde o contêiner Cassandra é efetivamente criado e executado.

**Comando:**

```bash
docker run --name cassandra -p 9042:9042 -v /opt/cassandra:/var/lib/cassandra -d cassandra
```

**Análise dos parâmetros:**

  * `--name cassandra`: Define um nome fácil de lembrar para o seu contêiner.
  * `-p 9042:9042`: Mapeia a porta 9042 do seu computador (host) para a porta 9042 do contêiner. Esta é a porta padrão que o Cassandra usa para a comunicação via CQL (Cassandra Query Language).
  * `-v /opt/cassandra:/var/lib/cassandra`: Este é o passo crucial para a persistência. Ele "monta" o diretório local `/opt/cassandra` no diretório `/var/lib/cassandra` dentro do contêiner. O diretório `/var/lib/cassandra` é o local padrão onde a imagem oficial do Cassandra armazena seus arquivos de dados.
  * `-d`: Executa o contêiner em modo "detached" (desanexado), ou seja, ele rodará em segundo plano.
  * `cassandra`: Especifica a imagem a ser usada para criar o contêiner.

#### **Passo 6: Acessar o Contêiner 💻**

Uma vez que o contêiner está em execução, você pode acessar seu shell para executar comandos administrativos.

**Comando:**

```bash
docker exec -it cassandra bash
```

  * `exec`: Executa um comando dentro de um contêiner em execução.
  * `-it`: Aloca um pseudo-TTY interativo, permitindo que você interaja com o shell do contêiner.
  * `cassandra`: O nome do contêiner a ser acessado.
  * `bash`: O comando a ser executado (neste caso, o shell Bash).

#### **Passo 7: Utilizar o Console CQL (cqlsh) ⚡**

Dentro do contêiner, você pode agora iniciar o `cqlsh`, o shell de linha de comando para interagir com o Cassandra.

**Comando:**

```bash
cqlsh
```

Se a conexão for bem-sucedida, o prompt mudará para `cqlsh>`.

#### **Passo 8: Explorar e Preparar o Banco de Dados 🗺️**

Agora você pode executar comandos CQL para gerenciar o banco de dados.

**1. Descrever os Keyspaces Existentes:**
Um keyspace no Cassandra é análogo a um "schema" ou "banco de dados" em sistemas de bancos de dados relacionais.

**Comando:**

```cql
DESC KEYSPACES;
```

Este comando listará todos os keyspaces padrão que vêm com a instalação do Cassandra, como `system_auth`, `system_schema`, entre outros.

**2. Criar e Usar um Novo Keyspace:**
Para organizar seus dados, você deve criar seu próprio keyspace.

**Comando para criar:**

```cql
CREATE KEYSPACE minhakeyspace WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};
```

  * `SimpleStrategy`: Adequado para um cluster de um único nó.
  * `replication_factor: 1`: Indica que haverá apenas uma cópia dos dados, o que é apropriado para um ambiente de desenvolvimento local.

**Comando para usar:**

```cql
USE minhakeyspace;
```

Após executar este comando, o prompt mudará para `cqlsh:minhakeyspace>`, indicando que todos os comandos subsequentes (como `CREATE TABLE`, `INSERT`, etc.) serão executados dentro deste keyspace.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
