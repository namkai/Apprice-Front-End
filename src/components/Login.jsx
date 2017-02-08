import React, {Component} from 'react';
import {login} from '../actions/index';
import {Link} from 'react-router';
// import cookie from 'react-cookie';
// 🔐
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(event);
        login(this.state)
    }
    render() {
        console.log(this.state);
        return (
            <div className="container">
            <div className="signup-form">
                <form onSubmit={this.handleSubmit}>
                    <input type="email" placeholder="Enter your email." value={this.state.email}
                    onChange={event => this.setState({email: event.target.value})}/>
                    <br/>
                    <input type="password" placeholder="Enter your password." value={this.state.password}
                    onChange={event => this.setState({password: event.target.value})}/>
                    <Link to="/List_Page">Sign Up!</Link>
                </form>
            </div>
            </div>
        )
    }
}
