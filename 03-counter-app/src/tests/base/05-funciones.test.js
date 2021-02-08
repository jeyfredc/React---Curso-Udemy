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
