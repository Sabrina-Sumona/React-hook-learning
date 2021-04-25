import React, { useState } from 'react';
// useState is used to use states in functional component
const Test = props => {
    //passing empty str
    const testState = useState("");
    // //passing empty arr
    // const testState = useState([]);
    // //passing empty obj
    // const testState = useState({});
    // //passing zero
    // const testState = useState(0);
    // //passing str
    // const testState = useState("SNS");

    // // array
    // console.log(testState);
    // // value 
    // console.log(testState[0]);
    // // function
    // console.log(testState[1]);
    if (testState[0] === "") {
        // set state
        //function call and value pass
        testState[1]("SNS")

    }
    return (
        <div>
            <h3>{testState[0]}</h3>
        </div>
    );
}

export default Test;