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
