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
