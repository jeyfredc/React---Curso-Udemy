
import './index.css'
import PropTypes from 'prop-types';

//Functional Components
const PrimeraApp = ({ saludo }) => {


    return (
        <>
        <h1>{ saludo }</h1>
            {/* {}<pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>Mi primera aplicación</p>
        </>
    )
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;