# React-Curso-Udemy

## Tabla de contenido 

[Primeros Pasos En React](#Primeros-Pasos-En-React)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Primeros Pasos En React

Lo primero que hay que hacer es instalar los siguiente programas

- [Google Chrome](https://www.google.com/chrome/)

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es&authuser=1)

- [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es)

- [Visual Studio Code](https://code.visualstudio.com/)

- [Postman](https://www.postman.com/downloads/)

- [Mongo Compass](https://www.mongodb.com/try/download/compass)

- [Git](https://git-scm.com/)

- [Node](https://nodejs.org/es/)

## Instalaciones recomendadas en React

- [ES7 React/Redux](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

- [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

--

Despues de tener los programas y dependencias instalados en el escritorio se puede crear una nueva carpeta que se llame **React** y dentro de esta crear otra carpeta que se llame **01-intro-react** o cualquier otro nombre. dentro de esta carpeta crear un **index.html** que lleva la siguiente estructura

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <!-- Cargar React -->
        <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <title>ReactApp</title>
</head>
<body>
    
</body>
</html>
```

los script estan trayendo los cdn de react, react-dom y babel.

Buscar el archivo en la carpeta del escritorio y abrirla para ver en el navegador.

Cuando este ya este desplegado ejecutar los comandos `ctrl+shift+i` para abrir las herramientas de desarrollador del navegador y no se deberia mostrar ningun error sobre la consola del navegador, debe aparecer todo tal cual esta en la siguiente imagen

![assets-git/1.png](assets-git/1.png)

Regresando al archivo abrir una etiqueta script a continuacion de body y crear la siguiente constante

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <!-- Cargar React -->
        <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <title>ReactApp</title>
</head>
<body>
    
<script>


    const h1Tag = <h1>Hola Mundo</h1>;

</script>



</body>
</html>
```

Ahora en la consola del navegador se va a mostrar un error que indica que no se esperaba el token `'<'`.

Esto es debido a que lo que esta dentro de la etiqueta script es por un lado javaScript `const h1Tag`y por el otro lado `<h1>Hola Mundo</h1>` XML

![assets-git/2.png](assets-git/2.png)

Para corregir el error simplemente delante de la etiqueta que abre el script se agrega babel para que compile el codigo en cualquier navegador y este debe ir de la siguiente forma.

`<script type="text/babel">`

Si se recarga el navegador nuevamente va a aparecer una advertencia que indica que Babel esta en uso

![assets-git/3.png](assets-git/3.png)

A continuacion dentro del html se agrega una etiqueta div con id root, para despues renderizar Hola mundo dentro de la etiqueta.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <!-- Cargar React -->
        <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <title>ReactApp</title>
</head>
<body>

    <div id="root"></div>
    
<script type="text/babel">


    const h1Tag = <h1>Hola Mundo</h1>;

</script>



</body>
</html>
```

para renderizarlo se necesita la referencia al elemento con id `root` por tanto se debe inicializar una constante con la propiedad querySelector

`const divRoot = document.querySelector('#root');`

hasta el momento se tiene la referencia pero para renderizarlo se debe hacer uso de `ReactDOM.render()` y pasar como argumento la constante que trae al XML y la referencia

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <!-- Cargar React -->
        <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <title>ReactApp</title>
</head>
<body>

    <div id="root"></div>
    
<script type="text/babel">

    const divRoot = document.querySelector('#root');

    const h1Tag = <h1>Hola Mundo</h1>;

    ReactDOM.render(h1Tag, divRoot);

</script>



</body>
</html>
```

Despues de realizar esto y recargar la pagina estara el primer **Hola Mundo**

![assets-git/4.png](assets-git/4.png)

Ahora si se utiliza por ejemplo una constante para traer un nombre, de esta forma

![assets-git/5.png](assets-git/5.png)

En principio no se ve nada pero se traigo la constante nombre a los corchetes va a haber un cambio, de esta forma

![assets-git/6.png](assets-git/6.png)