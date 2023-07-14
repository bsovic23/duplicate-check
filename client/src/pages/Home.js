import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return(
        <section class='home'>
            <header>
                <div>NAVBAR</div>
            </header>
           <section>
            <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <h1>WELCOME TO RABRIT</h1>
                            <h3>Version 1.01</h3>
                            <h4>Last Updated: 7/12/2023</h4>
                        </div>
                        <div>
                            <div class="col" style={{ width: '50%', height: '50%', margin: '10px' }}>
                                <video autoPlay muted loop>
                                    <source src={require("../images/Animation.mp4")} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
            <footer class='footer'>
                FOOTER: GITHUB AND LINKEDIN LOGO LINKS
            </footer>
        </section>
    )
};

export default Home;