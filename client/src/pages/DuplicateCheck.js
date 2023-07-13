import React, { useState } from 'react';

import DuplicateCheckImport from '../components/DuplicateCheck/DuplicateCheckImport';
import DuplicateCheckForm from '../components/DuplicateCheck/DuplicateCheckForm';

const DuplicateCheck = () => {
    return(
        <section class='duplcate-check'>
            <section>
                < DuplicateCheckImport />
            </section>
            <section>
                <DuplicateCheckForm />
            </section>
            <section>
                RESULTS FOR DUP(S) AND/OR CLEAR
            </section>
        </section>
    )
};

export default DuplicateCheck;