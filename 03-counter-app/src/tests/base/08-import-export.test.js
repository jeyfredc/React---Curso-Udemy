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
