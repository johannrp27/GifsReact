import React, { useState } from 'react';
import './gifExpertApp.css';
import { AddCategory } from './Intro/AddCategory';

const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['One Piece', 'Megaman', 'Bleach']);

    // const addCategory = () => {
    //     setCategories([...categories, 'Prueba']);
    // }

    const view = 
    <>
        <h2 className="title">GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
        <ol>
            {categories.map(x => <li key={x}>{x}</li>)}
        </ol>
    </>

    return view;
}

export default GifExpertApp;

