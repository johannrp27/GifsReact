import React, {useState} from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
    
    const [input, setStateInput] = useState('');
    
    const changeValue = (e) => {
        setStateInput(e.target.value);
    } 
    
    const submitForm = (e) =>{
        e.preventDefault();
        setCategories( cat => [input, ...cat]);
    }
    
    return (
        <form onSubmit={submitForm}>
        <input type="text" placeholder="Inserte texto" value={input} onChange={changeValue}></input>   
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

export default AddCategory;