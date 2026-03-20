---
layout: default
title: Lista de Exercícios POO
---

# Lista de Exercícios POO

---

### 📌 **Descrição das Atividades**
[Orientação sobre como desenvolver as atividades](lista_exercicios_orientacoes.md)

---

#  - Java - Exercícios de Fixação ☕

## 🧩 Parte 6: Classes, Atributos e Métodos

### Problema "retangulo" 📐

**Enunciado:** Fazer um programa para ler os valores da largura e altura de um retângulo. Em seguida, mostrar na tela o valor de sua área, perímetro e diagonal. Usar uma classe como mostrado no projeto ao lado.

**Diagrama da Classe:**
```
+------------------+
|    Rectangle     |
+------------------+
| - Width: double  |
| - Height: double |
+------------------+
| + Area(): double     |
| + Perimeter(): double|
| + Diagonal(): double |
+------------------+
```

**Exemplo de Execução:**
* **Entrada:**
    ```
    Entre com a largura e altura do retângulo:
    3.00
    4.00
    ```
* **Saída Esperada:**
    ```
    AREA = 12.00
    PERIMETRO = 14.00
    DIAGONAL = 5.00
    ```

---

### Problema "funcionarios" 👨‍💼

**Enunciado:** Fazer um programa para ler os dados de um funcionário (nome, salário bruto e imposto). Em seguida, mostrar os dados do funcionário (nome e salário líquido). Depois, aumentar o salário do funcionário com base em uma porcentagem dada (somente o salário bruto é afetado pela porcentagem) e mostrar novamente os dados do funcionário. Use a classe projetada ao lado.

**Diagrama da Classe:**
```
+------------------------------------------+
|                 Employee                 |
+------------------------------------------+
| - Name: string                           |
| - GrossSalary: double                    |
| - Tax: double                            |
+------------------------------------------+
| + NetSalary(): double                    |
| + IncreaseSalary(percentage: double): void|
+------------------------------------------+
```

**Exemplo de Execução:**
* **Entrada:**
    ```
    Nome: Joao Silva
    Salário bruto: 6000.00
    Imposto: 1000.00
    ```
* **Saída Intermediária:**
    ```
    Funcionário: Joao Silva, $ 5000.00
    ```
* **Entrada Adicional:**
    ```
    Qual a porcentagem para aumentar o salário? 10.0
    ```
* **Saída Final:**
    ```
    Dados atualizados: Joao Silva, $ 5600.00
    ```

---

### Problema "alunos" 🎓

**Enunciado:** Fazer um programa para ler o nome de um aluno e as três notas que ele obteve nos três trimestres do ano (primeiro trimestre vale 30 e o segundo e terceiro valem 35 cada). Ao final, mostrar qual a nota final do aluno no ano. Dizer também se o aluno está aprovado (APROVADO) ou não (REPROVADO) e, em caso negativo, quantos pontos faltam para o aluno obter o mínimo para ser aprovado (que é 60% da nota). Você deve criar uma classe `Student` para resolver este problema.

**Exemplo 1 (Aprovado):**
* **Entrada:**
    ```
    Alex Green
    27.00
    31.00
    32.00
    ```
* **Saída:**
    ```
    NOTA FINAL = 90.00
    PASS
    ```

**Exemplo 2 (Reprovado):**
* **Entrada:**
    ```
    Alex Green
    17.00
    20.00
    15.00
    ```
* **Saída:**
    ```
    NOTA FINAL = 52.00
    FAILED
    FALTARAM 8.00 PONTOS
    ```

## ⚙️ Parte 2: Membros Estáticos

### Problema "cambio" 💵

**Enunciado:** Faça um programa para ler a cotação do dólar, e depois um valor em dólares a ser comprado por uma pessoa em reais. Informar quantos reais a pessoa vai pagar pelos dólares, considerando ainda que a pessoa terá que pagar 6% de IOF sobre o valor em dólar. Criar uma classe `CurrencyConverter` para ser responsável pelos cálculos.

**Exemplo de Execução:**
* **Entrada:**
    ```
    Qual o valor do dólar? 3.10
    Quantos dólares serão comprados? 200.00
    ```
* **Saída Esperada:**
    ```
    Valor a ser pago em reais = 657.20
    ```

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

