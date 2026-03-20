---
layout: default
title: Modelagem UML
---

# Modelagem UML

O **domínio** 🎯 de um sistema é a área de negócio que está sendo observada. A **modelagem de domínio** é o processo de criar um modelo que descreve as entidades desse domínio e as inter-relações entre elas.

A modelagem de domínio ocorre principalmente durante as fases de 
**Modelagem de Negócio (Business Modelling)**, 
**Requisitos (Requirements)** e 
**Análise e Design (Analysis & Design)** do desenvolvimento de software.

### Níveis de Abstração do Modelo de Domínio 🪜

A modelagem pode ser dividida em diferentes níveis de abstração, cada um com um objetivo e um responsável específico:

| Nível | Responsável | Objetivo |
| :--- | :--- | :--- |
| **Conceitual ou de Análise (de negócio)** 👔 | Analista de negócio | Descrever as entidades do negócio e suas relações, **independentemente de sistema**. |
| **Conceitual ou de Análise (de sistema)** 💻 | Analista de sistemas | Descrever as entidades do sistema e suas relações, **independentemente de paradigma e tecnologia**. |
| **Lógico ou de Design** 🏗️ | Projetista | Descrever as entidades do sistema, mas já **preso a um paradigma** (como relacional ou orientado a objetos), porém ainda independente de tecnologia. |
| **Físico ou de Implementação** ⌨️ | Implementador | Descrever as entidades do sistema, **preso a um paradigma e a uma tecnologia específica** (como Java, C#, MySQL, etc.). |

### Análise vs. Design 🤔 vs. 💡

Existe uma distinção importante, embora por vezes sutil, entre análise e design:

* **Análise:** Foca em descrever o **PROBLEMA**. É um nível de abstração mais alto, que busca entender "o quê" o sistema deve fazer, sem se preocupar com "como" será feito. O resultado é independente de paradigma e tecnologia.
* **Design:** Foca em descrever a **SOLUÇÃO**. Neste nível, as decisões de implementação começam a ser tomadas, prendendo o modelo a um paradigma específico (por exemplo, definindo chaves estrangeiras para um modelo relacional ou incluindo métodos para um modelo orientado a objetos).

### O Foco da Modelagem Conceitual 🎯

A **Modelagem Conceitual** que é objeto de estudo se situa no **nível de Análise**. No entanto, na prática, ela frequentemente "invade" alguns aspectos do nível de Design, como a especificação de tipos de dados e preocupações com normalização, para facilitar a transição para a implementação.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

