# ![curso logo](https://raw.githubusercontent.com/curso/bds-assets/main/ds/curso-logo-small.png) Curso Nivelamento JavaScript
>  Aprenda de forma rápida os principais fundamentos de JavaScript para se preparar para trabalhar com frameworks front end

## Realização
[curso - Escola de programação](https://curso.com.br)

[![curso no Instagram](https://raw.githubusercontent.com/curso/bds-assets/main/ds/ig-icon.png)](https://instagram.com/curso.ig)
[![curso no Youtube](https://raw.githubusercontent.com/curso/bds-assets/main/ds/yt-icon.png)](https://youtube.com/curso)

## JavaScript - Fetch API

https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

https://www.w3schools.com/js/js_api_fetch.asp

```javascript
const cep = "01001000";

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

fetchResult
  .then((response) => {
    console.log("SUCESSO NO FETCH", response);
    const json = response.json();
    json
      .then((response) => {
        console.log("SUCESSO NO JSON", response);
      })
      .catch((error) => {
        console.log("ERRO NO JSON", error);
      });
  })
  .catch((error) => {
    console.log("ERRO NO FECTH", error);
  });

console.log("A");
console.log("B");
```
