//Profile.js

import React from "react";


// function Profile({userId, userName,userTel,userEmail}){} 이런 식으로 해도 된다.
// 확장표현식 - 대입연산자 오른쪽의 데이터를 연산자 왼쪽의 변수에 저장시 [] / {} 에 표시된 이름에 대입
// 왼쪽이 오브젝트타입이면 오른쪽이 오브젝트타입이어야 한다. 단! key 값이 동일해야 한다


// 컴포넌트 => 함수다
function Profile(props){
    let data = props;
    //props는 읽기전용이므로 계산이나 변경하고 싶으면 변수로 받아 해야 한다.

    let userId = props.userId;
    let userName = props.userName;
    let userTel = props.userTel;
    let userEmail = props.userEmail;

    return (
        <div className={"border rounded-2 px-3 m-4"}>
            <div className = {"my-3" }>
                <label for={"user-id"} className={"form-label"}>아이디 : </label>
                <input type={"text"} id={"user-id"} className={"form-control"} value={data.userId}/>
                {/*<input type={"text"} id={"user-id"} className={"form-control"} value={props.userId}/>*/}
            </div>
            <div className = {"my-3" }>
                <label for={"user-name"} className = {"form-label" }>이름 : </label>
                <input type={"text"} id={"user-name"} className={"form-control"} value={userName}/>
            </div>
            <div className = {"my-3" }>
                <label for={"user-tel"} className = {"form-label" }>전화번호 : </label>
                <input type={"tel"} id={"user-tel"} className={"form-control"} value={props.userTel}/>
            </div>
            <div className = {"my-3" }>
                <label for={"user-email"} className = {"form-label" }>이메일 : </label>
                <input type={"email"} id={"user-email"} className={"form-control"} value={userEmail}/>
            </div>
        </div>
    )
}

export default Profile;