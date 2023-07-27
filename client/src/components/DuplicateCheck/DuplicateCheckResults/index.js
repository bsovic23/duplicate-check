import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DuplicateCheckResults = (props) => {
    const { results } = props;
    const [resultOne, resultTwo, resultThree, resultFour, resultFive, resultSix, resultSeven, resultEight, resultNine ] = results;

    return(
        <section class='duplicate-check-results'>
            <h3>The Yellow highlighted row is the person(s) being checked. The teal highlighted rows below are all possible duplicates that came up for that specific test</h3>
           <div class="container text-center">
                <div class="col">
                    <div class="row">
                        <h4>FN, LN, DOB, DIGITS</h4>
                        <div>
                        {resultOne.length > 1 ? (
                            <table border="1">
                                <tr>
                                    <th class='cell'>ID</th>
                                    <th class='cell'>First Name</th>
                                    <th class='cell'>Last Name</th>
                                    <th class='cell'>DOB</th>
                                    <th class='cell'>Digits</th>
                                    <th class='cell'>Site</th>
                                </tr>
                                {resultOne.map((data) => (
                                <tr key={data.id} >
                                    <td class='cell'>{data.id}</td>
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
                        {resultTwo.length > 1 ? (
                            <table border="1">
                                <tr>
                                    <th class='cell'>ID</th>
                                    <th class='cell'>First Name</th>
                                    <th class='cell'>Last Name</th>
                                    <th class='cell'>DOB</th>
                                    <th class='cell'>Digits</th>
                                    <th class='cell'>Site</th>
                                </tr>
                                {resultTwo.map((data) => (
                                <tr key={data.id}>
                                    <td class='cell'>{data.id}</td>
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
                            {resultThree.length > 1 ? (
                            <table border="1">
                                <tr>
                                    <th class='cell'>ID</th>
                                    <th class='cell'>First Name</th>
                                    <th class='cell'>Last Name</th>
                                    <th class='cell'>DOB</th>
                                    <th class='cell'>Digits</th>
                                    <th class='cell'>Site</th>
                                </tr>
                                {resultThree.map((data) => (
                                <tr key={data.id}>
                                    <td class='cell'>{data.id}</td>
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
                            {resultFour.length > 1 ? (
                            <table border="1">
                                    <tr>
                                        <th class='cell'>ID</th>
                                        <th class='cell'>First Name</th>
                                        <th class='cell'>Last Name</th>
                                        <th class='cell'>DOB</th>
                                        <th class='cell'>Digits</th>
                                        <th class='cell'>Site</th>
                                    </tr>
                                    {resultFour.map((data) => (
                                    <tr key={data.id}>
                                        <td class='cell'>{data.id}</td>
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
                        <div class='table-container'>
                            {resultFive.length > 1 ? (
                            <table border="1">
                                <tr>
                                    <th class='cell'>ID</th>
                                    <th class='cell'>First Name</th>
                                    <th class='cell'>Last Name</th>
                                    <th class='cell'>DOB</th>
                                    <th class='cell'>Digits</th>
                                    <th class='cell'>Site</th>
                                </tr>
                                {resultFive.map((data) => (
                                <tr key={data.id}>
                                    <td class='cell'>{data.id}</td>
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
                            {resultSix.length > 1 ? (
                            <table border="1">
                                <tr>
                                    <th class='cell'>ID</th>
                                    <th class='cell'>First Name</th>
                                    <th class='cell'>Last Name</th>
                                    <th class='cell'>DOB</th>
                                    <th class='cell'>Digits</th>
                                    <th class='cell'>Site</th>
                                </tr>
                                {resultSix.map((data) => (
                                <tr key={data.id}>
                                    <td class='cell'>{data.id}</td>
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
                            {resultSeven.length > 1 ? (
                            <table border="1">
                                <tr>
                                    <th class='cell'>ID</th>
                                    <th class='cell'>First Name</th>
                                    <th class='cell'>Last Name</th>
                                    <th class='cell'>DOB</th>
                                    <th class='cell'>Digits</th>
                                    <th class='cell'>Site</th>
                                </tr>
                                {resultSeven.map((data) => (
                                <tr key={data.id}>
                                    <td class='cell'>{data.id}</td>
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
                            {resultEight.length > 1 ? (
                            <table border="1">
                                <tr>
                                    <th class='cell'>ID</th>
                                    <th class='cell'>First Name</th>
                                    <th class='cell'>Last Name</th>
                                    <th class='cell'>DOB</th>
                                    <th class='cell'>Digits</th>
                                    <th class='cell'>Site</th>
                                </tr>
                                {resultEight.map((data) => (
                                <tr key={data.id}>
                                    <td class='cell'>{data.id}</td>
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
                            {resultNine.length > 1 ? (
                            <table border="1">
                                <tr>
                                    <th class='cell'>ID</th>
                                    <th class='cell'>First Name</th>
                                    <th class='cell'>Last Name</th>
                                    <th class='cell'>DOB</th>
                                    <th class='cell'>Digits</th>
                                    <th class='cell'>Site</th>
                                </tr>
                                {resultNine.map((data) => (
                                <tr key={data.id}>
                                    <td class='cell'>{data.id}</td>
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

export default DuplicateCheckResults;