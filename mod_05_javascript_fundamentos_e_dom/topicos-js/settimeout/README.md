# ![curso logo](https://raw.githubusercontent.com/curso/bds-assets/main/ds/curso-logo-small.png) Curso Nivelamento JavaScript
>  Aprenda de forma rápida os principais fundamentos de JavaScript para se preparar para trabalhar com frameworks front end

## Realização
[curso - Escola de programação](https://curso.com.br)

[![curso no Instagram](https://raw.githubusercontent.com/curso/bds-assets/main/ds/ig-icon.png)](https://instagram.com/curso.ig)
[![curso no Youtube](https://raw.githubusercontent.com/curso/bds-assets/main/ds/yt-icon.png)](https://youtube.com/curso)

## JavaScript - setTimeout

É uma função que executa uma função após um dado tempo em milissegundos.

```javascript
function dizerOla() {
  console.log("Ola!");
}

function dizerBomDia(nome) {
  console.log(`Bom dia ${nome}!`);
}

function dizerBoaTarde(nome) {
  console.log(`Boa tarde ${nome}!`);
}

function dizerBoaNoite(nome) {
  console.log(`Boa noite ${nome}!`);
}

//setTimeout(dizerOla, 2000);

setTimeout(() => {
  dizerBomDia("Maria");
  setTimeout(() => {
    dizerBoaTarde("Joao");
    setTimeout(() => {
      dizerBoaNoite("Ana");
    }, 1000);
  }, 1000);
}, 1000);

console.log("A");
console.log("B");
```
