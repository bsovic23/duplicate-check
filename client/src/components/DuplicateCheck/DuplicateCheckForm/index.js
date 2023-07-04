import React, { useState } from 'react';

const DuplicateCheckForm = () => {
    return(
        <section class='duplicate-check-form'>
            <form>
                <div>
                    <p>Participant Enrollment Site:</p>
                    <label>
                        Bronx Prevention Center
                        <input
                            type='radio'
                            name='bronx'
                            value='BRONX'
                        />
                    </label>
                    <label>
                        CUIMC
                        <input
                            type='radio'
                            name='cuimc'
                            value='CUIMC'
                        />
                    </label>
                    <label>
                        Cornell
                        <input
                            type='radio'
                            name='cornell'
                            value='CORNELL'
                        />
                    </label>
                    <label>
                        Harlem Prevention Center
                        <input
                            type='radio'
                            name='harlem'
                            value='HARLEM'
                        />
                    </label>
                    <label>
                        New York Blood Center
                        <input
                            type='radio'
                            name='nybc'
                            value='NYBC'
                        />
                    </label>
                    <label>
                        Rutgers
                        <input
                            type='radio'
                            name='rutgers'
                            value='RUTGERS'
                        />
                    </label>
                </div>
                <div>
                    <label for='firstname'>Participant First Name:</label>
                    <input type='text' id='firstname' placeholder='first name' />
                </div>
                <div>
                    <label for='lastname'>Participant Last Name:</label>
                    <input type='text' id='lastname' placeholder='last name'/>
                </div>
                <div>
                    <label for='digits'>Participant Digits:</label>
                    <input type='text' id='digits' placeholder='digits'/>
                </div>
                <div>
                    <label for='dob'>Participant Date of Birth</label>
                    <input type='date' id='dob'/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
};

export default DuplicateCheckForm;