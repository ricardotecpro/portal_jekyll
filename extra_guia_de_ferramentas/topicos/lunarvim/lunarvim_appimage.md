# Tutorial Atualizado: Instalando Neovim e LunarVim no Debian

## 1. Removendo Instalações Anteriores

Antes de instalar o Neovim e o LunarVim, remova qualquer instalação existente para evitar conflitos:

```bash
sudo rm -rf ~/.local/share/nvim ~/.local/state/nvim ~/.cache/nvim ~/.config/nvim
sudo rm -rf ~/.local/share/lunarvim ~/.local/state/lunarvim ~/.cache/lunarvim ~/.config/lvim
sudo rm -rf /usr/local/bin/nvim /usr/local/bin/nvim-linux-x86_64.appimage /opt/neovim
```

## 2. Instalando Dependências Essenciais

Antes de instalar o Neovim e o LunarVim, certifique-se de que seu sistema tem os pacotes necessários:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl wget git fuse libfuse2 unzip
```

## 3. Instalando Neovim (Versão mais recente via AppImage)

Baixe e instale o **Neovim AppImage**:

```bash
cd /usr/local/bin
sudo wget https://github.com/neovim/neovim/releases/download/v0.10.4/nvim-linux-x86_64.appimage
sudo chmod +x nvim-linux-x86_64.appimage
```

Teste a instalação:

```bash
/usr/local/bin/nvim-linux-x86_64.appimage --version
```

Se funcionar corretamente, crie um atalho global:

```bash
sudo ln -sf /usr/local/bin/nvim-linux-x86_64.appimage /usr/local/bin/nvim
```

Agora, o Neovim pode ser iniciado com:

```bash
nvim
```

Caso o AppImage não rode, extraia o conteúdo e utilize a versão extraída:

```bash
./nvim-linux-x86_64.appimage --appimage-extract
sudo mv squashfs-root /opt/neovim
sudo ln -sf /opt/neovim/usr/bin/nvim /usr/local/bin/nvim
```

## 4. Instalando o LunarVim

ciInstale o **LunarVim** com o script oficial:

```bash
LV_BRANCH='release-1.4/neovim-0.10' bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh)
```

Se houver problemas de permissão ao instalar dependências do NodeJS, use:

```bash
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

Após a instalação, carregue as configurações com:

```bash
source ~/.bashrc
lvim --version
```

Se o comando `lvim` não for encontrado, adicione o caminho ao **.bashrc**:

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

## 5. Configurando LunarVim para Parecer com o VS Code

Edite o arquivo de configuração:

```bash
mkdir -p ~/.config/lvim
nvim ~/.config/lvim/config.lua
```

Adicione as seguintes configurações:

```lua
-- Ativar números de linha
vim.opt.number = true
vim.opt.relativenumber = true

-- Melhor indentação
vim.opt.tabstop = 4
vim.opt.shiftwidth = 4
vim.opt.expandtab = true
vim.opt.smartindent = true

-- Tema similar ao VS Code
lvim.colorscheme = "tokyonight"

-- Atalhos parecidos com VS Code
lvim.keys.normal_mode["<C-s>"] = ":w<CR>"
lvim.keys.normal_mode["<C-p>"] = ":Telescope find_files<CR>"
lvim.keys.normal_mode["<C-b>"] = ":NvimTreeToggle<CR>"

-- Configurar barra lateral como no VS Code
lvim.builtin.nvimtree.setup.view.side = "left"

-- Melhor autocomplete
local cmp = require("cmp")
lvim.builtin.cmp.mapping["<Tab>"] = cmp.mapping.select_next_item()
lvim.builtin.cmp.mapping["<S-Tab>"] = cmp.mapping.select_prev_item()

-- Ativar barra de status estilo VS Code
require("lualine").setup({
  options = { theme = "auto" }
})

-- Ativar barra superior com arquivos abertos
require("bufferline").setup()

-- Melhor indentação visual
require("indent_blankline").setup {
    char = "│",
    buftype_exclude = { "terminal" },
}
```

Salve e saia (`ESC` → `:wq`).

## 6. Testando o LunarVim

Execute o **LunarVim** para testar:

```bash
lvim
```

Se houver problemas, tente reinstalar:

```bash
Lo
```

Se o erro "lua/lualine/themes/gruvbox/init.lua Not found" ocorrer, altere o tema no arquivo de configuração:

```bash
nvim ~/.config/lvim/config.lua
```

E substitua:

```lua
require("lualine").setup({
  options = { theme = "tokyonight" }
})
```

por

```lua
require("lualine").setup({
  options = { theme = "auto" }
})
```

Agora você tem o **Neovim** e **LunarVim** configurados para uma experiência semelhante ao **VS Code**! 🚀



---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
