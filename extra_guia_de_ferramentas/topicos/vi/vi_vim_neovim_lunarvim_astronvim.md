---
layout: default
title: **História e Evolução do Vi, Vim, Neovim, LunarVim e AstroNvim**
---

## **História e Evolução do Vi, Vim, Neovim, LunarVim e AstroNvim**

Os editores de texto **Vi, Vim, Neovim, LunarVim e AstroNvim** fazem parte da evolução de uma linha de editores altamente eficientes para desenvolvedores, especialmente aqueles que trabalham em **Linux** e **Unix**. Vamos explorar a origem e evolução desses editores e qual deles é melhor para programação.

---

### **🔹 Vi (1976) – O Começo**

📌 **Criado por Bill Joy**, o **Vi (Visual Editor)** surgiu em 1976 como um modo visual para o **ex (Extended Editor)** no UNIX.

🔹 Principais características:

- Baseado em **modos** (Normal, Inserção, Comando).
- Leve e rápido.
- Disponível em praticamente qualquer sistema Unix/Linux.

📌 **Desvantagem**: Era difícil de estender e personalizar.

---

### **🔹 Vim (1991) – Vi IMproved**

📌 **Criado por Bram Moolenaar**, o **Vim (Vi IMproved)** foi lançado em 1991 como uma versão melhorada do Vi.

🔹 Melhorias em relação ao Vi:

- **Suporte a plugins** e maior **customização**.
- **Destaque de sintaxe** para programação.
- **Suporte a múltiplas abas e janelas**.
- **Melhorias na interface e compatibilidade**.

📌 **Ainda assim, o Vim tinha limitações**, como um sistema de configuração difícil e uma arquitetura monolítica.

---

### **🔹 Neovim (2014) – Modernização do Vim**

📌 **Criado por Thiago de Arruda**, o **Neovim** nasceu como um fork do Vim com foco em modernização.

🔹 Melhorias sobre o Vim:

- **Código mais limpo e modular**, permitindo melhorias mais rápidas.
- **Melhor suporte a plugins**, usando **Lua** ao invés de VimScript.
- **Integração com LSP (Language Server Protocol)** para autocompletar inteligente.
- **Interface assíncrona**, melhorando a performance.

📌 **Neovim se tornou o favorito dos desenvolvedores modernos**, sendo mais fácil de expandir e configurar.

---

### **🔹 LunarVim – Neovim com Configuração Pronta**

📌 **LunarVim** é uma distribuição de **Neovim** voltada para desenvolvimento moderno, oferecendo uma configuração pronta para programadores.

🔹 Benefícios:

- **Suporte embutido ao LSP** para autocompletar inteligente.
- **Árvore de arquivos integrada (nvim-tree)**.
- **Melhorias na experiência de edição**, com atalhos úteis.
- **Sistema de plugins pré-configurado**, usando **Mason.nvim** e **Telescope**.

📌 **Ideal para quem quer um ambiente pronto para codar, sem precisar configurar Neovim do zero.**

---

### **🔹 AstroNvim – Uma Experiência Mais Personalizada**

📌 **AstroNvim** é outra distribuição de **Neovim**, mas focada em ser **altamente customizável**.

🔹 Comparado ao LunarVim:

- **Mais modular**, facilitando customizações.
- **Interface polida** e com melhor suporte a atalhos.
- **Suporte a múltiplas linguagens e frameworks**.

📌 **Ótimo para usuários avançados que querem personalizar cada detalhe do editor.**

---

## **📌 Qual é o Melhor para Programação?**

### 🚀 **Se você quer algo leve e simples** → **Vim**

✅ Rápido e eficiente, mas com curva de aprendizado maior.

### 🔧 **Se você quer um Vim moderno e fácil de expandir** → **Neovim**

✅ Melhor suporte a plugins, desempenho otimizado e melhor para programadores.

### ⚙️ **Se você quer um Neovim pronto para uso** → **LunarVim**

✅ Configuração pré-pronta para desenvolvimento sem esforço.

### 🎨 **Se você quer mais personalização e controle** → **AstroNvim**

✅ Melhor modularidade e customização para usuários avançados.

---

### **💡 Conclusão**

Se você **quer algo rápido e funcional sem grandes configurações**, **Vim** ou **Neovim** são boas escolhas.  
Se **quer um ambiente completo sem configurar**, **LunarVim** é ideal.  
Se **quer personalização extrema**, **AstroNvim** é o melhor.

⚡ **Minha recomendação para programação:** **Neovim ou LunarVim** – são modernos, fáceis de expandir e otimizados para desenvolvimento. 🚀


### **📌 Principais Comandos do Vi, Vim, Neovim, LunarVim e AstroNvim**

- [ ] Os editores Vi, Vim, Neovim, LunarVim e AstroNvim seguem a mesma base de comandos, pois todos derivam do Vi. No entanto, Neovim, LunarVim e AstroNvim trazem novos atalhos e comandos aprimorados, principalmente para desenvolvimento de software.

---

## **🔹 Modos de Edição**

Os editores baseados em **Vi** utilizam **modos de edição**:

|**Modo**|**Descrição**|**Como Acessar**|
|---|---|---|
|**Normal**|Modo padrão (navegação e comandos)|`Esc`|
|**Inserção**|Digitar texto normalmente|`i` (antes do cursor), `a` (após o cursor)|
|**Visual**|Selecionar texto|`v` (caractere a caractere), `V` (linha inteira)|
|**Comando**|Executar comandos|`:` (pressione `Esc`, depois `:`)|

---

## **🔹 Navegação no Arquivo**

|**Comando**|**Ação**|
|---|---|
|`h`|Move para a esquerda|
|`l`|Move para a direita|
|`j`|Move para baixo|
|`k`|Move para cima|
|`gg`|Vai para o topo do arquivo|
|`G`|Vai para o final do arquivo|
|`Ctrl + d`|Desce metade da tela|
|`Ctrl + u`|Sobe metade da tela|
|`Ctrl + f`|Rola uma página para baixo|
|`Ctrl + b`|Rola uma página para cima|
|`0`|Vai para o início da linha|
|`^`|Vai para o primeiro caractere não vazio da linha|
|`$`|Vai para o final da linha|
|`w`|Pula para a próxima palavra|
|`b`|Pula para o início da palavra anterior|

---

## **🔹 Edição de Texto**

|**Comando**|**Ação**|
|---|---|
|`i`|Insere antes do cursor|
|`I`|Insere no início da linha|
|`a`|Insere após o cursor|
|`A`|Insere no final da linha|
|`o`|Nova linha abaixo do cursor|
|`O`|Nova linha acima do cursor|
|`x`|Apaga o caractere sob o cursor|
|`X`|Apaga o caractere antes do cursor|
|`dd`|Apaga a linha inteira|
|`d$`|Apaga do cursor até o final da linha|
|`d0`|Apaga do cursor até o início da linha|
|`yw`|Copia (yank) uma palavra|
|`yy`|Copia a linha atual|
|`p`|Cola o que foi copiado|
|`u`|Desfaz a última ação|
|`Ctrl + r`|Refaz a última ação|

---

## **🔹 Busca e Substituição**

|**Comando**|**Ação**|
|---|---|
|`/palavra`|Busca por "palavra" no arquivo|
|`?palavra`|Busca para trás|
|`n`|Próxima ocorrência da busca|
|`N`|Ocorrência anterior|
|`:%s/antigo/novo/g`|Substitui todas as ocorrências de "antigo" por "novo"|
|`:%s/antigo/novo/gc`|Substitui com confirmação|

---

## **🔹 Manipulação de Arquivos**

|**Comando**|**Ação**|
|---|---|
|`:w`|Salva o arquivo|
|`:q`|Sai do editor|
|`:q!`|Sai sem salvar|
|`:wq` ou `ZZ`|Salva e sai|
|`:e nome_do_arquivo`|Abre um novo arquivo|
|`:r nome_do_arquivo`|Insere o conteúdo de um arquivo no atual|
|`:n`|Abre o próximo arquivo (se houver vários abertos)|
|`:prev`|Volta para o arquivo anterior|

---

## **🔹 Trabalhando com Múltiplas Janelas**

|**Comando**|**Ação**|
|---|---|
|`:split` ou `:sp`|Divide a tela horizontalmente|
|`:vsplit` ou `:vsp`|Divide a tela verticalmente|
|`Ctrl + w + w`|Alterna entre janelas|
|`Ctrl + w + h`|Move para a janela à esquerda|
|`Ctrl + w + l`|Move para a janela à direita|
|`Ctrl + w + j`|Move para a janela abaixo|
|`Ctrl + w + k`|Move para a janela acima|
|`:q`|Fecha a janela atual|

---

## **🔹 Recursos Exclusivos do Neovim, LunarVim e AstroNvim**

Esses editores modernos possuem atalhos extras para programadores.

### **📌 Atalhos do Neovim**

|**Comando**|**Ação**|
|---|---|
|`:PackerSync`|Atualiza plugins instalados|
|`:LspInstall <linguagem>`|Instala suporte LSP para uma linguagem|
|`gd`|Vai para a definição de uma função/classe|
|`gr`|Mostra todas as referências da variável/função|

### **📌 Atalhos do LunarVim**

|**Comando**|**Ação**|
|---|---|
|`<Space> e`|Abre o explorador de arquivos (NvimTree)|
|`<Space> ff`|Pesquisa arquivos (Telescope)|
|`<Space> fs`|Pesquisa dentro de arquivos|
|`<Space> lr`|Renomeia uma variável no código|
|`<Space> q`|Fecha um buffer|
|`gD`|Vai para a definição de uma função|

### **📌 Atalhos do AstroNvim**

|**Comando**|**Ação**|
|---|---|
|`<Leader> s`|Pesquisa rápida com Telescope|
|`<Leader> b`|Gerencia buffers abertos|
|`<Leader> g`|Ativa integração com Git|
|`<Leader> d`|Mostra documentação da função atual|
|`<Leader> rr`|Roda o código no terminal integrado|


O comando `:x` no **Vim, Neovim, LunarVim e AstroNvim** é usado para **salvar e sair**, funcionando de forma semelhante ao `:wq`, mas com uma pequena diferença:

✅ **`:x` só salva se houver mudanças** no arquivo.  
✅ **`:wq` sempre escreve o arquivo**, mesmo que nenhuma alteração tenha sido feita.

### **📌 Comandos de Salvamento e Saída**

|**Comando**|**Ação**|
|---|---|
|`:w`|Salva o arquivo sem sair|
|`:q`|Sai do editor (somente se não houver alterações)|
|`:q!`|Sai sem salvar|
|`:wq`|Salva e sai|
|**`:x`**|Salva e sai (somente se houver alterações)|

 🚀



---

## **🎯 Conclusão: Qual Editor Usar?**

|**Editor**|**Indicado para**|
|---|---|
|**Vi**|Usuários minimalistas e ambientes Unix puros|
|**Vim**|Usuários intermediários que querem um editor poderoso|
|**Neovim**|Desenvolvedores modernos que precisam de plugins e melhor desempenho|
|**LunarVim**|Quem deseja um ambiente pronto para desenvolvimento sem configurar muito|
|**AstroNvim**|Quem quer uma experiência moderna e personalizada|

Se você **precisa apenas editar textos rapidamente**, **Vi ou Vim** são suficientes.  
Se **programação é seu foco**, **Neovim, LunarVim ou AstroNvim** são as melhores opções.

Quer mais detalhes sobre configuração ou plugins? 🚀


# **📌 Configuração e Plugins no Vim, Neovim, LunarVim e AstroNvim**

Se você quer **personalizar** o seu editor para programar de forma mais eficiente, precisa entender como configurar e instalar **plugins**. Cada editor tem uma abordagem diferente para isso. Vamos detalhar tudo abaixo! 🚀

---

## **🔹 Configuração no Vim e Neovim**

### **📝 Arquivo de Configuração**

- **Vim:** usa o arquivo `~/.vimrc`
- **Neovim:** usa `~/.config/nvim/init.lua` (ou `init.vim`, se quiser usar a sintaxe antiga)

🔹 **Exemplo de um `~/.vimrc` básico**:

```vim
set number           " Mostra números de linha
set autoindent       " Mantém a indentação automática
set tabstop=4        " Define tabulações como 4 espaços
set shiftwidth=4     " Define largura do shift para 4
set expandtab        " Converte tab em espaços
syntax on            " Ativa a coloração de sintaxe
```

🔹 **Exemplo de um `init.lua` para Neovim**:

```lua
vim.opt.number = true
vim.opt.autoindent = true
vim.opt.tabstop = 4
vim.opt.shiftwidth = 4
vim.opt.expandtab = true
vim.cmd('syntax on')
```

---

## **🔹 Gerenciadores de Plugins**

Os plugins ajudam a adicionar novos recursos ao editor, como **autocompletar, LSP, integração com Git e temas**.

### **📦 Gerenciadores de Plugins Mais Usados**

|Gerenciador|Editor|Comando de Instalação|
|---|---|---|
|**vim-plug**|Vim/Neovim|Manual (`~/.vimrc` ou `init.vim`)|
|**packer.nvim**|Neovim|Usa Lua (`init.lua`)|
|**lazy.nvim**|Neovim|Mais rápido, recomendado para LunarVim e AstroNvim|

---

## **🔹 Configuração de Plugins no Vim e Neovim**

### **Usando `vim-plug` (Vim e Neovim)**

1️⃣ **Instale o `vim-plug`**:

```sh
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

Para **Neovim**:

```sh
curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

2️⃣ **Adicione ao `~/.vimrc` (Vim) ou `~/.config/nvim/init.vim` (Neovim)**:

```vim
call plug#begin('~/.vim/plugged')

Plug 'preservim/nerdtree' " Explorador de arquivos
Plug 'junegunn/fzf' " Pesquisa de arquivos rápida
Plug 'tpope/vim-fugitive' " Integração com Git
Plug 'vim-airline/vim-airline' " Status bar estilizada
Plug 'dense-analysis/ale' " Linter para código

call plug#end()
```

3️⃣ **Instale os plugins**:  
Abra o Vim/Neovim e rode:

```
:PlugInstall
```

---

### **Usando `packer.nvim` (Neovim)**

1️⃣ **Instale o `packer.nvim`**:

```sh
git clone --depth 1 https://github.com/wbthomason/packer.nvim \
  ~/.local/share/nvim/site/pack/packer/start/packer.nvim
```

2️⃣ **Edite o `~/.config/nvim/init.lua`**:

```lua
require('packer').startup(function(use)
  use 'wbthomason/packer.nvim'  -- Packer gerenciador de plugins
  use 'nvim-treesitter/nvim-treesitter'  -- Melhor sintaxe
  use 'neovim/nvim-lspconfig'  -- Suporte a LSP
  use 'hrsh7th/nvim-cmp'  -- Autocompletar
  use 'nvim-telescope/telescope.nvim'  -- Pesquisa avançada
end)
```

3️⃣ **Instale os plugins** abrindo o Neovim e rodando:

```
:PackerSync
```

---

## **🔹 LunarVim e AstroNvim (Neovim Prontos para Desenvolvimento)**

Se você quer **Neovim pronto para uso**, **LunarVim** e **AstroNvim** já vêm configurados com plugins essenciais para programação.

### **⚡ Instalação do LunarVim**

1️⃣ Instale com um único comando:

```sh
LV_BRANCH='release-1.3/neovim-0.9' bash <(curl -s https://raw.githubusercontent.com/LunarVim/LunarVim/master/utils/installer/install.sh)
```

2️⃣ **Personalize em `~/.config/lvim/config.lua`**:

```lua
lvim.plugins = {
  { "folke/tokyonight.nvim" },  -- Tema bonito
  { "tpope/vim-surround" },  -- Atalhos para parênteses e aspas
  { "vim-test/vim-test" },  -- Executar testes de código
}
```

3️⃣ **Abra e use!**

```sh
lvim
```

---

### **🚀 Instalação do AstroNvim**

1️⃣ Instale com:

```sh
git clone --depth 1 https://github.com/AstroNvim/AstroNvim ~/.config/nvim
nvim
```

2️⃣ **Plugins e configurações avançadas já vêm incluídas!**  
3️⃣ **Para adicionar plugins**, edite `~/.config/nvim/lua/user/init.lua`:

```lua
return {
  plugins = {
    ["lukas-reineke/indent-blankline.nvim"] = {},
    ["nvim-treesitter/nvim-treesitter"] = {},
    ["nvim-telescope/telescope.nvim"] = {},
  }
}
```

---

## **🔹 Plugins Recomendados para Programação**

Aqui estão os plugins mais úteis para quem programa:

### **🌟 Funcionalidade: LSP (Language Server Protocol)**

- `neovim/nvim-lspconfig` → Suporte a LSP para várias linguagens
- `hrsh7th/nvim-cmp` → Autocompletar poderoso
- `onsails/lspkind.nvim` → Ícones no autocompletar

### **🔍 Pesquisa e Navegação**

- `nvim-telescope/telescope.nvim` → Pesquisa rápida de arquivos
- `nvim-treesitter/nvim-treesitter` → Melhor sintaxe

### **📂 Gerenciamento de Arquivos**

- `preservim/nerdtree` → Explorador de arquivos
- `nvim-tree/nvim-tree.lua` → Explorador moderno

### **⚡ Integração com Git**

- `tpope/vim-fugitive` → Comandos Git no Vim
- `lewis6991/gitsigns.nvim` → Mostra mudanças do Git na lateral

### **🎨 Temas e Interface**

- `gruvbox-community/gruvbox` → Tema escuro clássico
- `folke/tokyonight.nvim` → Tema moderno
- `vim-airline/vim-airline` → Status bar personalizada

---

## **🎯 Conclusão**

✅ **Se quer algo leve**, configure **Vim** ou **Neovim** com `vim-plug`.  
✅ **Se quer facilidade**, use **Neovim com Packer**.  
✅ **Se quer algo pronto para programação**, **LunarVim ou AstroNvim** são as melhores opções!

💬 Quer ajuda para configurar algo específico? 🚀



### **📌 Abrindo o Bash Dentro do Vim, Neovim, LunarVim e AstroNvim**

Se você quer abrir um **terminal Bash dentro do editor** sem sair da edição do código, cada um desses editores tem comandos específicos para isso.

---

## **🔹 Vim e Neovim**

Os dois suportam a abertura do terminal sem sair do editor.

### **🖥️ No Neovim (Nativo)**

Neovim tem um terminal embutido. Para abrir:

```
:terminal
```

Depois que o terminal abrir:

- Pressione **`Ctrl + \`** e depois **`Ctrl + n`** para sair do modo terminal.
- Use **`i`** para voltar ao terminal.
- Para fechar o terminal, use **`:q`** dentro dele.

---

### **🖥️ No Vim (Usando `:!` ou `:sh`)**

O Vim não tem um terminal embutido, mas você pode executar comandos temporariamente:

- Para abrir um shell interativo dentro do Vim:
    
    ```
    :sh
    ```
    
    Para voltar ao editor, use o comando `exit` ou pressione **`Ctrl + d`**.
    
- Para rodar um comando Bash rapidamente sem sair:
    
    ```
    :!ls
    ```
    
    Isso executa `ls` e mostra a saída no Vim.
    

---

## **🔹 No LunarVim e AstroNvim**

Esses editores são baseados no Neovim, então o comando **`:terminal`** funciona normalmente. Mas eles têm atalhos extras:

### **LunarVim**

✅ Atalho para abrir um terminal flutuante:

```
SPC + l + t
```

✅ Para sair do terminal:

```
ESC ESC
```

### **AstroNvim**

✅ Terminal embutido:

```
<leader>tt
```

(`leader` geralmente é a tecla **espaço**)

---

## **🎯 Conclusão**

- **No Vim:** use `:sh` ou `:!comando` para comandos rápidos.
- **No Neovim:** `:terminal` abre um shell interativo.
- **No LunarVim:** `SPC + l + t` para terminal flutuante.
- **No AstroNvim:** `<leader>tt` para abrir o terminal embutido.

 🚀





# **📌 Como Dividir Janelas e Alternar Entre Elas no Vim, Neovim, LunarVim e AstroNvim**

Se você quer **dividir a tela, abrir um terminal e alternar rapidamente** entre janelas no **Vim, Neovim, LunarVim e AstroNvim**, aqui está um guia prático! 🚀

---

## **🔹 Dividindo Janelas (Splits)**

Você pode dividir a tela **horizontalmente** ou **verticalmente**:

|Comando|Ação|
|---|---|
|`:split` ou `:sp`|Divide a janela horizontalmente|
|`:vsplit` ou `:vs`|Divide a janela verticalmente|
|`:terminal`|Abre um terminal em um split|

### **Exemplo**:

1️⃣ Abra um arquivo:

```
vim arquivo.txt
```

2️⃣ Divida a janela horizontalmente:

```
:split
```

3️⃣ Divida a janela verticalmente:

```
:vsplit
```

---

## **🔹 Alternando Entre Janelas**

Depois de dividir a tela, use **Ctrl + w** seguido de outra tecla para navegar:

|Atalho|Ação|
|---|---|
|`Ctrl + w + h`|Move para a janela **à esquerda**|
|`Ctrl + w + l`|Move para a janela **à direita**|
|`Ctrl + w + j`|Move para a janela **abaixo**|
|`Ctrl + w + k`|Move para a janela **acima**|
|`Ctrl + w + w`|Alterna entre as janelas abertas|

---

## **🔹 Como Abrir um Terminal em uma Janela Separada**

### **Vim (Modo Temporário)**

Vim não tem um terminal embutido, mas você pode rodar um shell dentro de um split:

```vim
:split | terminal
```

Para sair, digite `exit` ou pressione `Ctrl + d`.

### **Neovim, LunarVim e AstroNvim**

Estes suportam um terminal embutido! Para abrir um terminal em um split:

```vim
:split | terminal
```

Ou, para abrir um **terminal vertical**:

```vim
:vsplit | terminal
```

Se estiver no terminal e quiser voltar para o modo normal:  
**`Ctrl + \` e depois `Ctrl + n`**

---

## **🔹 Redimensionar Janelas**

|Comando|Ação|
|---|---|
|`Ctrl + w + =`|Ajusta todas as janelas para o mesmo tamanho|
|`Ctrl + w + -`|Diminui a altura da janela atual|
|`Ctrl + w + +`|Aumenta a altura da janela atual|
|`Ctrl + w + <`|Diminui a largura da janela|
|`Ctrl + w + >`|Aumenta a largura da janela|

---

## **🔹 Fechar Janelas**

|Comando|Ação|
|---|---|
|`:q`|Fecha a janela atual|
|`:close`|Fecha a janela atual|
|`:only`|Fecha todas as janelas, exceto a atual|
|`Ctrl + w + c`|Fecha a janela atual|

---

## **🔹 Comandos Extras no LunarVim e AstroNvim**

### **LunarVim**

|Comando|Ação|
|---|---|
|`SPC + w + v`|Divide verticalmente|
|`SPC + w + s`|Divide horizontalmente|
|`SPC + l + t`|Abre terminal flutuante|

### **AstroNvim**

|Comando|Ação|
|---|---|
|`<leader> w v`|Divide verticalmente|
|`<leader> w s`|Divide horizontalmente|
|`<leader> tt`|Abre o terminal embutido|

---

## **🎯 Conclusão**

✅ **Para dividir janelas:** `:split` (horizontal) e `:vsplit` (vertical)  
✅ **Para alternar:** `Ctrl + w` + `h/j/k/l`  
✅ **Para abrir um terminal:** `:terminal` ou atalhos (`SPC + l + t` no LunarVim)  
✅ **Para redimensionar:** `Ctrl + w + =`

💡 **Dica:** Teste **Neovim com um terminal embutido** para mais praticidade! 🚀


---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

