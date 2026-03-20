### **1. Criar um novo projeto Node.js**

1. **Abra o vsCode** e clique em **"File" > "New Project"**.
2. Escolha **"Node.js"** na lista de tipos de projeto.
3. Escolha um diretório para o projeto e clique em **"Create"**.

---

### **2. Inicializar um projeto Node.js**

1. **Abra o terminal integrado do vsCode** (View > Tool Windows > Terminal).
2. Execute o comando:
    
    ```sh
    npm init -y
    ```
    
    Isso criará um arquivo `package.json` com as configurações padrão.

---

### **3. Instalar o Express.js**

No terminal, instale o Express.js executando:

```sh
npm install express
```

---

### **4. Criar o arquivo do servidor**

https://gist.github.com/ricardotecpro/7470466accecb9384f74b12603d0eb0f


1. No painel esquerdo (Project), crie um arquivo chamado **`server.js`** na raiz do projeto.
2. Copie e cole o seguinte código no arquivo `server.js`:

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Rota com status 200 (OK)
app.get('/', (req, res) => {
    res.status(200).send('Requisição bem-sucedida!');
});

// Rota com status 404 (Not Found)
app.get('/erro', (req, res) => {
    res.status(404).send('Recurso não encontrado!');
});

// Rota com status 500 (Erro Interno)
app.get('/falha', (req, res) => {
    res.status(500).send('Erro no servidor!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
```

---

### **5. Configurar o script de execução**

1. No `package.json`, adicione um script para iniciar o servidor. No bloco `"scripts"`, adicione:
    
    ```json
    "scripts": {
        "start": "node server.js"
    }
    ```
    
2. Agora você pode rodar o servidor com:
    
    ```sh
    npm start
    ```
    

---

### **6. Executar e testar o servidor**

1. Para rodar o servidor no vsCode, clique com o botão direito no arquivo `server.js` e selecione **"Run 'server.js'"**.
2. O console mostrará a mensagem:
    
    ```
    Servidor rodando em http://localhost:3000
    ```
    
3. Abra um navegador e teste as rotas:
    - `http://localhost:3000/` → Deve exibir **"Requisição bem-sucedida!"**.
    - `http://localhost:3000/erro` → Deve exibir **"Recurso não encontrado!"**.
    - `http://localhost:3000/falha` → Deve exibir **"Erro no servidor!"**.

---

### **7. Melhorando com Nodemon (opcional)**

Se quiser que o servidor reinicie automaticamente ao modificar o código:

1. Instale o `nodemon` como dependência de desenvolvimento:
    
    ```sh
    npm install --save-dev nodemon
    ```
    
2. No `package.json`, edite os scripts:
    
    ```json
    "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js"
    }
    ```
    
3. Agora, rode o servidor no modo desenvolvimento com:
    
    ```sh
    npm run dev
    ```
    


---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
