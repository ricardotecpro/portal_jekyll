---
layout: default
title: 05 NORMALIZACAO
---

A Normalização ✨ é um processo formal e passo a passo para adequar as tabelas de um banco de dados a um conjunto de regras, conhecidas como **Formas Normais**. O objetivo é simplificar a estrutura das tabelas para criar um esquema de banco de dados bem projetado.

A principal importância da normalização é evitar problemas críticos como:
* **Redundância** 🔁: Repetição desnecessária de dados.
* **Inconsistência** 😵: Quando a mesma informação possui valores diferentes em locais distintos.
* **Anomalias de Dados** ⚠️: Erros que podem ocorrer durante a inserção, alteração ou exclusão de informações.

### Anomalias de Dados

Esquemas de tabelas mal projetados podem sofrer com três tipos de anomalias:

1.  **Anomalia de Inserção** 📥: Ocorre quando não é possível adicionar um registro sobre uma entidade sem que ele esteja associado a outra. Por exemplo, não seria possível cadastrar um novo produto se ele ainda não tiver sido vendido para nenhum cliente.
2.  **Anomalia de Alteração (Atualização)** 📝: Acontece quando a alteração de um dado redundante exige a atualização de múltiplos registros. Se o nome de um produto que aparece em várias vendas for alterado, seria necessário modificar todas as linhas correspondentes, correndo o risco de deixar alguma inconsistente.
3.  **Anomalia de Exclusão** 🗑️: Ocorre quando a exclusão de um registro leva à perda de outras informações que não deveriam ser eliminadas. Por exemplo, se o único cliente que comprou um determinado produto for removido, as informações sobre aquele produto também seriam perdidas.

A forma correta de evitar essas anomalias é através da definição de um bom modelo conceitual e sua correta transformação para o modelo lógico. Para bancos de dados já existentes, aplica-se o processo de normalização.

### As Formas Normais (FN) 📜

As formas normais são um conjunto progressivo de regras. As três primeiras são as mais essenciais para a maioria dos sistemas.

#### Primeira Forma Normal (1FN) 1️⃣

A 1FN é a regra mais básica e é considerada parte da própria definição de uma tabela relacional.

* **Regra:** Todos os atributos (colunas) de uma tabela devem ser **atômicos**.
* **Isso significa que:**
    * **Atributos Compostos são proibidos:** Um campo não pode conter múltiplos valores que poderiam ser divididos (ex: "Uberlândia, MG, Brasil" deve ser separado em colunas `cidade`, `estado`, `pais`).
    * **Atributos Multivalorados são proibidos:** Um campo não pode conter uma lista de valores (ex: um único campo `telefone` com vários números). Para resolver isso, cria-se uma nova tabela para armazenar os múltiplos valores (ex: uma tabela `telefone_cliente`).
    * **Relações Aninhadas são proibidas:** Uma coluna não pode conter outra relação (uma tabela dentro de outra). Nesses casos, a relação aninhada deve ser extraída para uma nova tabela.

#### Dependência Funcional 🔗

Para entender a 2FN e a 3FN, é crucial o conceito de **dependência funcional**. Um atributo Y é funcionalmente dependente de um atributo X se, para cada valor de X, existe exatamente um único valor de Y. A notação é `X -> Y` (lê-se "X determina Y"). Por exemplo, `CPF -> nomeC`, pois um CPF determina um único nome de cliente.

#### Segunda Forma Normal (2FN) 2️⃣

A 2FN visa eliminar dependências parciais em chaves primárias compostas.

* **Regras:**
    1.  A tabela deve estar na 1FN.
    2.  Todos os atributos não-chave devem ser **totalmente dependentes** de toda a chave primária.
* **Em outras palavras:** Se a chave primária for composta por mais de uma coluna, nenhum atributo pode depender de apenas uma parte dessa chave. Caso isso ocorra, a dependência parcial deve ser extraída para uma nova tabela.

#### Terceira Forma Normal (3FN) 3️⃣

A 3FN visa eliminar dependências transitivas.

* **Regras:**
    1.  A tabela deve estar na 2FN.
    2.  Não deve existir dependência funcional entre atributos não-chave.
* **Em outras palavras:** Nenhum atributo que não faz parte da chave primária pode depender de outro atributo que também não faz parte da chave primária. Um atributo não-chave deve depender exclusivamente da chave. Se houver uma dependência transitiva (ex: `CPF -> codDepto` e `codDepto -> nomeDepto`), a dependência deve ser movida para uma nova tabela.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

