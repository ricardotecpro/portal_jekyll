---
layout: default
title: A extração de informações de um banco de dados para responder a questões de negócio é realizada por meio de consultas 🔍
---

## A extração de informações de um banco de dados para responder a questões de negócio é realizada por meio de consultas 🔍 

Em SQL, o subconjunto de comandos dedicado a esta tarefa é o `SELECT`, que alguns autores classificam como parte da DQL (Data Query Language).

### Álgebra Relacional: A Base Teórica 🏛️

As consultas em bancos de dados relacionais são fundamentadas na **Álgebra Relacional**, uma base teórica que define um conjunto de operações sobre tabelas (relações). Assim como a aritmética opera sobre números, a álgebra relacional opera sobre tabelas para produzir novas tabelas como resultado.

As operações fundamentais são:

* **Projeção (π)** 📽️: Filtra as **colunas** de uma tabela. Em SQL, corresponde à lista de colunas especificadas na cláusula `SELECT`.
* **Restrição (σ)** 📜: Também chamada de **Seleção**, filtra as **linhas** de uma tabela com base em uma condição. Em SQL, corresponde à cláusula `WHERE`.
* **Produto Cartesiano (X)** ✖️: Realiza o "cruzamento" de todos os registros entre duas tabelas. Em SQL, é o resultado de listar duas tabelas na cláusula `FROM` sem uma condição de junção.
* **Junção (⨝)** 🔗: É a operação mais comum, que combina registros correspondentes de duas tabelas. Essencialmente, é um Produto Cartesiano seguido por uma Restrição para manter apenas as linhas que satisfazem a condição de junção.

### Construindo Consultas com `SELECT` 🏗️

A estrutura básica de uma consulta SQL envolve as cláusulas `SELECT`, `FROM` e `WHERE`.

#### Junções (JOINs) 🔗

Para combinar dados de múltiplas tabelas, utilizam-se as junções. As principais formas de realizar uma junção são:

1.  **INNER JOIN (Junção Interna)** 🤝: Retorna apenas os registros que possuem valores correspondentes em ambas as tabelas.
2.  **LEFT JOIN (Junção à Esquerda)** ⬅️: Retorna todos os registros da tabela à esquerda e os registros correspondentes da tabela à direita. Se não houver correspondência, os campos da tabela direita terão valor nulo.
3.  **RIGHT JOIN (Junção à Direita)** ➡️: O inverso do `LEFT JOIN`. Retorna todos os registros da tabela à direita e os correspondentes da tabela à esquerda.
4.  **FULL JOIN (Junção Completa)** ↔️: Retorna todos os registros quando há uma correspondência em qualquer uma das tabelas.

**Renomeação (AS)** 🏷️: O comando `AS` é usado para dar apelidos a colunas e tabelas, o que é útil para remover ambiguidades e nomear campos calculados.

#### Operadores de Filtragem 🔎

* **`LIKE`**: Usado na cláusula `WHERE` para buscar um padrão específico em uma coluna de texto.
* **`IN`**: Permite especificar múltiplos valores em uma cláusula `WHERE`.
* **`BETWEEN`**: Seleciona valores dentro de um intervalo determinado.

### Funções em SQL 🔢

SQL oferece uma vasta gama de funções, que podem variar um pouco entre diferentes SGBDs.

* **Funções Comuns**:
    * Manipulação de texto: `UPPER`, `LOWER`, `CONCAT`, `REPLACE`, `CHAR_LENGTH`.
    * Conversão e arredondamento: `CAST`, `ROUND`.
    * Data e hora: `DAY`, `MONTH`, `YEAR`, `EXTRACT`.
    * Lógica condicional: `CASE`.
* **Funções de Agregação**: Calculam um valor a partir de um conjunto de registros:
    * `COUNT`: Conta o número de linhas.
    * `SUM`: Soma os valores.
    * `AVG`: Calcula a média.
    * `MIN`: Retorna o menor valor.
    * `MAX`: Retorna o maior valor.

### Cláusulas Adicionais de Consulta 📋

* **`DISTINCT`**: Retorna apenas valores distintos (únicos), removendo duplicatas.
* **`ORDER BY`**: Ordena o conjunto de resultados com base em uma ou mais colunas.
* **`LIMIT` / `TOP`**: Restringe o número de linhas retornadas pela consulta.
* **`GROUP BY`**: Agrupa linhas que têm os mesmos valores em colunas especificadas em um registro de resumo. É frequentemente usado com funções de agregação para realizar cálculos em cada grupo.

### Tópicos Avançados 🚀

* **Subconsultas**: Uma consulta aninhada dentro de outra. Como o resultado de uma consulta é sempre uma tabela, ele pode ser usado como argumento em cláusulas como `FROM` ou `WHERE`, permitindo a resolução de problemas complexos.
* **`UNION` (União)**: Combina o resultado de duas ou mais consultas `SELECT` em um único conjunto de resultados.
* **`DIFERENÇA`**: Embora não haja um operador de diferença direto, a lógica de encontrar registros que estão em um conjunto mas não em outro é geralmente implementada usando subconsultas com operadores como `IN` ou `JOINs`.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

