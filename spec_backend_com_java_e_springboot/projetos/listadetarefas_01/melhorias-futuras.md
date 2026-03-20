---
layout: default
title: MELHORIAS-FUTURAS
---

Remover o `/web` estava incompleto, pois temos o cliente JavaFX.

** Remover o `/web` quebraria tudo, pois seu App Web e seu App Desktop entrariam em conflito, ambos tentando usar a mesma URL `/tarefas`.



No arquivo `TarefaApiService.java`, seu App Desktop está configurado para se comunicar com esta URL:
`private final String API_URL = "http://localhost:8080/tarefas";`

Isso explica por que sua aplicação "está funcionando". Seu app desktop está, por acidente, conversando com os endpoints do `TarefaWebController` (o do HTML), e não com o `TarefaApiController` (o do JSON).

### A Solução Correta: A Arquitetura de 3 Vias

Para que tudo funcione de forma limpa, profissional e sem conflitos, precisamos de 3 endereços distintos:

1.  **API (JSON):** `http://localhost:8080/api/v1/tarefas` (Para o App Desktop)
2.  **App Web (HTML):** `http://localhost:8080/web/tarefas` (Para o Navegador/HTMX)
3.  **Raiz (HTML):** `http://localhost:8080/` (Para carregar a página `index.html` inicial)

O seu `TarefaWebController` (do post anterior) já está usando `/web/tarefas`. **Isso está CORRETO\!**

O que está **INCORRETO** são os clientes (o HTML e o JavaFX) que não estão chamando as rotas certas.

-----

### Plano de Ação (A Correção Definitiva)

Aqui está o que você precisa fazer.

#### 1\. Corrigir o Cliente JavaFX (App Desktop)

Seu app desktop deve falar com a **API (JSON)**, não com o app Web (HTML).

**Arquivo:** `TarefaApiService.java`
**Ação:** Mude a `API_URL` para apontar para sua API verdadeira (que deve ser `/api/v1/tarefas` de acordo com nossa refatoração anterior).

```java
// ...
public class TarefaApiService {
    // ...
    private final ObjectMapper objectMapper = new ObjectMapper();
    
    // MUDE ESTA LINHA:
    // DE: private final String API_URL = "http://localhost:8080/tarefas";
    // PARA:
    private final String API_URL = "http://localhost:8080/api/v1/tarefas";

    public List<Tarefa> listarTarefas() {
        HttpRequest request = HttpRequest.newBuilder()
                [cite_start].uri(URI.create(API_URL)) // [cite: 3]
                // ...
```

*(Certifique-se de que seu `TarefaApiController.java` responde em `@RequestMapping("/api/v1/tarefas")`)*

-----

#### 2\. Corrigir o Cliente Web (HTML)

Seu app web deve falar com o `TarefaWebController`. Portanto, **PRECISAMOS** adicionar o prefixo `/web/` em todos os seus arquivos HTML, para que eles correspondam às rotas do controller.

**Arquivo:** `index.html`
**Ação:** Adicione `/web` aos atributos `hx-get` e `hx-post`.

```html
<div class="header-container">
    <h1>Minha Lista de Tarefas</h1>
    <button class="btn-refresh" hx-get="/web/tarefas/list" hx-target="#tabela-tarefas" hx-swap="innerHTML">Atualizar</button>
</div>
<h2>Nova Tarefa</h2>
<form id="new-task-form" hx-post="/web/tarefas"
      hx-target="#tabela-tarefas"
      hx-swap="beforeend"
      hx-on::after-request="this.reset()">
```

**Arquivo:** `fragments.html`
**Ação:** Adicione `/web` a **TODOS** os atributos `hx-*` que usam `th:hx-`.

```html
<tr th:fragment="linha-tarefa(tarefa)" th:id="'tarefa-' + ${tarefa.id}">
    <td th:classappend="${tarefa.concluida} ? 'concluida-texto' : ''">
        <input type="checkbox" th:checked="${tarefa.concluida}"
               th:hx-post="'/web/tarefas/' + ${tarefa.id} + '/toggle'"
               th:hx-target="'#tarefa-' + ${tarefa.id}"
               hx-swap="outerHTML">
    </td>
    <td class="actions">
        <button class="btn-edit"
                th:hx-get="'/web/tarefas/' + ${tarefa.id} + '/edit'"
                th:hx-target="'#tarefa-' + ${tarefa.id}"
                hx-swap="outerHTML">Editar</button>
        <button class="btn-delete"
                th:hx-delete="'/web/tarefas/' + ${tarefa.id}"
                hx-target="closest tr"
                hx-swap="outerHTML"
                hx-confirm="Tem certeza que deseja apagar esta tarefa?">Deletar</button>
    </td>
</tr>

<tr th:fragment="edit-form(tarefa)" th:id="'tarefa-' + ${tarefa.id}">
    <td colspan="4">
        <form class="edit-form" th:hx-put="'/web/tarefas/' + ${tarefa.id}" th:hx-target="'#tarefa-' + ${tarefa.id}" hx-swap="outerHTML">
            <button type="button" class="btn-cancel" 
                    th:hx-get="'/web/tarefas/' + ${tarefa.id}" 
                    th:hx-target="'#tarefa-' + ${tarefa.id}">Cancelar</button>
        </form>
    </td>
</tr>
```

### Resumo da Solução

1.  **Mantenha** seu `TarefaWebController` com os prefixos `/web/` (do post anterior).
2.  **Corrija** seu `index.html` e `fragments.html` para **adicionar** o prefixo `/web/` em todas as chamadas `hx-*`.
3.  **Corrija** seu `TarefaApiService.java` (JavaFX) para apontar para a API correta: `http://localhost:8080/api/v1/tarefas`.

Seguindo estes 3 passos, você terá uma arquitetura limpa e robusta onde todos os seus clientes (Web e Desktop) funcionarão corretamente sem conflitos.


