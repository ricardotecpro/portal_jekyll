Em **Go (Golang)**, a Programação Orientada a Objetos (**POO**) é diferente de linguagens como Java ou Python, pois **Go não possui classes**. No entanto, podemos usar **structs, métodos e interfaces** para implementar os conceitos de POO, como encapsulamento, herança e polimorfismo.  

---

## **1️⃣ Definindo uma "Classe" com Struct e Métodos**
Em Go, usamos **structs** para representar objetos e **métodos** para definir comportamentos.  

```go
package main

import "fmt"

// Definição da struct Pessoa (equivalente a uma classe)
type Pessoa struct {
    Nome  string
    Idade int
}

// Método para obter o nome
func (p Pessoa) GetNome() string {
    return p.Nome
}

// Método para modificar o nome
func (p *Pessoa) SetNome(nome string) {
    p.Nome = nome
}

// Método para obter a idade
func (p Pessoa) GetIdade() int {
    return p.Idade
}

// Método para modificar a idade
func (p *Pessoa) SetIdade(idade int) {
    p.Idade = idade
}

// Método para exibir os dados da pessoa
func (p Pessoa) Apresentar() {
    fmt.Printf("Olá, meu nome é %s e tenho %d anos.\n", p.Nome, p.Idade)
}

func main() {
    // Criando um objeto da struct Pessoa
    pessoa := Pessoa{Nome: "João", Idade: 25}

    pessoa.Apresentar() // Olá, meu nome é João e tenho 25 anos.

    pessoa.SetIdade(30)
    fmt.Println("Nova idade:", pessoa.GetIdade()) // Nova idade: 30
}
```

### ✅ **Explicação:**
- `Pessoa` é uma **struct** que representa um objeto.  
- Métodos como `GetNome` e `SetIdade` são usados para acessar e modificar os dados.  
- O `*Pessoa` indica um **ponteiro**, permitindo modificar os atributos diretamente.  
- No `main()`, criamos uma instância de `Pessoa`, alteramos valores e chamamos métodos.  

---

## **2️⃣ Simulando Herança com Composição**
Go não suporta **herança** diretamente, mas podemos usar **composição** para reutilizar código.  

```go
package main

import "fmt"

// Struct Pessoa (classe base)
type Pessoa struct {
    Nome  string
    Idade int
}

// Método da struct Pessoa
func (p Pessoa) Apresentar() {
    fmt.Printf("Meu nome é %s e tenho %d anos.\n", p.Nome, p.Idade)
}

// Struct Aluno que contém um campo do tipo Pessoa
type Aluno struct {
    Pessoa   // Composição (Aluno "herda" de Pessoa)
    Curso    string
}

// Método específico de Aluno
func (a Aluno) Estudar() {
    fmt.Printf("%s está estudando %s.\n", a.Nome, a.Curso)
}

func main() {
    aluno := Aluno{
        Pessoa: Pessoa{Nome: "Ana", Idade: 22},
        Curso:  "Engenharia",
    }

    aluno.Apresentar() // Meu nome é Ana e tenho 22 anos.
    aluno.Estudar()    // Ana está estudando Engenharia.
}
```

### ✅ **Explicação:**
- `Aluno` **"herda"** de `Pessoa` por **composição**.  
- O método `Apresentar()` de `Pessoa` pode ser chamado em `Aluno`.  
- `Aluno` também tem seu próprio método `Estudar()`.  

---

## **3️⃣ Polimorfismo com Interfaces**
Go usa **interfaces** para implementar polimorfismo.

```go
package main

import "fmt"

// Definição da interface
type SerHumano interface {
    Apresentar()
}

// Struct Pessoa
type Pessoa struct {
    Nome  string
    Idade int
}

// Implementando a interface SerHumano
func (p Pessoa) Apresentar() {
    fmt.Printf("Sou %s e tenho %d anos.\n", p.Nome, p.Idade)
}

// Struct Aluno
type Aluno struct {
    Pessoa
    Curso string
}

// Implementando a interface SerHumano para Aluno
func (a Aluno) Apresentar() {
    fmt.Printf("Sou %s, tenho %d anos e estudo %s.\n", a.Nome, a.Idade, a.Curso)
}

// Função que aceita qualquer SerHumano
func ApresentarPessoa(s SerHumano) {
    s.Apresentar()
}

func main() {
    pessoa := Pessoa{Nome: "Carlos", Idade: 40}
    aluno := Aluno{Pessoa: Pessoa{Nome: "Mariana", Idade: 20}, Curso: "Medicina"}

    ApresentarPessoa(pessoa) // Sou Carlos e tenho 40 anos.
    ApresentarPessoa(aluno)  // Sou Mariana, tenho 20 anos e estudo Medicina.
}
```

### ✅ **Explicação:**
- Criamos a interface `SerHumano` com o método `Apresentar()`.  
- `Pessoa` e `Aluno` implementam essa interface.  
- A função `ApresentarPessoa()` aceita **qualquer struct que implemente `SerHumano`**, demonstrando polimorfismo.  

---

## **Conclusão**
Em **Go**, POO é baseada em **structs**, **métodos** e **interfaces**:
✅ **Encapsulamento** → Usamos métodos para acessar/modificar campos.  
✅ **Herança** → Usamos **composição** (uma struct dentro de outra).  
✅ **Polimorfismo** → Usamos **interfaces**.  

Go é **simples e eficiente**, evitando abstrações complexas. Se precisar de mais detalhes, me avise! 🚀