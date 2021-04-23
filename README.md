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

[Memo Método de react](#Memo-Método-de-react)

___

[TodoApp](#TodoApp)

[Creando el cascaron de la lista de TODOs](#Creando-el-cascaron-de-la-lista-de-TODOs)

[Agregar un nuevo TODO](#Agregar-un-nuevo-TODO)

[Guardar TODOs en LocalStorage](#Guardar-TODOs-en-LocalStorage)

[Borrar un TODO](#Borrar-un-TODO)

[Toggle Todo Marcar como completado o pendiente un TODO](#Toggle-Todo-Marcar-como-completado-o-pendiente-un-TODO)

[Optimización 1 Listado de TODOs](#Optimización-1-Listado-de-TODOs)

___

[Preparación App con rutas y hook useContext](#Preparación-App-con-rutas-y-hook-useContext)

[Configurar Router en React](#Configurar-Router-en-React)

[Link y NavLink](#Link-y-NavLink)

[CreateContext y useContext](#CreateContext-y-useContext)

[useContext](#useContext)

___

[Proyecto HeroesApp](#Proyecto-HeroesApp)

[History push/replace](#History-pushreplace)

[Lista de heroes](#Lista-de-heroes)

[Tarjetas con la información del Héroe](#Tarjetas-con-la-información-del-Héroe)

[Leer argumentos por URL](#Leer-argumentos-por-URL)

[Estilos del componente HeroScreen](#Estilos-del-componente-HeroScreen)

[Aplicar filtro de Heroes QuerytString](#Aplicar-filtro-de-Heroes-QuerytString)

[Aplicar filtro en base al QueryString](#Aplicar-filtro-en-base-al-QueryString)

___

[Context y reducer de mi aplicación](#Context-y-reducer-de-mi-aplicación)

[Login de un usuario](#Login-de-un-usuario)

[Logout del usuario](#Logout-del-usuario)

[Rutas privadas](#Rutas-privadas)

[Rutas publicas](#Rutas-publicas)

___

[Proyecto JournalApp](#Proyecto-JournalApp)

[Configurando Redux en JournalApp](#Configurando-Redux-en-JournalApp)

[Redux DevTools](#Redux-DevTools)

[Primer dispatch de una acción a nuestro Store](#Primer-dispatch-de-una-acción-a-nuestro-Store)

[Firebase y Firestore](#Firebase-y-Firestore)

[Thunk Middleware Acciones asincronas](#Thunk-Middleware-Acciones-asincronas)

[Configurar Firebase y Google Sign in](#Configurar-Firebase-y-Google-Sign-in)

[Formulario de registro de usuarios](#Formulario-de-registro-de-usuarios)

[Manejo de errores del formulario](#Manejo-de-errores-del-formulario)

[uiReducer y Aciones](#uiReducer-y-Aciones)

[useSelector Obtener información del State](#useSelector-Obtener-información-del-State)

[Crear usuario con correo y contraseña](#Crear-usuario-con-correo-y-contraseña)

[Realizar el login de usuario con correo y contraseña](#Realizar-el-login-de-usuario-con-correo-y-contraseña)

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

 ### TodoApp

 ```
 import React, { useReducer } from 'react'

import './styles.css'

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [state, dispatch] = useReducer(reducer, initialState, init)


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />
            
            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Hola de nuevo</li>

            </ul>
        </div>
    )
}

```

Del componente `TodoApp` borramos por el momento el `dispatch` y el `init`, y antes de iniciar con el componente creamos un `initialState` donde el id trae la fecha y el dia, luego hay una descripción y un valor booleano que indicaria que la tarea no se ha iniciado

```
import React, { useReducer } from 'react'

import './styles.css'

const initialState = [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [state] = useReducer(reducer, initialState);


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />
            
            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Hola de nuevo</li>

            </ul>
        </div>
    )
}

```

Despues esta el reducer que se encuentra dentro de los argumentos del useReducer el cual aun no se ha creado y para crearlo dentro de la carpeta 08-useReducer, se crea el reducer llamandolo como `todoReducer.js`, como es una función empieza en minúscula, si fuera un componente empezaria en mayúscula. esta función lleva un estado inicial que inicia como arreglo y la accion

```
export const todoReducer = ( state = [], action) => {
    
}
```

Usualmente en caso de que existan varios `type.action` que agregar se pueden usar condiciones anidadas con `if` y `else if`, pero tambien es mejor y mas legible usar `switch`, recordando siempre que cuando se usa un reducer, al final siempre se debe retornar el estado y para este ejemplo, el todoReducer se debe exportar para poder importalo en el componente `TodoApp`

```


export const todoReducer = ( state = [], action) => {

    switch (action.type) {
        // case 'add':
            
        //     break;
    
        default:
            return state;
    }
}
```

Ahora importamos la función en TodoApp, reemplazamos el `reducer` que esta en el argumento de `useReducer` por `todoReducer`, renderizamos en el navegador y en la parte de Components deberia salir el Reducer con la información del `initialState`

```
import React, { useReducer } from 'react'

import './styles.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [state] = useReducer(todoReducer, initialState);


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />
            
            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Hola de nuevo</li>

            </ul>
        </div>
    )
}

```

![assets-git/336.png](assets-git/336.png)


Ahora la constante `state`, se puede renombrar y no afecta en nada como `todos` y luego hacerle un `console.log` a `todos` para que se retorne el estado, el cual es el `initialState`

```
import React, { useReducer } from 'react'

import './styles.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos ] = useReducer(todoReducer, initialState);

    console.log( todos );


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />
            
            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Hola de nuevo</li>

            </ul>
        </div>
    )
}

```

![assets-git/337.png](assets-git/337.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Creando el cascaron de la lista de TODOs

Si agregamos un `todos.length` en el `h1` se va a ver la lista de tareas que tengamos en el momento, no importa si estan en la lista o no y tambien agregar la estructura de como se va a ver la aplicación  para esto se agrega una etiqueta ul con clases bootstrap y se hace un mapeo de lo que contiene `todos` donde dentro de la etiqueta `li` cargamos la descripción del `todo`

```
import React, { useReducer } from 'react'

import './styles.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos ] = useReducer(todoReducer, initialState);

    console.log( todos );


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />
            
            <ul className="list-group list-groupflush">
                {
                    todos.map( todo => (
                        <li 
                            key={ todo.id}
                            className="list-group-item"
                        >
                            {todo.desc}
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}
```

![assets-git/338.png](assets-git/338.png)

Para colocar el numero de tarea, agregamos el otro argumento que recibe la funcion map que es el indice y tambien lo renderizamos a traves de un `i+1`, recordando que `i` por ser el primer elemento del arreglo su posicion es 0 asi que `i+1` es igual a 1

```
import React, { useReducer } from 'react'

import './styles.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos ] = useReducer(todoReducer, initialState);

    console.log( todos );


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />
            
            <ul className="list-group list-groupflush">
                {
                    todos.map( (todo, i) => (
                        <li 
                            key={ todo.id}
                            className="list-group-item"
                        >
                            { i+1 }. { todo.desc }
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

```

![assets-git/339.png](assets-git/339.png)

Ahora pasamos a estilizar un poco mas el componente, para esto metemos `{ i+1 }. { todo.desc }` dentro de una etiqueta de parrafo con clases Bootstrap y creamos un boton Borrar estilizado igualmente

```
import React, { useReducer } from 'react'

import './styles.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos ] = useReducer(todoReducer, initialState);

    console.log( todos );


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />
            
            <ul className="list-group list-group-flush">
                {
                    todos.map( (todo, i) => (
                        <li 
                            key={ todo.id}
                            className="list-group-item"
                        >
                            <p className="text-center">{ i + 1 }. { todo.desc }</p>
                            <button
                                className="btn btn-danger"
                            >
                                Borrar
                            </button>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

```

![assets-git/340.png](assets-git/340.png)

Y si lo estilizamos un poco mas lo pasamos a 2 columnas donde en una aparece el boton borrar y en la otra el formulario que vamos a utilizar para agregar tareas

```
import React, { useReducer } from 'react'

import './styles.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos ] = useReducer(todoReducer, initialState);

    console.log( todos );


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                            {
                                todos.map( (todo, i) => (
                                    <li 
                                        key={ todo.id}
                                        className="list-group-item"
                                    >
                                        <p className="text-center">{ i + 1 }. { todo.desc }</p>
                                        <button
                                            className="btn btn-danger"
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
            </div>
                <div className="col-5">
                        Agregar
                </div>
            </div>
            
        
        </div>
    )
}
```

![assets-git/342.png](assets-git/342.png)

y para terminar de modificar el estilo y verlo de una mejor manera, abrimos el archivo **styles.css** y modificamos la clase `list-group-item` y agregamos una clase que se llame `.complete`, esta clase se añadira cuando una tarea este completada y se va a mostrar tachada 

```

body{
    padding: 50px;
}

p {
    cursor: pointer;
    margin: 0px;
}

.list-group-item {
    align-items: center;
    display: flex;
    justify-content: space-between;
}

.complete {
    text-decoration: line-through;
}
```

Solo falta agregar el formulario para agregar tareas

```
import React, { useReducer } from 'react'

import './styles.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos ] = useReducer(todoReducer, initialState);

    console.log( todos );


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                            {
                                todos.map( (todo, i) => (
                                    <li 
                                        key={ todo.id}
                                        className="list-group-item"
                                    >
                                        <p className="text-center">{ i + 1 }. { todo.desc }</p>
                                        <button
                                            className="btn btn-danger"
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
            </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form>

                        <input 
                            type="text" 
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                        />

                        <button
                            className="btn btn-outline-primary mt-1 btn-block"
                            >
                            Agregar
                        </button>
                        
                    </form>

                </div>
            </div>
            
        
        </div>
    )
}

```

![assets-git/343.png](assets-git/343.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Agregar un nuevo TODO

Agregamos el atributo `type="submit"` al boton de Agregar y al `form` que contiene todo un evento `onSubmit` que llame a la función `handleSubmit`

```
import React, { useReducer } from 'react'

import './styles.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos ] = useReducer(todoReducer, initialState);

    console.log( todos );


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                            {
                                todos.map( (todo, i) => (
                                    <li 
                                        key={ todo.id}
                                        className="list-group-item"
                                    >
                                        <p className="text-center">{ i + 1 }. { todo.desc }</p>
                                        <button
                                            className="btn btn-danger"
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
            </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>

                        <input 
                            type="text" 
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                            >
                            Agregar
                        </button>
                        
                    </form>

                </div>
            </div>
            
        
        </div>
    )
}

```

Luego pasamos a crear la función `handleSubmit` que recibe un evento `e` y para evitar que se reenvie el formulario agregamos un `e.preventDefault()` luego un `console.log('Nueva tarea')` para que cada vez que hagamos click en el boton Agregar, esto se muestre por consola

```
import React, { useReducer } from 'react'

import './styles.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos ] = useReducer(todoReducer, initialState);

    console.log( todos );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        console.log('Nueva tarea');
    }


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                            {
                                todos.map( (todo, i) => (
                                    <li 
                                        key={ todo.id}
                                        className="list-group-item"
                                    >
                                        <p className="text-center">{ i + 1 }. { todo.desc }</p>
                                        <button
                                            className="btn btn-danger"
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
            </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>

                        <input 
                            type="text" 
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                            >
                            Agregar
                        </button>
                        
                    </form>

                </div>
            </div>
            
        
        </div>
    )
}

```

![assets-git/344.png](assets-git/344.png)

Al dar click sobre el boton Agregar se deberia enviar ese estado a la función `todoReducer`. Entonces en la funcion `handleSubmit` creamos una constante que se llama `newTodo` que tambien va a recibir un id, una descripcion y un done(que es como un realizado)

```
import React, { useReducer } from 'react'

import './styles.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos ] = useReducer(todoReducer, initialState);

    console.log( todos );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // console.log('Nueva tarea');
        const newTodo = {
            id: new Date().getTime(),
            desc : 'Nueva tarea',
            done: false
        };
    }


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                            {
                                todos.map( (todo, i) => (
                                    <li 
                                        key={ todo.id}
                                        className="list-group-item"
                                    >
                                        <p className="text-center">{ i + 1 }. { todo.desc }</p>
                                        <button
                                            className="btn btn-danger"
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
            </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>

                        <input 
                            type="text" 
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                            >
                            Agregar
                        </button>
                        
                    </form>

                </div>
            </div>
            
        
        </div>
    )
}
```

Despues de esto se requiere la acción que es la que se va a enviar a `todoReducer`, la accion la nombramos como `action` y el type que va a recibir es `add` de agregar y el `payload` sera el `newTodo`

```
import React, { useReducer } from 'react'

import './styles.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos ] = useReducer(todoReducer, initialState);

    console.log( todos );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // console.log('Nueva tarea');
        const newTodo = {
            id: new Date().getTime(),
            desc : 'Nueva tarea',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo,
        }
    }


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                            {
                                todos.map( (todo, i) => (
                                    <li 
                                        key={ todo.id}
                                        className="list-group-item"
                                    >
                                        <p className="text-center">{ i + 1 }. { todo.desc }</p>
                                        <button
                                            className="btn btn-danger"
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
            </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>

                        <input 
                            type="text" 
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                            >
                            Agregar
                        </button>
                        
                    </form>

                </div>
            </div>
            
        
        </div>
    )
}
```

Ahora regresando a `todoReducer`, se debe establecer el caso cuando se reciba en el type a `add`, dentro de este `case` lo que se debe retornar es una copia del `state` y el `action.payload`

```
export const todoReducer = ( state = [], action) => {

    switch (action.type) {
        case 'add':
            return [ ...state, action.payload ];
    
        default:
            return state;
    }
}
```

Nuevamente en el componente `TodoApp`, ahora agregamos el `dispatch` al `useReducer`, dispatch es una funcion que manda una acción, entonces debajo de la constante `action` agregamos `dispatch(action);`

```
import React, { useReducer } from 'react'

import './styles.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    console.log( todos );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // console.log('Nueva tarea');
        const newTodo = {
            id: new Date().getTime(),
            desc : 'Nueva tarea',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch(action);
    }


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                            {
                                todos.map( (todo, i) => (
                                    <li 
                                        key={ todo.id}
                                        className="list-group-item"
                                    >
                                        <p className="text-center">{ i + 1 }. { todo.desc }</p>
                                        <button
                                            className="btn btn-danger"
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
            </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>

                        <input 
                            type="text" 
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                            >
                            Agregar
                        </button>
                        
                    </form>

                </div>
            </div>
            
        
        </div>
    )
}
```

Realizando esto, si empezamos a dar click sobre el boton Agregar van a empezar a salir las nuevas tareas 

![assets-git/345.png](assets-git/345.png)

Por el momento no se pueden Borrar, porque no se ha añadido ningun tipo de funcionalidad al boton

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Guardar TODOs en LocalStorage

Actualmente si recargamos el navegador, las tareas o TODOs que agreguemos se van a borrar y esto es lo que vamos a corregir en este capitulo, en capitulos anteriores creamos un hook llamado `useForm`, este Hook lo utilizaremos en esta aplicación para esto lo primero que debemos hacer es importarlo y ese `useForm` en los argumentos recibe un objeto vacio, pero lo vamos a asociar inicializandolo con un `description`, el cual vamos a asociar con el input del boton agregar donde esta en atributo `name` el cual es igual a `description`

```
import React, { useReducer } from 'react'
import { useForm } from '../../hooks/useForm';

import './styles.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    useForm({
        description : ''
    })

    console.log( todos );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // console.log('Nueva tarea');
        const newTodo = {
            id: new Date().getTime(),
            desc : 'Nueva tarea',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch(action);
    }


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                            {
                                todos.map( (todo, i) => (
                                    <li 
                                        key={ todo.id}
                                        className="list-group-item"
                                    >
                                        <p className="text-center">{ i + 1 }. { todo.desc }</p>
                                        <button
                                            className="btn btn-danger"
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
            </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>

                        <input 
                            type="text" 
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                            >
                            Agregar
                        </button>
                        
                    </form>

                </div>
            </div>
            
        
        </div>
    )
}

```

Si revisamos el hook `useForm` vemos que retornaba el estado el cual se nombro como `values` y la funcion `handleInputChange` entonces debo desestructurar el `useForm` para hacer uso del estado y la función. En la etiqueta input debo llamar la función a traves del evento `onChange` , el cual ayuda a traer el estado modificado

```
import React, { useReducer } from 'react'
import { useForm } from '../../hooks/useForm';

import './styles.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    const [values, handleInputChange] = useForm({
        description : ''
    })

    console.log( values );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // console.log('Nueva tarea');
        const newTodo = {
            id: new Date().getTime(),
            desc : 'Nueva tarea',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch(action);
    }


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                            {
                                todos.map( (todo, i) => (
                                    <li 
                                        key={ todo.id}
                                        className="list-group-item"
                                    >
                                        <p className="text-center">{ i + 1 }. { todo.desc }</p>
                                        <button
                                            className="btn btn-danger"
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
            </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>

                        <input 
                            type="text" 
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                            >
                            Agregar
                        </button>
                        
                    </form>

                </div>
            </div>
            
        
        </div>
    )
}
```

Si ahora escribo algo sobre el campo del formulario para agregar, por consola traigo los cambios o modificaciones que haga sobre este, como se ve en la imagen

![assets-git/346.png](assets-git/346.png)

y el `values` se puede desestructurar aun mas para obtener la descripcion entonces se desestructura y se agrega el atributo `value` al input donde hago el llamado de `description`

```
import React, { useReducer } from 'react'
import { useForm } from '../../hooks/useForm';

import './styles.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    const [{ description }, handleInputChange] = useForm({
        description : ''
    })

    console.log( description );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // console.log('Nueva tarea');
        const newTodo = {
            id: new Date().getTime(),
            desc : 'Nueva tarea',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch(action);
    }


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                            {
                                todos.map( (todo, i) => (
                                    <li 
                                        key={ todo.id}
                                        className="list-group-item"
                                    >
                                        <p className="text-center">{ i + 1 }. { todo.desc }</p>
                                        <button
                                            className="btn btn-danger"
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
            </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>

                        <input 
                            type="text" 
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value= { description }
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                            >
                            Agregar
                        </button>
                        
                    </form>

                </div>
            </div>
            
        
        </div>
    )
}

```

Ahora la consola muestra la descripción pero no la retorna como si fuera de un objeto

![assets-git/347.png](assets-git/347.png)

y ahora para obtener el valor directo de lo que coloquemos en el formulario en la funcion `newTodo`, en la propiedad `desc` reemplazamos `'Nueva tarea'` por `description` 

```
        const newTodo = {
            id: new Date().getTime(),
            desc : description,
            done: false
        };
```

De esta forma el valor que agreguemos dentro del campo ya se va a empezar a agregar en el TodoApp

![assets-git/348.png](assets-git/348.png)

y una manera de resetear el formulario, seria abriendo el hook `useForm`, crear una función `reset` y modificar el valor para que sea el `initialState`, es decir que si el estado inicial es vacio, despues de agregar alguna tarea el campo de texto se limpie

```
import { useState } from "react"


export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange = ({target}) => {
        
        setValues({
            ...values,
            [target.name]: target.value
        })    
    }
    
return [values, handleInputChange, reset];
}

```

Luego se importa en el tercer argumento del `useForm` y se llama la función `reset()`, debajo del `dispatch`

```
import React, { useReducer } from 'react'
import { useForm } from '../../hooks/useForm';

import './styles.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    const [{ description }, handleInputChange, reset] = useForm({
        description : ''
    })

/*     console.log( description ); */

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // console.log('Nueva tarea');
        const newTodo = {
            id: new Date().getTime(),
            desc : description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch(action);
        reset();
    }


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                            {
                                todos.map( (todo, i) => (
                                    <li 
                                        key={ todo.id}
                                        className="list-group-item"
                                    >
                                        <p className="text-center">{ i + 1 }. { todo.desc }</p>
                                        <button
                                            className="btn btn-danger"
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
            </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>

                        <input 
                            type="text" 
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value= { description }
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                            >
                            Agregar
                        </button>
                        
                    </form>

                </div>
            </div>
            
        
        </div>
    )
}
```

De esta forma si agregamos una nueva tarea el campo se limpia automaticamente.

Si agregamos una tarea sin nada en el campo, se agrega el numero 6. y el resto es vacio, para corregir esto se debe hacer una validación en la función `handleSubmit()`

![assets-git/349.png](assets-git/349.png)

```
    const handleSubmit = ( e ) => {
        e.preventDefault();

        // Validacion, utilizamos trim() para quitar espacios vacios y el recorrido de lo que escribimos en el campo con .length
        // Si es menor a 1 retorna vacio y no hace nada

        if( description.trim().length <= 1){
            return;
        }

        // console.log('Nueva tarea');
        const newTodo = {
            id: new Date().getTime(),
            desc : description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch(action);
        reset();
    }
```

Ahora hacemos uso del argumento `init` que estaba en el `useReducer`, lo que hace esta funcion es ayudar a computar mas rapido el `initialState` y lo que en si trae `init` es el return del `initialState` y en vez de usar el argumento `initialState`, se inicializa con un arreglo vacio, el cual es su valor por defecto

```
import React, { useReducer } from 'react'
import { useForm } from '../../hooks/useForm';

import './styles.css'
import { todoReducer } from './todoReducer';

const init = () => {
    
    return [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}];
}

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description : ''
    })

/*     console.log( description ); */

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // Validacion, utilizamos trim() para quitar espacios vacios y el recorrido de lo que escribimos en el campo con .length
        // Si es menor a 1 retorna vacio y no hace nada

        if( description.trim().length <= 1){
            return;
        }

        // console.log('Nueva tarea');
        const newTodo = {
            id: new Date().getTime(),
            desc : description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch(action);
        reset();
    }


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                            {
                                todos.map( (todo, i) => (
                                    <li 
                                        key={ todo.id}
                                        className="list-group-item"
                                    >
                                        <p className="text-center">{ i + 1 }. { todo.desc }</p>
                                        <button
                                            className="btn btn-danger"
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
            </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>

                        <input 
                            type="text" 
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value= { description }
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                            >
                            Agregar
                        </button>
                        
                    </form>

                </div>
            </div>
            
        
        </div>
    )
}

```
Para grabar en `localStorage`, hacemos uso de `useEffect` y le pasamos como segundo argumento a `todos`, dentro del useEffect agregamos la instrucción `localStorage.setItem()`. localStorage por defecto solo recibe cadenas de texto, por lo tanto hay que convertir al todos, en una cadena de texto con el metodo `JSON.stringify`

```
import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm';

import './styles.css'
import { todoReducer } from './todoReducer';

const init = () => {
    
    return [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}];
}

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description : ''
    })

/*     console.log( description ); */

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [ todos ])

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // Validacion, utilizamos trim() para quitar espacios vacios y el recorrido de lo que escribimos en el campo con .length
        // Si es menor a 1 retorna vacio y no hace nada

        if( description.trim().length <= 1){
            return;
        }

        // console.log('Nueva tarea');
        const newTodo = {
            id: new Date().getTime(),
            desc : description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch(action);
        reset();
    }


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                            {
                                todos.map( (todo, i) => (
                                    <li 
                                        key={ todo.id}
                                        className="list-group-item"
                                    >
                                        <p className="text-center">{ i + 1 }. { todo.desc }</p>
                                        <button
                                            className="btn btn-danger"
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
            </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>

                        <input 
                            type="text" 
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value= { description }
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                            >
                            Agregar
                        </button>
                        
                    </form>

                </div>
            </div>
            
        
        </div>
    )
}

```

Si vamos al navegador y buscamos la pestaña Applications, vemos que aparece la información 

![assets-git/350.png](assets-git/350.png)

Esta información se guarda y se graba 

para poder recuperar esos datos cada vez que carguemos la pagina en la funcion init debemos reemplazar todo por lo siguiente `return JSON.parse(localStorage.getItem('todos')) || [];` el pip significa que en caso de que no exista nada retorne un arreglo vacio

```
const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
    
/*     return [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]; */
}
```
Si se fijan el estado inicial ahora ya no existe, pero si cargamos el navegador nuevamente este estado de Aprender React, se va a cargar porque ya se grabaron estos datos en el localstorage

![assets-git/350.png](assets-git/350.png)

Pero si borramos los datos y volvemos a cargar el navegador, vemos que se agrega todos pero con un arreglo vacio

![assets-git/351.png](assets-git/351.png)

![assets-git/352.png](assets-git/352.png)

Y si se empiezan a agregar datos, tambien se empiezan a grabar estos, entonces cada vez que se recargue la pagina, van a aparecer todos nuestros datos porque ya los estamos grabando y cargando en el localstorage

![assets-git/353.png](assets-git/353.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Borrar un TODO

Para borrar una de las tareas o TODOs, es necesario agregar un `action.type` al `todoReducer` que tenemos como funcion aparte, y dentro de esta nombrar el `case delete` y retornar un nuevo arreglo, el metodo `filter` retorna un nuevo arreglo y a este se le debe agregar una condición, esta condición es que el `todo.id` debe ser diferente al `action.payload`

```


export const todoReducer = ( state = [], action) => {

    switch (action.type) {
        case 'add':
            return [ ...state, action.payload ];

        case 'delete':
            return state.filter( todo => todo.id !== action.payload );
    
        default:
            return state;
    }
}
```

Y ahora debemos de crear una funcion `handleDelete` que debemos llamar en el boton borrar, lo unico que debemos hacer es asegurar que al dar click sobre el boton borrar podamos obtener el id de cada elemento

```
import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm';

import './styles.css'
import { todoReducer } from './todoReducer';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
    
/*     return [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]; */
}

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description : ''
    })

/*     console.log( description ); */

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [ todos ])

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // Validacion, utilizamos trim() para quitar espacios vacios y el recorrido de lo que escribimos en el campo con .length
        // Si es menor a 1 retorna vacio y no hace nada

        if( description.trim().length <= 1){
            return;
        }

        // console.log('Nueva tarea');
        const newTodo = {
            id: new Date().getTime(),
            desc : description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch(action);
        reset();
    }

    const handleDelete = ( todoId ) => {

        // console.log(todoId)

        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                            {
                                todos.map( (todo, i) => (
                                    <li 
                                        key={ todo.id}
                                        className="list-group-item"
                                    >
                                        <p className="text-center">{ i + 1 }. { todo.desc }</p>
                                        <button
                                            type="submit"
                                            className="btn btn-danger"
                                            onClick={ () => handleDelete ( todo.id) }
                                            value={init}
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
            </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>

                        <input 
                            type="text" 
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value= { description }
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                            >
                            Agregar
                        </button>
                        
                    </form>

                </div>
            </div>
            
        
        </div>
    )
}

```

![assets-git/354.png](assets-git/354.png)

![assets-git/355.png](assets-git/355.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Toggle Todo Marcar como completado o pendiente un TODO

Abrir el `todoReducer` y crear un nuevo caso que se llamara `'toggle'` y dentro de este hay que hacer el `return` de un nuevo `state`, para eso vamos a utilizar el metodo `map`, como ya sabemos `action.payload` retorna el id, entonces la validación consiste en que si `todo.id === action.payload`  va a retornar la copia del `todo` y va a negar el `done` para que pase a ser `true` en caso de que el id no sea igual retorna el `todo` sin alguna modificación

```


export const todoReducer = ( state = [], action) => {

    switch (action.type) {
        case 'add':
            return [ ...state, action.payload ];

        case 'delete':
            return state.filter( todo => todo.id !== action.payload );

        case 'toggle':
            return state.map( todo => {
                if( todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    } 
                }else {
                    return todo
                }
            })
    
        default:
            return state;
    }
}
```

Debajo de la función `handleDelete`, crear una nueva función que se llame `handleToggle`, esta función tambien recibira como argumento el `todoId`, dentro de la función creamos el dispatch que recibe directamente la acción

```
    const handleToggle = ( todoId )=> {
        dispatch({
            type:'toggle',
            payload: todoId
        })
    }
```

En la etiqueta `<p>` quitamos la clase `text-center`, pero en lugar de eso realizamos una condición en el atributo className `className={`${ todo.done && 'complete'}`}`, donde realizaremos una validación, la validación significa que si donde esta en `true` se añada la clase `complete` y esta clase tacha la frase cuando la seleccionamos con el curso, seguido añadimos el evento `onClick` que llama a la función `handleToggle`, la cual recibe como parametro a `todo.id` de esta forma es que se puede hacer la comparación de los id

```
import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm';

import './styles.css'
import { todoReducer } from './todoReducer';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
    
/*     return [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]; */
}

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description : ''
    })

/*     console.log( description ); */

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [ todos ])

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // Validacion, utilizamos trim() para quitar espacios vacios y el recorrido de lo que escribimos en el campo con .length
        // Si es menor a 1 retorna vacio y no hace nada

        if( description.trim().length <= 1){
            return;
        }

        // console.log('Nueva tarea');
        const newTodo = {
            id: new Date().getTime(),
            desc : description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch(action);
        reset();
    }

    const handleDelete = ( todoId ) => {

        // console.log(todoId)

        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }

    const handleToggle = ( todoId )=> {
        dispatch({
            type:'toggle',
            payload: todoId
        })
    }


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                            {
                                todos.map( (todo, i) => (
                                    <li 
                                        key={ todo.id}
                                        className="list-group-item"
                                    >
                                        <p 
                                            className={`${ todo.done && 'complete'}`}
                                            onClick= { () =>  handleToggle(todo.id) } 
                                        >
                                            { i + 1 }. { todo.desc }
                                        </p>
                                        <button
                                            type="submit"
                                            className="btn btn-danger"
                                            onClick={ () => handleDelete ( todo.id) }
                                            value={init}
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
            </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>

                        <input 
                            type="text" 
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value= { description }
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                            >
                            Agregar
                        </button>
                        
                    </form>

                </div>
            </div>
            
        
        </div>
    )
}

```

Cuando seleccionamos cualquier tarea con el cursor y fijamos en la pestaña Components, cada vez que hagamos click sobre cada tarea `done` cambiara a true y la tarea o `TODO` se tachara

Primero esta en **done** `false`

![assets-git/356.png](assets-git/356.png)

Despues pasa a **done** `true` y se realiza el cambio

![assets-git/357.png](assets-git/357.png)

Existe otra forma de hacer lo mismo en la función `todoReducer`, asi que el toogle que tenemos lo renombramos como `toggle-Old` para que quede el ejemplo y utilizamos el `toggle` que si va a actuar sobre TodoApp, en este caso se va a hacer lo mismo que `toggle-old` pero con un `return` implicito y utilizando el operador ternario

```
        case 'toggle':
            return state.map ( todo => 
                ( todo.id === action.payload)
                ? {...todo, done: !todo.done}
                : todo    
            );
```

```


export const todoReducer = ( state = [], action) => {

    switch (action.type) {
        case 'add':
            return [ ...state, action.payload ];

        case 'delete':
            return state.filter( todo => todo.id !== action.payload );

        case 'toggle':
            return state.map ( todo => 
                ( todo.id === action.payload)
                ? {...todo, done: !todo.done}
                : todo    
            );

        case 'toggle-Old':
            return state.map( todo => {
                if( todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    } 
                }else {
                    return todo
                }
            })
    
        default:
            return state;
    }
}
```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Optimización 1 Listado de TODOs

Se optimiza el componente `TodoApp` y se retira todo la etiqueta `<ul></ul>` y se convierte en un componente que recibe varias propiedades, el componente se llama **TodoList.js** y recibe las funciones `todos`, `handleDelete`, `handleToggle`

```
import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm';

import './styles.css'
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
    
/*     return [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]; */
}

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description : ''
    })

/*     console.log( description ); */

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [ todos ])

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // Validacion, utilizamos trim() para quitar espacios vacios y el recorrido de lo que escribimos en el campo con .length
        // Si es menor a 1 retorna vacio y no hace nada

        if( description.trim().length <= 1){
            return;
        }

        // console.log('Nueva tarea');
        const newTodo = {
            id: new Date().getTime(),
            desc : description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch(action);
        reset();
    }

    const handleDelete = ( todoId ) => {

        // console.log(todoId)

        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }

    const handleToggle = ( todoId )=> {
        dispatch({
            type:'toggle',
            payload: todoId
        })
    }


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    <TodoList 
                    todos={ todos } 
                    handleDelete={ handleDelete } 
                    handleToggle={ handleToggle }
                    />
            </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>

                        <input 
                            type="text" 
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value= { description }
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                            >
                            Agregar
                        </button>
                        
                    </form>

                </div>
            </div>
            
        
        </div>
    )
}

```

El componente `TodoList` recibe las propiedades en forma desestructurada y no hay que realizar mas cambios 

```
import React from 'react'

export const TodoList = ( {todos, handleDelete, handleToggle}) => {
    return (
        <>
            <ul className="list-group list-group-flush">
                            {
                                todos.map( (todo, i) => (
                                    <li 
                                        key={ todo.id}
                                        className="list-group-item"
                                    >
                                        <p 
                                            className={`${ todo.done && 'complete'}`}
                                            onClick= { () =>  handleToggle(todo.id) } 
                                        >
                                            { i + 1 }. { todo.desc }
                                        </p>
                                        <button
                                            type="submit"
                                            className="btn btn-danger"
                                            onClick={ () => handleDelete ( todo.id) }
                                            value={init}
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
        </>
    )
}

```

Ahora tambien pasamos las etiquetas `<li></li>` a otro componente llamado **ToloListItem.js**, a este componente le pasamos las propiedades `todo`, `i`, `handleDelete`, `handleToggle` y como estamos realizando el metodo `map` es necesario que a este componente se le pase el `key`

```
import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ( { todos, handleDelete, handleToggle}) => {
    return (
        <>
            <ul className="list-group list-group-flush">
                            {
                                todos.map( (todo, i) => (
                                    <TodoListItem 
                                    key= { todo.id}
                                    todo={ todo }
                                    i={ i }  
                                    handleDelete={ handleDelete } 
                                    handleToggle={ handleToggle }
                                    />
                                ))
                            }

                        </ul>
        </>
    )
}

```

Y recibimos nuevamente las propiedades en el componente `TodoListItem`

```
import React from 'react'

export const TodoListItem = ({ handleDelete, handleToggle, init, todo, i}) => {
    return (
        <>
            <li 
                
                className="list-group-item"
            >
            <p 
                className={`${ todo.done && 'complete'}`}
                onClick= { () =>  handleToggle(todo.id) } 
            >
                { i + 1 }. { todo.desc }
            </p>
            <button
                type="submit"
                className="btn btn-danger"
                onClick={ () => handleDelete ( todo.id) }
                value={init}
            >
                Borrar
            </button>
            </li>
        </>
    )
}

```

Si se quiere, se pueden quitar los ffragment ya que no son necesarios, la consola del navegador no deberia arrojar ningun tipo de error y esta es la optimización de la lista de tareas 

![assets-git/358.png](assets-git/358.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Optimización 2 Listado de TODOs

Se crea un componente nuevo llamado TodoAdd y se importa el `useForm`, se crea función `handleAdd` que recibe a `newTodo` y el `dispatch` recibe a `handleAdd`

Esta es la forma como queda el componente `TodoApp`

```
import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm';

import './styles.css'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
    
/*     return [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]; */
}

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);



/*     console.log( description ); */

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [ todos ])

   

    const handleDelete = ( todoId ) => {

        // console.log(todoId)

        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }

    const handleToggle = ( todoId )=> {
        dispatch({
            type:'toggle',
            payload: todoId
        })
    }

    const handleAdd = ( newTodo ) => {
        dispatch({
            type:'add',
            payload: newTodo
        })
    }


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    <TodoList 
                    todos={ todos } 
                    handleDelete={ handleDelete } 
                    handleToggle={ handleToggle }
                    />
            </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd 
                    handleAdd={handleAdd}
                    dispatch = {dispatch}/>

                </div>
            </div>
            
        
        </div>
    )
}

```

Esta es la forma como queda el componente `TodoAdd`

```
import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({handleAdd, dispatch}) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description : ''
    })

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // Validacion, utilizamos trim() para quitar espacios vacios y el recorrido de lo que escribimos en el campo con .length
        // Si es menor a 1 retorna vacio y no hace nada

        if( description.trim().length <= 1){
            return;
        }

        // console.log('Nueva tarea');
        const newTodo = {
            id: new Date().getTime(),
            desc : description,
            done: false
        };

        handleAdd(newTodo)

        dispatch(handleAdd);
        reset();
    }
    
    return (
        <form onSubmit={ handleSubmit }>

        <input 
            type="text" 
            name="description"
            className="form-control"
            placeholder="Aprender ..."
            autoComplete="off"
            onChange={ handleInputChange }
            value= { description }
        />

        <button
            type="submit"
            className="btn btn-outline-primary mt-1 btn-block"
            >
            Agregar
        </button>
        
    </form>
    )
}

```

![assets-git/358.png](assets-git/358.png)

Como tal cambios en el funcionamiento de la aplicación no existen, solo esta optimizando el manejo de componentes

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Preparación App con rutas y hook useContext

Dentro de la carpeta **Components**, crear otra carpeta llamada **09-useContext** y alli se van a crear varios componentes, **AboutScreen.js**, **HomeScreen.js**, **LoginScreen.js**, **MainApp.js**.

Cada archivo llevara la estructura basica que se ha venido creando hasta el momento

**AboutScreen.js**

```
import React from 'react'

export const AboutScreen = () => {
    return (
        <div>
            <h1>AboutScreen</h1>
            <hr />
        </div>
    )
}
```

**HomeScreen.js**

```
import React from 'react'

export const HomeScreen = () => {
    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />
        </div>
    )
}

```

**LoginScreen.js**

```
import React from 'react'

export const LoginScreen = () => {
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
        </div>
    )
}
```

**MainApp.js**

```
import React from 'react'

export const MainApp = () => {
    return (
        <div>
            <h1>MainApp</h1>
            <hr />
        </div>
    )
}
```

Importar el componente `MainApp` en **index.js** y antes de lanzar la aplicación al navegador instalar [React Router](https://reactrouter.com/web/guides/quick-start)

```
import React from 'react';
import ReactDOM from 'react-dom';
import { MainApp } from './components/09-useContext/MainApp';

// import { TodoApp } from './components/08-useReducer/TodoApp';
// import './index.css';
// import './components/01-useState/counter.css'
// import { Memorize } from './components/05-Memos/Memorize';
// import { EjemploRealRef } from './components/04-useRef/EjemploRealRef';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import './components/08-useReducer/instro-reducer';

ReactDOM.render(
    <MainApp />,
  document.getElementById('root')
);

```

Abrir la terminal ubicar la carpeta **09-useContext** y ejecutar el comando `npm install react-router-dom`

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Configurar Router en React

En este capitulo vamos a implementar rutas con path o url distintas sin tener que hacer peticiones http de algun servidor o API, empezamos creando otro archivo dentro de la carpeta **09-useContext** llamado **AppRouter.js**.

**Nota:** Una aplicación puede tener mas de un Router, 2,3 o mas, lo que se requiera o 2 Router internamente

Para empezar vamos a importar en el `AppRouter` `react-router-dom`, el cual lo proporciona la documentación

```
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export const AppRouter = () => {
    return (
        <div>
            
        </div>
    )
}
```

A tener en cuenta `as Router` es un alias de `BrowserRouter`, esto sirve para acortar la palabra y verla de una mejor manera en el componente, por el momento lo que se va a utilizar de la importación es `Router`, `Switch` y `Route`, es aconsejable que dentro de una etiqueta `Router` se maneje internamente una etiqueta `div` y a continuación despues se hace uso de la etiqueta `Switch` que al igual que en otros programas Switch es usado como una condición aunque se ve algo distinto a como se usa normalmente un Switch

```
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>

                </Switch>



            </div>
        </Router>
    )
}

```

Dentro de las etiquetas `Switch` va la etiqueta `Route` la cual lleva el path o ruta el url que nosotros queramnos y el render del componente, el componente se debe importar al `AppRouter` para que pueda ser utilizado

Veamos el primer ejemplo

```
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';


export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <Route  path="/about" component={ AboutScreen }/>
                </Switch>


            </div>
        </Router>
    )
}
```

Ahora importamos `AppRouter` a `MainApp` para que podamos visualizar el ejemplo

```
import React from 'react'
import { AppRouter } from './AppRouter'

export const MainApp = () => {
    return (
        <div>
            <h1>MainApp</h1>
            <hr />
            <AppRouter />
        </div>
    )
}

```

Si por el momento revisamos el navegador solo vamos a tener **MainApp** y el path o url solo esta como **localhost:3000**

![assets-git/359.png](assets-git/359.png)

Pero si ahora a continuacion de la url agregamos **/about**, nos va a mostrar el render del componente `AboutScreen` que no es nada mas que el titulo

![assets-git/360.png](assets-git/360.png)

teniendo en mente esto modificamos `MainApp` quitando el titulo y la etiqueta `<hr />` 

```
import React from 'react'
import { AppRouter } from './AppRouter'

export const MainApp = () => {
    return (
        <div>
            <AppRouter />
        </div>
    )
}
```
Y dentro de nuestro `AppRouter` agregamos los otros path, que son `/` componente `HomeScreen` y `/login` componente `LoginScreen`

```
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';


export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <Route  path="/about" component={ AboutScreen }/>
                    <Route  path="/login" component={ LoginScreen }/>
                    <Route  path="/" component={ HomeScreen }/>

                </Switch>


            </div>
        </Router>
    )
}
```
De esta forma tenemos los path de cada componente

![assets-git/361.png](assets-git/361.png)

![assets-git/362.png](assets-git/362.png)

Hay algo que recomienda React y es que las rutas se manejen de lo particular a lo mas general siendo lo mas general la ruta del `HomeScreen` por ser la mas sencilla el path es esto `/`, si a continuacion el path queda en el primer orden e intento renderizar la ruta del `/login` como resultado voy a obtener al del path mas general y esto esta mal

```
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';


export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <Route  path="/" component={ HomeScreen }/>
                    <Route  path="/about" component={ AboutScreen }/>
                    <Route  path="/login" component={ LoginScreen }/>

                </Switch>


            </div>
        </Router>
    )
}
```

Cuando esta en `HomeScreen` se muestra todo bien 

![assets-git/362.png](assets-git/362.png)

Pero si cambio el path a `/login` se sigue mostrarndo el `HomeScreen`

![assets-git/363.png](assets-git/363.png)

Esto sucede porque hay una coincidencia en el path de cada uno de los componentes para corregir esto debemos añadir el atributo exact antes de establecer el path y el problema queda resuelto

```
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';


export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path="/" component={ HomeScreen }/>
                    <Route exact path="/about" component={ AboutScreen }/>
                    <Route exact path="/login" component={ LoginScreen }/>

                </Switch>


            </div>
        </Router>
    )
}

```

![assets-git/361.png](assets-git/361.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Link y NavLink

Crear un nuevo componente dentro de la carpeta **09-useContext** llamado **NavBar.js** el cual contiene la siguiente estructura que esta compuesta por una etiqueta `nav`, que contiene dentro una etiqueta `ul` y estas a su vez contienen etiquetas `li` y tambien contienen etiquetas `a` par poder cargar los path que estamos utilizando

```
import React from 'react'

export const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href="./">Home</a>
                    </li>

                    <li>
                        <a href="./about">About</a>
                    </li>

                    <li>
                        <a href="./login">Login</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
```

lo siguiente para ver que esta funcionando es importar el `NavBar` a `AppRouter`

```
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';


export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />

                <Switch>
                    <Route exact path="/" component={ HomeScreen }/>
                    <Route exact path="/about" component={ AboutScreen }/>
                    <Route exact path="/login" component={ LoginScreen }/>

                </Switch>


            </div>
        </Router>
    )
}
```

Esto es lo que se debe ver en pantalla

![assets-git/364.png](assets-git/364.png)

A cualquiera de los link que viajemos siempre van a estar estos como una barra de navegación superior, es decir siempre van a estar a la vista

**Nota:** Hay algo importante que se debe notar y es que cuando se hace click sobre cada link, la petición se vuelve a realizar, es decir se vuelve a cargar todo el componente de inicio a fin, el ejemplo por el momento es sencillo y no se nota al tomar una captura de pantalla pero esto es como volver a realizar una petición al servidor y no se optimizan recursos

Cuando en un proyecto esta implementado React, los componentes que se establecen por rutas no deben hacer una petición al servidor a menos que se requiera y es por esto que es utilizado `Link` y `NavLink`, el cambio del componente realizar sin que se vuelva a cargar.

La forma de usarlo es importandolo de `react-dom-router` y lo vamos a utilizar dentro del componente `NavBar`, primero hacemos la importación de `Link` esta la cambiamos por la etiqueta `a` y en vez de usar `href` usamos `to` y el path cambia un poco solo quitamos el punto antes del slash

```
import React from 'react'

import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

```

Con realizar este cambio, notamos como en el navegador ya no esta haciendo peticiónes cada vez que hacemos click sobre cada link.

Ahora vamos a realizar cambios sobre el componente `NavBar` implementando clases de Bootstrap especiales para esto 

```
import React from 'react'

import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">useContext</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/login">Login</Link>
            </div>
            </div>
        </div>
        </nav>
        </>
    )
}

```

El `Link` y el `NavLink` solo que hay dos diferencias.

Primero notar esta imagen 

![assets-git/365.png](assets-git/365.png)

Lo que es Home, About y Login, se notan como si estuvieran apagados

Cuando se usa NavLink esto cambia

```
import React from 'react'

import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">useContext</NavLink>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/login">Login</NavLink>
            </div>
            </div>
        </div>
        </nav>
        </>
    )
}
```

Ahora con `NavLink` todo aparece iluminado con una clase css y se nota la pestaña sobre la que estoy ubicado

![assets-git/366.png](assets-git/366.png)

![assets-git/367.png](assets-git/367.png)

Para que no se muestre el Home y el Login al tiempo o aparezca el efecto de iluminación sobre las dos ubicaciones tambien se debe agregar el atributo `exact`

```
import React from 'react'

import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">useContext</NavLink>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink exact className="nav-link" to="/">Home</NavLink>
                <NavLink exact className="nav-link" to="/about">About</NavLink>
                <NavLink exact className="nav-link" to="/login">Login</NavLink>
            </div>
            </div>
        </div>
        </nav>
        </>
    )
}

```

![assets-git/368.png](assets-git/368.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### CreateContext y useContext

Se debe trabajar con la comunicación de los componentes que tenemos creados, de momento AboutScreen, HomeScreen y LoginScreen son hermanos, si nos fijamos en el AppRouter, el padre de estos componentes viene siendo el Switch.

Ahora vamos a crear un componente que permita enviar o compartir la comunicación entre todos los componentes sin tener que estar pasando propiedades y estar recibiendo todo como props.

Para esto dentro de la carpeta **09-useContext** crear el archivo **UserContext.js** y alli vamos a agregar lo siguiente.

Importamos createContex de react y luego usamos la constante UserContext y la pasamos a createContext como un valor nulo inicialmente aunque puede recibir otros valores

```
import { createContext } from 'react';

export const UserContext = createContext(null);
```

El `UserContext` que se acaba de crear es un componente por tanto a este se le pueden agregar componentes hijos, en el componente `MainApp` si coloco el `UserContext` como componente padre, todo lo que este alli adentro va a recibir lo que establezca en el `UserContext` pero debo agregar el `.Provider`

```
import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
    return (
        <div>
            <UserContext.Provider>

            <AppRouter />
            
            </UserContext.Provider>
        </div>
    )
}

```

De momento todo funciona normal, pero la pestaña de **Components** del navegador se va a mostrar distinta a como se muestra sin el UserContext 

![assets-git/369.png](assets-git/369.png)

Lo mas importante de alli es que este el `Context.Provider`, el cual va a servir para proveer información a lo largo de todos sus componentes hijos, y todos los componentes hijos es todo lo que encuentra dentro del componente `AppRouter`

Por el momento lo que se quiere compartir es un `prop` o propiedad llamada `value` que es lo que se quiere compartir, para eso hay que crear una constante que sea un `user` y que sea un objeto que traiga información como el `id`, `name`, `email`.

```
import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const user = {
        id: 12345,
        name: 'Jeyfred C',
        email: 'jeyfredc@gmail.com'
    }
    return (

        <div>
            <UserContext.Provider value={ user }>

            <AppRouter />
            
            </UserContext.Provider>
        </div>
    )
}

```

Si revisamos la información del `Context.Provider` en la pestaña **Components** vemos que aparecer los `props` y aparece `children: <AppRouter />` y debajo las propiedades que acabe de establecer

![assets-git/370.png](assets-git/370.png)

Si necesito tener acceso al `user` desde otro componente como por ejemplo el `HomeScreen` debo importar a `useContext` pasar como argumento el componente y nombrarlo en una constante como `userContext` o puede ser otro nombre y hacer un `console.log` del mismo para ver los datos que esta trayendo

```
import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const userContext = useContext(UserContext)

    console.log(userContext)
    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />
        </div>
    )
}

```

![assets-git/371.png](assets-git/371.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### useContext

La constante `user` creada en el componente se puede manejar creandola en un `useState` para el caso que queramos cambiar por ejemplo de usuario por el momento la forma de manejarlo, seria inicializando el estado como una variable vacia

```
import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({})

/*     const user = {
        id: 12345,
        name: 'Jeyfred C',
        email: 'jeyfredc@gmail.com'
    } */
    return (

        <div>
            <UserContext.Provider value={ user }>

            <AppRouter />
            
            </UserContext.Provider>
        </div>
    )
}

```

pero si quiero pasarle mas propiedades al value lo unico que debo hacer es utilizar la desestructuración, en este caso para pasar el `setUser`

Notar como se pasa sin desestructuración y lo lee la consola

`<UserContext.Provider value={ user, setUser }>`

![assets-git/372.png](assets-git/372.png)

Ahora se realiza el mismo ejercicio desestructurando

`<UserContext.Provider value={{ user, setUser }}>`

```
import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({})

/*     const user = {
        id: 12345,
        name: 'Jeyfred C',
        email: 'jeyfredc@gmail.com'
    } */
    return (

        <div>
            <UserContext.Provider value={{ user, setUser }}>

            <AppRouter />
            
            </UserContext.Provider>
        </div>
    )
}

```

![assets-git/373.png](assets-git/373.png)

Ahora en el `HomeScreen` vamos a pasar los datos de ese `user` utilizando la desestructuración, como `user` por el momento no contiene nada lo unico que va a aparecer son corchetes vacios `{}`

```
import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const { user } = useContext(UserContext)

    console.log( user )
    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />
            <pre>
                { JSON.stringify( user, null, 3) }
            </pre>
        </div>
    )
}

```

![assets-git/374.png](assets-git/374.png)

Luego realizamos una pequeña modificacion en el `AppRouter` con una clase de Bootstrap, solo se esta añadiendo la clase container, para separar todos los componentes un poco de la margen de la pantalla

```
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';


export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />
                    <div className="container">
                <Switch>
                    <Route exact path="/" component={ HomeScreen }/>
                    <Route exact path="/about" component={ AboutScreen }/>
                    <Route exact path="/login" component={ LoginScreen }/>

                </Switch>
                </div>

            </div>
        </Router>
    )
}

```

Luego de esto regresamos al `LoginScreen` alli con un boton vamos a modificar las propiedades del usuario y se deben pasar al componente HomeScreen para que alli aparezca, el `id`, `nombre` e `email`, entonces tambien debemos establecer el `useContext` y utilizar la desestructuración para poder realizarlo, dentro de la desestructuración solo incluyo el `setUser`

```
import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser} = useContext(UserContext)
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={ ()=> setUser({
                    id: 12345,
                    name: 'Jeyfred C',
                    email: 'jeyfredc@gmail.com'
                })}
            >
                Login
            </button>
        </div>
    )
}

```

Lo unico que voy a tener dentro del componente `LoginScreen` es un boton que dice `Login`, pero al dar click sobre el y luego dirigirme al `HomeScreen` la información que se esta enviando deberia estar renderizada en el navegador

![assets-git/375.png](assets-git/375.png)

![assets-git/376.png](assets-git/376.png)

Otro ejemplo se podria hacer con un LogOut, para eso abrimos el componente AboutScreen y modificamos con lo siguiente

```
import React, { useContext } from 'react'
import { UserContext } from './UserContext'


export const AboutScreen = () => {

    const {user, setUser} = useContext(UserContext)
    
    const handleClick = () => {
    
        setUser({})
    }
    
    return (
        <div>
            <h1>AboutScreen</h1>
            <hr />

            <pre>
                { JSON.stringify(user, null, 3)}
            </pre>

            <button
                className="btn btn-danger"
                onClick={ handleClick}
            >
                LogOut
            </button>
        </div>
    )
}

```

Si vamos a Home o About no aparece ninguna información de momento

![assets-git/377.png](assets-git/377.png)

![assets-git/378.png](assets-git/378.png)

Ahora si nos dirigimos al Login y damos click en el boton Login, la información se va a compartir en Home y en About

![assets-git/376.png](assets-git/376.png)

![assets-git/379.png](assets-git/379.png)

Pero si ahora hago click en LogOut la información se va a dejar de compartir en Home y en About.

Para esto es que sirve el uso de `useContext` compartir la comunicación entre componentes y de estar forma se facilita mucho mas el uso de props entre componentes 

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Proyecto HeroesApp

Abrir la carpeta raiz del proyecto y ejecutar el comando `npx create-react-app 06-heroesapp`, despues de que este creada la aplicacion abrir la carpeta **src** y borrar los archivos **App.css**, **App.js**, **App.test.js**, **index.css**, **logo.svg**, **reportWebVitals.js** y **setupTests.js**.

Abrir la carpeta **public** y actualizar el **index.html** con el cdn de [Bootstrap4](https://getbootstrap.com/docs/5.0/getting-started/introduction/) que se encuentra en la documentación o dejar como esta a continuación 

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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <title>Heroes App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

Dentro de la carpeta **public** crear otra carpeta que se llame **assets** descargar en este [enlace](https://github.com/jeyfredc/React---Curso-Udemy/tree/master/06-heroes-app/public/assets/heroes) y copiar todas las imagenes en la carpeta 

En la carpeta **src** creamos el archivo **HeroesApp.js** con la estructura basica 

```
import React from 'react'

export const HeroesApp = () => {
    return (
        <div>
            <h1>Heroes App</h1>
            <hr />
        </div>
    )
}
```

y en el archivo **index.js** lo importamos

```
import React from 'react';
import ReactDOM from 'react-dom';
import { HeroesApp } from './HeroesApp';

ReactDOM.render(

    <HeroesApp />,
  document.getElementById('root')
);
```

Por ultimo lanzar la aplicación y comprobar que se renderice correctamente

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Creando primer Router

Bajar la aplicación e instalar react-router-dom

`npm install react-router-dom`

Despues de realizar la instalación, nuevamente lanzar la aplicación y dentro de **src**, crear la carpeta **components** y dentro de esta crear otra carpeta que de va a llamar **dc**, la cual va a contener el componente **DcScreen.js**

```
import React from 'react'

export const DcScreen = () => {
    return (
        <div>
            <h1>DCScreen</h1>
        </div>
    )
}
```

Ahora dentro de la carpeta **components** crear otra carpeta llamada **marvel** la cual contiene a **MarvelScreen.js**

```
import React from 'react'

export const MarvelScreen = () => {
    return (
        <div>
            <h1>MarvelScreen</h1>
        </div>
    )
}
```

Dentro de la carpeta **components** crear otra carpeta llamada **ui** la cual contiene a **NavBar.js**

```
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
```

Dentro de **components** crear otra carpeta llamada **heroes** que contiene a **HeroScreen.js**

```
import React from 'react'

export const HeroScreen = () => {
    return (
        <div>
            <h1>HeroScreen</h1>
        </div>
    )
}
```

Por ultimo crear dentro de la **components** la carpeta **login** que contine a **LoginScreen.js**

```
import React from 'react'

export const LoginScreen = () => {
    return (
        <div>
            <h1>LoginScreen</h1>
        </div>
    )
}
```

Dentro de la carpeta **src** crear una nueva carpeta llamada **routers** y crear el archivo **AppRouter.js**

Este archivo va a tener la importacion de react-router-dom donde vamos a utilizar inicialmente `Router`, `Switch` y `Route`, las rutas van a estar dirigidas la primera con el path `/login` hacia el componente `LoginScreen`.

La segunda va a tener el path `/` hacia el componente `Marvel`

El `NavBar` va estar por encima de estas rutas para que siempre se muestre

```
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />

                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />

                    <Route exact path="/" component={ MarvelScreen } />
                </Switch>
            </div>
        </Router>
    )
}

```

Por ultimo dentro de **HeroesApp** importamos el componente **AppRouter**

```
import React from 'react'
import { AppRouter } from './routers/AppRouter'

export const HeroesApp = () => {
    return (
        <div>
            <AppRouter />
        </div>
    )
}
```

De momento esto es lo que debemos tener renderizado en el navegador

![assets-git/380.png](assets-git/380.png)

Si cambiamos el path a http://localhost:3000/login, tambien carga el componente

![assets-git/381.png](assets-git/381.png)

La idea es que cuando nos encontremos en el Login sin haber realizado la autenticación, no se muestre el NavBar, pero esto se ira corrigiendo a medida del avance del curso.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Creando segundo Router

Como se dejo en el capitulo anterior cuando estemos ubicados en el `Login` no deberia aparecer el Nabvar, por tanto abrimos el componente `AppRouter` y lo retiramos de alli

```
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />

                    <Route exact path="/" component={ MarvelScreen } />
                </Switch>
            </div>
        </Router>
    )
}

```

![assets-git/382.png](assets-git/382.png)

Mientras no este autenticado no se va a mostrar el `NavBar`, entonces para corregir esto vamos a crear una nueva ruta dentro de la carpeta **routers** llamado **DashboardRoutes.js** y este archivo va a ser el contenedor de todas las rutas internas, la unica diferencia que va a tener con `AppRouter` es que no va a tener un `Router` que contenga a todo y el DashboardRoutes es el que va a contener a `NavBar` presente en todas las rutas, va a contener al path `/marvel` renderizando el componente `MarvelScreen`,  path `/heroe/:heroeId` renderizando el componente `HeroeScreen` y el path `/dc` renderizando el componente `DcScreen`, ademas tambien tendra una etiqueta `Redirect` que va a redirigir al componente `MarvelScreen` en el caso que el path que se escriba este mal

```
import React from 'react'
import { Navbar } from '../components/ui/NavBar'
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';

export const DashboardRoutes = () => {
    return (
        <>

        <Navbar />

        <Switch>
            <Route exact path="/marvel" component={ MarvelScreen }/>
            <Route exact path="/heroe/:heroeId" component={ HeroScreen }/>
            <Route exact path="/dc" component={ DcScreen }/>

            <Redirect to="/marvel"/>

        </Switch>
            
        </>
    )
}

```

Luego regresamos al `AppRouter` y colocamos como path `/` renderizando el componente `DashboardRoutes`

```
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />

                    <Route path="/" component={ DashboardRoutes } />
                </Switch>
            </div>
        </Router>
    )
}
```

De esta forma si estoy en el Login http://localhost:3000/login , no se muestra nada 

![assets-git/382.png](assets-git/382.png)

Pero si cambio el path a otra ruta como `/marvel` o `/dc` obtengo el `NavBar` renderizando al componente y si doy click en LogOut, regreso al Login

![assets-git/383.png](assets-git/383.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### History push/replace

Ahora vamos a rediseñar el Login con clases de Bootstrap y css

Para esto abrir la carpeta login, crear el archivo **login.css** y copiar lo siguiente

```
body {
    background-color: black;
    -webkit-font-smoothing: antialiased;
    font: normal 14px Roboto,arial,sans-serif;
    margin: 0;
    color: white;
  }

  .container {
    background-color:black;
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKTvecd0ygWHewChNVx8GjaM2bSCnjfgTdA&usqp=CAU');
    background-repeat: repeat-x;
    background-size: 25%;
    background-position: center;
    background-position-y: 3px;
    color: black;
    text-align: center;
    min-width: 100%;
    height: 250px;
    margin-top: 15%;
  }
  
  .form-login {
      background-color: white;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 20px;
      padding-right: 20px;
      border-radius: 15px;
      border-color:gray;
      border-width: 5px;
      box-shadow:0 1px 0 #cfcfcf;
  }
  
  h4 { 
   border:0 solid white; 
   border-bottom-width:1px;
   padding-bottom:10px;
   text-align: center;
  }
  
  .form-control {
      border-radius: 10px;
  }
  
  .wrapper {
      text-align: center;
  }
  
  .row {
    justify-content: center;
}
```

A `LoginScreen` añadir las siguientes clases Bootstrap

```
import React from 'react'
import './login.css'

export const LoginScreen = () => {
    return (
<div className="container">
    <div className="row mt-5">
        <div className="col-md-offset-5 col-md-3">
            <div className="form-login">
            <h4>Bienvenido a Heroes App.</h4>
            <p>Por favor haz click sobre Login para ingresar a la aplicación</p>
                <button className="btn btn-dark btn-md">login</button>
            </div>
        
        </div>
    </div>
</div>
    )
}
```

De momento el login se debe ver asi 

![assets-git/384.png](assets-git/384.png)

Ahora vamos a crear un evento `onClick` y llamar la función `handleLogin` y le ponemos un `console.log('click')` para probar que este funcionando

```
import React from 'react'

export const LoginScreen = () => {

    const handleLogin = () => {
        console.log('Click')
    }

    return (
    <div className="container">
        <div className="row mt-5">
            <div className="col-md-offset-5 col-md-3">
                <div className="form-login">
                    <h4>Bienvenido a Heroes App.</h4>
                    <p>Por favor haz click sobre Login para ingresar a la aplicación</p>
                        <button 
                            className="btn btn-dark btn-md"
                            onClick={ handleLogin}
                        >
                            login
                        </button>
                </div>
            </div>
        </div>
    </div>
    )
}
```

![assets-git/385.png](assets-git/385.png)

Si nos dirigimos a la pestaña **Components** y ubicamos el cursor sobre `Router` en las props tenemos varios objetos incrustados por defecto, una de ellos es `history`, `location` y `match`, history proporciona el memtodo para que podamos ir hacia atras o hacia adelante cuando demos click en estos botones del navegador

![assets-git/386.png](assets-git/386.png)

Para utilizar el `history` debemos usar la desestructuración en los argumentos de `LoginScreen` y en la función `handleLogin` podemos utilizar a history con el metodo `push` mandando la ruta a la que quiero navegar, en este caso mando el path `'/'` porque es este el que redirige hacia el componente `Marvel`, de tal manera que si hago click sobre `Login` voy a ver el componente `Marvel` y si doy click sobre el boton atras me devuelvo al `Login`

```
import React from 'react'
import './login.css'

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        history.push('/')
    }

    return (
    <div className="container">
        <div className="row mt-5">
            <div className="col-md-offset-5 col-md-3">
                <div className="form-login">
                    <h4>Bienvenido a Heroes App.</h4>
                    <p>Por favor haz click sobre Login para ingresar a la aplicación</p>
                        <button 
                            className="btn btn-dark btn-md"
                            onClick={ handleLogin}
                        >
                            login
                        </button>
                </div>
            </div>
        </div>
    </div>
    )
}

```

![assets-git/387.png](assets-git/387.png)

Pero si doy click en el boton de atras me redirige al `Login`

Si quisiera ocultar esta ruta para que no vuelva al `Login` **Nota:** hacer este ejercicio en una ventana en incognito y cambiar history.push por `history.replace`

```
import React from 'react'
import './login.css'

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        history.replace('/')
    }

    return (
    <div className="container">
        <div className="row mt-5">
            <div className="col-md-offset-5 col-md-3">
                <div className="form-login">
                    <h4>Bienvenido a Heroes App.</h4>
                    <p>Por favor haz click sobre Login para ingresar a la aplicación</p>
                        <button 
                            className="btn btn-dark btn-md"
                            onClick={ handleLogin}
                        >
                            login
                        </button>
                </div>
            </div>
        </div>
    </div>
    )
}

```

Probar esto en la ventana incognito, si nos dirigimos al `Login` la pantalla abre y carga el componente `Marvel` pero si vamos hacia atras ya no obtenemos el `Login`

![assets-git/389.png](assets-git/389.png)

![assets-git/387.png](assets-git/387.png)

![assets-git/388.png](assets-git/388.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Lista de heroes

Dentro de la carpeta **src** crear otra carpeta llamada **data** y alli crear el archivo **heroes.js**, que contendra la siguiente información

```
export const heroes = [
    {
        'id': 'dc-batman',
        'superhero':'Batman', 
        'publisher':'DC Comics', 
        'alter_ego':'Bruce Wayne',
        'first_appearance':'Detective Comics #27',
        'characters':'Bruce Wayne'
    },
    {
        'id': 'dc-superman',
        'superhero':'Superman', 
        'publisher':'DC Comics', 
        'alter_ego':'Kal-El',
        'first_appearance':'Action Comics #1',
        'characters':'Kal-El'
    },
    {
        'id': 'dc-flash',
        'superhero':'Flash', 
        'publisher':'DC Comics', 
        'alter_ego':'Jay Garrick',
        'first_appearance':'Flash Comics #1',
        'characters':'Jay Garrick, Barry Allen, Wally West, Bart Allen'
    },
    {
        'id': 'dc-green',
        'superhero':'Green Lantern', 
        'publisher':'DC Comics', 
        'alter_ego':'Alan Scott',
        'first_appearance':'All-American Comics #16',
        'characters':'Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz'
    },
    {
        'id': 'dc-arrow',
        'superhero':'Green Arrow', 
        'publisher':'DC Comics', 
        'alter_ego':'Oliver Queen',
        'first_appearance':'More Fun Comics #73',
        'characters':'Oliver Queen'
    },
    {
        'id': 'dc-wonder',
        'superhero':'Wonder Woman', 
        'publisher':'DC Comics', 
        'alter_ego':'Princess Diana',
        'first_appearance':'All Star Comics #8',
        'characters':'Princess Diana'
    },
    {
        'id': 'dc-martian',
        'superhero':'Martian Manhunter', 
        'publisher':'DC Comics', 
        'alter_ego':'J\'onn J\'onzz',
        'first_appearance':'Detective Comics #225',
        'characters':'Martian Manhunter'
    },
    {
        'id': 'dc-robin',
        'superhero':'Robin/Nightwing', 
        'publisher':'DC Comics', 
        'alter_ego':'Dick Grayson',
        'first_appearance':'Detective Comics #38',
        'characters':'Dick Grayson'
    },
    {
        'id': 'dc-blue',
        'superhero':'Blue Beetle', 
        'publisher':'DC Comics', 
        'alter_ego':'Dan Garret',
        'first_appearance':'Mystery Men Comics #1',
        'characters':'Dan Garret, Ted Kord, Jaime Reyes'
    },
    {
        'id': 'dc-black',
        'superhero':'Black Canary', 
        'publisher':'DC Comics', 
        'alter_ego':'Dinah Drake',
        'first_appearance':'Flash Comics #86',
        'characters':'Dinah Drake, Dinah Lance'
    },
    {
        'id': 'marvel-spider',
        'superhero':'Spider Man', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Peter Parker',
        'first_appearance':'Amazing Fantasy #15',
        'characters':'Peter Parker'
    },
    {
        'id': 'marvel-captain',
        'superhero':'Captain America', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Steve Rogers',
        'first_appearance':'Captain America Comics #1',
        'characters':'Steve Rogers'
    },
    {
        'id': 'marvel-iron',
        'superhero':'Iron Man', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Tony Stark',
        'first_appearance':'Tales of Suspense #39',
        'characters':'Tony Stark'
    },
    {
        'id': 'marvel-thor',
        'superhero':'Thor', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Thor Odinson',
        'first_appearance':'Journey into Myster #83',
        'characters':'Thor Odinson'
    },
    {
        'id': 'marvel-hulk',
        'superhero':'Hulk', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Bruce Banner',
        'first_appearance':'The Incredible Hulk #1',
        'characters':'Bruce Banner'
    },
    {
        'id': 'marvel-wolverine',
        'superhero':'Wolverine', 
        'publisher':'Marvel Comics', 
        'alter_ego':'James Howlett',
        'first_appearance':'The Incredible Hulk #180',
        'characters':'James Howlett'
    },
    {
        'id': 'marvel-daredevil',
        'superhero':'Daredevil', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Matthew Michael Murdock',
        'first_appearance':'Daredevil #1',
        'characters':'Matthew Michael Murdock'
    },
    {
        'id': 'marvel-hawkeye',
        'superhero':'Hawkeye', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Clinton Francis Barton',
        'first_appearance':'Tales of Suspense #57',
        'characters':'Clinton Francis Barton'
    },
    {
        'id': 'marvel-cyclops',
        'superhero':'Cyclops', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Scott Summers',
        'first_appearance':'X-Men #1',
        'characters':'Scott Summers'
    },
    {
        'id': 'marvel-silver',
        'superhero':'Silver Surfer', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Norrin Radd',
        'first_appearance':'The Fantastic Four #48',
        'characters':'Norrin Radd'
    }
]
```

En este archivo existe una propiedad llamada `publisher` para cada personaje, tenerla en cuenta porque a continuación dentro de la carpeta **heroes** vamos a crear otro componente llamado **HeroList.js** y alli mediante la desestructuración vamos a llamar a `publisher`

```
import React from 'react'

export const HeroList = ( { publisher }) => {
    return (
        <div>
            
        </div>
    )
}

```

por el momento se deja asi y ahora dentro de la carpeta **src** creamos otra carpeta llamada **selectors** que va a contener 2 funciones, entonces creamos la primera y nombramos un archivo llamado **getHeroByPublisher.js**.

Este archivo importa a `heroes` y recibe el argumento `publisher`, luego tiene la constante `validPublishers` con el arreglo donde incluye `DC Comics` y `Marvel Comics`, esto es para realizar la validación de la cada uno.

```
import { heroes } from '../data/heroes'

export const getHeroesByPublisher = ( publisher ) => {
    
    const validPublishers = ['DC Comics', 'Marvel Comics']
}
```

Luego se hace una validación  con negación es decir dice que si no encuentra en el `publisher` a `DC Comics` o `Marvel Comics` entonces lance un error informando que el `Publisher` que ingreso no es correcto, y se coloca el argumento `publisher` para indicar el que el mismo usuario este escribiendo

```
import { heroes } from '../data/heroes'

export const getHeroesByPublisher = ( publisher ) => {
    
    const validPublishers = ['DC Comics', 'Marvel Comics']

    if( !validPublishers.includes( publisher )) {
        throw new Error(`Publisher "${ publisher }" no es correcto`)
    }
}
```

Por ultimo si el publisher esta bien, es decir si lo escribe bien el usuario debe retornar el filtro de heroes que escoja

```
import { heroes } from '../data/heroes'

export const getHeroesByPublisher = ( publisher ) => {
    
    const validPublishers = ['DC Comics', 'Marvel Comics']

    if( !validPublishers.includes( publisher )) {
        throw new Error(`Publisher "${ publisher }" no es correcto`)
    }

    return heroes.filter( hero => hero.publisher === publisher );
}

```

Ahora pasamos a crear la siguiente función dentro de la carpeta **selectors** que se llama **getHeroById.js** la funcion recibe el id y lo retorna en caso de que lo encuentre

```
import { heroes } from "../data/heroes";

export const getHeroById = ( id ) => {

    return heroes.find(hero => hero.id === id)
}

```

Ahora regresamos al componente `HeroList` e importamos la funcion `getHeroesByPublisher(publisher)` para obtener la data, y dentro del `return` creamos una lista para hacer el barrido de los heroes obteniendo a la propiedad `superhero` 

```
import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'

export const HeroList = ( { publisher }) => {

    const heroes = getHeroByPublisher( publisher )
    return (
        <ul>
            {
                heroes.map( hero => (
                    <li
                        key={ hero.id }>
                            { hero.superhero }
                    </li>
                ))
            }
        </ul>
    )
}
```

Lo siguiente que hay que hacer es importar al componente `HeroList` a `MarvelScreen`, y pasar el `Publisher` en este caso estamos entrando a la validacion de la función `getHeroesByPublisher`

```
import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {

    return (
        <div>
            <h1>MarvelScreen</h1>
            <HeroList publisher="Marvel Comics"/>
        </div>
    )
}

```

y luego realzar lo mismo en `DcScreen`

```
import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
    return (
        <div>
            <h1>DcSreen</h1>
            <hr />
            <HeroList publisher="DC Comics" />
        </div>
    )
}

```

El resultado de hace esto, es que en el navegador tenemos la lista de superheroes de Marvel Comics y Dc Comics

![assets-git/390.png](assets-git/390.png)

![assets-git/391.png](assets-git/391.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Tarjetas con la información del Héroe

Ahora vamos a cambiar la forma en que se presenta el componente `HeroList` modificando la etiqueta `<ul>` por `<div>` y añadiendo algunas clases de Bootstrap

```
import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'


export const HeroList = ({ publisher }) => {

        const heroes = getHeroesByPublisher( publisher )
    return (
        <div className="card-columns">
            {
                heroes.map( hero => (
                    <li
                        key={ hero.id }>
                            { hero.superhero }
                    </li>
                ))
            }
        </div>
    )
}
```

y dentro de la carpeta **heroes** creamos un nuevo componente llamado **HeroCard.js** donde vamos a extraer las propiedades que queramos exportar y luego llevar al componente `HeroList` pero en forma de componente

```
import React from 'react'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        <div>
            { superhero }
        </div>
    )
}
```

Ahora el componente `HeroCard` lo traemos y lo importamos a `HeroList`, este pedazo de codigo `{ ...hero }` indica que se esta haciendo copía de cada una de las propiedades de `heroes`, sin embargo en el componente anterior solo estamos presentando la información que necesitamos, que en este caso son los `superheroes`

```
import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'


export const HeroList = ({ publisher }) => {

        const heroes = getHeroesByPublisher( publisher )
    return (
        <div className="card-columns">
            {
                heroes.map( hero => (
                    <HeroCard
                        key={ hero.id }
                            { ...hero }
                    />
                ))
            }
        </div>
    )
}

```

Ademas cambiamos en **login.css** la clase que se llamaba `container` por `containerLogin`

Al realizar este cambio tambien se debe modificar el componente `LoginScreen`, cambiar `<div className="container">` por `<div className="containerLogin">`

Dentro de la carpeta de **routers** creamos el archivo `dashboard.css` el cual contiene la clase `centrado`

```
.centrado{
    text-align: -webkit-center;
}
```
y la importamos en el componente `DashboarRoutes`, añadiendo tambien algunaas clases de Bootstrap

```
import React from 'react'
import { Navbar } from '../components/ui/NavBar'
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import './dashboard.css'

export const DashboardRoutes = () => {
    return (
        <>

        <Navbar />
        <div className="container mt-2 centrado">
        <Switch>
            <Route exact path="/marvel" component={ MarvelScreen }/>
            <Route exact path="/heroe/:heroeId" component={ HeroScreen }/>
            <Route exact path="/dc" component={ DcScreen }/>

            <Redirect to="/marvel"/>

        </Switch>
        </div>
            
        </>
    )
}
```

Despues de realizar estos ajustes, deberiamos tener una pagina de este estilo

![assets-git/392.png](assets-git/392.png)

![assets-git/393.png](assets-git/393.png)

Ahora realizamos un ultimo ajuste de diseño y condicionamos la propiedad `alter_ego` con la propiedad `characters` ya que ha varios personajes que se llaman de varias formas y en algunos casos el `alter_ego` coincide con `characters`, la condiciones sera que si no son iguales, entonces muestre todos los `characters`.

Despues de realizar el maquetado, agregamos una etiqueta `Link` que se debe de importar y se añade la ruta `./hero` y se le concatea el id, de momento no funciona, pero se deja lista para el siguiente capitulo

```
import React from 'react'
import { Link } from 'react-router-dom'
import './herocard.css'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        <div className="card ms-3" style={ { maxWidth:520 } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ `./assets/heroes/${id}.jpg`} className="card-img" alt={ superhero } />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"> {superhero} </h5>
                        <p className="card-text"> { alter_ego} </p>
                        {
                            ( alter_ego !== characters )
                            && <p className="card-text">{ characters}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted"> { first_appearance} </small>
                        </p>

                        <Link to= { `./heroe/${id}`}>
                            Mas...
                        </Link>
                    </div>
                    

                </div>
            </div>

        </div>
    )
}
```

Por el momento la pagina se ve asi y si damos click en el Link `Mas...` la siguiente pagina que va abrir es la ruta del heroe

![assets-git/394.png](assets-git/394.png)

![assets-git/395.png](assets-git/395.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Leer argumentos por URL

Si abrimos la pestaña **Components** y buscamos el componente `HeroScreen` y revisamos las props nuevamente en el `match` vamos a encontrar un metodo llamado `params` el cual trae la información del `heroeId`

![assets-git/396.png](assets-git/396.png)

A continuacion abrir el componente `HeroScreen` y si quiero extraer la información del `heroeId` existe un hook llamado `useParams` y este hook va a extraer todos los parametros que vayan por el url 

```
import React from 'react'
import { useParams } from 'react-router-dom'

export const HeroScreen = () => {

    const params = useParams();

    console.log(params);
    
    return (

        <div>
            <h1>HeroScreen</h1>
        </div>
    )
}
```

![assets-git/397.png](assets-git/397.png)

tambien se puede usar la desestructuracion para obtener los datos del heroe a traves de su id y tambien obtener todos los datos del objeto de cada heroe mediante la funcion `getHeroById`

```
import React from 'react'
import { useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    const { heroeId } = useParams();

    const hero = getHeroById( heroeId )

    console.log(hero);

    return (

        <div>
            <h1>HeroScreen</h1>
        </div>
    )
}
```

![assets-git/398.png](assets-git/398.png)

De momento el ejercicio esta bien realizado, pero si alguna persona coloca el path del heroe mal, la pagina enseguida va a generar un `undefined`, porque logicamente el id no contiene otros argumentos, por ejemplo, se deberia buscar la ruta http://localhost:3000/heroe/marvel-spider y no esta ruta http://localhost:3000/heroe/marvel-spider143242 porque arroja `undefined`

![assets-git/399.png](assets-git/399.png)

Ahora vamos a extraer la información del heroe con la desestructuración, pero es necesario hacer un redireccionamiento de la pagina porque de otro modo va a mostrar un error

```
import React from 'react'
import { useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    const { heroeId } = useParams();

    const hero = getHeroById( heroeId )

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (

        <div>
            <h1>HeroScreen</h1>
        </div>
    )
}
```

![assets-git/400.png](assets-git/400.png)

y para manejar este error lo unico que se debe hacer es añadir una condición para manejarlo

si el id del heroe no es correcto lo redirige al componente que tiene el path `"/"` es decir que lo va a redirigir hacia el componente de `MarvelScreen`

```
import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    const { heroeId } = useParams();

    const hero = getHeroById( heroeId )

    if (!hero) {
        return <Redirect to="/" />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (

        <div>
            <h1>HeroScreen</h1>
        </div>
    )
}
```
**Nota:** Hacer la prueba buscando la ruta http://localhost:3000/heroe/marvel-spider143242, lo que debe pasar es que se debe redirigir la pagina hacia la de Marvel

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Estilos del componente HeroScreen

A continuación los estilos del componente `HeroScreen` donde se hizo la implementación del boton regresar que cumple la función de regresar a la pagina anterior y tiene una validación a traves de la función `handleReturn` y se utiliza el metodo `goBack`, Por ejemplo si la persona entra a una pagina en incognito y da click en el boton regresar lo devuelve a la pagina de inicio sin necesidad de mandar algun argumento de la ruta pero si da click en el boton de atras que viene por el navegador,  no se ha hecho un `history` este inmediatamente lo mandara a la ventana de incognito como si no se hubiera recorrido alguna pagina, ademas existe una validación si el usuario no ha realizado un recorrido y es la primer vez que da click sobre el boton regresar lo devuelve a la ruta `'/'` que por defecto es el componente de `marvel`

```
import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ( {history}) => {

    const { heroeId } = useParams();

    const hero = getHeroById( heroeId )

    if (!hero) {
        return <Redirect to="/" />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    const handleReturn = () => {

        if( history.lenght <= 2){
            history.push('/');
        } else {
            history.goBack()
        }
    }

    return (

        <div className="row mt-5">
            <div className="col-4">
                <img 
                    className="img-thumbnail"
                    src={ `../assets/heroes/${ heroeId }.jpg` }
                    alt={ superhero }/>
            </div>
            <div className="col-8">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
                </ul>

                <h5> Characters </h5>
                <p> { characters }</p>

                <button 
                    className="btn btn-outline-light"
                    onClick={ handleReturn }>
                    Regresar
                </button>
            </div>
        </div>
    )
}

```

La pagina se debe visualizar de la siguiente manera

![assets-git/401.png](assets-git/401.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### SearchComponent

Dentro de la carpeta Components, crear una carpeta llamada **search** y dentro de esta crear el componente `SearchScreen.js`, crear la estructura basica y dejar de acuerdo al siguiente bloque de codigo

```
import React from 'react'
import '../heroes/herocard.css'

export const SearchScreen = () => {
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> Formulario de busqueda </h4>
                    <hr />

                    <form>
                        <input 
                            type="text"
                            placeholder="Busca tu heroe"
                            className="form-control"
                        />

                        <button 
                            type="submit"
                            className="btn m-1 btn-block btn-outline-light"
                            >
                                Buscar...
                            </button>
                    </form>
                </div>

                <div
                    className="col-7">
                        <h4> Resultados </h4>
                        <hr />
                        
                </div>
            </div>
        </div>
    )
}


```

Ahora vamos a agregar el componente a una opción del `NavBar` para poder acceder al componente y lo modificamos de la siguiente forma

```
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
```

Despues debemos abrir el componente `DashboardRoutes` e incluir el path `/search` para poder abrir el componente

```
import React from 'react'
import { Navbar } from '../components/ui/NavBar'
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import './dashboard.css'

export const DashboardRoutes = () => {
    return (
        <>

        <Navbar />
        <div className="container mt-2 centrado">
        <Switch>
            <Route exact path="/marvel" component={ MarvelScreen }/>
            <Route exact path="/heroe/:heroeId" component={ HeroScreen }/>
            <Route exact path="/dc" component={ DcScreen }/>
            <Route exact path="/search" component={ SearchScreen } />

            <Redirect to="/marvel"/>

        </Switch>
        </div>
            
        </>
    )
}

```

Ademas se debe añadir un `h4` a las clases del archivo herocard.css

```
body {
    color: black;
}

h1, hr, h4{
    color: white;
}
```

El componente y el `NavBar` deben estar mostrando esto en el navegador

![assets-git/402.png](assets-git/402.png)

Lo siguiente que vamos a realizar es que todo lo que ingresamos al campo de texto se debe capturar a traves del `hook` que en capitulos anteriores habiamos creado.

Para esto dentro de la carpeta **src** creamos una nueva carpeta llamada **hooks** y alli copiamos el **useForm.js** que habiamos realizado y lo importamos dentro del componente `SearchScreen` y luego obtenemos el estado usando la desestructuración y realizamos la función `handleSearch` para implementarla en el formulario recordar que la manera en como actua el hook `useForm` es que recibe unos datos para inicializar el estado que en esta ocasion le llamando `searchText`, ademas de esto al formulario le agregamos el evento `onSubmit` donde llamamos la función `handleSearch` y tambien debemos agregar los atributos `name`, `value` y un evento `onChange` para llamar a la función que viene del `useForm` la cual ayuda a recibir el estado en la consola, y a modificar el estado inicializado.

Luego de esto, en la parte de los Resultados, hacemos el metodo `.map` para traer los personajes 

```
import React from 'react'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import '../heroes/herocard.css'

export const SearchScreen = () => {


    const [ values, handleInputChange] = useForm({
        searchText:''
    });

    const {searchText} = values

    const heroesFiltered = heroes;


    const handleSearch = ( e ) => {
        e.preventDefault();
        console.log(values)
    }


    return (

        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> Formulario de busqueda </h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Busca tu heroe"
                            className="form-control"
                            name="searchText"
                            value= { searchText}
                            onChange={ handleInputChange}
                        />

                        <button 
                            type="submit"
                            className="btn m-1 btn-block btn-outline-light"
                            >
                                Buscar...
                            </button>
                    </form>
                </div>

                <div
                    className="col-7">
                        <h4> Resultados </h4>
                        <hr />
                        {
                            heroesFiltered.map( hero => (
                                <HeroCard
                                    key={ hero.id }
                                    { ... hero }
                                    />
                            ))
                        }
                </div>
            </div>
        </div>
    )
}
```

De esta forma cuando insertamos una palabra en el campo de texto, la obtenemos por consola y en la pestaña Components del navegador

![assets-git/403.png](assets-git/403.png)


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Aplicar filtro de Heroes QuerytString

En el componente `SearchScreen` dentro de la función `handleSearch` vamos a realizar un `history.push` esta va a ser la forma de mandar un query en la `url` para esto hacemos, esta es la forma en como mandamos la consulta que estamos colocando en el campo de texto, recordar que `history` hay que desestructurarlo en el componente

`history.push(`?q=${ searchText }`);`

```
import React from 'react'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import '../heroes/herocard.css'

export const SearchScreen = ( { history }) => {


    const [ values, handleInputChange] = useForm({
        searchText:''
    });

    const {searchText} = values

    const heroesFiltered = heroes;


    const handleSearch = ( e ) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }


    return (

        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> Formulario de busqueda </h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Busca tu heroe"
                            className="form-control"
                            name="searchText"
                            value= { searchText}
                            onChange={ handleInputChange}
                        />

                        <button 
                            type="submit"
                            className="btn m-1 btn-block btn-outline-light"
                            >
                                Buscar...
                            </button>
                    </form>
                </div>

                <div
                    className="col-7">
                        <h4> Resultados </h4>
                        <hr />
                        {
                            heroesFiltered.map( hero => (
                                <HeroCard
                                    key={ hero.id }
                                    { ... hero }
                                    />
                            ))
                        }
                </div>
            </div>
        </div>
    )
}
```

Cuando enviemos por ejemplo una palabra como batman, vamos a obtenerla por la url

![assets-git/404.png](assets-git/404.png)

Otro lugar donde se obtiene este resultado es en las `props` del componente en la pestaña Components del navegador

![assets-git/405.png](assets-git/405.png)

Ahora debemos acceder a la ubicación para que cuando realicemos la busqueda del personaje, por que de momento si ingresamos algo aparece la estructura del query pero nada mas, entonces hacemos uso de `useLocation` a traves de una constante a la que despues le podamos hacer un `console.log`

```
    const location = useLocation();
    console.log(location);
```

```
import React from 'react'
import { useLocation } from 'react-router-dom'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import '../heroes/herocard.css'

export const SearchScreen = ( { history }) => {

    const location = useLocation();
    console.log(location);
    
    const [ values, handleInputChange] = useForm({
        searchText:''
    });

    const {searchText} = values

    const heroesFiltered = heroes;


    const handleSearch = ( e ) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }


    return (

        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> Formulario de busqueda </h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Busca tu heroe"
                            className="form-control"
                            name="searchText"
                            value= { searchText}
                            onChange={ handleInputChange}
                        />

                        <button 
                            type="submit"
                            className="btn m-1 btn-block btn-outline-light"
                            >
                                Buscar...
                            </button>
                    </form>
                </div>

                <div
                    className="col-7">
                        <h4> Resultados </h4>
                        <hr />
                        {
                            heroesFiltered.map( hero => (
                                <HeroCard
                                    key={ hero.id }
                                    { ... hero }
                                    />
                            ))
                        }
                </div>
            </div>
        </div>
    )
}
```

![assets-git/406.png](assets-git/406.png)

Alli estamos obteniendo, el path y el query pero existe una herramienta que tambien se puede utilizar y parsear el query ya que este llega como un string para esto debemos finalizar el servidor e instalar [query-String](https://www.npmjs.com/package/query-string)

asi que en la terminal ejecutamos `npm install query-string`

despues de instalar volvemos a ejecutar la terminal y encender el servidor y dentro del componente SearchScreen hacemos la importación del modulo `import queryString from 'query-string'` y ahora mandamos en el `console.log` a `location.search`

```
    const location = useLocation();
    console.log(location.search);
```

![assets-git/407.png](assets-git/407.png)

y ahora podemos hacer lo que nos dice la documentación que es parsear ese string

```
    const location = useLocation();
    console.log( queryString.parse( location.search ));
```

despues se pueden mandar otras consultas en el navegador, agregando un ampersa el valor, en este momento solo interesa el `q` que viene de query

![assets-git/408.png](assets-git/408.png)

Lo siguiente que se debe hacer entonces es desestructurar la q y mandarlo al objeto en el estado inicial, para que sea el primer argumento de busqueda cuando se mande algun campo de texto la `q = ''` es para que el objeto por defecto no sea un argumento `undefined` si no que se inicialice como un objeto vacio

```
    const location = useLocation();
    const { q = '' } = queryString.parse( location.search);

    const [ values, handleInputChange] = useForm({
        searchText:q
    });
```

```
import React from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import '../heroes/herocard.css'

export const SearchScreen = ( { history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search);

    const [ values, handleInputChange] = useForm({
        searchText:q
    });

    const {searchText} = values

    const heroesFiltered = heroes;


    const handleSearch = ( e ) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }


    return (

        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> Formulario de busqueda </h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Busca tu heroe"
                            className="form-control"
                            name="searchText"
                            value= { searchText}
                            onChange={ handleInputChange}
                        />

                        <button 
                            type="submit"
                            className="btn m-1 btn-block btn-outline-light"
                            >
                                Buscar...
                            </button>
                    </form>
                </div>

                <div
                    className="col-7">
                        <h4> Resultados </h4>
                        <hr />
                        {
                            heroesFiltered.map( hero => (
                                <HeroCard
                                    key={ hero.id }
                                    { ... hero }
                                    />
                            ))
                        }
                </div>
            </div>
        </div>
    )
}

```


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Aplicar filtro en base al QueryString

Dentro de la carpeta selectors crear una nueva funcion que se llamara **getHeroesByName.js**, el argumento que recibira sera el `name` y luego realizar un filtro de heroes

```
export const getHeroesByName = ( name ) => {
    
}
```

Luego de esto importamos a `heroes` de `data` y hacemos un `return` donde aplicamos el filtro y el campo que vamos a obtener es el de `superhero` para obtener el nombre del heroe directamente, utilizamos el metodo `toLowerCase` para que no importe si el nombre biene en mayúscula o minúscula y el metodo `includes` para que tome este campo

```
import { heroes } from "../data/heroes"

export const getHeroesByName = ( name ) => {
    return heroes.filter( hero => hero.superhero.toLowerCase().includes(name))   
}
```

y luego realizamos una validación por si el campo de texto esta vacio para que regreso un arreglo vacio

```
import { heroes } from "../data/heroes"

export const getHeroesByName = ( name ) => {

    if( name === ''){
        return [];
    }
    
    return heroes.filter( hero => hero.superhero.toLowerCase().includes(name))   
}
```

Despues de tener la función lo que hay que hacer es cambiar el `heroes` en la constante `heroesFiltered` del componente `SearchScreen` y reemplazarla por la funcion, recibiendo el argumento `searchText`, tener en cuenta eliminar la importación del `heroes` ya que no es mas necesaria

```
const heroesFiltered = getHeroesByName( searchText );
```
De esta forma cuando empiece a buscar va a empezar al personaje filtrado 

![assets-git/409.png](assets-git/409.png)

El unico inconveniente es que si se elimina todo, la lista de heroes ya no aparece, entonces podemos añadir algunas validaciones en la parte de la renderización del componente y en el push del query agregar el metodo `toLowerCase`, para que si la persona que ingrese un campo se equivoca y manda algun campo en mayuscula, la busqueda se haga en minúscula como estan los heroes en la lista

```
import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import '../heroes/herocard.css'
import { getHeroesByName } from '../../selectors/getHeroesByName'

export const SearchScreen = ( { history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search);

    const [ values, handleInputChange] = useForm({
        searchText:q
    });

    const {searchText} = values

    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]);

    


    const handleSearch = ( e ) => {
        e.preventDefault();
        history.push(`?q=${ searchText.toLowerCase() }`);
    }


    return (

        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> Formulario de busqueda </h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Busca tu heroe"
                            className="form-control"
                            name="searchText"
                            value= { searchText }
                            onChange={ handleInputChange }
                        />

                        <button 
                            type="submit"
                            className="btn m-1 btn-block btn-outline-light"
                            >
                                Buscar...
                            </button>
                    </form>
                </div>

                <div
                    className="col-7">
                        <h4> Resultados </h4>
                        <hr />

                        { (q==='')
                        &&
                        <div className="alert alert-info">
                            Busca un superheroe
                        </div>
                         }

                        {
                            (q !== '' && heroesFiltered.length === 0 )
                            && 
                            <div className="alert alert-danger">
                                El argumento {q} no es valido
                            </div>
                        }

                        {
                            heroesFiltered.map( hero => (
                                <HeroCard
                                    key={ hero.id }
                                    { ... hero }
                                    />
                            ))
                        }
                </div>
            </div>
        </div>
    )
}

```

![assets-git/411.png](assets-git/411.png)

![assets-git/412.png](assets-git/412.png)

![assets-git/413.png](assets-git/413.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Context y reducer de mi aplicación

En este capitulo lo que vamos a realizar es trabajar en la autenticación de la aplicación, es decir que si un usuario va directamente al path y escribe `/marvel` no pueda ingresar a la aplicación si no hasta cuando haga click en el boton login de la pantalla principal, apra esto es necesario crear un Context y un Reducer

Dentro de la carpeta **src** crear carpeta **auth** y dentro de esta crear a **authReducer.js**, recordar que un reducer es una funcion que recibe un estado y una accion y que dentro de este se usa un `switch` para manejar diferentes casos

```
export const authReducer = ( state = {}, action) => {
    switch ( action.type ) {
        case 'login':

            break;

        default:

            break;
    }
}
```

Despues dentro de la carpeta **src** crear otra carpeta la cual se llamara **types** y contendra el archivo **types.js**, este archivo va a contener todos los types de la aplicación y la acción que va a contener es el `login` y el `logout`

```
export const types = {
    login: '[auth] login',
    logout: '[auth] logout'
}
```

Ahora hay que regresar al `authReducer` y alli importar a `types`, entonces los casos ahora no se manejaran entre string si no como un objeto que llama una acción `types.login` y dentro de este se va a retornar todo lo que mande el `action.payload`, donde posiblemente se podra mandar el nombre de usuario, correo o algo que se quiera y ademas se va a pasar la autenticacion con un `logged` en `true` si pasa la autenticación, en el caso del `logout` estara en `false`

```
import { types } from "../types/types";

export const authReducer = ( state = {}, action) => {
    switch ( action.type ) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            return{
                logged: false
            }


        default:

            return state;
    }
}
```

Lo siguiente que hay que realizar es crear el `AuthContext` en la carpeta **auth** y la llamamos **AuthContext.js**, recordando que este provee un Componente padre para tener control sobre los componentes hijos a traves del `AuthContext.Provider`, el archivo lo unico que contendra sera esto


```
import { createContext } from "react";

export const AuthContext = createContext();
```

Dentro del componente `HeroesApp` el cual es el punto inicial de la aplicación importamos a `AuthContext` y en sus `props` va a recibir un `user` y un `dispatch` lo cual sera lo que se va a distribuir entre los componentes hijos, tambien es necesario el manejo de `useReducer` recordando que recibe un reducer, un estado inicial e init.

El reducer sera `authReducer`, el estado inicial sera un objeto vacio `{}` y el init, sera una validación donde se obtendra al usuario en localstorage, si no esta autenticado, el logged estara en `false`

```
import React, { useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init)
    return (

            <AuthContext.Provider value = {{ user, dispatch } }>

            <AppRouter />

            </AuthContext.Provider>

    )
}

```

En la pestaña Components del navegador en el Context.Provider, debemos ver la propiedad user con el `logged` en `false`

![assets-git/414.png](assets-git/414.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Login de un usuario

Ahora lo que debemos hacer es extraer en el componente `LoginScreen` extraer el `dispatch` del `AuthContext` y mandarlo en la función  `handleLogin`, alli el `dispatch` contendra a `types.login` y adicionalmente enviaremos al usuario que en este caso sera mi nombre y el logged en `true`

```
import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';
import './login.css'

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {
        /* history.replace('/') */
        dispatch({
            type: types.login,
            payload: {
                name: 'jeyfred.calderon',
            }
        })

    }

    return (
    <div className="containerLogin">
        <div className="row mt-5">
            <div className="col-md-offset-5 col-md-3">
                <div className="form-login">
                    <h4>Bienvenido a Heroes App.</h4>
                    <p>Por favor haz click sobre Login para ingresar a la aplicación</p>
                        <button 
                            className="btn btn-dark btn-md"
                            onClick={ handleLogin}
                        >
                            login
                        </button>
                </div>
            </div>
        </div>
    </div>
    )
}
```

como tenemos comentada la linea `/* history.replace('/') */` si en este momento hacemos click sobre el boton login no va a ingresar a la aplicación, pero podremos observar en la pestaña Components del navegador que el usuario se esta enviando y que ademas el logged esta en `true`, esto significa que paso por el reducer hizo todo el procedimiento  y quedo autenticado

![assets-git/415.png](assets-git/415.png)

Nuevamente para poder navegar a la aplicación se debe agregar la linea comentada despues del `dispatch`

```
    const handleLogin = () => {
        
        dispatch({
            type: types.login,
            payload: {
                name: 'jeyfred.calderon',
            }
        })

        history.replace('/')

    }
```

Ahora lo que queremos es que al ingresar podamos presentar el nombre en el `NavBar`, de esta forma podria ser mas segura y verificación autenticada, para eso debemos abrir el componente `NavBar` y alli traer el useContext, extrayendo al usuario con su valor por defecto el cual es `name` y crear un `NavLink` mas para poder presentar los datos del usuario

```
import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';

export const Navbar = () => {

    const { user: { name } }= useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar- w-10 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info" >
                        { name }
                    </span>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
```

![assets-git/416.png](assets-git/416.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Logout del usuario

Vamos a modificar el `Logout` que se encuentra en el componente `NavBar` y va a dejar de ser un `NavLink` porque lo vamos a transformar en una etiqueta de boton

```
                    <button className="nav-item nav-link btn" style={{ fontSize:'87%'}}>
                        Logout
                    </button>
```

Este Logout se modifica porque ahora va a tener un evento `onClick` que va a recibir a la funcion `handleLogout` y esta va a tener el dispatch que va a disparar el logged en `false` y ademas va a redireccionar hacia el componente del `login`.

```
import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = ( ) => {

    const { user: { name }, dispatch }= useContext(AuthContext);

    const handleLogout = () => {
        dispatch({
            type: types.logout
        })
        
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar- w-10 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info" >
                        { name }
                    </span>
                    <button 
                        className="nav-item nav-link btn" style={{ fontSize:'87%'}}
                        onClick={ handleLogout }>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
```
Para hacer esta prueba antes de redirigir hacia el `logout`, vemos en la pestaña components que esta la información de usuario, la prueba es que al hacer click en logout la informacion de usuario debe desaparecer en el NavBar y en los props del hook

![assets-git/417.png](assets-git/417.png)

![assets-git/418.png](assets-git/418.png)

El `NavBar` esta contenido dentro de un `Context.Provider`, esto no significa que haga parte de las rutas pero si puede hacer uso de un hook llamado `useHistory` a traves de este, se puede hacer uso de `history` para hacer el logout de la pagina

```
import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = ( ) => {

    const { user: { name }, dispatch }= useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {
        dispatch({
            type: types.logout
        })
        
        history.replace('/login')
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar- w-10 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info" >
                        { name }
                    </span>
                    <button 
                        className="nav-item nav-link btn" style={{ fontSize:'87%'}}
                        onClick={ handleLogout }>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
```

De esta forma el logout ocurre de manera inmediata

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Rutas privadas

En este capitulo se va a realizar la protección de todas las rutas, ya que actualmente si estamos en el login y cambiamos el path en la url por ejemplo a http://localhost:3000/marvel, http://localhost:3000/, http://localhost:3000/dc o http://localhost:3000/search, tenemos acceso a cualquiera de los componentes, no es necesario, hacer click en el login para poder acceder y la idea de esta y en otras aplicaciones es que el usuario se deba autenticar para poder tener acceso a todas las rutas que proporcione una pagina.

Para esto dentro de la carpeta **routers** vamos a crear un nuevo componente llamado **PrivateRoute.js** y generamos la estructura basica 

```
import React from 'react'

export const PrivateRoute = () => {
    return (
        <div>
            
        </div>
    )
}
```

Si revisamos el componente de AppRouter, vemos que el acceso principal a todas las rutas es el `DashBoardRoutes` que tiene el path mas general `'/'`, entonces es alli donde debemos buscar proteger todas las rutas.

Regresando al componente de `PrivateRoute` en los argumentos se pasa un objeto para inicializar todas las `props` del componente.

La primer propiedad que se pasa es `isAuthenticated` porque se va a realizar una condición para poder acceder a todas las rutas, la segunda propiedad que va a tener es el `component` pero como la sintaxis  en React de todos los componentes es mayúscula se puede renombrar con `:` y nombrar en mayúscula `component : Component`, todos los demas argumentos como `exact`, `path` se requieren recuperar por tanto se agrega el operador rest que esta indicado mediante `...rest`

```
import React from 'react'

export const PrivateRoute = ({
    isAuthenticated,
    component : Component,
    ...rest
}) => {
    
    return (
        <div>
            
        </div>
    )
}
```

Despues se renderiza el `Route` pasandole todas las propiedades con el operador spread y a continuación de la etiqueta `<Route { ...rest } />`.

Luego se pasa la condición a traves de la propiedad `component` y debe recibir los `props` de ella que son history, params y otras propiedades y dentro de esta en el callback se agrega una condición ternaria con `isAuthenticated`, la condición dice que si el usuario esta autenticado, redirija al componente, de lo contrario se hace una redirección al mismo login y no accede la pagina a otra ruta

```
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({
    isAuthenticated,
    component : Component,
    ...rest
}) => {
    
    return (
        <Route { ...rest }
            component= { (props) => (
                ( isAuthenticated )
                ? (<Component { ...props }/>)
                : (<Redirect to="/login" />)
            )}
        
        />
    )
}

```

Ahora es necesario importar los `prop-types` para terminar de condicionar la ruta privada y esto hace parte de las buenas practicas.

isAuthenticated es un proptype de caracter booleano y es requerido y component es un proptype que es un functional component y es requerido

```
import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({
    isAuthenticated,
    component : Component,
    ...rest
}) => {
    
    return (
        <Route { ...rest }
            component= { (props) => (
                ( isAuthenticated )
                ? (<Component { ...props }/>)
                : (<Redirect to="/login" />)
            )}
        
        />
    )
}

PrivateRoute.protoTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
```

Ahora pasamos al componente `AppRouter` y cambiamos el Route del `DashboardRoutes` por `PrivateRoute` que es la ruta o componente que tiene acceso a todas las demas rutas

```
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />

                    <PrivateRoute path="/" component={ DashboardRoutes } />
                </Switch>
            </div>
        </Router>
    )
}
```

Lo ultimo que falta es saber si en el `AppRouter` el usuario esta autenticado para poder ingresar, entonces se debe usar el hook `useContext` y desestructurar al usuario para luego llamarlo en la condición del `PrivateRoute`, primero hacemos un `console.log(user)`

```
import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);
    console.log(user)
    
    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />

                    <PrivateRoute path="/" component={ DashboardRoutes } />
                </Switch>
            </div>
        </Router>
    )
}

```

En este caso hice click en el boton login y por eso aparece el `logged` en `true`, de lo contrario seria `false` por defecto

![assets-git/419.png](assets-git/419.png) 

Luego pasamos al `PrivateRoute` la propiedad isAuthenticated con el usuario logueado

```
import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);
    console.log(user)
    
    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />

                    <PrivateRoute 
                        path="/" 
                        component={ DashboardRoutes } 
                        isAuthenticated={ user.logged }
                        />
                </Switch>
            </div>
        </Router>
    )
}

```

De esta manera ya se puede volver a tener acceso a todas las rutas configuradas en la aplicación al dar click en el boton login

![assets-git/420.png](assets-git/420.png) 


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Rutas publicas

En la ruta publica ocurre lo contrario a la ruta privada con una modificación, para esto creamos dentro de la carpeta **routers** el componente **PublicRoute.js**, este lleva practicamente lo mismo que la ruta privada solo que hay una negación en la autenticación `(! isAuthenticated )` y que el `Redirect` esta redirigiendo hacia la ruta general `'/'`

```
import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

export const PublicRoute = ({
    isAuthenticated,
    component : Component,
    ...rest
}) => {
    
    return (
        
        <Route { ...rest }
            component= { (props) => (
                (! isAuthenticated )
                ? (<Component { ...props }/>)
                : (<Redirect to="/" />)
            )}
        
        />
    )
}

PublicRoute.protoTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
```

Tambien se debe importar en `AppRouter` y utilizar el prop `isAuthenticated` para que haga la validación

```
import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);
    console.log(user)
    
    return (
        <Router>
            <div>

                <Switch>
                    <PublicRoute 
                        exact path="/login" 
                        component={ LoginScreen } 
                        isAuthenticated={ user.logged }
                        />

                    <PrivateRoute 
                        path="/" 
                        component={ DashboardRoutes } 
                        isAuthenticated={ user.logged }
                        />
                </Switch>
            </div>
        </Router>
    )
}

```

En el caso que el usuario este ubicado sobre la ruta de `/marvel`, `/dc` o `/search `y intente ir hacia la ruta `/login`, a menos que haga un logout la ruta se va a recargar hacia la general `/`

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Proyecto JournalApp

Este proyecto va a tener autenticación con Google y va a hacer uso de Redux, estas son las vistas de la aplicación donde se utilizo [sass](https://sass-lang.com/install) para ello se tuvo que hacer una estructura de estilos separados tambien por componentes que se encuentra en la carpeta **styles**, a continuación las vistas de la aplicación que quedaran adjuntas para continuar el proyecto y empezar a utilizar redux

![assets-git/421.png](assets-git/421.png) 

![assets-git/422.png](assets-git/422.png) 

![assets-git/423.png](assets-git/423.png) 

![assets-git/424.png](assets-git/424.png) 

para ejecutar el proyecto en el momento con estilos, se debe clonar del repositorio [Journal App](https://github.com/jeyfredc/JournalApp-Estilos) y luego de esto ejecutar `npm i` o `yarn`.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Configurando Redux en JournalApp

A continuación se dejan los enlaces para revisar la documentación e instalación de Redux, el primer [enlace](https://es.redux.js.org/) tiene la documentación en español y el funcionamiento como tal de lo que es Redux y el segundo [enlace](https://react-redux.js.org/) es la aplicabilidad de Redux en React haciendo uso de hooks.

Para realizar la instalacióin se debe abrir la terminal, ubicar la carpeta del proyecto y ejecutar el comando 

`npm install react-redux redux` o el comando `yarn add react-redux redux`.

Inicialmente empezaremos a trabajar en el login, en lo que seria la autenticación.

En la carpeta src crear una nueva carpeta llamada **reducers**, dentro de esta crear la función llamada **authReducer.js**, alli se crea la función `authReducer` que recordando como funciona el reducer recibe como argumento un estado y una acción

```
export const authReducer = (state, action ) => {
    
}
```

El state se inicializa como un objeto vacio `state = {}`. La forma en como funcionara el estado sera que cuando esta vacio es porque no hay autenticación y cuando la hay tendra un `uid` que proporcionara la base de datos no relacional que usaremos la cual es firebase y tambien el nombre de usuario.

Luego de esto vamos a crear y dejar listo el `switch` para hacer el manejo de las acciones

```
export const authReducer = (state = {}, action ) => {

    switch (action.type) {
        case value:
            
            break;
    
        default:
            break;
    }

}
```

y ahora dentro de la carpeta **src** crear una nueva carpeta llamada **types**, dentro de esta crear otra función llamada **types.js** esta contendra un objeto donde van a estar las acciones las cuales seran `login` y `logout`

```

export const types = {
    login : '[Auth] login',
    logout: '[Auth] logout'
}
```

nuevamente nos devolvemos a la función `authReducer` y alli llamamos estas acciones, como se habia mencionado anteriormente el estado cuando haga login va a recibir un uid y un name y cuando se haga logout sera un objeto vacio

```
import { types } from "../types/types";

export const authReducer = (state = {}, action ) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
            
        case types.logout:
            return { }
    
        default:
            return state;
    }

}
```

Ahora vamos a utilizar el **store** el cual tiene que ver propiamente con Redux, para esto dentro de la carpeta **src**, creamos una carpeta llamada **store** y dentro de esta la función llamada **store.js**.

Se debe importar createStore de redux y luego crear una constante que llame esta funcion

```
import { createStore } from 'redux'

export const store = createStore();
```

la funcion `createStore` solo recibe como argumento un reducer que en este caso seria el unico reducer que hemos creado `authReducer`, pero puede pasar que tengamos que hacer uso de mas reducer por lo cual es necesario crear una constante que recibe varios reducers y luego pasarlo como argumento de la función.

La constante que crearemos se llamara `reducers` y este a su vez recibira una función llamada `combineReducers` que viene de `redux`
, esto sirve para que si en algun momento se crea otro reducer se pueda pasar como argumento y no se tenga que realizar alguna refactorización de codigo

```
import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({

})

export const store = createStore(reducers);
```

Despues dentro del objeto creamos una propiedad llamada `auth` que va a ser manejada por el `authReducer` que ya creamos 

```
import { createStore, combineReducers } from 'redux'
import { authReducer } from '../reducers/authReducer';

const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore(reducers);
```

Lo que sigue despues de esto es dirigirnos al punto mas alto de la aplicación, en teoria seria **index.js** pero este archivo por lo general se trata de no moificar asi que el siguiente punto mas alto de la aplicación es el archivo **JournalApp.js** y alli se importa `Provider` de `react-redux`, `Provider` es utilizado como un componente mas el cual provee información a toda la aplicacion y recibe la propiedad store que inicializa la función que ya creamos la cual llamamos `store`. Esta es toda la configuración que hay que hacer para tener `Redux` implementado en toda la aplicación

```
import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store/store';
import { AppRouter } from './routers/AppRouter';

export const JournalApp = () => {
    return (
        <Provider store={ store }>

            <AppRouter />

        </Provider>
    )
}

```

Si nos dirigimos al navegador y revisamos la pestaña **Components** veremos que tendremos el PRovider, ReactRedux.Provider, etc y tendremos el store como props y ademas un hook proporcionado llamado Memo que esta guardando el estado de la aplicación la cual en el momento es un objeto vacio

![assets-git/425.png](assets-git/425.png) 

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Redux DevTools

Si en el momento abrimos el navegador y ubicamos la pestaña **Redux** va a salir una información de que el store no ha sido encontrado 

![assets-git/426.png](assets-git/426.png) 

Para que esto empiece a funcionar debemos revisar el siguiente [enlace](https://github.com/zalmoxisus/redux-devtools-extension#usage), la cual indica una configuración adicional que debemos realizar, por el momento para google Chrome

![assets-git/427.png](assets-git/427.png) 

Lo que debemos hacer es copiar la linea que esta en color verde e incluirla en el archivo **store.js** debajo del argumento `reducers` que recibe la función `createStore`

```
import { createStore, combineReducers } from 'redux'
import { authReducer } from '../reducers/authReducer';

const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
```

Si regresamos al navegador despues de guardar, obtenemos la vista de los DevTools de Redux

![assets-git/428.png](assets-git/428.png) 

Alli hay varias pestañas como el `Action`, `State`, etc, donde podremos por ejemplo ver el estado de la aplicación lo cual por el momento es un objeto vacio

![assets-git/429.png](assets-git/429.png) 

en la pestaña `Chart` vemos el punto de acceso a la aplicación y a medida que vayamos avanzando se iran viendo las diferentes herramientas que posee Redux

![assets-git/430.png](assets-git/430.png)

**Nota:** Es necesario aclarar que esta herramienta solo servira en un ambiente de desarrollo, cuando la pagina este puesta en producción no podremos tener acceso a los DevTools de Redux

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Primer dispatch de una acción a nuestro Store

Lo primero que vamos a realizar antes de crear la acción es utilizar el custom hook creado en capitulos anteriores. Lo unico que se debe hacer es crear en la carpeta **src** una carpeta llamada **hooks**, crear el archivo **useForm.js** y utilizar este bloque de codigo

```
import { useState } from "react"


export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange = ({target}) => {
        
        setValues({
            ...values,
            [target.name]: target.value
        })    
    }
    
return [values, handleInputChange, reset];
}
```

El hook se va a implementar en el componente `LoginScreen` asi que alli vamos a utilizar a `values` y la función `handleInputChange` e inicializamos el estado con los nombre correspondiente que vamos a recibir en el formulario, los cuales seran el email y el password.

Despues de realizar esto, desestructuramos el estado que acabamos de inicializar para llamarlo en el `value` del formulario

```
import React from 'react';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const [ values, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values; 
```

Ahora creamos el `value` en cada input, llamamos cada propiedad en el `value` correspondiente y tambien el evento `onChange` donde recibiremos la función `handleInputChange`

```
import React from 'react';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const [ values, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values; 


    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form>

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    value= { email }
                    className="auth__input"
                    autoComplete="off"
                    onChange= { handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    value= { password }
                    className="auth__input"
                    onChange= { handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Login
                </button>

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account    
                </Link>

            </form>
        </>
    )
}

```

Despues de esto creamos el submit de la información que insertemos en el formulario del login y para esto creamos la función `handleLogin` y en esta para comprobar que todo este funcionando correctamente hacemos un console.log del `email` y el `password` y creamos el evento `onSubmit` donde llamamos la función `handleLogin` en el formulario

```
import React from 'react';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const [ values, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values; 

    const handleLogin = (e) => {
        e.preventDefault();
        console.log( email, password)
    }


    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit= { handleLogin }>

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    value= { email }
                    className="auth__input"
                    autoComplete="off"
                    onChange= { handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    value= { password }
                    className="auth__input"
                    onChange= { handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Login
                </button>

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account    
                </Link>

            </form>
        </>
    )
}

```

Ingresamos correo y contraseña y vemos que al hacer click en Login obtenemos por consola el correo y la contraseña ingresada y ademas verificamos que el estado se este cambiando en los Components

![assets-git/431.png](assets-git/431.png)

![assets-git/432.png](assets-git/432.png)

Ahora para manejar la accion vamos a crear la primera que sera la autenticación, para esto dentro de la carpeta **src** crearemos una nueva carpeta llamada **actions** la cual contendra el archivo **auth.js** que es donde manejaremos la acción que llama el reducer **authReducer.js**

Alli vamos a crear la accion `login` la cual va a recibir el uid y el displayName en los argumentos y luego demos importar los types para que se conecten con el reducer y el payload como lo establecimos en ese archivo

**auth.js**

```
import { types } from "../types/types"


export const login = ( uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})
```

Ahora en el componente `LoginScreen` se necesita hacer el `dispatch` de esa acción para esto debemos utilizar un hook de Redux llamado `useDispatch` el cual debemos importar de react-redux `import { useDispatch } from 'react-redux'`.

Luego debemos importarlo en una constante llamada `dispatch`, en esta constante y en la función `handleLogin` llamamos a dispatch y le pasamos como argumento la accion la cual es `login` y viene de la carpeta **actions**, lo cual se debe verificar para no tener ningun error

```
import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { login } from '../../actions/auth'

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ values, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values; 

    const handleLogin = (e) => {
        e.preventDefault();
        // console.log( email, password)
        dispatch(login)
    }


    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit= { handleLogin }>

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    value= { email }
                    className="auth__input"
                    autoComplete="off"
                    onChange= { handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    value= { password }
                    className="auth__input"
                    onChange= { handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Login
                </button>

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account    
                </Link>

            </form>
        </>
    )
}

```

Para probar que este funcionando el dispatch en el `login` pasamos el uid con un numero cualquiera y el nombre

```
    const handleLogin = (e) => {
        e.preventDefault();
        // console.log( email, password)
        dispatch(login(12345, 'Pepe'))
    }
```

Ahora nos dirigimos al navegador en la ruta del login 

![assets-git/433.png](assets-git/433.png)

Cuando hacemos click en Login realizamos el dispatch de una nueva accion que vemos reflejada en la pestaña Diff

![assets-git/434.png](assets-git/434.png)

y tambien lo veremos de una forma mucho mas clara en la pestaña State, donde encontramos el **uid** y el **name**

![assets-git/435.png](assets-git/435.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Firebase y Firestore

En el siguiente [enlace](https://firebase.google.com/), deben realizar la autenticación con google y luego dirigirse a esta ventana para agregar el primer proyecto.

**Nota:** En caso que se presente un error con el navegador Google Chrome, cambiar e intentarlo en Firefox

![assets-git/436.png](assets-git/436.png)

Despues de dar click sobre la opcioón de agregar mi primer Proyecto, dar un nombre al mismo y la siguiente ventana que aparezca deshabilitar la opción de Google Analytics y luego dar click en Crear Proyecto, luego de esto se va a empezar a crear el proyecto y va a demorar unos minutos, por ultimo saldra esta pantalla.

![assets-git/437.png](assets-git/437.png)

Despues de esto dar click sobre la opción Compilación y alli seleccionar Authentication

![assets-git/438.png](assets-git/438.png)

Va a salir una ventana grande que dice Comenzar, dar click alli y ubicar la pestaña Sign-in method

![assets-git/439.png](assets-git/439.png)

Se puede seleccionar las opciones que se deseen pero en este proyecto se hara la autenticación con el correo y Google, para esto, seleccionar las dos opciones, verificar que queden habilitados y guardar

Por ultimo si el App esta en ejecución, finalizarlo e instalar en la terminal el siguiente comando

`npm install firebase`

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Thunk Middleware Acciones asincronas

En el siguiente [enlace](https://www.npmjs.com/package/redux-thunk) queda la documentación para realizar la instalación de thunk el cual es un middleware el cual es el encargado de hacer peticiones http de manera asincrona.

Empezaremos ejecutando en la terminal el comando 

`npm install --save redux-thunk`

Despues de realizar la instalación abrimos el archivo **store.js** y alli hacemos la importación del modulo que acabamos de instalar `import thunk from 'redux-thunk';`

```
import { createStore, combineReducers } from 'redux'
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
```

En el store ya tenemos un middleware el cual es esta linea de codigo `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`, pero como vamos a agregar otro middleware debemos añadir la siguiente linea al codigo e importar `compose` en redux

`const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;`

```
import { createStore, combineReducers, compose } from 'redux'
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
```

posteriormente cambiamos toda la linea donde teniamos el middleware anterior y lo reemplazamos por `composeEnhancers`, importamos de redux `applyMiddleware` y lo utilizamos en la función para incluir a `thunk`

```
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);
```

y nuevamente lanzar la aplicación y verificar que no existan errores

Ahora debemos realizar la petición asincrona de ejemplo, para esto abrimos el archivo **auth.js** y alli creamos la función `startEmailPassword` esta recibe como argumento el `email` y el `password`, a su vez esta función debe retornar un callback que recibe como argumento `dispatch`, este dispatch esta proporcionado por thunk y el retorno de la función a traves de un `setTimeout` hace un dispatch de la acción `login`.

```
import { types } from "../types/types"

export const startLoginEmailPassword = ( email, password )=> {
    return (dispatch) => {
        setTimeout(() => {
            
            dispatch( login ( 123, 'Pedro'))

        }, 3500);
    }
}


export const login = ( uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})
```

Ahora pasamos al archivo **LoginScreen.js** y en vez de hacer un dispatch de `login` en la funcion `handleLogin`, hacemos un dispatch de la nueva función asincrona que creamos en **auth.js**, debemos importarla y alli pasarle los argumentos del email y el password

```
import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { startLoginEmailPassword } from '../../actions/auth'

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ values, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values; 

    const handleLogin = (e) => {
        e.preventDefault();
        // console.log( email, password)
        dispatch( startLoginEmailPassword( email, password ))
    }

```

Lo que sigue en el return del componente se deja como esta y ahora si nos dirigimos al navegador, insertamos cualquier correo y contraseña y damos click en Login, despues de 3 segundos en el estado de Redux debemos obtener los datos enviados


![assets-git/440.png](assets-git/440.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Configurar Firebase y Google Sign in

Nuevamente abrimos el proyecto de Firebase, damos click en Descripcion general y luego damos click en el icono Web

![assets-git/441.png](assets-git/441.png)

Luego agregamos el nombre para registrar la App puede ser cualquier nombre y luego damos click en Registrar app

![assets-git/442.png](assets-git/442.png)

Luego saldra una ventana como esta donde vamos a copiar lo que esta seleccionado en el cuadro rojo, cuando copiemos lo unico que va a cambiar es el keyword `var` por `const`

![assets-git/443.png](assets-git/443.png)

Despues de copiar dentro de la carpeta **src** creamos otra carpeta llamada **firebase** y dentro de esta un archivo llamado **firebase-config.js** donde hacemos varias importaciones, la primera es la de firebase, la segunda y la tercera hacen referencia a las carpetas que tendra acceso firebase

```
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDYAApyi8BbpThsORzAYy6Lv62jL48tGfk",
    authDomain: "jorunalapp-1eb82.firebaseapp.com",
    projectId: "jorunalapp-1eb82",
    storageBucket: "jorunalapp-1eb82.appspot.com",
    messagingSenderId: "67664483135",
    appId: "1:67664483135:web:05fbcab3ead19f3b01798a"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
```

Seguido de esto hay que hacer una configuración mas en el archivo, adjunto en este [enlace]() se puede ver un curso pequeño sobre firebase y a continuación creamos una constante db que apunta a la referencia de firebase y luego agregamos un nombre significativo `googleAuthProvider` que tiene que ver con la autenticación de Google, esto se hace tambien para las otras plataformas donde nos queramos autenticar y luego exportamos las constantes creadas

```
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDYAApyi8BbpThsORzAYy6Lv62jL48tGfk",
    authDomain: "jorunalapp-1eb82.firebaseapp.com",
    projectId: "jorunalapp-1eb82",
    storageBucket: "jorunalapp-1eb82.appspot.com",
    messagingSenderId: "67664483135",
    appId: "1:67664483135:web:05fbcab3ead19f3b01798a"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
```

Lo siguiente que hay que hacer es regresar al archivo **auth.js** y crear una nueva función asincrona que hara la petición a firebase para hacer la autenticación

```
import { types } from "../types/types"

export const startLoginEmailPassword = ( email, password )=> {
    return ( dispatch ) => {
        setTimeout(() => {
            
            dispatch( login ( 123, 'Pedro'))

        }, 3500);
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        
    }
}


export const login = ( uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

```

alli utilizamos a `firebase` para traer el metodo auth y el metodo `signInWithPopup` donde pasamos `googleAuthProvider`, todo esto debe ser importado, luego hacemos un `.then` para esperar la promesa  un `console.log` de `userCred` que es lo que devuelve la promesa

```
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { types } from "../types/types"

export const startLoginEmailPassword = ( email, password )=> {
    return ( dispatch ) => {
        setTimeout(() => {
            
            dispatch( login ( 123, 'Pedro'))

        }, 3500);
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then ( userCredential => {
                console.log( userCredential )
            })
    }
}



export const login = ( uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})
```

Falta crear la función para autenticar el Login con google, asi que abrimos el archivo **LoginScreen.js** y creamos una nueva función llamada `handleGoogleLogin` y hace el dispatch de la nueva accion creada `startGoogleLogin` la cual se debe importar de `auth` y luego creamos el evento `onClick` y llamamos la función alli 

```
import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ values, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values; 

    const handleLogin = (e) => {
        e.preventDefault();
        // console.log( email, password)
        dispatch( startLoginEmailPassword( email, password ))
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }


    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit= { handleLogin }>

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    value= { email }
                    className="auth__input"
                    autoComplete="off"
                    onChange= { handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    value= { password }
                    className="auth__input"
                    onChange= { handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Login
                </button>

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick= { handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account    
                </Link>

            </form>
        </>
    )
}

```

Ahora nos dirigimos al navegador, hacemos click sobre el boton **Sign in with google** y deberia salir un pop-up con nuestras cuentas, seleccionamos la que tengamos

![assets-git/444.png](assets-git/444.png)

Luego nos dirigimos a la consola 

![assets-git/445.png](assets-git/445.png)

Seleccionamos y desplegamos **user** y de alli lo que nos interesa es obtener el **displayName** y el **uid** que trae firebase

![assets-git/446.png](assets-git/446.png)

Por ultimo lo unico que falta es manejar el `dispatch` de la acción, regresamos al archivo **auth.js** y en `then` desestructuramos al usuario y hacemos el dispatch enviando el `user.id` y el `user.displayName`

```
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { types } from "../types/types"

export const startLoginEmailPassword = ( email, password )=> {
    return ( dispatch ) => {
        setTimeout(() => {
            
            dispatch( login ( 123, 'Pedro'))

        }, 3500);
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then ( ({ user }) => {
                dispatch(
                    login (user.uid, user.displayName) 
                )
            });
    }
}



export const login = ( uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})
```

Nuevamente regresamos al navegador seleccionamos el boton de **Sign in with google**, ubicamos la pestaña Redux y despues de seleccionar nuestra cuenta de google, debemos obtener el uid y el name

![assets-git/447.png](assets-git/447.png)

Por ultimo si regresamos a firebase y revisamos la parte de Authentication, vamos a notar el registro con Google

![assets-git/448.png](assets-git/448.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Formulario de registro de usuarios

En este capitulo se deben obtener los datos en la ruta http://localhost:3000/auth/register, recordar que este es del archivo **RegisterScree.js** se debe obtener el nombre, el email, password y password2, para eso tendremos que usar el hook de useForm implementado en capitulos anteriores, para recordar como funciona se debe importar el hook e inicializarlo con los values que iran en cada input vacios, es decir el estado original del formulario es que primero se encuentra vacio

```
    const  [values, handleInputChange]  = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
```

Lo desestructuramos del objeto para obtener los valores uno a uno

Luego agregamos una funcion llamada handleRegister, lo ponemos en la escucha del evento e, para evitar que se recargue la pagina, agregamos dentro de este un `e.preventDefault()` y luego hacemos un console.log de cada elemento

```
    const  [values, handleInputChange]  = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2} = values;

    const handleRegistrer = (e) => {
        e.preventDefault()
        console.log(name, email, password, password2)
    }
```

por ultimo se agregan los values en los input del formulario y en la etiqueta `Form` agregamos el evento `onSubmit` y alli llamamos la funcion `handleRegister` para poder obtener por consola los elementos que digitemos en el formulario.

Recordar que en los input del formulario se agrega el evento `onChange` el cual detecta los cambios que hagamos en los espacios del formulario.

```
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const  [values, handleInputChange]  = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2} = values;

    const handleRegistrer = (e) => {
        e.preventDefault()
        console.log(name, email, password, password2)
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegistrer}>

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5">
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}

```
![assets-git/449.png](assets-git/449.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Manejo de errores del formulario

Dentro de la función `handleRegister` llamaremos otra función que validara si los campos del formulario son correctos ,entonces primero creamos esta función y para facilitar este capitulo inicializaremos el formulario con datos, esto se hace en el `useForm` colocamos algunos datos predeterminados y mas abajo agregamos la funcion `isFormValid` y hacemos un return de `true` para que al dar click sobre Register el mensaje por consola sea `El formulario se valido correctamente`

```
    const  [values, handleInputChange]  = useForm({
        name: 'Jeyfred Caderon',
        email: 'jeyfredc@gmail.com',
        password: 'reset123',
        password2: 'reset123'
    })

    const { name, email, password, password2} = values;

    const handleRegistrer = (e) => {
        e.preventDefault()
        if(formIsValid){
            console.log('El formulario se valido correctamente')
        }
    }

    const formIsValid = () => {
        return true
    }

```

![assets-git/450.png](assets-git/450.png)

Ahora hacemos las validaciones correspondientes

1. Si el nombre es igual a un espacio vacio, va a lanzar el nombre es requerido
2. Instalamos con npm en la terminal [validator](https://www.npmjs.com/package/validator) la cual es una libreria que se utiliza para validar correos y asi evitar realizar una constante con Regex, para esto ejecutamos el comando `npm i validator` y lo importamos en el `RegisterScreen.js`
3. Validamos que el password 1 y 2 sean iguales y que ademas minimo contenga 6 caracteres

```
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

export const RegisterScreen = () => {

    const  [values, handleInputChange]  = useForm({
        name: 'Jeyfred Caderon',
        email: 'jeyfredc@gmail.com',
        password: 'reset123',
        password2: 'reset123'
    })

    const { name, email, password, password2} = values;

    const handleRegistrer = (e) => {
        e.preventDefault()
        if(formIsValid()){
            console.log('El formulario se valido correctamente')
        }
    }

    const formIsValid = () => {
        if( name.trim().length === 0) {
            console.log('Name is required')
            return false
        } else if( !validator.isEmail( email )){
            console.log('Email is not valid')
            return false
        }else if( password !== password2 || password.length<5 ){
            console.log('Password should be at least 6 characters and match each other')
            return false
        }
        return true
    }
```

**Nota:** la expresión `validator.isEmail()` es propia de la libreria **validator**

Para el primer paso y poder probar que se cumpla lo que estamos validando, dejamos el campo del nombre vacio y verificamos la consola

![assets-git/451.png](assets-git/451.png)

En el segundo dejamos el campo del email sin .com o quitamos la @

![assets-git/452.png](assets-git/452.png)

En el tercero, escribimos contraseñas iguales pero menores a 6 caracteres o la primer contraseña diferente a la segunda

![assets-git/453.png](assets-git/453.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### uiReducer y Aciones

Ahora vamos a crear el reducer para hacer el dispatch de las acciones que hara el `RegisterScreen`, para esto debemos buscar la carpeta reducers y alli crear el archivo **uuiReducer.js**

dentro del archivo creamos el `initialState` el cual sera un `loading` que se inicializa en `false` y un mensaje de error que se inicializa con `null`

```
const intialState = {
    loading: false,
    msgError: null
}
```

Debajo de este hacemos el exporrt del reducer, en los parametros recibimos el `state` y el `action` y cremaos el switch para el manejo de los casos

```

const intialState = {
    loading: false,
    msgError: null
}

export const uiReducer = ( state= intialState, action) => {

    switch (action.type) {
        case value:
            
            break;
    
        default:
            break;
    }
}
```

Despues de realizar esto debemos de crear las acciones, las cuales vendran de la carpeta types y el archivo **types.js**, dentro de esta creamos la accion `uisetError` y `uiRemoveError`

```

export const types = {
    login : '[Auth] login',
    logout: '[Auth] logout',

    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Remove Error',

}
```

Despues de crearlos regresamos nuevamente a el `uiReducer` y importamos types alli en la primer acción hacemos una copia del state, no se cambia `loading` porque no interesa cambiarlo pero como se va a lanzar un mensaje de error, el elemento queda con lo que enviemos en el `action.payload` y para la acción del `uiRemoveError` el mensaje de error sera `null`, nuevamente el loading no intenera cambiarlo

```
import { types } from "../types/types";

const intialState = {
    loading: false,
    msgError: null
}

export const uiReducer = ( state= intialState, action) => {

    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }
        
        case types.uiRemoveError:
            return {
                ...state,
                msgError: null
            }
    
        default:
            return state;
    }
}
```

Ahora abrimos el **store.js** y alli importamos el `uiReducer` y lo pasamos en el objeto de los reducers para poder visualizar el state en la pestaña del navegador **Redux**

```
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);
```

Con esto recargamos la pagina y verificamos que el ui aparezca en el state

![assets-git/454.png](assets-git/454.png)

Ahora en la carpeta **actions** creamos un archivo llamado **ui.js** donde iran las acciones `setError` la cual recibira el error y la pasara a `payload` y la accion `removeError` que simplemente tomara el type que ya creamos

```
import { types } from "../types/types";

export const setError = ( error ) => ({
    type: types.uiSetError,
    payload: error
})

export const RemoveError = ( error ) => ({
    type: types.uiRemoveError
})
```

Ahora es momento de disparar los mensajes de error que estabamos validando en el **RegisterScreen**.

Para realizar esto debemos de importar el useDispatch y utilizarlo dentro del mismo y luego importar las acciones que acabos de crear en el archivo **ui.js**

despues vamos a donde estan ubicadas las validaciones y las reemplazamos por `dispatch(accion('mensaje de error'))` de tal forma que quede asi

```
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { RemoveError, setError } from '../../actions/ui';

export const RegisterScreen = () => {

    const  [values, handleInputChange]  = useForm({
        name: 'Jeyfred Caderon',
        email: 'jeyfredc@gmail.com',
        password: 'reset123',
        password2: 'reset123'
    })

    const dispatch = useDispatch()

    const { name, email, password, password2} = values;

    const handleRegistrer = (e) => {
        e.preventDefault()
        if(formIsValid()){
            console.log('El formulario se valido correctamente')
        }
    }

    const formIsValid = () => {
        if( name.trim().length === 0) {
            dispatch(
                setError('Name is required')
            )
            return false
        } else if( !validator.isEmail( email )){
            dispatch(
                setError('Email is not valid')
            )
            return false
        }else if( password !== password2 || password.length<6 ){
            dispatch(
                setError('Password should be at least 6 characters and match each other')
            )
            return false
        }
        dispatch( RemoveError() )
        return true
    }
```

Despues de realizar esto, podemos devolvernos al navegador y empezar a revisar cada una de las validaciones y ver que se cumplan una a una

1. click sobre el boton Register con los datos bien, para ver que envia Remove Error

![assets-git/455.png](assets-git/455.png)

2. Dejar el nombre vacio y verificar el mensaje de error

![assets-git/456.png](assets-git/456.png)

3. Dejar mal el correo y verificar el mensaje de error

![assets-git/457.png](assets-git/457.png)

4. Dejar mal las constraseñas y verificar el mensaje de error

![assets-git/458.png](assets-git/458.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### useSelector Obtener información del State

En este capitulo vamos a mostrar el mensaje de error en el navegador para esto vamos a hacer uso del `useSelector`, el cual es otro hook que proporciona Redux, la forma de usarlo es muy parecido a como se utiliza useDispatch, solo que se inicializa de esta forma `const state = useSelector()`, entre sus argumentos recibe el callback state y retorna el state, es decir de esta forma

`const state = useSelector( (state) => state )`

se debe importa al lado de `useDispatch` y para ver que retorna se hace un `console.log(state)`

```
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { RemoveError, setError } from '../../actions/ui';

export const RegisterScreen = () => {

    const  [values, handleInputChange]  = useForm({
        name: 'Jeyfred Caderon',
        email: 'jeyfredc@gmail.com',
        password: 'reset123',
        password2: 'reset123'
    })

    const dispatch = useDispatch()
    const state = useSelector(state => state)

    console.log(state)

    const { name, email, password, password2} = values;

    const handleRegistrer = (e) => {
        e.preventDefault()
        if(formIsValid()){
            console.log('El formulario se valido correctamente')
        }
    }

    const formIsValid = () => {
        if( name.trim().length === 0) {
            dispatch(
                setError('Name is required')
            )
            return false
        } else if( !validator.isEmail( email )){
            dispatch(
                setError('Email is not valid')
            )
            return false
        }else if( password !== password2 || password.length<6 ){
            dispatch(
                setError('Password should be at least 6 characters and match each other')
            )
            return false
        }
        dispatch( RemoveError() )
        return true
    }

```

Luego verificamos que esta retornando en el navegador

![assets-git/459.png](assets-git/459.png)

Como se puede observar trae el state que aparece cuando seleccionamos la pestaña de Redux, ahora hay que empezar a traer el objeto accediendo de esta forma en el useSelector

`const state = useSelector(state => state.ui)`

Esto traera lo que esta dentro del objeto

![assets-git/460.png](assets-git/460.png)

y como es un objeto ahora uso la desestructuración para obtener el msgError directamente

```
const { msgError } = useSelector(state => state.ui)

console.log(msgError)
```

![assets-git/461.png](assets-git/461.png)

por ultimo modificamos la parte del html para mostrar el error debajo de la palabra **Register**

```
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { RemoveError, setError } from '../../actions/ui';

export const RegisterScreen = () => {

    const  [values, handleInputChange]  = useForm({
        name: 'Jeyfred Caderon',
        email: 'jeyfredc@gmail.com',
        password: 'reset123',
        password2: 'reset123'
    })

    const dispatch = useDispatch()
    const { msgError } = useSelector(state => state.ui)

    console.log(msgError)

    const { name, email, password, password2} = values;

    const handleRegistrer = (e) => {
        e.preventDefault()
        if(formIsValid()){
            console.log('El formulario se valido correctamente')
        }
    }

    const formIsValid = () => {
        if( name.trim().length === 0) {
            dispatch(
                setError('Name is required')
            )
            return false
        } else if( !validator.isEmail( email )){
            dispatch(
                setError('Email is not valid')
            )
            return false
        }else if( password !== password2 || password.length<6 ){
            dispatch(
                setError('Password should be at least 6 characters and match each other')
            )
            return false
        }
        dispatch( RemoveError() )
        return true
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegistrer}>

                {
                    msgError &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5">
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}

```

verificamos el navegador y por lo menos hacemos una de las validaciones

![assets-git/462.png](assets-git/462.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Crear usuario con correo y contraseña

Hasta el momento cuando hacemos click en el boton de Registro sale un mensaje de Formulario correcto por consola, pero no pasa nada mas, ahora es momento de disparar la acción para que el usuario lo podamos guardar en firebase, tendremos que regresar a la carpeta **actions** y abrir el archivo **auth.js**

Alli debajo de la funcion `startLoginEmailPassword`, crearemos otra que se llamara `startRegisterWithEmailPasswordName` y recibira el email el password y el name

```
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { types } from "../types/types"

export const startLoginEmailPassword = ( email, password )=> {
    return ( dispatch ) => {
        setTimeout(() => {
            
            dispatch( login ( 123, 'Pedro'))

        }, 3500);
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {

    
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then ( ({ user }) => {
                dispatch(
                    login (user.uid, user.displayName) 
                )
            });
    }
}



export const login = ( uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})
```

Dentro de la función tendremos que regresar un callback porque va a funcionar de manera asincrona y tendremos que usar uno de los metodos que proporciona firebase para la autenticación, este recibe el email y el password y espera una promesa que en este caso sera el usuario, lo dejamos de esta forma

```
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { types } from "../types/types"

export const startLoginEmailPassword = ( email, password )=> {
    return ( dispatch ) => {
        setTimeout(() => {
            
            dispatch( login ( 123, 'Pedro'))

        }, 3500);
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return ( dispatch ) => {

        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( ({ user })=> {
                console.log(user)
            } )
    }

}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then ( ({ user }) => {
                dispatch(
                    login (user.uid, user.displayName) 
                )
            });
    }
}



export const login = ( uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})
```

Despues de realizar esto regresamos nuevamente al **RegisterScreen** y dentro de la funcion `handleRegister` importamos la función que acabamos de crear 

```
    const handleRegistrer = (e) => {
        e.preventDefault()
        if(formIsValid()){
            dispatch( startRegisterWithEmailPasswordName( email, password, name))
        }
    }
```

Regresamos al navegador, debemos registrar un correo diferente al que registramos con google en firebase y damos click en el boton register y nos fijamos en la consola

![assets-git/463.png](assets-git/463.png)

Como se observa, la consola, nos proporciona toda la información que tiene que ver con firebase y si revisamos en firebase tambien obtenemos el registro

![assets-git/464.png](assets-git/464.png)

El unico problema es que cuando hacemos el registro de esta forma, el `displayName` es nulo, la unica forma de obtenerlo directamente es cuando hacemos registros en redes sociales 

![assets-git/465.png](assets-git/465.png)

Entonces para corregir esto, primero borramos de firebase el ultimo correo registrado, despues regresamos al archivo **auth.js** y utilizamos dentro del then otra función que provee firebase para establecer el displayName, tambien hacemos uso de `async await` para esperar el usario y retonarlo en el dispatch del login

```
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { types } from "../types/types"

export const startLoginEmailPassword = ( email, password )=> {
    return ( dispatch ) => {
        setTimeout(() => {
            
            dispatch( login ( 123, 'Pedro'))

        }, 3500);
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return ( dispatch ) => {

        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user })=> {
                await user.updateProfile({ displayName: name })

                dispatch(
                    login (user.uid, user.displayName) 
                )
            } )
    }

}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then ( ({ user }) => {
                dispatch(
                    login (user.uid, user.displayName) 
                )
            });
    }
}



export const login = ( uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})
```

De esta forma si nuevamente realizamos el registro va a aparecer el displayName

![assets-git/466.png](assets-git/466.png)

Si no borramos la cuenta de firebase nos va a salir este error

![assets-git/467.png](assets-git/467.png)

Para manejarlo lo unico que tendremos que hacer es agregar un `catch` del error

```
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { types } from "../types/types"

export const startLoginEmailPassword = ( email, password )=> {
    return ( dispatch ) => {
        setTimeout(() => {
            
            dispatch( login ( 123, 'Pedro'))

        }, 3500);
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return ( dispatch ) => {

        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user })=> {
                console.log(user)
                await user.updateProfile({ displayName: name })

                dispatch(
                    login (user.uid, user.displayName) 
                )
            } ).catch(error => console.log(error))
    }

}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then ( ({ user }) => {
                dispatch(
                    login (user.uid, user.displayName) 
                )
            });
    }
}



export const login = ( uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})
```

y por el momento todo estara listo para despues mostrarselo al usuario

![assets-git/468.png](assets-git/468.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Realizar el login de usuario con correo y contraseña

Es momento de realizar la autenticación del usuario, para eso ya esta creada una función en el **auth.js** llamada `startLoginEmailPassword`, alli se debe utilizar un metodo que proporciona firebase para la autenticación que se hace en esta parte 

![assets-git/469.png](assets-git/469.png)

Ahora pasamos al archivo y reemplazamos por lo siguiente en esta función que se encuentra actualmente asi 

```
export const startLoginEmailPassword = ( email, password )=> {
    return ( dispatch ) => {
        setTimeout(() => {
            
            dispatch( login ( 123, 'Pedro'))

        }, 3500);
    }
}
```

por lo siguiente 

```
export const startLoginEmailPassword = ( email, password )=> {
    return ( dispatch ) => {

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user })=> {

            dispatch(
                login (user.uid, user.displayName)
            );
        }).catch(error => console.log(error))
    }
}
```

Con realizar esta acción volvemos a colocar el correo que habiamos creado con la contraseña y obtenemos el uid y el name 

![assets-git/470.png](assets-git/470.png)


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Tarea Loading state

Bloquear el botón de login cuando está en el proceso de autenticación.

Pasos:

1. Crear dos tipos en nuestros types.js
    uiStartLoading: '[UI] Start loading'
    uiFinishLoading: '[UI] Finish loading'

2. Crear dos acciones que modifiquen nuestro state en el uiReducer (no reciben argumentos)
    uiStartLoading: debe de colocar la propiedad loading en true 
    uiFinishLoading: debe de colocar la propiedad loading en false

    Esas acciones tendrán el nombre de startLoading y finishLoading respectivamente

3. Las acciones de startLoading y finishLoading serán despachadas únicamente en la acción:
    startLoginEmailPassword
        Tan pronto la acción es creada, debe de disparar la acción de startLoading
        Cuando se resuelve la petición de Firebase de autenticación con éxito o error, deben de
        disparar la acción finisLoading

4. En el <LoginScreen />, deben de bloquear el botón de Login, añadiendo la propiedad:
    disabled={ loading }

    Donde loading es la propiedad del state ui.loading.


5. Mucha suerte!

**Solución**

1. Abrimos el archivo types y añadimos los nuevos types

```
export const types = {
    login : '[Auth] login',
    logout: '[Auth] logout',

    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Remove Error',

    uiStartLoading: '[UI] Start loading',
    uiFinishLoading: '[UI] Finish loading'

}    
```

2. pasamos al uiReducer y agregamos los nuevos types, estableciendo en cada uno una copia del estado y colocando loading en true y en false respectivamente

```
import { types } from "../types/types";

const intialState = {
    loading: false,
    msgError: null
}

export const uiReducer = ( state= intialState, action) => {

    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }
        
        case types.uiRemoveError:
            return {
                ...state,
                msgError: null
            }
        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }
        case types.uiFinishLoading:
            return {
                ...state,
                loading:false
            }
    
        default:
            return state;
    }
}
```

3. Regresamos a **auth.js**  y alli llamamos cada una de las acciones en la función `startLoginEmailPassword`

```
export const startLoginEmailPassword = ( email, password )=> {
    return ( dispatch ) => {

        dispatch(startLoading())

        firebase.auth().signInWithEmailAndPassword( email, password )
        .then( ({ user })=> {
            console.log(user)

            dispatch(login (user.uid, user.displayName));

            dispatch(finishLoading())
        }).catch(error => {
            console.log(error)
            dispatch(finishLoading())
        }
        )

    }
}
```

4. Regresamos a `LoginScreen` y utilizamos el hook useSelector para usar la desestructuración y obtener `loading` a traves de `ui`, recordar que se debe hacer primero un `console.log` del `state`, alli obtenemos el `ui` y luego en el useSelector lo llamamos con `state.ui` y por ultimo buscamos la etiqueta de Login agregamos la propiedad `disabled` y pasamos al navegador para realizar la prueba y deshabilitar y habilitar el botón en tanto se hace la acción del login

```
import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const {loading} = useSelector(state => state.ui)

    const [ values, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values; 

    const handleLogin = (e) => {
        e.preventDefault();
        // console.log( email, password)
        dispatch( startLoginEmailPassword( email, password ))
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }


    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit= { handleLogin }>

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    value= { email }
                    className="auth__input"
                    autoComplete="off"
                    onChange= { handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    value= { password }
                    className="auth__input"
                    onChange= { handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={loading}
                >
                    Login
                </button>

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick= { handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account    
                </Link>

            </form>
        </>
    )
}

```

![assets-git/471.png](assets-git/471.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Mantener el estado de la autenticación al recargar

Desde el primer momento que hicimos la utenticación o el login del user siempre hemos estado en un estado de autenticado pero no lo podemos ver, para guardar el estado debemos usar otro metodo proporcionado por firebase en el **AppRouter.js**, el cual lo unico que esta haciendo es validar si el usuario devuelve un id, esto lo agregamos dentro de una condición `if user?.uid` si el usuario esta utenticado devolvera el dispatch de la acción del login, de lo contrario, no entrara a la condición y por el momento no pasara nada 

Lo unico que debemos hacer es agregar el useEffect con el metodo proporcionado por firebase

```
import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import firebase from 'firebase';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( (user) => {

            if(user?.uid){

                dispatch( login( user.uid, user.displayName ))
            }
        })
    }, [dispatch])
    
    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth"
                        component={ AuthRouter }
                    />

                    <Route 
                        exact
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}

```

De esta forma, con tan solo recargar la pagina veremos que ya tenemos el estado del login guardado

![assets-git/472.png](assets-git/472.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>