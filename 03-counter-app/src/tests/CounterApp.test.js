import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

    const wrapper = shallow( <CounterApp /> );

    test('Debe de mostrar `<CounterApp />` correctamente (hacer match con un snapshot) y sus valores por defecto', () => {

        expect( wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el valor por defecto de 100', () => {
    
        const counter = '100'

        const textoParrafo = wrapper.find('p').text()
        // console.log(textoParrafo); 

        expect( textoParrafo ).toBe( counter );
    })

    test('debe de incrementar con el boton +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const textoParrafo = wrapper.find('p').text()
        expect(textoParrafo).toBe('101');
    })

    test('debe de disminuir con el boton -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const textoParrafo = wrapper.find('p').text()
        expect(textoParrafo).toBe('100');
    })

    test('debe de devolver el valor 100 al dar click sobre el boton reset', () => {
        wrapper.find('button').at(1).simulate('click');
        const textoParrafo = wrapper.find('p').text()
        expect(textoParrafo).toBe('100');
    })
    
})
