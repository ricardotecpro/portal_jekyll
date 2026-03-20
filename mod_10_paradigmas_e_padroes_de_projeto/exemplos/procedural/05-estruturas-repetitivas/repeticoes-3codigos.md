# Entrada de dados por Terminal em Python, Java e JavaScript (Node.js) 

Receba o número de repetições no terminal,  ao usuário que insira o número de repetições e utilizem esse valor durante a execução.

### 1. **JavaScript (Node.js)**

No Node.js, podemos usar o `readline` para ler a entrada do usuário diretamente no terminal. Aqui está a versão melhorada do código:

```javascript
const readline = require('readline');

// Criar interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar o número de repetições
rl.question('Quantas repetições? ', (numRepeticoes) => {
  let text = ""; // Inicializa o texto como uma string vazia
  let i = 0;     // Inicializa i com 0

  // Loop do-while
  do {
    text += "The number is " + i + "\n";  // Adiciona a frase com o número atual
    i++;
  } while (i < numRepeticoes);

  // Exibe o resultado
  console.log(text);

  // Fecha a interface de leitura
  rl.close();
});
```

**Como rodar no terminal:**
1. Salve o código em um arquivo `.js` (ex: `repeticoes.js`).
2. No terminal, execute com o comando:  
   ```bash
   node repeticoes.js
   ```

O código vai solicitar ao usuário o número de repetições, executar o loop e exibir a sequência no terminal.

---

### 2. **Python**

Em Python, podemos usar a função `input()` para pedir ao usuário o número de repetições.

```python
# Solicitar o número de repetições
num_repeticoes = int(input("Quantas repetições? "))

# Inicializar variáveis
text = ""  # Inicializa o texto como uma string vazia
i = 0       # Inicializa i com 0

# Loop do-while em Python (usando while True e uma condição de quebra)
while True:
    # Adicionar ao texto
    text += f"The number is {i}\n"  # Adiciona a frase com o número atual
    i += 1
    if i >= num_repeticoes:
        break

# Agora, você pode usar ou imprimir a variável text
print(text)
```

**Como rodar no terminal:**
1. Salve o código em um arquivo `.py` (ex: `repeticoes.py`).
2. No terminal, execute com o comando:  
   ```bash
   python repeticoes.py
   ```

O código irá pedir ao usuário o número de repetições e exibir o resultado no terminal.

---

### 3. **Java**

No Java, podemos usar a classe `Scanner` para obter a entrada do usuário.

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Criar scanner para ler a entrada do usuário
        Scanner scanner = new Scanner(System.in);

        // Solicitar o número de repetições
        System.out.print("Quantas repetições? ");
        int numRepeticoes = scanner.nextInt();

        // Inicializar variáveis
        String text = "";  // Inicializa o texto como uma string vazia
        int i = 0;         // Inicializa i com 0

        // Loop do-while
        do {
            // Adicionar ao texto
            text += "The number is " + i + "\n";  // Adiciona a frase com o número atual
            i++;
        } while (i < numRepeticoes);

        // Exibir o resultado
        System.out.println(text);

        // Fechar o scanner
        scanner.close();
    }
}
```

**Como rodar no terminal:**
1. Salve o código em um arquivo `.java` (ex: `Main.java`).
2. Compile o código com o comando:  
   ```bash
   javac Main.java
   ```
3. Execute o código com o comando:  
   ```bash
   java Main
   ```

O código solicitará o número de repetições ao usuário e exibirá o texto no terminal.

---

### Resumo:

- **Node.js (JavaScript)**: Usa a biblioteca `readline` para interagir com o usuário.
- **Python**: Utiliza `input()` para capturar o número de repetições.
- **Java**: Usa `Scanner` para capturar a entrada do usuário.

