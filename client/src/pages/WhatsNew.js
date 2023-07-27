import React from 'react';

import PageNavbar from '../components/PageNavbar';

function WhatsNew() {
    const navChoices = [
        {id: 1, text: "Home", link: "/"},
        {id: 2, text: "About", link: "/about"},
        {id: 3, text: "Duplicate Check", link: "/duplicate"},
        {id: 4, text: "Comment", link: "/"},
        {id: 5, text: "What's New", link: "/whats-new"}
    ];

    return(
        <section class='whats-new'>
            <section>
                <h1>What's New</h1>
            </section>
            <section>
                <PageNavbar navElements={navChoices} />
            </section>
                <p>Version 1.00.01 has just been released. There are no current updates</p>
        </section>
    )
};

export default WhatsNew;