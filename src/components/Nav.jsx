import React from 'react';
import {Link} from 'react-router';

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li>
                    <div id="logo">
                        <Link to={"/"}><i className="fa fa-lemon-o" aria-hidden="true"></i>Apprice</Link>
                    </div>
                </li>
                <div id="links">
                    <li>
                        <Link to={"/signup"}>Sign Up</Link>
                    </li>
                    <li>
                        <Link to={"/login"}>Log In</Link>
                    </li>
                    <li>
                        <Link to={"/help"}>Help</Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Nav;
