import {getHeroeById} from './bases/08-import-export';


// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         /* resolve(console.log('2 segundos después')) */

//         //Tarea
//         // Importar 
//         const personaje = getHeroeById(2);
//         /* reject(personaje) */
//         reject('No se pudo encontrar al heroe')
//     }, 2000)
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe)
// })
// .catch( err => console.error( err ));

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

getHeroeByIdAsync(1)
    .then( heroe => console.log('Heroe', heroe))
    .catch( err => console.warn(err))