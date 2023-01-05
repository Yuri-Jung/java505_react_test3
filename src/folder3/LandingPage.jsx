// LandingPage.jsx

import React,{useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props){
    // isLoggedIn을 state로 설정
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 클릭 이벤트 시 사용할 함수를 생성
    // state 값 수정을 위한 함수 생성
    const onClickLogin = () => {
        setIsLoggedIn(true);
    }
    const onClickLogOut = () => {
        setIsLoggedIn(false);
    }
    return (
        <div>
            {/*{{onClickLogOut}에 들어있는건 위에 있는 함수이다. 위에서 받아와서 랜팅페이지에서 넘겨줘서stae값 변경해주는 걸 이 페이지에서
            대신 해주고 있음}*/}
            <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogOut={onClickLogOut}/>
            <div style={{padding : 16}}>베너 확인</div>
        {/*    {{padding : 16}} 바깥 {}는 데이터를 집어넣기 위해 안의 {}는 js의 오브젝트라는 걸 알려줌*/}
        </div>
    )
}

export default LandingPage;