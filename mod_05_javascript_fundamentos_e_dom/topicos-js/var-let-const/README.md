# ![curso logo](https://raw.githubusercontent.com/curso/bds-assets/main/ds/curso-logo-small.png) Curso Nivelamento JavaScript
>  Aprenda de forma rápida os principais fundamentos de JavaScript para se preparar para trabalhar com frameworks front end

## Realização
[curso - Escola de programação](https://curso.com.br)

[![curso no Instagram](https://raw.githubusercontent.com/curso/bds-assets/main/ds/ig-icon.png)](https://instagram.com/curso.ig)
[![curso no Youtube](https://raw.githubusercontent.com/curso/bds-assets/main/ds/yt-icon.png)](https://youtube.com/curso)

## JavaScript - var / let / const

Palavra chave | Orientação
--- | --- 
var | não recomendado, pois “vaza escopo” em estrutura de controle
let | use quando realmente houver necessidade de alterar a variável
const | prefira valores imutáveis


```javascript
const x = 10;

if (x > 0) {
  var a = 100;
  let b = 200;
  const c = 300;
  console.log("Imprimindo dentro do if:");
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log("Imprimindo fora do if:");
console.log(a);
//console.log(b);
//console.log(c);

console.log("Imprimindo resultado do for: ");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//console.log(i);
```
