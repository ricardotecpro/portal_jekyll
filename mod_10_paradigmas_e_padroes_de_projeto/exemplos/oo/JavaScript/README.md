# ![curso logo](https://raw.githubusercontent.com/curso/bds-assets/main/ds/curso-logo-small.png) Aula JavaScript Funções Construtoras

[curso - Escola de programação](https://curso.com.br)

[![curso no Instagram](https://raw.githubusercontent.com/curso/bds-assets/main/ds/ig-icon.png)](https://instagram.com/curso.ig)
[![curso no Youtube](https://raw.githubusercontent.com/curso/bds-assets/main/ds/yt-icon.png)](https://youtube.com/curso)

# Exemplo prático

![Image](https://raw.githubusercontent.com/curso/aula-js-construtores/main/img/diagrama.png "Diagrama classe Product")

# Funções Construtoras

Funções construtoras instanciam objetos com uma estrutura pré-definida.

Todos objetos herdam o prototype de Object.

Depois do ES6 (2015), a estrutura dos objetos podem ser definida por classes.

Boa prática: defina propriedades dentro do construtor, e métodos no prototype.

## new

Objetos são instanciados por meio da chamada do construtor com a palavra chave `new`.

## this

A palavra chave `this` é uma referência para o próprio objeto.

Serve para acessar membros (propriedades e funções) do próprio objeto, ou então para referenciar o objeto de uma forma geral.

Mesmo que não haja ambiguidade, é necessário usar o `this` para acessar um membro do objeto.

## propriedade constructor

Maneira prática de se verificar o construtor de um objeto.

## prototype de uma função

É um mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros (Mozilla).

O prototype de um construtor define uma estrutura de membros que são compartilhados pelas instâncias desse construtor. 

https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes

