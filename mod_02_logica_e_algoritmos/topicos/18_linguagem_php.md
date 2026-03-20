### **Estrutura Proposta: Curso Prático de PHP - Do Zero à Aplicação Dinâmica**

**Projeto Guia:** Construção de um "Mural de Recados" interativo.
**Pré-requisitos:** Conhecimento básico de HTML e CSS.

-----

### **Módulo 0: Preparando o Terreno (Configuração do Ambiente)**

O objetivo é eliminar a primeira grande barreira: a instalação.

1.  **O que é PHP?**
      * Explicação clara: PHP como uma linguagem de script do lado do servidor (*server-side*).
      * Como funciona o ciclo Requisição-Resposta (Navegador -\> Servidor -\> PHP -\> HTML -\> Navegador).
2.  **Instalando o Ambiente de Desenvolvimento Local:**
      * Guia passo a passo para instalar o XAMPP (ou MAMP/Laragon), que inclui Apache, PHP e MySQL.
      * Verificando a instalação: Criar o primeiro arquivo `index.php` com `<?php phpinfo(); ?>` para confirmar que tudo está funcionando.
3.  **Ferramentas Essenciais:**
      * Configurando o editor de código (VS Code) com extensões úteis (ex: PHP Intelephense).

-----

### **Módulo 1: Fundamentos da Linguagem (A Base Sólida)**

Aqui, introduzimos a sintaxe básica com exemplos diretos e úteis.

1.  **Sintaxe Básica e Saída de Dados:**

      * Tags do PHP: `<?php ... ?>`.
      * Comentários: `//` e `/* */`.
      * Comandos de saída: `echo` vs. `print`.

2.  **Variáveis e Tipos de Dados:**

      * Criação de variáveis (`$nome`).
      * Tipos de dados primários: `string`, `int`, `float`, `bool`.
      * Uso de `var_dump()` para inspecionar variáveis e entender seus tipos.
      * Concatenação de strings com `.` e uso de aspas duplas para interpolação.

3.  **Constantes:**

      * Quando e por que usar constantes (`define()`). Exemplo: `define('VERSAO', '1.0');`.

4.  **Operadores:**

      * Aritméticos (`+`, `-`, `*`, `/`, `%`).
      * Atribuição (`=`, `+=`, `-=`).
      * Comparação (`==`, `===`, `!=`, `>`).
      * Lógicos (`&&`, `||`, `!`).

**Exemplo Prático do Módulo 1 (Arquivo `perfil.php`):**

```php
<?php
// Módulo 1: Fundamentos

// Variáveis com informações do usuário
$nome_usuario = "Maria Silva";
$idade = 29;
$altura_metros = 1.75;
$e_desenvolvedora = true;

// Constante para o nome do projeto
define('NOME_PROJETO', 'Mural de Recados');
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Perfil do Usuário - <?php echo NOME_PROJETO; ?></title>
    <style>body { font-family: sans-serif; }</style>
</head>
<body>
    <h1>Perfil do Usuário</h1>
    
    <?php
        // Usando echo para exibir os dados no HTML
        echo "<p><strong>Nome:</strong> " . $nome_usuario . "</p>";
        echo "<p><strong>Idade:</strong> " . $idade . " anos</p>";
        
        // Exemplo de interpolação com aspas duplas
        echo "<p><strong>Altura:</strong> $altura_metros m</p>";

        // Usando uma estrutura condicional (próximo módulo) para exibir um valor booleano
        if ($e_desenvolvedora) {
            echo "<p><strong>Profissão:</strong> Desenvolvedora</p>";
        } else {
            echo "<p><strong>Profissão:</strong> Não informada</p>";
        }
    ?>
    
    <footer>
        <p>&copy; <?php echo date('Y'); ?> <?php echo NOME_PROJETO; ?></p>
    </footer>
</body>
</html>
```

-----

### **Módulo 2: Lógica e Estruturas de Repetição**

O cérebro da aplicação.

1.  **Estruturas Condicionais:**
      * `if`, `else`, `elseif`.
      * Operador Ternário.
2.  **Estruturas de Repetição (Loops):**
      * `for`: Quando o número de iterações é conhecido.
      * `while`: Para loops baseados em uma condição.
      * `foreach`: A forma essencial para percorrer arrays (será o mais usado).

**Exemplo Prático do Módulo 2 (Melhorando o Mural):**

```php
<?php
// Módulo 2: Lógica e Estruturas de Repetição

// Vamos simular alguns recados que viriam de um banco de dados
// Isso introduz o conceito de Array (próximo módulo) de forma natural
$recados = [
    "Olá! Bem-vindo ao mural.",
    "Lembre-se de estudar PHP todos os dias.",
    "Este é um exemplo de como exibir múltiplos itens.",
    "Amanhã vamos aprender sobre formulários!"
];

$usuario_logado = true;
$nome_usuario = "Maria Silva";
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Mural de Recados</title>
</head>
<body>
    <h1>Mural de Recados</h1>

    <?php if ($usuario_logado): ?>
        <p>Bem-vinda, <strong><?php echo $nome_usuario; ?></strong>!</p>
    <?php else: ?>
        <p>Bem-vindo, visitante!</p>
    <?php endif; ?>

    <hr>

    <h2>Recados Atuais:</h2>
    
    <?php
    // Usando foreach para iterar sobre a lista de recados e exibi-los
    if (!empty($recados)) {
        echo "<ul>";
        foreach ($recados as $recado) {
            echo "<li>" . $recado . "</li>";
        }
        echo "</ul>";
    } else {
        echo "<p>Nenhum recado para exibir no momento.</p>";
    }
    ?>
</body>
</html>
```

-----

### **Módulo 3: Arrays e Funções (Organização é Tudo)**

1.  **Arrays:**
      * Arrays Indexados (Numéricos).
      * Arrays Associativos (Chave =\> Valor).
      * Funções úteis para arrays: `count()`, `print_r()`, `array_push()`, `unset()`.
2.  **Funções:**
      * Por que usar funções (DRY - Don't Repeat Yourself).
      * Criando funções com parâmetros e `return`.
      * Escopo de variáveis.
3.  **Modularização com `include` e `require`:**
      * Dividindo o layout em `header.php`, `footer.php`. Isso limpa o código drasticamente.

**Exemplo Prático do Módulo 3 (Refatorando o Mural):**

**`config.php`**

```php
<?php
// Arquivo de configuração e funções
date_default_timezone_set('America/Sao_Paulo');

function formatarRecado(string $recado): string {
    // Adiciona formatação e segurança básica (veremos mais tarde)
    return htmlspecialchars(trim($recado));
}

function exibirRecados(array $recados) {
    if (!empty($recados)) {
        echo "<ul>";
        foreach ($recados as $recado) {
            echo "<li>" . formatarRecado($recado) . "</li>";
        }
        echo "</ul>";
    } else {
        echo "<p>Nenhum recado para exibir.</p>";
    }
}
?>
```

**`header.php`**

```php
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Mural de Recados 2.0</title>
    <link rel="stylesheet" href="style.css"> </head>
<body>
    <header>
        <h1>Mural de Recados Moderno</h1>
    </header>
    <main>
```

**`footer.php`**

```php
    </main>
    <footer>
        <p>&copy; <?php echo date('Y'); ?> - Todos os direitos reservados.</p>
    </footer>
</body>
</html>
```

**`index.php` (Arquivo Principal)**

```php
<?php
// Inclui os arquivos de configuração e funções
require_once 'config.php';
require_once 'header.php';

// Array associativo para mais detalhes
$recados_db = [
    ['autor' => 'Carlos', 'mensagem' => 'Primeiro recado do mural!'],
    ['autor' => 'Ana', 'mensagem' => 'PHP é muito poderoso.'],
];

// Lógica principal da página
echo "<h2>Recados:</h2>";
// Sim, podemos melhorar isso...
echo "<ul>";
foreach ($recados_db as $item) {
    echo "<li><strong>" . formatarRecado($item['autor']) . " disse:</strong> " . formatarRecado($item['mensagem']) . "</li>";
}
echo "</ul>";


// Inclui o rodapé
require_once 'footer.php';
?>
```

-----

### **Módulo 4: Formulários e Superglobais (Interatividade Real)**

O momento da mágica: o usuário envia dados para o servidor.

1.  **Formulários HTML:**
      * Métodos `GET` vs. `POST` e quando usar cada um.
2.  **Superglobais:**
      * Recebendo dados com `$_POST` e `$_GET`.
      * `$_SERVER` para obter informações do servidor.
3.  **Validação de Dados:**
      * A importância de NUNCA confiar nos dados do usuário.
      * Funções de validação: `empty()`, `isset()`, `filter_var()`.

**Exemplo Prático do Módulo 4 (Adicionando recados via formulário):**

**`index.php` (Atualizado)**

```php
<?php
require_once 'config.php';
// Simula um "banco de dados" em sessão para persistir os dados entre requisições
session_start();

// Inicializa a lista de recados se não existir
if (!isset($_SESSION['recados'])) {
    $_SESSION['recados'] = [];
}

// Lógica para processar o formulário
$erro = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $autor = $_POST['autor'] ?? '';
    $mensagem = $_POST['mensagem'] ?? '';

    if (empty($autor) || empty($mensagem)) {
        $erro = "Todos os campos são obrigatórios!";
    } else {
        // Adiciona o novo recado à sessão
        $_SESSION['recados'][] = [
            'autor' => $autor,
            'mensagem' => $mensagem,
            'data' => date('d/m/Y H:i')
        ];
        // Redireciona para evitar reenvio do formulário ao atualizar a página
        header("Location: index.php");
        exit;
    }
}

require_once 'header.php';
?>

<h2>Deixe seu Recado</h2>

<?php if (!empty($erro)): ?>
    <p style="color: red;"><?php echo $erro; ?></p>
<?php endif; ?>

<form action="index.php" method="POST">
    <div>
        <label for="autor">Seu Nome:</label>
        <input type="text" id="autor" name="autor">
    </div>
    <br>
    <div>
        <label for="mensagem">Sua Mensagem:</label><br>
        <textarea id="mensagem" name="mensagem" rows="4" cols="50"></textarea>
    </div>
    <br>
    <button type="submit">Enviar Recado</button>
</form>

<hr>

<h2>Recados Salvos</h2>
<?php
if (!empty($_SESSION['recados'])) {
    echo "<ul>";
    // Exibe em ordem inversa (mais novos primeiro)
    foreach (array_reverse($_SESSION['recados']) as $recado) {
        echo "<li>";
        echo "<strong>" . formatarRecado($recado['autor']) . "</strong>";
        echo " <small>(" . $recado['data'] . ")</small>:<br>";
        echo "<em>" . formatarRecado($recado['mensagem']) . "</em>";
        echo "</li><br>";
    }
    echo "</ul>";
} else {
    echo "<p>Seja o primeiro a deixar um recado!</p>";
}
?>

<?php require_once 'footer.php'; ?>
```

> **Nota Didática:** O uso de `session` aqui é um passo intermediário antes de introduzir o banco de dados. Mostra como manter dados persistentes durante a visita do usuário.

-----

### **Módulo 5: Persistência de Dados com Banco de Dados (Tornando-o Profissional)**

1.  **Introdução a Bancos de Dados Relacionais (MySQL/MariaDB).**
2.  **Criando a Tabela:** Usar o phpMyAdmin para criar uma tabela `recados` (`id`, `autor`, `mensagem`, `data_criacao`).
3.  **Conectando ao Banco de Dados com PDO:**
      * **Por que PDO?** Explicar que é a forma moderna e segura (prevenção contra SQL Injection).
      * Criar um arquivo de conexão (`conexao.php`).
4.  **Operações CRUD com PDO:**
      * **Create:** `INSERT` para salvar o recado do formulário no banco.
      * **Read:** `SELECT` para ler e exibir os recados do banco.
      * **Update:** (Tópico avançado) Adicionar um link de "editar".
      * **Delete:** (Tópico avançado) Adicionar um link de "excluir".
      * **USO OBRIGATÓRIO DE PREPARED STATEMENTS\!**

**Exemplo Prático do Módulo 5 (Substituindo a sessão pelo banco de dados):**

  * Seria criado um `conexao.php`.
  * O `index.php` seria refatorado para usar `PDO::prepare()` e `execute()` para inserir e selecionar dados da tabela `recados`, eliminando a necessidade de `$_SESSION` para armazenar os recados.

-----

### **Módulo 6: Tópicos Essenciais de Segurança e Boas Práticas**

Um módulo dedicado para reforçar a importância da segurança.

1.  **Prevenção de SQL Injection:**
      * Revisar na prática como os *prepared statements* do PDO resolvem isso. Mostrar um exemplo vulnerável vs. um seguro.
2.  **Prevenção de Cross-Site Scripting (XSS):**
      * Explicar o que é XSS.
      * Demonstrar o uso de `htmlspecialchars()` ao **exibir** dados que vieram do usuário. (Já foi introduzido na função `formatarRecado`, agora explicamos o porquê).
3.  **Organização de Arquivos:**
      * Estruturar o projeto em pastas: `/public`, `/src`, `/config`, etc.

-----

### **Módulo 7: Conclusão e Próximos Passos**

1.  **Revisão do Projeto:** Olhar para o "Mural de Recados" completo e funcional.
2.  **O que vem a seguir?**
      * **Orientação a Objetos (OOP) em PHP:** Como organizar o código de forma ainda mais profissional.
      * **Composer:** O gerenciador de dependências do PHP.
      * **Frameworks:** Uma breve introdução ao que são Laravel e Symfony e por que eles aceleram o desenvolvimento.
---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
