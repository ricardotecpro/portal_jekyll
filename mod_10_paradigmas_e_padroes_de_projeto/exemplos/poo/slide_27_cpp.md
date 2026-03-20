---
layout: default
title: SLIDE 27 CPP
---

Sistema de cadastro de alunos em **C++ com orientação a objetos (POO)**:

---

## ✅ **Objetivo do Exercício**

Criar um sistema simples para **cadastrar alunos**, utilizando conceitos de **Programação Orientada a Objetos** em C++. O sistema deve permitir:

- Cadastrar dados básicos do aluno;
    
- Registrar a média de notas;
    
- Exibir as informações completas do aluno.
    

---

## 📌 **Etapa 1: Inclusão de bibliotecas**

```cpp
#include <iostream>
#include <string>
```

### Explicação:

- `#include <iostream>`: biblioteca que permite usar comandos de entrada e saída como `cin` e `cout`.
    
- `#include <string>`: permite usar a classe `string`, que armazena textos (como o nome do aluno).
    

---

## 📌 **Etapa 2: Utilização do namespace padrão**

```cpp
using namespace std;
```

### Explicação:

- `std` é o namespace padrão da biblioteca C++. Com `using namespace std;`, evitamos escrever `std::cout`, `std::cin`, etc. É uma forma de **simplificar a sintaxe**.
    

---

## 📌 **Etapa 3: Definição da Classe `Aluno`**

```cpp
class Aluno {
private:
    string nome;
    int idade;
    int matricula;
    float mediaNotas;
```

### Explicação:

- Criamos a **classe `Aluno`**, que representa a estrutura de dados de um aluno.
    
- Os **atributos (variáveis)** estão em `private` para garantir **encapsulamento** (princípio da POO que protege os dados da classe).
    

---

## 📌 **Etapa 4: Construtor da Classe**

```cpp
public:
    Aluno() {
        nome = "";
        idade = 0;
        matricula = 0;
        mediaNotas = 0.0;
    }
```

### Explicação:

- O **construtor** inicializa os atributos com valores padrão.
    
- Ele é chamado automaticamente quando criamos um objeto do tipo `Aluno`.
    

---

## 📌 **Etapa 5: Método `cadastrarDados()`**

```cpp
    void cadastrarDados() {
        cout << "Digite o nome do aluno: ";
        getline(cin, nome);
        cout << "Digite a idade do aluno: ";
        cin >> idade;
        cout << "Digite o número de matrícula do aluno: ";
        cin >> matricula;
        cin.ignore(); // limpa o buffer do teclado
    }
```

### Explicação:

- Permite ao usuário **inserir os dados do aluno**.
    
- `getline(cin, nome)` é usado para permitir nomes com espaços.
    
- `cin.ignore()` limpa o "Enter" deixado pelo `cin`, evitando erros em próximas entradas de texto.
    

---

## 📌 **Etapa 6: Método `cadastrarMediaNotas()`**

```cpp
    void cadastrarMediaNotas() {
        cout << "Digite a média de notas do aluno: ";
        cin >> mediaNotas;
        cin.ignore();
    }
```

### Explicação:

- Permite inserir a média de notas.
    
- Também usa `cin.ignore()` por segurança, caso o próximo input seja do tipo texto.
    

---

## 📌 **Etapa 7: Método `exibirInformacoes()`**

```cpp
    void exibirInformacoes() {
        cout << "
--- Informações do Aluno ---
";
        cout << "Nome: " << nome << endl;
        cout << "Idade: " << idade << endl;
        cout << "Matrícula: " << matricula << endl;
        cout << "Média de Notas: " << mediaNotas << endl;
    }
```

### Explicação:

- Exibe todos os dados armazenados no objeto da classe.
    
- Usamos `cout` com `endl` para formatar a saída de forma clara.
    

---

## 📌 **Etapa 8: Função `main()`**

```cpp
int main() {
    Aluno aluno1;

    aluno1.cadastrarDados();
    aluno1.cadastrarMediaNotas();
    aluno1.exibirInformacoes();

    return 0;
}
```

### Explicação:

- Criamos um **objeto da classe `Aluno`** chamado `aluno1`.
    
- Chamamos os métodos da classe para interagir com o objeto:
    
    - `cadastrarDados()` → coleta os dados básicos.
        
    - `cadastrarMediaNotas()` → registra a média.
        
    - `exibirInformacoes()` → mostra tudo o que foi inserido.
        

---



## 🧠 **Conceitos de POO Utilizados**

|Conceito|Aplicação|
|---|---|
|**Classe**|`Aluno`, que representa um modelo de dados.|
|**Objeto**|`aluno1`, instância concreta da classe `Aluno`.|
|**Encapsulamento**|Atributos privados e acesso por métodos públicos.|
|**Métodos**|`cadastrarDados`, `cadastrarMediaNotas`, `exibirInformacoes`.|
|**Construtor**|Método que inicializa o objeto.|

---

## 🛠️ **Próximos Passos (para prática avançada)**

Você pode propor como exercício extra:

- Permitir o cadastro de **vários alunos** usando `vetores` ou `listas`.
    
- Criar **validações** (ex: idade > 0).
    
- Usar **arquivos** para armazenar os dados permanentemente.
    
- Criar um **menu interativo**.
    

---

xemplo simples e funcional de implementação em **C++** de um sistema de cadastro de alunos com base na descrição do exercício:

```
#include <iostream>
#include <string>

using namespace std;

class Aluno {
private:
    string nome;
    int idade;
    int matricula;
    float mediaNotas;

public:
    // Construtor padrão
    Aluno() {
        nome = "";
        idade = 0;
        matricula = 0;
        mediaNotas = 0.0;
    }

    // Método para cadastrar os dados do aluno
    void cadastrarDados() {
        cout << "Digite o nome do aluno: ";
        getline(cin, nome);
        cout << "Digite a idade do aluno: ";
        cin >> idade;
        cout << "Digite o número de matrícula do aluno: ";
        cin >> matricula;
        cin.ignore(); // limpar o buffer após cin
    }

    // Método para cadastrar a média de notas
    void cadastrarMediaNotas() {
        cout << "Digite a média de notas do aluno: ";
        cin >> mediaNotas;
        cin.ignore();
    }

    // Método para exibir as informações do aluno
    void exibirInformacoes() {
        cout << "
--- Informações do Aluno ---
";
        cout << "Nome: " << nome << endl;
        cout << "Idade: " << idade << endl;
        cout << "Matrícula: " << matricula << endl;
        cout << "Média de Notas: " << mediaNotas << endl;
    }
};

// Função principal
int main() {
    Aluno aluno1;

    aluno1.cadastrarDados();
    aluno1.cadastrarMediaNotas();
    aluno1.exibirInformacoes();

    return 0;
}

```
### Explicação do Código:
- **Inclusão de Bibliotecas**: `#include <iostream>` e `#include <string>` são usadas para entrada/saída e manipulação de strings.
- **Namespace**: `using namespace std;` simplifica o uso de `cout`, `cin`, etc.
- **Classe `Aluno`**: Define os atributos e métodos para manipular os dados do aluno.
- **Construtor**: Inicializa os atributos com valores padrão.
- **Métodos**: 
  - `cadastrarDados()` coleta os dados do aluno.
  - `cadastrarMediaNotas()` registra a média de notas.
  - `exibirInformacoes()` exibe todos os dados coletados.
- **Função `main()`**: Cria um objeto `aluno1`, chama os métodos para coletar e exibir os dados.
### Compilação e Execução:
Para compilar e executar o código, você pode usar os seguintes comandos no terminal:
```bash
g++ -o cadastro_alunos cadastro_alunos.cpp
./cadastro_alunos
```
```cpp
    }
};
```
