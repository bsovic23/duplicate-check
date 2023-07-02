import React, { useState } from 'react';

const DuplicateCheckForm = () => {
    return(
        <section class='duplicate-check-form'>
            <form>
                <div>
                    <p>Participant Enrollment Site:</p>
                    
                    BRIT INSERT THE SITES AS PICTURE BUTTONS
                </div>
                <div>
                    <label for='firstname'>Participant First Name</label>
                    <input type='text' id='firstname' placeholder='First Name' />
                </div>
                <div>
                    <label for='lastname'>Participant Last Name</label>
                    <input type='text' id='lastname' placeholder='Last Name'/>
                </div>
                <div>
                    <label for='digits'>Participant Digits</label>
                    <input type='text' id='digits' placeholder='digits'/>
                </div>
                <div>
                    <label for='dob'>Participant Date of Birth</label>
                    <input type='text' />
                </div>
            </form>
        </section>
    )
};

export default DuplicateCheckForm;