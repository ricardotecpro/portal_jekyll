Programar **JavaScript** com **Programação Orientada a Objetos (POO)** envolve o uso de conceitos de objetos e classes para estruturar o código de uma maneira mais modular e reutilizável. A **POO** no JavaScript pode ser implementada utilizando **funções construtoras** ou a sintaxe de **classes** introduzida no ECMAScript 6 (ES6).

Aqui está um guia básico sobre como programar em JavaScript utilizando **POO**:

### 1. **Usando Funções Construtoras (antes do ES6)**

Antes de ES6, o jeito tradicional de trabalhar com objetos e POO no JavaScript era usando **funções construtoras**.

#### Exemplo:
```javascript
// Função Construtora para criar objetos "Carro"
function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  
  // Método para exibir informações sobre o carro
  this.info = function() {
    return `${this.marca} ${this.modelo} de ${this.ano}`;
  };
}

// Criando objetos do tipo Carro
const meuCarro = new Carro('Toyota', 'Corolla', 2020);
console.log(meuCarro.info()); // Saída: "Toyota Corolla de 2020"
```

### 2. **Usando Classes (ES6 e posterior)**

Com a introdução do ES6, o JavaScript passou a ter uma sintaxe mais moderna e mais próxima das linguagens tradicionais de POO, usando o conceito de **classes**.

#### Exemplo com **Classes**:
```javascript
// Definindo uma classe "Carro"
class Carro {
  // O método construtor é chamado quando um objeto é criado
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  // Método para exibir informações sobre o carro
  info() {
    return `${this.marca} ${this.modelo} de ${this.ano}`;
  }
}

// Criando objetos do tipo Carro
const meuCarro = new Carro('Toyota', 'Corolla', 2020);
console.log(meuCarro.info()); // Saída: "Toyota Corolla de 2020"
```

### 3. **Herança (extends)**

A herança permite que uma classe herde propriedades e métodos de outra classe. No JavaScript, isso é feito com o uso da palavra-chave `extends`.

#### Exemplo de **Herança**:
```javascript
// Classe base "Carro"
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  info() {
    return `${this.marca} ${this.modelo} de ${this.ano}`;
  }
}

// Classe derivada "CarroElétrico" que herda de "Carro"
class CarroElétrico extends Carro {
  constructor(marca, modelo, ano, autonomia) {
    super(marca, modelo, ano); // Chama o construtor da classe pai
    this.autonomia = autonomia;
  }

  info() {
    return `${super.info()} com autonomia de ${this.autonomia} km`;
  }
}

// Criando um objeto da classe CarroElétrico
const meuCarroEletrico = new CarroElétrico('Tesla', 'Model 3', 2022, 450);
console.log(meuCarroEletrico.info()); // Saída: "Tesla Model 3 de 2022 com autonomia de 450 km"
```

### 4. **Encapsulamento (Privado vs Público)**

No JavaScript, você pode controlar o acesso às propriedades e métodos de uma classe. Com ES6 e versões posteriores, é possível usar **métodos privados** utilizando a sintaxe de `#` ou outras formas de controlar o acesso.

#### Exemplo de **Encapsulamento**:
```javascript
class Carro {
  // Propriedade privada usando #
  #marca;

  constructor(marca, modelo, ano) {
    this.#marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  // Método público
  info() {
    return `${this.#marca} ${this.modelo} de ${this.ano}`;
  }
}

const meuCarro = new Carro('Honda', 'Civic', 2021);
console.log(meuCarro.info()); // Saída: "Honda Civic de 2021"

// Não podemos acessar a propriedade privada diretamente
// console.log(meuCarro.#marca); // Erro! Propriedade privada
```

### 5. **Polimorfismo**

O polimorfismo permite que objetos de diferentes classes possam ser tratados de forma uniforme, utilizando o mesmo método, mas com comportamentos diferentes. Isso é muito útil em sistemas que precisam se adaptar a diferentes tipos de objetos.

#### Exemplo de **Polimorfismo**:
```javascript
class Animal {
  falar() {
    console.log('O animal faz um som');
  }
}

class Cachorro extends Animal {
  falar() {
    console.log('O cachorro late');
  }
}

class Gato extends Animal {
  falar() {
    console.log('O gato mia');
  }
}

const cachorro = new Cachorro();
const gato = new Gato();

cachorro.falar(); // Saída: "O cachorro late"
gato.falar();     // Saída: "O gato mia"
```

### 6. **Conclusão**

A Programação Orientada a Objetos (POO) no JavaScript permite uma estruturação mais clara e organizada do código, utilizando classes, objetos, herança, encapsulamento e polimorfismo. Ao usar **classes** (a partir do ES6), você tem uma abordagem mais limpa e intuitiva para aplicar os princípios da POO, além de facilitar a manutenção e escalabilidade do código.

Com as informações acima, você pode agora começar a criar programas utilizando POO em JavaScript de forma eficiente!