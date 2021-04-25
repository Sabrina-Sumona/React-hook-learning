import React, { useState } from 'react';
// useState is used to use states in functional component
const Test = props => {
    // //passing empty str
    // const testState = useState("");
    // // //passing empty arr
    // // const testState = useState([]);
    // // //passing empty obj
    // // const testState = useState({});
    // // //passing zero
    // // const testState = useState(0);
    // // //passing str
    // // const testState = useState("SNS");

    // // // array
    // // console.log(testState);
    // // // value 
    // // console.log(testState[0]);
    // // // function
    // // console.log(testState[1]);
    // if (testState[0] === "") {
    //     // set state
    //     //function call and value pass
    //     testState[1]("SNS")
    // }

    // // functiona call to change state
    // const myName = useState("");

    // const changeState = () => {
    //     myName[1]("SNS")
    // }

    // array-destructuring
    const [myName, setMyName] = useState("");
    const [myInfo, setMyInfo] = useState({});

    const changeState = () => {
        setMyName("Sumona");
        setMyInfo({
            age: 23,
            address: "Dhaka, Bangladesh"
        })
    }

    return (
        <div>
            <button onClick={changeState}>Show</button>
            <h3>Name: {myName}</h3>
            <h4>Age: {myInfo.age}</h4>
            <h4>Address: {myInfo.address}</h4>
            {/* <h3>{testState[0]}</h3> */}
            {/* <h3>{myName[0]}</h3> */}
        </div>
    );
}

export default Test;