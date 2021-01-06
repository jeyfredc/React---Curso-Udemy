# React-Curso-Udemy

## Tabla de contenido 

[Primeros Pasos En React](#Primeros-Pasos-En-React)

[Introducción a babel](#Introducción-a-babel)

[Bases de JavaScript](#Bases-de-JavaScript)

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

## Introducción a babel

Babel funciona en el Background cuando creamos aplicaciones en React. Babel nos permite utilizar caracteristicas actuales de JavaScript, es decir el ultimo estandar de EcmaScript que tengamos e incluso permite hacer uso de estas caracteristicas en navegadores que aun no las soporten.

Aqui un ejemplo que tambien se puede probrar en la pagina de [babel](https://babeljs.io/):

En el lado derecho de la pantalla Babel hace la transformacion de JavaScript moderno a un navegador que no sea compatible con JavaScript.

El lado izquierdo utiliza template literals los cuales sirven para concatenar en este caso un string con numeros

![assets-git/7.png](assets-git/7.png)

El siguiente ejemplo utiliza ub objeto que recibe un array de personajes

![assets-git/8.png](assets-git/8.png)

De momento se ven iguales, pero si se comenta y se prueba en la consola del navegador va a salir un error que dice que la propiedad length no se puede leer en un elemento indefinido

![assets-git/9.png](assets-git/9.png)

Si delante de la palabra personajes se agrega un signo `?`, la consola no va a mostrar error solo mostrara undefined pero al mismo tiempo si se agrega a Babel el codigo que hace que sea compatible con otros navegadores cambia a una una forma mas compleja y es para esto que existe Babel

![assets-git/10.png](assets-git/10.png)

## Bases de JavaScript

A continuacion se va a crear la primera aplicacion React utilizando la terminal del computador y moviendose hasta la carpeta que se haya instalado en el escritorio. Cuando esten sobre la ubicacion de la carpeta ejecutar el comando `npx create-react-app intro-javascript` y luego presionar Enter

**Nota:**Deben tener en cuenta que ya se debio haber instalado node-js para verificar que ya este instalado ejecutar `npx --version` en la consola

![assets-git/11.png](assets-git/11.png)

a continuacion la consola despues de realizar la instalacion de la aplicacion sugiere ejecutar los comandos 

  `cd intro-javascript`
  `yarn start` o tambien se puede ejecutar `npm start`

Antes de realizar esto ir al escritorio abrir la carpeta que en mi caso se llama React-Udemy y renombrar la carpeta `intro-javascript` por `02-intro-javascript`

Ahora en la consola ejecutar 

  `cd 02-intro-javascript`
  `yarn start` o tambien se puede ejecutar `npm start`

![assets-git/12.png](assets-git/12.png)

para finalizar o cerrar el servidor que ejecuta react se debe presionar sobre la consola `ctrl + c`

si se quiere abrir solo la carpeta **02-intro-javascript** se puede ejecutar en consola `code .`, este comando solo va a abrir todo lo que este contenido en la carpeta. Asi por un lado esta la carpeta y por el otro el navegador ejecutando React

![assets-git/13.png](assets-git/13.png)

La carpeta **node_modules**, son todas las librerias que trae React por defecto, alli esta instalada Babel y otras librerias mas, el archivo .gitignore va a ayudar a no presentar algunos archivos cuando se utilice git, package.json es donde estan las dependencias del proyecto instaladas y comandos del proyecto. Dentro del Readme.md se encuentran instrucciones basicas de React.

Dentro de la carpeta **src** borrar todos los archivos que esten, del lado del navegador inmediatamente se va a mostrar un error

![assets-git/14.png](assets-git/14.png)

Este error pasa porque esta buscando un archivo dentro de la carpeta **src** que se llame **index.js**, para eso crear el archivo dentro de la carpeta

si dentro de este archivo se escribe un `console.log('Hola Mundo');` y abrimos la consola del navegador se va a mostrar sobre la consola.

![assets-git/15.png](assets-git/15.png)

Esto pasa gracias a webpack, que es el que ejecuta todo al instante en el navegador, lo pasa por Babel, lo pasa por varias configuraciones, detecta el cambio y actualiza el navegador web, lo cual permite realizar un desarrollo rapido para las aplicaciones