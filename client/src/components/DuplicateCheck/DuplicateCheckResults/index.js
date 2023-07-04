import React from 'react';

const DuplicateCheckResults = () => {

    const testExcel = [
        {id: 1, site: 'CUIMC', firstname: 'ben', lastname: 'jones', digits: '1111', dob: '01/01/2000', testnumber: 1},
        {id: 2, site: 'CUIMC', firstname: 'ben', lastname: 'jones', digits: '1111', dob: '01/01/2000', testnumber: 1},
        {id: 3, site: 'CUIMC', firstname: 'ben', lastname: 'jones', digits: '1111', dob: '01/01/2000', testnumber: 2},
        {id: 4, site: 'CUIMC', firstname: 'ben', lastname: 'jones', digits: '1111', dob: '01/01/2000', testnumber: 3},
        {id: 5, site: 'CUIMC', firstname: 'ben', lastname: 'jones', digits: '1111', dob: '01/01/2000', testnumber: 4},
    ];

    return(
        <section class='duplicate-check-results'>
            <div>
                Your search has returned ___ possible duplicates
            </div>
            <div>
                INSERT COLUMNS FOR DUPLICATES FROM CHECK
            </div>
        </section>
    )
};

export default DuplicateCheckResults;