---
layout: default
title: LINUX
---

**Manual de Introdução ao Linux para Alunos do Curso de Análise de Sistemas**, abordando instalação, configuração, comandos principais e o setup de ambientes com Java, Python, Node.js, MySQL e PostgreSQL:

---

# Manual de Introdução ao Linux

**Curso: Análise e Desenvolvimento de Sistemas**  
**Professor: Ricardo**

---

## 1. Introdução

O Linux é um sistema operacional de código aberto amplamente utilizado em servidores, sistemas embarcados e no desenvolvimento de software. Neste manual, você aprenderá os conceitos básicos, comandos essenciais e como preparar um ambiente de desenvolvimento completo no Linux.

---

## 2. Instalação do Linux

### 2.1 Distribuições recomendadas

- **Ubuntu** (user-friendly)
    
- **Debian** (estável)
    
- **Fedora** (atualizado)
    
- **Linux Mint** (ideal para iniciantes)
    

### 2.2 Instalação via USB

1. Baixe a ISO da distribuição desejada.
    
2. Use o **Rufus** (Windows) ou **Balena Etcher** (Linux/macOS) para criar um pendrive bootável.
    
3. Configure a BIOS/UEFI para dar boot pelo USB.
    
4. Siga o instalador gráfico.
    

---

## 3. Pós-instalação

### 3.1 Atualização do sistema

```bash
sudo apt update && sudo apt upgrade -y   # Debian/Ubuntu
sudo dnf update -y                       # Fedora
```

### 3.2 Instalar utilitários úteis

```bash
sudo apt install curl wget git build-essential -y
```

---

## 4. Comandos Essenciais

|Comando|Descrição|
|---|---|
|`pwd`|Exibe o diretório atual|
|`ls`|Lista arquivos e pastas|
|`cd`|Navega entre diretórios|
|`mkdir`|Cria uma nova pasta|
|`rm`|Remove arquivos/pastas|
|`cp`|Copia arquivos|
|`mv`|Move ou renomeia arquivos|
|`cat`|Exibe conteúdo de arquivos|
|`nano` / `vim`|Editores de texto|
|`chmod` / `chown`|Permissões|
|`top` / `htop`|Monitoramento do sistema|
|`ps aux|grep nome`|

---

## 5. Configuração de Ambientes de Programação

### 5.1 Java (OpenJDK)

```bash
sudo apt install openjdk-17-jdk -y
java -version
```

### 5.2 Python

```bash
sudo apt install python3 python3-pip -y
python3 --version
pip3 --version
```

### 5.3 Node.js + npm

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```

### 5.4 MySQL Server

```bash
sudo apt install mysql-server -y
sudo systemctl start mysql
sudo mysql_secure_installation
```

### 5.5 PostgreSQL

```bash
sudo apt install postgresql postgresql-contrib -y
sudo systemctl start postgresql
sudo -u postgres psql
```

---

## 6. Extras

### 6.1 Gerenciador de pacotes Snap

```bash
sudo apt install snapd -y
```

### 6.2 Instalar VS Code

```bash
sudo snap install code --classic
```

---

## 7. Dicas úteis

- Use `man comando` para ler o manual de um comando.
    
- Crie aliases no `.bashrc` ou `.zshrc` para automatizar tarefas.
    
- Use `apt search nome` para procurar pacotes.
    

---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)

