import React, {useState} from 'react'
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
    
    const [counter, setCounter] = useState(value);
    
    const plusOne = () => {
        setCounter(counter + 1);
    }
    const minusOne = () =>{
        setCounter(counter - 1);
    }
    const reset = () => {
        setCounter(value);
    }

    const div = 
    <>
        <h1> Counter App</h1>
        <h2> { counter }</h2>
        <button onClick = {plusOne}>Incrementar</button>
        <button onClick = {reset}>Reset</button>
        <button onClick = {minusOne}>Decrementar</button>
    </>

    return div;

}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;