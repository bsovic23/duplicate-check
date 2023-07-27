import React from 'react';
import { Link } from 'react-router-dom';

const PageNavbar = ({navElements}) => {
    return(
        <section class='page-navbar'>
            <nav class="nav">
                {navElements.map((nav) => (
                    <Link key={nav.id} to={nav.link}>
                        <button class='nav-link'>
                            {nav.text}
                        </button>
                    </Link>
                ))}
            </nav>
        </section>
    )
};

export default PageNavbar;