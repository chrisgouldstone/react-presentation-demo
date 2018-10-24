import React from 'react';
import { render } from 'react-dom';

let myName = "Christopher";

let element = (
    <h1>Hello {myName}</h1> 
)

render(
    element,
    document.getElementById('root')
);
