import React from 'react';

// TEST COMPONENT / PAGE SECTION BELOW  

import DuplicateCheckImport from '../components/DuplicateCheck/DuplicateCheckImport';
import DuplicateCheckForm from '../components/DuplicateCheck/DuplicateCheckForm';
import About from './About';

// TEST COMPONENT / PAGE SECTION ABOVE ^^^

const Home = () => {
    return(
        <section class='home'>
            <header>
                <h1>Welcome to the duplicate check system</h1>
                <div>NAVBAR</div>
            </header>
            <div>
                <h1>TEST COMPONENT / PAGE SECTION </h1>
                    <DuplicateCheckImport />
                <div>
                    <About />
                </div>
                <div>
                    <DuplicateCheckForm />
                </div>
            </div>
            <footer class='footer'>
                FOOTER
            </footer>
        </section>
    )
};

export default Home;