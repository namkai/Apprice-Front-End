import React from 'react';
import {Link} from 'react-router';


const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li>
                    <div id="logo">
                        <a href="#">Apprice</a>
                    </div>
                </li>
                <li>
                    <Link to={"/SignUp"}></Link>
                </li>
                <li>
                    <a href="news.asp">Login</a>
                </li>
                <li>
                    <a href="contact.asp">Help</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
