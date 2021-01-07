import React, { useState } from 'react';
import './gifExpertApp.css';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () =>{
    
    const [categories, setCategories] = useState(['']);
    
    const view = 
    <>
    <h2 className="title">GifExpertApp - Johann</h2>
    <AddCategory setCategories={setCategories}/>
    <hr/>
    {categories.map(x => <GifGrid key= {x} category={x} /> ) }
    </>
    
    return view;
}

export default GifExpertApp;

