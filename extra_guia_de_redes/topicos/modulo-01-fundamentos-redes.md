---
layout: default
title: **Arquivo 1: `modulo-01-fundamentos-redes.md`**
---

### **Arquivo 1: `modulo-01-fundamentos-redes.md`**


# 🌐 Módulo 1: A Fundação - Redes e a Internet

Bem-vindo ao ponto de partida da sua jornada pela infraestrutura web! Neste módulo, vamos desvendar os conceitos essenciais que fazem a internet funcionar. Ao final, você entenderá como os dados viajam pelo mundo em milissegundos.

## 📜 Aula 1: A Mágica da Internet

### O que é a Internet?
A Internet é uma rede global de computadores interconectados que se comunicam através de um conjunto padronizado de protocolos. Pense nela como um sistema postal gigantesco e ultrarrápido para informações digitais.

- **História e Arquitetura:** Uma rede descentralizada, projetada para ser resiliente.
- **Protocolos:** O conjunto de regras que governa a comunicação. O principal é o **TCP/IP**.

### Modelos de Referência: TCP/IP
Para organizar a complexidade da comunicação em rede, usamos modelos de camadas. O mais prático e utilizado é o modelo TCP/IP.

```mermaid
graph TD
    subgraph "Modelo TCP/IP Simplificado"
        A["Aplicação (HTTP, FTP, SMTP)"]
        B["Transporte (TCP, UDP)"]
        C["Internet (IP)"]
        D["Enlace (Ethernet, Wi-Fi)"]
    end
    A -- "Dados da Aplicação" --> B
    B -- "Segmentos/Datagramas" --> C
    C -- "Pacotes" --> D
    D -- "Quadros (Frames)" --> E((Rede Física))

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#ccf,stroke:#333,stroke-width:2px
    style C fill:#cfc,stroke:#333,stroke-width:2px
    style D fill:#fcf,stroke:#333,stroke-width:2px
````

  - **Pacotes de Dados:** As informações são quebradas em pequenos pedaços chamados pacotes, que são enviados pela rede e remontados no destino.
  - **Roteadores e Switches:** São os "agentes de trânsito" da internet. Switches conectam dispositivos em uma rede local (LAN), enquanto roteadores conectam diferentes redes.

## 🛰️ Aula 2: Endereçamento na Web - IPs e DNS

### Endereços IP (Internet Protocol)

O endereço IP é um identificador numérico único atribuído a cada dispositivo conectado a uma rede. É como o endereço da sua casa no mundo digital.

  - **IPv4 vs. IPv6:** Duas versões do protocolo, sendo o IPv6 a solução para o esgotamento de endereços IPv4.
  - **IP Fixo vs. IP Dinâmico:**
      - **Fixo:** Um endereço permanente, ideal para servidores. Custo mais elevado.
      - **Dinâmico:** Um endereço temporário, atribuído pelo provedor de internet a cada conexão. Comum para usuários domésticos.

### DNS (Domain Name System)

Humanos são bons em lembrar nomes (`google.com`), mas computadores precisam de números (IPs). O DNS é o sistema que traduz nomes de domínio em endereços IP.

```mermaid
sequenceDiagram
    participant User as Usuário
    participant Browser as Navegador
    participant Resolver as "Resolvedor DNS"
    participant Root as "Servidor Raiz"
    participant TLD as "Servidor TLD (.com)"
    participant Auth as "Servidor Autoritativo"

    User->>Browser: Acessar [www.google.com](https://www.google.com)
    Browser->>Resolver: Qual o IP de [www.google.com](https://www.google.com)?
    Resolver->>Root: Onde encontro ".com"?
    Root-->>Resolver: No servidor TLD X
    Resolver->>TLD: Onde encontro "google.com"?
    TLD-->>Resolver: No servidor autoritativo Y
    Resolver->>Auth: Qual o IP de "[www.google.com](https://www.google.com)"?
    Auth-->>Resolver: O IP é 142.250.218.4
    Resolver-->>Browser: O IP é 142.250.218.4
    Browser->>User: Conectando ao servidor...
```

### Prática: Ferramentas de Diagnóstico

Abra seu terminal e experimente estes comandos:

  - **`ping google.com`**: Testa a conectividade com um host.
  - **`traceroute google.com`** (ou `tracert` no Windows): Mostra a rota que os pacotes fazem até o destino.
  - **`nslookup google.com`**: Consulta o DNS para encontrar o IP de um domínio.

<!-- end list -->

```bash
# Exemplo de saída do nslookup
$ nslookup google.com
Server:		192.168.1.1
Address:	192.168.1.1#53

Non-authoritative answer:
Name:	google.com
Address: 142.250.218.14
```

## 🚪 Aula 3: Portas, Protocolos e Proxies

### Portas de Rede

Se o IP é o endereço do prédio, a porta é o número do apartamento. Ela direciona os dados para o serviço correto no servidor.

  - **Porta 80:** HTTP (web)
  - **Porta 443:** HTTPS (web segura)
  - **Porta 22:** SSH (acesso remoto seguro)
  - **Porta 21:** FTP (transferência de arquivos)

### Protocolos Fundamentais

  - **HTTP (HyperText Transfer Protocol):** O protocolo base para a comunicação na web.
  - **HTTPS (HTTP Secure):** Uma camada de segurança (SSL/TLS) sobre o HTTP, que criptografa a comunicação, essencial para proteger dados sensíveis.

### Servidores Proxy

Um proxy é um intermediário entre o cliente e o servidor final.

  - **Proxy Forward:** Usado pelo cliente (ex: em uma empresa) para controlar o acesso à internet externa.
  - **Proxy Reverso:** Usado pelo servidor para receber requisições em nome de outros servidores. Essencial para balanceamento de carga, segurança e caching.

<!-- end list -->



---


