import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {

    // test('Debe de mostrar el mensaje "Hola, Soy Iron Man"', () => {
    //     const saludo = 'Hola, Soy Iron Man';
    //     const { getByText} = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText(saludo)).toBeInTheDocument();
    // })
    test('debe de mostrar el componenet <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola, Soy Iron Man';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper).toMatchSnapshot();
    })
    
    
})
