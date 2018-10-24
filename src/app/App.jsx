import React, { Component } from 'react';
import PersonalHello from './components/PersonalHello.jsx';
import UserProfiles from './components/UserProfiles.jsx';
export default class App extends Component {
    
    constructor() {
        super();
        this.state = {
            name: "Christopher"
        }
    }
    render () {
        return (
            <div>
                <PersonalHello name={this.state.name} />
                <UserProfiles />
            </div>
        )
    }
}