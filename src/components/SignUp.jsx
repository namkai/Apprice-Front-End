import React, {Component} from 'react';
import {Link} from 'react-router';

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <br/>
                <input type="email"/>
                <br/>
                <button>Sign Up!</button>
            </form>
        )
    }
}
