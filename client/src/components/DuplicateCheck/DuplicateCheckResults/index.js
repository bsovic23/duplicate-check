import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DuplicateCheckResults = (props) => {
    const { results } = props;
    const [resultThree, resultFour] = results;
    console.log(resultFour);
    console.log(resultThree);

    return(
        <section class='duplicate-check-results'>
           <div class="container text-center">
                <div class="col">
                    <div class="row">
                        <h4>FN, LN, DOB, DIGITS</h4>
                    </div>
                    <div class="row">
                        <h4>FN, LN, DOB</h4>
                    </div>
                    <div class="row">
                        <h4>FN, LN, DIGITS</h4>
                        <div>
                            <table border="1">
                                <tr>
                                    <th class='cell'>First Name</th>
                                    <th class='cell'>Last Name</th>
                                    <th class='cell'>DOB</th>
                                    <th class='cell'>Digits</th>
                                    <th class='cell'>Site</th>
                                </tr>
                                {resultThree.map((data) => (
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
                    <div class="row">
                        <h4>FN, LN</h4>
                        <div>
                            <table border="1">
                                    <tr>
                                        <th class='cell'>First Name</th>
                                        <th class='cell'>Last Name</th>
                                        <th class='cell'>DOB</th>
                                        <th class='cell'>Digits</th>
                                        <th class='cell'>Site</th>
                                    </tr>
                                    {resultFour.map((data) => (
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
                    <div class="row">
                        Row 5
                    </div>
                    <div class="row">
                        Row 6
                    </div>
                    <div class="row">
                        Row 7
                    </div>
                    <div class="row">
                        Row 8
                    </div>
                    <div class="row">
                        Row 9
                    </div>
                </div>
            </div>
        </section>
    )
};

export default DuplicateCheckResults;