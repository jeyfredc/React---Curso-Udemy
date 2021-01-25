
import './index.css'
import React, {useState} from 'react';
import PropTypes from 'prop-types';

//Functional Components
const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(2021)

    console.log(counter)

    // handleAdd
    const handleAdd = (e) => {
        setCounter( counter + 1)
    }


    return (
        <>
        <h1>CounterApp</h1>
            <p>{ counter }</p>
            <button onClick={handleAdd}> +1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
