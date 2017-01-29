import React from 'react';
import {Link} from 'react-router';

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li>
                    <div id="logo">
                        <Link to={"/"}>Apprice</Link>
                    </div>
                </li>
                <div id="links">
                    <li>
                        <Link to={"/SignUp"}>Sign Up</Link>
                    </li>
                    <li>
                        <a href="news.asp">Login</a>
                    </li>
                    <li>
                        <a href="contact.asp">Help</a>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Nav;
