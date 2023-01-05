//MailBox.jsx

import React from "react";

// App6 ->  <MailBox unreadMessages={50}/>로 데이터를 받았음
function MailBox(props){
    const unreadMessages = props.unreadMessages;

    // inline if : jsx 문법으로 렌더링을 진행하는 render()함수 내부에서 if 문을 사용할 수 없기 때문에
    // '&&'를 사용하거나 삼항 연산자를 고려하여 조건부 렌더링을 진행할 수 있음

    // && 연산자 사용시 && 오른쪽에 있는 피연산자는 왼쪽에 있는 피연산자의 값에 따라 렌더링이 결정된다.
    // && 연산자 왼쪽의 피연산자 값이 false일 경우 오른쪽의 피연산자는 연산 평가 자체가 동작하지 않는다.
    // && 연산자 왼쪽의 피연산자는 연산 평가가 이루어지기 때문에 해당 값이 그대로 출력이 된다.
        return(
            <div>
                <h1>안녕하세요</h1>
                <h3>inline if (&& 연산자 테스트)</h3>
                {
                    unreadMessages> 0 &&
                    <h2>
                        현재 {unreadMessages}개의 읽지 않은 메세지가 있습니다.
                    </h2>
                }
                {/*{*/}
                {/*    unreadMessages.length> 0 &&*/}
                {/*    <h2>*/}
                {/*        현재 {unreadMessages.length}개의 읽지 않은 메세지가 있습니다.*/}
                {/*    </h2>*/}
                {/*원래 이랬는데, .length는 문자열만 인식하기 때문에 인식하지 못했었다*/}
                {/*}*/}
            </div>
        );
}

export default MailBox;