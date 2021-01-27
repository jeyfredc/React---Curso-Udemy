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

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, Soy Iron Man';
        const subTitulo = 'Soy un subtitulo'
        const wrapper = shallow( 
        <PrimeraApp 
        saludo={ saludo } 
        subtitulo={ subTitulo }
        /> );

        const textoParrafo = wrapper.find('p').text();
        // console.log(textoParrafo); 

        expect( textoParrafo ).toBe( subTitulo );
    })
    
    
    
})
