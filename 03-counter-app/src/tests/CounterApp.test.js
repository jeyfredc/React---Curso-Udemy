import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {


    test('Debe de mostrar `<CounterApp />` correctamente (hacer match con un snapshot) y sus valores por defecto', () => {
        
        const wrapper = shallow( <CounterApp /> );

        expect( wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el valor por defecto de 100', () => {
    
        const counter = '100'
        const wrapper = shallow( 
        <CounterApp 
        /> );

        const textoParrafo = wrapper.find('p').text()
        // console.log(textoParrafo); 

        expect( textoParrafo ).toBe( counter );
    })
})
