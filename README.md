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

[Desestructuración de objetos](#Desestructuración-de-objetos)

[Import, export y funciones comunes de arreglos](#Import-export-y-funciones-comunes-de-arreglos)

[Múltiples exportaciones y exportaciones por defecto](#Múltiples-exportaciones-y-exportaciones-por-defecto)

[Promesas](#Promesas)

[Fetch API](#Fetch-API)

[Async-Await](#Async-Await)

[Operador condicional ternario](#Operador-condicional-ternario)

___

[¿Qué son los componentes?](#¿Qué-son-los-componentes?)

[Primera aplicación de React](#Primera-aplicación-de-React)

[Estructura de directorios](#Estructura-de-directorios)

[Contenido de la carpeta SRC](#Contenido-de-la-carpeta-SRC)

[Primer Componente](#Primer-Componente)

[Retornar elementos en el componente-Fragment](#Retornar-elementos-en-el-componente-Fragment)

[Impresión de variables en el HTML](#Impresión-de-variables-en-el-HTML)

[Comunicación entre componentes-Props](#Comunicación-entre-componentes-Props)

[PropTypes](#PropTypes)

[DefaultProps](#DefaultProps)

[Componente CounterApp](#Componente-CounterApp)

[Evento click (Eventos en general)](#Evento-click-(Eventos-en-general))

[useState-Hook](#useState-Hook)

[handleSubstract y handleReset](#handleSubstract-y-handleReset)

___

[Introducción a las pruebas unitarias y de integración](#Introducción-a-las-pruebas-unitarias-y-de-integración)

[Primera prueba](#Primera-prueba)

[Jest-Expect-toBe](#Jest-Expect-toBe)

[Pruebas en el archivo 02-template-string.js](#Pruebas-en-el-archivo-02-template-string.js)

[toEqual](#toEqual)

[Pruebas en el archivo 07-desestructuracion-arreglos.js](#Pruebas-en-el-archivo-07-desestructuracion-arreglos.js)

[Pruebas en 08-import-export.js-Arreglos](#Pruebas-en-08-import-export.js-Arreglos)

[Pruebas con tareas asincronas](#Pruebas-con-tareas-asincronas)

[Pruebas con async-await](#Pruebas-con-async-await)

[Pruebas sobre componentes de React](#Pruebas-sobre-componentes-de-React)

[Enzyme-Testing unit](#Enzyme-Testing-unit)

[Revisar elementos dentro del componente](#Revisar-elementos-dentro-del-componente)

[Pruebas básicas del CounterApp](#Pruebas-básicas-del-CounterApp)

[Simular eventos Click](#Simular-eventos-Click)

___

[Proyecto-GifExpertApp](#Proyecto-GifExpertApp)

[GifExpertApp-Component](#GifExpertApp-Component)

[Creando una lista de categorias](#Creando-una-lista-de-categorias)

[Componente AddCategory](#Componente-AddCategory)

[Comunicación entre componentes](#Comunicación-entre-componentes)

[Fetch API-Obtener las imagenes deseadas](#Fetch-API-Obtener-las-imagenes-deseadas)

[useEffect](#useEffect)

[Mostrar los títulos de las imagenes](#Mostrar-los-títulos-de-las-imagenes)

[className-Clases de css](#className-Clases-de-css)

[Helpers-getGifs](#Helpers-getGifs)

[Custom Hook](#Custom-Hook)

[useFetchGifs Obtener imágenes y bandera de carga](#useFetchGifs-Obtener-imágenes-y-bandera-de-carga)

[Desplegando aplicación en Github Pages](#Desplegando-aplicación-en-Github-Pages)

___

[Profundizando Hooks](#Profundizando-Hooks)

[Inicio de proyecto Hooks](#Inicio-de-proyecto-Hooks)

[useState](#useState)

[useCounter](#useCounter)

[useEffect-SimpleForm](#useEffect-SimpleForm)

[useEffect unmount-Cleanup](#useEffect-unmount-Cleanup)

[useEffect Precauciones](#useEffect-Precauciones)

[Formulario con custom Hook](#Formulario-con-custom-Hook)

[useFetch CustomHook](#useFetch-CustomHook)

[useFetch + useCounter](#useFetch-+-useCounter)

[useRef-Primer uso](#useRef-Primer-uso)

[useRef Caso de uso real](#useRef-Caso-de-uso-real)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

[](#)

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

## Desestructuración de objetos

Esta tambien es llamada como Asignación desestructurante y para ver mas a cerca de esta se puede revisar en el siguiente [enlace](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment), donde esta la documentación de JavaScript.

A continuacióin se va a declarar nuevamente a un objeto persona que tiene propiedades de nombre, edad y clave

```
const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'IronMan',
}
```

si quiero obtener el valor de cada propiedad anteriormente haria esto

```
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);
```

![assets-git/53.png](assets-git/53.png)

pero si quiero dejar de utilizar la palabra `persona.` desestructuro el objeto de la siguiente forma y es muy común encontrarla en React

`const {} = persona;`

Lo que ahora coloque dentro de los corchetes va a ser lo que quiero obtener de ese objeto por ejemplo nombre

`const {nombre} = persona;`

![assets-git/54.png](assets-git/54.png)

si quiero obtener los otros valores agrego las otras propiedades no es necesario que tengan algun tipo de orden

`const {edad, clave, nombre} = persona;`

![assets-git/55.png](assets-git/55.png)

Ahora se puede crear una función de flecha que se llame `retornaPersona`, la cual va a recibir una `persona`, dentro de esta hacemos un console.log de persona que es lo que esta recibiendo como parametro y por fuera de esta se llama a la funcion pasando como parametro a persona

```
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
}

// const {edad, clave, nombre} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ( persona ) => {

    console.log(persona);
}

retornaPersona( persona );
```

![assets-git/56.png](assets-git/56.png)

y si nuevamente tengo la desestructuración de la persona tambien puedo hacer un `console.log` de cada propiedad

![assets-git/57.png](assets-git/57.png)

pero tambien se puede destructurar en los parametros de la función 

```
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
}

// const {edad, clave, nombre} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ( { nombre, clave} ) => {

    console.log( clave, nombre);
}

retornaPersona( persona );
```

![assets-git/58.png](assets-git/58.png)

tambien se pueden asignar valores que vienen por defecto por ejemplo asignar un rango

```
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
}

// const {edad, clave, nombre} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ( { nombre, clave, rango} ) => {

    console.log( clave, nombre, rango);
}

retornaPersona( persona );
```

Pero si se mira en el navegador rango es undefined porque no se ha definido como propiedad.

![assets-git/59.png](assets-git/59.png)

pero si a continuacion se agrega un `=` a `rango` y se asigna `capitán` este se va a imprimir

![assets-git/60.png](assets-git/60.png)

Pero si se asigna al objeto rango, va a tomar el valor del objeto

```
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Ingeniero',
}

// const {edad, clave, nombre} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ( { nombre, clave, rango = 'Capitán'} ) => {

    console.log( clave, nombre, rango);
}

retornaPersona( persona );
```

![assets-git/61.png](assets-git/61.png)

tambien si hago un `return` dentro de la funcion de flecha y establezco nuevos pares de valores y lo obtengo en otra constante puedo obtener los valores de `persona` asi:

```
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Ingeniero',
}

// const {edad, clave, nombre} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ( { edad, nombre, clave, rango = 'Capitán'} ) => {

    // console.log( clave, nombre, rango);

    return{
        nombreClave: clave,
        agnos: edad,
    }
}

const avenger = retornaPersona( persona );

console.log(avenger)
```

![assets-git/62.png](assets-git/62.png)

Si ahora cambio el nombre de `retornaPersona` por `usecontext` sigo obteniendo el mismo valor

![assets-git/63.png](assets-git/63.png)

Y si lo quiero desestructurar nuevamente, hago la constante que recibe al objeto con las propiedades = a la funcion que recibe el parametro `persona`

```
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Ingeniero',
}

// const {edad, clave, nombre} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usecontext = ( { edad, nombre, clave, rango = 'Capitán'} ) => {

    // console.log( clave, nombre, rango);

    return{
        nombreClave: clave,
        agnos: edad,
    }
}

const {nombreClave, agnos} = usecontext( persona );

console.log(nombreClave, agnos);
```

![assets-git/64.png](assets-git/64.png)

Como un objeto recibe a otro objeto, a continuación se va a agregar un nuevo objeto que retorna la funcion `usecontext` que va a aser `latlng` y luego se va a hacer la extraccion del objeto 

```
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Ingeniero',
}

// const {edad, clave, nombre} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usecontext = ( { edad, nombre, clave, rango = 'Capitán'} ) => {

    // console.log( clave, nombre, rango);

    return{
        nombreClave: clave,
        agnos: edad,
        latlng: {
            lat: 14.235,
            lng: 45.245,
        }
    }
}

const {nombreClave, agnos, latlng} = usecontext( persona );

console.log(nombreClave, agnos);
console.log(latlng);
```

![assets-git/65.png](assets-git/65.png)

pero si yo solo quiero obtener los valores, sin que se muestren como un objeto, cuando se hace la desestructuración en `usecontext` al objeto `latlng` debo agregarle `:{ propiedades que quiero extraer}` y ya no puedo hacer un `console.log` del objeto si no, de las propiedades

```
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Ingeniero',
}

// const {edad, clave, nombre} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usecontext = ( { edad, nombre, clave, rango = 'Capitán'} ) => {

    // console.log( clave, nombre, rango);

    return{
        nombreClave: clave,
        agnos: edad,
        latlng: {
            lat: 14.235,
            lng: 45.245,
        }
    }
}

const {nombreClave, agnos, latlng: { lat, lng}} = usecontext( persona );

console.log(nombreClave, agnos);
console.log(lat, lng);
```

![assets-git/66.png](assets-git/66.png)

normalmente se puede encontrar la desestructuración del objeto que esta dentro de otro objeto de la siguiente forma pero el resultado sera el mismo que esta en la imagen anterior

```
const {nombreClave, agnos, latlng,/* : { lat, lng} */} = usecontext( persona );
const { lat, lng} = latlng;
console.log(nombreClave, agnos);
console.log(lat, lng);
```

![assets-git/67.png](assets-git/67.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Desestructuración de arreglos

A continuación, una de las formas mas comunes de desestructurar un objeto, es accediendo por su posición

por ejemplo

```
const personajes = ['Iron Man', 'Capitan America', 'Spiderman'];

console.log(personajes[0])
console.log(personajes[1])
console.log(personajes[2])
```

![assets-git/68.png](assets-git/68.png)

pero no siempre se quiere acceder de esa forma a un elemento de un arreglo, existe otra forma y es definiendo otra constante que apunte al arreglo y llamando por posicion segun se requiera

```
const personajes = ['Iron Man', 'Capitan America', 'Spiderman'];

// console.log(personajes[0])
// console.log(personajes[1])
// console.log(personajes[2])

const [p1] = personajes;

console.log(p1);
```

![assets-git/69.png](assets-git/69.png)

El que haya colocado `p1`, no necesariamente quiere decir que por ser `p1` siempre vaya a acceder a `Iron Man`, por ejemplo si quiero acceder con `p1` a `Capitan America`, simplemente antepongo una coma antes y con esto ya tengo acceso a `Capitan America`

```
const personajes = ['Iron Man', 'Capitan America', 'Spiderman'];

// console.log(personajes[0])
// console.log(personajes[1])
// console.log(personajes[2])

const [ , p1] = personajes;

console.log(p1);
```

![assets-git/70.png](assets-git/70.png)

y asi mismo sera para acceder al personaje 3.

O tambien se puede ignorar un elemento y acceder a los otros 2

```
const personajes = ['Iron Man', 'Capitan America', 'Spiderman'];

// console.log(personajes[0])
// console.log(personajes[1])
// console.log(personajes[2])

const [ , p2, p3] = personajes;

console.log(`${p2}, ${p3}`);
```

![assets-git/71.png](assets-git/71.png)

Tambien se puede desestructurar una función como la siguiente, la cual se llama `retornaArreglo`

```
const retornaArreglo = () => {
    return ['ABC' , 123];
}

const arr = retornaArreglo()
console.log(arr);
```

![assets-git/72.png](assets-git/72.png)

Si quiero obtener los campos y no retornarlo en un arreglo la desestructuro en letras y numeros de esta forma

```
const retornaArreglo = () => {
    return ['ABC' , 123];
}

const [letras, numeros] = retornaArreglo()
console.log(letras, numeros);
```

![assets-git/73.png](assets-git/73.png)

Ahora un ejercicio, se crea una constante llamada estados que retorna un arreglo en el cual estan un valor y una función

```
const estados = (valor) => {
    return [valor, () => { console.log('Hola Mundo')}];
}

const arr = estados('Iron Man');
console.log(arr);
```

![assets-git/74.png](assets-git/74.png)

La tarea consiste en hacer un console.log donde la primera posicion que se recibe es nombre y la funcion se llama en `setNombre();`

Transforma el siguiente codigo para que funcione

```
// Tarea
// 1. El primer valor del arr se llamara nombre
// 2. se llamara setNombre

const estados = (valor) => {
    return [valor, () => { console.log('Hola Mundo')}];
}

const arr = estados('Iron Man');

console.log( nombre );

setNombre();
```

La solucion se puede encontrar en el archivo [07-desestructuracion-array.js](https://github.com/jeyfredc/React---Curso-Udemy/blob/master/02-intro-javascript/src/bases/07-desesctructuracion-arreglos.js)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Import, export y funciones comunes de arreglos

A continuación dentro de la carpeta src crear una subcarpeta que se llame data y crear un archivo que se llame **heores.js** y pegar la siguiente información.

```
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];
```

Lo que queremos hacer es traer este archivo y usarlo en **index.js**, para importarlo nos debemos dirigir a este archivo y hacer un import de la constante que necesito que es heroes, la ubicación del archivo es relativa en donde me encuentre, `./` quiere decir que voy a buscar dentro de las carpetas que estan al mismo nivel que **index.js** si quisiera irme una carpeta atras tendria que hacer `../` y empezar a buscar lo que necesito traer.

```
import { heroes } from './data/heroes'
```

Si hago un `console.log( heroes );` lo que espero es que me retorne el arreglo de heroes, pero en este caso obtengo `undefined`

![assets-git/75.png](assets-git/75.png)

Si ocurre esto, entonces a continuación me debo dirigir al archivo de **heroes.js** y exportar la constante de esta forma

```
export const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];
```

y con esto en la consola del navegador ya recibo todos los heroes

![assets-git/76.png](assets-git/76.png)

Ahora para hacer practica en el archivo **index.js** se va a crear un ejercicio, para traer el personaje 2 utilizando el metodo [find](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find), para esto se deja la documentación y el ejercicio a realizar. Por tal motivo se debe buscar la forma para resolverlo y traer el id 2 el cual seria Spiderman.

```
import { heroes } from './data/heroes';

const getHeroeById = (id) => {
    return heroes.find();
}

console.log( getHeroeById(2));
```

la solucion la puedes encontrar en [08-import-import-export](https://github.com/jeyfredc/React---Curso-Udemy/blob/master/02-intro-javascript/src/bases/08-import-import-export.js)

**Nota:** Lo que este dentro del archivo del repositorio lo deben llevar para el index para poder probar el codigo

la otra tarea es buscar en la documentación de mozilla como usar `filter`, por tanto se deja planteado un ejercicio tambien para resolver. Aclarando que `find` solo sirve para traer un solo elemento por tanto se debe hacer un cambio en la siguiente función para traer todos los elementos que pertenezcan a DC

```
const getHeroesByOwner = ( owner) => heroes.find( (heroe) => heroe.id === id ); 

console.log( getHeroesByOwner('DC'));
```

El resultado de los 2 ejercicios debe ser el siguiente

![assets-git/77.png](assets-git/77.png)

**Nota:** Una forma facil para importar un archivo es que se escribe la referencia del archivo al que quiero ir por ejemplo escribo solo la palabra `heroes` y luego presiono `ctrl + espacio`, si aparece la opcion en las sugerencias de vsCode presiono `tab` y se importa de manera automatica la ruta

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Múltiples exportaciones y exportaciones por defecto

Continuando con el mismo archivo del capitulo anterior en **index.js**, existen otras formas de exportar, en este caso se va hacer un exportacion por defecto, en el archivo de **heroes.js** se deja la siguiente forma
 
```
export default [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];
```

En primer lugar la consola del navegador va a mostrar un error

![assets-git/78.png](assets-git/78.png)

pero luego que pasemos al archivo **index.js** y quitemos los corchetes de `import { heroes }` el codigo va a continuar funcionando como antes

![assets-git/79.png](assets-git/79.png)

pero no quiere decir que `heroes` sea una referencia del archivo **heroes.js**, si estas en linux y presionas `F2` cambias por otro nombre por ejemplo superHeroes, cambias todas las variables y el archivo va a seguir funcionando.
Si estas en windows presionas `windows + F2`.

![assets-git/80.png](assets-git/80.png)

Pero por lo general una exportación y sobre todo en React se encuentra  el `export default` en la ultima parte del documento asi, modificando esta vez sobre **heroes.js** y regresando todo como estaba

![assets-git/81.png](assets-git/81.png)

Tambien se pueden importar constantes, en este caso se crea la constante owners en el archivo **heroes.js**

`export const owners = ['DC' , 'Marvel'];`

En este caso tendria una exportacion por defecto + una exportacion individual. Entonces en **index.js** debo agregar la exportacion por defecto seguido de una coma y la desestructuracion de ese archivo o objeto que viene de heroes

`import heroes, { owners }  from './data/heroes';`

y si hago un `console.log( owners);` pueedo ver como esta importando de manera correcta esa exportación individual

![assets-git/82.png](assets-git/82.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Promesas

Las promesas en la vida real es algo que se propone realizar y al final se cumple, exactamente pasa eso con las promesas en javaScript.

La forma en como funcionan es que primero se ejecuta todo lo que exista de manera sincrona en la pila de tareas y la promesa se cumple al final, es decir de manera asincrona. Para ver como funciona pueden investigar mas en la [documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise).

Las promesas llevan como argumento un callback y se estructura de la siguiente forma, dentro de estos estan `resolve` que es lo que resuelve el callback y `reject` que es cuando la promesa no se puede cumplir 

```
const promesa = new Promise((resolve, reject) => {


});
```

Si se agrega un callback como lo es la funcion `setTimeOut` obtenemos una respuesta por consola de que algo esta ocurriendo 2 segundos despues 

```
const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log('2 segundos después')
    }, 2000)
});
```

![assets-git/83.png](assets-git/83.png)

Pero aun no existe el modo de reaccionar o esperar cuando la promesa se termine, como realizar una acción. Existen 3 metodos, el primero es `then` que significa que la promesa se hizo correctamente, `catch` que captura un error y `finally` que es algo que se ejecuta despues del `then` y despues del `catch`, usualmente no es usado, pero en algunos proyectos se puede requerir.

Por el momento la promesa funcionara de la siguiente forma, se debe ejecutar dentro de un `resolve` porque `then` esta esperando una respuesta, cuando `then` detecta que la función se cumplio lanza el mensaje que la función ya se ejecuto

```
const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(console.log('2 segundos después'))
    }, 2000)
});

promesa.then(() => {
    console.log('La promesa se cumplio')
})
```

![assets-git/84.png](assets-git/84.png)

Esto tambien se puede hacer por ejemplo con los archivos de los capitulos pasados, si estan guardados en archivos para hacer la importación de la función `getHeroById`.

```
const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        /* resolve(console.log('2 segundos después')) */

        //Tarea
        // Importar 
        const heroe = getHeroeById(2);
        console.log(heroe)
    }, 2000)
});

promesa.then(() => {
    console.log('La promesa se cumplio')
})
```

primero hay que importar el archivo correctamente al **index.js**

`import {getHeroeById} from './bases/08-import-export';`

el archivo `08-import-export` contiene lo siguiente, es el de el capitulo anterior, pero se corrigio el acceso a la importación porque dejo de llamarse **index** en las clases anteriores

```
import heroes from '../data/heroes';

export const getHeroeById = (id) => {
    return heroes.find(element => element.id === id );
}

/* console.log( getHeroeById(2)); */

export const getHeroesByOwner = ( owner) => heroes.filter( (heroe) => heroe.owner === owner ); 

/* console.log( getHeroesByOwner('DC')); */
```

mientras tanto el **index.js** esta de esta forma, por el momento no se esta llamando `resolve` o `reject` y es por esta razon que la consola en el navegador trae a un objeto que contiene al heroe

```
import {getHeroeById} from './bases/08-import-export';


const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        /* resolve(console.log('2 segundos después')) */

        //Tarea
        // Importar 
        const heroe = getHeroeById(2);
        console.log(heroe)
    }, 2000)
});

promesa.then(() => {
    console.log('La promesa se cumplio')
})
```

![assets-git/85.png](assets-git/85.png)

Ahora lo que se puede hacer es mandar al heroe en el `then` de la `promesa`

para esto se utiliza `resolve(heroe)` en la promesa y al hacer esto tambien se puede pasar en el argumento de `promesa.then` para llamarlo en el `console.log` de esta forma

```
import {getHeroeById} from './bases/08-import-export';


const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        /* resolve(console.log('2 segundos después')) */

        //Tarea
        // Importar 
        const heroe = getHeroeById(2);
        resolve(heroe)
    }, 2000)
});

promesa.then((heroe) => {
    console.log('heroe', heroe)
})
```

![assets-git/86.png](assets-git/86.png)

pero tampoco importa si la constante de heroe en la promesa se cambia por otra palabra como `personaje` por ejemplo, el `heroe` de esa constante no tiene que ver nada con el `heroe` que se esta pasando en `promesa.then`

```
import {getHeroeById} from './bases/08-import-export';


const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        /* resolve(console.log('2 segundos después')) */

        //Tarea
        // Importar 
        const personaje = getHeroeById(2);
        resolve(personaje)
    }, 2000)
});

promesa.then((heroe) => {
    console.log('heroe', heroe)
})
```

![assets-git/87.png](assets-git/87.png)

si agrega `reject` en ves de `resolve`, va a aparecer un error en la consola del navegador

```
import {getHeroeById} from './bases/08-import-export';


const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        /* resolve(console.log('2 segundos después')) */

        //Tarea
        // Importar 
        const personaje = getHeroeById(2);
        reject(personaje)
    }, 2000)
});

promesa.then((heroe) => {
    console.log('heroe', heroe)
})
```

![assets-git/88.png](assets-git/88.png)

Esto quiere decir que se debe capturar el error asi que si se comenta al personaje en el `reject` y ahora se manda un mensaje en `promesa.then` se debe capturar el error con un `.catch` que generalmente es usado como se muestra aqui

```
import {getHeroeById} from './bases/08-import-export';


const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        /* resolve(console.log('2 segundos después')) */

        //Tarea
        // Importar 
        const personaje = getHeroeById(2);
        /* reject(personaje) */
        reject('No se pudo encontrar al heroe')
    }, 2000)
});

promesa.then((heroe) => {
    console.log('heroe', heroe)
})
.catch( err => console.error( err ));
```

![assets-git/89.png](assets-git/89.png)

**Nota:** en el `catch` se puede enviar `console.error` para que en el navegador se muestre como un error o un `console.warn` para que salga como una advertencia.

Tambien se puede pasar el id como argumento de una función, y ahora hacer que la constante personaje reciba el id directamente de esta forma

```
const getHeroeByIdAsync = (id) => {
    const promesa = new Promise((resolve, reject) => {

        setTimeout(() => {
            const personaje = getHeroeById(id);
            resolve(personaje)
            // reject('No se pudo encontrar al heroe')
        }, 2000)
    });    
}

getHeroeByIdAsync(4)
```

pero cuando se hace asiy se coloca un punto delante de `getHeroeByIdAsync(4)` no hay acceso a la promesa, pero si se quita la constante promesa y en vez de eso se cambia por un return de la promesa, despues de colocar el punto se puede acceder a los metodos de la promesa

```
const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const personaje = getHeroeById(id);
            resolve(personaje)
            // reject('No se pudo encontrar al heroe')
        }, 2000)
    });    
}

getHeroeByIdAsync(4).
```

![assets-git/90.png](assets-git/90.png)

Ahora nuevamente es posible usar el `.then` para obtener al heroe 

```
const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const personaje = getHeroeById(id);
            resolve(personaje)
            // reject('No se pudo encontrar al heroe')
        }, 2000)
    });    
}

getHeroeByIdAsync(4)
    .then( heroe => console.log('Heroe', heroe))
```

![assets-git/91.png](assets-git/91.png)

pero ahora hay que capturar el error en caso que no se encuentre al heroe.

La condición dice que si encuentra el heroe, resuelva e imprimalo por consola, pero si no, imprima la advertencia en la consola, para esto como argumento de la función se pasa un numero de personaje que no se ha creado

```
const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const personaje = getHeroeById(id);
            if(personaje){
            resolve(personaje)
            }else{
                reject('No se pudo encontrar al heroe')
            }
        }, 2000)
    });    
}

getHeroeByIdAsync(12)
    .then( heroe => console.log('Heroe', heroe))
    .catch( err => console.warn(err))
```

![assets-git/92.png](assets-git/92.png)

pero si se pasa como argumento un heroe que si exista va a resolver

![assets-git/93.png](assets-git/93.png)


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Fetch API

En el siguiente [enlace](https://developer.mozilla.org/es/docs/Web/API/Fetch_API) se encuentra toda la documentación acerca de lo que es Fetch API que es algo que viene en los navegadores web y va a permitirnos realizar peticiones http a endpoints directamente sin importar alguna libreria.

En este [enlace](https://developers.giphy.com/) encontramos giphy developers, para poder traer gifs animados y poder interactuar con ellos desde React.

Como no es un endpoint abierto debemos generar una APIkey y para esto se debe abrir una cuenta.

Asi que empezar por dar clic en donde dice **Get Started**.

Luego dar clic en **Login** y empezar a crear la cuenta, que se puede crear a traves de una cuenta de facebook o apple.

Despues de haber creado la cuenta seleccionar **Create an App**, se abrir una ventana modal, donde se debe seleccionar **API** y luego hacer clic sobre **Next Step**,

Los campos de formulario que aparecen se deben llenar, se puede colocar cualquier nombre y descripción y luego aceptar los terminos y posteriormente seleccionar **Create App**

![assets-git/94.png](assets-git/94.png)

Luego se va abrir una ventana donde aparece el **API Key**, simplemente hay que copiar la que se genero abrir **index.js** y luego colocar una constante que guarde el **API Key**

![assets-git/95.png](assets-git/95.png)

**Nota:** Realizar este proceso tal como se describe y evitar utilizar la que se va a colocar en el **index.js** por si en algun momento se llega a desactivar

**index.js** por el momento tiene esto 

`const apiKey = 'soVdva8bjB8shZXmy18BLAE5wCSgYZZv';`

Luego regresamos a la pagina y buscamos la parte de la documentación y el menu lateral buscamos donde diga **Random Endpoint** y copíamos el **gif URL**

![assets-git/96.png](assets-git/96.png)

Luego lo abrimos en otra pestaña, va a salir un mensaje que dice **"No API key found in request"**

![assets-git/97.png](assets-git/97.png)

para que funcione en la url del navegador despues de la palabra random lo siguiente `?api_key=apiKey` lo que esta como **apiKey** es lo que nos genero la misma aplicacion que en mi caso lo pongo de esta forma 

`http://api.giphy.com/v1/gifs/random?api_key=soVdva8bjB8shZXmy18BLAE5wCSgYZZv`

Despues de buscarla en el navegador, se va a obtener toda la data que proporciona la **API**

![assets-git/98.png](assets-git/98.png)

lo que vamos a obtener despues es lo que esta dentro de data ->images y despues lo que se quiera obtener dentro de esta.

Regresando al **index.js** empezamos a utilizar fetch y para esto creamos una constante llamada petición, donde pasamos `fetch` y dentro de este se copia toda la url, como ya el `apiKey` estaba en el archivo lo llamamos mediante templates literals

```
const apiKey = 'soVdva8bjB8shZXmy18BLAE5wCSgYZZv';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
```

Si mantenemos el cursor del mouse sobre la palabra fetch, se abre en la parte de arriba la descripcion de la función fetch y despues de los : al final aparece `Promise<Response>`, esto quiere decir que retorna una promesa y lo que esta dentro de `<Response>` que retorna o resuelve

![assets-git/99.png](assets-git/99.png)

como es una promesa tambien puedo hacer uso de `.then` y dentro de esta obtener una respuesta `resp`, luego abrir corchetes y hacer un console.log de la respuesta para ver que datos esta retornando

```
const apiKey = 'soVdva8bjB8shZXmy18BLAE5wCSgYZZv';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion.then( resp => {
    console.log(resp);
})
```

![assets-git/100.png](assets-git/100.png)

tambien es buena practica hacer un .catch en el caso que exista un error del **API** y se puede establecer solo como un `console.warn`

```
const apiKey = 'soVdva8bjB8shZXmy18BLAE5wCSgYZZv';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion.then( resp => {
    console.log(resp);
})
.catch(console.warn)
```

Por el momento del lado derecho de la pantalla vemos que `ok` esta en true y el `status` que se retorna es 200, lo que nos interesa es lo que esta dentro de `body`, por tanto debemos hacer otra promesa dentro del `.then` llamando a respuesta con el metodo `json()` el cual devuelve otra promesa. Quiere decir que tambien se puede agregar un `.then` para empezar a imprimir la data que nos habia arrojado la pagina anteriormente

```
const apiKey = 'soVdva8bjB8shZXmy18BLAE5wCSgYZZv';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion.then( resp => {
    resp.json().then( data => {
        console.log(data);
    })
})
.catch(console.warn)
```

![assets-git/101.png](assets-git/101.png)

Existe otra forma de presentar el codigo para obtener la misma petición al **API** que es mucho mas legible y facil de mantener, se le llama promesas en cadena, como el primer `then` retorna una promesa, esa promesa es pasada al siguiente `then`

```
const apiKey = 'soVdva8bjB8shZXmy18BLAE5wCSgYZZv';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
.then( resp => resp.json())
.then( data => {
    console.log(data)
})
.catch(console.warn)
```

![assets-git/102.png](assets-git/102.png)

y como viene la data dentro de otra data, se podria hacer un `console.log(data.data)` o desestructurar la data encerrarla entre parentesis y corchetes y de esta forma se obtiene el mismo resultado

```
const apiKey = 'soVdva8bjB8shZXmy18BLAE5wCSgYZZv';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
.then( resp => resp.json())
.then( ({data}) => {
    console.log(data)
    // console.log(datad.data)
})
.catch(console.warn)
```

![assets-git/103.png](assets-git/103.png)

Lo que en el momento interesa obtener son los `images` por tanto se hace un `console.log(data.images)`

![assets-git/104.png](assets-git/104.png)

Ahora esta el acceso a todas las urls de images, dentro de esta se puede buscar cualquiera por ejemplo `downsized` y luego vamos a querer obtener la `url` que se obtiene de `downsized`

![assets-git/105.png](assets-git/105.png)

si funciona el gif, se puede copiar la url obtenida, que en mi caso salio esta [https://media1.giphy.com/media/ki1NNcU9xZcwXDroCd/giphy-downsized.gif?cid=42b994492396160304f06de95df68983ed648b99230fdd0e&rid=giphy-downsized.gif](https://media1.giphy.com/media/ki1NNcU9xZcwXDroCd/giphy-downsized.gif?cid=42b994492396160304f06de95df68983ed648b99230fdd0e&rid=giphy-downsized.gif) y pegarla en cualquier otra pestaña del navegador

para extraer el `url` se debe agregar una constante, utilizando la destructuración de objetos de esta forma

```
const apiKey = 'soVdva8bjB8shZXmy18BLAE5wCSgYZZv';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
.then( resp => resp.json())
.then( ({data}) => {
    const { url } = data.images.downsized;
    console.log(url)
})
.catch(console.warn)
```

![assets-git/107.png](assets-git/107.png)

Ahora para presentar esta imagen en un html y verla renderizada en el navegador creamos una constante llamada img esta crea un elemento o etiqueta de tipo imagen, y a traves de `img.src` se hace igual a la url extraida.

Despues con el metodo `append()` se manda la imagen y de esta forma queda renderizada

```
const apiKey = 'soVdva8bjB8shZXmy18BLAE5wCSgYZZv';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
.then( resp => resp.json())
.then( ({data}) => {
    const { url } = data.images.downsized;
    // console.log(url)

    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );

})
.catch(console.warn)
```

y se obtienen gifs diferentes cada vez que se recargue el navegador 

![assets-git/108.png](assets-git/108.png)

## Async-Await

Async Await, permite ser mas claro a la hora de construir una función como la del capitulo anterior

En este ejemplo se va a obtener la misma url que pertenece a data => images => downsized => url

para esto creamos una funcion llamada getImagen y para establecer la función despues del `=` llamamos a `async`, si no se hace esto no va a funcionar `await` y empezamos a obtener por dentro de esta todos los datos que obteniamos con `fetch` el `apiKey`, la `respuesta`, la `data` y asi es como se empieza a traer elemento por elemento hasta obtener la url. `await` se usa para esperar que se resuelva la promesa y de esta forma se van trayendo todos los datos

```
const getImagen = async() => {

    const apiKey = 'soVdva8bjB8shZXmy18BLAE5wCSgYZZv';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await resp.json();
    const {url} = await data.images.downsized;
    console.log(url)

}

getImagen()
```

Con esta parte ya es posible obtener la url, recordar que es dinamica, porque se muestran diferentes gif cuando se renderizan

![assets-git/109.png](assets-git/109.png)

y ahora solo queda renderizar la imagen, que es igual a como se hizo en el capitulo anterior

```
const getImagen = async() => {

    const apiKey = 'soVdva8bjB8shZXmy18BLAE5wCSgYZZv';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await resp.json();
    const {url} = await data.images.downsized;
    console.log(url)

    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );

}

getImagen()
```

![assets-git/110.png](assets-git/110.png)

Lo ultimo que faltaria por explicar es que con **Async-Await** se puede manejar errores con **try catch**, que consiste en que el `try{}` intenta obtener todo el cuerpo que esta dentro de los `{}` y el `catch{error}` captura un error y lo maneja para que el navegador continue funcionando normalmente en caso de no encontrar algo.

```
const getImagen = async() => {

    try {
        const apiKey = 'soVdva8bjB8shZXmy18BLAE5wCSgYZZv';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await resp.json();
        const {url} = await data.images.downsized;
        console.log(url)
    
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append( img );
    } catch (error) {
        console.error(error)
    }
}

getImagen()
```

![assets-git/111.png](assets-git/111.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Operador condicional ternario

Una forma común y facil de ver una condicion if es la siguiente

```
const activo= true;

let mensaje = '';

if( activo){
    mensaje = 'El mensaje esta en true por tanto esta Activo'
}else{
    mensaje = 'Estoy en false ahora me muestro en la pantalla pero estoy inactivo'
}

console.log(mensaje)
```

cuando se imprime por consola muestra el mensaje cuando esta en `true`

![assets-git/112.png](assets-git/112.png)

pero si hago la negación de la verdad `if(!activo)`, aparece el otro mensaje

![assets-git/113.png](assets-git/113.png)

Para reducir todo el codigo se puede declarar una constante que lleve toda la condición, por tal motivo se comenta todo lo anterior.

Se declara la constante mensaje, la condicion esta dentro de parentesis `(activo)` el signo de pregunta indica que si esta en `true` se cumpla lo que sigue delante del signo `?` y los `:` indican que es el `else` o de lo contrario y se cumple todo lo que sigue delante de ente.

```
const activo= true;

const mensaje = (activo) ? 'El mensaje esta en true por tanto esta Activo' : 'Estoy en false ahora me muestro en la pantalla pero estoy inactivo';

console.log(mensaje)
```

![assets-git/114.png](assets-git/114.png)

y tambien se niega de la misma forma solo que antes no lo antecede un if, es decir `(!activo)` y con esto se cumple la otra condición.

![assets-git/115.png](assets-git/115.png)

otra forma en la que se puede encontrar un ternario es que en vez de que despues de los dos puntos exista un mensaje solo aparezca un `null`

```
const activo= true;

// const mensaje = (!activo) ? 'El mensaje esta en true por tanto esta Activo' : 'Estoy en false ahora me muestro en la pantalla pero estoy inactivo';
const mensaje = (!activo) ? 'El mensaje esta en true por tanto esta Activo' : null;


console.log(mensaje)
```

![assets-git/116.png](assets-git/116.png)

y la ultima forma de encontrar es encontrarlo como si se utilizaran tablas de la verdad como decir verdadero y verdadero entonces verdadero, si se niega va a dar `false`

```
const activo= true;

// const mensaje = (!activo) ? 'El mensaje esta en true por tanto esta Activo' : 'Estoy en false ahora me muestro en la pantalla pero estoy inactivo';
// const mensaje = (!activo) ? 'El mensaje esta en true por tanto esta Activo' : null;

const mensaje = (activo) && 'El mensaje esta en true por tanto esta Activo'


console.log(mensaje)
```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## ¿Qué son los componentes?

Un componente es una pequeña pieza de codigo encapsulada y re-utilizable que puede tener estado o no.

Los componentes son código de html y javascript que se encuentran separados por ejemplo en la imagen a continuación cada componente representa un color distinto y una seccion distinta, y en el caso del contenido, este puede estar encapsulado dentro de las secciones del menú y podria tener una ruta protegida para que no todos puedan accedes, y el componente principal encapsula a toda la pagina, despues puede existir el componente para el menu y el menu a su vez tiene distintos componentes que son las secciones, etc. 

![assets-git/117.png](assets-git/117.png)

Es una convención nombrar cada componente con la primer letra en mayúscula y hacer uso de CamelCase.

Lo siguiente que hay que entender es el manejo del estado, por ejemplo un formulario que tiene los campos de nombre, apellido y edad como el que se muestra a continuación tiene un estado inicial, este estado seria vacio, porque aun no tiene datos

![assets-git/118.png](assets-git/118.png)

Cuando los campos empiezan a recibir información ocurre el cambio de estado.

Entonces un cambio de estado es como se encuentra la información del componente en un punto determinado del tiempo 

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Primera aplicación de React

A continuacion se va a crear otra aplicacion de React utilizando la terminal del computador y moviendose hasta la carpeta que se haya instalado en el escritorio. Cuando esten sobre la ubicacion de la carpeta ejecutar el comando `npx create-react-app 03-counter-app` y luego presionar Enter.

Despues de crearla moverse a la ubicacion de la carpeta en la terminal utilizando el comando `cd 03-counter-app` y cuando la terminal muestre la ubicacion de esta ejecutar el comando `code .` para que se abra unicamente ese proyecto que acabamos de crear

![assets-git/119.png](assets-git/119.png)

nuevamente regresar a la terminal y ahora ejecutar el comando `npm start` o `yarn start`.

Posteriormente se debe abrir la aplicación de React, con la imagen del React y el componente funcionando

![assets-git/120.png](assets-git/120.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Estructura de directorios

Estas carpetas en general siempre van a estar al iniciar o instalar una aplicación en React

![assets-git/121.png](assets-git/121.png)

La primer carpeta llamada **node_modules** son las librerias y paquetes que hacen que la aplicacón en React funcionen, gracias a estos modulos es que podemos ver la aplicación de React corriendo en el navegador y tambien visualizando los cambios cada vez que cambiamos algo en nuestro codigo. Usualmente **node_modules** no se modifica manualmente ni se manipula ninguna de las carpetas que esten instaladas alli, con comando se pueden instalar o desinstalar librerias.

La siguiente carpeta que se encuentra es **public**, la cual tiene los siguientes archivos 

![assets-git/122.png](assets-git/122.png)

En estos archivos se encuentran unas imagenes y configuraciones que vienen por defecto tambien cuando se crea una aplicación en React, el archivo **index.html** tiene referencias a los archivos con extensiones como .ico y los logos, esos archivos despues se pueden eliminar pero es importante tener en cuenta que en el html hay referencias como la siguiente `"%PUBLIC_URL%/favicon.ico"` el `favicon.ico` se puede borrar pero la estructura `%PUBLIC_URL%/` es importante en el momento que se suban los archivos a producción, pues esta estructura va a permitir encontrar alguna carpeta o archivo en el momento que se lleguen a mover o cambiar a otro lado

![assets-git/123.png](assets-git/123.png)

Las lineas 5, 12 y 17 se podrian eliminar ya que estas son utilizadas para paginas PWA(Paginas web progresivas), sobre esto se puede consultar en la [documentación](https://developers.google.com/web/ilt/pwa), adicional se deja un [enlace](https://developers.google.com/search/docs/advanced/robots/intro?hl=es&visit_id=637469290874026655-2440452045&rd=1) para revisar el para que sirve el archivo llamado **robots.txt**.

Si seguimos buscando en el html podemos hacer cambio en el `<title>` y renombrarlo ahora como **CounterAPP** 

![assets-git/124.png](assets-git/124.png)

Si guardamos los cambios inmediantamente podemos ver como el nombre de la aplicación cambia instantaneamente, sin tener que recargar la pagina 

![assets-git/125.png](assets-git/125.png)

Y este es un punto inicial de la aplicación, pero en el html no existe nada que indique que se utiliza un JavaScript

despues de la etiqueta body hay otra etiqueta que es la siguiente

`<noscript>You need to enable JavaScript to run this app.</noscript>`

Esta etiqueta significa que si un navegador es antiguo, lo cual es muy poco probable, indique o lance el mensaje que el navegador no soporta JavaScript, luego existe otra etiqueta `<div id="root"></div>` el cual es el punto de acceso que tenemos cuando empezamos a trabajar con React, si se quiere se pueden eliminar todos los comentarios y dejar la estructura del html mas limpias, los comentarios son ayudas que vienen cuando instalamos una aplicación y finalmente puede quedar de esta forma

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

    <title>Counter App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>

  </body>
</html>

```

El archivo **.gitignore** es un archivo que sirve para indicarle a git que carpetas y archivos se quieren ignorar y no se les debe dar seguimiento

El archivo **package.json** son las configuraciones que va a tener la aplicación, usualmente tampoco es modificada, ni se recomienda modificar a menos que se conozca bien lo que se va a hacer, la parte de los **scripts** es donde estan los comandos que hacen funcionar de diferentes maneras la aplicacion

por ejemplo esta **"start"**, cuando ejecutamos **npm start** o **yarn start** desplegamos la aplicación en modo desarrollador, luego sigue **"build"** que es para producción, **"test"** sirve para ejecutar pruebas con el fin de tener la menor cantidad de errores posibles, **"eject"** se recomienda no utilizarlo a menos que no se sepa lo que se esta haciendo 

el archivo **README.md** es donde se encuentran las instrucciones de como usar React y el acceso a la documentación

el archivo **yarn.lock** no se debe manipular y este define todas las versiones de paquetes utilizados en la aplicación

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Contenido de la carpeta SRC

Inicialmente cuando instalamos la aplicación React, por defecto se instalan los siguieentes archivos en la carpeta **src o source**, la cual es donde se van a manipular archivos la mayor parte del tiempo 

![assets-git/126.png](assets-git/126.png)

**App.css** es el archivo de estilos que ayuda a que el componente de **App.js** se vea asi, esta es la primer parte que se renderiza en el navegador

![assets-git/125.png](assets-git/125.png)

Luego esta el archivo **App.test.js**, en este caso no importa tanto el nombre `App` pero si importa **test.js** porque es lo que va a leer el archivo cuando ejecutemos **npm test**

Luego esta el archivo de **index.css**, el cual es el archivo de estilos global de la aplicación

El archivo **index.js**, es el punto inicial de la aplicacion, alli se carga el archivo **index.css**, compoenentes, etc y gracias a este obtenemos y lanzamos toda la configuracion para que el **index.html** que esta en la carpeta public funcione

Esta el archivo **Logo.svg** el cual es el logo de React girando cuando abrimos la aplicación

Esta el archivo **serviceWorker.js**, el cual sirve para hacer una PWA(Aplicación web progresiva)

Pot ultimo esta el archivo de **setupTests.js**, el cual es el archivo que se ejecuta en el momento que se levantan por primera vez las pruebas 

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Hola Mundo en React

Inicialmente borrar todos los archivos que se encuentran dentro de la carpeta **src** para empezar a construir uno por uno y ahora nuevamente en la carpeta **src** crear el archivo **index.js**

dentro de este archivo construir una constante que se llame saludo y asignar etiquetas html h1 con la frase Hola Mundo

`const saludo = <h1>Hola Mundo</h1>`

la linea de codigo anterior es codigo en formato jsx pero para poder renderizarlo es necesario importar en este archivo a React y ReactDom, que es traducirlo al arbol de componentes que nos va a ayudar a renderizar en el navegador.

Luego debemos crear la referencia al div `<div id="root"></div>` que esta en el archivo **index.html** de la carpeta public que es el punto de acceso para renderizar la aplicación. Para esto creamos otra constante la cual se llama divRoot y atraves de javascript la llamamos por su id

`const divRoot = document.querySelector('#app')`;

Haciendo uso de ReactDom, agregamos el metodo `render()` y en este pasamos los parametros, que son las constantes que se crearon y finalemente el **index.js** queda de esta forma.

```
import React from 'react';
import ReactDom from 'react-dom';

const saludo = <h1>Hola Mundo</h1>;

const divRoot = document.querySelector('#root');

ReactDom.render( saludo, divRoot );
```

y con esto tenemos nuestro primer Hola Mundo en el navegador 

![assets-git/127.png](assets-git/127.png)

## Primer Componente

El archivo del capitulo anterior no es un componente por tanto se va a realizar y para eso tenemos que ubicar la carpeta **src** y alli crear el archivo **PrimeraApp.js**, como se menciono en un capitulo anterior los componentes llevan la primer letra en mayuscula por convención y funcionan con el sistema CamelCase.

Existen dos tipos de componentes en React, los que estan basados en clases y los que estan basados en funciones, estos se trabajan actualmente con **Fuctional Components** y empezamos con el primero creando esta estructura de funcion y exportandola, dentro de esta hacemos un `return` del elemento html que queremos renderizar, en este tipo de archivos es donde debe ir el html

```
//Functional Components
const primeraApp = () => {


    return <h1>Hola Mundo</h1>
}

export default primeraApp;
```

Ahora nuevamente pasamos al **index.js** y eliminamos el codigo del capitulo anterior donde se pasaba el html e importamos el componente que acabamos de crear, los componentes son llamados de esta forma `<PrimeraApp />` e incluso es convención dejar el espacio entre la `p` y el `/`, para identificar que es un componente

```
import React from 'react';
import ReactDom from 'react-dom';
import PrimeraApp from './PrimeraApp';


const divRoot = document.querySelector('#root');

ReactDom.render( <PrimeraApp /> , divRoot );
```

![assets-git/128.png](assets-git/128.png)

y ahora si queremos podemos añadirle estilos a esta pagina de Hola Mundo para esto creamos un archivo dentro de **src** que se llame **index.css** y le agregamos los siguientes estilos

```

html, body {
    color: white;
    background-color: #21232A;
    font-family: "Helvetica Neue", Arial,Arial, Helvetica, sans-serif;
    font-size: 1.3rem;
    padding: 70px;
}
```

para que se cargen los estilos agregados al componente debemos importar los estilos de esta forma, esto es la forma de importar estilos

`import './index.css'`

```

import './index.css'

//Functional Components
const primeraApp = () => {

    return <h1>Hola Mundo</h1>
}

export default primeraApp;
```

y con esto ya tenemos el primer componente con estilos

![assets-git/129.png](assets-git/129.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Retornar elementos en el componente-Fragment

Hay que tener en cuenta que si por ejemplo se baja toda la etiqueta `h1` una linea mas abajo del `return`, inmediatamente el `h1` se va a marcar como en un color gris o apagado que significa que ya no se esta leyendo esa linea de codigo por tanto tendriamos un error en el navegador

![assets-git/130.png](assets-git/130.png)

el codigo que se quiere renderizar puede crecer mucho y llevar otros elementos como etiquetas de parrafo, contenedores, formularios, etc. para esto se deben utilizar los parentesis y la razon es que JavaScript solo reconoce un objeto, por tanto si se encierra y se agrega una linea abajo no va a existir algun problema y nuevamente obtenemos el componente renderizado

```

import './index.css'

//Functional Components
const primeraApp = () => {

    return (
    <h1>Hola Mundo</h1>
    )
}

export default primeraApp;
```

![assets-git/131.png](assets-git/131.png)

Si colocamos ahora una etiqueta de parrafo debajo del h1 va a existir otro problema y es que cuando estamos retornando elementos de html deben estar encapsulados o contenidos dentro de un contenedor

asi que pueden estar contenidos dentro de una etiqueta div como se ve a continuación

```
import './index.css'

//Functional Components
const primeraApp = () => {

    return (
        <div>
            <h1>Hola Mundo</h1>
            <p>Mi primera aplicación</p>
        </div>
    )
}

export default primeraApp;
```

pero esto va a crear un elemento div mas en el navegador cuando miramos los elementos

![assets-git/132.png](assets-git/132.png)

Se pueden utilizar o no si se quiere carga una clase o estilo en ese `<div>` pero existe otra forma de quitar esos `<div>` adicionales y es utilizando el componente `Fragment` que proporciona React, se debe importar para poder usar y queda de esta forma

```
import React, { Fragment } from 'react';
import './index.css'

//Functional Components
const primeraApp = () => {

    return (
        <Fragment>
            <h1>Hola Mundo</h1>
            <p>Mi primera aplicación</p>
        </Fragment>
    )
}

export default primeraApp;
```

con esto se logran quitar los div adicionales que se resaltan en la imagen, pero tambien existe una forma nativa de hacerlo sin necesidad de importar Fragment y es encerrando todo entre etiquetas vacias `<></>`

```

import './index.css'

//Functional Components
const primeraApp = () => {

    return (
        <>
            <h1>Hola Mundo</h1>
            <p>Mi primera aplicación</p>
        </>
    )
}

export default primeraApp;
```

![assets-git/133.png](assets-git/133.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Impresión de variables en el HTML

Es posible llamar variables y renderizarlas dentro del componente HTML, pero no todo tipo de datos se puede renderizar, en el primer ejemplo se crea una constante llamada saludo y se le agrega alguna frase.

```

import './index.css'

//Functional Components
const primeraApp = () => {


    const saludo = "Hola que tal a todos?"

    return (
        <>
            <h1>saludo</h1>
            <p>Mi primera aplicación</p>
        </>
    )
}

export default primeraApp;
```

Pero en este momento se va a ver la palabra saludo y no la frase que se agrego a la variable

![assets-git/134.png](assets-git/134.png)

Para que la constante saludo se pueda renderizar es necesario agregarla dentro de corchetes `{saludo}` asi se detecta el JavaScript y con esto tenemos la frase en el navegador `<h1>{ saludo }</h1>`

![assets-git/135.png](assets-git/135.png)

si se le pasa ahora un numero con o sin decimales tambien es posible que lo renderice

![assets-git/136.png](assets-git/136.png)

si se pasan valores booleanos es posible que tambien los renderice o tal vez no 

![assets-git/137.png](assets-git/137.png)

Los datos de tipo Booleano no los renderiza pero que tal si ahora se usa un array o arreglo

![assets-git/138.png](assets-git/138.png)

Los elementos se ven pegados en el navegador, pero la forma en como los presenta el h1 en los Elements de la consola es cada uno de ellos separados.

Y si se usa un objeto tambien se puede renderizar

![assets-git/139.png](assets-git/139.png)

Pero en este caso ocurrio un error, no significa que no se pueda renderizar, el navegador arroja el siguiente error "Error: los objetos no son válidos como hijo de React (encontrado: objeto con claves {nombre, edad}). Si pretendía representar una colección de elementos secundarios, utilice un array o arreglo en su lugar."

la forma para convertir el objeto a un string es parseandolo y para esto se utiliza a `JSON.stringify` 

![assets-git/140.png](assets-git/140.png)

Pero si se quiere presentar de una mejor manera se puede utilizar una etiqueta `<pre></pre>` para presentarlo como codigo y añadir otros argumentos a stringify, para dar un mejor formato al objeto

![assets-git/141.png](assets-git/141.png)

por ultimo se puede comentar el codigo que estabamos transformando a formato Json con `ctrl + shift + 7 o /` y dejar todo como estaba

```
import './index.css'

//Functional Components
const primeraApp = () => {


    const saludo = 'Hola Mundo'

    return (
        <>
        <h1>{saludo}</h1>
            {/* {}<pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>Mi primera aplicación</p>
        </>
    )
}

export default primeraApp;
```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Comunicación entre componentes-Props

Las propiedades son enviadas a los componentes, se conocen como propertys pero su abreviatura es **props**

En el navegador abrir la consola y buscar en la barra señalada los componentes

![assets-git/142.png](assets-git/142.png)

dar un clic al componente **primeraAPP** y en la parte de abajo se van a presentar los **props**, a medida que un componente va teniendo hijos, se va presentado cada hijo de manera descendente

![assets-git/143.png](assets-git/143.png)

El componente padre en este momento se encuentra en **index.js**

![assets-git/144.png](assets-git/144.png)

y de ahi se puede enviar información al componente que es el archivo que se llamo como **PrimeraApp.js**

![assets-git/145.png](assets-git/145.png)

Antes de enviar información entre los parentesis de la función `PrimeraApp` mandamos props y luego hacemos un console.lod de props para ver que regresa en el navegador y lo miramos por consola

```

import './index.css'

//Functional Components
const primeraApp = (props) => {

    console.log(props);
    const saludo = 'Hola Mundo'

    return (
        <>
        <h1>{saludo}</h1>
            {/* {}<pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>Mi primera aplicación</p>
        </>
    )
}

export default primeraApp;
```

y ahora del lado derecho en la consola se imprime un objeto vacio `{}`

![assets-git/146.png](assets-git/146.png)

Pero si ahora vamos a **index.js** y al componente le mandamos una frase de la siguiente forma

```
import React from 'react';
import ReactDom from 'react-dom';
import PrimeraApp from './PrimeraApp';


const divRoot = document.querySelector('#root');

ReactDom.render( <PrimeraApp saludo="Hola, soy Iron Man"/> , divRoot );
```

si se guardan los cambios ahora tenemos por consola a `saludo`

![assets-git/147.png](assets-git/147.png)

Esta es la forma en como se envia informacion a un componente y si ahora nos vamos a la pestaña **components** del navegador en los props vemos el mismo saludo

![assets-git/148.png](assets-git/148.png)

pero si ahora quiero lanzar el saludo que estoy enviando al componente, en el render del h1 del archivo **PrimeraApp.js** mando la propiedad utilizando `{ props.saludo }`

```

import './index.css'

//Functional Components
const primeraApp = (props) => {

    console.log(props);
    const saludo = 'Hola Mundo'

    return (
        <>
        <h1>{ props.saludo }</h1>
            {/* {}<pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>Mi primera aplicación</p>
        </>
    )
}

export default primeraApp;
```

![assets-git/149.png](assets-git/149.png)

Pero usualmente no se usa con la palabra props porque para eso existe la desestructuracion por tanto el props se llama de la siguiente forma entre los parentesis de la función PrimeraApp`{saludo}` y en el render del h1

**Nota:** la constante se esta llamando con la primer letra en minúscula, a continuación para corregir ese error y hacer una buena practica de la convención del lenguaje la letra p en la constante y en el export se pasan a mayúscula

```

import './index.css'

//Functional Components
const PrimeraApp = ({ saludo }) => {


    return (
        <>
        <h1>{ saludo }</h1>
            {/* {}<pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>Mi primera aplicación</p>
        </>
    )
}

export default PrimeraApp;
```

![assets-git/150.png](assets-git/150.png)

Los props tambien admite que no se envien desde el componente padre es decir desde **index.js**, por tal razon se va a comentar para que no se envie la información

```
import React from 'react';
import ReactDom from 'react-dom';
import PrimeraApp from './PrimeraApp';


const divRoot = document.querySelector('#root');

ReactDom.render( <PrimeraApp /* saludo="Hola, soy Iron Man" */ /> , divRoot );
```

y si se envia desde **PrimeraApp.js** un "Hola Mundo" en los props este tambien va a ser renderizado en el navegador, todo depende de como se quiera trabajar con estos

```

import './index.css'

//Functional Components
const PrimeraApp = ({ saludo = "Hola Mundo" }) => {


    return (
        <>
        <h1>{ saludo }</h1>
            {/* {}<pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>Mi primera aplicación</p>
        </>
    )
}

export default PrimeraApp;
```

![assets-git/151.png](assets-git/151.png)


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

 ## PropTypes

 Existe una forma de obligar a que otros desarrolladores hagan uso de los props que establecemos, en el capitulo anterior se enviaba el saludo en el prop del mismo documento pero existe una forma para que esta sea opcional o requerido para esto borramos lo que enviabamos en saludo y verificamos la consola del navegador

 ```

import './index.css'

//Functional Components
const PrimeraApp = ({ saludo }) => {


    return (
        <>
        <h1>{ saludo }</h1>
            {/* {}<pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>Mi primera aplicación</p>
        </>
    )
}

export default PrimeraApp;
 ```

La consola no muestra ningun error porque el `saludo` no es obligatorio

![assets-git/152.png](assets-git/152.png)

pero se puede establecer un tipo de propiedad a los props haciendo la importacion de `PropTypes`, esta viene de esta forma `import PropTypes from 'prop-types';` y para establecer estas propiedades antes de hacer el export del componente se declara de la siguiente forma

`NombreComponente.propTypes = {}`

dentro del objeto se declara al prop de esta forma

```
NombreComponente.propTypes = {
    nombre_del_prop: PropTypes.(se declara como el tipo de dato que se requiera)
}
```

**Nota:** diferencia el propTypes que empieza con mayúscula y minúscula

Hasta el momento si lo declaro de esta forma y lo declaro como un string sigue sin ser obligatorio

```
import './index.css'
import PropTypes from 'prop-types';

//Functional Components
const PrimeraApp = ({ saludo }) => {


    return (
        <>
        <h1>{ saludo }</h1>
            {/* {}<pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>Mi primera aplicación</p>
        </>
    )
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string
}

export default PrimeraApp;
```

Pero si ahora me voy al archivo index y al prop le establezco un numero voy a obtener un error en la consola

![assets-git/153.png](assets-git/153.png)

El error dice que el tipo no es valido, que el prop de saludo proporcionado fue de tipo numero y el valor esperado era una cadena de caracteres o string, de tal forma que si regreso al saludo y nuevamente establezco un string, no deberia tener problemas y se deberia renderizar.

Si quiero obligar a que un programador mande correctamente el tipo de props debo colocar un `.isRequired`

```
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
```

y si quiero establecer mas propiedades tambien lo puedo hacer debajo de `saludo`

En este ejemplo ya se establecio que la propiedad es requerida pero no la estoy enviando en index ni en otro lado 

![assets-git/154.png](assets-git/154.png)

Si a continuación le envio el string en **index.js** ya no va a aparecer un error pero se sabe que si no se agrega nada va a seguir saliendo el error por consola

![assets-git/155.png](assets-git/155.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## DefaultProps

Existen dos formas de enviar propiedades por defecto para esto se va a cambiar la etiqueta de parrafo que se tenia antes y se va a cambiar por un prop que diga subtitulo, la forma mas comun de enviar algo por defecto es haciendolo donde se declara el prop es decir de esta forma

```
import './index.css'
import PropTypes from 'prop-types';

//Functional Components
const PrimeraApp = ({ saludo, subtitulo ="Soy un subtitulo" }) => {


    return (
        <>
        <h1>{ saludo }</h1>
            {/* {}<pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>{ subtitulo }</p>
        </>
    )
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;
```

Pero si voy a la pestaña Components no aparece el prop y aunque este bien puede que no se quiera que se vea de esta forma

![assets-git/156.png](assets-git/156.png)

Entonces a continuacion de los PropTypes puedo establecer los `defaultProps` y se hace de la siguiente forma

```
NombreComponente.defaultProps = {
    prop: (valor por defecto)
}
```

llevandolo al componente se veria de esta forma

```
import './index.css'
import PropTypes from 'prop-types';

//Functional Components
const PrimeraApp = ({ saludo, subtitulo }) => {


    return (
        <>
        <h1>{ saludo }</h1>
            {/* {}<pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>{ subtitulo }</p>
        </>
    )
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
```

y asi tambien en la pestaña Components del navegador se va a mostrar el prop con su valor por defecto, tambien es valido si se quiere dejar vacio

![assets-git/157.png](assets-git/157.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Componente CounterApp

### Tarea

1. Crear un nuevo componente dentro de la carpeta **SRC** llamado **CounterApp**

2. El CounterApp debe de ser un **Functional Component**

3. El contenido del **CounterApp** debe de ser:

    ```
    <h1>CounterApp</h1>
    <h2> { value } </h2>
    ```

4. Donde `"value"` es una propiedad enviada desde el padre hacia el componente CounterApp (Debe ser númerica validada con PropTypes)

5. Reemplazar en el **index.js** el componente `PrimeraApp` por `CounterApp` (no se olviden del `value` que debe de ser un número)

6. Asegúrense de no tener errores ni warnings (Cualquier warning no usado, comentar el código)

Lo primero que se debe hacer es crear el componente **CounterApp** para esto nos vamos a la carpeta **src** del proyecto y alli creamos el archivo **CounterApp.js**

Dentro de este archivo creamos la estructura que se pide

```

import './index.css'
import PropTypes from 'prop-types';

//Functional Components
const CounterApp = ({ value }) => {


    return (
        <>
        <h1>CounterApp</h1>
            <p>{ value }</p>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
```

Ahora hay que dirigirnos a **index.js** y cambiar el componente **PrimeraApp** por **CounterApp** y establecer el prop `value` que va a recibir numeros y se los va a enviar al componente que acabamos de crear 

```
import React from 'react';
import ReactDom from 'react-dom';
/* import PrimeraApp from './PrimeraApp'; */
import CounterApp from './CounterApp'


const divRoot = document.querySelector('#root');

ReactDom.render( <CounterApp value={2021} /> , divRoot );
```

![assets-git/158.png](assets-git/158.png)

**Nota:** Si desde el principio escriben el snipet `rafcp` crea la estructura completa requerida de forma automatica

```
import React from 'react'
import PropTypes from 'prop-types'

const CounterApp = props => {
    return (
        <div>
            
        </div>
    )
}

CounterApp.propTypes = {

}

export default CounterApp
```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Evento click (Eventos en general)

Antes de empezar en este [enlace](https://es.reactjs.org/docs/events.html) se encuentran los eventos soportados por React, estan directamente en la documentación oficial, donde se pueden encontrar todo tipo de eventos incluidos los de formulario, no estan dentro de la lista de eventos pero en la pagina se pueden conseguir

![assets-git/159.png](assets-git/159.png)

Continuando con el proyecto, en el archivo **CounterApp.js** debajo del subtitulo se puede agregar un boton que diga `+1` 

```
import './index.css'
import PropTypes from 'prop-types';

//Functional Components
const CounterApp = ({ value }) => {


    return (
        <>
        <h1>CounterApp</h1>
            <p>{ value }</p>
            <button> +1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;

```

y luego pasar a estilizarlo con css en el archivo **index.css**

```

html, body {
    color: white;
    background-color: #21232A;
    font-family: "Helvetica Neue", Arial,Arial, Helvetica, sans-serif;
    font-size: 1.3rem;
    padding: 70px;
}

button {
    font-size: 1.3rem;
    margin-right: 10px;
    padding: 10px;
}
```

De momento el resultado seria un boton que dice +1 al cual se le puede dar click pero no ocurre ningun cambio por ahora

![assets-git/160.png](assets-git/160.png)

Ahora se puede colocar directamente en el boton un evento el cual seria de tipo `onClick` como se establece en los eventos que proporciona la `documentación` y existen varias formas de hacer que este evento funcione.

El primero es añadir el `onClick` y dentro de este y entre corchetes ejecutar una funcion de esta forma

```

import './index.css'
import PropTypes from 'prop-types';

//Functional Components
const CounterApp = ({ value }) => {


    return (
        <>
        <h1>CounterApp</h1>
            <p>{ value }</p>
            <button onClick={ function () {console.log('+1')}}> +1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;

```

para que cuando hagamos click sobre el boton `+1` por consola cada vez que hagamos click salga la palabra +1

![assets-git/161.png](assets-git/161.png)

Si se hace con una arrow function o funcion de flecha va a funcionar de la misma manera

```
<button onClick={ ()=> {console.log('+1')}}> +1 </button>
```

tambien se puede extraer la función antes de hacer el render y luego llamarla en el boton de esta forma, se crea una función con el nombre que se quiera en este caso `handleAdd` y hace exactamente lo mismo que se venia haciendo solo que ahora se llama a la funcion recibiendo un evento `e`

```

import './index.css'
import PropTypes from 'prop-types';

//Functional Components
const CounterApp = ({ value }) => {

    // handleAdd
    const handleAdd = (e) => {
        console.log('+1')
    }


    return (
        <>
        <h1>CounterApp</h1>
            <p>{ value }</p>
            <button onClick={ (e)=> {handleAdd(e)}}> +1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;

```

pero si se quiere simplificar el codigo se puede quitar la funcion de flecha del evento onClick y llamar a la funcion sin pasar el argumento

```

import './index.css'
import PropTypes from 'prop-types';

//Functional Components
const CounterApp = ({ value }) => {

    // handleAdd
    const handleAdd = (e) => {
        console.log('+1')
    }


    return (
        <>
        <h1>CounterApp</h1>
            <p>{ value }</p>
            <button onClick={handleAdd}> +1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;

```

![assets-git/161.png](assets-git/161.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## useState-Hook

A continuación empezamos usando el primer Hook de React basico que es el useState, todo esto se puede encontrar en la [documenatación](https://es.reactjs.org/docs/hooks-intro.html) oficial de React y vemos el manejo del estado.

Para usar este Hook primero se debe importar en el componente que se requiera hacer `import React, {useState} from 'react';`

**Nota:** Todo lo que empiece por `use` siginifica que es un Hook de React

Este hook maneja un estado que recibe dos parametros, el estado inicial que se puede iniciar o tipar con un tipo de dato y el segundo parametro es una función que se usa para modificar el estado inicial, por ejemplo en `CounterApp` hacemos un llamado inicial al Hook para ver que es lo que trae

```
    const nombre = useState('Iron Man')

    console.log(nombre)
```

```

import './index.css'
import React, {useState} from 'react';
import PropTypes from 'prop-types';

//Functional Components
const CounterApp = ({ value }) => {

    const nombre = useState('Iron Man')

    console.log(nombre)

    // handleAdd
    const handleAdd = (e) => {
        console.log('+1')
    }


    return (
        <>
        <h1>CounterApp</h1>
            <p>{ value }</p>
            <button onClick={handleAdd}> +1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
```

Cuando verificamos la consola del navegador, vemos que el primer argumento trae el nombre, seguido despues de una coma se marca  una f que indica que el segundo argumento es una función.

![assets-git/162.png](assets-git/162.png)

Generalmente el `useState` se maneja con la desestructuración, es decir que se declara la constante y viene de esta forma 

`const [estado, setEstado] = useState((estado inicial, puede ser cualquier tipo de dato))`

la palabra `set` es una convención, no es obligatorio pero esta indica que es el modificador del estado

Ahora declaramos una contador el cual su estado inicial es 2021

```
import './index.css'
import React, {useState} from 'react';
import PropTypes from 'prop-types';

//Functional Components
const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(2021)

    console.log(counter)

    // handleAdd
    const handleAdd = (e) => {
        console.log('+1')
    }


    return (
        <>
        <h1>CounterApp</h1>
            <p>{ value }</p>
            <button onClick={handleAdd}> +1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
```

![assets-git/163.png](assets-git/163.png)

La consola genera un warning porque `setCounter` esta declarada pero aun no se esta usando, si queremos ver el estado podemos abrir la pestaña components y ver que `2021` tambien esta como un estado

![assets-git/164.png](assets-git/164.png)

A continuación no se va a hacer el llamado directamente al prop y se va inicializar el `counter` dentro de la etiqueta `<p>{ counter }</p>`, de esta forma no va a existir un cambio en como se ve pero ahora dentro del evento `handleAdd` se va a agregar el modificador, para que el numero 2021 pueda cambiar cada vez que hagamos click en el boton `+1`

**Nota:** `isRequired` se quito de propTypes para que no sea obligatorio y la consola no muestre error

```
import './index.css'
import React, {useState} from 'react';
import PropTypes from 'prop-types';

//Functional Components
const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(2021)

    console.log(counter)

    // handleAdd
    const handleAdd = (e) => {
        setCounter( counter + 1)
    }


    return (
        <>
        <h1>CounterApp</h1>
            <p>{ counter }</p>
            <button onClick={handleAdd}> +1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
```

Ahora cada vez que se haga click sobre el boton `+1` se va obtener un cambio de estado que se puede ver en la consola del navegador o en los Components

![assets-git/165.png](assets-git/165.png)

![assets-git/166.png](assets-git/166.png)

**Nota:** Es necesario que el modificador este dentro del evento que se quiere ejecutar para que sea escuchado y se mofique el estado


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## handleSubstract y handleReset

### Tarea

1. Agregar dos etiquetas de boton mas a l componente la primera va a ser `<button>Reset</button>` el segundo va a ser `<button>-1</button>`

2. Crear los useState para que el boton Reset regrese a su estado inical y el boton -1 reste lo que tenga el valor en el momento

3. el useState del boton Reset va a recibir en su estado al prop que fue nombrado como `value`

Lo primero que se hace es crear los botones

```

import './index.css'
import React, {useState} from 'react';
import PropTypes from 'prop-types';

//Functional Components
const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(2021)

    // handleAdd
    const handleAdd = (e) => {
        setCounter( counter + 1)
    }


    return (
        <>
        <h1>CounterApp</h1>
            <p>{ counter }</p>
            <button onClick={handleAdd}> +1 </button>
            <button> Reset</button>
            <button> -1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;

```

Despues se debe crear la funcion handleReset para que al dar click sobre el boton Reset el numero se reinicie a 2021, entonces el estado se cambia y en vez de recibir el numero 2021 ahora recibe el `value`

```
import './index.css'
import React, {useState} from 'react';
import PropTypes from 'prop-types';

//Functional Components
const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value)

    // handleAdd
    const handleAdd = (e) => {
        setCounter( counter + 1)
    }

    // handleReset
    const handleReset = (e) => {
        setCounter( value)
    }


    return (
        <>
        <h1>CounterApp</h1>
            <p>{ counter }</p>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleReset}> Reset</button>
            <button> -1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;

```

Probar y ver si funciona aumentando el estado y luego dando click sobre el boton Reset y verificar si se reinicia el valor a 2021

POr ultimo crear la funcion handleSubstract para empezar a disminuir el estado inicial

```
import './index.css'
import React, {useState} from 'react';
import PropTypes from 'prop-types';

//Functional Components
const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value)

    // handleAdd
    const handleAdd = (e) => {
        setCounter( counter + 1)
    }

    // handleReset
    const handleReset = (e) => {
        setCounter( value)
    }

    // handleSubstract
    const handleSubstract = (e) => {
        setCounter( counter - 1)
    }


    return (
        <>
        <h1>CounterApp</h1>
            <p>{ counter }</p>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleReset}> Reset</button>
            <button onClick={handleSubstract}> -1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;

```

Los 3 botones deben quedar habilitados y funcionando correctamente

![assets-git/167.png](assets-git/167.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


## Introducción a las pruebas unitarias y de integración

**Pruebas Unitarias:** Estan enfocadas en pequeñas funcionalidades 

**Ejemplo:** Un coche tiene 4 llantas, la prueba unitaria se centraria en escoger una de las llantas y empezar a realizarse pruebas, puede ser una prueba de desgaste, rendimiento, ajuste de piezas, etc.

**Pruebas de Integración** Enfocadas en cómo reaccionan varias piezas en conjunto

**Ejemplo:** La prueba se centraria no en hacer pruebas a una sola llanta, si no a las 4, en este caso ya se trata de un conjunto de piezas que tienen que funcionar de manera optima.

las caracteristicas de las pruebas son las siguientes:

1. Fáciles de escribir

2. Fáciles de leer

3. Confiables

4. Rápidas

5. Prinicipalmente unitarias

Usualmente se empieza con pequeñas partes, si todas las partes pequeñas se encuentran probadas, la prueba de integración deberia confirmarse y no deberia ocurrir lo contrario, es decir realizar pruebas unitarias dentro de las pruebas de integración.

Los pasos a establecer se conocen como AAA(Arrange,Act,Assert)

- **Arrange (Areglar):** Es el paso en el cual se establece el estado inicial conocido como el sujeto a probar donde se inicializan variables, se hacen las importaciones necesarias y en general se prepara el sujeto a probar

- **Act (Actuar):** Es donde se aplican acciones o estimulos al sujeto de pruebas, se hace el llamado a los metodos, simular click y realizar acciones sobre el paso anterior

- **Assert (Afirmar):** Es donde se observa el comportamiento resultante es decir si los resultados son los esperados 

### Mitos sobre las pruebas

- Hacen que la aplicación no tenga errores

- Las pruebas no pueden fallas

- Hacen más lenta la aplicación

- Es una pérdida de tiempo

- Hay que probar todo

Descargar los siguientes [archivos](https://github.com/jeyfredc/React---Curso-Udemy/raw/master/base.rar) y copiar la carpeta dentro de **src** para empezar a realizar las primeras pruebas

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Primera prueba

Para iniciar esto es lo que debemos tener en la carpeta **src**

![assets-git/168.png](assets-git/168.png)

Ahora dentro de la carpeta **src** crear otra carpeta que tenga por nombre **test** o **tests** y dentro de esta carpeta crear un archivo que se llame **demo.test.js** y agregamos un `console.log('Hola Mundo');`

Despues abrimos si se quiere una nueva terminal, se hace la ubicacion del proyecto y ahora ejecutar `npm run test` o `yarn test`

![assets-git/169.png](assets-git/169.png)

Esto va abrir la consola y va a lanzar el siguiente error **Test suite failed to run**

![assets-git/170.png](assets-git/170.png)

Esto error significa que no estamos haciendo un test sobre el archivo **demo.test.js**, seguido de esto dice en otra linea se indica que el test suite debe contener por lo menos una prueba.

Como se puede observar el ejecutar el comando `npm run test` o `yarn test`, hace que inmediatamente se reconozca que existe un archivo que esta hecho para realizar test

alli tambien hay otras opciones que son las siguientes

**Watch Usage**

 › Press a to run all tests.-> Para correr todas las pruebas
 › Press f to run only failed tests. -> Para correr solo las pruebas que fallaron
 › Press q to quit watch mode. -> Para salir
 › Press p to filter by a filename regex pattern. -> Para filtrar por una expresión regular
 › Press t to filter by a test name regex pattern. -> Para filtrar pruebas en base a una expresión regular
 › Press Enter to trigger a test run.

para ejecutar una prueba se puede escribir un snipet sobre **demo.test.js** solo escribiendo la palabra test y presionando tab en el teclado, aparece automaticamente esta estructura

```
test('should', () => {
    
})

```

La cual se va a cambiar, lo que esta como string es decir `'should'` lo vamos a renombrar en base al tipo de prueba que vamos hacer por ejemplo

```
test('debe de ser true', () => {
    
})

```
Y en este caso vemos que paso la prueba, si presionamos la tecla w van a salir las opciones de los comandos descritos anteriormente

![assets-git/171.png](assets-git/171.png)

Ahora hacemos un pequeño codigo para hacer una prueba

```
test('debe de ser true ', () => {

    const isActive = true;
    
    if(isActive){
        console.log('Esta activo')
    }else{
        console.error('No esta activo')
    }
})
```

En este caso la prueba pasa porque `isActive` si es gual a `true`

![assets-git/172.png](assets-git/172.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Jest-Expect-toBe

React al realizar la instalación de la aplicacion cuando ejecutamos `npx create-react-app 03-counter-app`, por defecto trae una libreria llamada **Jest** que es la que nos ayuda a realizar los test de prueba. A continuacion esta la documentación oficial en el siguiente [enlace](https://jestjs.io/), alli debemos seleccionar la opcion **Docs** y en el menu lateral izquierdo buscar el **API Reference** y seleccionar **Expect**.

Al abrir **Expect** estan los diferentes metodos para ejecutar pruebas, en este ejemplo vamos a realizar una prueba de que 2 mensajes sean iguales.

Para esto en **demo.test.js** la vamos a realizar una validación, lo comun es hacer lo siguiente

```
test('deben de ser iguales', () => {

    // 1. Inicialización
    const mensaje = 'Hola Mundo';

    // 2. estímulo
    const mensaje2 = `Hola Mundo`;

    // 3. Observar el comportamiento
    if(mensaje === mensaje2){
        true
    }else{
        false
    }
})
```

Pero como estamos haciendo uso de la libreria Jest podemos ver el ejemplo donde utilizan [.tobe(value)](https://jestjs.io/docs/en/expect#tobevalue) este metodo sirve para comparar y nos ayuda a reducir codigo, entonces al utilizarlo dejamos el archivo de la siguiente forma

```
test('deben de ser iguales', () => {

    // 1. Inicialización
    const mensaje = 'Hola Mundo';

    // 2. estímulo
    const mensaje2 = `Hola Mundo`;

    // 3. Observar el comportamiento
    expect(mensaje).toBe(mensaje2)
})

```

`expect()`, es el valor esperado. `.toBe()` es el valor con el que va a realizar la comparación, Si ambos son verdaderos la prueba debe pasar

![assets-git/173.png](assets-git/173.png)

Pero si el valor 2 es falso, la prueba debe lanzar el error y mostrar cual es el error 

![assets-git/174.png](assets-git/174.png)

Si se quiere organizar mejor las pruebas que se vayan realizando, se pueden encapsular los test dentro de una funcion `describe` que contenga los test que se requieran y lo muestre de una forma organizada en la consola, de esta forma

```
describe('Pruebas en el archivo demo.test.js ', () => {
    
    test('deben de ser iguales', () => {
    
        // 1. Inicialización
        const mensaje = 'Hola Mundo';
    
        // 2. estímulo
        const mensaje2 = `Hola Mundo`;
    
        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2)
    });

});
```

De esta forma en la consola, aparece un titulo, que ejecuta solo pruebas que esten contenidas alli

![assets-git/175.png](assets-git/175.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Pruebas en el archivo 02-template-string.js

Es recomendable que si estamos haciendo pruebas por ejemplo sobre la carpeta **base** entonces en la carpeta de **test** se cree una interna con el mismo nombre para tener mas claro sobre que es lo que se esta haciendo la prueba.

Dentro de **test** crear una carpeta que se llame **base** y dentro de esta crear un archivo que se llame **02-template-string.test.js**

El archivo se va a crear con la siguiente estructura

```
describe('Pruebas en 02-template-string.js ', () => {
    
    test('should ', () => {
        
    })
    
})

```

Ahora pasamos a revisar el archivo **02-template-string.js** que venia en la carpeta de descargas, para poder hacer pruebas de este archivo se debe exportar la funcion `getSaludo` y comentar los `console.log` que vienen en este para no traerlos al ejecutar el test del archivo y queda de esta forma

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

// console.log(nombreCompleto)

export function getSaludo(nombre){
    return 'Hola ' + nombre;
}

// console.log(`Este es un texto: ${getSaludo(nombre)}`)
```

Nuevamente regresamos al archivo del test y alli colocamos la descripción en el test de lo que hace la funcion y empezamos a agregar cada una de las constantes 

```
import { getSaludo } from '../../base/02-template-string';


describe('Pruebas en 02-template-string.js ', () => {
    
    test('getSaludo debe de retornar hola pablito', () => {
        
        const nombre = 'pablito';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre )
    })
    
})
```

para que salgan ayudas como describe o el metodo toBe, despues de agregar un punto se puede importar la libreria de esta forma

`import '@testing-library/jest-dom';`

```
import { getSaludo } from '../../base/02-template-string';
import '@testing-library/jest-dom';

describe('Pruebas en 02-template-string.js ', () => {
    
    test('getSaludo debe de retornar hola pablito', () => {
        
        const nombre = 'pablito';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre )
    })
    
})

```

![assets-git/176.png](assets-git/176.png)

Si tenemos duda de que es lo que hace saludo incluso antes de ejecutar expect y toBe podemos hacer un `console.log(saludo)` para ver que retorna

Si ejecutamos un error como por ejemplo agregar un signo de admiración finalizando la frase `.toBe( 'Hola ' + nombre + '!')`

tambien lo obtendremos como una prueba fallida

![assets-git/177.png](assets-git/177.png)

Puede pasar que al bajar las pruebas es decir en la terminal ejecutar `q` o el comando `ctrl + c` y despues ejecutar nuevamente `yarn test` o `npm run test` no abra el archivo al cual le estabamos realizando las pruebas o me quiera devolver a la prueba del demo, en este caso oprimo la tecla p y escribo el test que quiero buscar, lo selecciono y presiono enter para que lo abra

![assets-git/178.png](assets-git/178.png)

![assets-git/179.png](assets-git/179.png)

Si se quiere tambien se puede hacer un ejercicio para ejecutar 2 pruebas con el mismo archivo.

recibiendo el signo de admiración al final retornando a Pablito y el otro test es que si no hay argumento nombre, por default traiga `Hola Carlos!`, para esto se deben modificar los archivos, empezando por **02-template-string.js**

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

// console.log(nombreCompleto)

export function getSaludo(nombre = 'Carlos'){
    return 'Hola ' + nombre + '!';
}

// console.log(`Este es un texto: ${getSaludo(nombre)}`)
```

y ahora los 2 test del archivo **02-template-string-test.js**

```
import { getSaludo } from '../../base/02-template-string';
import '@testing-library/jest-dom';

describe('Pruebas en 02-template-string.js ', () => {
    
    test('getSaludo debe de retornar Hola Pablito!', () => {
        
        const nombre = 'Pablito';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre + '!')
    })

    // getSaludo debe de retorna Hola Carlos! si no hay argumentro nombre
    test('getSaludo debe de retornar Hola Carlos! si no hay argumentro nombre', () => {
        

        const saludo = getSaludo( );

        expect( saludo ).toBe( 'Hola Carlos!')
    })
})

```

Al realizar esto, los 2 test, pasan

![assets-git/180.png](assets-git/180.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## toEqual

Para este capitulo se van hacer pruebas sobre el ejercicio **05-funciones.js**, iniciamos modificandolo para que quede de esta forma y haciendo el export de la funcion `getUser`

```

export const getUser = () => 
    ({
    id: 'zxh123',
    username: 'camilo2004',
    })

// console.log(getUser())

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

// console.log( usuarioActivo);

const getusuarioActivo2 = (nombre) => (
    {
        id: 'abc567',
        username: nombre
    }
)
const usuarioActivo2 = getusuarioActivo2('Rafael');

// console.log( usuarioActivo2 )
```

Luego dentro de la carpeta tests, creamos un nuevo archivo que se llame **05-funciones.test.js** y dentro de este creamos la estructura basica, queremos comprobar que la funcion getUser retorne un objeto

```
import '@testing-library/jest-dom';

describe('Pruebas en 05-funciones.js', () => {
    test('getUser debe de retornar un objeto', () => {
        
    })
    
})

```

Ahora debemos crear una constante que sea igual a lo que retorna getUser

```
import '@testing-library/jest-dom';

describe('Pruebas en 05-funciones.js', () => {
    test('getUser debe de retornar un objeto', () => {
        
        const userTest = {
                id: 'zxh123',
                username: 'camilo2004',
        }
    })
    
})

```

despues crear la constante que obtiene a la función `getUser()` y para esto se debe importar del archivo

```
import '@testing-library/jest-dom';
import { getUser } from '../../base/05-funciones';


describe('Pruebas en 05-funciones.js', () => {
    test('getUser debe de retornar un objeto', () => {
        
        const userTest = {
                id: 'zxh123',
                username: 'camilo2004',
        }

        const user = getUser();
    })
    
})
```

Por ultimo usamos el metodo toEqual porque el metodo toBe, no sirve para comparar objetos y tampoco se puede hacer una comparacion de que un objeto sea igual a un objeto porque sus referencias apuntan a espacios de memoria distintos, para esto primero sea una prueba en la consola del navegador

![assets-git/181.png](assets-git/181.png)

Ahora se hace el ejemplo dejando toBe, para ver que error saca el test

```
import '@testing-library/jest-dom';
import { getUser } from '../../base/05-funciones';


describe('Pruebas en 05-funciones.js', () => {
    test('getUser debe de retornar un objeto', () => {
        
        const userTest = {
                id: 'zxh123',
                username: 'camilo2004',
        }

        const user = getUser();

        expect( user ).toBe( userTest );
    })
    
})

```

![assets-git/182.png](assets-git/182.png)

en la terminal se lanza una sugerencia **If it should pass with deep equality, replace "toBe" with "toStrictEqual"** la cual traduce lo siguiente **"Si debe pasar con igualdad profunda, reemplace "toBe" por "toStrictEqual"**

Por tal razon el metodo que se va a usar es en vez de `toBe`, `toEqual` ya que este ayuda a comparar los objetos

![assets-git/183.png](assets-git/183.png)

Ahora para hacer otro ejercicio se va a realizar una prueba sobre `getUsuarioActivo()` del archivo **05-funciones.js**. para que retorne un objeto en esta se pasa un parametro en la funcion que tambien se recibe en el username de la misma.

Lo primero que se debe hacer es exportar la funcion en el archivo **05-funciones.js**

```
export const getUser = () => 
    ({
    id: 'zxh123',
    username: 'camilo2004',
    })


export const getusuarioActivo2 = (nombre) => (
    {
        id: 'abc567',
        username: nombre
    }
)
```

Despues se debe importar en el test, crear el test y pasar un argumento sobre la constante que se cree y reciba a `getusuarioActivo2()`

```
import '@testing-library/jest-dom';
import { getUser, getusuarioActivo2 } from '../../base/05-funciones';


describe('Pruebas en 05-funciones.js', () => {
    test('getUser debe de retornar un objeto', () => {
        
        const userTest = {
                id: 'zxh123',
                username: 'camilo2004',
        }

        const user = getUser();

        expect( user ).toEqual( userTest );
    })

    test('getUsuarioActivo debe de retornar un objeto', () => {
        
        const nombre = "Jeyfred";

        const userActivo = getusuarioActivo2(nombre);

        expect( userActivo ).toEqual({
            id: 'abc567',
            username: nombre
        }  );
    })
    
})

```

![assets-git/184.png](assets-git/184.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Pruebas en el archivo 07-desestructuracion-arreglos.js

Iniciamos creando el archivo para pruebas en la carpeta **tests** **07-desestructuracion-arreglos.test.js**.

Realizamos una modificación al archivo que le vamos a hacer pruebas y queda de esta forma

```
const personajes = ['Iron Man', 'Capitan America', 'Spiderman'];

const [ , p2, p3] = personajes;


export const retornaArreglo = () => {
    return ['ABC' , 123];
}

// const [letras, numeros] = retornaArreglo()


const estados = (valor) => {
    return [valor, () => { console.log('Hola Mundo')}];
}

```

Ahora hicimos un export de `retornaArreglo`, pasamos nuevamente al archivo donde vamos a realizar el test y creamos la estructura para la prueba

```
import '@testing-library/jest-dom';


describe('Pruebas en desestructuración', () => {

    test('Debe de retornar un string y un numero', () => {
        
    })
    
    
})

```

Luego hacemos la importación de `retornaArreglo` y hacemos la comparación

```
import '@testing-library/jest-dom';
import {retornaArreglo} from '../../base/07-desesctructuracion-arreglos'

describe('Pruebas en desestructuración', () => {

    test('Debe de retornar un string y un numero', () => {
        
        const arr = retornaArreglo(); // ['ABC', 123];

        expect( arr ).toEqual(['ABC' , 123])
    })
    
    
})

```

![assets-git/185.png](assets-git/185.png)

Otra forma de hacerlo es desestructurando el arreglo de esta forma y haciendo una validación por cada uno, por ejemplo primero se hace un console.log de letras para que genere por consola que es un string y luego entra a realizar la comparación entre el tipo de datos

```
import '@testing-library/jest-dom';
import {retornaArreglo} from '../../base/07-desesctructuracion-arreglos'

describe('Pruebas en desestructuración', () => {

    test('Debe de retornar un string y un numero', () => {
        
        // const arr = retornaArreglo(); // ['ABC', 123];

        // expect( arr ).toEqual(['ABC' , 123])

        const [letras, numeros] = retornaArreglo();

        console.log(typeof letras);

        expect(letras).toBe('ABC');
    })
    
    
})

```

![assets-git/186.png](assets-git/186.png)

Despues se puede hacer el mismo ejercicio para los numeros

```
import '@testing-library/jest-dom';
import {retornaArreglo} from '../../base/07-desesctructuracion-arreglos'

describe('Pruebas en desestructuración', () => {

    test('Debe de retornar un string y un numero', () => {
        
        // const arr = retornaArreglo(); // ['ABC', 123];

        // expect( arr ).toEqual(['ABC' , 123])

        const [letras, numeros] = retornaArreglo();

        console.log(typeof letras);

        expect(letras).toBe('ABC');

        console.log(typeof numeros);

        expect(numeros).toBe(123);
    })
    
    
})
```

![assets-git/187.png](assets-git/187.png)


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Pruebas en 08-import-export.js-Arreglos

Para iniciar dentro de la carpeta **src**, crear otra capeta llamada **data** y dentro de esta un archivo llamado **heroes.js**, copiar el siguiente codigo y guardar los cambios

```
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

export default heroes;
```

Del archivo **08-import-export.js** vamos a exportar la funcion `getHeroeById`. Ahora en la carpeta **tests** creamos el archivo **08-import-export.test.js** donde se correran las pruebas y creamos la estructura basica

```
import '@testing-library/jest-dom';

describe('Pruebas en funciones de Heroes', () => {

    test('Debe de retornar un heroe por id ', () => {
        
    })
    
})

```

La funcion que vamos a probrar es `getHeroeById` y se pueden considerar varios tipos de prueba:

- ¿Que pasa si recibimos un id que no existe?

- ¿Que pasa si se envia un id correcto pero el heroe no existe?

- ¿Que pasa si envio un id y la respuesta es undefined?

Lo primero que hacemos dentro del test es importar la funcion `getHeroeById`, luego creamos una constante id que recibe un numero y luego otra constante que reciba la funcion con el id y hacer un console.log de la constante

```
import '@testing-library/jest-dom';
import { getHeroeById } from '../../base/08-import-export';

describe('Pruebas en funciones de Heroes', () => {

    test('Debe de retornar un heroe por id ', () => {
        
        const id=1;
        const heroe = getHeroeById( id );

        console.log(heroe)
    })
    
})

```

y verificamos que la terminal este retornando el objeto de forma correcta

![assets-git/188.png](assets-git/188.png)

`{ id: 1, name: 'Batman', owner: 'DC' }`

Luego hacemos un import del archivo **heroes** y le hacemos un `find` para buscar el valor del id y con esto ya hacemos un `expect` para que compare los mismos datos

```
import '@testing-library/jest-dom';
import { getHeroeById } from '../../base/08-import-export';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes', () => {

    test('Debe de retornar un heroe por id ', () => {
        
        const id=1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find(h=>h.id === id );

        expect( heroe ).toEqual( heroeData );

    })
    
})
```

![assets-git/189.png](assets-git/189.png)

Ahora realizamos otra prueba si paso un id que no existe deberia retornar undefined

```
import '@testing-library/jest-dom';
import { getHeroeById } from '../../base/08-import-export';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes', () => {

    test('Debe de retornar un heroe por id ', () => {
        
        const id=1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find(h=>h.id === id );

        expect( heroe ).toEqual( heroeData );

    })

    test('Debe de retornar un undefined si heroe no existe ', () => {
        
        const id=9;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );

    })
    
})
```

![assets-git/190.png](assets-git/190.png)

Se pueden hacer otras pruebas con la funcion `getHeroesByOwner`, una para retornar y filtrar heroes que pertenezcan a DC, otra para Marvel y otra por la longitud de cada uno, lo mas importante para hacer la prueba es analizar que objetos devuelve ownerData y heroesMarvel

```
import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-import-export';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes', () => {

    test('Debe de retornar un heroe por id ', () => {
        
        const id=1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find(h=>h.id === id );

        expect( heroe ).toEqual( heroeData );

    })

    test('Debe de retornar un undefined si heroe no existe ', () => {
        
        const id=9;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
    })

    // debe de retornar un arreglo con heroes de DC
    // Crear una constante que en vez de llamarse id, se llame owner
    // toEqual al arreglo filtrado

    test('debe de retornar un arreglo con heroes de DC', () => {
        
        const owner = 'DC';

        const heroesDc = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]
      
        const ownerData = heroes.filter((h) => h.owner === owner)

        expect(heroesDc).toEqual( ownerData )
    })
    
  
    // debe de retornar un arreglo con heroes de DC
    // toEqual al arreglo filtrado
    // toBe leght=2

    test('debe de retornar un arreglo con heroes de Marvel', () => {
        
        const owner = 'Marvel';

        const heroesMarvel = getHeroesByOwner(owner);
      
        const ownerData = heroes.filter((h) => h.owner === owner)

        expect(heroesMarvel).toEqual( ownerData )
    })

    // debe de retornar un arreglo con heroes de DC
    // toBe leght=2

    test('debe de retornar un arreglo con heroes de Marvel utilizando toBe', () => {
        
        const owner = 'Marvel';

        const heroesMarvel = getHeroesByOwner(owner);
      
        expect(heroesMarvel.length).toBe( 2 )
    })
})
```

![assets-git/191.png](assets-git/191.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Pruebas con tareas asincronas

Para este capitulo hay que empezar a realizar modificaciones en **09-promesas.js** y queda de esta forma

```
import {getHeroeById} from './08-import-export';

export const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const personaje = getHeroeById(id);
            if(personaje){
            resolve(personaje)
            }else{
                reject('No se pudo encontrar al heroe')
            }
        }, 1500)
    });    
}
```

Ahora nos dirigimos a la carpeta **tests** y creamos el archivo **09-promesas.test.js** y creamos la estructura basica 

```
import '@testing-library/jest-dom';

describe('Pruebas con promesar', () => {
    
    test('getHeroeByIdAsync debe de retornar un heroe async ', () => {
        
    })
    
})
```

Luego debemos realizar lña importación de `getHeroeByIdAsync`, creamos la constane que recibe un id y llamamos la funcion, pero aqui vamos a realizar algo que esta mal porque true nunca va a ser igual a false y aun asi la prueba pasa

```
import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';

describe('Pruebas con promesar', () => {
    
    test('getHeroeByIdAsync debe de retornar un heroe async ', () => {
        
        const id = 1;

        getHeroeByIdAsync( id )
        .then( heroe => {
            
            expect(true).toBe(false)
        });
    })
    
})

```

![assets-git/192.png](assets-git/192.png)

Esto sucede porque la prueba se ejecuta de manera sincrona, linea por linea, pero realmente es como si no estuviera entrando a la promesa, es decir al `.then`, por esta razon se debe pasar al callback del test un argumnento llamado `done` e igualmente debajo del `expect` para indicar que hay debe terminar de leer el codigo, si hace de esta forma ahora vamos a obtener un error y asi sabemos que las pruebas ya estan dando el resultado que esperamos

```
import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';

describe('Pruebas con promesar', () => {
    
    test('getHeroeByIdAsync debe de retornar un heroe async ', (done) => {
        
        const id = 1;

        getHeroeByIdAsync( id )
        .then( heroe => {
            
            expect(true).toBe(false)
            done();
        });
    })
    
})

```

![assets-git/193.png](assets-git/193.png)

Ahora si ya podemos ejecutar la prueba de manera correcta para esto debemos importa a `heroes` se espera el heroe con id igual a 1 y a los heroes en la posicion 0 del arreglo

```
import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesar', () => {
    
    test('getHeroeByIdAsync debe de retornar un heroe async ', (done) => {
        
        const id = 1;

        getHeroeByIdAsync( id )
        .then( heroe => {
            
            expect(heroe).toBe(heroes[0])
            done();
        });
    })
    
})

```

En este caso la prueba pasa 

![assets-git/194.png](assets-git/194.png)

Si colocaramos a heroes en la posicion 1 la prueba va a fallar.

![assets-git/195.png](assets-git/195.png)

Ahora se hace la prueba para capturar el error en caso de que el heroe no exista y el mensaje que deberia enviar como se ve en el archivo **09-promesas.js** es `"No se puede encontra el heroe"` en este caso se debe realizar lo mismo que el paso anterior utilizando tambien al argumento done

```
import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesar', () => {
    
    test('getHeroeByIdAsync debe de retornar un heroe async ', (done) => {
        
        const id = 1;

        getHeroeByIdAsync( id )
        .then( heroe => {
            
            expect(heroe).toBe(heroes[0])
            done();
        });
    })
    
    test('dede de obtener un error si el heroe por id no existe', (done) => {
        
        const id = 9;

        getHeroeByIdAsync( id )
        .catch( heroe => {
            
            expect(heroe).toBe("No se pudo encontrar al heroe")
            done();
        });
    })
    
})

```

![assets-git/196.png](assets-git/196.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Pruebas con async-await

En este capitulo se va a hacer uso y pruebas sobre el archivo **11-async-await.js**, en caso que no este funcionando el apiKey deberan realizar los mismos pasos que se hicieron en el capitulo de [Fetch API](https://github.com/jeyfredc/React---Curso-Udemy#Fetch-API), luego se hace un export de `getImagen` y se hacen unas pequeñas modificaciones para retunarl el `url` y el `error`. El archivo queda asi 

```
export const getImagen = async() => {

    try {
        const apiKey = 'soVdva8bjB8shZXmy18BLAE5wCSgYZZv';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await resp.json();
        const {url} = await data.images.downsized;
        
        return url;
    } catch (error) {
        
        return 'No existe';
    }
}
```

Ahora pasamos a la carpeta **tests** y creamos el archivo  **11-async-await.test.js**, el cual lleva la siguiente estructura

```
import '@testing-library/jest-dom';

describe('Pruebas con async-await y Fetch', () => {
    
    test('Debe de retornar el url de la imagen', () => {
        
    })
    
})

```

Se debe de tener en cuenta que el url regresa un string, hacemos el import de la funcion `getImagen` y recordando las clases del cuando colocamos la palabra `async` sabemos que se retorna una promesa 

si colamos una constante igual a la función y nos paramos sobre la constante vemos que resuelve `<any>` porque Javascript no es un lenguaje con un tipado estricto pero si sabe que regresa una promesa

```
import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Pruebas con async-await y Fetch', () => {
    
    test('Debe de retornar el url de la imagen', () => {
        
        const url = getImagen();
    })
    
})

```

![assets-git/197.png](assets-git/197.png)

Por tanto si hacemos un expect de url igual a un string no va a funcionar por que getImagen regresa una promesa pero su al test le agregamos async y hacemos await al url si podemos comparar que regrese un string

```
import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Pruebas con async-await y Fetch', () => {
    
    test('Debe de retornar el url de la imagen', async() => {
        
        const url = await getImagen();

        console.log(url);
        expect( typeof url).toBe( 'string' );
    })
    
})

```

![assets-git/198.png](assets-git/198.png)


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Pruebas sobre componentes de React

En este capitulo se hace prueba del componente `<PrimerApp >` por tanto lo primero que debemos hacer es dirigirnos a **index.js** y nuevamente hacer que retorne `primeraApp` por tanto dejamos el archivo de la siguiente forma

```
import React from 'react';
import ReactDom from 'react-dom';
import PrimeraApp from './PrimeraApp';
// import CounterApp from './CounterApp'


const divRoot = document.querySelector('#root');

// ReactDom.render( <CounterApp value={2021} /> , divRoot );
ReactDom.render( <PrimeraApp /> , divRoot );

```

Ahora nos dirigimos a la carpeta **tests** y alli creamos el archivo de prueba el cual se llemara **PrimeraApp.test.js**, lleva la siguiente estructura

```
import '@testing-library/jest-dom';

describe('Pruebas en <PrimeraApp />', () => {

    test('Debe de mostrar el mensaje "Hola, Soy Iron Man"', () => {
        
    })
    
    
})
```

el mensaje que se quiere evaluar es `"Hola, Soy Iron Man"`, por tanto se debe crear una constante saludo que contenga la misma frase y despues una constante wrapper que va a utilizar a render el cual ayuda a renderizar el componente.

**Nota:** Tanto `render` como `PrimeraApp` se deben de importar, el archivo queda asi:

```
import '@testing-library/jest-dom';
import { render } from '@testing-library/react'
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {

    test('Debe de mostrar el mensaje "Hola, Soy Iron Man"', () => {
        
        const saludo = 'Hola, Soy Iron Man';

        const wrapper = render( <PrimeraApp/> );
    })
    
})
```

Luego se marca una advertencia que indica que el prop saludo fue marcado como requerido en PrimeraApp pero esta indefinido

![assets-git/199.png](assets-git/199.png)

Entonces se debe agregar el prop para ver si se siguen cargando mas errores 

```
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {

    test('Debe de mostrar el mensaje "Hola, Soy Iron Man"', () => {
        
        const saludo = 'Hola, Soy Iron Man';

        const wrapper = render( <PrimeraApp saludo={ saludo } /> );
    })
    
    
})
```

Ahora ya esta cargando la prueba correctamente 

![assets-git/200.png](assets-git/200.png)

el wrapper tambien tine un metodo llamado `getBytext` que se puede acceder como `wrapper.getByText()` o desestructurar directamente a `wrapper` para utilizar la funcion.

Cuando hacemos el `expect` y dentro de este el `getByText(saludo)` indicamos que haga la busqueda en el componente del prop `saludo` el cual retorna `"Hola, Soy Iron Man"` y luego `.toBeInTheDocument()` para que haga la busqueda sobre el componente

```
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {

    test('Debe de mostrar el mensaje "Hola, Soy Iron Man"', () => {
        
        const saludo = 'Hola, Soy Iron Man';

        const { getByText} = render( <PrimeraApp saludo={ saludo } /> );

        expect( getByText(saludo)).toBeInTheDocument();
    })
    
    
})

```

De esta forma vemos que la evaluación del componente pasa la prueba

![assets-git/201.png](assets-git/201.png)

pero si se quisiera que arrojara un error se puede concatenar saludo con otro string y ver que lanza la consola

![assets-git/202.png](assets-git/202.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Enzyme-Testing unit

Para esta capitulo nos vamos a apoyar de la libreria llamada Enzyme en este [enlace](https://enzymejs.github.io/enzyme/) se encuentra la documentación oficial, actualmente esta libreria se encuentra en la version 16, y react actualmente se encuentra en la version 17 por lo que es necesario hacer la instalacion de un adaptor de la version 17 con el siguiente comando en la terminal

`npm install --save-dev @wojtekmaj/enzyme-adapter-react-17` o `yarn add --dev @wojtekmaj/enzyme-adapter-react-17`

**Nota:**Recordar estar en la ubicación del proyecto

![assets-git/203.png](assets-git/203.png)

Tambien se debe realizar la instalacion de [enzyme-to-json](https://www.npmjs.com/package/enzyme-to-json), aqui ejecutamos el comando 

`npm install --save-dev enzyme-to-json`

Despues de realizar esta instalación dentro de la carpeta src creamos un archivo que se llama **setupTests.js** con la siguiente configuración

```
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer({ mode: 'deep' }) );
```

Si yarn o npm se estan ejecutando en la consola de la terminal se debe finalizar y volver a ejecutar porque se hizo la instalacion de **setupTest.js** y este es un archivo de configuracion cuando ejecutamos por primera vez `npx` para crear una aplicación

Despues de realizar las configuraciones, regresamos al archivo **PrimeraApp.test.js** para realizar una prueba de que se renderice correctamente el componente y dejamos el archivo de la siguiente forma

```
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {

    // test('Debe de mostrar el mensaje "Hola, Soy Iron Man"', () => {
    //     const saludo = 'Hola, Soy Iron Man';
    //     const { getByText} = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText(saludo)).toBeInTheDocument();
    // })
    test('debe de mostrar el componenet <PrimeraApp /> correctamente', () => {
        
    })
    
    
})

```

Dentro de test creamos una constatnte wrapper que llama a la funcion `shallow()`, la cual hay que importar y nos deshacemos de render.

`shallow()` es parecido a `render()` pero este permite simular varios tipos de elementos e incluso simular clicks, dentro de `shallow()` extraemos el mismo contenido que en `render()`

```
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {

    // test('Debe de mostrar el mensaje "Hola, Soy Iron Man"', () => {
    //     const saludo = 'Hola, Soy Iron Man';
    //     const { getByText} = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText(saludo)).toBeInTheDocument();
    // })
    test('debe de mostrar el componenet <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola, Soy Iron Man';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );
    })
    
    
})

```

Aqui ya deberiamos estar viendo que la prueba se ejecuta pero todavia no estamos haciendo ninguna validación para esto hacemos uso de `expect()` y con la funcion `.toMatchSnapshot()` obtenemos un render del archivo en otra carpeta que se va a crear de manera automatica al guardar los cambios del siguiente codigo

```
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {

    // test('Debe de mostrar el mensaje "Hola, Soy Iron Man"', () => {
    //     const saludo = 'Hola, Soy Iron Man';
    //     const { getByText} = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText(saludo)).toBeInTheDocument();
    // })
    test('debe de mostrar el componenet <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola, Soy Iron Man';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper).toMatchSnapshot();
    })
    
    
})

```

Si revisamos la consola ahora sale que 1 snapshot fue escrito

![assets-git/205.png](assets-git/205.png)

La carpeta que se ha creado de manera automatica se creo en la carpeta **tests** y alli se nombro otra carpeta llamada **__snapshots__**, si abrimos esta hay un archivo contenido llamado **PrimeraApp.test.js.snap** y este archivo trae una captura del render del componente `PrimeraApp` como se puede ver a continuación

**Nota:** Este archivo no se debe alterar de ninguna forma

![assets-git/204.png](assets-git/204.png)

En el caso que se llegue a actualizar el componente `PrimeraApp` por ejemplo modificando el contenido dentro de la etiqueta `<p>` con signos de admiracion sobre la linea 11 como se ve a continuación

![assets-git/206.png](assets-git/206.png)

En la terminal se va actualizar este cambio pero va indicar que la prueba fallo

![assets-git/207.png](assets-git/207.png)

como fue una actualizacion del documento en la terminal debemos oprimir la tecla `w` y luego la tecla `u` para que se actualicen los cambios.

Despues de realizar esto nuevamente podemos abrir la carpeta **__snapshots__** y verificar el archivo **PrimeraApp.test.js.snap** ya que alli es donde se actualiza la fotografia del componente notando que ahora tambien aparecen los signos de admiración que se actualizaron sobre `PrimeraApp`

![assets-git/208.png](assets-git/208.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Revisar elementos dentro del componente

Ahora vamos a realizar la comprobación del subtitulo que se encuentra en el componente `PrimeraApp`, nuevamente, abrit **PrimeraApp.tes.js** y agregar el test despues del que se realizo en el capitulo anterior.

En este se va crear una constante llamada subTitulo, y se pasa como props, se estaba cargando anteriormente porque el subtitulo se coloco por Default, pero en este caso se va a hacer una validación de ese prop

```
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {

    // test('Debe de mostrar el mensaje "Hola, Soy Iron Man"', () => {
    //     const saludo = 'Hola, Soy Iron Man';
    //     const { getByText} = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText(saludo)).toBeInTheDocument();
    // })
    test('debe de mostrar el componenet <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola, Soy Iron Man';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper).toMatchSnapshot();
    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, Soy Iron Man';
        const subTitulo = 'Soy un subtitulo'
        const wrapper = shallow( 
        <PrimeraApp 
        saludo={ saludo } 
        subtitulo={ subTitulo }
        /> );
    })
    
    
    
})

```

hasta aqui, despues de agregar el codigo los test deben estar corriendo correctamente pero aun no se esta haciendo la validación del subtitulo.

El prop del subtitulo en el archivo **PrimeraApp.js** esta dentro de una etiqueta `<p>`, la constante wrapper tiene toda la información del html por lo que se podria ademas crear una constate que se llame textoParrafo y hacerla igual al wrapper, con el metodo .find dependiendo que se quiera buscar se coloca `'p'` para buscar un elemento html, en este caso la p es porque es etiqueta de parrafo, si fuera un titulo seria `'h1'`, `'.algo'` para buscar una clase, `'#algo'` para buscar el id de un elemento y ademas se añade la propiedad `.text()` para revisar que tiene esa etiqueta. Despues se hace un console.log de la constante para ver que esta trayendo en la consola

```
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {

    // test('Debe de mostrar el mensaje "Hola, Soy Iron Man"', () => {
    //     const saludo = 'Hola, Soy Iron Man';
    //     const { getByText} = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText(saludo)).toBeInTheDocument();
    // })
    test('debe de mostrar el componenet <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola, Soy Iron Man';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper).toMatchSnapshot();
    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, Soy Iron Man';
        const subTitulo = 'Soy un subtitulo'
        const wrapper = shallow( 
        <PrimeraApp 
        saludo={ saludo } 
        subtitulo={ subTitulo }
        /> );

        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo); 
    })
    
    
    
})

```

Como se puede observar en la terminar se imprime Soy un subtitulo, lo cual significa que se esta haciendo la busqueda del elemento correctamente

![assets-git/209.png](assets-git/209.png)

De esta forma podemos quitar el `console.log` y hacer el `expect` de que textoParrafo sea igual a subTitulo

```
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {

    // test('Debe de mostrar el mensaje "Hola, Soy Iron Man"', () => {
    //     const saludo = 'Hola, Soy Iron Man';
    //     const { getByText} = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText(saludo)).toBeInTheDocument();
    // })
    test('debe de mostrar el componenet <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola, Soy Iron Man';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper).toMatchSnapshot();
    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, Soy Iron Man';
        const subTitulo = 'Soy un subtitulo'
        const wrapper = shallow( 
        <PrimeraApp 
        saludo={ saludo } 
        subtitulo={ subTitulo }
        /> );

        const textoParrafo = wrapper.find('p').text();
        // console.log(textoParrafo); 

        expect( textoParrafo ).toBe( subTitulo );
    })
    
    
    
})

```

![assets-git/210.png](assets-git/210.png)


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Pruebas básicas del CounterApp

### Tarea

1. Crear las siguientes pruebas para el `<CounterApp />`
    
    - Debe de mostrar `<CounterApp />` correctamenter (hacer match con un snapshot) y sus valores por defecto

    - Debe de mostrar el valor por defecto de 100
    
    - Usar el `wrapper.find`, tomando el elemento html donde se muestra el valor del contador

Lo primero que se debe hacer es pasar a **index.js**, para que nuevamente renderice al componente  `CounterApp`

```
import React from 'react';
import ReactDom from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp'


const divRoot = document.querySelector('#root');

ReactDom.render( <CounterApp /> , divRoot );
// ReactDom.render( <PrimeraApp /> , divRoot );

```

Despues se debe crear el archivo en la carpeta **tests** nombrarlo como el original añadiendo `.test` es decir **CounterApp.test.js** y dentro de este se importan y se validan cado de los elementos pedidos

```
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {


    test('Debe de mostrar `<CounterApp />` correctamente (hacer match con un snapshot) y sus valores por defecto', () => {
        
        const wrapper = shallow( <CounterApp /> );

        expect( wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el valor por defecto de 100', () => {
    
        const counter = '100'
        const wrapper = shallow( 
        <CounterApp 
        /> );

        const textoParrafo = wrapper.find('p').text()
        // console.log(textoParrafo); 

        expect( textoParrafo ).toBe( counter );
    })
})
```

Las pruebas deben pasar satisfactoriamente, verificar el archivo que se genere en la carpeta **__snapshots__**

![assets-git/211.png](assets-git/211.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Simular eventos Click

Dentro de **CounterApp.test.js** se va a crear la prueba de que al dar un click sobre el boton `+1` este aumente y se crea el nuevo test

```
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {


    test('Debe de mostrar `<CounterApp />` correctamente (hacer match con un snapshot) y sus valores por defecto', () => {
        
        const wrapper = shallow( <CounterApp /> );

        expect( wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el valor por defecto de 100', () => {
    
        const counter = '100'
        const wrapper = shallow( 
        <CounterApp 
        /> );

        const textoParrafo = wrapper.find('p').text()
        // console.log(textoParrafo); 

        expect( textoParrafo ).toBe( counter );
    })

    test('debe de incrementar con el boton +1', () => {
        
    })
    
})

```

la constante wrapper se puede elevar a un nivel mas alto para que sea reutilizada en las funciones por tanto se cambia y luego se hace la busqueda del boton para esto se puede hacer una referencia crear una constante que se llame `btn1 = wrapper.find('button')` ahora con `.at(0)` se hace referencia al primer boton y con `.simulate('click')` para que cuando se haga un click el numero aumente

```
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

    const wrapper = shallow( <CounterApp /> );

    test('Debe de mostrar `<CounterApp />` correctamente (hacer match con un snapshot) y sus valores por defecto', () => {

        expect( wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el valor por defecto de 100', () => {
    
        const counter = '100'

        const textoParrafo = wrapper.find('p').text()
        // console.log(textoParrafo); 

        expect( textoParrafo ).toBe( counter );
    })

    test('debe de incrementar con el boton +1', () => {
        const btn1= wrapper.find('button').at(0).simulate('click');
        console.log(btn1.html());
    })
    
})

```

Luego de hacer el console.log verificamos la referencia del boton que es la constante y añadimos el `.html()` para ver que sea el boton que estamos buscando

![assets-git/212.png](assets-git/212.png)

despues se quita la referencia de `btn1` y se deja la funcion para que haga la busqueda del elemento donde se renderiza el aumento del numero y se busca el siguiente que tiene que renderizar, recordando que 100 es el numero por defecto por tanto el siguiente sera 101

```
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

    const wrapper = shallow( <CounterApp /> );

    test('Debe de mostrar `<CounterApp />` correctamente (hacer match con un snapshot) y sus valores por defecto', () => {

        expect( wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el valor por defecto de 100', () => {
    
        const counter = '100'

        const textoParrafo = wrapper.find('p').text()
        // console.log(textoParrafo); 

        expect( textoParrafo ).toBe( counter );
    })

    test('debe de incrementar con el boton +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const textoParrafo = wrapper.find('p').text()
        expect(textoParrafo).toBe('101');
    })
    
})

```

![assets-git/213.png](assets-git/213.png)

Ahora se puede hacer la prueba del boton -1, pero es clave e importante saber que la simulacion de la prueba ya hizo un primer click que aumento el numero a 101, por tanto el siguiente bloque de codigo si se quiere evaluar que disminuya se debe tener en cuenta el aumento y por tanto debe renderizar en el caso que haga en click al boton -1 que debe devolver el numero 100

```
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

    const wrapper = shallow( <CounterApp /> );

    test('Debe de mostrar `<CounterApp />` correctamente (hacer match con un snapshot) y sus valores por defecto', () => {

        expect( wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el valor por defecto de 100', () => {
    
        const counter = '100'

        const textoParrafo = wrapper.find('p').text()
        // console.log(textoParrafo); 

        expect( textoParrafo ).toBe( counter );
    })

    test('debe de incrementar con el boton +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const textoParrafo = wrapper.find('p').text()
        expect(textoParrafo).toBe('101');
    })

    test('debe de disminuir con el boton -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const textoParrafo = wrapper.find('p').text()
        expect(textoParrafo).toBe('100');
    })
    
})

```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Proyecto-GifExpertApp

La seccion de pruebas termino en el capitulo anterior y ahora se va a crear una aplicación que va a tener efectos de animación, busqueda y uso de Custom Hooks para hacer peticiciones a [Giphy API](https://developers.giphy.com/).

Por tanto abrir la terminal, alli abrir la ubicacion de donde se esten guardando los proyectos y ahora ejecutar `npx create-react-app 04-gif-expert-app`

![assets-git/215.png](assets-git/215.png)

Abrir el enlace de [Giphy API](https://developers.giphy.com/) y crear un API key si no se ha hecho, en caso de que no se haya creado esta, revisar los pasos para hacerlo en el capitulo de [FETCH API](https://github.com/jeyfredc/React---Curso-Udemy#Fetch-API)

Despues de hacer la instalación de la aplicacion moverse a la nueva carpeta creada **04-gif-expert-app** ejecutar `code .` para abrir el proyecto en vsCode y ejecutar `npm start` o `yarn start`

![assets-git/216.png](assets-git/216.png)


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## GifExpertApp-Component

Despues de haber lanzado la aplicación podemos empezar a borrar algunos archivos que no se requieren para el proyecto como **App.css**, **App.js**, **App.test.js**, **logo.svg**, **reportWebVitals.js**, despues abrimos **index.css** y limpiamos todo el archivo es decir lo dejamos vacio y guardamos los cambios y **index.js**, lo dejamos con la siguiente estructura porque tambien se modifica el archivo

```
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

```

Ahora dentro de la carpeta **src** creamos un componente el cual se va a llamar **GifExpertApp.js** que inicia con la siguiente estructura

```
import React from 'react'

const GiffExpertApp = () => {
    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr/>
        </div>
    )
}

export default GiffExpertApp
```

Regresamos a **index.js** y hacemos la importación para renderizar el componente en el navegador

```
import React from 'react';
import ReactDOM from 'react-dom';
import GiffExpertApp from './GiffExpertApp';

import './index.css';

ReactDOM.render(
    <GiffExpertApp />,
  document.getElementById('root')
);

```

Y se crea una pequeña modificación en **index.css** para estilizar la forma en como se va a ver el componente

```
* {
  font-family: Helvetica, Arial, sans-serif;
}

body{
  padding: 60px;
}

```

![assets-git/217.png](assets-git/217.png)

Y a continuación se de dejan 2 enlaces para leer sobre como es la estructura de archivos en React

[Estructura de directorios](https://es.reactjs.org/docs/faq-structure.html)

[Estructura, nombre de folders y componentes en React](https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76)



<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Creando una lista de categorias

Dentro del componente `GifExpertApp` vamos a crear una constante que se llame categories y esta va a tener una lista de serie de anime dentro de un arreglo

```
import React from 'react'

const GiffExpertApp = () => {

    const categories = ['One Punch', 'Samuari X', 'Dragon Ball'];
    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr/>
        </div>
    )
}

export default GiffExpertApp

```

Si quisiera renderizar estas categorias, existen varias formas de hacerlo, primero se haran de forma incorrecta para ir viendo como se comporta la aplicación y los cambios que se van a ir realizando

en el componente despues de la etiqueta `<hr>` entre corchetes se llama a la constante {categories},

pero este no seria un resultado esperado

![assets-git/218.png](assets-git/218.png)

Entonces se podria pensar en una etiqueta `<ol>` para mostrar de manera ordenada la lista y luego agregar etiquetas `<li>` llamando a cada elemento por posicion de esta forma

![assets-git/219.png](assets-git/219.png)

pero esto tampoco esta bien, existe otra forma de retornar estos elementos de una forma mas dinamica utilizando la funcion map, para esto entre llaves se debe llamar a la constante que contiene el arreglo y utilizar map, esta recibe 2 elementos, el primero hace referencia a los elementos que contiene el arreglo y el segundo a su indice.

Para utilizar esta funcion es necesario que se establezca una llave que es el `key` usualmente se comente el error de acceder al indice del elemento que en este caso se llamo como idx y este trae la posicion de cada uno, el `key` debe ser utilizado para traer al elemento que trae el arreglo directamente, aqui un ejemplo de como se ve

```
import React from 'react'

const GiffExpertApp = () => {

    const categories = ['One Punch', 'Samuari X', 'Dragon Ball'];
    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr/>

            <ol>
                {
                    categories.map( (category, idx) => {
                        return <li key={idx}>{idx} - {category} </li>
                    })
                }
            </ol>
        </div>
    )
}

export default GiffExpertApp

```

![assets-git/220.png](assets-git/220.png)

Pero ahora se modifica a como deberia quedar , en este caso no se requiere el indice por tanto se borra del argumento que se llamaba en la funcion map y se retornan los elementos a traves de la categoria

```
import React from 'react'

const GiffExpertApp = () => {

    const categories = ['One Punch', 'Samuari X', 'Dragon Ball'];
    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr/>

            <ol>
                {
                    categories.map( (category) => {
                        return <li key={category}>{category} </li>
                    })
                }
            </ol>
        </div>
    )
}

export default GiffExpertApp

```

![assets-git/221.png](assets-git/221.png)

Ahora crear la constante `categories` tambien esta mal porque se esta unando como constante y si se quisieran agregar mas elementos no se podria realizar, aqui es cuando se empieza a hacer uso de los Hooks, empezando por el useState, en el cual el estado puede contener el mismo arreglo que tenia `categories` con la diferencia que ahora hay un modificador que se llama `setCategories`

**Nota:** Recordar que para hacer uso del Hook se debe importar de React

```
import React, { useState } from 'react'

const GiffExpertApp = () => {

    // const categories = ['One Punch', 'Samuari X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch', 'Samuari X', 'Dragon Ball'])
    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr/>

            <ol>
                {
                    categories.map( (category) => {
                        return <li key={category}>{category} </li>
                    })
                }
            </ol>
        </div>
    )
}

export default GiffExpertApp

```

![assets-git/222.png](assets-git/222.png)

Ahora vamos a agregar una etiqueta boton que tenga el nombre Agregar y la funcionalidad sea empujar mas datos a la lista que se esta retornando de anime para eso se crea la funcion `handleAdd()`, pero antes de hacerlo si se abre la consola y se va a la pestaña **Components** vemos que ya se esta guardando un estado en el componente

![assets-git/223.png](assets-git/223.png)

Cuando creamos la función `handleAdd()`, lo primero que se debe de tener en cuenta es que vamos a hacer uso del modificador de estado el cual se llama `setCategories`, este lo debemos llamar dentro de la funcion `handleAdd()` y fijar que el estado es un arreglo, su caracteristica para ser un arreglo es que los elementos estan contenidos dentro de estos parentesis cuadrados `[]`, de esta misma forma se debe modificar el estado, donde tambien se debe llamar un arreglo `[]` y utilizando el operador spread que son los `...` hacemos una copia de categories y despues de este se añade el nuevo elemento que es `HunterXHunter`, esto es una prueba por lo que si se quiere agregar multiples veces `HunterXHunter` se puede hacer aunque tambien esta mal porque no debe existir duplicidad de elementos.

```
import React, { useState } from 'react'

const GiffExpertApp = () => {

    // const categories = ['One Punch', 'Samuari X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch', 'Samuari X', 'Dragon Ball'])

    const handleAdd = () => {
        setcategories(
            [...categories, 'HunterXHunter']
        )
    }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map( (category) => {
                        return <li key={category}>{category} </li>
                    })
                }
            </ol>
        </div>
    )
}

export default GiffExpertApp

```

![assets-git/224.png](assets-git/224.png)

tambien se puede verificar que el estado se este modificando, para eso nuevamente se abre la pestaña components.

![assets-git/225.png](assets-git/225.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Componente AddCategory

Ahora se va a crear un nuevo componente, el cual se va a encargar de tener una caja de texto y que al presionar enter agregue una categoria mas a la lista de categorias.

Dentro de la carpeta **src** crear una carpeta que se llame **components** y dentro de esta crear el componente **Addcategory.js** con el snipet **rafce** en vsCode, podemos obtener una estructura basica para empezar a adaptar el componente como queremos

```
import React from 'react'

const AddCategory = () => {
    return (
        <div>
            
        </div>
    )
}

export default AddCategory

```

y ahora lo modificamos con algo basico, quitamos los `<div>` para tener un Fragment por defecto y añadimos una etiqueta `<h2>Add Category</h2>`

```
import React from 'react'

const AddCategory = () => {
    return (
        <>
          <h2>Add Category</h2>  
        </>
    )
}

export default AddCategory

```

Ahora regresamos al componente `GiffExpert` y realizamos unas modificaciones e importamos al componente `AddCategory` despues de la etiqueta `<h2>`

```
import React, { useState } from 'react'
import AddCategory from './components/AddCategory'

const GiffExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch', 'Samuari X', 'Dragon Ball'])

    // const handleAdd = () => {
    //     setcategories(
    //         [...categories, 'HunterXHunter']
    //     )
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr/>

            <ol>
                {
                    categories.map( (category) => {
                        return <li key={category}>{category} </li>
                    })
                }
            </ol>
        </>
    )
}

export default GiffExpertApp
```

y ahora verificamos que el componente este renderizando correctamente0

![assets-git/226.png](assets-git/226.png)

Nuevamente nos dirigimos al componente `AddCategory` y alli añadimos un `<input />` para obtener una caja de texto 

```
import React from 'react'

const AddCategory = () => {
    return (
        <>
          <h2>Add Category</h2>  
          <input />
        </>
    )
}

export default AddCategory

```

y ahora modificamos **index.css** para dar estilo al input

```
* {
  font-family: Helvetica, Arial, sans-serif;
}

body {
  padding: 60px;
}

input {
  color: grey;
  font-size: 1.2rem;
  width: 100%;
}
```

Verificamos nuevamente, y escribimos cualquier cosa para ver que al escribir algo se escriba en color gris, la letra y el input tengan el tamaño adecuado.

![assets-git/228.png](assets-git/228.png)

Nuevamente regresamos al componente `AddCategory` y empezamos a añadir atributos.

El primero es el `type="text` que es lo que recibe el input.

Luego creamos un estado, el cual inicialmente lo traemos con un `'Hola Mundo'`

```
import React, { useState } from 'react'

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola Mundo')
    
    return (
        <>
          <h2>Add Category</h2>  
          <input 
          type="text"
          />
        </>
    )
}

export default AddCategory

```

Despues lo establecemos como un valor por defecto agregando el atributo value a la etiqueta `<input>` y llamando al estado con las llaves `{ inputValue }`

```
import React, { useState } from 'react'

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola Mundo')

    return (
        <>
          <h2>Add Category</h2>  
          <input 
          type="text"
          value={ inputValue }
          />
        </>
    )
}

export default AddCategory

```

Si verificamos el navegador, ya tendremos el valor por defecto, pero si intentamos, borrar o modificar ese valor en el campo de texto, no se va a poder realizar, ademas tambien verificamos que el estado del componente es Hola Mundo

![assets-git/227.png](assets-git/227.png)

Para poder modificar el estado tenemos que hacer uso del atributo `onChange` y en este llamar una funcion que modifique el estado, asi que creamos la funcion handleInputChange a la cual le pasamos un evento y con el modificador utilizamos el evento accediendo al modificador de esta forma `e.target.value`.

Este `e` o `event` se debe llamar de la misma forma, si en el callback de la funcion coloco `(event)` las propiedades se deben llamar de la misma forma `event.target.value`

```
import React, { useState } from 'react'

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola Mundo')

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value ); 
    }

    return (
        <>
          <h2>Add Category</h2>  
          <input 
          type="text"
          value={ inputValue }
          onChange={ handleInputChange }
          />
        </>
    )
}

export default AddCategory
```

En este caso ya se puede modificar el campo del texto y tambien se obtiene el cambio de estado

![assets-git/229.png](assets-git/229.png)

Ahora lo que se quiere es que se inserte el texto que coloquemos en el campo, para esto se puede crear una etiqueta `<form>` que va a contener al `<input>`, si se maneja de esta forma y el form agrupa a la etiqueta ya no es necesario el Fragment por defecto que se establece, asi que se quiere quitar de alli se puede hacer

```
import React, { useState } from 'react'

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola Mundo')

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value ); 
    }

    return (
        <form>
          <h2>Add Category</h2>  
          <input 
          type="text"
          value={ inputValue }
          onChange={ handleInputChange }
          />
        </form>
    )
}

export default AddCategory

```
Si prueban el navegador nuevamente al dar un enter despues de haber escrito algo en el campo de texto se recarga la pagina y esto no es algo que actualmente se use, por tanto se puede agregar a la etiqueta `<form>` el atributo `onSubmit` y crear una funcion llamada `handleSubmit` que tambien recibe un evento en su callback y para evitar que se recargue la pagina utilizamos `e.preventDefault()`, luego de esto podemos hacer un `console.log()` y escribir algo dentro de este para que cada vez que hagamos un enter, verifiquemos que se obtiene cada enter que hagamos sin recargar la pagina

```
import React, { useState } from 'react'

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola Mundo')

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value ); 
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        console.log('Submit hecho')
    }

    return (
        <form onSubmit={ handleSubmit }>
          <h2>Add Category</h2>  
          <input 
          type="text"
          value={ inputValue }
          onChange={ handleInputChange }
          />
        </form>
    )
}

export default AddCategory
```

![assets-git/230.png](assets-git/230.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Comunicación entre componentes

La instrucción para que se añada un elemento nuevo a la lista de series que tenemos es con setCategores donde se encuentra el componente `GifExpertApp`, pero lo que se quiere hacer es que al presionar enter sobre el campo de texto se añadan mas datos a la lista por tanto hay que hacer uso de este modificador y se tiene que mandar como un prop a `AddCategory`.

```
import React, { useState } from 'react'
import AddCategory from './components/AddCategory'

const GiffExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samuari X', 'Dragon Ball'])

    // const handleAdd = () => {
    //     setcategories(
    //         [...categories, 'HunterXHunter']
    //     )
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    categories.map( (category) => {
                        return <li key={category}>{category} </li>
                    })
                }
            </ol>
        </>
    )
}

export default GiffExpertApp

```

Si nos vamos a la pestaña **components** del navegador vemos que en los props ya se esta recibiendo a `setCategories`

![assets-git/231.png](assets-git/231.png)

A continuación lo que hay que hacer es ir al componente `AddCategory` y alli recibir el prop `setCategories` desestructurado, razon por la cual viene de esta forma `{setCategories}` y llamarlo tambien en la funcion `handleSubmit` que es la que esta realizando la función de enviar los datos del formulario al hacer submit.

Para tener acceso al estado anterior se debe definir un call back en la funcion que haga una copia del estado anterior y luego mandar como argumento a `inputValue` para que tome la referencia del valor y se pueda cambiar 

```
    const handleSubmit = ( e ) => {
        e.preventDefault();
        setCategories( categ => [...categ, inputValue]);
        // console.log('Submit hecho')
    }
```

```
import React, { useState } from 'react'

const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('Hola Mundo')

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value ); 
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        setCategories( categ => [...categ, inputValue]);
        // console.log('Submit hecho')
    }

    return (
        <form onSubmit={ handleSubmit }>
          <h2>Add Category</h2>  
          <input 
          type="text"
          value={ inputValue }
          onChange={ handleInputChange }
          />
        </form>
    )
}

export default AddCategory

```

Si nuevamente intentamos mandar algo a la lista de animes, ya vemos como recibe datos al presionar Enter

![assets-git/232.png](assets-git/232.png)

El error sale por duplicidad de datos, `Inuyasha` esta dos veces y ademas faltan hacer validaciones para que no se envie el dato vacio

La funcion para insertar se puede meter dentro de una validación y es `inputValue.trim()` la instruccion trim sirve para quitar espacios en blanco `.lengt` para que detecte toda la cadena de carecteres es mayor que 2 entonces envie los datos y ademas dentro de esta el modificador del campo `setInputValue` se envia vacio, con esto se garantiza que al enviar un dato el campo se limpie o este vacio y listo para insertar otro campo

```
import React, { useState } from 'react'

const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('Hola Mundo')

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value ); 
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if( inputValue.trim().length >2){
            setCategories( categ => [...categ, inputValue]);
            setInputValue('')
        }
        // console.log('Submit hecho')
    }

    return (
        <form onSubmit={ handleSubmit }>
          <h2>Add Category</h2>  
          <input 
          type="text"
          value={ inputValue }
          onChange={ handleInputChange }
          />
        </form>
    )
}

export default AddCategory

```

![assets-git/233.png](assets-git/233.png)

Ahora si se intenta insertar un campo vacio o 2 letras no va a pasar nada, la consola no muestra un error pero tampoco deja insertar cadena de caracteres menores a 3

Ahora se va a dejar obligatorio el propType para esto se debe hacer la importación de los `PropTypes` `import PropTypes from 'prop-types';` y como esta es una función se debe definir como una funcion, recordando que primero se llama el nombre del `componente.propTypes` y dentro de esta se hace referencia al prop y se declara como requerido

```
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
```
Por ultimo se cambia el estado `'Hola Mundo'` por un string vacio `''`.


```
import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value ); 
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if( inputValue.trim().length >2){
            setCategories( categ => [...categ, inputValue]);
            setInputValue('')
        }
        // console.log('Submit hecho')
    }

    return (
        <form onSubmit={ handleSubmit }>
          <h2>Add Category</h2>  
          <input 
          type="text"
          value={ inputValue }
          onChange={ handleInputChange }
          />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory

```

![assets-git/234.png](assets-git/234.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Fetch API-Obtener las imagenes deseadas

Ahora se va a crear un nuevo componente que cuando note que hay un nuevo elemento en la lista, realice la peticion y traiga las imagenes correspondientes a la categoria y se desplieguen en el navegador

Se realiza una pequeña modificación en el componente `GifExpertApp` y dejar un solo estado en la categoria, en mi caso voy a dejar `'Bleach'`

```
import React, { useState } from 'react'
import AddCategory from './components/AddCategory'

const GiffExpertApp = () => {

    const [categories, setCategories] = useState(['Bleach'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    categories.map( (category) => {
                        return <li key={category}>{category} </li>
                    })
                }
            </ol>
        </>
    )
}

export default GiffExpertApp
```

Ahora pasamos a crear el nuevo componente sobre la carpeta **components** el cual se llamara `GifGrid.js` y se crea la estructura basica. Recordar que se puede utilizar el snipet **rafc** o **rafce**

```
import React from 'react'

const GifGrid = () => {
    return (
        <div>
            
        </div>
    )
}

export default GifGrid

```

y ahora se pasa como prop desestructurado a `{category}` y crear un `<h3>{ category }</h3>`

```
import React from 'react'

const GifGrid = ( { category } ) => {
    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}

export default GifGrid

```

Hasta el momento no deberia ocurrir ningun cambio pero si a continuacion regresamos al componente `GiffExpertApp`, vamos a realizar un cambio, ya no se va a llamar una lista, en vez de eso se va a pasar el componente `<GidfGrid>` y a este se le va a pasar como prop a `category` y tambien `key` para traer el objeto correctamente

```
import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GiffExpertApp = () => {

    const [categories, setCategories] = useState(['Bleach'])

    // const handleAdd = () => {
    //     setcategories(
    //         [...categories, 'HunterXHunter']
    //     )
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                        key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GiffExpertApp

```

Lo que deberiamos tener en el navegador es el estado que se haya dejado por defecto, notar que al mandar el prop `category` desde antes se estaba recibiendo en el componente `GifGrid`, el cual se creo antes de mandar el prop. Para comprobarlo se puede abrir la pestaña **components** y notar que en el componente `GifGrid` aparecen los elementos que estamos enviando

![assets-git/235.png](assets-git/235.png)

A continuación abrir el programa PostMan y ir a la parte de la documentacion de **GIPHY Developers** y buscar la seccion **Search Endpoint**, el cual queda en el siguiente [enlace](https://developers.giphy.com/docs/api/endpoint/#search). 

El endpoint de search se debe copiar a postman

![assets-git/236.png](assets-git/236.png)

Al abrir postman dar click sobre el icono de +

![assets-git/237.png](assets-git/237.png)

y dejar en GET la url que copiamos y dar click en **send**, lo primero que va a aparecer en la parte de abajo es que el API Key no se encontro

![assets-git/238.png](assets-git/238.png)

Ahora se deben mandar los parametros para el api_key que se hacen en los argumentos que aparecen abajo en postman

![assets-git/239.png](assets-git/239.png)

Solo esta regresando la data, pero nada mas porque no se esta buscando nada, pero si a continuacion en la columna **KEY** se manda q que significa `query` esto se indica en la documentación y en la columna **VALUE** la serie que vamos a buscar,  consulta trae varios elementos

![assets-git/240.png](assets-git/240.png)

y a continuación en la columna **KEY** agregamos un limit y en la columna **VALUE** 10 para traer solo 10 imagenes de esta

![assets-git/241.png](assets-git/241.png)

Ahora copiamos la url que proporciono postman y en el componente `GifGird` creamos una funcion llamada getGifs y dentro de la funcion creamos una constante url que va a contener la url que copiamos de postman

```
import React from 'react'

const GifGrid = ( { category } ) => {

    const getGifs = () => {

        const url='api.giphy.com/v1/gifs/search?api_key=soVdva8bjB8shZXmy18BLAE5wCSgYZZv&q=Bleach&limit=10'
    }

    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}

export default GifGrid

```

a la url hay que agregarle `htpps://`

```
import React from 'react'

const GifGrid = ( { category } ) => {

    const getGifs = () => {

        const url='https://api.giphy.com/v1/gifs/search?api_key=soVdva8bjB8shZXmy18BLAE5wCSgYZZv&q=Bleach&limit=10'
    }

    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}

export default GifGrid

```
Ahora se debe convertir la funcion `getGifs` en una funcion `async` y hacer `fetch` de la `url` pero se debe meter dentro de una respuesta `resp` y agregar `await` para esperar la promesa, despues se debe obtener la data que debe ser tranforma a la respuesta en formato json y hacer un console.log de la data para verificar que se esten haciendo las peticiones correctamente y posteriormente llamar la funcion para que retorne la data

```
import React from 'react'

const GifGrid = ( { category } ) => {

    const getGifs = async() => {

        const url='https://api.giphy.com/v1/gifs/search?api_key=soVdva8bjB8shZXmy18BLAE5wCSgYZZv&q=Bleach&limit=10'
        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data);
    }

    getGifs();

    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}

export default GifGrid
```

![assets-git/242.png](assets-git/242.png)

Mucha de la información que trae la data no es necesaria, entonces se puede desestructurar `{ data }` para obtener los 10 elementos que interesan

```
import React from 'react'

const GifGrid = ( { category } ) => {

    const getGifs = async() => {

        const url='https://api.giphy.com/v1/gifs/search?api_key=soVdva8bjB8shZXmy18BLAE5wCSgYZZv&q=Bleach&limit=10'
        const resp = await fetch(url);
        const { data } = await resp.json();

        console.log(data);
    }

    getGifs();

    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}

export default GifGrid

```

Como se puede observar a continuacion los 10 elementos tambien traen mas información como el id, title, y cualquiera de las imagenes para obtener  la url

![assets-git/243.png](assets-git/243.png)

Para poder renderizar estas imagenes se debe crear una constante que llamaremos gifs y a traves de esta se hace un `.map` de la `data` para obtener cada una de las imagenes y el `return` retorna un nuevo objeto con los datos que interesan el call back se nombra como `img` y este es el que va a traer cada uno de los datos a traves de un objeto, despues se debe cambiar el `console.log` de `data` por `gifs`

```
import React from 'react'

const GifGrid = ( { category } ) => {

    const getGifs = async() => {

        const url='https://api.giphy.com/v1/gifs/search?api_key=soVdva8bjB8shZXmy18BLAE5wCSgYZZv&q=Bleach&limit=10'
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            }
        })

        console.log(gifs);
    }

    getGifs();

    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}

export default GifGrid
```

y como resultado obtenemos dicha informacion en la consola

![assets-git/244.png](assets-git/244.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## useEffect

antes de hacer que el useEffect funcione correctamente, primero se va hacer una prueba para entender que pasa con el codigo del componente para esto creamos un estado y un contador que inicia en 0 y un boton en la parte del render que llama al incremento del contador de esta forma

```
import React, { useState } from 'react'

const GifGrid = ( { category } ) => {

    const [count, setCount] = useState(0);

    const getGifs = async() => {

        const url='https://api.giphy.com/v1/gifs/search?api_key=soVdva8bjB8shZXmy18BLAE5wCSgYZZv&q=Bleach&limit=10'
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            }
        })

        console.log(gifs);
    }

    getGifs();

    return (
        <>
            <h3>{ category }</h3>
            <h4>{ count }</h4>
            <button onClick={ ()=> {setCount( count +1) } } >Aumenta</button>
        </>
    )
}

export default GifGrid

```

Como resultado se obtiene el contador mas el boton

![assets-git/245.png](assets-git/245.png)

Pero se debe notar que cada vez que se hace un click sobre el boton `Aumenta` la peticion que se realiza con `getGifs();` se hace nuevamente, entonces cada vez que hacemos click sobre el boton vuelve y se dispara la peticion

![assets-git/246.png](assets-git/246.png)

Para solucionar esto, podemos hacer uso de useEffect de esta forma, comentamos o quitamos la linea 24, importamos useEffect, el cual recibe un call back y llama a la funcion `getGifs();`

```
import React, { useEffect, useState } from 'react'

const GifGrid = ( { category } ) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        getGifs();
    })

    const getGifs = async() => {

        const url='https://api.giphy.com/v1/gifs/search?api_key=soVdva8bjB8shZXmy18BLAE5wCSgYZZv&q=Bleach&limit=10'
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            }
        })

        console.log(gifs);
    }

    // getGifs();

    return (
        <>
            <h3>{ category }</h3>
            <h4>{ count }</h4>
            <button onClick={ ()=> {setCount( count +1) } } >Aumenta</button>
        </>
    )
}

export default GifGrid
```

pero si nuevamente hacemos click sobre el boton aumenta, ocurre lo mismo

![assets-git/247.png](assets-git/247.png)

useEffect recibe un segundo argumento despues del corchete que cierra y recibe un arreglo de dependencias

```
    useEffect(() => {
    }, [])
```

Si se agrega este argumento al useEffect se indica que no se esta recibiendo ninguna dependencia y solamente se va a disparar una sola vez la peticion

```
import React, { useEffect, useState } from 'react'

const GifGrid = ( { category } ) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {

        const url='https://api.giphy.com/v1/gifs/search?api_key=soVdva8bjB8shZXmy18BLAE5wCSgYZZv&q=Bleach&limit=10'
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            }
        })

        console.log(gifs);
    }

    // getGifs();

    return (
        <>
            <h3>{ category }</h3>
            <h4>{ count }</h4>
            <button onClick={ ()=> {setCount( count +1) } } >Aumenta</button>
        </>
    )
}

export default GifGrid
```

nuevamente se hace un click sobre el boton Aumenta 10 veces y vemos que no se disparan las peticiones repetidas veces

![assets-git/248.png](assets-git/248.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Mostrar los títulos de las imagenes

Ahora habiendo entendido y utilizado useEffect, en el componente `GifGrid`, es momento de quitar el `count` y el `setCount` y ahora crear un estado para obtener las imagenes en una lista, pero antes de obtenerlas en una lista, las vemos en el estado a traves del modificador `setImages`

```
import React, { useEffect, useState } from 'react'

const GifGrid = ( { category } ) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {

        const url='https://api.giphy.com/v1/gifs/search?api_key=soVdva8bjB8shZXmy18BLAE5wCSgYZZv&q=Bleach&limit=10'
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            }
        })

        console.log(gifs);
        setImages( gifs );
    }

    // getGifs();

    return (
        <>
            <h3>{ category }</h3>
            <ol>
                <li>item</li>
            </ol>
        </>
    )
}

export default GifGrid

```

Si revisamos el estado en el navegador, obtenemos cada una de las imagenes

![assets-git/249.png](assets-git/249.png)

Ahora lo que debemos hacer es obtener estas en los items para esto debemos usar la funcion `map` y buscar el campo que retorna el titulo de las imagenes

```
import React, { useEffect, useState } from 'react'

const GifGrid = ( { category } ) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {

        const url='https://api.giphy.com/v1/gifs/search?api_key=soVdva8bjB8shZXmy18BLAE5wCSgYZZv&q=Bleach&limit=10'
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            }
        })

        console.log(gifs);
        setImages( gifs );
    }

    // getGifs();

    return (
        <>
            <h3>{ category }</h3>
            <ol>
                {
                    images.map(img => (
                        <li key={img.id}>{img.title}</li>
                        ))
                    }
                
            </ol>
        </>
    )
}

export default GifGrid

```

![assets-git/250.png](assets-git/250.png)

Otra forma de obtener los datos para no tener que utilizar img, seria desestructurando los datos en la funcion y solo agrego los campos que necesito, que en este caso son el `id` y el `title`, el resultado es el mismo obtenido anteriormente 

![assets-git/251.png](assets-git/251.png)

Ahora a continuacón pasaremos las imagenes a un nuevo componente el cual se llamara **GiFGridItem.js** que sera creado dentro de la carpeta **components**, nuevamente con la estructura basica, para eso utilizamos el snipet **rafce**

```
import React from 'react'

const GifGridItem = () => {
    return (
        <div>
            
        </div>
    )
}

export default GifGridItem

```

En este componente vamos a recibir propiedades que vengan desde  el componente `GifGrid`, asi que pasamos a modificarlo tambien y en vez de hacer una lista le pasamos el nuevo componente, recordando que anteriormente se hizo una funcion map, para recorrerlo y volvemos la desestructuracion a su estado inicial, por lo cual pasamos los argumentos del key y mandamos propiedades como el `img`

```
import React, { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem';

const GifGrid = ( { category } ) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {

        const url='https://api.giphy.com/v1/gifs/search?api_key=soVdva8bjB8shZXmy18BLAE5wCSgYZZv&q=Bleach&limit=10'
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            }
        })

        console.log(gifs);
        setImages( gifs );
    }

    // getGifs();

    return (
        <>
            <h3>{ category }</h3>
            
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            img={ img }
                        />
                        ))
                    }
        </>
    )
}

export default GifGrid

```

Si queremos ver que trae por consola, abrimos el componente `GifGridItem` y alli hacemos un `console.log` a las propiedades que estamos pasando,

```
import React from 'react'

const GifGridItem = ( props ) => {

    console.log(props.img)

    return (
        <div>
            
        </div>
    )
}

export default GifGridItem

```

En la consola estamos recibiendo el objeto que se esperaba con las 10 imagenes y los campos que esperamos, id, title y url.

![assets-git/252.png](assets-git/252.png)

Regresando al componente GifGrid en vez de mandar el argumento img como se estaba haciendo se puede utilizar el operador de spread `...` con `img`, esto permite que cuando llamen los props en el otro componente pueda hacer desestructuracion

```
import React, { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem';

const GifGrid = ( { category } ) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {

        const url='https://api.giphy.com/v1/gifs/search?api_key=soVdva8bjB8shZXmy18BLAE5wCSgYZZv&q=Bleach&limit=10'
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            }
        })

        console.log(gifs);
        setImages( gifs );
    }

    // getGifs();

    return (
        <>
            <h3>{ category }</h3>
            
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            {...img}
                        />
                        ))
                    }
        </>
    )
}

export default GifGrid

```

Si hacemos la desestructuracion en `GifGridItem`, los podemos llamar directamente por las propiedades

```
import React from 'react'

const GifGridItem = ( {id, title, url} ) => {

    console.log({id, title, url})

    return (
        <div>
            
        </div>
    )
}

export default GifGridItem

```

![assets-git/253.png](assets-git/253.png)

Despues de obtener estas propiedades, ahora es posible llamarlas y renderizarlas, para eso agregamos una etiqueta de imagen que reciba la url y un titulo que son los campos obtenidos a traves de la petición

```
import React from 'react'

const GifGridItem = ( {id, title, url} ) => {

    console.log({id, title, url})

    return (
        <div>
            <p> { title } </p>
            <img src={ url} alt={title}/>
        </div>
    )
}

export default GifGridItem

```

![assets-git/254.png](assets-git/254.png)


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## className-Clases de css

Los atributos en un html sencillo para renderizar estilos css siempre se reciben como `class`, JavaScript actualmente utiliza la palabra reservada `class` por lo que en React se decidio utilizar la palabra reservada `className` para traer los estilos css, es por esto que es normal encontrar en los componentes esta palabra, ahora para ver el ejemplo, abrimos el archivo **index.css** donde empezaremos a crear unos estilos sencillos para los componentes que hemos creado hasta el momento

```
* {
  font-family: Helvetica, Arial, sans-serif;
}

body {
  padding: 60px;
}

input {
  color: grey;
  font-size: 1.2rem;
  width: 100%;
}

.card-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.card {
  align-content: center;
  border: 1px solid gray;
  border-radius: 6px;
  margin-bottom: 10px;
  margin-right: 10px;
  overflow: hidden;
}

.card p {
  padding: 5px;
  text-align: center;
}

.card img{
  max-height: 170px;
}
```

Ahora hay que hacer el llamado de estilos en los componentes `.card-grid` lo llamaremos en el componente `GifGrid`

```
import React, { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem';

const GifGrid = ( { category } ) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {

        const url='https://api.giphy.com/v1/gifs/search?api_key=soVdva8bjB8shZXmy18BLAE5wCSgYZZv&q=Bleach&limit=10'
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            }
        })

        console.log(gifs);
        setImages( gifs );
    }

    // getGifs();

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            {...img}
                        />
                        ))
                    }
            </div>
            
        </>
    )
}

export default GifGrid

```

en el componente `GifGirdItem` agregamos el `className="card"`

```
import React from 'react'

const GifGridItem = ( {id, title, url} ) => {

    console.log({id, title, url})

    return (
        <div className="card">
            <p> { title } </p>
            <img src={ url} alt={title}/>
        </div>
    )
}

export default GifGridItem

```

De esta forma se obtiene un poco mas de estilo en el navegador

![assets-git/255.png](assets-git/255.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Helpers-getGifs

Actualmente el `category` que se llama como un prop en el componente  `GifGrid` no se esta usando, alli esta la funcion `getGifs` y donde esta la url se esta llamando una categoria en especifico, la mia es `Bleach`, la cual se encuentra en la parte de la constante url `const url='https://api.giphy.com/v1/gifs/search?api_key=soVdva8bjB8shZXmy18BLAE5wCSgYZZv&q=Bleach&limit=10` casi finzalizando esta, si esa palabra la reemplazamos por category podemos hacer cualquier consulta en el campo que creamos para mandar las categorias, lo unico que hay que hacer es cambiarlo por backticks para insertar alli variables

`const url=`https://api.giphy.com/v1/gifs/search?api_key=soVdva8bjB8shZXmy18BLAE5wCSgYZZv&q=${ encodeURI( category )}&limit=10``

**Nota:** `encodeURI()` ayuda a que no tengamos errores, como espacios % y demas que vienen en la url

Para mostrar mejor el ejemplo abrir el componente AddCategory y en la linea 16 llamar el argumento inputValue, antes que category de esta forma

`setCategories( categ => [inputValue, ...categ]);`

guardar cambios y ahora escribir cualquier categoria que queramos traer, por ejemplo `Dragon Ball`, el cambio se debera mostrar inmediatamente y debajo de estos, las imagenes que en un principio obtuvimos

![assets-git/256.png](assets-git/256.png)

La función `getGifs` no es tan necesaria en el componente `GifGrid` por tal razón ahora dentro de la carpeta **src** se va a crear alli otra carpeta llamada **helpers** donde alli estaran las funciones que hacen un trabajo en especifico , dentro de esta vamos a crear un archivo igual a como se llama la funcion **getGifs.js** porque a continuación la función que estaba en el componente la vamos a trasladar al nuevo archivo y le vamos hacer una pequeña modificación.

**Nota:** Respecto a la función original, es decir cuando se encontraba en el componente, a esta no se le pasaba el parametro `category` y al final se establecia un `setImages(gifs)` este ya no existe en este nuevo documento por tanto se debe pasar al componente y realizar unos ajustes, ademas es de tener en cuenta que como es una función `async` retorna una promesa y se debe retornar como tal en el componente

```
export const getGifs = async(category) => {

        const url=`https://api.giphy.com/v1/gifs/search?api_key=soVdva8bjB8shZXmy18BLAE5wCSgYZZv&q=${ encodeURI( category )}&limit=10`
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            }
        })

        return gifs;
    }
```

Ahora modifiquemos el componente `GifGrid`, aqui se debe asegurar la importación del nuevo helper `getGifs` y aqui es donde se debe retornar la promesa con un `.then` y alli establecer el `setImages`

```
import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ( { category } ) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs(category)
        .then(setImages)
    }, [category])

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            {...img}
                        />
                        ))
                    }
            </div>
            
        </>
    )
}

export default GifGrid

```

Nuevamente probar el codigo pasando otras imagenes que se quieran traer al navegador

![assets-git/257.png](assets-git/257.png)


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Custom Hook

A continuación se va a realizar una introducción a los Custom Hooks, que no son nada mas que otro tipo de funciones como los **functional components** y vamos a empezar a comentar todo el codigo que habiamos hecho en el componente `GifGrid` para demtostrar como funcionan estos Custom Hooks, el archivo por el momento va a quedar de esta forma

```
import React, { useEffect, useState } from 'react'
// import { getGifs } from '../helpers/getGifs';
// import GifGridItem from './GifGridItem';

const GifGrid = ( { category } ) => {

    const [images, setImages] = useState([])

    // useEffect(() => {
    //     getGifs(category)
    //     .then(setImages)
    // }, [category])

    return (
        <>
            <h3>{ category }</h3>
{/*             <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            {...img}
                        />
                        ))
                    }
            </div> */}
            
        </>
    )
}

export default GifGrid
```

Como resultado vamos a obtener esto, con unas advertencias en el navegador

![assets-git/258.png](assets-git/258.png)

Ahora empezaremos por crear el primer Custom Hook de ejemplo, para esto vamos a crear dentro de la carpeta **src** otra carpeta llamada **hooks** y dentro de esta el archivo **useFetchGifs.js**

**Nota:** Recordar que todo Hook empieza por la palabra `use`

y alli vamos a crear la estructura basica de un componente normal utilizando el snipet `rafc`

```
import React from 'react'

const useFetchGifs = () => {
    return (
        <div>
            
        </div>
    )
}

export default useFetchGifs

```

y ahora pasamos a modificar este nuevo archivo al cual le crearemos un estado que guarda un objeto que contiene `data` y `loading`

```
import React, { useState } from 'react'

const useFetchGifs = () => {

    const [state, setstate] = useState({
        data: [],
        loading: true,
    })


    return state;
}

export default useFetchGifs;

```

Ahora pasamos al componente `GifGrid` y alli importamos el nuevo Hook nombrandolo en una constante llamada `state` a la cual seguido le hacemos un `console.log`

```
import React, { useEffect, useState } from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
// import GifGridItem from './GifGridItem';

const GifGrid = ( { category } ) => {

    // const [images, setImages] = useState([])
    const state = useFetchGifs();

    console.log(state);

    // useEffect(() => {
    //     getGifs(category)
    //     .then(setImages)
    // }, [category])

    return (
        <>
            <h3>{ category }</h3>
{/*             <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            {...img}
                        />
                        ))
                    }
            </div> */}
            
        </>
    )
}

export default GifGrid

```

y miramos que esta trayendo en el navegador que deberia ser como tal el objeto

![assets-git/259.png](assets-git/259.png)

Tambien podemnos usar la desestructuración para traer los datos directamente 

![assets-git/260.png](assets-git/260.png)

y ahora debajo del return de la etiqueta `<h3>{ category }</h3>` establecemos un if ternario.

Si loading esta en true va a mostrar el mensaje **Cargando...** de lo contrario **Data cargada**

```
import React, { useEffect, useState } from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
// import GifGridItem from './GifGridItem';

const GifGrid = ( { category } ) => {

    // const [images, setImages] = useState([])
    const { data, loading } = useFetchGifs();

    console.log(data, loading);

    // useEffect(() => {
    //     getGifs(category)
    //     .then(setImages)
    // }, [category])

    return (
        <>
            <h3>{ category }</h3>

            { loading ? 'Cargando...' : 'Data Cargada' }
{/*             <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            {...img}
                        />
                        ))
                    }
            </div> */}
            
        </>
    )
}

export default GifGrid

```

Por el momento vemos esto en el navegador

![assets-git/261.png](assets-git/261.png)

Ahora pasamos de nuevo al Hook `useFetchGifs` y alli vamos a agregar una funcion `setTimeOut` que lo que va a hacer es mostrar la data y luego al ponerse en `false` va a retornar **Data cargada**

```
import React, { useState } from 'react'

const useFetchGifs = () => {

    const [state, setstate] = useState({
        data: [],
        loading: true,
    })

    setTimeout( () => {
        setstate({
            data: [1,2,3,4,5,6],
            loading: false
        })
    },10000);

    return state;
}

export default useFetchGifs;
```

![assets-git/262.png](assets-git/262.png)

![assets-git/263.png](assets-git/263.png)


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## useFetchGifs Obtener imágenes y bandera de carga

Ahora vamos a modificar el Hook `useFetchGifs`, primero debemos eliminar el `setTimeOut` que se habia hecho para probar como funcionaba el **Custom Hook** y nuevamente hacemos el uso de `useEffect` donde alli importaremos el helper `getGifs` y dentro del `.then `estableceremos el modificador de estado del Hook, a la data le vamos a pasar la `data` de las imagenes y el `loading` nuevamente lo dejamos en `false`

**Nota:** A `useFetchGifs` tambien debemos pasarle el `category` porque no se esta recibiendo en ningun lado

```
import React, { useEffect, useState } from 'react'
import getGifs from '../helpers/getGifs'

const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true,
    })

    useEffect( () => {

        getGifs( category )
        .then(imgs =>{
            setstate({
                data : imgs,
                loading: false
            })
        })
    }, [category])

    return state;
}

export default useFetchGifs;

```

y si se quiere mejorar tambien se puede meter dentro de una funcion `setTimeOut`

```
import React from 'react'
import {getGifs} from '../helpers/getGifs'

const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true,
    })

    useEffect( () => {

        getGifs( category )
            .then(imgs =>{
                setTimeout(()=>{
                    setstate({
                    data : imgs,
                    loading: false
                    });
                },3000);
            })
        }, [category])


    return state;
}

export default useFetchGifs;

```

Si guardamos y revisamos el navegador deberia traer esto

![assets-git/265.png](assets-git/265.png)

Entonces ahora debemos pasar al componente `GifGrid` y empezar a modificar para poder traer las imagenes.

En la desestructuracion de `useFetchGifs` nuevamente pasamos los datos y tambien en los argumentos de la funcion mandamos a `category`

Luego se quitan los comentarios del `return` y en vez de pasar images se cambia por la `data` en el `map` del renderizado ya que esto es lo que se esta recibiendo

```
import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ( { category } ) => {

    const { data:images , loading } = useFetchGifs( category );


    return (
        <>
            <h3>{ category }</h3>

            { loading && 'Cargando...' }
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            {...img}
                        />
                        ))
                    }
            </div>
            
        </>
    )
}

export default GifGrid


```

Si se quiere pasar `images` en vez de `data` en la desestructuracion de `data` se puede agregar `:` y poner a `images`, de esta forma en vez de llamar a `data.map` en el return nuevamente se llama a `images.map` como se estaba haciendo desde un principio

```
import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ( { category } ) => {

    const { data:images , loading } = useFetchGifs( category );


    return (
        <>
            <h3>{ category }</h3>

            { loading && 'Cargando...' }
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            {...img}
                        />
                        ))
                    }
            </div>
            
        </>
    )
}

export default GifGrid
```

![assets-git/266.png](assets-git/266.png)


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Desplegando aplicación en Github Pages

Para empezar debemos verificar que todo este corriendo sin errores tanto en consola como en la terminal, asi que rapidamente ejecutamos `npm start` o `yarn start` en el proyectom, si todo esta correcto deberia salir en la terminal una pantalla como la siguiente, despues de esto tumbar el servidor con `ctrl+C`

![assets-git/267.png](assets-git/267.png)

y a continuación ejecutar `npm run buil` o `yarn build`, esto lo que va a hacer, es crear una nueva carpeta llamada **build** que contiene varios archivos del proyecto

![assets-git/268.png](assets-git/268.png)

Como tal esta es la estructura

![assets-git/269.png](assets-git/269.png)

Ahora si ya cuentan con Github en la computadora en la terminal deben ejecutar 

`git --version`

Esto debe imprimir una version de git, si no, se debe instalar, la pagina esta al inicio de la documentación.

despues de esto se debe hacer configuración para subir el deply a producción.

Primero ejecutar `git config --global user.name"nombre de usuario"`

Segundo ejecutar `git config --global user.email"correo electronico"`

**ejemplo**

`git config --global user.name"pepito.manrique"`

`git config --global user.email"pepito123@gmail.com"`

Ahora en la carpeta del proyecto que se esta trabajando es decir **04-gif-expert-app** ejecutar `git init`

![assets-git/270.png](assets-git/270.png)

ejecutamos `git add .` para guardar todos los archivos de esta carpeta y luego `git commit -m"Respaldo para generar deploy"`

![assets-git/271.png](assets-git/271.png)

Ahora la carpeta que quedo con el nombre de **build**, cambiarlo y reemplazarlo por **docs**

![assets-git/272.png](assets-git/272.png)

Como se ejecuto un cambio ahora nuevamente ejecutar 

`git add .` para guardar todos los archivos de esta carpeta y luego `git commit -m"docs agregado"`

Ahora abrir [Github](https://github.com/login), si no hay una cuenta creada, crearla y despues de esto dirigirse al boton **+** y dar en la opción **New repository**

![assets-git/273.png](assets-git/273.png)

Alli se debe nombrar el repositorio, se puede colocar el nombre que se prefiera y luego dar en la opcion **Create repository**

![assets-git/274.png](assets-git/274.png)

Ahora copiar la parte que indica push en un repositorio existente y pegarlo en la terminal

![assets-git/275.png](assets-git/275.png)

![assets-git/276.png](assets-git/276.png)

al dar enter en la ultima opción debe salir una parte para agregar el usuario y contraseña en Github.

Despues recargar la pagina y debe aparecer un listado como de carpetas como el siguiente

![assets-git/277.png](assets-git/277.png)

Ahora para desplegar debemos dirigirnos a la opción de **Settings** en Github y empezar a buscar hasta encontrar la opcion de **GitHub Pages** y selecccionar la rama **master** 

![assets-git/278.png](assets-git/278.png)

luego, seleccionar **docs** y dar click en el boton **save**

![assets-git/279.png](assets-git/279.png)

Despues de guardar debemos regresar a la parte de **GitHub Pages** y verificar que aparezca la pagina, y la sección debe estar en un color verde, a veces tarda en aparecer, se puede volver a recargar la pagina en caso de que no, y despues seleccionar el enlace que aparece alli

![assets-git/280.png](assets-git/280.png)

Esto va abrir la pagina pero va a estar en blanco si abrimos la consola va a mostrar varios errores que indican que no encuentra algunos archivos que sirven la pagina 

![assets-git/281.png](assets-git/281.png)

Entonces regresamos a **VsCode** y en la carpeta **docs**, buscamos el arvhico **index.html** y hacemos unas pequeñas modificaciones, si el codigo html se muestra en una linea, presionamos `ctrl+shift+i` para que se organice el documento y se hacen pequeños cambios, que tiene que ver con las rutas que buscan los archivos en las partes del `href`, los cambios quedan por lo siguiente

```
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <link rel="icon" href="./favicon.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <link rel="apple-touch-icon" href="./logo192.png" />
    <link rel="manifest" href="./manifest.json" />
    <title>Gif Expert App</title>
    <link href="./static/css/main.7bb06f03.chunk.css" rel="stylesheet">
</head>

<body><noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script>!function (e) { function r(r) { for (var n, p, f = r[0], i = r[1], l = r[2], c = 0, s = []; c < f.length; c++)p = f[c], Object.prototype.hasOwnProperty.call(o, p) && o[p] && s.push(o[p][0]), o[p] = 0; for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]); for (a && a(r); s.length;)s.shift()(); return u.push.apply(u, l || []), t() } function t() { for (var e, r = 0; r < u.length; r++) { for (var t = u[r], n = !0, f = 1; f < t.length; f++) { var i = t[f]; 0 !== o[i] && (n = !1) } n && (u.splice(r--, 1), e = p(p.s = t[0])) } return e } var n = {}, o = { 1: 0 }, u = []; function p(r) { if (n[r]) return n[r].exports; var t = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(t.exports, t, t.exports, p), t.l = !0, t.exports } p.m = e, p.c = n, p.d = function (e, r, t) { p.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t }) }, p.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, p.t = function (e, r) { if (1 & r && (e = p(e)), 8 & r) return e; if (4 & r && "object" == typeof e && e && e.__esModule) return e; var t = Object.create(null); if (p.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e) for (var n in e) p.d(t, n, function (r) { return e[r] }.bind(null, n)); return t }, p.n = function (e) { var r = e && e.__esModule ? function () { return e.default } : function () { return e }; return p.d(r, "a", r), r }, p.o = function (e, r) { return Object.prototype.hasOwnProperty.call(e, r) }, p.p = "/"; var f = this["webpackJsonp04-gif-expert-app"] = this["webpackJsonp04-gif-expert-app"] || [], i = f.push.bind(f); f.push = r, f = f.slice(); for (var l = 0; l < f.length; l++)r(f[l]); var a = i; t() }([])</script>
    <script src="./static/js/2.07314731.chunk.js"></script>
    <script src="./static/js/main.6d81630d.chunk.js"></script>
</body>

</html>
```

se guardan cambios, nuevamente se ejecuta en la terminal 

`git add .`

`git commit-m"index.html actualizado"`

`git push`

regresamos nuevamente, debemos verificar que en la parte de **Github Pages** aparezca el chulo y la seccion en color verde y seleccionar nuevamente la url, a veces se demora en cargar la pagina entre 1 a 5 minutos y ya por ultimo queda el despliegue de la aplicación

![assets-git/282.png](assets-git/282.png)

![assets-git/283.png](assets-git/283.png)

Pueden visitarla en la siguiente url [https://jeyfredc.github.io/gifexpertapp/](https://jeyfredc.github.io/gifexpertapp/)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

___

# Profundizando Hooks

## Inicio de proyecto Hooks

Lo primero que vamos a hacer es abrir la carpeta raiz de todos los proyectos en la terminal y ejecutar los comandos para crear aplicación.

ejecutar:

`npx create-react-app 05-hooks-app`

`cd 05-hooks-app/`

`code .`

Al abrir **VsCode**

Buscar la carpeta **src** del proyecto y eliminar los siguientes archivos

**App.css, App.js, App.test.js, logo.svg, reportWbVitals.js, setupTests.js**

Ahora dentro de **src** crear un nuevo archivo que se llame **HookApp.js** y ejecutar el snipet **rafc** para crear la estructura basica del componente y le agregamos una etiqueta `<h1>Hola Mundo</h1>`

```
import React from 'react'

export const HookApp = () => {
    return (
        <div>
            <h1>Hola Mundo</h1>
        </div>
    )
}

```

Buscamos el archivo **index.js**, lo adaptamos como lo necesitamos para este proyecto, se hace la importación del componente `HookApp`

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HookApp } from './HookApp';

ReactDOM.render(
    <HookApp />,
  document.getElementById('root')
);
```

Ahora visitamos la pagina de [Bootstrap](https://getbootstrap.com/), damos click en **Get Started** y copiamos el cdn del CSS

`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">`

Regresamos al proyecto, abrimos la carpeta **public**, luego el archivo **index.html**, limpiamos comentarios y antes del titulo copiamos el link y renombramos el titulo como `Hooks App`

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    
    <title>Hooks App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

Regresamos a la terminal y ejecutamos `npm start` o `yarn start`

![assets-git/284.png](assets-git/284.png)

y ya tenemnos la aplicación funcionando

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## useState

Dentro de la carpeta **src**, creamos otra carpeta que se llame **components** y dentro de esta una carpeta mas que se llame **01-useState**, creamos un archivo llamado **CounterApp.js** y generamos su estructura basica añadiendo un `h1` y un boton con clase Bootstrap

```
import React from 'react'

export const CounterApp = () => {
    return (
        <>
            <h1>Counter { 0 }</h1>
            <hr/>

            <button className="btn btn-primary">
                +1
            </button>
        </>
    )
}

```

Luego dentro de la carpeta **01-useState** crear un archivo llamado **counter.css** que contiene un padding

```
body {
    padding: 70px;
}
```
El css se debe importar en el `CounterApp`

```
import React from 'react'
import './couter.css'

export const CounterApp = () => {
    return (
        <>
            <h1>Counter { 0 }</h1>
            <hr/>

            <button className="btn btn-primary">
                +1
            </button>
        </>
    )
}
```
y `CounterApp` se debe importar en **index.js**

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { HookApp } from './HookApp';
import { CounterApp } from './components/01-useState/CounterApp';

ReactDOM.render(
    <CounterApp />,
  document.getElementById('root')
);
```

Realizado este cambio esta es la imagen que debemos obtener en el navegador

![assets-git/285.png](assets-git/285.png)

Ahora en el componente `CounterApp` pasamos a realizar el uso de useState

```
import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

    const [counter, setCounter] = useState(10)
    return (
        <>
            <h1>Counter { counter }</h1>
            <hr/>

            <button 
            className="btn btn-primary"
            onClick={() => setCounter(counter+1)}>
                +1
            </button>
        </>
    )
}

```

De tal manera que si se hace un click sobre el boton `+1`, el contador va a empezar a aumentar y modificar el estado 

![assets-git/286.png](assets-git/286.png)

Pero ahora este contador se puede modificar y en vez de inicializar el contador con un 10 lo hacemos con un objeto 

```
{
    counter1: 10,
    counter2: 20,
}
```

```
import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20
    })
    return (
        <>
            <h1>Counter { counter }</h1>
            <hr/>

            <button 
            className="btn btn-primary"
            onClick={() => setCounter(counter+1)}>
                +1
            </button>
        </>
    )
}

```
pero al realizar esto se obliga a modificar la estructura del documento, es decir que hay que modificar la parte de la estructura del html agregando una etiqueta mas de tipo `<h1></h1>` y comentando el `setCounter` ya que ahora lo que se va a modificar es un objeto

```
import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
    })
    return (
        <>
            <h1>Counter { counter.counter1 }</h1>
            <h1>Counter { counter.counter2 }</h1>

            <hr/>

            <button 
            className="btn btn-primary"
            /* onClick={() => setCounter(counter+1)} */>
                +1
            </button>
        </>
    )
}

```

![assets-git/287.png](assets-git/287.png)

Otra forma de acceder al contenido del objeto para no utilizar `counter.counter1` es desestructurando el objeto en el estado y de esta manera se obtiene el mismo resultado de la imagen

```
import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

    const [{counter1, counter2}, setCounter] = useState({
        counter1: 10,
        counter2: 20,
    })
    return (
        <>
            <h1>Counter { counter1 }</h1>
            <h1>Counter { counter2 }</h1>

            <hr/>

            <button 
            className="btn btn-primary"
            /* onClick={() => setCounter(counter+1)} */>
                +1
            </button>
        </>
    )
}

```

![assets-git/287.png](assets-git/287.png)

Ahora hay que pasar a modificar el estado, se quiere que el `counter1` cambie de numero pero el `counter2` permanezca en 20, existen varias formas de hacer esto, la primera es la siguiente, donde se crea una funcion `aumentaNumero` y se llama en el boton

```
import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

    const [{counter1, counter2}, setCounter] = useState({
        counter1: 10,
        counter2: 20,
    })

    const aumentaNumero = () => {
        setCounter({
            counter1: counter1 + 1,
            counter2: counter2,
        })
    }


    return (
        <>
            <h1>Counter { counter1 }</h1>
            <h1>Counter { counter2 }</h1>

            <hr/>

            <button 
            className="btn btn-primary"
            onClick={aumentaNumero}>
                +1
            </button>
        </>
    )
}

```

![assets-git/288.png](assets-git/288.png)

otra forma de modificar el estado es realizando el aumento sobre el `onClick` del boton, es decir se hace directamente

```
import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

    const [{counter1, counter2}, setCounter] = useState({
        counter1: 10,
        counter2: 20,
    })

    return (
        <>
            <h1>Counter { counter1 }</h1>
            <h1>Counter { counter2 }</h1>

            <hr/>

            <button 
            className="btn btn-primary"
            onClick={()=> { 
                setCounter({
                counter1: counter1 +1,
                counter2: counter2,
            });
            }}>
                +1
            </button>
        </>
    )
}

```

otra forma de modificar el estado es regresando todo sin desestructurar y añadir mas counter, lo unico que cambia es que ahora desestructuro lo que voy a utilizar y en el `onClick` ahora utilizo el operador spread `...` para hacer una copia del estado inicial, de esta forma solo se va a modificar lo que yo establezca

```
import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
        counter5: 50,
        counter6: 60,

    })

    const { counter1, counter2} = counter;

    return (
        <>
            <h1>Counter { counter1 }</h1>
            <h1>Counter { counter2 }</h1>

            <hr/>

            <button 
            className="btn btn-primary"
            onClick={()=> { 
                setCounter({
                ...counter,
                counter1: counter1 + 1,
            });
            }}>
                +1
            </button>
        </>
    )
}

```

En este caso solo se modifico a `counter1`

![assets-git/289.png](assets-git/289.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## useCounter

A continuación dentro de la carpeta **src** creamos el componente **CounterWithCustomHook.js**, escribimos el snipet **rafc** y generamos la estructura basica

```
import React from 'react'

export const CountterWithCustomHook = () => {
    return (
        <div>
            
        </div>
    )
}

```

Ahora generamos algo parecido al anterior capitulo pero ahora van a existir varios botones que seria el boton +1,-1 y el reset con algunas clases de bootstrap

```
import React from 'react'

export const CountterWithCustomHook = () => {
    return (
        <>
          <h1> Counter with Hook: { 0 } </h1>
          <hr/>

          <button className="btn btn-success m-3"> +1 </button>

          <button className="btn btn-primary m-3"> Reset </button>  

          <button className="btn btn-danger m-3"> -1 </button>  

        </>
    )
}

```

y lo importamos en **iindex.js** para verificar que se este renderizando correctamente con el **counter.css** para poder obtener una mejor vista

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/01-useState/counter.css'
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
import { CountterWithCustomHook } from './components/01-useState/CountterWithCustomHook';

ReactDOM.render(
    <CountterWithCustomHook />,
  document.getElementById('root')
);

```

![assets-git/290.png](assets-git/290.png)

Ahora vamos a pasar a la carpeta **src** y dentro de esta crear una carpeta llamada **hooks** y dentro de este crear un hook llamado **useCounter.js**,recordando que todos los hooks empiezan por la palabra **use**, generamos primero una estructura basica con el snipet **rafc** pero nos deshacemos de lo que no se requiere usar para este Hook, que seria el render

```
import React from 'react'

export const useCounter = () => {
    return (

    )
}
```

Y ahora se hace uso de useState, solo utilizamos lo que requerimos en el `return` ademas de devolver elementos html tambien podemos devolver objetos o arreglos, en este caso seran objetos y creamos cada una de las funciones que nos serviran para exportar y utilizar en el componente `CounterWithCustomHook`

```
import { useState } from 'react'

export const useCounter = ( initialState = 10 ) => {

    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        setCounter( counter + 1);
    }

    const reset = () => {
        setCounter(initialState);
    }

    const decrement = () => {
        setCounter( counter -1 );
    }
    return {
        counter,
        increment,
        reset,
        decrement,
    }
}
```

Ahora en el componente `CounterWithCustomHook` hacemos la importación de los elementos de forma desestructurada, como se declaro un `inicialState` con valor 10, este va a aparecer por defecto, al dejar el argumento de `useCounter()` vacio


```
import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = ( ) => {

  const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
          <h1> Counter with Hook: { counter } </h1>
          <hr/>

          <button className="btn btn-success m-3"> +1 </button>

          <button className="btn btn-primary m-3"> Reset </button>  

          <button className="btn btn-danger m-3"> -1 </button>  

        </>
    )
}

```

![assets-git/291.png](assets-git/291.png)

Ahora solo resta añadir cada una de las funciones al `onClick` de cada boton

```
import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = ( ) => {

  const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
          <h1> Counter with Hook: { counter } </h1>
          <hr/>

          <button 
          className="btn btn-success m-3"
          onClick={increment}
          >
             +1 
          </button>

          <button 
          className="btn btn-primary m-3"
          onClick={reset}
          >
             Reset 
          </button>  

          <button 
          className="btn btn-danger m-3"
          onClick={decrement}
          >
             -1 
          </button>  

        </>
    )
}

```

![assets-git/292.png](assets-git/292.png)

Tambien se podrian mandar argumentos a cada funcion, en este caso a `increment` y a `decrement` para que aumenten o disminuyan de 3 en 3, para esto regresamos al Hook `useCounter` y en los argumentos de cada funcion le pasamos dentro de los argumentos el factor

```
import { useState } from 'react'

export const useCounter = ( initialState = 10 ) => {

    const [counter, setCounter] = useState(initialState);

    const increment = ( factor = 1) => {
        setCounter( counter + factor);
    }

    const reset = () => {
        setCounter(initialState);
    }

    const decrement = ( factor = 1) => {
        setCounter( counter -factor );
    }
    return {
        counter,
        increment,
        reset,
        decrement,
    }
}

```

y en el componente `CounterWithCustomHook` declaramos un `initialState` en 100 y en los argumentos de cada funcion 3

```
import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = ( ) => {

  const { counter, increment, decrement, reset } = useCounter(100);

    return (
        <>
          <h1> Counter with Hook: { counter } </h1>
          <hr/>

          <button 
          className="btn btn-success m-3"
          onClick={() => increment(3)}
          >
             +3
          </button>

          <button 
          className="btn btn-primary m-3"
          onClick={reset}
          >
             Reset 
          </button>  

          <button 
          className="btn btn-danger m-3"
          onClick={() => decrement(3)}
          >
             -3
          </button>  

        </>
    )
}

```

![assets-git/293.png](assets-git/293.png)


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## useEffect-SimpleForm

Dentro de la carpeta components ahora vamos a crear una nueva carpeta que se va a llamar **02-useEffect** y dentro de esta un componente llamado **SimpleForm.js** usamos el snipet **rafc** para crear la estructura basica y ahora empezamos a modificar porque este componente sera un formulario

```
import React from 'react'

export const SimpleForm = () => {
    return (
        <>
            <h1>useEffect</h1>
            <hr/>
        </>
    )
}

```

Luego lo importamos en **index.js** y probamos que este renderizando de forma correcta

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/01-useState/counter.css'
import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';

ReactDOM.render(
    <SimpleForm />,
  document.getElementById('root')
);

```

![assets-git/294.png](assets-git/294.png)

**useEffect** es un Hook que va a permitir ejecutar algun efecto secundario cuando algo suceda en nuestros componentes 

Lo primero que hay que hacer es darle forma al componente creando un estado y la base para establecer el formulario, el estado inicial va a ser un objeto que recibe a los campos `name` e `email`, que vamos a desestructurar para no tener que usar `formState.name` o `formState.email`, se utilizan clases de Bootstrap y se establecen propiedades del formulario que son muy importantes cuando se van a trabajar, como lo es el atributo `name` y el atributo `value` no significa que los otros atributos no sean importantes pero para formularios es indispensable contar con estos 

```
import React, { useState } from 'react'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
    })

    const {name, email} = formState;

    return (

        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value= {name}
                />
            </div>

            <div className="form-group">
                <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value= {email}
                />
            </div>
            
        </>
    )
}

```

por el momento obtenemos esto, pero si intentamos modificar estado, imprimir en la pestaña Console o Components del navegador no vamos a obtener ningun resultado

![assets-git/295.png](assets-git/295.png)

Es necesario llamar al evento `onChange` el cual llama a una función que la nombramos como `handleInputChange` esta recibe un evento que lo pasamos en el argumento como `e` y luego hacemos un console.log de `e.target`

```
import React, { useState } from 'react'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
    })

    const {name, email} = formState;

    const handleInputChange = (e) => {
        console.log(e.target)
    }

    return (

        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value= {name}
                onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value= {email}
                />
            </div>
            
        </>
    )
}
```

De tal forma que al escribir cualquier cosa sobre los campos de nombre e email, se va a disparar el evento `onChange` y por el momento se va a obtener la etiqueta input en la consola

![assets-git/296.png](assets-git/296.png)

Ahora si establezco un console.log de `e.target.name` y `e.target.value`

```
    const handleInputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
    }
```
no se modifica nada sobre los campos pero en la consola obtengo el input que es estoy modificando con su valor que en este caso es `"alberto"`

![assets-git/297.png](assets-git/297.png)

para poder obtener el valor del input entonces debo establecer el modificador que es `setFormState`, para no utilizar al evento que se nombro como `(e)`, tambien puedo hacer uso de la desestructuración y obtener directamente a `target`, luego de esto en el modificador debo establecer al objeto llamando cada propiedad, en este caso en name y el value y hago una copia del estado por si alguno de los valores no obtiene un cambio aun

```
import React, { useState } from 'react'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
    })

    const {name, email} = formState;

    const handleInputChange = ({target}) => {
        
        setFormState({
            ...formState,
            [target.name]: [target.value]
        })
        
    }

    return (

        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value= {name}
                onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value= {email}
                />
            </div>
            
        </>
    )
}

```
Ahora el estado ya esta recibiendo el valor del campo que se establece 

![assets-git/298.png](assets-git/298.png)

Ahora vamos a establecer un `useEffect` que va a dispara la palabra `Me dispare`

```
import React, { useEffect, useState } from 'react'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
    })

    const {name, email} = formState;

    useEffect( () => {
        console.log('Me dispare');
    })

    const handleInputChange = ({target}) => {
        
        setFormState({
            ...formState,
            [target.name]: [target.value]
        })
        
    }

    return (

        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value= {name}
                onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value= {email}
                />
            </div>
            
        </>
    )
}

```

Hay una primer vez que se dispara el efecto que es cuando se carga el componente, pero en cuanto empiezo a escribir letra por letra en el campo se dispara mas veces el `useEffect`, esto puede ser controlado como se prefiera, si agrego los parentesis cuadrados `[]`, esto solo permite que se dispare una sola vez, que es cuando se carga el componente

```
    useEffect( () => {
        console.log('Me dispare');
    }, [])

```

![assets-git/299.png](assets-git/299.png)

La recomendación de React, es que los efectos se deben trabajar de manera individual, si me interesa escuchar una dependencia en particular, debo establecerla entre los parentesis cuadrados `[]` , para esto en el input del email agregamos el evento `onChange` la cual recibe la misma función y hacemos uso de useEffect en otras lineas donde solo hagamos el efecto del campo email

```
    useEffect( () => {
        console.log('Recibi el campo email');
    }, [ email ])
```

```
import React, { useEffect, useState } from 'react'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
    })

    const {name, email} = formState;

    useEffect( () => {
        console.log('Me dispare');
    }, [])

    useEffect( () => {
        console.log('Recibi el campo email');
    }, [ email ])

    const handleInputChange = ({target}) => {
        
        setFormState({
            ...formState,
            [target.name]: [target.value]
        })
        
    }

    return (

        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value= {name}
                onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value= {email}
                onChange={ handleInputChange }
                />
            </div>
            
        </>
    )
}

```

De esta manera solo se recibe un primer efecto que es cuando se carga el componente y los otros efectos cuando modifico el campo de email

![assets-git/300.png](assets-git/300.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## useEffect unmount-Cleanup

Hasta el momento no ha sido utilizado el snipet de useEffect, el cual viene con esta construcción

```
    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])
```

Donde effect, es el efecto que se recibe, y cleanup, el efecto que indica un efecto de salida, input, es la dependencia,

Para ver mas claro este ejemplo vamos a crear dentro de la carpeta **02-useEffect** al componente **Message.js** y generamos la estructura basica pero añadimos un `useEffect` con el snipet

```
import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('Componente recibido');
        
        return () => {
            console.log('Componente Saliendo');
        }
    }, [])

    return (
        
        <div>
            <h3>Eres genial!!!</h3>
        </div>
    )
}
```

Ahora pasamos al componente `SimpleForm`  y lo importamos pero vamos a añadir una condicion debajo de los campos input, cuando el input `name` reciba `123` se va a mostrar el componente de lo contrario no lo va a mostrar y adicional comentamos los console.log del capitulo anterior

```
import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
    })

    const {name, email} = formState;

    useEffect( () => {
        // console.log('Me dispare');
    }, [])

    useEffect( () => {
        // console.log('Recibi el campo email');
    }, [ email ])

    const handleInputChange = ({target}) => {
        
        setFormState({
            ...formState,
            [target.name]: [target.value]
        })
        
    }

    return (

        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value= {name}
                onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value= {email}
                onChange={ handleInputChange }
                />
            </div>

            {(name == '123') && <Message />}
            
        </>
    )
}
```

**Nota:** si vamos a la pestaña components del navegador, notaremos que debajo del `State` hay 2 `Effect`, estos hacen referencia a los `useEffect` que estan en SimpleForm y son llamados en el orden que se establecen en el componente

![assets-git/301.png](assets-git/301.png)

Ahora para hacer la prueba en el campo `Tu nombre` escribimos 123 y estamos pendientes de la consola hasta que salga `Componente recibido`

![assets-git/302.png](assets-git/302.png)

Si escribimos un numero de mas o menos se debera disparar el otro efecto que es lanzar por consola `Componente Saliendo`

![assets-git/303.png](assets-git/303.png)


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## useEffect Precauciones

para este ejemplo se va a crear en el componente `Message` un oyente del movimiento del mouse y sus coordenadas a traves de `window.addEventListener()`, las condiciones seguiran siendo las mismas cuando escriba sobre el input 123 el evento se debe disparar y por la consola debemos obtener las coordenadas de este

```
import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        
        window.addEventListener('mousemove', (e) => {
            console.log(e);
        })
        
        return () => {
            console.log('Componente Saliendo');
        }
    }, [])

    return (

        <div>
            <h3>Eres genial!!!</h3>
        </div>
    )
}

```

Nuevamente se hace la prueba y atentos a la consola, con tan solo mover un poco el mouse, lo mas minimo, se va a disparar el evento

![assets-git/304.png](assets-git/304.png)

Cuando se escribe otro numero de mas o menos, se muetra en la consola Componente Saliendo pero el evento aun se sigue disparando

![assets-git/305.png](assets-git/305.png)

Ahora cambiamos un poco el ehercicio y obtenemos las coordenadas directamente a traves de un objeto, creamos una constante coords, y el evento queda a la escucha de las coordenas `x` y `y` y luego imprimimos la constante en consola

```
import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        
        window.addEventListener('mousemove', (e) => {
            const coords = {
                x: e.x,
                y: e.y,
            }
            console.log(coords);
        })
        
        return () => {
            console.log('Componente Saliendo');
        }
    }, [])

    return (

        <div>
            <h3>Eres genial!!!</h3>
        </div>
    )
}
```

Nuevamente escribimos 123 y se dispara el evento, movemos el mouse un poco y ya tenemos los valores de las coordenas en `x` y `y`

![assets-git/306.png](assets-git/306.png)

Cuando se escribe otro numero de mas o menos, se muetra en la consola Componente Saliendo pero el evento aun se sigue disparando nuevamente, es decir no se ha corregido y no ha salido del evento

![assets-git/307.png](assets-git/307.png)

Ahora vamos a utilizar la limpieza del mismo a traves de un removeEventListener, pero vamos a separar el evento mouseMove en una constante
 
```
import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {

        const mouseMove = (e) => {

            const coords = {
                x: e.x,
                y: e.y,
            }
            console.log(coords);
        }
        
        window.addEventListener('mousemove', mouseMove);
        
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (

        <div>
            <h3>Eres genial!!!</h3>
        </div>
    )
}

```

Ahora nuevamente escribo 123, muevo el mouse y disparo el evento

![assets-git/308.png](assets-git/308.png)

Si escribo un numero de mas o menos, desaparece el efecto, es por esta razón que deben existir precauciones a la hora de hacer uso de `useEffect`

![assets-git/309.png](assets-git/309.png)

Si se quiere ahora se pueden agregar al estado esas coordenadas, ya estando seguros que no se ejecuta ningun proceso por debajo, se pueden quitar los `console.log` y extraer las coordenas en un objeto

```
import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({
        x:0,
        y:0,
    })

    const {x, y} = coords;

    useEffect(() => {

        const mouseMove = (e) => {

            const coords = {
                x: e.x,
                y: e.y,
            }
            setCoords(coords);
            // console.log(coords);
            // console.log('Iniciando Componente');
        }
        
        window.addEventListener('mousemove', mouseMove);
        
        return () => {
            window.removeEventListener('mousemove', mouseMove);
            // console.log('Saliendo del Componente');

        }
    }, [])

    return (

        <div>
            <h1> x: {x}</h1>
            <h1> y: {y}</h1>
            <h3>Eres genial!!!</h3>
        </div>
    )
}

```

Nuevamente probamos escribimos 123 aparecen las coordenadas del mouse, escribimos otro numero de mas o menos y desaparecen 

![assets-git/310.png](assets-git/310.png)

![assets-git/311.png](assets-git/311.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Formulario con custom Hook

Vamos a crear un nuevo componente en la carpeta **02-useEffect**, va a tener una estructura parecida a la del componente de `SimpleForm` por lo que es mejor copiarlo diractemente de aca. Este nuevo componente se llamara **FormWithCustomHook.js**

```
import React, { useState } from 'react'

export const FormWithCustomHook = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
    })

    const {name, email, password } = formState;

    const handleInputChange = ({target}) => {
        
        setFormState({
            ...formState,
            [target.name]: [target.value]
        })
        
    }
    return (

        <>
            <h1>FormWithCustomHook</h1>
            <hr/>

            <div className="form-group">
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value= {name}
                onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value= {email}
                onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                type="password"
                name="password"
                className="form-control"
                placeholder="****"
                autoComplete="off"
                value= {password}
                onChange={ handleInputChange }
                />
            </div>
            
        </>
    )
}
```

y ahora lo importamos en **index.js**

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/01-useState/counter.css'
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';

ReactDOM.render(
    <FormWithCustomHook />,
  document.getElementById('root')
);

```

Verificamos que trae el navegador y no deberiamos tener algun error por el momento, verificamos la pestaña components y revisamos que el estado de los 3 campos los este trayendo

![assets-git/312.png](assets-git/312.png)

Ahora vamos a crear un custom Hook que permita manejar el `handleInpuChange` desde un Hook y asi limpiar mas el codigo, de esta forma si se llegara a crear otro componente que tiene formulario, solo se reutiliza el Hook.

Dentro de la carpeta **hooks**, creamos el archivo **useForm.js** y usamos el snipet **rafc** pero dejamos lo que necesitamos, en este caso solo es esta parte

```


export const useForm = () => {

}

```

Y ahora le creamos un estado llamado `values`, utilizamos la misma funcion `handleInputChange` en el Hook, e inicializamos el estado con un objeto vacio y luego retornamos la funcion y el estado

```
import { useState } from "react"


export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState(initialState)

    const handleInputChange = ({target}) => {
        
        setValues({
            ...values,
            [target.name]: target.value
        })    
    }
    
return [values, handleInputChange];
}

```

Ahora cambiamos el `useState` por `useForm` en el componente `FormWithCustomHook` asegurandonos que esta importando bien el `useForm` y ahora llamamos a los dos valores que se retornan que seria `values` y `handleInputChange`, aunque se pueden llamar de cualquier forma, de resto, se sigue manejando todo igual

```
import React from 'react'
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [values, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    })

    const {name, email, password } = values;

    return (

        <>
            <h1>FormWithCustomHook</h1>
            <hr/>

            <div className="form-group">
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value= {name}
                onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value= {email}
                onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                type="password"
                name="password"
                className="form-control"
                placeholder="****"
                autoComplete="off"
                value= {password}
                onChange={ handleInputChange }
                />
            </div>
            
        </>
    )
}

```

De esta manera no notamos ningun cambio en la forma de renderizar el componente y el codigo queda mucho mas legible

**Nota:** En la pestaña components el estado empieza a aparecer dentro de Hooks

![assets-git/313.png](assets-git/313.png)

Ahora se maneja el posteo del formulario para eso en vez de traer a Fragment, lo cambiamos por un `form`, le añadimos el evento `onSubmit` y creamos un boton que envie los valores de cada campo a la consola, el evento `handleSubmit` debe recibir el estado el cual nombramos como `values` para poder mostrarlo en consola

```
import React from 'react'
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [values, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }

    const {name, email, password } = values;

    return (

        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr/>

            <div className="form-group">
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value= {name}
                onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value= {email}
                onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                type="password"
                name="password"
                className="form-control"
                placeholder="****"
                autoComplete="off"
                value= {password}
                onChange={ handleInputChange }
                />
            </div>

            <button 
            className="btn btn-success"
            type="submit">
                Enviar
            </button>
            
        </form>
    )
}

```

![assets-git/314.png](assets-git/314.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## useFetch CustomHook

A continuación se va a crear un Hook para crear peticiones de tipo get a cualquier url el cual se va a llamar **useFetch.js** y debemos crearlo dentro de la carpeta **hooks** y como siempre generamos la estructura basica

```
export const useFetch = () => {

}

```

Ahora vamos a crear un componente donde vamos a llamar al hook, asi que en la carpeta **components** creamos una carpeta que se llame **03-examples** y dentro de esta un componente que se llamara **MultipleCustomHooks.js**

```
import React from 'react'

export const MultipleCustomHooks = () => {
    return (
        <div>
            <h1>Custom Hooks!!!</h1>
        </div>
    )
}
```

Lo importamos en **index.js** y verificamos que se este cargando

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/01-useState/counter.css'
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';

ReactDOM.render(
    <MultipleCustomHooks />,
  document.getElementById('root')
);

```
![assets-git/315.png](assets-git/315.png)

Vamos hacer uso de la API de [brakingBad](https://breakingbadapi.com/), la cual es una API que sirve para traer frases de la serie, alli debemos hacer click sobre la Documentacion y buscamos en la parte de la introduccion una parte llamada **Base URL**, copiamos la url que alli salga y abrimos postman y la pegamos

![assets-git/316.png](assets-git/316.png)

Regresamos a la documentacion y buscamos la parte que dice **Get quote by id**

![assets-git/317.png](assets-git/317.png)

y lugo copiamos el endpoint, que es `quotes/1` y lo pegamos en postman seguido de la palabra api y le damos click en send, esto debe traer las frases segun el numero que enviemos

![assets-git/319.png](assets-git/319.png)

Ahora vamos a copiar la url que dejamos en postman y vamos a empezar a trabajar sobre el hook `useFetch`

Alli creamos un estado que va a recibir la `data` en nulo, `loading` en `true` y el `error` en nulo y el hook debe recibir la url que mande el usuario 

```
import { useState } from "react"


export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data : null,
        loading : true,
        error: null,
    })

}
```

Ahora establecemos un `useEffect`, que va a ejecutarse cada vez que la url cambie dentro de `useEffect` se hace el `fetch` a la url y como recibe una promesa se agrega `.then` donde se extrae la respuesta y se convierte a `json`, eso recibe otra promesa por tanto se hace un segundo `.then` que recibe la `data`. Una vez se tiene la `data` se llama al modificador `setState` y se establece la `data` que es la misma que se recibe del endpoint, el `loading` debe estar en `false` porque se supone que la `data` ya cargo y el `error` debe ser nulo y en este caso solo se retorna al `state`


```
import { useEffect, useState } from "react"


export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data : null,
        loading : true,
        error: null,
    })

    useEffect( () => {
        
        fetch(url)
            .then( resp => resp.json())
            .then( data => {

                setState({
                    data,
                    loading: false,
                    error: null,
                })
            })
    }, [url])

    return state;

}

```

Ahora regresamos al componente `MultipleCustomHooks` e importamos al hook `useFetch` alli recordemos que se recibe la url, alli es donde debemos pegar la url que copiamos de postman entre backticks **` `** y `useFetch` recibe un estado por tanto se hace un `console.log` de ese `state` para ver que información se esta trayendo por consola

```
import React from 'react'
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const state =useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    console.log(state);
    return (
        <div>
            <h1>Custom Hooks!!!</h1>
        </div>
    )
}

```

El primer estado esta en nulo, el cual es que que se dispara con `useEffect` cuando se renderiza por primera vez el componente y el segundo estado es cuando se obtiene la data de la url y se dispara una sola vez

![assets-git/320.png](assets-git/320.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## useFetch + useCounter

En este capitulo vamos a extraer información de la data que nos retorna la imagen anterior y presentarla en el navegador, para esto vamos a modificar el componente `MultipleCustomHooks` para agregar una barra de cargando y la forma para citar al autor cuando se empiecen a traer las frases de la API, y queda asi 

```
import React from "react";
import { useFetch } from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
  console.log(state);
  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />
      <div className="alert alert-info text-center">Loading...</div>
      <blockquote className="blockquote text-right">
        <p className="mb-2"> Hola Mundo</p>
        <footer className="blockquote-footer"> Jeyfred C.</footer>
      </blockquote>
    </div>
  );
};
```

![assets-git/321.png](assets-git/321.png)

Ahora vamos a comentar el `console.log(state)` y extraemos el loading que por el momento es la parte mas facil de extraer y lo presentamos en la consola
```
  const {loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    console.log(loading);
//   console.log(state);
```
De esta forma vemos que primero esta en true cuando esta cargando y luego pasa a false cuando ya ha cargado la data 

![assets-git/322.png](assets-git/322.png)

Ahora lo que hacemos es un if ternario que indica que si loading esta cargando la imagen `Loading...`, de lo contrario, solo va a mostrar la cita, este seria el primer paso 

```
import React from "react";
import { useFetch } from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const {loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    console.log(loading);
//   console.log(state);
  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

    {
        loading
        ? 
        (

        )       
        :
        (

        )
    }
      <div className="alert alert-info text-center">Loading...</div>

      <blockquote className="blockquote text-right">
        <p className="mb-2"> Hola Mundo</p>
        <footer className="blockquote-footer"> Jeyfred C.</footer>
      </blockquote>
    </div>
  );
};

```

y este el segundo paso 

```
import React from "react";
import { useFetch } from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const {loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    console.log(loading);
//   console.log(state);
  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

    {
        loading
        ? 
            (
                <div className="alert alert-info text-center">Loading...</div>
            )
        :
            (
                <blockquote className="blockquote text-right">
                    <p className="mb-2"> Hola Mundo</p>
                    <footer className="blockquote-footer"> Jeyfred C.</footer>
                </blockquote>
            )
    }
    </div>
  );
};

```

Por unos minutos se debe ver que este el `loading...` es decir que este cargando la `data` mientras este en `true` en la consola y cuando este en `false` debe desaparecer y solo mostrar la cita

![assets-git/323.png](assets-git/323.png)

![assets-git/324.png](assets-git/324.png)

Ahora hacemos un `console.log` de la `data`

```
import React from "react";
import { useFetch } from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const {loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    console.log(data);

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

    {
        loading
        ? 
            (
                <div className="alert alert-info text-center">Loading...</div>
            )
        :
            (
                <blockquote className="blockquote text-right">
                    <p className="mb-2"> Hola Mundo</p>
                    <footer className="blockquote-footer"> Jeyfred C.</footer>
                </blockquote>
            )
    }
    </div>
  );
};
```

y al igual que loading la primer `data` que se trae es nula y despues aparece la `data`

![assets-git/325.png](assets-git/325.png)

Ahora la `data` la debemos convertir a un valor `false` para esto se debe hacer una validación que la veremos en consola

El primer caso es si paso un valor `null`, regresa `null`

El segundo caso es que si se niega a `null` es decir regresa `true`, entonces regresa `'Hola Mundo'` porque esta en `true`

El tercer caso es la doble negacion de `null` es decir que regresa `false`

![assets-git/326.png](assets-git/326.png)

En la validación se debe pasar el `null` a falso para que entonces retorne la `data`

Significa que si existe la `data` entonces extraiga la posicion 0 de la data `const { author, quote} = !!data && data[0];`

```
import React from "react";
import { useFetch } from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const {loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    // console.log(data);

    const { author, quote} = !!data && data[0];

    console.log(author, quote)

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

    {
        loading
        ? 
            (
                <div className="alert alert-info text-center">Loading...</div>
            )
        :
            (
                <blockquote className="blockquote text-right">
                    <p className="mb-2"> Hola Mundo</p>
                    <footer className="blockquote-footer"> Jeyfred C.</footer>
                </blockquote>
            )
    }
    </div>
  );
};
```

![assets-git/327.png](assets-git/327.png)

Pot ultimo se reemplaza `{quote}` por `Hola Mundo` y `{author}` por `Jeyfred C.`

```
import React from "react";
import { useFetch } from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const {loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    // console.log(data);

    const { author, quote} = !!data && data[0];

    // console.log(author, quote)

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

    {
        loading
        ? 
            (
                <div className="alert alert-info text-center">Loading...</div>
            )
        :
            (
                <blockquote className="blockquote text-right">
                    <p className="mb-2"> { quote }</p>
                    <footer className="blockquote-footer"> { author }</footer>
                </blockquote>
            )
    }
    </div>
  );
};

```

![assets-git/328.png](assets-git/328.png)

Ahora vamos a implementar un boton que cargue el siguiente estado, frase o quote asi que al final de todo creamos un boton que diga `Siguiente frase`

```
import React from "react";
import { useFetch } from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const {loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    // console.log(data);

    const { author, quote} = !!data && data[0];

    // console.log(author, quote)

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

    {
        loading
        ? 
            (
                <div className="alert alert-info text-center">Loading...</div>
            )
        :
            (
                <blockquote className="blockquote text-right">
                    <p className="mb-2"> { quote }</p>
                    <footer className="blockquote-footer"> { author }</footer>
                </blockquote>
            )
    }

    <button className="btn btn-primary">
      Siguiente frase
    </button>
    </div>
  );
};

```

![assets-git/329.png](assets-git/329.png)

Pero como no se quiere volver a implementar un contador, hacemos uso del Hook que tenemos creado que se llama `useCounter` y lo modificamos, simplemente le quitamos el `factor` que estaba antes y lo dejamos de esta forma

```
import { useState } from 'react'

export const useCounter = ( initialState = 10 ) => {

    const [counter, setCounter] = useState(initialState);

    const increment = ( ) => {
        setCounter( counter + 1);
    }

    const reset = () => {
        setCounter(initialState);
    }

    const decrement = ( ) => {
        setCounter( counter -1);
    }
    return {
        counter,
        increment,
        reset,
        decrement,
    }
}
```

Ahora nos devolvemos al componente `MultipleCustomHooks` e importamos al hook `useCounter`, de este hook solo nos interesa la funcion increment y se inicializa en valor `1`

```
import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {


  const { counter, increment } = useCounter(1); 
```

Ahora dentro de este componente en vez de pasar el numero `1` en el `useFetch` pasamos el estado `counter`

`const {loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);`

y ahora en el boton llamamos al evento `onClick` y le pasamos la funcion que incrementa y de esta forma ya tenemos combinados los 2 Hooks

```
import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {


  const { counter, increment } = useCounter(1); 

  const {loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(data);

    const { author, quote} = !!data && data[0];

    // console.log(author, quote)

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

    {
        loading
        ? 
            (
                <div className="alert alert-info text-center">Loading...</div>
            )
        :
            (
                <blockquote className="blockquote text-right">
                    <p className="mb-2"> { quote }</p>
                    <footer className="blockquote-footer"> { author }</footer>
                </blockquote>
            )
    }

    <button 
    className="btn btn-primary"
    onClick={increment}
    >
      Siguiente frase
    </button>
    </div>
  );
};

```

Ahora cada vez que hagamos un click sobre el boton Siguiente frase, va a empezar a cambiarla dinamicamente

![assets-git/330.png](assets-git/330.png)

![assets-git/331.png](assets-git/331.png)

Si se quiere que al pasar de frase cargue nuevamente la imagen del `loading` pasamos el `setState` dentro del `useEffect` del hook `useFetch`

```
import { useEffect, useState } from "react"


export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data : null,
        loading : true,
        error: null,
    })

    useEffect( () => {
        
        setState({ data:null, loading: true, error: null})

        fetch(url)
            .then( resp => resp.json())
            .then( data => {

                setState({
                    data,
                    loading: false,
                    error: null,
                })
            })
    }, [url])

    return state;

}

```

**Nota:** Probar en el navegador al pasar a la siguiente frase

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## useRef-Primer uso

Ahora vamos a crear un nuevo hook llamado **useRef**, para esto dentro de la carpeta **components** vamos a crear una carpeta que se llame **04-useRef** y dentro de esta el componente **FocusScreen.js**, dentro de este archivo escribimos el snipet `rafc` para montar la estructura basicamente y lo dejamos de la siguiente forma

```
import React from 'react'

export const FocusScreen = () => {
    return (
        <div>
            <h1>Focus Screen</h1>
        </div>
    )
}
```

Ahora pasamos a **index.js** lo importamos y lo renderizamod en el navegador

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/01-useState/counter.css'
import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';

ReactDOM.render(
    <FocusScreen />,
  document.getElementById('root')
);

```

![assets-git/332.png](assets-git/332.png)

Ahora agregamos un formulario sencillo que va a establecer el foco sobre el campo de texto, al dar click sobre el boton focus y para esto se añade la funcion `handleClick` en el evento `onClick` y a traves de un `querySelector` establecemos que el foco va a hacer la etiqueta `input`

```
import React from 'react'

export const FocusScreen = () => {

    const handleClick = () => {
        document.querySelector('input').focus();
    }

    return (
        <div>
            <h1>Focus Screen</h1>

            <input
                className="form-control"
                placeholder="Su nombre"
            />

            <button 
                className="btn btn-outline-primary mt-5"
                onClick= { handleClick }
            >
                Focus
            </button>
        </div>
    )
}

```

![assets-git/333.png](assets-git/333.png)

Ahora vamos a hacer uso de `useRef` para esto antes de la funcion `handleClick` lo traemos y verificamos que este importado de `react` y luego le hacemos un `console.log` a `ref`

```
import React, { useRef } from 'react'

export const FocusScreen = () => {

    const ref = useRef();
    console.log(ref);

    const handleClick = () => {
        document.querySelector('input').focus();
    }

    return (
        <div>
            <h1>Focus Screen</h1>

            <input
                className="form-control"
                placeholder="Su nombre"
            />

            <button 
                className="btn btn-outline-primary mt-5"
                onClick= { handleClick }
            >
                Focus
            </button>
        </div>
    )
}

```

El valor por defecto que trae es undefined por que no esta apuntando en este momento a ninfun valor, `current` siginifica actual.

![assets-git/334.png](assets-git/334.png)

Pero ahora para ver como funciona o que es lo que hace vamos a añadir el atributo `ref` a la etiqueta input y dentro de esta vamos a nombrar el ref como `inputRef` y asi mismo vamos a nombrar la constante en `useRef`, luego dentro de la función `handleClick` en vez de utilizar `document.querySelector('input').` utilizamos `inputRef.current.` si se quiere se puede utilizar la funcion `select()`, ya que esta pone el foco sobre el campo de texto y lo selecciona todo por si se requiere copiar ese campo, este podria ser util en el caso que se necesite

```
import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();
    console.log(inputRef);

    const handleClick = () => {
        inputRef.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>

            <input
                ref= { inputRef }
                className="form-control"
                placeholder="Su nombre"
            />

            <button 
                className="btn btn-outline-primary mt-5"
                onClick= { handleClick }
            >
                Focus
            </button>
        </div>
    )
}
```
Al dar click sobre Focus, va a establecer el foco y seleccionar lo que nosotros escribamos o hayamos tenido escrito sobre este 

![assets-git/335.png](assets-git/335.png)

El primer mensaje que se imprime por consola es `undefined` por que no se ha seleccionado el Focus, pero despues de que se hace trae el elemento input que estamos selccionando


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## useRef Caso de uso real

