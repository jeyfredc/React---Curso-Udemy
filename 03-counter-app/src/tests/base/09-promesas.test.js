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
