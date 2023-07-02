import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return(
        <section>
            <div class="container">
                <div class="m-5 row">
                    <div class="col">
                        <h1>About Brit</h1>
                    </div>
                    <div class="col">
                        <h1>About Application</h1>
                        <p>The application was built to replace an excel ctrl+find process. This application decreases the amount
                            of time it takes to run a weekly duplicate screening check, as well as increases the probability that
                            a duplicate will be identified.
                        </p>
                        <ol>
                            <li>Decreases time: The system is set up in a way that all a user has to do is have an updated excel sheet
                                with all participants. The user has to spend no time searching and clearing participants weekly.
                            </li>
                            <li>
                                Increases Accuracy of Identifing a duplciate: With the automated code and functions set in place. The
                                application can run multiple series of duplicate identification among different participant cateogries.
                                This allows a potential duplicate to be accurately identified. For example, a misspelled first and/or 
                                name can still be identified as a duplicate. A participant giving a different name an also be correctly
                                identified as a duplicate.
                            </li>
                        </ol>
                    </div>
                    <div class="col">
                        <h1>Application Tests For</h1>
                        <p>The application tests for 9 different series of potential duplicate</p>
                        <ol>
                            <li>First Name, Last Name, Digits, Date of Birth</li>
                            <li>First Name, Last Name, Date of Birth</li>
                            <li>First Name, Last Name, Digits</li>
                            <li>First Name, Digits, Date of Birth</li>
                            <li>Last Name, Digits, Date of Birth</li>
                            <li>First Name, Date of Birth</li>
                            <li>Last Name, Date of Birth</li>
                            <li>Digits, Date of Birth</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;