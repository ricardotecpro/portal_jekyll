---
layout: default
title: README
---

Biblioteca de Jogos 02

Crie o projeto no **Spring Initializr** com as seguintes configurações:

* **Project:** Maven Project
* **Language:** Java
* **Spring Boot:** versão mais recente (ex.: 3.3.x)
* **Group:** (defina o nome do seu grupo, ex.: `br.com.bibliotecajogos`)
* **Artifact:** (defina o nome do seu artefato, ex.: `bibliotecajogos`)
* **Packaging:** Jar
* **Java:** 21

### Dependências

Adicione as seguintes dependências:

* Spring Web
* Thymeleaf
* Spring Data JPA
* H2 Database
* PostgreSQL Driver

---

## 📂 Modelagem dos Dados

### Entidade **Categoria**

* `id` (Long, PK)
* `nome` (String)
* `descricao` (String)
* `iconeUrl` (String)
* `dataCriacao` (LocalDateTime)
* `dataAtualizacao` (LocalDateTime)
* `ativo` (boolean)

### Entidade **Jogo**

* `id` (Long, PK)
* `titulo` (String)
* `autor` (String)
* `anoPublicacao` (Integer)
* `genero` (String)
* `descricao` (String)
* `plataforma` (String)
* `tempoEstimado` (Integer – horas)
* `dataLancamento` (LocalDate)
* `nota` (Double – 0 a 10)
* `dificuldade` (Enum: FÁCIL, MÉDIO, DIFÍCIL)
* `multiplayer` (boolean)
* `preco` (BigDecimal)
* `lojaUrl` (String – link para Steam, PSN, etc.)
* `urlCapa` (String – imagem do jogo)
* `finalizado` (boolean)
* `dataAdicionado` (LocalDate)
* `dataFinalizacao` (LocalDate)
* `categoria` (Relacionamento ManyToOne)

---

Opcional.

Adicionar nova entidades relacionada


Estúdio / Desenvolvedor → relacionamento de muitos jogos para um estúdio.


---

## 🎨 Requisitos Visuais

* Implementar **tema Dark/Light** com botão de alternância.
* Adicionar um **rodapé fixo** contendo:

  * Nome completo do desenvolvedor
  * Link para o seu GitHub

---

## 🚀 Deploy e Publicação

1. Publique o projeto no **GitHub** (repositório público).

   * O repositório deve conter um **README** com instruções de execução local e no Render.

2. Faça o **Deploy no Render** (backend) e no **Neon** (PostgreSQL em nuvem).

   * Link do deploy no formato:

     ```
     https://bibliotecajogos-SeuNomeSobrenome.onrender.com
     ```

---

## 📌 Entrega

* A entrega será feita via **Moodle**.

* Enviar:

  1. Link do repositório público no **GitHub**
  2. Link da aplicação no **Render**

* **Prazo:** até a data definida pelo professor.

---

🔗 Exemplo de referência:
[Projeto Biblioteca de Jogos](https://ricardotecpro.github.io/ads_proj_aplicacao_full_stack/projetos/bibliotecajogos_01/)

---

