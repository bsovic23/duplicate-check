const excelData = [
    {id: 1, firstName: 'bill', lastName: 'jones', site: 'cuimc', dob: '2020-10-22', enter: 'no'},
    {id: 2, firstName: 'rob', lastName: 'robby', site: 'cuimc', dob: '2020-10-22', enter: 'no'},
    {id: 3, firstName: 'brad', lastName: 'alexander', site: 'cuimc', dob: '2020-10-22', enter: 'no'},
    {id: 4, firstName: 'bill', lastName: 'jones', site: 'bronx', dob: '2020-10-22', enter: 'yes'},
    {id: 5, firstName: 'rob', lastName: 'robby', site: 'harlem', dob: '2020-10-22', enter: 'yes'},
    {id: 6, firstName: 'rob', lastName: 'robby', site: 'cornell', dob: '2020-10-22', enter: 'yes'},
    {id: 7, firstName: 'bill', lastName: 'jones', site: 'harlem', dob: '2020-10-22', enter: 'yes'},
];


<div class="row">
<h4>FN, LN, DOB</h4>
<div>
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
</div>
</div>
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
</div>
</div>
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
        <tr key={data.id} class={data.enter}>
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
</div>
</div>
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
</div>
</div>
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
</div>
</div>
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
</div>
</div>
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
</div>
</div>