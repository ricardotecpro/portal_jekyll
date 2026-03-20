---
layout: default
title: **Expressões Regulares (Regex) em Diversas Linguagens de Programação**
---

# **Expressões Regulares (Regex) em Diversas Linguagens de Programação**

Lista incluindo **expressões regulares (Regex)**, um recurso poderoso usado em várias linguagens para busca e manipulação de texto.  

---

# **Classificação das Linguagens de Programação com Expressões Regulares (Regex)**  

As expressões regulares (Regex) são padrões utilizados para encontrar e manipular strings. Elas são amplamente suportadas em diversas linguagens. Abaixo estão exemplos de como utilizar Regex em diferentes linguagens.  

---

## **1️⃣ Linguagens Baseadas na Sintaxe**  

### **1.1 - Linguagens que usam `{}` e `;` (Estilo C-like)**  
Essas linguagens delimitam blocos de código com `{}` e geralmente finalizam comandos com `;`.  

#### **Exemplos e Código**  

✔ **C** *(usando POSIX Regex)*  
```c
#include <stdio.h>
#include <regex.h>

int main() {
    regex_t regex;
    int reti = regcomp(&regex, "hello", 0);
    reti = regexec(&regex, "hello world", 0, NULL, 0);
    
    if (!reti) printf("Match found!
");
    else printf("No match!
");
    
    regfree(&regex);
    return 0;
}
```

✔ **C++** *(usando `<regex>` do C++11+)*  
```cpp
#include <iostream>
#include <regex>

int main() {
    std::regex pattern("hello");
    std::string text = "hello world";

    if (std::regex_search(text, pattern)) {
        std::cout << "Match found!" << std::endl;
    }
}
```

✔ **Java** *(usando `Pattern` e `Matcher`)*  
```java
import java.util.regex.*;

public class Main {
    public static void main(String[] args) {
        Pattern pattern = Pattern.compile("\\d+");
        Matcher matcher = pattern.matcher("ID 12345");

        if (matcher.find()) {
            System.out.println("Match found: " + matcher.group());
        }
    }
}
```

✔ **C#** *(usando `System.Text.RegularExpressions`)*  
```csharp
using System;
using System.Text.RegularExpressions;

class Program {
    static void Main() {
        string input = "ID 12345";
        string pattern = @"\d+";
        Match match = Regex.Match(input, pattern);
        if (match.Success) {
            Console.WriteLine("Match found: " + match.Value);
        }
    }
}
```

✔ **JavaScript** *(usando `RegExp`)*  
```js
const text = "ID 12345";
const regex = /\d+/;
const match = text.match(regex);

if (match) {
    console.log("Match found:", match[0]);
}
```

✔ **TypeScript**  
```ts
let text: string = "ID 12345";
let regex: RegExp = /\d+/;
let match = text.match(regex);

if (match) {
    console.log("Match found:", match[0]);
}
```

✔ **Go** *(usando `regexp` package)*  
```go
package main

import (
    "fmt"
    "regexp"
)

func main() {
    re := regexp.MustCompile(`\d+`)
    match := re.FindString("ID 12345")
    fmt.Println("Match found:", match)
}
```

✔ **Rust** *(usando `regex` crate)*  
```rust
use regex::Regex;

fn main() {
    let re = Regex::new(r"\d+").unwrap();
    let text = "ID 12345";

    if let Some(mat) = re.find(text) {
        println!("Match found: {}", mat.as_str());
    }
}
```

✔ **PHP** *(usando `preg_match`)*  
```php
<?php
$text = "ID 12345";
if (preg_match("/\d+/", $text, $match)) {
    echo "Match found: " . $match[0];
}
?>
```

✔ **Perl** *(Regex é nativo na sintaxe de Perl!)*  
```perl
my $text = "ID 12345";
if ($text =~ /\d+/) {
    print "Match found!
";
}
```

✔ **Crystal**  
```crystal
text = "ID 12345"
if match = text.match(/\d+/)
    puts "Match found: #{match[0]}"
end
```

---

### **1.2 - Linguagens que usam indentação em vez de `{}`**  
Essas linguagens utilizam indentação para definir blocos de código.  

#### **Exemplos e Código**  

✔ **Python** *(usando `re`)*  
```python
import re
text = "ID 12345"
match = re.search(r"\d+", text)
if match:
    print("Match found:", match.group())
```

✔ **Ruby** *(Regex embutido na linguagem!)*  
```ruby
text = "ID 12345"
match = text.match(/\d+/)
puts "Match found: #{match[0]}" if match
```

✔ **Elixir** *(usando `Regex` módulo)*  
```elixir
text = "ID 12345"
case Regex.run(~r/\d+/, text) do
  [match] -> IO.puts("Match found: #{match}")
  _ -> IO.puts("No match")
end
```

✔ **Haskell** *(usando `Text.Regex` package)*  
```haskell
import Text.Regex.Posix

main = do
    let text = "ID 12345"
    print (text =~ "\\d+" :: String)
```

✔ **Lua** *(usando `string.match`)*  
```lua
text = "ID 12345"
match = string.match(text, "%d+")
if match then
    print("Match found: " .. match)
end
```

✔ **PowerShell**  
```powershell
$text = "ID 12345"
if ($text -match "\d+") {
    Write-Output "Match found: $matches[0]"
}
```

✔ **Shell Script (Bash)**  
```sh
text="ID 12345"
if [[ $text =~ [0-9]+ ]]; then
    echo "Match found: ${BASH_REMATCH[0]}"
fi
```

---

## **2️⃣ Expressões Regulares em XML, SQL e Outras Tecnologias**  

✔ **SQL (usando `REGEXP` em MySQL e PostgreSQL)**  
```sql
SELECT 'Match found' WHERE 'ID 12345' REGEXP '[0-9]+';
```

✔ **XML (XSLT com Regex em XPath 2.0)**  
```xml
<xsl:variable name="text" select="'ID 12345'" />
<xsl:if test="matches($text, '\d+')">
    <xsl:text>Match found!</xsl:text>
</xsl:if>
```

✔ **COBOL (usando `INSPECT` para busca simples)**  
```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. RegexExample.
DATA DIVISION.
WORKING-STORAGE SECTION.
01 TEXT PIC X(20) VALUE "ID 12345".
01 DIGITS PIC 9(5).
PROCEDURE DIVISION.
    INSPECT TEXT TALLYING DIGITS FOR ALL "0123456789".
    DISPLAY "Match found: " DIGITS.
STOP RUN.
```

---

## **Conclusão**
A lista inclui **Regex em várias linguagens**, mostrando como diferentes tecnologias lidam com padrões de busca e manipulação de strings.

---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)

