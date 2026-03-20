---
layout: default
title: 🚀 Instalando e Configurando AstroVim no Debian/Ubuntu
---

# 🚀 Instalando e Configurando AstroVim no Debian/Ubuntu

Este tutorial ensina como instalar o **Neovim (v0.10.4)**, configurar o **AstroNvim** e melhorar a aparência para parecer com o **VS Code**.

## 🔹 1. Remover versões antigas do Neovim

Antes de instalar, remova qualquer versão antiga do Neovim e suas configurações:

```bash
sudo apt remove --purge neovim -y
sudo rm -rf ~/.local/share/nvim ~/.local/state/nvim ~/.cache/nvim ~/.config/nvim
sudo rm -rf ~/.local/share/lunarvim ~/.local/state/lunarvim ~/.cache/lunarvim ~/.config/lvim
sudo rm -rf /usr/local/bin/nvim /usr/local/bin/nvim-linux-x86_64.appimage /opt/neovim

```

## 🔹 2. Instalar o Neovim v0.10.4

Baixe e instale a versão mais recente do Neovim:

```bash
wget https://github.com/neovim/neovim/releases/download/v0.10.4/nvim-linux-x86_64.appimage
chmod u+x nvim-linux-x86_64.appimage
sudo mv nvim-linux-x86_64.appimage /usr/local/bin/nvim

```

Verifique se a instalação foi concluída corretamente:

```bash
nvim --version

```

## 🔹 3. Instalar o AstroNvim

### 3.1 Fazer backup da configuração antiga

Se você já tiver um Neovim configurado, faça um backup antes de instalar o AstroNvim:

```bash
mv ~/.config/nvim ~/.config/nvim.bak
mv ~/.local/share/nvim ~/.local/share/nvim.bak
mv ~/.local/state/nvim ~/.local/state/nvim.bak
mv ~/.cache/nvim ~/.cache/nvim.bak

```

### 3.2 Clonar o AstroNvim

Agora, baixe a configuração base do AstroNvim:

```bash
git clone --depth 1 https://github.com/AstroNvim/template ~/.config/nvim
rm -rf ~/.config/nvim/.git  # Remove conexão com o repositório

```

Agora abra o Neovim para iniciar a instalação automática:

```bash
nvim
```

## 🔹 4. Melhorando a Aparência para Parecer com o VS Code

### 4.1 Habilitar Ícones Nerd Fonts

Baixe e instale uma **Nerd Font** de [NerdFonts](https://www.nerdfonts.com/).

Depois, configure seu terminal para usar essa fonte.

### 4.2 Instalar o Tema Catppuccin

O tema **Catppuccin** já está incluído na configuração.  
Se precisar ativá-lo manualmente dentro do Neovim, use o comando:

```
:colorscheme catppuccin
```

### 4.3 Configurar uma Barra de Status Moderna

A barra de status **lualine** já está configurada no tema.

## 🔹 5. Habilitar e Usar o Gerenciador de Arquivos (`nvim-tree`)

### 5.1 Instalar o `nvim-tree`

Caso ainda não esteja instalado, adicione o plugin no arquivo `~/.config/nvim/lua/user/init.lua`:

`~/.config/nvim/init.lua`

```lua
return {

  updater = {

    remote = "origin",

    channel = "stable",

    version = "latest",

    branch = "main",

    pin_plugins = nil,

  },

  

  colorscheme = "catppuccin",

  

  options = {

    opt = {

      number = true,

      relativenumber = true,

      tabstop = 2,

      shiftwidth = 2,

      expandtab = true,

      smartindent = true,

      wrap = false,

      cursorline = true,

      termguicolors = true,

      background = "dark",

    },

    g = {

      mapleader = " ",

      autoformat_enabled = true,

      cmp_enabled = true,

      diagnostics_mode = 3,

      icons_enabled = true,

      ui_notifications_enabled = true,

    },

  },

  

  plugins = {

    { "catppuccin/nvim", name = "catppuccin" },

    {

      "nvim-lualine/lualine.nvim",

      config = function()

        require("lualine").setup({

          options = {

            theme = "catppuccin",

          },

        })

      end,

    },

    {

      "williamboman/mason.nvim",

      config = function()

        require("mason").setup()

      end,

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

          highlight = {

            enable = true,

          },

        })

      end,

    },

    {

      "nvim-tree/nvim-tree.lua",

      lazy = false, -- Carregar imediatamente

      config = function()

        require("nvim-tree").setup({

          view = {

            width = 30,

            side = "left",

          },

        })

        -- Atalho para abrir/fechar NvimTree

        vim.keymap.set("n", "<leader>e", ":NvimTreeToggle<CR>", { noremap = true, silent = true })

      end,

    },

  },

}
```

### 5.2 Como Abrir o Gerenciador de Arquivos

Pressione:

```
<Space> e
```

Ou digite o comando no Neovim:

```
:NvimTreeToggle
```

## 🔹 6. Instalar e Configurar o LSP (Language Server Protocol)

### 6.1 Instalar Servidores LSP

Dentro do Neovim, execute:

```
:LspInstall <linguagem>
```

Exemplo para instalar suporte a **Python**:

```
:LspInstall pyright
```

### 6.2 Configurar o LSP

No arquivo `~/.config/nvim/lua/user/init.lua`, adicione o seguinte código para suportar várias linguagens:

```lua
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
}
```

### 6.3 Instalar Treesitter para Melhor Sintaxe

```lua
{
  "nvim-treesitter/nvim-treesitter",
  run = ":TSUpdate",
  config = function()
    require("nvim-treesitter.configs").setup({
      ensure_installed = { "c", "cpp", "java", "html", "css", "javascript", "typescript", "sql", "c_sharp" },
      highlight = {
        enable = true,
      },
    })
  end,
}
```

Para instalar uma nova linguagem, execute:

```
:TSInstall <linguagem>
```

Exemplo:

```
:TSInstall python
```

---

## 🎯 Tudo Pronto!

Agora você tem um **Neovim poderoso e moderno** com aparência do **VS Code** e suporte a várias linguagens! 🚀

😃

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

