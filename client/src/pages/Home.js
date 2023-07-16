import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component Imports
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    const navChoices = [
        {id: 1, text: "Home", link: "/"},
        {id: 2, text: "About", link: "/About"},
        {id: 3, text: "Duplicate Check", link: "/duplicate"},
        {id: 4, text: "Comment", link: "/"}
    ];

    return (
        <section className='home'>
          <section className="flex-container">
            <div className="welcome-section">
              <h1>RA-BRIT</h1>
              <h3>Version 1.01</h3>
              <h4>Last Updated: 7/12/2023</h4>
              <Navbar navElements={navChoices} />
            </div>
            <div className="video-section">
              <video autoPlay muted loop>
                <source src={require("../images/Animation.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
          <footer>
            <Footer />
          </footer>
        </section>
      )
};

export default Home;