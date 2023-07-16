import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = ({navElements}) => {
    return(
        <section class='navbar'>
            <nav>
                {navElements.map((nav) => (
                    <Link key={nav.id} className="nav-link" to={nav.link}>{nav.text}</Link>
                ))}
            </nav>
        </section>
    )
};

export default Navbar;