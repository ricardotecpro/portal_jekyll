---
layout: default
title: O Modelo Lógico Relacional
---

## O Modelo Lógico Relacional 

É um modelo de dados de nível de design, proposto por Edgar F. Codd em 1970, que se tornou a base para a maioria dos bancos de dados modernos.

### Fundamentos do Modelo Relacional 🧱

No modelo relacional, os dados são organizados em **tabelas**, tecnicamente chamadas de **relações**.

* **Tabelas** 🗂️: São um conjunto não ordenado de registros exclusivos, compostas por linhas e colunas.
* **Registros (Linhas)** ➖: Cada registro em uma tabela corresponde a uma única ocorrência de um item.
* **Campos (Colunas ou Atributos)**  Cada coluna representa um atributo dos registros. O valor de um campo deve ser simples (não composto) e monovalorado (não pode conter múltiplos valores).
* **Esquema de Dados** 🗺️: É a estrutura completa de um banco de dados, composta por tabelas, relacionamentos e regras (constraints).

### Chaves e Integridade 🔑

As chaves são fundamentais para identificar registros e estabelecer relacionamentos entre tabelas.

* **Chave Candidata:** É uma coluna ou combinação de colunas que identifica unicamente um registro em uma tabela. Para ser uma chave, ela deve ser:
    * **Única:** O valor não pode se repetir na tabela.
    * **Obrigatória:** Não pode ter valor nulo.
    * **Mínima:** Não deve existir outra chave candidata contida nela.
* **Chave Primária (Primary Key - PK):** É a chave candidata escolhida como o identificador "padrão" de um registro na tabela.
* **Chaves Alternativas:** São as chaves candidatas que não foram escolhidas como chave primária.
* **Chave Estrangeira (Foreign Key - FK):** É uma coluna (ou combinação de colunas) em uma tabela que corresponde à chave primária de outra tabela. Ela serve para criar relacionamentos entre as tabelas.
* **Integridade Referencial** ✅: É a regra que garante a consistência dos dados de uma chave estrangeira. Ela estipula que, se um valor existe em uma chave estrangeira, o valor correspondente deve obrigatoriamente existir na chave primária da tabela referenciada.

### Conversão do Modelo Conceitual para o Relacional (MC → MR) ✨

O processo de transformar um Modelo Conceitual (MC) em um Modelo Relacional (MR) segue um conjunto de regras bem definidas:

1.  **Conceitos ou Entidades:** Cada conceito do MC se torna uma tabela no MR.

2.  **Relacionamento 1-para-N (Um-para-Muitos) 🔗:** A chave primária da tabela do lado "1" é adicionada como chave estrangeira na tabela do lado "N" (muitos).

3.  **Relacionamento 1-para-1 (Um-para-Um) 🤝:** A chave estrangeira pode ser colocada em qualquer uma das duas tabelas para referenciar a outra. A escolha geralmente depende da obrigatoriedade do relacionamento.

4.  **Relacionamento N-para-N (Muitos-para-Muitos) 🔄:** Este tipo de relacionamento exige a criação de uma nova tabela, chamada de **tabela associativa**. Esta nova tabela conterá, no mínimo, duas chaves estrangeiras, cada uma referenciando a chave primária de uma das tabelas originais.

5.  **Classe de Associação em Relacionamento N-N:** A classe de associação do MC se transforma na tabela associativa no MR. Os atributos da classe de associação se tornam colunas nesta nova tabela.

6.  **Autorrelacionamento:**
    * **1-para-N:** A própria tabela recebe uma chave estrangeira que referencia sua chave primária (ex: uma tabela `tb_item_menu` com um campo `father_id` que aponta para o `id` da mesma tabela).
    * **N-para-N:** Cria-se uma tabela associativa com duas chaves estrangeiras, ambas referenciando a chave primária da mesma tabela (ex: `tb_seguidores` com `seguidor_id` e `seguido_id`, ambos referenciando `tb_usuario`).

7.  **Herança** 🧬: Para mapear uma estrutura de herança, existem duas abordagens principais:
    * **Tabela Única:** Criar uma única tabela para toda a hierarquia. A tabela conteria todos os atributos da superclasse e de todas as subclasses, além de uma coluna "tipo" para diferenciar os registros. A vantagem é a simplicidade e velocidade, mas a desvantagem é o "espaço ocioso" gerado por muitos campos nulos.
    * **Tabelas por Subclasse (Recomendado):** Criar uma tabela para a superclasse e uma tabela separada para cada subclasse. A chave primária de cada tabela de subclasse é também uma chave estrangeira que referencia a chave primária da tabela da superclasse.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

