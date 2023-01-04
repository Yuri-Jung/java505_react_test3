// Events.jsx

// 리액트는 html과 같은 이벤트를 가지고 있다.
// 카멜명명법을 사용하므로 onclick = "sum()" 에서 onClick={sum}으로 변경하여 사용한다.
// 매개변수 전달 시 이벤트 부분에 화살표 콜백 함수를 사용한다.
//      onClick = {() => sum(10)} 이런 형태로 사용된다
// 이벤트 사용 시 이벤트 헨들러도 매개변수로 전달이 가능하다.
//      onClick = {(event) => sum(10, event)}

import React from "react";


    // 기본 함수를 클릭이벤트와 연동
    const click1 = () => alert("일반 클릭 이벤트");
    
    // 매개변수가 있는 함수를 클릭이벤트와 연동
    const click2 = (item) => alert(`매개변수 값 : ${item}, \n매개변수가 있는 이벤트`)

    // 매개변수로 이벤트 핸들러(=이벤트 객체)를 사용하는 함수를 클릭이벤트와 연동
    // 이벤트 객체는 어느 객체에서 시작하는지 확인 가능하다.
    // 어떤 키로 작동되었는지 (ex. 키보드의 어느 키, 마우스 클릭 등) 확인 가능하다.
    const click3 = (item, event) => { //event : 자바스크립트가 원래 가지고 있는 이벤트 객체
        let msg = `매개변수와 event 객체가 있는 클릭 이벤트
        매개변수 값 : ${item}, 이벤트 객체 : ${event.type}`;
        console.log(event);

        alert(msg);
    }

function Events(){

    return(
        <div>
            <button type={"button"} className={"btn btn-primary"} onClick={click1}>일반 클릭 이벤트</button> 
            {/*함수이름쓰기 + 매개변수 적기*/}

            <button type={"button"} className={"btn btn-success"} onClick = {() => click2(100)}>매개변수가 있는 클릭 이벤트</button>

            {/*콜백함수에 event넣어준다. -> 내 버튼에서 발생한 이벤트 객체. 그걸 매개변수로 넘겨주는 것.*/}
            <button type={"button"} className={"btn btn-info"} onClick = {(event)=>click3(200,event)}>event 객체가 있는 클릭 이벤트</button>
        </div>
    )
}



export default Events;















