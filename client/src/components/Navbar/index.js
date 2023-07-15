import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = ({navElements}) => {
    return(
        <section class='navbar'>
            <nav>
                {navElements.map((nav) => (
                    <p key={nav.id}>
                        <Link to={nav.link}>{nav.text}</Link>
                    </p>
                ))}
            </nav>
        </section>
    )
};

export default Navbar;