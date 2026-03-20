---
layout: default
title: Gist do GitHub: Como Usar e Onde Funciona
---

# Gist do GitHub: Como Usar e Onde Funciona

Códigos do **Gist do GitHub** podem ser incluídos em diversos locais, desde que suportem **HTML e JavaScript**. Aqui estão algumas opções comuns:

### ✅ **Locais onde podem ser incluídos**

1. **Páginas HTML (Sites e Blogs)**
    
    - Basta inserir a tag `<script>` dentro do corpo (`<body>`) ou em qualquer seção HTML.
    - Exemplo:
        
        ```html
        <html>
        <body>
            <h3>Exemplo de Código Gist</h3>
            <script src="https://gist.github.com/ricardotecpro/cba17ff3ac5bdf5d9fa33d8f45d121b4.js"></script>
        </body>
        </html>
        ```
        
2. **WordPress (Modo Clássico ou Gutenberg)**
    
    - **Modo Clássico**: Insira a tag `<script>` na aba "Texto" (Editor HTML).
    - **Gutenberg**: Use um bloco "Custom HTML" e cole o `<script>` do Gist.
3. **Markdown com suporte a HTML**
    
    - Algumas plataformas (como Jekyll e GitHub Pages) permitem HTML dentro do Markdown.
    - Exemplo:
        
        ```markdown
        ## Código do Gist
        <script src="https://gist.github.com/ricardotecpro/cba17ff3ac5bdf5d9fa33d8f45d121b4.js"></script>
        ```
        
4. **Aplicações React/Vue (com uso de `dangerouslySetInnerHTML`)**
    
    - No **React**, insira a tag como HTML dinâmico:
        
        ```jsx
        import React from "react";
        
        function GistEmbed() {
          return (
            <div dangerouslySetInnerHTML={{
              __html: `<script src="https://gist.github.com/ricardotecpro/cba17ff3ac5bdf5d9fa33d8f45d121b4.js"></script>`
            }} />
          );
        }
        
        export default GistEmbed;
        ```
        
    - No **Vue.js**, use `v-html`:
        
        ```vue
        <template>
          <div v-html="gistCode"></div>
        </template>
        
        <script>
        export default {
          data() {
            return {
              gistCode: `<script src="https://gist.github.com/ricardotecpro/cba17ff3ac5bdf5d9fa33d8f45d121b4.js"></script>`
            };
          }
        };
        </script>
        ```
        

---

### ❌ **Onde não funcionam nativamente**

1. **Markdown puro (sem suporte a HTML)**
    
    - Markdown puro **não processa JavaScript**, então o `<script>` do Gist não será executado.
2. **Plataformas bloqueadas por segurança**
    
    - Algumas plataformas como **Medium, LinkedIn Articles, Notion, Google Docs** não permitem `<script>`.
3. **Emails (HTML/CSS inline apenas)**
    
    - Clientes de e-mail bloqueiam `<script>`, então Gists não funcionam.

Se precisar exibir códigos do Gist em plataformas que bloqueiam scripts, uma alternativa é **inserir um link direto** para o Gist:

🔗 **[Veja o código no Gist](https://gist.github.com/ricardotecpro/cba17ff3ac5bdf5d9fa33d8f45d121b4)**.




### 📌 **Uso de Gist no Google Sites e Microsoft Teams**

#### ✅ **Google Sites**

O **Google Sites** **não permite** o uso de `<script>` diretamente, pois bloqueia códigos JavaScript externos por motivos de segurança. No entanto, existem algumas alternativas:

1. **Usar um "Incorporar" via URL:**
    
    - Vá até o **Google Sites** → Clique em **"Inserir" → "Incorporar"**
    - Escolha a aba **"Por URL"**
    - Insira o link do Gist:
        
        ```
        https://gist.github.com/ricardotecpro/cba17ff3ac5bdf5d9fa33d8f45d121b4
        ```
        
    - Isso criará um iframe exibindo o código.
2. **Copiar e colar o código diretamente no site**
    
    - Se quiser apenas exibir o código, copie o conteúdo do Gist e cole como **bloco de código formatado**.

---

#### ❌ **Microsoft Teams**

O **Microsoft Teams** não permite `<script>` em mensagens, postagens ou guias padrão. Porém, há algumas alternativas:

1. **Postar o link direto do Gist**
    
    - Envie apenas o link para que os usuários possam abrir no navegador.
    - Exemplo:
        
        ```
        https://gist.github.com/ricardotecpro/cba17ff3ac5bdf5d9fa33d8f45d121b4
        ```
        
2. **Criar um guia com uma página da Web**
    
    - No **Teams**, vá até um canal → Clique em **"+" (Adicionar guia)** → Escolha **"Site"**
    - Cole o link do Gist e salve.
3. **Usar o OneNote no Teams**
    
    - Se seu time usa **OneNote**, você pode colar o código formatado dentro de uma página do OneNote e compartilhar no Teams.

### 📌 **Conclusão**

- **Google Sites:** ❌ Não suporta `<script>`, mas permite incorporar via URL.
- **Microsoft Teams:** ❌ Não suporta `<script>`, mas você pode compartilhar o link ou adicionar um guia com a página do Gist.

Se precisar incorporar códigos em sites sem suporte a `<script>`, o ideal é usar serviços como **JSFiddle, CodePen ou compartilhar o Gist como link.** 🚀


---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)

