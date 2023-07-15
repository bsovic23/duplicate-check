import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component Imports
import Navbar from '../components/Navbar';

const Home = () => {
    const homeNavChoices = [
        {id: 1, text: "Home", link: "/"},
        {id: 2, text: "About", link: "/About"},
        {id: 3, text: "Duplicate Check", link: "/duplicate"},
        {id: 4, text: "Comment", link: "/"}
    ];

    return(
        <section className='home'>
            <section className="flex-container">
                <div>
                    <h1>WELCOME TO RABRIT</h1>
                    <h3>Version 1.01</h3>
                    <h4>Last Updated: 7/12/2023</h4>
                </div>
                <div>
                    <Navbar navElements={homeNavChoices}/>
                </div>
            </section>
            <section className="flex-container">
                <div className="col" style={{ width: '50%', height: '50%', margin: '10px', display: 'flex' }}>
                <div style={{ flex: '1', marginRight: '10px' }}>
                    <video autoPlay muted loop style={{ width: '100%', height: '500px' }}>
                    <source src={require("../images/Animation.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                </div>
            </section>
            <footer className='footer'>
                FOOTER: GITHUB AND LINKEDIN LOGO LINKS
            </footer>
        </section>
    )
};

export default Home;