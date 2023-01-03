// FunctionComponent.jsx

// 1. 모든 컴포넌트는 React를 import해서 사용함
// 2. 함수 컴포넌트는 그냥 함수 생성
// 3. 함수 컴포넌트를 export default로 설정해야 내부에서 사용가능하다
// 4. 함수 컴포넌트는 return에서 jsx문법을 사용한다
// 5. state 변경 및 생명주기에 관련된 함수를 사용하기 위해서 hooks를 사용함

// 대부분 function 컴포넌트에서 해결함. HOOK을 사용하면서 생명주기 사용가능해졌기 때문


import React ,{useState} from "react";

function FunctionComponent(props){
    return (
        <p>함수컴포넌트 사용</p>
    );
}

export default FunctionComponent;