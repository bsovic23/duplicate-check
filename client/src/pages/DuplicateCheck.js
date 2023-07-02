import React from 'react';

import DuplicateCheckImport from '../components/DuplicateCheck/DuplicateCheckImport';
import DuplicateCheckForm from '../components/DuplicateCheck/DuplicateCheckForm';

const DuplicateCheck = () => {
    return(
        <section class='duplcate-check'>
            <section>
                FORM FOR DUP SCREENING ie - is this a weekly screening or enrollment screening

                If weekly screening then box with 'what is the weekly screening number'

                If enrollment screening - form with entering the participants information
                <DuplicateCheckForm />
            </section>
            <section>
                < DuplicateCheckImport />
            </section>
            <section>
                RESULTS FOR DUP(S) AND/OR CLEAR
            </section>
        </section>
    )
};

export default DuplicateCheck;