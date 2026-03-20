# **Ambiente de Desenvolvimento 🚀**

Bem-vindo(a) ao seu guia definitivo para criar um **ambiente de desenvolvimento robusto, organizado e produtivo**.
Este material foi pensado para **iniciantes e profissionais em transição**, com foco em prática e aplicação real.

Ao final desta jornada, você será capaz de **instalar, configurar e usar** ferramentas modernas para desenvolver software com eficiência.

---

## 🎯 Objetivos de Aprendizagem

Você vai aprender a:

* **Configurar IDEs** para escrever, depurar e testar código como um profissional.
* **Usar o Terminal** (Windows & Linux) para automatizar e gerenciar sistemas.
* **Controlar versões** com Git e GitHub.
* **Programar do zero** em uma linguagem como JavaScript, Python ou Java.
* **Trabalhar com Docker** para criar ambientes portáteis e padronizados.
* **Desenvolver um projeto prático completo** com aplicação real.

---

## 📚 Trilha de Aprendizado

### **Módulo 0 – Ambientação**

Objetivo: preparar seu computador e sua organização para iniciar o curso.

**Conteúdo:**

* Estrutura de pastas para projetos (`/projetos`, `/documentos`, `/downloads`).
* Como manter backups de código (Google Drive, Dropbox, GitHub).
* Preparando o ambiente para receber as ferramentas.

---

### **Módulo 1 – Preparando o Ambiente**

Objetivo: instalar e configurar as principais ferramentas.

**Ferramentas:**

1. **IDE** — [Guia de Instalação e Configuração](./topicos/ides.md)

   * Visual Studio Code, IntelliJ IDEA ou Eclipse.
   * Extensões recomendadas.

2. **Terminal** — [Comandos Essenciais no Windows e Linux](../modulo_16_devops/terminal_windows_linux.md)

   * `cd`, `ls/dir`, `mkdir`, `rm`, `cp`, `mv`.
   * Permissões de arquivos e execução de scripts.

3. **Git & GitHub** — Configuração inicial.

   ```bash
   git config --global user.name "Seu Nome"
   git config --global user.email "seuemail@example.com"
   ```

**Prática:**

* Criar um repositório local, adicionar um arquivo `README.md` e enviar para o GitHub.

```bash
echo "# Meu Primeiro Repositório" > README.md
git init
git add README.md
git commit -m "Primeiro commit"
git branch -M main
git remote add origin https://github.com/seuusuario/meu-repo.git
git push -u origin main
```

---

### **Módulo 2 – Fundamentos de Programação**

Objetivo: aprender lógica e implementar seu primeiro código.

**Conteúdo:**

* Variáveis, condicionais, loops, funções.
* Entrada e saída de dados.
* Escolha da linguagem: Python (fácil e rápido) ou Java (forte tipagem e OO).

**Exemplo em Python:**

```python
nome = input("Digite seu nome: ")
for i in range(3):
    print(f"Olá, {nome}! Bem-vindo(a) ao mundo da programação.")
```

**Exemplo em Java:**

```java
import java.util.Scanner;
public class OlaMundo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Digite seu nome: ");
        String nome = sc.nextLine();
        for (int i = 0; i < 3; i++) {
            System.out.println("Olá, " + nome + "! Bem-vindo(a) ao mundo da programação.");
        }
        sc.close();
    }
}
```

**Prática:**

* Criar um programa que leia uma lista de tarefas e as exiba numeradas.

---

### **Módulo 3 – Trabalhando com Contêineres**

Objetivo: entender e aplicar Docker no desenvolvimento.

**Conteúdo:**

* Conceito de container.
* Diferença entre máquinas virtuais e containers.
* Instalação do Docker — [Guia Completo](../modulo_16_devops/docker.md).
* Comandos básicos:

```bash
docker --version
docker run hello-world
docker ps
docker stop <container_id>
```

**Prática:**

* Rodar um banco de dados PostgreSQL no Docker:

```bash
docker run --name meu-postgres -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres
```

---

### **Módulo 4 – Projeto Final: Lista de Tarefas**

Objetivo: integrar todos os conhecimentos em um projeto funcional.

**Etapas:**

1. Criar backend simples (Python Flask ou Java Spring Boot).
2. Criar frontend (HTML/CSS/JS simples ou Angular).
3. Versionar com GitHub.
4. Containerizar com Docker.

**Exemplo — Dockerfile para um app Python Flask:**

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]
```

**Execução:**

```bash
docker build -t minha-listatarefas .
docker run -p 5000:5000 minha-listatarefas
```

---

## ✅ Conclusão e Próximos Passos

Parabéns!
Se você concluiu todos os módulos:

* Já domina o uso de IDE, terminal e Git.
* Consegue escrever programas básicos.
* Entende e usa Docker para desenvolvimento.
* Criou seu primeiro projeto real.

📌 Continue estudando frameworks, banco de dados avançados e práticas de DevOps para ampliar seu conhecimento.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
