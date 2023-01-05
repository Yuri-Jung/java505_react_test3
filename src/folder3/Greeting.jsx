//Greeting.jsx

import React from "react";


// App6에서 <Greeting isLoggedIn = {false}/>으로 하고 있다.
function Greeting(props){
    const isLoggedIn = props.isLoggedIn; //false값 들어간다

    if (isLoggedIn) {
        //if (isLoggedIn==true)과 동일. 현재 false이기 때문에 아래에 있는 <GuestGreeting/>이 실행된다.
        return <UserGreeting/> // 아래에 있는 함수
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