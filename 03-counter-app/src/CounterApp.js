
import './index.css'
import React, {useState} from 'react';
import PropTypes from 'prop-types';

//Functional Components
const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value)

    console.log(counter);
    // handleAdd
    const handleAdd = (e) => {
        setCounter( counter + 1)
    }
    // handleReset
    const handleReset = (e) => {
        setCounter( value)
    }

    // handleSubstract
    const handleSubstract = (e) => {
        setCounter( counter - 1)
    }


    return (
        <>
        <h1>CounterApp</h1>
            <p>{ counter }</p>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleReset}> Reset</button>
            <button onClick={handleSubstract}> -1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
