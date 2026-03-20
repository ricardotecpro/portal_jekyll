# Makefile Profissional em C

## Ordem

- [ ] Estrutura
- [ ] Exemplo
- [ ] Comandos


Caminho dos profissionais de C.  
Padrão de projeto em C com `Makefile` mais organizado — separando os arquivos `.c` e `.h` em pastas.

---

## Estrutura típica de um projeto em C:

```
meu_projeto/
├── Makefile
├── src/
│   ├── main.c
│   ├── funcoes.c
│
├── include/
│   └── funcoes.h
│
└── bin/
```

> Onde:

- `src/` → Arquivos fonte `.c`
    
- `include/` → Arquivos de cabeçalho `.h`
    
- `bin/` → Onde fica o executável final
    

---

## Exemplo dos arquivos

### src/main.c

```c
#include <stdio.h>
#include "funcoes.h"

int main() {
    ola();
    return 0;
}
```

---

### src/funcoes.c

```c
#include <stdio.h>
#include "funcoes.h"

void ola() {
    printf("Olá, Ricardo!\n");
}
```

---

### include/funcoes.h

```c
#ifndef FUNCOES_H
#define FUNCOES_H

void ola();

#endif
```

---

## Makefile profissional:

```Makefile
# Nome do programa
PROG = bin/programa

# Compilador
CC = gcc

# Diretórios
SRC_DIR = src
INC_DIR = include
BIN_DIR = bin

# Flags de compilação
CFLAGS = -Wall -Wextra -I$(INC_DIR)

# Arquivos fonte
SRCS = $(wildcard $(SRC_DIR)/*.c)

# Objetos gerados
OBJS = $(SRCS:.c=.o)

# Alvo padrão
all: $(BIN_DIR) $(PROG)

# Como compilar
$(PROG): $(SRCS)
	$(CC) $(CFLAGS) $(SRCS) -o $(PROG)

# Cria a pasta bin se não existir
$(BIN_DIR):
	mkdir -p $(BIN_DIR)

# Limpar arquivos gerados
clean:
	rm -f $(PROG)

```

---

## Comandos pra usar:

### Compilar:

```bash
make
```

### Executar:

```bash
./bin/programa
```

### Limpar:

```bash
make clean
```

---

## Melhorando no Vim:

Dentro do Vim:

Compila e executa:

```vim
:!make && ./bin/programa
```

Atalho no `~/.vimrc`:

```vim
nnoremap <F5> :w<CR>:!make && ./bin/programa<CR>
```

---

 😎