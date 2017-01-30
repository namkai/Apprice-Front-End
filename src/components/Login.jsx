import React, {Component} from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="login">
                <form action="">
                    <input type="email" placeholder="E-mail address"/>
                    <input type="password" placeholder="password"/>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}
