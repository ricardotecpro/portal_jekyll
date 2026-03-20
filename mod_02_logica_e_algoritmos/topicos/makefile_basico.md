# Makefile C/C++: Compilando Projetos Profissionalmente

Usar `Makefile` é o jeito profissional de compilar projetos em C (e outras linguagens).

### Vantagens de usar Makefile:

- Automatiza o build
    
- Facilita compilar projetos grandes
    
- Fica padrão pra qualquer dev C/C++
    

---

## Exemplo simples de Makefile

Suponha que você tem um arquivo `main.c`:

### Estrutura dos arquivos:

```
meu_projeto/
├── main.c
└── Makefile
```

---

### Exemplo de conteúdo do `Makefile`:

```Makefile
# Nome do executável
PROG = programa

# Compilador
CC = gcc

# Flags de compilação (avisos extras)
CFLAGS = -Wall -Wextra -g

# Alvo padrão
all: $(PROG)

# Como compilar
$(PROG): main.c
	$(CC) $(CFLAGS) main.c -o $(PROG)

# Limpar arquivos gerados
clean:
	rm -f $(PROG)
```

---

## Como usar:

Dentro da pasta do projeto:

### Compilar:

```bash
make
```

Ele vai criar o executável `programa`.

### Rodar:

```bash
./programa
```

### Limpar arquivos gerados:

```bash
make clean
```

---

## Automatizando dentro do Vim

Dentro do Vim:

```vim
:!make && ./programa
```

Ou cria no `~/.vimrc` um atalho:

```vim
nnoremap <F5> :w<CR>:!make && ./programa<CR>
```

Agora dentro do Vim:

- `F5` → Salva, compila com Makefile e executa.
    

---

Montar um Makefile mais avançado

Tipo separando arquivos `.h` e `.c` em pastas diferentes (src/, include/)

