import React from 'react';

const Employee = (props) => {

    const { firstName, lastName, age: EmployeeAge} = props;
    return (
        <React.Fragment>
            <h2>Employee Name: {firstName} {lastName}'s age is {EmployeeAge}</h2>
        </React.Fragment>
    );
};

export default Employee;