//Goal.jsx

import React from "react";
import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";

// 조건부 렌더링 : 어떠한 조건에 따라서 화면에 표시할 렌더링이 달라지는 것.
// if문 사용 시 render() 함수가 동작하는 return 부분에서 조건문을 사용하는 것이 아니라 return 밖에서 조건문을 사용하고
// 안에서는 삼항 연산자를 사용한다.

// 자바스크립트의 true / false
// true : 논리형 true, 빈 오브젝트 타입 {}, 빈 배열 [], 0이 아닌 숫자, 빈 문자열이 아닌 문자열
// false : 논리형 false, 숫자 0 혹은 0.0, 빈 문자열 '', ``(배틱), null, undefined, NaN(Not A Number),

function Goal(props){
    // App6에서 <Goal isGoal = {false}/> 로 데이터를 주고 있다.(props)
    const isGoal = props.isGoal; //하지만 false로 받고 있으니까

    if (isGoal){ // if문은 렌더링 바깥에서 해야 한다. 렌더링 안에서 하고 싶다면 삼항연산자 사용해야한다
        //이렇게 되어있지만 if(isGoal == true)라고 수정해봐도 동일하게 출력이된다.
        return <MadeGoal/> //goal이라고 나옴
    }

    return <MissedGoal/> //missed!라고 나옴
}

export default Goal;