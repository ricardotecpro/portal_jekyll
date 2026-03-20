---
layout: default
title: 🚀 **Instalação e Configuração do AstroNvim no Debian/Ubuntu**
---

# 🚀 **Instalação e Configuração do AstroNvim no Debian/Ubuntu**

## 1️⃣ **Removendo versões antigas do Neovim**

Se você já tem uma instalação do Neovim e quer começar do zero, remova as versões antigas com:

```bash
sudo apt remove --purge neovim -y
sudo rm -rf ~/.config/nvim ~/.local/share/nvim ~/.local/state/nvim ~/.cache/nvim
sudo rm -rf ~/.config/lvim ~/.local/share/lunarvim ~/.local/state/lunarvim ~/.cache/lunarvim
sudo rm -rf /usr/local/bin/nvim /usr/local/bin/nvim-linux-x86_64.appimage /opt/neovim
```

---

## 2️⃣ **Instalando Neovim (v0.10.4)**

### 📥 **Baixar e instalar Neovim (AppImage)**

```bash
curl -LO https://github.com/neovim/neovim/releases/download/v0.10.4/nvim-linux-x86_64.appimage
chmod u+x nvim-linux-x86_64.appimage
sudo mv nvim-linux-x86_64.appimage /usr/local/bin/nvim
```

### 🔍 **Verificando a instalação**

```bash
nvim --version
```

Se tudo estiver certo, o comando acima mostrará a versão do Neovim instalada.

---

## 3️⃣ **Instalando o AstroNvim**

### 🛠 **Fazendo backup da configuração antiga (se existir)**

```bash
mv ~/.config/nvim ~/.config/nvim.bak
mv ~/.local/share/nvim ~/.local/share/nvim.bak
mv ~/.local/state/nvim ~/.local/state/nvim.bak
mv ~/.cache/nvim ~/.cache/nvim.bak
```

### 📥 **Baixando e instalando o AstroNvim**

```bash
git clone --depth 1 https://github.com/AstroNvim/template ~/.config/nvim
rm -rf ~/.config/nvim/.git
```

### 🚀 **Iniciando o Neovim**

```bash
nvim
```

---

## 4️⃣ **Melhorando a Aparência para Parecer com o VS Code**

### 🔤 **Habilitar Ícones Nerd Fonts**

1. Baixe e instale uma fonte Nerd Font em **[NerdFonts](https://www.nerdfonts.com/)**
2. Configure seu terminal para usar essa fonte.

### 🎨 **Instalar o Tema Catppuccin**

O tema já está incluso na configuração personalizada.  
Para ativá-lo manualmente dentro do Neovim, use:

```vim
:colorscheme catppuccin
```

### 📊 **Configurar uma Barra de Status Moderna (lualine)**

Já incluso na configuração personalizada.

---

## 5️⃣ **Instalar e Configurar Plugins Essenciais**

### 🛠 **Instalar Servidores LSP**

Dentro do Neovim, execute:

```vim
:LspInstall pyright clangd jdtls html cssls tsserver sqlls omnisharp
```

### 🌳 **Instalar Treesitter para realce de sintaxe**

```vim
:TSInstall c cpp java html css javascript typescript sql c_sharp
```

### 📂 **Habilitar Explorer de Arquivos (nvim-tree)**

Para abrir o **nvim-tree**, use:

```vim
:NvimTreeToggle
```

Ou utilize a tecla de atalho configurada:  
**`<leader>e`** → (A tecla **Leader** é o **espaço** `Space`).

---

## 6️⃣ **Configuração Personalizada (`init.lua`)**

A configuração principal está em `~/.config/nvim/lua/user/init.lua`.  
Aqui está um **exemplo otimizado**:

```
code ~/.config/nvim/lua/user/init.lua
```
```

return {
  colorscheme = "catppuccin",
  options = {
    opt = {
      number = true, relativenumber = true, tabstop = 2, shiftwidth = 2,
      expandtab = true, smartindent = true, wrap = false, cursorline = true,
      termguicolors = true, background = "dark",
    },
    g = {
      mapleader = " ", autoformat_enabled = true, cmp_enabled = true,
      diagnostics_mode = 3, icons_enabled = true, ui_notifications_enabled = true,
    },
  },

  plugins = {
    { "catppuccin/nvim", name = "catppuccin" },
    {
      "nvim-lualine/lualine.nvim",
      config = function() require("lualine").setup({ options = { theme = "catppuccin" } }) end,
    },
    {
      "williamboman/mason.nvim",
      config = function() require("mason").setup() end,
    },
    {
      "neovim/nvim-lspconfig",
      config = function()
        local lspconfig = require("lspconfig")
        lspconfig.pyright.setup({})
        lspconfig.clangd.setup({})
        lspconfig.jdtls.setup({})
        lspconfig.html.setup({})
        lspconfig.cssls.setup({})
        lspconfig.tsserver.setup({})
        lspconfig.sqlls.setup({})
        lspconfig.omnisharp.setup({})
      end,
    },
    {
      "nvim-treesitter/nvim-treesitter",
      run = ":TSUpdate",
      config = function()
        require("nvim-treesitter.configs").setup({
          ensure_installed = { "c", "cpp", "java", "html", "css", "javascript", "typescript", "sql", "c_sharp" },
          highlight = { enable = true },
        })
      end,
    },
    {
      "nvim-tree/nvim-tree.lua",
      config = function()
        require("nvim-tree").setup({ view = { width = 30, side = "left" } })
        vim.keymap.set("n", "<leader>e", ":NvimTreeToggle<CR>", { noremap = true, silent = true })
      end,
    },
  },
}
```

---

## ✅ **Conclusão**

Agora seu **Neovim com AstroNvim** está totalmente funcional e otimizado para desenvolvimento com **LSP, Treesitter, nvim-tree e uma aparência moderna como o VS Code**. 🚀

 😃
 

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

