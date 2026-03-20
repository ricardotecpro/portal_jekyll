# ✅ GitHub Pages

Para habilitar o GitHub Pages nas configurações do seu repositório e transformar seus arquivos Markdown (ou outro conteúdo web estático) em um site, siga estes passos:

1.  **Acesse seu Repositório no GitHub:**
    Vá para `https://github.com/SEU_USUARIO/NOME_DO_SEU_REPOSITORIO`.

2.  **Vá para as Configurações (Settings):**
    No menu superior do seu repositório, clique na aba "**Settings**" (Configurações).

     *(Substitua por uma imagem real se possível ou remova esta linha se não conseguir incorporar imagens)*

3.  **Navegue até a Seção "Pages":**
    Na barra lateral esquerda da página de Configurações, procure e clique em "**Pages**" (Páginas). Esta seção é dedicada à configuração do GitHub Pages.

     *(Substitua por uma imagem real se possível ou remova esta linha se não conseguir incorporar imagens)*

4.  **Escolha a Fonte (Source) para Publicação:**

      * **Branch:** Na seção "Build and deployment" (Construção e implantação), em "Source" (Fonte), você verá a opção "Deploy from a branch" (Implantar de um branch) selecionada por padrão.
      * **Selecione o Branch:** No menu suspenso (geralmente chamado `main`, `master` ou outro branch que você deseje usar), escolha o branch que contém os arquivos que você quer publicar. Para um material de estudo em Markdown, geralmente será o branch `main` (ou `master`).
      * **(Opcional) Escolha uma Pasta:** Logo abaixo da seleção do branch, você pode escolher uma pasta específica dentro desse branch. Se seus arquivos do site estiverem na raiz do branch, selecione `/(root)`. Se estiverem em uma pasta como `/docs`, selecione essa pasta. Para um material de estudo simples onde o `README.md` está na raiz, `/(root)` é o comum.

5.  **Salve as Alterações:**
    Após selecionar o branch (e a pasta, se aplicável), clique no botão "**Save**" (Salvar) correspondente à seleção do branch.

6.  **Aguarde a Publicação:**
    O GitHub levará alguns instantes (às vezes alguns minutos) para construir e publicar seu site. A página de configurações do Pages geralmente mostrará uma mensagem indicando que seu site está sendo publicado ou já foi publicado.

7.  **Acesse seu Site:**
    Uma vez publicado, a URL do seu site aparecerá no topo da seção "Pages". Ela geralmente segue o formato:
    `https://SEU_USUARIO.github.io/NOME_DO_SEU_REPOSITORIO/`

    Clique nesse link para ver seu material de estudo online\!

**Opções Adicionais:**

  * **Custom Domain (Domínio Personalizado):** Na mesma seção "Pages", você pode configurar um domínio personalizado se tiver um.
  * **Themes (Temas Jekyll):** O GitHub Pages usa o Jekyll nos bastidores para construir sites a partir de arquivos Markdown. Você pode escolher um tema Jekyll pré-definido para estilizar seu site rapidamente sem precisar escrever CSS personalizado. Procure pela opção "Change theme" ou similar na seção "Pages". Se você não escolher um tema, ele usará um tema padrão ou renderizará o Markdown de forma básica.
  * **Enforce HTTPS (Forçar HTTPS):** É altamente recomendável deixar esta opção marcada (geralmente está por padrão) para que seu site seja servido via HTTPS, garantindo uma conexão segura.

**Se o `README.md` for sua página principal:**

Se o seu repositório tiver um arquivo `README.md` na raiz (ou na pasta que você selecionou como fonte), ele geralmente será renderizado como a página inicial (`index.html`) do seu site GitHub Pages.

Lembre-se que pode levar alguns minutos para que as alterações entrem em vigor e seu site esteja disponível publicamente na URL fornecida. Se você fizer atualizações nos seus arquivos Markdown e fizer o `push` para o branch configurado, o GitHub Pages reconstruirá e atualizará seu site automaticamente.
Habilitar o GitHub Pages é uma forma excelente de transformar seu repositório de Markdown (ou HTML, CSS, JS) em um site acessível publicamente. É perfeito para materiais de estudo, portfólios ou documentação de projetos.

Aqui está o passo a passo para habilitar o GitHub Pages nas configurações do seu repositório:

1.  **Acesse seu Repositório no GitHub:**

      * Vá para [https://github.com/](https://github.com/) e navegue até o repositório que você criou para o seu material de estudo de Java.

2.  **Vá para as Configurações (Settings):**

      * Dentro do seu repositório, clique na aba "**Settings**" (Configurações). Ela geralmente fica no menu superior, ao lado de "Code", "Issues", "Pull requests", etc.

3.  **Navegue até a Seção "Pages":**

      * Na barra lateral esquerda da página de Configurações, procure por uma seção chamada "**Code and automation**" (Código e automação).
      * Dentro dessa seção, clique em "**Pages**".

4.  **Configure a Fonte de Publicação (Source):**

      * Você verá uma seção chamada "**Build and deployment**" (Construir e implantar).
      * Em "**Source**" (Fonte), você precisa escolher de onde o GitHub Pages irá buscar os arquivos do seu site. A opção mais comum e recomendada para materiais de estudo em Markdown é "**Deploy from a branch**" (Implantar a partir de um branch).
          * Selecione essa opção se ainda não estiver selecionada.

5.  **Escolha o Branch:**

      * Abaixo de "Deploy from a branch", você verá uma seção para "**Branch**".
      * Use o menu suspenso para selecionar o branch que contém os arquivos do seu site. Geralmente, este será o branch `main` (ou `master` em repositórios mais antigos).
      * **Pasta (Opcional, mas recomendado para organização):**
          * Ao lado da seleção do branch, você pode escolher uma pasta específica dentro desse branch. As opções comuns são:
              * `/(root)`: Publica o conteúdo da raiz do seu branch. Se o seu `README.md` principal (que serve como índice) está na raiz do projeto, esta é uma boa escolha.
              * `/docs`: Publica o conteúdo de uma pasta chamada `docs` na raiz do seu branch. Muitos projetos usam essa pasta para manter a documentação separada do código principal. Se você organizou seu material dentro de uma pasta `docs`, selecione esta opção.
          * Para o seu material de estudo em Markdown, se o `README.md` principal está na raiz do repositório e os links para os outros arquivos `.md` são relativos a ele, selecionar `/(root)` é o mais direto.

6.  **Salve as Alterações:**

      * Após selecionar o branch (e a pasta, se aplicável), clique no botão "**Save**" (Salvar) ao lado da seleção de pasta.

7.  **Aguarde a Publicação:**

      * O GitHub Actions começará a construir e implantar seu site. Isso pode levar alguns minutos.
      * A página de configurações do GitHub Pages mostrará uma mensagem indicando que seu site está sendo construído.
      * Assim que estiver pronto, você verá uma mensagem como "**Your site is live at**" (Seu site está no ar em) seguida do URL do seu site GitHub Pages. Geralmente, o URL será algo como: `https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/`.
      * Se você usou um arquivo `README.md` como página inicial, o GitHub Pages o converterá automaticamente para HTML. Se você tiver um `index.html` ou `index.md` na pasta raiz (ou na pasta `/docs`, se selecionada), ele será usado como a página inicial.

8.  **Acesse seu Site:**

      * Clique no link fornecido para visitar seu novo site\!

**Observações Importantes:**

  * **Visibilidade do Repositório:** Para o GitHub Pages funcionar em contas gratuitas, o repositório geralmente precisa ser **público**.
  * **Arquivo de Entrada:** O GitHub Pages procurará por `index.html`, `index.md` ou `README.md` (nesta ordem de prioridade, geralmente) na sua fonte de publicação para servir como a página inicial.
  * **Atualizações:** Sempre que você fizer um `git push` de novas alterações para o branch configurado, o GitHub Pages reconstruirá e atualizará automaticamente seu site. Pode levar alguns minutos para que as alterações apareçam online.
  * **Temas Jekyll (Opcional):** O GitHub Pages tem suporte integrado ao Jekyll, um gerador de sites estáticos. Você pode escolher um tema Jekyll diretamente nas configurações do GitHub Pages (na mesma seção "Pages", procure por "Theme Chooser"). Isso pode dar uma aparência mais profissional ao seu material de estudo com pouco esforço. Seus arquivos Markdown serão renderizados dentro do layout do tema escolhido.
  * **Domínio Personalizado (Opcional Avançado):** Se desejar, você pode configurar um domínio personalizado (por exemplo, `meumaterialjava.com`) para o seu site do GitHub Pages, mas isso envolve configurações de DNS adicionais.

Seguindo esses passos, seu material de estudo estará online e acessível através do GitHub Pages\!

* [GitHub Pages](https://www.google.com/search?q=./githubpages.md)
* [Temas para GitHub Pages](https://pages.github.com/themes/) 

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
