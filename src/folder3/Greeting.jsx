//Greeting.jsx

import React from "react";

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <UserGreeting/>
    }

    return <GuestGreeting/>
}

// 이렇게 써도 된다
// function Greeting(props){
//     const isLoggedIn = props;
// }

function UserGreeting(){
    return <h2>다시 오셨군요!!!!!</h2>
}

function GuestGreeting(){
    return <h2>회원가입을 해 주세요!!</h2>
}

export default Greeting;