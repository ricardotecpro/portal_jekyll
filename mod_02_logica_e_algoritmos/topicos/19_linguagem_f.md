### **F# – Uma Linguagem Funcional para .NET** 🚀

**F#** é uma linguagem de programação funcional que roda na plataforma **.NET**, desenvolvida pela Microsoft e pela comunidade **open-source**. Ela combina **programação funcional**, **orientação a objetos** e **programação imperativa**, sendo uma excelente escolha para desenvolvimento robusto, seguro e conciso.

---

## **🔹 Características do F#**

### ✅ **Sintaxe concisa e expressiva**

- O código é mais curto e legível, eliminando a necessidade de muitos `return`, `{}` e `;`.

### ✅ **Imutabilidade por padrão**

- As variáveis são imutáveis (`let`), tornando o código mais previsível e seguro.

### ✅ **Inferência de tipos poderosa**

- Não é necessário declarar tipos explicitamente na maioria dos casos.

### ✅ **Suporte a Programação Concorrente**

- Usa o modelo de **Actor (Mailbox Processors)** e **Async Workflows** para concorrência eficiente.

### ✅ **Interoperabilidade com C# e .NET**

- Pode ser usado junto com código C#, aproveitando a vasta biblioteca .NET.

---

## **📌 Primeiros Passos no F#**

Vamos ver exemplos práticos de F# para entender melhor como ele funciona.

---

### **1️⃣ Definição de Variáveis**

```fsharp
let nome = "Ricardo"
let idade = 30
printfn "Nome: %s, Idade: %d" nome idade
```

📌 As variáveis em F# são **imutáveis** por padrão. Para criar uma mutável, usamos `mutable`:

```fsharp
let mutable contador = 0
contador <- contador + 1
printfn "Contador: %d" contador
```

---

### **2️⃣ Funções Simples**

```fsharp
let soma x y = x + y
printfn "2 + 3 = %d" (soma 2 3)
```

📌 Não precisa de `return`, pois F# retorna automaticamente o último valor da função.

---

### **3️⃣ Funções de Alta Ordem**

```fsharp
let aplicarOperacao operacao x y = operacao x y

let resultado = aplicarOperacao (+) 10 5
printfn "Resultado: %d" resultado  // 15
```

📌 Aqui, `aplicarOperacao` recebe uma função como parâmetro (`+`, `-`, `*`, etc.).

---

### **4️⃣ Map, Filter e Reduce**

```fsharp
let numeros = [1; 2; 3; 4; 5]

let dobrados = List.map (fun x -> x * 2) numeros
printfn "%A" dobrados  // [2; 4; 6; 8; 10]

let pares = List.filter (fun x -> x % 2 = 0) numeros
printfn "%A" pares  // [2; 4]

let soma = List.fold (+) 0 numeros
printfn "Soma: %d" soma  // 15
```

📌 `map` transforma os valores, `filter` filtra elementos e `fold` reduz a lista a um único valor.

---

### **5️⃣ Recursão (sem loops!)**

```fsharp
let rec fatorial n =
    if n = 0 then 1
    else n * fatorial (n - 1)

printfn "Fatorial de 5: %d" (fatorial 5)
```

📌 **Recursão** é a abordagem funcional para repetição, substituindo `for` e `while`.

---

### **6️⃣ Expressões Lambda**

```fsharp
let quadrado = fun x -> x * x
printfn "%d" (quadrado 4)  // 16
```

📌 O `fun x ->` define uma função anônima (lambda).

---

### **7️⃣ Composição de Funções**

```fsharp
let dobrar x = x * 2
let incrementar x = x + 1

let dobrarDepoisIncrementar = dobrar >> incrementar

printfn "%d" (dobrarDepoisIncrementar 3)  // 7
```

📌 `>>` compõe funções: primeiro `dobrar`, depois `incrementar`.

---

### **8️⃣ Programação Concorrente com Async**

```fsharp
let tarefaLonga() =
    async {
        do! Async.Sleep 2000
        return "Tarefa concluída!"
    }

let resultado = Async.RunSynchronously (tarefaLonga())
printfn "%s" resultado
```

📌 **`async {}`** cria tarefas assíncronas, otimizando o uso de CPU.

---

## **📍 Aplicações do F#**

✅ **Machine Learning** (com ML.NET e F# Data)  
✅ **Processamento de dados e ETL**  
✅ **Desenvolvimento Web** (usando ASP.NET e Giraffe)  
✅ **Sistemas financeiros e científicos**  
✅ **Concorrência e computação paralela**

---

## **💡 Conclusão**

O **F#** é uma linguagem poderosa e concisa para programação funcional na plataforma **.NET**, combinando **eficiência, segurança e interoperabilidade com C#**. Ele é ideal para aplicações que exigem **alta confiabilidade**, como sistemas financeiros e científicos.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
