## Instanciação

Instanciação é o processo de criação de uma instância (ou objeto) a partir de uma classe em programação orientada a objetos. Uma classe define a estrutura e o comportamento dos objetos, enquanto a instância é um objeto concreto criado a partir dessa classe.

### Exemplo em Python

```python
class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

# Instanciação de um objeto da classe Pessoa
pessoa1 = Pessoa("João", 30)

print(pessoa1.nome)  # Saída: João
print(pessoa1.idade)  # Saída: 30
```

### Exemplo em Java

```java
public class Pessoa {
    private String nome;
    private int idade;

    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public String getNome() {
        return nome;
    }

    public int getIdade() {
        return idade;
    }
}

// Instanciação de um objeto da classe Pessoa
public class Main {
    public static void main(String[] args) {
        Pessoa pessoa1 = new Pessoa("João", 30);

        System.out.println(pessoa1.getNome());  // Saída: João
        System.out.println(pessoa1.getIdade());  // Saída: 30
    }
}
```

### Exemplo em JavaScript

```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

// Instanciação de um objeto da classe Pessoa
const pessoa1 = new Pessoa("João", 30);

console.log(pessoa1.nome);  // Saída: João
console.log(pessoa1.idade);  // Saída: 30
```

### Exemplo em Go

```go
package main

import "fmt"

type Pessoa struct {
    Nome  string
    Idade int
}

func main() {
    // Instanciação de um objeto da struct Pessoa
    pessoa1 := Pessoa{"João", 30}

    fmt.Println(pessoa1.Nome)  // Saída: João
    fmt.Println(pessoa1.Idade) // Saída: 30
}
```


### Exemplo em Rust

```rust
struct Pessoa {
    nome: String,
    idade: u32,
}

impl Pessoa {
    fn new(nome: String, idade: u32) -> Pessoa {
        Pessoa { nome, idade }
    }
}

fn main() {
    // Instanciação de um objeto da struct Pessoa
    let pessoa1 = Pessoa::new(String::from("João"), 30);

    println!("{}", pessoa1.nome);  // Saída: João
    println!("{}", pessoa1.idade); // Saída: 30
}
```

