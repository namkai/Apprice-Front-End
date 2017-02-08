import React, {Component} from 'react';
import {Link} from 'react-router';
import {signUp} from '../actions/index';
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(event);
        signUp(this.state)
    }
    render() {
        console.log(this.state);
        return (
            <div className="container">
            <div className="signup-form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="First Name" value={this.state.first_name}
                    onChange={event => this.setState({first_name: event.target.value})}/>
                    <input type="text" placeholder="Last Name" value={this.state.last_name}
                    onChange={event => this.setState({last_name: event.target.value})}/>
                    <br/>
                    <input type="email" placeholder="Enter your email." value={this.state.email}
                    onChange={event => this.setState({email: event.target.value})}/>
                    <br/>
                    <input type="password" placeholder="Enter your password." value={this.state.password}
                    onChange={event => this.setState({password: event.target.value})}/>
                    <button>Sign Up!</button>
                </form>
            </div>
            </div>
        )
    }
}
