// ConfirmButton.jsx

import React,{useState} from "react";

function ConfirmButton(props){
    const [isConfirmed, setIsConfirmed] = useState(false);
    // setIsConfirmed -> state 수정

    const handleConfirm = () => {
        //isConfirmed 콜백 함수 동작. 현재값 false에 not을 붙으면 true로 값이 들어감
        setIsConfirmed((isConfirmed) => !isConfirmed);
        setTimeout(()=>{
            setIsConfirmed(false);
        },2000); // 2초 후에 돌아온다
    };

    return(
        <div>
            {/*값이 true이면 disabled가 동작됨 => 버튼 사용할 수 없게 만듦*/}
            <button type={"button"} className={"btn btn-primary"} onClick={handleConfirm} disabled={isConfirmed}>
                {isConfirmed ? "확인 완료" : "확인하기"}
            </button>
        </div>
    )
}

export default ConfirmButton;