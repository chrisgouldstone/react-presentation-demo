import React, { Component } from 'react';

export default class PersonalHello extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1>Hello {this.props.name}</h1>
        )
    }
}