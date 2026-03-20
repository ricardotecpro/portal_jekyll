---
layout: default
title: 🚀 Guia Didático: Migrando de Swing para JavaFX (Botão e Contador)
---

## 🚀 Guia Didático: Migrando de Swing para JavaFX (Botão e Contador)

Esta sequência didática refatora o projeto de contador usando JavaFX, o framework moderno para GUIs em Java. Focaremos nas diferenças arquiteturais e nas práticas recomendadas.

### O que vamos usar?

  * **JavaFX:** O framework sucessor do Swing (agora parte do projeto OpenJFX).
  * **`Application`:** A classe base para qualquer app JavaFX, gerenciando o ciclo de vida.
  * **`Stage`:** A "janela" principal (equivalente ao `JFrame`).
  * **`Scene`:** O "conteúdo" dentro da janela (contém os componentes).
  * **Layout Panes (ex: `VBox`):** Contêineres que organizam os componentes (substituem os `LayoutManager`).
  * **`Button` e `Label`:** Os controles da interface.
  * **Lambdas:** A forma moderna de tratar eventos (substitui `ActionListener`).

-----

### Passo 1: O Esqueleto JavaFX (Stage e Scene)

Em JavaFX, a estrutura base é diferente. A classe principal deve estender `Application` e o ponto de entrada da GUI é o método `start()`.

**Arquivo:** `ContadorFXApp.java`

```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.VBox; // Um layout pane vertical
import javafx.stage.Stage;

/**
 * Nossa classe principal estende Application.
 * Ela NÃO é a janela (Stage), ela GERENCIA a janela.
 */
public class ContadorFXApp extends Application {

    /**
     * O método 'start' é o ponto de entrada principal para
     * todas as aplicações JavaFX. A 'primaryStage' (janela)
     * é fornecida pelo framework.
     */
    @Override
    public void start(Stage primaryStage) {
        
        // 1. O Layout: Um VBox organiza os componentes verticalmente
        VBox root = new VBox();
        
        // 2. A Cena: Contém o layout. Definimos o tamanho aqui.
        Scene scene = new Scene(root, 300, 150);

        // 3. O Palco (Stage): Configurações da janela
        primaryStage.setTitle("Meu Primeiro Contador JavaFX");
        primaryStage.setScene(scene); // Define a cena na janela
        primaryStage.show();          // Exibe a janela
    }

    /**
     * O 'main' em JavaFX é simples: ele apenas
     * chama 'launch()', que inicializa o framework
     * e chama o método 'start()' na thread correta.
     */
    public static void main(String[] args) {
        launch(args);
    }
}
```

---
### Passo 2 **Arquivo:** `pom.xml`

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" 
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>contadorfx</artifactId>
    <version>1.0.0</version>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.release>21</maven.compiler.release>
<javafx.version>21</javafx.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.openjfx</groupId>
            <artifactId>javafx-controls</artifactId>
            <version>${javafx.version}</version>
        </dependency>
    </dependencies>

    <build>
        <sourceDirectory>src/main/java</sourceDirectory>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.11.0</version>
                <configuration>
                    <release>${maven.compiler.release}</release>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.openjfx</groupId>
                <artifactId>javafx-maven-plugin</artifactId>
                <version>0.0.8</version>
                <configuration>
                    <mainClass>com.example.ContadorFXApp</mainClass>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

---

**➡️ O que fazer:** Salve, compile e execute. (Nota: Dependendo da sua configuração de Java, você pode precisar [configurar o JavaFX SDK](https://openjfx.io/openjfx-docs/) se estiver usando Java 11+). Você verá uma janela vazia.

-----

### Passo 2: Adicionando Componentes e Layout

Vamos declarar o estado (contador) e os componentes (`Button`, `Label`). Em JavaFX, adicionamos componentes a um *layout pane* (nosso `VBox`), e não diretamente à janela.

Vamos modificar `ContadorFXApp.java`:

```java
import javafx.application.Application;
import javafx.geometry.Insets; // Para espaçamento (padding)
import javafx.geometry.Pos;     // Para alinhamento
import javafx.scene.Scene;
import javafx.scene.control.Button; // Importação do JavaFX
import javafx.scene.control.Label;  // Importação do JavaFX
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class ContadorFXApp extends Application {

    // --- Variável de Estado ---
    // Deve ser uma variável de instância para ser acessada pelo handler
    private int contador;

    // --- Componentes (Nós da Cena) ---
    private Button botaoClique;
    private Label labelContador;

    @Override
    public void start(Stage primaryStage) {
        
        // --- Inicializando o Estado e Componentes ---
        contador = 0;
        botaoClique = new Button("Clique em mim!");
        labelContador = new Label("Contador: " + contador);

        // --- Configurando o Layout (VBox) ---
        // 1. Cria o VBox com espaçamento de 10px entre os filhos
        VBox root = new VBox(10); 
        
        // 2. Centraliza os filhos dentro do VBox
        root.setAlignment(Pos.CENTER); 
        
        // 3. Adiciona os componentes (nós) ao layout
        root.getChildren().addAll(botaoClique, labelContador);

        // --- Configurando a Cena e o Palco ---
        Scene scene = new Scene(root, 300, 150);
        primaryStage.setTitle("Meu Primeiro Contador JavaFX");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
```

**➡️ O que fazer:** Execute novamente. Agora você verá o botão e o rótulo, centralizados verticalmente. Clicar ainda não faz nada.

-----

### Passo 3: A Lógica (Handler com Lambda)

JavaFX usa um modelo de eventos mais moderno. Em vez de forçar a classe a implementar `ActionListener`, anexamos a lógica diretamente ao componente usando o método `setOnAction()`. A forma idiomática de fazer isso é com uma **expressão lambda**.

Este é o código final e completo:

```java
import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

/**
 * Versão JavaFX completa.
 * A lógica do evento é tratada com uma expressão lambda.
 */
public class ContadorFXApp extends Application {

    // Variável de estado
    private int contador;

    // Componentes (Nós)
    private Button botaoClique;
    private Label labelContador;

    @Override
    public void start(Stage primaryStage) {
        
        // --- Inicialização ---
        contador = 0;
        botaoClique = new Button("Clique em mim!");
        labelContador = new Label("Contador: " + contador);

        // --- Passo 3: Lógica do Evento (Handler) ---
        
        // Define a ação a ser executada quando o botão for clicado.
        // Usamos uma expressão lambda (event -> ...)
        // Esta é a prática moderna que substitui as classes internas anônimas.
        botaoClique.setOnAction(event -> {
            // 1. Atualiza o estado
            contador++;
            // 2. Atualiza a UI (reflete o estado)
            labelContador.setText("Contador: " + contador);
        });

        // --- Layout (VBox) ---
        VBox root = new VBox(10); 
        root.setAlignment(Pos.CENTER); 
        root.getChildren().addAll(botaoClique, labelContador);

        // --- Cena e Palco ---
        Scene scene = new Scene(root, 300, 150);
        primaryStage.setTitle("Meu Primeiro Contador JavaFX");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    /**
     * Ponto de entrada que inicializa o toolkit JavaFX.
     */
    public static void main(String[] args) {
        launch(args);
    }
}
```

**➡️ O que fazer:** Compile e execute. A aplicação agora está funcional e idêntica, em comportamento, à versão Swing.

-----

### 🎓 Dissecando a Arquitetura JavaFX (Revisão Didática)

1.  **`Application` e Ciclo de Vida:** Em vez de instanciar um `JFrame` no `main`, você estende `Application` e o framework chama `start()`. O `main` apenas `launch()`a aplicação. Isso dá ao JavaFX controle sobre o ciclo de vida e a *thread* da UI (a *JavaFX Application Thread*), eliminando a necessidade de `SwingUtilities.invokeLater()`.

2.  **O *Scene Graph* (Palco, Cena, Nós):** Swing mistura contêineres e componentes. JavaFX tem uma hierarquia clara chamada *Scene Graph*:

      * **`Stage` (Palco):** A janela de nível superior (o `JFrame`).
      * **`Scene` (Cena):** O conteúdo *dentro* da janela. Uma `Stage` só pode ter uma `Scene` por vez.
      * **`Node` (Nó):** Qualquer item dentro da `Scene`. Isso inclui **Controles** (`Button`, `Label`) e **Layout Panes** (`VBox`).
      * **Hierarquia:** `Stage` contém `Scene` que contém um *Nó Raiz* (`VBox`) que contém *Nós Filhos* (`Button`, `Label`).

3.  **Layouts como Nós:** Em Swing, layouts (`FlowLayout`) são *políticas* aplicadas a um contêiner (`JFrame`). Em JavaFX, os layouts (`VBox`, `HBox`, `BorderPane`, `GridPane`) são *Nós* que existem no *Scene Graph*. Você adiciona filhos a eles (`root.getChildren().add(...)`). Isso é mais consistente e poderoso.

4.  **Propriedades e Configuração:** Em vez de métodos como `setSize()` e `setAlignment()`, JavaFX favorece **Propriedades** (como `setAlignment(Pos.CENTER)` e `setSpacing(10)` no construtor do `VBox`). Isso permite *data binding* (vinculação de dados), um conceito arquitetural muito mais avançado.

5.  **Eventos (Lambdas vs. Listeners):**

      * **Swing:** `botao.addActionListener(this);` exige que a classe `implements ActionListener` e tenha um método `actionPerformed`. Isso cria um **acoplamento forte** da lógica do evento à classe da janela.
      * **JavaFX:** `botao.setOnAction(event -> { ... });` anexa um bloco de código (uma lambda) diretamente ao evento. A classe da janela *não precisa saber* sobre a interface `EventHandler`. Isso promove **baixo acoplamento** e **alta coesão**, pois a lógica vive junto ao componente que a dispara. É uma prática de engenharia de software superior.

---
### Diagnóstico do Erro

O erro de compilação é `invalid method declaration; return type required` na linha `public ContadorApp()`.

**Causa Raiz:** Você tem uma grave inconsistência entre seus arquivos de projeto:

1.  **O Problema (Código):** O arquivo `ContadorFXApp.java` contém código **Java Swing** (`import javax.swing.JFrame;` etc.). Além disso, o nome da classe é `ContadorFXApp`, mas seu construtor chama-se `ContadorApp()`. Em Java, um construtor **deve** ter o nome exato da classe. O compilador vê `ContadorApp()` como um método normal que está sem tipo de retorno (como `void`).

2.  **O Desejado (Configuração):** Seus arquivos `pom.xml`, `settings.json` e `launch.json` estão todos configurados para um projeto **JavaFX**, não Swing.

Você está colocando código Swing em um arquivo que deveria conter código JavaFX.

-----

### Ação Corretiva 1: O Código

Você deve substituir **todo o conteúdo** do seu arquivo `src/ContadorFXApp.java` pelo código JavaFX correto, que usa `javafx.application.Application`.

**Arquivo: `src/ContadorFXApp.java` (Conteúdo Correto)**

```java
import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

/**
 * Versão JavaFX completa.
 * A lógica do evento é tratada com uma expressão lambda.
 */
public class ContadorFXApp extends Application { // Deve estender Application

    // Variável de estado
    private int contador;

    // Componentes (Nós)
    private Button botaoClique;
    private Label labelContador;

    @Override
    public void start(Stage primaryStage) { // Ponto de entrada do JavaFX
        
        // --- Inicialização ---
        contador = 0;
        botaoClique = new Button("Clique em mim!");
        labelContador = new Label("Contador: " + contador);

        // --- Lógica do Evento (Handler) ---
        botaoClique.setOnAction(event -> {
            contador++;
            labelContador.setText("Contador: " + contador);
        });

        // --- Layout (VBox) ---
        VBox root = new VBox(10); 
        root.setAlignment(Pos.CENTER); 
        root.getChildren().addAll(botaoClique, labelContador);

        // --- Cena e Palco ---
        Scene scene = new Scene(root, 300, 150);
        primaryStage.setTitle("Meu Primeiro Contador JavaFX");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    /**
     * Ponto de entrada que inicializa o toolkit JavaFX.
     */
    public static void main(String[] args) {
        launch(args); // Método correto para iniciar o app JavaFX
    }
}
```

-----

### Ação Corretiva 2: A Execução (Prática Correta)

Seu comando `javac ...; java ...` ignora seu `pom.xml`. Você criou um projeto **Maven**, portanto, deve usar o Maven para compilá-lo e executá-lo. O Maven lerá seu `pom.xml` e usará o `javafx-maven-plugin` para executar o projeto com todos os módulos corretos.

Abra seu terminal na raiz do projeto (`ContadorFXApp`, onde está o `pom.xml`) e execute:

```bash
mvn clean javafx:run
```

**O que este comando faz:**

  * `mvn clean`: Limpa quaisquer compilações antigas.
  * `mvn javafx:run`: Compila seu código e executa a `mainClass` definida no `pom.xml` (que é `ContadorFXApp`), gerenciando automaticamente o *module-path* e o *classpath* para você.

---

Aqui está a atualização do guia, continuando de onde paramos (aplicação funcional) e adicionando a camada de estilização profissional com CSS, conforme os arquivos fornecidos.

-----

### Passo 4: Estilização com CSS (Separando Aparência e Lógica)

Uma das maiores vantagens arquiteturais do JavaFX sobre o Swing é o suporte nativo a **CSS (Cascading Style Sheets)**. Isso nos permite separar completamente a **lógica** (o código Java) da **apresentação** (a aparência), um princípio fundamental da engenharia de software moderna (Separation of Concerns - SoC).

Em vez de definirmos fontes, cores e preenchimentos (*padding*) no código Java (o que é uma má prática), nós delegamos isso a um arquivo `.css` externo.

#### 1\. Crie o Arquivo de Estilo (`styles.css`)

O Maven espera que arquivos de recursos (como CSS, imagens, fontes) fiquem em `src/main/resources`. Para que o caminho `/com/example/styles.css` funcione, a estrutura de pastas deve ser:

```
ContadorFXApp/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── example/
│   │   │           └── ContadorFXApp.java
│   │   └── resources/
│   │       └── com/
│   │           └── example/
│   │               └── styles.css  <-- CRIE ESTE ARQUIVO AQUI
└── pom.xml
```

**Arquivo:** `src/main/resources/com/example/styles.css`

```css
/* Define estilos globais para o nó raiz */
.root {
    -fx-background-color: #f4f4f4;
    -fx-font-family: "Arial", sans-serif;
}

/* Estiliza TODOS os componentes Button */
.button {
    -fx-background-color: #007bff; /* Azul moderno */
    -fx-text-fill: white;
    -fx-font-size: 14px;
    -fx-padding: 10px 20px;
    -fx-background-radius: 5px; /* Bordas arredondadas */
    -fx-border-radius: 5px;
    -fx-cursor: hand; /* Muda o cursor ao passar por cima */
}

/* Define o estado "hover" (mouse por cima) */
.button:hover {
    -fx-background-color: #0056b3; /* Azul mais escuro */
}

/* Estiliza TODOS os componentes Label */
.label {
    -fx-font-size: 18px;
    -fx-text-fill: #333333;
    -fx-font-weight: bold;
}
```

#### 2\. Atualize a Classe Java (`ContadorFXApp.java`)

Agora, modificamos o método `start()` para carregar este arquivo CSS e aplicar as classes aos nossos nós (componentes).

**Arquivo:** `src/main/java/com/example/ContadorFXApp.java` (Versão Final)

```java
package com.example;

import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class ContadorFXApp extends Application {

    private int contador;
    private Button botaoClique;
    private Label labelContador;

    @Override
    public void start(Stage primaryStage) {

        contador = 0;
        botaoClique = new Button("Clique em mim!");
        labelContador = new Label("Contador: " + contador);

        botaoClique.setOnAction(event -> {
            contador++;
            labelContador.setText("Contador: " + contador);
        });

        VBox root = new VBox(20); // Aumentado o espaçamento
        root.getStyleClass().add("root");
        root.setAlignment(Pos.CENTER);
        root.getChildren().addAll(labelContador, botaoClique);

        Scene scene = new Scene(root, 350, 200);
        scene.getStylesheets().add(getClass().getResource("/com/example/styles.css").toExternalForm());

        primaryStage.setTitle("Contador Moderno");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
```




#### 3\. Atualize a Classe Java (`pom.xml`)

**Arquivo:** `pom.xml` (Versão Final)


```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" 
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>contadorfx</artifactId>
    <version>1.0.0</version>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.release>21</maven.compiler.release>
        <javafx.version>21</javafx.version>
        <!-- plataforma para dependências JavaFX (ajuste para 'win', 'linux' ou 'mac') -->
        <javafx.platform>win</javafx.platform>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.openjfx</groupId>
            <artifactId>javafx-controls</artifactId>
            <version>${javafx.version}</version>
            <classifier>${javafx.platform}</classifier>
        </dependency>
        <dependency>
            <groupId>org.openjfx</groupId>
            <artifactId>javafx-fxml</artifactId>
            <version>${javafx.version}</version>
            <classifier>${javafx.platform}</classifier>
        </dependency>
    </dependencies>

    <build>
        <sourceDirectory>src/main/java</sourceDirectory>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.11.0</version>
                <configuration>
                    <release>${maven.compiler.release}</release>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.openjfx</groupId>
                <artifactId>javafx-maven-plugin</artifactId>
                <version>0.0.8</version>
                <configuration>
                    <mainClass>com.example.ContadorFXApp</mainClass>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>

```


#### 4\. Execute o Projeto

Use o Maven para compilar, empacotar os recursos (o CSS) e executar a aplicação:

```bash
mvn clean javafx:run
```


```bash
mvn -DskipTests clean package
mvn -DskipTests javafx:run
```



-----

### 🎓 Dissecando a Arquitetura (Revisão Didática)

1.  **Separation of Concerns (SoC):** Sua lógica (`contador++`) está em `.java`. Sua aparência (`-fx-background-color`) está em `.css`. Se um designer quiser alterar as cores, ele não precisa tocar no código Java, evitando a introdução de *bugs* lógicos. Esta é uma arquitetura muito mais robusta e manutenível.
2.  **`src/main/resources` vs. `src/main/java`:** O Maven trata estes diretórios de forma diferente. `java` é para código-fonte a ser compilado. `resources` é para arquivos estáticos (CSS, imagens, XML) que devem ser copiados *como estão* para o *classpath* do produto final (o arquivo JAR ou o diretório `target/classes`).
3.  **Seletores JavaFX:** O JavaFX mapeia automaticamente seus componentes a classes CSS. Um `Button` pode ser estilizado com `.button`. Um `Label` com `.label`. Você pode criar classes customizadas (como fizemos com `.root`) e aplicá-las manualmente com `componente.getStyleClass().add("minha-classe")`.
4.  **Carregamento de Recursos:** A linha `getClass().getResource("/com/example/styles.css")` é a forma padrão em Java para carregar um arquivo do *classpath*. O `/` no início significa "procurar a partir da raiz do classpath" (que, para o Maven, é `target/classes`, onde o conteúdo de `src/main/resources` foi copiado).

---


### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

