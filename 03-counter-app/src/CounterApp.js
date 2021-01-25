
import './index.css'
import PropTypes from 'prop-types';

//Functional Components
const CounterApp = ({ value }) => {


    return (
        <>
        <h1>CounterApp</h1>
            <p>{ value }</p>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
