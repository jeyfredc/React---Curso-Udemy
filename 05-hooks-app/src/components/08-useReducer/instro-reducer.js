const initialState = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];

// Los Reducer siempre van a recibir entre sus argumentos un estado y una acción y la funcion debe retornar el estado siempre
// No se debe usar el metodo .push() cuando se trabaje en React

const todoReducer = (state = initialState, action) => {

    if(action?.type === 'agregar') {
        return [...state, action.payload];
    }
    return state;
};

let todos = todoReducer();

// Agregar un nuevo elemento al todo

const newTodo = {
  id: 2,
  todo: "Comprar leche",
  done: false,
};

// El nuevo todo se debe enviar al todoReducer pero esta acción se debe declarar en un nuevo objeto, 
//en este caso se crea una constante action y el objeto recibe un type que es el que contiene la accion que va a realizar el todoReducer
//tambien recibe a paylod, el cual es un estandar que se maneje de esta forma y carga la función que en este caso es la que 
//vamos a agregar y se llama newTodo

const action = {
    type: 'agregar',
    payload: newTodo
}

// Luego llega el momento de mandar esa acción, para mandarla modifico la variable todos y envio los argumentos que por defecto recibe el todoReducer
// const todoReducer = (state = initialState, action)

todos = todoReducer(todos, action);

console.log(todos);


// Luego de realizar esto, debo regresar a la funcion todoReducer y agregar una condicion, si el action.type 
// es igual a agregar retorne una copia del estado y la accion declarada
/* 
if(action?.type === 'agregar') {
    return [...state, action.payload];
}

Nota: es importante colocar el signo de interrogación si no va a salir un mensaje en consola de error, el signo esta haciendo la validación
si el type existe, como resultado, la consola debe arrojar lo siguiente

(2) [{…}, {…}]
0: {id: 1, todo: "Comprar pan", done: false}
1: {id: 2, todo: "Comprar leche", done: false}
length: 2
__proto__: Array(0)
*/