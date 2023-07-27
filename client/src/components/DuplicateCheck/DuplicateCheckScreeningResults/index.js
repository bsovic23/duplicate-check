import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DuplicateCheckScreeningResults = (props) => {
    const { results } = props;
    const [resultScreeningOne, resultScreeningTwo, resultScreeningThree, resultScreeningFour, resultScreeningFive, resultScreeningSix, resultScreeningSeven, resultScreeningEight, resultScreeningNine] = results;

    return(
        <section class='duplicate-check-results'>
            <h3>The Yellow highlighted row is the person(s) being checked. The teal highlighted rows below are all possible duplicates that came up for that specific test</h3>
           <div class="container text-center">
                <div class="col">
                    <div class="row">
                        <h4>FN, LN, DOB, DIGITS</h4>
                        <div>
                        {resultScreeningOne.length > 1 ? (
                            <table border="1">
                                <tr>
                                    <th class='cell'>First Name</th>
                                    <th class='cell'>Last Name</th>
                                    <th class='cell'>DOB</th>
                                    <th class='cell'>Digits</th>
                                    <th class='cell'>Site</th>
                                </tr>
                                {resultScreeningOne.map((data) => (
                                <tr key={data.id} class={data.enter}>
                                    <td class='cell'>{data.firstName}</td>
                                    <td class='cell'>{data.lastName}</td>
                                    <td class='cell'>{data.dob}</td>
                                    <td class='cell'>{data.digits}</td>
                                    <td class='cell'>{data.site}</td>
                                </tr>
                            ))}
                            </table>
                        ) : (
                            <div>No duplicate for this test</div>
                          )}
                        </div>
                    </div>
                    <div class="row">
                        <h4>FN, LN, DOB</h4>
                        <div>
                        {resultScreeningTwo.length > 1 ? (
                            <table border="1">
                                <tr>
                                    <th class='cell'>First Name</th>
                                    <th class='cell'>Last Name</th>
                                    <th class='cell'>DOB</th>
                                    <th class='cell'>Digits</th>
                                    <th class='cell'>Site</th>
                                </tr>
                                {resultScreeningTwo.map((data) => (
                                <tr key={data.id} class={data.enter}>
                                    <td class='cell'>{data.firstName}</td>
                                    <td class='cell'>{data.lastName}</td>
                                    <td class='cell'>{data.dob}</td>
                                    <td class='cell'>{data.digits}</td>
                                    <td class='cell'>{data.site}</td>
                                </tr>
                            ))}
                            </table>
                        ) : (
                            <div>No duplicate for this test</div>
                          )}
                        </div>
                    </div>
                    <div class="row">
                        <h4>FN, LN, DIGITS</h4>
                        <div>
                        {resultScreeningThree.length > 1 ? (
                            <table border="1">
                                <tr>
                                    <th class='cell'>First Name</th>
                                    <th class='cell'>Last Name</th>
                                    <th class='cell'>DOB</th>
                                    <th class='cell'>Digits</th>
                                    <th class='cell'>Site</th>
                                </tr>
                                {resultScreeningThree.map((data) => (
                                <tr key={data.id} class={data.enter}>
                                    <td class='cell'>{data.firstName}</td>
                                    <td class='cell'>{data.lastName}</td>
                                    <td class='cell'>{data.dob}</td>
                                    <td class='cell'>{data.digits}</td>
                                    <td class='cell'>{data.site}</td>
                                </tr>
                            ))}
                            </table>
                        ) : (
                            <div>No duplicate for this test</div>
                          )}
                        </div>
                    </div>
                    <div class="row">
                        <h4>FN, LN</h4>
                        <div>
                        {resultScreeningFour.length > 1 ? (
                            <table border="1">
                                <tr>
                                    <th class='cell'>First Name</th>
                                    <th class='cell'>Last Name</th>
                                    <th class='cell'>DOB</th>
                                    <th class='cell'>Digits</th>
                                    <th class='cell'>Site</th>
                                </tr>
                                {resultScreeningFour.map((data) => (
                                <tr key={data.id} class={data.enter}>
                                    <td class='cell'>{data.firstName}</td>
                                    <td class='cell'>{data.lastName}</td>
                                    <td class='cell'>{data.dob}</td>
                                    <td class='cell'>{data.digits}</td>
                                    <td class='cell'>{data.site}</td>
                                </tr>
                            ))}
                            </table>
                        ) : (
                            <div>No duplicate for this test</div>
                          )}
                        </div>
                    </div>
                    <div class="row">
                        <h4>FN, DOB, DIGITS</h4>
                        <div>
                        {resultScreeningFive.length > 1 ? (
                            <table border="1">
                                <tr>
                                    <th class='cell'>First Name</th>
                                    <th class='cell'>Last Name</th>
                                    <th class='cell'>DOB</th>
                                    <th class='cell'>Digits</th>
                                    <th class='cell'>Site</th>
                                </tr>
                                {resultScreeningFive.map((data) => (
                                <tr key={data.id} class={data.enter}>
                                    <td class='cell'>{data.firstName}</td>
                                    <td class='cell'>{data.lastName}</td>
                                    <td class='cell'>{data.dob}</td>
                                    <td class='cell'>{data.digits}</td>
                                    <td class='cell'>{data.site}</td>
                                </tr>
                            ))}
                            </table>
                        ) : (
                            <div>No duplicate for this test</div>
                          )}
                        </div>
                    </div>
                    <div class="row">
                        <h4>LN, DOB, DIGITS</h4>
                        <div>
                        {resultScreeningSix.length > 1 ? (
                            <table border="1">
                                <tr>
                                    <th class='cell'>First Name</th>
                                    <th class='cell'>Last Name</th>
                                    <th class='cell'>DOB</th>
                                    <th class='cell'>Digits</th>
                                    <th class='cell'>Site</th>
                                </tr>
                                {resultScreeningSix.map((data) => (
                                <tr key={data.id} class={data.enter}>
                                    <td class='cell'>{data.firstName}</td>
                                    <td class='cell'>{data.lastName}</td>
                                    <td class='cell'>{data.dob}</td>
                                    <td class='cell'>{data.digits}</td>
                                    <td class='cell'>{data.site}</td>
                                </tr>
                            ))}
                            </table>
                        ) : (
                            <div>No duplicate for this test</div>
                          )}
                        </div>
                    </div>
                    <div class="row">
                        <h4>FN, DOB</h4>
                        <div>
                        {resultScreeningSeven.length > 1 ? (
                            <table border="1">
                                <tr>
                                    <th class='cell'>First Name</th>
                                    <th class='cell'>Last Name</th>
                                    <th class='cell'>DOB</th>
                                    <th class='cell'>Digits</th>
                                    <th class='cell'>Site</th>
                                </tr>
                                {resultScreeningSeven.map((data) => (
                                <tr key={data.id} class={data.enter}>
                                    <td class='cell'>{data.firstName}</td>
                                    <td class='cell'>{data.lastName}</td>
                                    <td class='cell'>{data.dob}</td>
                                    <td class='cell'>{data.digits}</td>
                                    <td class='cell'>{data.site}</td>
                                </tr>
                            ))}
                            </table>
                        ) : (
                            <div>No duplicate for this test</div>
                          )}
                        </div>
                    </div>
                    <div class="row">
                        <h4>LN, DOB</h4>
                        <div>
                        {resultScreeningEight.length > 1 ? (
                            <table border="1">
                                <tr>
                                    <th class='cell'>First Name</th>
                                    <th class='cell'>Last Name</th>
                                    <th class='cell'>DOB</th>
                                    <th class='cell'>Digits</th>
                                    <th class='cell'>Site</th>
                                </tr>
                                {resultScreeningEight.map((data) => (
                                <tr key={data.id} class={data.enter}>
                                    <td class='cell'>{data.firstName}</td>
                                    <td class='cell'>{data.lastName}</td>
                                    <td class='cell'>{data.dob}</td>
                                    <td class='cell'>{data.digits}</td>
                                    <td class='cell'>{data.site}</td>
                                </tr>
                            ))}
                            </table>
                        ) : (
                            <div>No duplicate for this test</div>
                          )}
                        </div>
                    </div>
                    <div class="row">
                        <h4>DOB, DIGITS</h4>
                        <div>
                        {resultScreeningNine.length > 1 ? (
                            <table border="1">
                                <tr>
                                    <th class='cell'>First Name</th>
                                    <th class='cell'>Last Name</th>
                                    <th class='cell'>DOB</th>
                                    <th class='cell'>Digits</th>
                                    <th class='cell'>Site</th>
                                </tr>
                                {resultScreeningNine.map((data) => (
                                <tr key={data.id} class={data.enter}>
                                    <td class='cell'>{data.firstName}</td>
                                    <td class='cell'>{data.lastName}</td>
                                    <td class='cell'>{data.dob}</td>
                                    <td class='cell'>{data.digits}</td>
                                    <td class='cell'>{data.site}</td>
                                </tr>
                            ))}
                            </table>
                        ) : (
                            <div>No duplicate for this test</div>
                          )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default DuplicateCheckScreeningResults;