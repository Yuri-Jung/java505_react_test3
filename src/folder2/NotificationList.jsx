// NotificationList.jsx

import React from "react";
import Notification from "./Notification";

// 서버에서 전송되어야 할 데이터, 서버가 없기 때문에 대체. 통신모듈이 없기 때문에 임의로 만들어준 데이터
const msgData = [
    {id : 1, message : "안녕하세요. 오늘 일정입니다"},
    {id : 2, message : "점심 식사 시간입니다."},
    {id : 3, message : "이제 곧 미팅이 시작됩니다"},
];

// 자바 스크립트 타이머. 객체 정보를 저장할 변수
let timer;

// 클래스 컴포넌트를 사용
class NotificationList extends React.Component {
    
    // 클래스 컴포넌트의 생성자 부분
    constructor(props) {
        super(props);

        // state 객체 선언 (멤버변수로 선언)
        // 클래스(객체)의 멤버 변수로 선언
        this.state = {
            // 메시지를 저장할 배열
            notification : [],
        };
    }

    

    // 화면을 생성(랜더링)하는 함수
    render() {
        return (
            <div>
                {/*map : es6버전에서 추가된 배열 관련 함수. 지정한 배열의 크기만큼 반복하고 결과를 배열로 반환하는 함수*/}
                {this.state.notification.map((item)=>{
                    return <Notification key={item.id} message = {item.message}/>
                })}
            </div>
        );
    }

    //생명주기 할려고 일부러 class로 만들었다고 함.
    // 컴포넌트가 마운드된 후 실행되는 생명주기 함수
    // 다 동작하고 난 다음(constructer -> render -> componentDidMount) 동작됨
    componentDidMount() {
        // object 타입을 사용한 확장 표현식
        const {notification } = this.state; //현재 둘 다 비어있다. state가 비어있으니까(notification : [])

        // 타이머를 사용하여 지정된 시간에 한 번 씩 반복함
        timer = setInterval(()=>{  //setInterval : 지정된 시간 동안 계속 반복.반복실행
            // 지역변수 notification 크기가 전역 변수인 배열 msgData의 크기보다 작을 경우 if문 실행됨
            
            // 자바스크립트는 one thread 방식, 비동기실행방식이다. 이벤트 큐에 넣어주고 자기는 떠나며 쿨타임 찰 때 까지 반복함
            if (notification.length < msgData.length) { //현재 notification.length는 0. => 방금 notification의 크기가 1이 됨 // 나중에 3이 되면 3과 3은 동일하니까 아래로 간다
                const index = notification.length; //현재는 0이 들어감 -> 현재 1이다
                notification.push(msgData[index]); //push로 가장 뒤에 msg의 데이터를 넣어준다

                // setState() 함수를 사용하여 state 객체를 수정함
                this.setState({  //state 수정. notification에 notification을 넣는다
                    notification : notification, //전역변수 notification : 여기서 선언한 지역변수 notification. // 넣어주기 때문에 1이 된다. // 2가 된다
                });
            }
            else {
                clearInterval(timer); // false가 되면 이곳으로 와서 timer를 삭제한다 -> 반복 끝남.
            }
        }, 1000); // 1초 후에 다시 실행됨
    }
}

export default NotificationList;