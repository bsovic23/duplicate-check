import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DuplicateCheckScreeningResults = (props) => {
    const { results } = props;
    const [resultScreeningOne ,resultScreeningTwo, resultScreeningThree, resultScreeningFour, resultScreeningFive, resultScreeningSix, resultScreeningSeven, resultScreeningEight, resultScreeningNine] = results;
    console.log(resultScreeningOne);
    console.log(resultScreeningTwo);
    console.log(resultScreeningThree);
    console.log(resultScreeningFour);
    console.log(resultScreeningFive);
    console.log(resultScreeningSix);
    console.log(resultScreeningSeven);
    console.log(resultScreeningEight);
    console.log(resultScreeningNine);
    
    return(
        <section class='duplicate-check-results'>
            <h3>The Yellow highlighted row is the person(s) being checked. The teal highlighted rows below are all possible duplicates that came up for that specific test</h3>
           <div class="container text-center">
                <div class="col">
                    <div class="row">
                        <h4>FN, LN, DOB, DIGITS</h4>
                        <div>
                            <table border="1">
                                <tr>
                                    <th class='cell'>First Name</th>
                                    <th class='cell'>Last Name</th>
                                    <th class='cell'>DOB</th>
                                    <th class='cell'>Digits</th>
                                    <th class='cell'>Site</th>
                                </tr>
                                {resultScreeningFour.map((data) => (
                                <tr key={data.firstName} class={data.enter}>
                                    <td class='cell'>{data.firstName}</td>
                                    <td class='cell'>{data.lastName}</td>
                                    <td class='cell'>{data.dob}</td>
                                    <td class='cell'>{data.digits}</td>
                                    <td class='cell'>{data.site}</td>
                                </tr>
                            ))}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default DuplicateCheckScreeningResults;