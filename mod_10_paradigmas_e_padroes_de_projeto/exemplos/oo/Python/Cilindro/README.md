# 📌 Projeto: Cálculo do Volume de um Cilindro

## 📖 Sobre o Projeto
Este projeto em Python calcula o volume e a área superficial de um cilindro a partir do diâmetro e da altura informados pelo usuário. Ele segue uma estrutura modular para melhor organização do código.

## 📂 Estrutura do Projeto
```
Cilindro/
│-- aplicacao/
│   │-- programa.py
│-- entidades/
│   │-- cilindro.py
│-- testes/
│   │-- test_cilindro.py
│-- main.py
│-- cilindro.puml
│-- README.md
```
- **`entidades/cilindro.py`** → Classe que representa um cilindro e contém os métodos de cálculo.
- **`aplicacao/programa.py`** → Contém a lógica principal do programa, captura os dados e exibe os resultados.
- **`testes/test_cilindro.py`** → Arquivo de testes automatizados para validar os cálculos do cilindro.
- **`main.py`** → Ponto de entrada do programa.
- **`README.md`** → Informações sobre o projeto.

## ⚙️ Como Executar o Projeto
1. **Baixe o código-fonte** ou clone o repositório.
   ```sh
   git clone <URL_DO_REPOSITORIO>
   ```
2. **Abra o terminal na pasta do projeto**.
3. **Execute o programa** com o seguinte comando:
   ```sh
   python main.py
   ```
4. **Executar os testes**:
   ```sh
   python -m unittest discover -s testes
   ```

## 🧮 Fórmulas Utilizadas
- **Volume do cilindro:**
  ```
  V = π * raio² * altura
  ```
- **Área superficial do cilindro:**
  ```
  A = 2 * π * raio * (raio + altura)
  ```

## 📌 Exemplo de Uso
### Entrada:
```
Digite o diâmetro do cilindro (cm): 10
Digite a altura do cilindro (cm): 20
```
### Saída:
```
Volume do cilindro = 1570.80 cm³
Área superficial do cilindro = 785.40 cm²

Informações do Cilindro:
Diâmetro: 10.00 cm, Altura: 20.00 cm
```

## 🚀 Tecnologias Utilizadas
- **Python** (versão 3.x)
- **Paradigma Orientado a Objetos**
- **Unittest** para testes automatizados

## 📌 Autor
Desenvolvido por [Seu Nome]. 😊

---

## 🧪 Testes
O projeto contém testes automatizados para validar os cálculos do cilindro. O arquivo `testes/test_cilindro.py` inclui os seguintes testes:

- **Teste de cálculo do volume**
- **Teste de cálculo da área superficial**
- **Teste de valores inválidos (diâmetro e altura não positivos)**

Para rodar os testes, execute:
```sh
python -m unittest discover -s testes
```
