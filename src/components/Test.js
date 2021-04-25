import React, { useState, useEffect } from 'react';
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
    // here myName will be the function name & setMyName will be the values var name
    // const [myName, setMyName] = useState("");
    // const [myInfo, setMyInfo] = useState({
    //     a: "Sabrina",
    //     b: "Naorin"
    // });
    // const [myInfo, setMyInfo] = useState("SNS");

    // hooks totally rewrite the value
    // so we need to compare with the previous values and merge
    // const changeState = () => {
    //     setMyName("Sumona");
    //     // here setMyInfo holds an obj
    //     setMyInfo({
    //         age: 23,
    //         address: "Dhaka, Bangladesh"
    //     })
    // }
    // console.log("My info: ", myInfo);

    // // concatenation with existing
    // const [myNumbers, setMyINumbers] = useState([1, 2, 3, 4, 5]);

    // const changeState = () => {
    //     setMyINumbers(myNumbers.concat([6, 7, 8, 9, 10]));
    // }
    // console.log("My numbers: ", myNumbers);

    // useState must be declared at top level, we cant call it in ifelse or for loop or function etc.
    // we cant call setMyName directly, we must call it in changeState
    // if we call it directly, it will be overflowed
    const [myName, setMyName] = useState({
        a: "Sabrina",
        b: "Naorin"
    });

    // // just change where changing needed & others remain same
    // const changeState = () => {
    //     setMyName({
    //         a: "Sabrina",
    //         b: "Sumona"
    //     })
    // }

    // using spreed operator
    const changeState = () => {
        setMyName({
            ...myName,
            b: "Sumona"
        })
    }
    console.log("My name: ", myName);

    return (
        <div>
            <button onClick={changeState}>Change</button>
            {/* <button onClick={changeState}>Show</button> */}
            {/* <h3>Name: {myName}</h3>
            <h4>Age: {myInfo.age}</h4>
            <h4>Address: {myInfo.address}</h4>
            <h3>{testState[0]}</h3>
            <h3>{myName[0]}</h3> */}
        </div>
    );
}

export default Test;