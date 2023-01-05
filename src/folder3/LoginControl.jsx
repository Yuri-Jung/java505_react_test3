// LoginControl.jsx

import React, {useState} from "react";
import Greeting from "./Greeting";
import UserStatus from "./UserStatus";


// 버튼 두 가지 생성 (로그인 버전, 비로그인 버전)
function LoginButton (props) { 
    return (
        <button type={"button"} onClick={props.onClick}>로그인</button>
    );
}

function LogoutButton (props) {
    return (
        <button type={"button"} onClick={props.onClick}>로그아웃</button>
    );
}


function LoginControl(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 자바스크립트는 변수에 함수도 저장가능하다.

    //이 거를 실행하면 true로 변경시킨다.
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    // 엘리먼트 변수 : 자바스크립트 변수에 리액트 컴포넌트를 저장한 것
    // 조건부 렌더링을 사용하기 위해서 자바스크립트 변수 button에 react 컴포넌트를 저장함
    let button;
    
    // state의 상태에 따라서 element 변수에 저장될 리액트 컴포넌트를 변경
    // 위에 있는 state다. isLoggedIn,setIsLoggedIn
    // true인 상태면 버튼은 로그아웃이라고 보이고 누르면 로그아웃이 되면서 상태를 false로 변환시킨다.
    if (isLoggedIn) {
        button = <LogoutButton onClick = {handleLogoutClick}/>;
    }
    else {
        button = <LoginButton onClick = {handleLoginClick}/>;
    }

    return (
        <div>
            <Greeting isLoggedIn = {isLoggedIn}/>
            {
                isLoggedIn ? <LogoutButton onClick={handleLogoutClick}/> : <LoginButton onClick = {handleLoginClick}/>
            }
            {/*엘리먼트 변수에 저장된 리액트 컴포넌트가 출력된다*/}
            {button} {/*출력되는 부분. 위의 if문에 따라 모양이 달라진다.*/}
            <UserStatus isLoggedIn = {isLoggedIn} />
        </div>
    );
}


export default LoginControl;

