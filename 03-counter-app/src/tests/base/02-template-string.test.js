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
