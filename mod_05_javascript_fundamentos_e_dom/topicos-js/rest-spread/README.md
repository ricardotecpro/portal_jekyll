# ![curso logo](https://raw.githubusercontent.com/curso/bds-assets/main/ds/curso-logo-small.png) Curso Nivelamento JavaScript
>  Aprenda de forma rápida os principais fundamentos de JavaScript para se preparar para trabalhar com frameworks front end

## Realização
[curso - Escola de programação](https://curso.com.br)

[![curso no Instagram](https://raw.githubusercontent.com/curso/bds-assets/main/ds/ig-icon.png)](https://instagram.com/curso.ig)
[![curso no Youtube](https://raw.githubusercontent.com/curso/bds-assets/main/ds/yt-icon.png)](https://youtube.com/curso)

## JavaScript - rest / spread

```javascript
// REST: valores passados com virgula => array

function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

const result1 = sum(2, 3, 10, 5);

console.log(result1);

const result2 = Math.max(2, 3, 10, 5);

console.log(result2);

// SPREAD: array => valores separados por virgula

const result3 = Math.max(4, 7, 2);

console.log(result3);

const myNumbers = [2, 3, 10, 5];

//const result4 = Math.max(myNumbers); // Nao funciona

const result4 = Math.max(...myNumbers);

console.log(result4);

// SPREAD: objeto => membros separados por virgula

const item = {
    description: "Celular",
    price: 1499.99,
    quantity: 1
};

const cloneItem = { ...item };

const cloneItemPlus = { ...item, weigth: 10 };
```
