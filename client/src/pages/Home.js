import React from 'react';

// TEST COMPONENT / PAGE SECTION BELOW  

import DuplicateCheckImport from '../components/DuplicateCheck/DuplicateCheckImport';
import About from './About';

// TEST COMPONENT / PAGE SECTION ABOVE ^^^

const Home = () => {
    return(
        <section class='home'>
        <header>
            NAVBAR
        </header>
        <section class='home-navbar'>
            Welcome to the duplicate check system
        </section>
        <div>
            <h1>TEST COMPONENT / PAGE SECTION </h1>
            <DuplicateCheckImport />
            <div>
                <About />
            </div>
        </div>
        <footer class='footer'>
            FOOTER
        </footer>
    </section>
    )
};

export default Home;