import React, { Component } from 'react';
import PersonalHello from './components/PersonalHello.jsx';

export default class App extends Component {
    
    constructor() {
        super();
        this.state = {
            name: "Christopher"
        }
    }
    render () {
        return (
            <PersonalHello name={this.state.name} />
        )
    }
}