import React, { useState } from 'react';

const mockData = [
    {id: 1, firstName: 'bill', lastName: 'bob', dob: '2020/02/02', digits: '1111', site: 'CUIMC', enter: 'no'},
    {id: 2, firstName: 'bill', lastName: 'bob', dob: '2020/02/02', digits: '1111', site: 'CUIMC', enter: 'no'},
    {id: 3, firstName: 'rick', lastName: 'bob', dob: '2020/02/02', digits: '1111', site: 'CUIMC', enter: 'no'},
    {id: 4, firstName: 'bill', lastName: 'bob', dob: '2020/02/02', digits: '1111', site: 'CUIMC', enter: 'no'},
    {id: 5, firstName: 'bill', lastName: 'jones', dob: '2020/02/02', digits: '1111', site: 'CUIMC', enter: 'no'},
];

// Component Imports
import DuplicateCheckResults from '../DuplicateCheckResults';

// Function Imports
import { functionFourEnrollment } from '../../../utils/duplicate-check-fx';

function DuplicateCheckForm() {
    
    // Handle Enrollment vs Weekly Screening
    const [ showForm, setShowForm ] = useState('blank');

    const handleEnrollment = () => {
        setShowForm('enrollment');
    };

    const handleScreening = () => {
        setShowForm('screening');
    };

    // Enrollment Screening ====================================================================
    const [resultFour, setResultFour] = useState(null);

    const initialFormData = {
        firstName: '',
        lastName: '',
        dob: '',
        digits: '',
        site: '',
    };

    const [ formData, setFormData ] = useState(initialFormData);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            enter: 'yes',
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        const resultFour = functionFourEnrollment(mockData, formData);
        setResultFour(resultFour);
        setFormData(initialFormData);
    }

    // Weekly Screening ====================================================================

    return(
        <section class='duplicate-check-form'>
            <section>
                <h1>What would you like to do?</h1>
                <button onClick={handleEnrollment}>Enrollment Screening</button>
                <button onClick={handleScreening}>Weekly Duplicate Screening</button>
            </section>

            {showForm === 'blank' && (
            <section>
                Please click one of the two buttons above to get started!
            </section>
            )}

            {showForm === 'enrollment' && (
            <section>
                <h2>Enrollment Clearance</h2>
                <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <label htmlFor='lastName'>Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <label htmlFor='site'>Site:</label>
                <input
                    type="text"
                    id="site"
                    name="site"
                    value={formData.site}
                    onChange={handleChange}
                />
                <label htmlFor='dob'>Date of Birth:</label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                />
                 <label htmlFor='digits'>Digits:</label>
                <input
                    type="text"
                    id="digits"
                    name="digits"
                    value={formData.digits}
                    onChange={handleChange}
                />

                    <button type='submit'>Check Enrollment</button>
                </form>
            </section>
            )}

            {showForm === 'screening' && (
            <section>
                <h2>Weekly Duplicate Screening</h2>
                <form>
                
                    <button type='submit'>Check Screening</button>
                </form>
            </section>
            )}        

            <section>
                {resultFour && (
                <DuplicateCheckResults result={resultFour} />
                )} 
            </section>
        </section>
    )
};

export default DuplicateCheckForm;