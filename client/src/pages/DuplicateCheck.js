import React, { useState } from 'react';

// Component Imports
import Navbar from '../components/Navbar';
import DuplicateCheckImport from '../components/DuplicateCheck/DuplicateCheckImport';

const DuplicateCheck = () => {
    const navChoices = [
        {id: 1, text: "Home", link: "/"},
        {id: 2, text: "About", link: "/About"},
        {id: 3, text: "Duplicate Check", link: "/duplicate"},
        {id: 4, text: "Comment", link: "/"}
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
        </section>
    )
};

export default DuplicateCheck;