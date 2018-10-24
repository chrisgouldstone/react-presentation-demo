import React, { Component } from 'react';

export default class UserProfiles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            search: ''
        }
    }

    componentDidMount(){
        this.getUserList()
        .then(res=> {
            this.setState({
                users: res
            })
        });
    }

    getUserList () {
        return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
    }

    createUserList(users) {
        let list = users.map(item => {
            if(item.name.indexOf(this.state.search) > -1 || this.state.search.length < 1) {
            return (
                <li key={item.id}>{item.name}</li>
                )
            }
        });
        return (
            <ul>
                {list}
            </ul>
        )
    }
    
    handleChange(event) {
        this.setState({
            search: event.target.value
        });
    }

    render() {
        if(this.state.users && this.state.users.length > 1) {
            let UsersList = this.createUserList(this.state.users);
            return (
                <div>
                <input type="text" value={this.state.search} onChange={this.handleChange.bind(this)}/>
                    {UsersList}
                </div>
                )
        } else {
            return (
                <h1>No users found</h1>
            )
        }
    }
}