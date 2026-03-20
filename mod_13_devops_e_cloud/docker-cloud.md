---
layout: default
title: 🐳 DevOps e Cloud
---

# 🐳 DevOps e Cloud

## Fundamentos e práticas essenciais do Docker

## 📜 Tópicos
1.  O Problema: "Funciona na Minha Máquina!"
2.  O Que é Docker?
    * Contêineres: A Solução Mágica
    * Imagens Docker: A Receita do Bolo
3.  Docker Hub: Seu Universo de Imagens Docker
    * Principais Características e Funcionalidades
    * Interagindo com o Docker Hub via CLI
    * Benefícios de Usar o Docker Hub
4.  Contêineres vs. Máquinas Virtuais (VMs)
5.  Vantagens de Usar Docker
    * Eficiência e Leveza
    * Portabilidade e Consistência
    * Agilidade no Desenvolvimento e CI/CD
6.  Instalando o Docker
    * Windows (com Docker Desktop e WSL2)
    * macOS (com Docker Desktop)
    * Linux (Docker Engine e Docker Desktop)
    * Verificando a Instalação (`docker run hello-world`)
7.  Primeiros Passos: Trabalhando com Contêineres Prontos
    * Buscando e Baixando Imagens do Docker Hub (`docker search`, `docker pull`)
    * Executando seu Primeiro Contêiner (`docker run`)
    * Listando Contêineres (`docker ps`)
    * Parando e Iniciando Contêineres (`docker stop`, `docker start`, `docker restart`)
    * Acessando Logs (`docker logs`)
    * Executando Comandos Dentro de um Contêiner (`docker exec`)
    * Removendo Contêineres e Imagens (`docker rm`, `docker rmi`)
8.  Criando Suas Próprias Aplicações com Docker
    * Entendendo o `Dockerfile`: A Receita da Sua Aplicação
    * Construindo Sua Imagem (`docker build`)
    * Exemplo Prático: Dockerizando uma Aplicação
    * Marcando (Tag) e Enviando (Push) Imagens para o Docker Hub
9.  Gerenciando Dados em Contêineres (Volumes)
10. Orquestrando Múltiplos Contêineres com Docker Compose
11. Docker no Ecossistema de Contêineres: Uma Comparação
12. Breve Olhar: História e Evolução do Docker
13. Integração com Ferramentas de Desenvolvimento (IDEs)
14. Conclusão e Próximos Passos

---

## 1. 🤔 O Problema: "Funciona na Minha Máquina!"

Todo desenvolvedor já passou por isso: você desenvolve uma aplicação, ela funciona perfeitamente no seu computador, mas ao tentar executá-la em outra máquina (de um colega, do servidor de testes ou de produção), surgem problemas de compatibilidade, dependências ausentes ou versões conflitantes de software. Esse é o clássico "mas funciona na minha máquina!".

É aqui que o Docker entra como uma solução elegante.

## 2. 💡 O Que é Docker?

Docker é uma plataforma de código aberto que automatiza o deploy (implantação), o dimensionamento e a gestão de aplicações dentro de unidades padronizadas chamadas **contêineres**. Ele permite que desenvolvedores "empacotem" uma aplicação com todas as suas dependências (bibliotecas, frameworks, arquivos de configuração, etc.) em um único objeto.

### 📦 Contêineres: A Solução Mágica
Contêineres são unidades leves e isoladas que empacotam aplicações e suas dependências, garantindo consistência no ambiente de execução. Eles executam diretamente sobre o kernel do sistema operacional hospedeiro, o que os torna mais eficientes em termos de recursos do que máquinas virtuais tradicionais.

* **Isolamento:** Cada contêiner opera em seu próprio ambiente isolado, com seu próprio sistema de arquivos, processos e rede, sem interferir em outros contêineres ou no sistema hospedeiro.
* **Leveza:** Compartilham o kernel do S.O. hospedeiro, necessitando de menos recursos (CPU, RAM, disco) que VMs.
* **Portabilidade:** Uma imagem de contêiner criada em um ambiente pode ser executada em qualquer outro ambiente que suporte Docker, melhorando a portabilidade e a eficiência.

### 📜 Imagens Docker: A Receita do Bolo
Uma **imagem Docker** é um template somente leitura com instruções para criar um contêiner Docker. Pense nela como uma "receita" ou um "snapshot" que define o estado inicial do contêiner, incluindo o sistema operacional base, as aplicações e todas as suas dependências.

* As imagens são construídas a partir de um arquivo de instruções chamado `Dockerfile`.
* Elas são armazenadas em registros de imagens, como o Docker Hub (público) ou registros privados.
* Quando você executa `docker run <imagem>`, o Docker usa essa imagem para criar e iniciar uma instância executável: o contêiner.

## 3. ✨ Docker Hub: Seu Universo de Imagens Docker

O **Docker Hub** é o registro de imagens oficial e o maior do mundo, fornecido pela Docker Inc. Ele serve como um repositório centralizado para encontrar, compartilhar e gerenciar imagens de contêineres. Pense nele como o GitHub, mas para imagens Docker.

**Principais Características e Funcionalidades:**

* **Repositórios Públicos e Privados:**
    * **Públicos:** Qualquer pessoa pode buscar e baixar (pull) imagens de repositórios públicos. Ideal para projetos de código aberto e imagens de base populares.
    * **Privados:** Permitem que você armazene imagens que não deseja compartilhar publicamente. Contas gratuitas geralmente oferecem um número limitado de repositórios privados.

* **Imagens Oficiais (Official Images):**
    * São uma coleção selecionada de imagens de alta qualidade, seguras e bem documentadas, mantidas pela Docker Inc. ou por parceiros verificados. Exemplos: `ubuntu`, `nginx`, `node`, `python`, `postgres`.
    * São recomendadas como base para a maioria das suas próprias imagens.

* **Imagens Verificadas de Publicadores (Verified Publisher Images):**
    * Imagens fornecidas e mantidas por empresas de software e organizações confiáveis (ex: Microsoft, Oracle, Red Hat). Garantem que você está usando software de fontes autênticas.

* **Imagens da Comunidade (Community Images):**
    * Milhares de imagens criadas e compartilhadas por usuários e organizações da comunidade Docker. A qualidade e segurança podem variar, então é importante usá-las com discernimento.

* **Builds Automatizados (Automated Builds):**
    * Permite vincular seus repositórios Docker Hub a repositórios de código fonte (como GitHub ou Bitbucket).
    * Quando você faz um push para o seu repositório de código, o Docker Hub pode automaticamente construir (ou reconstruir) a imagem Docker a partir do seu `Dockerfile` e atualizar a imagem no Hub.

* **Webhooks:**
    * Notificam outros serviços quando uma imagem é atualizada em seu repositório Docker Hub, permitindo a automação de pipelines de CI/CD.

* **Organizações e Times:**
    * Permitem que múltiplos usuários colaborem em imagens privadas ou públicas sob uma conta de organização, com gerenciamento de permissões.

**Interagindo com o Docker Hub via CLI:**

1.  **Login:**
    ```bash
    docker login
    # Você será solicitado a inserir seu Docker ID (nome de usuário) e senha.
    ```

2.  **Buscar Imagens (mais eficaz no site):**
    ```bash
    docker search termo_de_busca
    # Exemplo: docker search ubuntu
    ```

3.  **Baixar (Pull) Imagens:**
    ```bash
    docker pull nome_da_imagem:tag
    # Exemplo: docker pull ubuntu:22.04
    ```

4.  **Marcar (Tag) Imagens para o Hub:**
    ```bash
    docker tag minha-app-local:1.0 seu_docker_id/nome_do_repo_no_hub:1.0
    ```

5.  **Enviar (Push) Imagens:**
    ```bash
    docker push seu_docker_id/nome_do_repo_no_hub:1.0
    ```

**Benefícios de Usar o Docker Hub:**
* **Centralização:** Um local único para encontrar e distribuir imagens.
* **Confiança:** Imagens Oficiais e de Publicadores Verificados oferecem uma base segura.
* **Colaboração:** Facilita o compartilhamento de imagens entre equipes e com a comunidade.
* **Automação:** Builds automatizados simplificam o processo de CI/CD.

## 4. 🆚 Contêineres vs. Máquinas Virtuais (VMs)

É comum confundir contêineres com Máquinas Virtuais (VMs), mas eles funcionam de maneiras diferentes:

* **Máquinas Virtuais (VMs):**
    * Virtualizam o **hardware**, criando um ambiente completo.
    * Cada VM possui seu próprio S.O. completo (kernel, bibliotecas e a aplicação). Isso pode levar a um uso menos eficiente dos recursos do sistema.
    * São mais pesadas e consomem mais recursos.
    * A inicialização é mais lenta (minutos).
    * Oferecem isolamento forte a nível de hardware.

* **Contêineres Docker:**
    * Virtualizam o **sistema operacional**.
    * Compartilham o kernel do S.O. hospedeiro. Isso permite a execução de múltiplas aplicações em um único sistema, otimizando recursos.
    * Contêm apenas as bibliotecas e dependências da aplicação.
    * São mais leves e consomem menos recursos.
    * A inicialização é muito rápida (segundos ou menos).
    * Oferecem isolamento a nível de processo. Comparar Docker com outras tecnologias de virtualização revela suas vantagens em leveza e desvantagens em termos de isolamento.

```
    +-------------------+      +-------------------+
    |    Aplicação A    |      |    Aplicação B    |
    +-------------------+      +-------------------+
    | Bins/Libs (App A) |      | Bins/Libs (App B) |
    +-------------------+      +-------------------+
    |     Docker Engine / Container Runtime         |
    +-----------------------------------------------+
    |          Sistema Operacional Host             |
    +-----------------------------------------------+
    |                   Hardware                    |
    +-----------------------------------------------+
                Arquitetura de Contêineres

    +---------------+  +---------------+
    |  Aplicação A  |  |  Aplicação B  |
    +---------------+  +---------------+
    |  Bins/Libs A  |  |  Bins/Libs B  |
    +---------------+  +---------------+
    | S.O. Convidado|  | S.O. Convidado|  <-- Cada VM tem seu S.O.
    +---------------+  +---------------+
    |           Hypervisor             |
    +----------------------------------+
    |      Sistema Operacional Host    |
    +----------------------------------+
    |              Hardware            |
    +----------------------------------+
              Arquitetura de VMs
```

## 5. ✅ Vantagens de Usar Docker

Adotar o Docker traz inúmeros benefícios para o ciclo de vida de desenvolvimento de software:

### ⚙️ Eficiência e Leveza
* **Uso Otimizado de Recursos:** Contêineres Docker são mais leves que máquinas virtuais, permitindo um uso mais eficiente dos recursos do sistema.
* **Desempenho Superior:** A arquitetura dos contêineres permite um desempenho mais rápido e melhor resposta.
* **Redução de Custos Operacionais:** A eficiência no uso de recursos pode resultar em significativa redução nos custos operacionais.

### 📦 Portabilidade e Consistência
* **Execute em Qualquer Lugar:** Docker permite que aplicações sejam executadas em qualquer ambiente, eliminando problemas de compatibilidade.
* **Ambientes Padronizados:** A portabilidade melhora a consistência das aplicações, garantindo que funcionem da mesma forma em diferentes cenários.
* **Confiabilidade Aumentada:** Aplicações se tornam mais confiáveis, pois podem ser testadas e implantadas de maneira uniforme.

### 🚀 Agilidade no Desenvolvimento e CI/CD
* **Ciclos de Desenvolvimento Rápidos:** O uso do Docker no desenvolvimento permite ciclos de entrega mais rápidos.
* **Integração Contínua/Entrega Contínua (CI/CD):** Docker integra-se perfeitamente com ferramentas de CI/CD, permitindo um fluxo de trabalho eficiente.
* **Melhor Colaboração:** Docker melhora a colaboração entre equipes, permitindo que desenvolvedores trabalhem em ambientes consistentes e reproduzíveis.

## 6. 💻 Instalando o Docker

Para começar a usar o Docker, você precisa instalá-lo em seu sistema. A forma mais comum para desktops é o **Docker Desktop**.

### Instalação no Windows
* **Docker Desktop para Windows:** Fornece uma interface gráfica amigável. Utiliza o WSL 2 (Windows Subsystem for Linux 2) para melhor desempenho.
* **Requisitos:** Windows 10/11 64-bit, WSL 2 habilitado, virtualização de hardware na BIOS.
* **Passos:**
    1.  Baixe o instalador do Docker Desktop.
    2.  Execute o instalador e siga as instruções de configuração.
    3.  Reinicie, se necessário, e inicie o Docker Desktop para começar. Após a instalação, é necessário configurar preferências e verificar se está funcionando corretamente.

### 🍏 Instalação no macOS
* **Docker Desktop para macOS:** Oferece uma plataforma poderosa para desenvolvimento na Apple.
* **Passos:**
    1.  Baixe o arquivo `.dmg` do Docker Desktop.
    2.  Abra o `.dmg` e arraste o Docker para a pasta Aplicativos.
    3.  Inicie o Docker Desktop e autorize a instalação. Após a instalação, garanta a configuração rápida para começar.

### 🐧 Instalação no Linux
Pode ser via Docker Desktop ou instalando o Docker Engine diretamente.

* **Docker Engine (Exemplo para Ubuntu):**
    1.  Explore os passos necessários para instalar o Docker em um sistema Ubuntu.
    2.  (Comandos: `sudo apt update`, `sudo apt install apt-transport-https ca-certificates curl software-properties-common -y`, etc.)
    3.  É crucial configurar o ambiente corretamente após a instalação para garantir funcionamento eficiente.

* **Docker Engine (Exemplo para CentOS):**
    1.  Aborde o processo de instalação no CentOS, destacando especificidades.
    2.  (Comandos: `sudo yum remove ...`, `sudo yum install -y yum-utils`, etc.)
    3.  Configure o ambiente corretamente.

### ✅ Verificando a Instalação (`docker run hello-world`)
Após a instalação, abra um terminal e verifique se tudo está funcionando:
```bash
docker --version
docker info
docker run hello-world
```
Se você vir uma mensagem de boas-vindas do `hello-world`, sua instalação está correta!

## 7. 🚀 Primeiros Passos: Trabalhando com Contêineres Prontos

Agora que o Docker está instalado, vamos explorar como usar contêineres existentes.

### 🔍 Buscando e Baixando Imagens do Docker Hub (`docker search`, `docker pull`)
O Docker Hub é o principal local para encontrar imagens.
```bash
docker search nginx
docker pull nginx:latest
```

### ▶️ Executando seu Primeiro Contêiner (`docker run`)
O comando `docker run` é utilizado para iniciar um novo contêiner a partir de uma imagem especificada.
```bash
docker run --name meu-nginx-web -p 8080:80 -d nginx
```

### 📋 Listando Contêineres (`docker ps`)
O comando `docker ps` lista todos os contêineres em execução, fornecendo informações essenciais.
```bash
docker ps
docker ps -a # Lista todos, incluindo os parados
```

### ⏯️ Parando e Iniciando Contêineres (`docker stop`, `docker start`, `docker restart`)
O comando `docker stop` é usado para parar um ou mais contêineres em execução de forma segura.
```bash
docker stop meu-nginx-web
docker start meu-nginx-web
docker restart meu-nginx-web
```

### 📜 Acessando Logs (`docker logs`)
```bash
docker logs meu-nginx-web
docker logs -f meu-nginx-web # Segue os logs
```

###  Executando Comandos Dentro de um Contêiner (`docker exec`)
```bash
docker exec -it meu-nginx-web bash
```

### 🗑️ Removendo Contêineres e Imagens (`docker rm`, `docker rmi`)
```bash
docker rm meu-nginx-web # Remove contêiner parado
docker rmi nginx # Remove imagem (se não usada por contêineres)
```

## 8. 🛠️ Criando Suas Próprias Aplicações com Docker

Empacote suas aplicações usando um `Dockerfile`. Isso permite criar contêineres personalizados adaptados às suas necessidades.

### 📄 Entendendo o `Dockerfile`: A Receita da Sua Aplicação
Um `Dockerfile` é um arquivo de texto com instruções para construir uma imagem Docker.
* `FROM <imagem_base>`
* `WORKDIR /caminho/no/container`
* `COPY <origem> <destino>`
* `RUN <comando>`
* `EXPOSE <porta>`
* `CMD ["executavel", "param1"]`

### 🧱 Construindo Sua Imagem (`docker build`)
```bash
docker build -t nome-da-sua-imagem:tag .
```

### ✨ Exemplo Prático: Dockerizando uma Aplicação
(Segue o exemplo Node.js já fornecido anteriormente)

1.  **Crie `app.js` e `package.json`.**
2. **Crie o `Dockerfile`:**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /usr/src/app
   COPY package*.json ./
   RUN npm install
   COPY ../modulo_08_ambiente_desenvolvimento .
   EXPOSE 3000
   CMD [ "npm", "start" ]
   ```
3.  **Construa:** `docker build -t meu-app-node .`
4.  **Execute:** `docker run -p 3000:3000 -d meu-app-node`

### ⬆️ Marcando (Tag) e Enviando (Push) Imagens para o Docker Hub
Depois de construir e testar sua imagem localmente, você pode compartilhá-la no Docker Hub (ou outro registro).
1.  **Login (se ainda não fez):** `docker login`
2.  **Tag:** `docker tag meu-app-node:latest seu_docker_id/meu-app-node:1.0`
3.  **Push:** `docker push seu_docker_id/meu-app-node:1.0`

## 9. 💾 Gerenciando Dados em Contêineres (Volumes)

É importante entender a persistência de dados em contêineres para garantir que seus dados sejam salvos e acessíveis.
* **Volumes Nomeados:** `docker run -v meu-volume:/app/dados minha-imagem`
* **Bind Mounts:** `docker run -v /caminho/no/host:/app minha-imagem`

## 10. 🔗 Orquestrando Múltiplos Contêineres com Docker Compose

Para aplicações com múltiplos serviços, use o Docker Compose.
* Crie um arquivo `docker-compose.yml`.
* **Exemplo `docker-compose.yml`:**
    ```yaml
    version: '3.8'
    services:
      webapp:
        build: ../modulo_08_ambiente_desenvolvimento
        ports: ["3000:3000"]
        volumes: [".:/usr/src/app"]
        environment: ["DB_HOST=db"]
        depends_on: [db]
      db:
        image: postgres:15-alpine
        volumes: ["postgres_data:/var/lib/postgresql/data"]
        environment: ["POSTGRES_USER=user", "POSTGRES_PASSWORD=pass"]
    volumes:
      postgres_data:
    ```
* **Comandos:** `docker-compose up -d`, `docker-compose down`, `docker-compose ps`, `docker-compose logs webapp`.

## 11. 🆚 Docker no Ecossistema de Contêineres: Uma Comparação

| Característica          | Docker (com Docker Engine)                                  | Podman (com Buildah & Skopeo)                               | LXC/LXD                                                       | containerd (com `nerdctl`)                                 | Kubernetes (Orquestrador)                                  |
| :---------------------- | :---------------------------------------------------------- | :---------------------------------------------------------- | :------------------------------------------------------------ | :--------------------------------------------------------- | :--------------------------------------------------------- |
| **Arquitetura** | Daemon (dockerd)                                            | Daemonless (interage diretamente com o kernel)                | Daemon (LXD) ou bibliotecas (LXC)                             | Daemon (containerd)                                        | Arquitetura complexa de master/nodos com múltiplos daemons |
| **Foco Principal** | Plataforma completa para desenvolvimento, build e execução de apps | Alternativa ao Docker CLI, foco em segurança (rootless by default) | Contêineres de sistema (mais parecidos com VMs leves)         | Runtime de contêineres de baixo nível, padrão da indústria   | Orquestração de contêineres em larga escala                 |
| **OCI Compliance** | Sim (usa containerd por baixo)                              | Sim                                                         | Sim (para imagens OCI com LXD)                                | Sim (é um runtime OCI)                                     | Sim (usa runtimes OCI como containerd ou CRI-O)            |
| **Build de Imagens** | `docker build` (Dockerfile)                                 | `podman build` (Dockerfile), `buildah bud`                    | Suporte para Dockerfile via LXD, ou criação de templates LXC  | `nerdctl build` (Dockerfile)                               | Não constrói imagens diretamente; consome imagens prontas  |
| **CLI** | `docker`                                                    | `podman` (compatível com muitos comandos Docker)              | `lxc`, `lxd` (com `lxc`)                                      | `nerdctl` (compatível com Docker CLI), `ctr` (mais baixo nível) | `kubectl`                                                  |
| **Segurança (Rootless)** | Suportado (requer configuração)                             | Padrão e mais robusto                                       | Suportado                                                     | Suportado (com configuração)                               | Suportado (configurável nos Pods e runtimes)               |
| **Gestão de Imagens** | Docker Hub, registros privados                              | Registros OCI (Docker Hub, Quay.io, etc.)                   | Registros de imagens LXD, Docker Hub                          | Registros OCI                                              | Registros OCI                                              |
| **Composição (Multi-contêiner local)** | Docker Compose                                              | Podman Compose, ou gerenciamento de Pods (conceito do K8s)  | Não tem ferramenta de composição análoga direta              | `nerdctl compose`                                          | Pods (definidos em YAML)                                   |
| **Comunidade/Ecossistema**| Enorme, muito maduro                                        | Crescente, forte na comunidade Red Hat/Linux                | Estabelecida, especialmente para contêineres de sistema Linux | Forte (componente central do Docker e Kubernetes)            | Enorme, padrão de fato para orquestração                   |
| **Casos de Uso Típicos**| Desenvolvimento de apps, CI/CD, deploy em pequena/média escala | Ambientes que exigem mais segurança, alternativa ao daemon Docker | Isolar serviços ou aplicações completas como se fossem VMs | Componente de runtime para plataformas como Docker ou K8s  | Deploy, escalonamento e gerenciamento de apps em produção  |

## 12. ⏳ Breve Olhar: História e Evolução do Docker

* **Lançamento:** O Docker foi lançado em 2013, introduzindo uma nova forma de empacotar e distribuir aplicações.
* **Evolução:** Com o tempo, o Docker evoluiu, incorporando novas funcionalidades que melhoraram a gestão de contêineres e a orquestração.
* **Impacto:** O impacto na indústria foi profundo, promovendo eficiência no desenvolvimento e implantação de software.

## 13. 🛠️ Integração com Ferramentas de Desenvolvimento (IDEs)

* **VS Code:** A extensão "Docker" da Microsoft oferece excelente suporte.
* **IntelliJ IDEA (Ultimate):** Possui integração nativa robusta.

## 14. 🎉 Conclusão e Próximos Passos

Docker revolucionou o desenvolvimento de aplicações. Com este manual, você possui as bases para começar a utilizar o Docker. Ele oferece funcionalidades poderosas que melhoram a eficiência e a escalabilidade.

**Próximos Passos:**
1.  Pratique! Containerize suas aplicações.
2.  Explore Dockerfiles avançados (multi-stage builds).
3.  Aprofunde-se em Redes Docker.
4.  Estude Orquestração (Kubernetes).
5.  Segurança em Contêineres.

## 📘 Referências e Recursos Adicionais
* [Documentação Oficial do Docker](https://docs.docker.com/)
* [Docker Hub](https://hub.docker.com/)
* [Docker Cheat Sheet](https://dockerlabs.collabnix.com/docker/cheatsheet/)
* [Docker CLI Reference](https://docs.docker.com/engine/reference/commandline/docker/)
* [Dockerfile Best Practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
* [Docker Compose Documentation](https://docs.docker.com/compose/)
* [Docker Security Best Practices](https://docs.docker.com/engine/security/security/)
* [Docker Networking Overview](https://docs.docker.com/network/)
* [Docker Volumes Documentation](https://docs.docker.com/storage/volumes/)
* [Docker Swarm Overview](https://docs.docker.com/engine/swarm/)
* [Docker Desktop Documentation](https://docs.docker.com/desktop/)
* [Docker for Windows with WSL2](https://docs.docker.com/desktop/windows/wsl/)
* [Docker for Mac](https://docs.docker.com/desktop/mac/)
* [Docker for Linux](https://docs.docker.com/engine/install/)

## 15. 📚 Exemplos Práticos
### Exemplo 1: Dockerizando uma Aplicação Java Simples
Para criar uma aplicação Java simples e dockerizá-la, siga os passos abaixo:

[Docker Exemplo 1](ricardotecpro.github.io/modulo_08_ambiente_desenvolvimentohttps://ricardotecpro.github.io/modulo_08_ambiente_desenvolvimento/docker/calculadora-java/README.html)

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

