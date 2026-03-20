# Spring MVC com Angular

Tutorial sobre **MVC (Model-View-Controller)**, que é um padrão de arquitetura muito popular usado em diversas aplicações, incluindo aplicações web. Vamos explicar o conceito de MVC, sua estrutura e como implementá-lo com Spring Boot (back-end) e Angular (front-end).

---

# **Tutorial: Entendendo e Implementando o Padrão MVC**

## **1. O que é o Padrão MVC?**

O **MVC (Model-View-Controller)** é um padrão de design de software que divide uma aplicação em três componentes principais, com o objetivo de separar a lógica de negócios, a interface do usuário e o controle das interações:

- **Model**: Representa a camada de dados e a lógica de negócios da aplicação. O model lida com a manipulação dos dados (como bancos de dados, objetos, etc.).
- **View**: Representa a interface do usuário. A view é responsável por exibir os dados fornecidos pelo model.
- **Controller**: Gerencia as interações do usuário. O controller lida com as entradas do usuário, processa as ações e, em seguida, atualiza a view e o model de acordo.

A principal vantagem do padrão MVC é a **separação de preocupações**, que permite um desenvolvimento mais modular, facilitando manutenção e escalabilidade.

---

## **2. Como o MVC Funciona?**

O fluxo de execução em uma aplicação MVC é geralmente o seguinte:

1. **O usuário interage com a View** (por exemplo, clicando em um botão ou preenchendo um formulário).
2. **O Controller recebe a entrada do usuário** e chama os métodos apropriados no Model para processar os dados.
3. **O Model processa a lógica de negócios e retorna os dados** ao Controller.
4. **O Controller atualiza a View** com os dados retornados do Model.
5. **A View exibe os dados atualizados** para o usuário.

---

## **3. Implementando o MVC com Spring Boot (Back-end)**

### **3.1. Criando um Projeto Spring Boot**

Vamos criar um projeto Spring Boot que utiliza o padrão MVC.

1. **Usando o Spring Initializr**, gere um novo projeto Spring Boot com as seguintes dependências:
   - **Spring Web** (para criar o back-end da API).
   - **Spring Data JPA** (para interagir com o banco de dados).
   - **H2 Database** (como banco de dados em memória para testes).

2. **Baixe o projeto** e extraia os arquivos. Abra o projeto na sua IDE preferida.

### **3.2. Criando o Model**

O **Model** é a camada responsável por representar os dados da aplicação. Vamos criar uma classe de **Produto** que será nossa entidade.

```java
package com.exemplo.mvc.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Produto {

    @Id
    private Long id;
    private String nome;
    private double preco;

    // Construtores, getters e setters
    public Produto() {}

    public Produto(Long id, String nome, double preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }
}
```

### **3.3. Criando o Repositório**

Agora, crie um repositório para manipular os dados no banco de dados usando Spring Data JPA.

```java
package com.exemplo.mvc.repository;

import com.exemplo.mvc.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
```

### **3.4. Criando o Controller**

O **Controller** vai manipular as requisições HTTP e interagir com o Model para fornecer os dados para a View. Vamos criar um controller que retorna os produtos em formato JSON (que será consumido pelo front-end).

```java
package com.exemplo.mvc.controller;

import com.exemplo.mvc.model.Produto;
import com.exemplo.mvc.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProdutoController {

    @Autowired
    private ProdutoRepository produtoRepository;

    @GetMapping("/produtos")
    public List<Produto> obterProdutos() {
        return produtoRepository.findAll();
    }
}
```

### **3.5. Configurando o Banco de Dados (H2)**

Adicione a configuração do banco de dados H2 no arquivo `application.properties` para usar o banco em memória:

```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=password
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.h2.console.enabled=true
```

---

## **4. Implementando o MVC com Angular (Front-end)**

Agora, vamos criar a parte do **View** no Angular para exibir os produtos.

### **4.1. Criando o Projeto Angular**

Se você ainda não tem o Angular CLI, instale-o globalmente com:

```bash
npm install -g @angular/cli
```

Crie um novo projeto Angular:

```bash
ng new frontend
```

### **4.2. Instalando o HttpClientModule**

No Angular, você precisa importar o `HttpClientModule` para fazer requisições HTTP. No arquivo `src/app/app.module.ts`, adicione a seguinte importação:

```typescript
import { HttpClientModule } from '@angular/common/http';
```

E inclua `HttpClientModule` na lista de **imports** no `@NgModule`:

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### **4.3. Criando o Serviço Angular**

Crie um serviço para consumir a API REST que criamos no Spring Boot.

```bash
ng generate service produto
```

Modifique o arquivo `produto.service.ts` para usar o **HttpClient** e obter os produtos da API Spring Boot:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = 'http://localhost:8080/produtos';  // URL da API do Spring Boot

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }
}
```

### **4.4. Exibindo os Produtos no Componente Principal**

Agora, no componente principal (`app.component.ts`), injete o serviço e obtenha os produtos:

```typescript
import { Component, OnInit } from '@angular/core';
import { ProdutoService, Produto } from './produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produtoService.getProdutos().subscribe(produtos => {
      this.produtos = produtos;
    });
  }
}
```

No arquivo `app.component.html`, exiba a lista de produtos:

```html
<div style="text-align:center">
  <h1>Lista de Produtos</h1>
  <ul>
    <li *ngFor="let produto of produtos">
      {{ produto.nome }} - R$ {{ produto.preco }}
    </li>
  </ul>
</div>
```

---

## **5. Rodando as Aplicações**

### **5.1. Rodando o Back-end (Spring Boot)**

Execute o Spring Boot da sua IDE ou via terminal:

```bash
mvn spring-boot:run
```

Isso irá iniciar o servidor Spring Boot na porta `8080`.

### **5.2. Rodando o Front-end (Angular)**

No terminal, dentro do diretório do projeto Angular, execute:

```bash
ng serve
```

Isso iniciará o servidor Angular na porta `4200`.

### **5.3. Testando a Aplicação**

Agora, se você abrir `http://localhost:4200` no seu navegador, a aplicação Angular irá se comunicar com o Spring Boot e exibir a lista de produtos.

---

## **6. Conclusão**

Neste tutorial, você aprendeu o padrão **MVC (Model-View-Controller)** e como implementá-lo em uma aplicação usando **Spring Boot** para o back-end e **Angular** para o front-end. Ao aplicar o padrão MVC, conseguimos separar claramente as responsabilidades em três componentes distintos:

- **Model**: Dados e lógica de negócios.
- **View**: Interface do usuário (UI).
- **Controller**: Gerencia as interações entre a View e o Model.

Com isso, sua aplicação fica mais modular, fácil de manter e escalável. Você pode expandir essa arquitetura com mais funcionalidades como autenticação, validação, criação, edição e exclusão de produtos, entre outras!


---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
