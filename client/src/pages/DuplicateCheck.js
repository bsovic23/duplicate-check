import React, { useState } from 'react';

// Component Imports
import Navbar from '../components/Navbar';
import DuplicateCheckImport from '../components/DuplicateCheck/DuplicateCheckImport';
import Footer from '../components/Footer';

const DuplicateCheck = () => {
    const navChoices = [
        {id: 1, text: "Home", link: "/duplicate-check/"},
        {id: 2, text: "About", link: "/duplicate-check/about"},
        {id: 3, text: "Duplicate Check", link: "/duplicate-check/duplicate"},
        {id: 4, text: "Comment", link: "/duplicate-check/"},
        {id: 5, text: "What's New", link: "/duplicate-check/"}
    ];

    return(
        <section class='duplcate-check'>
            <section>
                <h1>Duplicate Check</h1>
            </section>
            <div>
                <Navbar navElements={navChoices} />
            </div>
            <section>
                < DuplicateCheckImport />
            </section>
            <section>
                <Footer />
            </section>
        </section>
    )
};

export default DuplicateCheck;