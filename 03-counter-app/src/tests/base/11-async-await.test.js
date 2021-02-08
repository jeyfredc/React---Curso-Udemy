import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Pruebas con async-await y Fetch', () => {
    
    test('Debe de retornar el url de la imagen', async() => {
        
        const url = await getImagen();

        console.log(url);
        expect( typeof url).toBe( 'string' );
    })
    
})
