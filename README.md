# React-Curso-Udemy

## Tabla de contenido 

[Primeros Pasos En React](#Primeros-Pasos-En-React)

[Introducción a babel](#Introducción-a-babel)

[Bases de JavaScript](#Bases-de-JavaScript)

[Variables y constantes](#Variables-y-constantes)

[Template string](#Template-string)

[Objetos literales](#Objetos-literales)

[Arreglos](#Arreglos)

[Funciones](#Funciones)

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

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

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

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Variables y constantes

Lo primero que se debe hacer es que si en algun momento se trabajo con el keyword `var` en JavaScript, actualmente EcmaScript ya no hace uso de esta porque el scope siempre era declarado como global cuando se usaba en funciones y queriamos que no se usaran fuera de ella.

Actualmente se utilizan los keyword `let` y `const` para asignar informacion.

Dentro del archivo **index.js** del capitulo anterior borramos el `console.log('Hola Mundo');` y agregamos al archivo

```
const nombre= 'Pablito';
let
```
y vemos como en la consola del navegador aparece Pablito pero tambien se muestra un error que señala el keyword let en la linea 6 y ademas lanza un error `Unexpected reserved word 'let' (6:0)`

![assets-git/16.png](assets-git/16.png)

para solucionarlo simplemente a let  lo nombramos como apellido y le asignamos un string

```
const nombre= 'Pablito';
let apellido ='clavo un clavito'
```

Ahora lanza una advertencia o warning en la consola que indica que la variables nombre y apellido fueron asignadas pero no se esta haciendo uso de ellas 

![assets-git/17.png](assets-git/17.png)

Si nunca se va a cambiar el valor del apellido entonces se debe declarar como una constante

```
const nombre= 'Pablito';
const apellido ='clavo un clavito'
```

por ejemplo a continuacion se declara el valor de un dado con let y si quiero empezar a utilizar esas variables y constantes, hago uso de un `console.log` de esta forma ya no van a aparecer advertenciaas porque se esta haciendo uso de las variables

```
const nombre = 'pablito';
let apellido ='clavo un clavito'

let valorDado = 3;

console.log(nombre, apellido, valorDado);
```

![assets-git/18.png](assets-git/18.png)

Pero ahora, si yo quiero asignar otro numero a `valorDado` lo establezco porque utilice el keyword `let` y no `const`

```
const nombre = 'pablito';
let apellido ='clavo un clavito'

let valorDado = 3;
valorDado = 6;

console.log(nombre, apellido, valorDado);
```

![assets-git/19.png](assets-git/19.png)

**Nota:** si se utilizo el keyword `let` para declarar y asignar `valorDado`, no es necesario hacerlo 2 veces. por ejemplo este bloque de condigo lanzaria un error si se estalece de esta forma

```
let valorDado = 3;
let valorDado = 6;
```

Ahora viendolo en el scope, let ValorDado si lo puedo establecer pero solo dentro de un bloque de codigo, la variable que esta por encima del if es una variable que pertenece al scope global y la que esta dentro del if es del Scope local

```
const nombre = 'pablito';
let apellido ='clavo un clavito'

let valorDado = 3;
valorDado = 6;

console.log(nombre, apellido, valorDado);

if (true){
    let valorDado = 1;
    
    console.log(`Esto solo pertene al bloque de codigo del if" ${valorDado}`)
}
```

![assets-git/20.png](assets-git/20.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Template string

Anteriormente en JavaScript declarabamos 2 variables y las concatenabamos usando `variable + " " + variable`.

Ejemplo

```
const nombre = "pablito";
const apellido = "clavo un clavito";

const nombreCompleto = nombre + " " + apellido

console.log(nombreCompleto)
```

![assets-git/21.png](assets-git/21.png)

Actualmente JaaScript utiliza los template string las cuales son estas llamadas comillas francesas **` `**, las cuales se tiene que ubicar en el teclado porque cada configuracion es diferente y esto permite hacer la concatenacion de variables utilizando `${}`. 

Ejemplo

```
const nombre = "pablito";
const apellido = "clavo un clavito";

//const nombreCompleto = nombre + " " + apellido

const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto)
```

![assets-git/22.png](assets-git/22.png)

adicional permite hacer saltos de linea y concatenar con mas elementos de JavaScript, por ejemplo añadiendo un numero y otra frase

Ejemplo

```
const nombre = "pablito";
const apellido = "clavo un clavito";

//const nombreCompleto = nombre + " " + apellido

const nombreCompleto = `
${nombre}
${apellido}
${4}
Esta es una 
           frase distinta al nombre`

console.log(nombreCompleto)
```

![assets-git/23.png](assets-git/23.png)

Ahora creamos una funcion a continuación que recibe como parametro a nombre y atención porque no se esta llamando en la funcion getSaludo que se esta pasando al `console.log`. 

La consola va a mandar un `undefined`

```
function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo()}`)
```

![assets-git/24.png](assets-git/24.png)

Este undefined lo trae porque el argumento o parametro que establecimos en la funcion `getSaludo` es `nombre` por tanto se debe pasar en la funcion para que traiga el valor de este

```
function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)
```

![assets-git/25.png](assets-git/25.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Objetos literales

Un objeto literal se considera que son 2 corchetes `{}` y estos tienes unas propiedades y prototipos por ejemplo aqui se crea una constante persona y se hace un console.log de esta 

```
const persona = {

};

console.log(persona)
```

![assets-git/26.png](assets-git/26.png)

`{}` estas llaves o corchetes inidican que es un objeto y si en la consola del navegador abrimos esos corchetes vamos a ver que tiene un `__proto__` donde encontramos, sus funciones, propiedades y metodos del objeto.

![assets-git/27.png](assets-git/27.png)

Los objeto literales trabajan con pares de valores, donde en este ejemplo tenemos una llave la cual es `nombre:` y su valor el cual es `Tony`

Ejemplo 

```
const persona = {
  nombre: 'Tony'
};

console.log(persona)
```

y si quiero objetener el valor del nombre haria un console.log`(persona.nombre)`

![assets-git/28.png](assets-git/28.png)

tambien se pueden añadir mas propiedades al objeto persona como apellido, edad. Cada propiedad va separada de una coma y recibe en este caso 2 string y 1 valor numerico

```
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
  };
  
  console.log(persona)
```

![assets-git/29.png](assets-git/29.png)

Si ahora hicieramos un `console.log( {persona: persona})` vamos a crear y crear un objeto dentro de otro objeto

![assets-git/30.png](assets-git/30.png)

Pero en JavaScript actualmente cuando la propiedad se llama igual al objeto se puede obviar la propiedad y hacer un `console.log({persona})`, se obtendra el mismo resultado de la imagen anterior.

Si se hace un `console.table` se puede obtener la misma informacion presentada en tabla pero tambien ver la onformacion como se ha venido presentando

![assets-git/31.png](assets-git/31.png)

En el objeto se puede adicionar, mas objetos, funciones, metodos y por ejemplo ahora se va a añadir otro objeto que se llama direccion y tiene otras propiedades

```
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad:'New york',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
  };
  
  console.log( persona )
```

En el navegador los datos se van a presentar en orden alfabetico asi yo no lo establezca de esta forma pero esto es propiedo del navegador 

![assets-git/32.png](assets-git/32.png)

Si queremos clonar al objeto persona existe una mala practica que se va a demostrar a continuacion pero no se debe poner en practica porque React no admite este tipo de errores y podria generar algunas complicaciones.

Primero se va a realizar de la forma incorrecta de hacer un clon y luego de forma correcta.

primero declaro una constante de `persona2 = persona;` y luego hago un `console.log` de `persona2`

luego en la consola del navegador vemos como tenemos una copia de persona 

![assets-git/33.png](assets-git/33.png)

y si yo quiero asignar otro nombre a `persona2`, lo que hago es que pongo

`persona2.nombre = 'peter';`

![assets-git/34.png](assets-git/34.png)

pero esto es una falsa idea porque lo que esta haciendo `persona2` es obtener una referencia de `persona`, por tanto si yo hago un `console.log` de `persona` despues de haber asignado a peter. Voy a obtener una modificacion de la referencia del nombre en memoria y ahora `persona` y `persona2` se van a tener el nombre de `peter`

![assets-git/35.png](assets-git/35.png)

A continuación la forma correcta de realizar un clon o una mutación de un objeto, se puede crea un objeto de persona2 asignando todas las propiedades

```
const persona2 = { nombre:'peter'};
```

y añadir el resto de propiedades manualmente, pero tampoco se debe realizar de esta forma a menos que se quiera, para esto JavaScript actualmente hace uso del operador de spread o operador de propagacion el cual esta representado con 3 puntos `...`.

Si utilizo la constante `persona2` y le asigno un objeto con el operador spread apuntando a `persona`, lo que realmente estoy haciendo es hacer una copia de persona y obtener todas sus propiedades para utilizarlas en mi nuevo objeto `persona2`

```
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad:'New york',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
  };
  
  
  const persona2 = { ...persona };
  
  persona2.nombre = 'peter';
  
  console.log( persona )
  console.log(persona2)

```

![assets-git/36.png](assets-git/36.png)

De esta forma es como se obtiene el clon del objeto `persona`.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Arreglos

Un arreglo es una colección de información que se encuentra dentro de una variable

por ejemplo un array se encuentra en JavaScript y se reconoce por que esta entre parentesis cuadrados `[]`, como lo definimos a continuación

```
const arreglo = new Array();

console.log(arreglo);
```

![assets-git/37.png](assets-git/37.png)

el array generalmente no se declara asi, no es recomendable pero se puede hacer, normalmente un array se declara de la siguiente forma

`const arreglo = [];`

y este se le puede añadir valores con el metodo `push` de la siguiente forma

```
const arreglo = [];

arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);

console.log(arreglo);
```

y luego encontramos a 1 en la posicion 0, 2 en la posicion 1, 3 en la posición 2 y 4 en la posición 3

![assets-git/38.png](assets-git/38.png)

Pero no solo se puede añadir valores mediante el metodo `push` si no tambien declararlos dentro del arreglo

```
const arreglo = [1, 2, 3, 4];

// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

console.log(arreglo);
```

![assets-git/39.png](assets-git/39.png)

y si declaro un `arreglo2` puedo hacer una copia del 1 y de cierta forma concatenar `arreglo` con `arreglo2` de esta forma

```
const arreglo = [1, 2, 3, 4];

// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arreglo2 = [ ...arreglo, 5 ];

console.log(arreglo);
console.log(arreglo2);
```

![assets-git/40.png](assets-git/40.png)

Ahora se va a crear un `arreglo3` haciendo uso del metodo `map` el cual hace un recorrido por el arreglo que se defina y a partir de este puedo crear un nuevo arreglo. para saber mas a cerca de este metodo pueden visitar el siguiente [enlace](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map).

A continuacion declaro el arreglo3 que es igual al recorrido del arreglo 2 y dentro de los parentesis establezoco una funcion que recibe como parametro un numero

```
const arreglo = [1, 2, 3, 4];

// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arreglo2 = [ ...arreglo, 5 ];

const arreglo3 = arreglo2.map( function(numero) {

})


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
```

Por el momento arreglo 3 esta obteniendo 5 veces el valor e undefined porque no le estoy retornando nada. Como se ve en la imagen a continuación `map` recorrio el `arreglo2` el cual esta compuesto por una copia de arreglo mas el numero de la variable, es por esta razon que se imprime 5 veces `undefined`

![assets-git/41.png](assets-git/41.png)

si hago un return de `Hola` se va a imprimir 5 veces Hola

![assets-git/42.png](assets-git/42.png)

y si a continuación retorno `numero * 2` voy a obtener el valor de cada numero por su doble

![assets-git/43.png](assets-git/43.png)

## Funciones

Una funcion basica se puede crear de la siguiente forma

```
function saludar( nombre){
  return `Hola, ${ nombre }`
}

console.log( saludar('Tony'));
```

![assets-git/44.png](assets-git/44.png)

si a continuacion se comenta el `console.log` anterior y se hace un `console.log()` de la función voy a obtener en consola una referencia a la funcion que se indica mediante una `f` en el navegador

![assets-git/45.png](assets-git/45.png)

y si ahora agrego `saludar=30`, voy a obtener su valor pero voy a dejar de obtener una referencia a la función

![assets-git/46.png](assets-git/46.png)

Por tanto no es recomendable declarar una función de esa forma.

Por tanto su a continuación se crea una constante `saludar` y el resto de la funcion se deja de la misma forma y asigno el numero a saludar voy a obtener un error

```
const saludar = function( nombre){
    return `Hola, ${ nombre }`;
  }

  saludar = 30;
  
/*   console.log( saludar('Tony')); */

console.log(saludar)
```

![assets-git/47.png](assets-git/47.png)

Una función como la anterior se puede transformar a una función de flecha o un `arrow function`, en esta modificación se quita el keyword `function` y delante del parametro se agrega una flecha `=>`

```
const saludar = function( nombre){
    return `Hola, ${ nombre }`;
  }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
  
  
console.log(saludar('Tony'));
console.log(saludar2('peter'));
```

![assets-git/48.png](assets-git/48.png)

Y existe otra forma de hacerlo mas facil en el caso que solo se necesite retornar una sola cosa y la funcion sea corta y es quitar la palabra `return` y dejar la función de flecha sin los corchetes

```
const saludar = function( nombre){
    return `Hola, ${ nombre }`;
  }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
  
const saludar3 = (nombre) => `Hola, ${nombre}`;
    
console.log(saludar('Tony'));
console.log(saludar2('peter'));
console.log(saludar3('Valentina'));
```

![assets-git/49.png](assets-git/49.png)

Ahora otro ejemplo utilizando una nueva funcion llamada `getUser` la cual retorna el id y el nombre de usuario de una persona

```
const saludar = function( nombre){
    return `Hola, ${ nombre }`;
  }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
  
const saludar3 = (nombre) => `Hola, ${nombre}`;
    
console.log(saludar('Tony'));
console.log(saludar2('peter'));
console.log(saludar3('Valentina'));


const getUser = () => {
    return{
    id: 'zxh123',
    username: 'camilo2004',
    }
}

console.log(getUser())
```

![assets-git/50.png](assets-git/50.png)

Si quitara el `return` y las llaves a continuación tendria un error porque de esta forma no puedo obtener un objeto

![assets-git/51.png](assets-git/51.png)

Si quiero obtener el objeto implicitamente debo establecer todo dentro de un parentesis para obtener el valor del objeto

```
const saludar = function( nombre){
    return `Hola, ${ nombre }`;
  }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
  
const saludar3 = (nombre) => `Hola, ${nombre}`;
    
console.log(saludar('Tony'));
console.log(saludar2('peter'));
console.log(saludar3('Valentina'));


const getUser = () => 
    ({
    id: 'zxh123',
    username: 'camilo2004',
    });

console.log(getUser());
```

![assets-git/52.png](assets-git/52.png)

El siguiente codigo esta funcionando pero como refuerzo pueden realizar la siguiente tarea

```
// Tarea
// 1. Tranformar a una función de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Realizar pruebas

function getUsuarioActivo( nombre ) {
    return{
        id: 'abc567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Gonzalo');

console.log( usuarioActivo);
```


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>
