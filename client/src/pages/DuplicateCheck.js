import React, { useState } from 'react';

// Component Imports
import PageNavbar from '../components/PageNavbar';
import DuplicateCheckImport from '../components/DuplicateCheck/DuplicateCheckImport';
import Footer from '../components/Footer';

const DuplicateCheck = () => {
    const navChoices = [
        {id: 1, text: "Home", link: "/"},
        {id: 2, text: "About", link: "/about"},
        {id: 3, text: "Duplicate Check", link: "/duplicate"},
        {id: 4, text: "Comment", link: "/"},
        {id: 5, text: "What's New", link: "/whats-new"}
    ];

    return(
        <section class='duplcate-check'>
            <section>
                <h1>Duplicate Check</h1>
            </section>
            <div>
                < PageNavbar navElements={navChoices} />
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