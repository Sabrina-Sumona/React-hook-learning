import React, { useState, useEffect } from 'react';
// useState hook is used to use states in functional component
// useEffect hook is used for similar works like componentDidMount & componentDidUpdate in functional component
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
    // const [myName, setMyName] = useState({
    //     a: "Sabrina",
    //     b: "Naorin"
    // });

    // // just change where changing needed & others remain same
    // const changeState = () => {
    //     setMyName({
    //         a: "Sabrina",
    //         b: "Sumona"
    //     })
    // }

    // using spreed operator
    // we can call axios get here, but it is a bad practice
    // const changeState = () => {
    //     // setMyName({
    //     //     ...myName,
    //     //     b: "Sumona"
    //     // });
    //     // we can call axios post here
    // }
    // console.log("My name: ", myName);

    // it done componentDidMount & componentDidUpdate both's work
    // it will call when 1st time render, also when changes
    // useEffect(() => {
    //     // wecan call axios get here, it is a good practice
    //     console.log("My name: ", myName);
    // }
    //     // it will be call when 1st time render & when update, else cant
    //     // if no change in changeState then it will not call 2nd time
    //     , [myName]);

    const [myName, setMyName] = useState("");
    const [myInfo, setMyInfo] = useState({
        age: 23,
        address: "Dhaka, Bangladesh"
    });

    // const changeState = () => {
    //     setMyName("Sabrina");
    // }

    // useEffect(() => {
    //     console.log("MyInfo:", myInfo);
    //     // we can call multiple states here
    //     // here everytime myInfo prints as it is in changeState so everytime shows as it updates 
    // }, [myInfo, myName]);

    const changeState = () => {
        setMyName("Sabrina");
        setMyInfo({
            age: 19,
            address: "Bogra, Bangladesh"
        })
    }

    useEffect(() => {
        console.log("MyInfo:", myInfo);
        console.log("MyName:", myName);
        // empty array means it will call only 1st time render as componentDidMount
    }, []);

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