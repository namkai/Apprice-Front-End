import React from 'react';

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
                    <a href="default.asp">Recipes</a>
                </li>
                <li>
                    <a href="news.asp">Groceries</a>
                </li>
                <li>
                    <a href="contact.asp">Sign Up</a>
                </li>
                <li>
                    <a href="about.asp">Sign In</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
