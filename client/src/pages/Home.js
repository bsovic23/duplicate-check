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
                    <div class="row align-items-start">
                        <div class="col">
                            <h1>WELCOME TO RABRIT</h1>
                            <h3>Version 1.01</h3>
                            <h4>Last Updated: 7/12/2023</h4>
                        </div>
                        <div class="col">
                            RABRIT LOGO
                        </div>
                    </div>
                </div>
           </section>
            <footer class='footer'>
                FOOTER
            </footer>
        </section>
    )
};

export default Home;