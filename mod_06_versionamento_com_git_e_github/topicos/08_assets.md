# ✅ Assets

Ambas as abordagens têm suas vantagens e desvantagens, e a "melhor" forma depende do seu caso de uso específico e das suas prioridades. Vamos analisar cada uma:

**1. Criar uma Pasta `assets` (ou `images`, `media`, etc.) para Cada Repositório**

Esta é a abordagem mais comum e geralmente a mais recomendada para a maioria dos projetos.

* **Como funciona:**
    * Dentro do seu repositório (ex: `meu_projeto`), você cria uma pasta chamada `assets` (ou `images`).
    * Você armazena todas as imagens específicas daquele projeto dentro dessa pasta.
    * Nos seus arquivos Markdown (como o `README.md`), você referencia as imagens usando caminhos relativos.
        * Exemplo: `![Descrição da Imagem](./assets/minha_imagem.png)`

* **Prós:**
    * **Autocontido (Self-contained):** O repositório contém tudo o que precisa. Se alguém clonar ou baixar o repositório, todas as imagens estarão lá.
    * **Versionamento Integrado:** As imagens são versionadas junto com o código e a documentação. Se você reverter para uma versão anterior do projeto, as imagens daquela versão também serão restauradas.
    * **Simplicidade:** É fácil de entender e gerenciar para projetos individuais. Os caminhos relativos são diretos.
    * **Funciona Offline:** Depois de clonado, o repositório com as imagens pode ser visualizado offline (em editores Markdown que suportam isso).
    * **Portabilidade:** Se você mover o repositório, os links relativos continuarão funcionando.
    * **Controle de Acesso:** As imagens seguem as permissões do repositório (público ou privado).

* **Contras:**
    * **Tamanho do Repositório:** Se você tiver muitas imagens grandes, o tamanho do repositório pode aumentar consideravelmente, tornando o clone mais demorado.
    * **Duplicação:** Se você usar a mesma imagem em múltiplos repositórios, terá cópias duplicadas dessa imagem em cada um deles.

**2. Criar um Repositório Único para Centralizar as Imagens**

Esta abordagem pode ser útil em cenários específicos, como quando você tem um conjunto de imagens que é compartilhado por muitos projetos diferentes (ex: logotipos da empresa, ícones padrão).

* **Como funciona:**
    * Você cria um repositório separado dedicado exclusivamente a armazenar imagens (ex: `minha_central_de_imagens`).
    * Você faz o upload das imagens para este repositório.
    * Nos seus outros repositórios, você referencia as imagens usando o URL completo para o arquivo "raw" (bruto) da imagem no repositório central.
        * Exemplo no GitHub: `![Descrição da Imagem](https://raw.githubusercontent.com/seu_usuario/minha_central_de_imagens/main/caminho/para/imagem.png)`

* **Prós:**
    * **Centralização e Reutilização:** Uma única fonte de verdade para imagens compartilhadas. Se precisar atualizar uma imagem, você faz isso em um só lugar.
    * **Repositórios de Projeto Mais Leves:** Os repositórios de código/documentação não ficam inflados com arquivos de imagem.
    * **Organização para Imagens Comuns:** Ideal para ativos de marca, bibliotecas de ícones, etc., que são usados em diversos locais.

* **Contras:**
    * **Dependência Externa:** Seus projetos se tornam dependentes da disponibilidade do repositório central de imagens. Se ele for excluído, renomeado ou se tornar privado (e os outros projetos não tiverem acesso), as imagens quebrarão.
    * **Links Absolutos:** Você precisa usar URLs completos, o que pode ser um pouco mais verboso e menos portátil se o URL do repositório central mudar.
    * **Visualização Offline Limitada:** As imagens não estarão disponíveis offline nos repositórios que as utilizam, a menos que o usuário também tenha clonado o repositório de imagens e os links sejam ajustados (o que complica).
    * **Versionamento Desacoplado:** O versionamento das imagens é separado do versionamento dos projetos que as utilizam. Mudar uma imagem no repositório central pode afetar "silenciosamente" muitos projetos, a menos que você tenha um sistema de versionamento de URLs de imagem (ex: usar URLs que apontam para um commit específico da imagem).
    * **Gestão de Acesso:** Se o repositório central for privado, você precisará gerenciar o acesso a ele para todos os usuários/sistemas que precisam exibir as imagens.

**Recomendação:**

* **Para a maioria dos projetos:** Use uma pasta `assets` (ou similar) **dentro de cada repositório**. Esta é a abordagem mais robusta, simples e garante que seus projetos sejam autocontidos. É a prática padrão.

* **Considere um repositório centralizado SE:**
    * Você tem um grande conjunto de imagens que são **genéricas e amplamente reutilizadas** em muitos repositórios diferentes (ex: logo da sua organização, ícones padrão para documentação).
    * Manter a consistência dessas imagens em um único local é uma prioridade alta.
    * Você está ciente das implicações de dependência e versionamento.

**Solução Híbrida:**

Você também pode adotar uma abordagem híbrida:

* Usar pastas `assets` locais para imagens específicas do projeto.
* Usar um repositório central para imagens verdadeiramente globais e compartilhadas.

Ao decidir, pense em quem vai usar o repositório, como ele será acessado e qual a importância da portabilidade e do versionamento integrado das imagens com o restante do conteúdo. Para a maioria dos READMEs e documentações de projetos no GitHub, a pasta local é a vencedora pela simplicidade e confiabilidade.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
