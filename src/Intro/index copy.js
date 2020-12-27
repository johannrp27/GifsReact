import React from 'react';
import ReactDom from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';


const root = document.querySelector('#root');

// ReactDom.render(<PrimeraApp />, root);
ReactDom.render(<CounterApp value ={20} />, root);