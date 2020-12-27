import React, {useState} from 'react'

export const AddCategory = ({setCategories}) => {
    
    const [input, setStateInput] = useState('');

    const changeValue = (e) => {
        setStateInput(e.target.value);
    }
    
    const submitForm = (e) =>{
        e.preventDefault();
        setCategories(input);
    }
    
    return (
        <form onSubmit={submitForm}>
        <input type="text" placeholder="Inserte texto" value={input} onChange={changeValue}></input>   
        </form>
        )
    }
    