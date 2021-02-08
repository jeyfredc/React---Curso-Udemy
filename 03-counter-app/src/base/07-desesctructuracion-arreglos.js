const personajes = ['Iron Man', 'Capitan America', 'Spiderman'];

const [ , p2, p3] = personajes;


export const retornaArreglo = () => {
    return ['ABC' , 123];
}

// const [letras, numeros] = retornaArreglo()


const estados = (valor) => {
    return [valor, () => { console.log('Hola Mundo')}];
}
