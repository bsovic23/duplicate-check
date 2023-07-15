import React, { useState } from 'react';

// Component Imports
import DuplicateCheckResults from '../DuplicateCheckResults';

// Function Imports
import { 
    functionOneEnrollment,
    functionTwoEnrollment,
    functionThreeEnrollment, 
    functionFourEnrollment,
    functionFiveEnrollment,
    functionSixEnrollment,
    functionSevenEnrollment,
    functionEightEnrollment,
    functionNineEnrollment, 
} from '../../../utils/duplicate-check-fx';

const DuplicateCheckForm = (props) => {
    const { excelData } = props;

    // Handle Enrollment vs Weekly Screening
    const [ showForm, setShowForm ] = useState('blank');

    const handleEnrollment = () => {
        setShowForm('enrollment');
    };

    const handleScreening = () => {
        setShowForm('screening');
    };

    // Enrollment Screening ====================================================================
    const [resultOne, setResultOne] = useState(null);
    const [resultTwo, setResultTwo] = useState(null);
    const [resultThree, setResultThree] = useState(null);
    const [resultFour, setResultFour] = useState(null);
    const [resultFive, setResultFive] = useState(null);
    const [resultSix, setResultSix] = useState(null);
    const [resultSeven, setResultSeven] = useState(null);
    const [resultEight, setResultEight] = useState(null);
    const [resultNine, setResultNine] = useState(null);

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
        console.log(excelData);
        const resultOne = functionOneEnrollment(excelData, formData);
        const resultTwo = functionTwoEnrollment(excelData, formData);
        const resultThree = functionThreeEnrollment(excelData, formData);
        const resultFour = functionFourEnrollment(excelData, formData);
        const resultFive = functionFiveEnrollment(excelData, formData);
        const resultSix = functionSixEnrollment(excelData, formData);
        const resultSeven = functionSevenEnrollment(excelData, formData);
        const resultEight = functionEightEnrollment(excelData, formData);
        const resultNine = functionNineEnrollment(excelData, formData);
        setResultOne(resultOne);
        setResultTwo(resultTwo);
        setResultThree(resultThree);
        setResultFour(resultFour);
        setResultFive(resultFive);
        setResultSix(resultSix);
        setResultSeven(resultSeven);
        setResultEight(resultEight);
        setResultNine(resultNine);
        setFormData(initialFormData);
    };

    const handleSubmitScreening = (event) => {
        event.preventDefault();
        window.alert("weekly screening!");
    };

    // Weekly Screening ====================================================================

    // Copmonent ===========================================================================
    return(
        <section class='duplicate-check-form'>
           
                <section>
                    <h1>What would you like to do?</h1>
                    <button onClick={handleEnrollment}>Enrollment Screening</button>
                    <button onClick={handleScreening}>Weekly Duplicate Screening</button>
                </section>

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
                <form onSubmit={handleSubmitScreening}>
                    <button type='submit'>Check Screening</button>
                </form>
            </section>
            )}        

            <section>
                {(resultOne || resultTwo || resultThree || resultFour || resultFive || resultSix || resultSeven || resultEight || resultNine ) && (
                <DuplicateCheckResults results={[resultOne, resultTwo, resultThree, resultFour, resultFive, resultSix, resultSeven, resultEight, resultNine ]} />
                )} 
            </section>
        </section>
    )
};

export default DuplicateCheckForm;