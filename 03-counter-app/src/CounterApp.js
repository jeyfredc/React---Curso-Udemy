
import './index.css'
import PropTypes from 'prop-types';

//Functional Components
const CounterApp = ({ value }) => {

    // handleAdd
    const handleAdd = (e) => {
        console.log('+1')
    }


    return (
        <>
        <h1>CounterApp</h1>
            <p>{ value }</p>
            <button onClick={handleAdd}> +1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
