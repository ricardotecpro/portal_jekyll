# **🚀 Tutorial: Instalando e Configurando Neovim + LunarVim no Debian**
Este guia abrange:  
✅ **Instalação do Neovim mais recente**  
✅ **Instalação do LunarVim**  
✅ **Correção de erros comuns**  
✅ **Configuração para ficar parecido com o VS Code**  

---

## **1️⃣ Instalando o Neovim mais recente**
O **Neovim** disponível nos repositórios oficiais do Debian pode estar desatualizado. Vamos instalar a versão mais recente manualmente.

### **1.1 Remova versões antigas do Neovim**
```bash
sudo apt remove --purge neovim -y
```

https://github.com/neovim/neovim/blob/master/INSTALL.md

### **1.2 Baixe e instale a versão mais recente**
```bash
curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim-linux-x86_64.tar.gz
sudo rm -rf /opt/nvim
sudo tar -C /opt -xzf nvim-linux-x86_64.tar.gz
```
> 📌 Isso instala o **Neovim** diretamente em `/opt/nvim/`, garantindo que a versão mais recente esteja disponível no sistema.



Then add this to your shell config (`~/.bashrc`, `~/.zshrc`, ...):

```
export PATH="$PATH:/opt/nvim-linux-x86_64/bin"
```

### **1.3 Verifique a instalação**
```bash
nvim --version
```
Se o comando acima exibir a versão mais recente, o **Neovim** foi instalado com sucesso! 🎉

---

## **2️⃣ Instalando o LunarVim**
O **LunarVim** é um ambiente pré-configurado para Neovim com suporte a **LSP, autocomplete e atalhos poderosos**.

### **2.1 Instale as dependências**
```bash
sudo apt update && sudo apt install -y git curl ripgrep fd-find unzip build-essential yarn pip
```
> 📌 O `ripgrep` e o `fd-find` são necessários para buscas rápidas.

### **2.2 Instale o Node.js (necessário para alguns plugins)**
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt install -y nodejs
```

### **2.3 Instale o gerenciador de pacotes do Neovim (Lazy.nvim)**
```bash
git clone --depth 1 https://github.com/folke/lazy.nvim ~/.local/share/nvim/lazy/lazy.nvim
```

### **2.4 Instale o LunarVim**
```bash
LV_BRANCH='release-1.3/neovim-0.9' bash <(curl -s https://raw.githubusercontent.com/LunarVim/LunarVim/master/utils/installer/install.sh)
```
Após a instalação, inicie o **LunarVim** com:
```bash
lvim
```

---

## **3️⃣ Configurando o LunarVim para parecer com o VS Code**
Agora vamos configurar o **LunarVim** para oferecer uma experiência similar ao **VS Code**.

### **3.1 Edite o arquivo de configuração**
Abra o arquivo de configuração:
```bash
nano ~/.config/lvim/config.lua
```

Cole o seguinte código:

```lua
-- 📌 Links úteis:
-- Docs: https://www.lunarvim.org/docs/configuration
-- Tutoriais: https://www.youtube.com/watch?v=sFA9kX-Ud_c&list=PLhoH5vyxr6QqGu0i7tt_XoVK9v-KvZ3m6
-- Fórum: https://www.reddit.com/r/lunarvim/
-- Discord: https://discord.com/invite/Xb9B4Ny

-- ⚙️ Configurações Gerais
vim.opt.number = true                   -- Ativar números de linha
vim.opt.relativenumber = true           -- Números relativos
vim.opt.tabstop = 4                      -- Tamanho do tab
vim.opt.shiftwidth = 4                   -- Indentação ao pressionar tab
vim.opt.expandtab = true                 -- Converter tabs em espaços
vim.opt.smartindent = true               -- Indentação automática

-- 🎨 Aparência
lvim.colorscheme = "tokyonight"         -- Tema VS Code-like (Alternativas: vscode.nvim, nightfox)

-- 📂 Configuração da barra lateral (File Explorer)
lvim.builtin.nvimtree.setup.view.side = "left"

-- ⌨️ Atalhos de teclado inspirados no VS Code
lvim.keys.normal_mode = {
  ["<C-s>"] = ":w<CR>",                 -- Ctrl+S para salvar
  ["<C-p>"] = ":Telescope find_files<CR>", -- Ctrl+P para busca rápida
  ["<C-b>"] = ":NvimTreeToggle<CR>",     -- Ctrl+B para explorar arquivos
}

-- ⚡ Melhor Autocomplete
local cmp = require("cmp")
lvim.builtin.cmp.mapping = {
  ["<Tab>"] = cmp.mapping.select_next_item(),
  ["<S-Tab>"] = cmp.mapping.select_prev_item(),
}

-- 🛠️ Configuração de Plugins Extras
lvim.plugins = {
  { "folke/tokyonight.nvim" },           -- Tema
  { "nvim-lualine/lualine.nvim" },       -- Barra de status
  { "akinsho/bufferline.nvim" },         -- Abas no topo
  { "lukas-reineke/indent-blankline.nvim" }, -- Indentação visual
}

-- 📌 Configuração da Barra de Status (Lualine)
lvim.builtin.lualine.style = "default"   -- Usa a barra padrão do LunarVim

-- 📌 Configuração da Barra de Abas (Bufferline)
lvim.builtin.bufferline.active = true    -- Ativar abas no topo

-- 📌 Configuração da Linha de Indentação
lvim.builtin.indentlines.active = true   -- Ativar indentação visual
```

---

## **4️⃣ Aplicando as Configurações**
Após editar o arquivo, feche o **Nano** (`CTRL + X`, depois `Y` e `Enter`).

Agora, rode o seguinte comando para garantir que todas as configurações sejam carregadas corretamente:
```bash
lvim
```

Se já estiver dentro do **LunarVim**, rode:
```vim
:LvimReload
```

---

## **5️⃣ Solução de Problemas**
### **Erro: `lvim: command not found`**
Se o **LunarVim** não for encontrado, tente adicionar o caminho ao seu `.bashrc` ou `.zshrc`:
```bash
echo 'export PATH=$HOME/.local/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```
Se estiver usando `zsh`:
```bash
echo 'export PATH=$HOME/.local/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```

### **Erro: "Unable to find cargo"**
Caso veja essa mensagem ao instalar, instale o **Rust** e o Cargo:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source ~/.cargo/env
```

### **Erro: "gruvbox/init.lua Not found"**
Se ocorrer um erro com o **lualine**, altere a configuração do tema para `auto` no `config.lua`:
```lua
lvim.builtin.lualine.options.theme = "auto"
```
Depois, reinstale os pacotes:
```bash
rm -rf ~/.local/share/lunarvim
lvim
```

---

# **🎉 Conclusão**
Agora seu **LunarVim** está configurado para funcionar como um **ambiente de desenvolvimento similar ao VS Code**, com atalhos otimizados, tema moderno e uma interface mais produtiva.

 🚀
 

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
