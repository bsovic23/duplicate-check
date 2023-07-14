import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DuplicateCheckResults = (props) => {
    const { result } = props;

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
                    </div>
                    <div class="row">
                        <h4>FN, LN</h4>
                        <div>
                        {result.map((data) => (
                        <div key={data.firstName} class={data.enter}>
                            {data.firstName}
                            {data.lastName}
                            {data.dob}
                            {data.digits}
                            {data.site}
                        </div>
                        ))}
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