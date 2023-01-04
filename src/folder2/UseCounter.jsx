// UseCounter.jsx
// 훅 두 번 째 예제
import React,{useState} from "react";

// 커스텀 훅
// 이름에 use를 접두사로 사용
// 매개변수, 반환값을 사용자 마음대로 설정
// 내부에서 훅을 사용한 함수이며, 소스코드 재활용을 위해서 사용함


// 커스텀 훅으로 설정
// 매개변수를 마음대로 설정함
function useCounter(initValue){ //porps대신 initValue 사용한 이유는 커스텀 훅이니까
    
    // state 사용을 위해서 useState 설정 함 initValue이 자리에 초기값 넣어줌
    const [count, setCount] = useState(initValue);

    // 함수 실행 시 state를 수정하기 위한 setCount를 실행 아래가 원본인데 축약 가능. setCount되면 화면이 재랜더링된다
    const increaseCount = () => {
        setCount((count)=> {
            return count + 1
        });
    }

    const decreaseCount = () =>{
        // 자바스크립트에서 지원하는 수학 클랫의 max 함수를 사용하여 0이하의 값을 사용할 수 없도록 제약 //    Math.max : 최댓값
        setCount((count)=> Math.max(count-1,0)); //0밑으로 안내려가게. 0이하로 못 내려간다

    //     이렇게 해도 된다. 위의 것은 더 심플하다.
    //     setCount((count)=>{
    //         count--;
    //         if (count < 0) {
    //             count = 0;
    //         }
    //         return count;
    //     })

    }
    return [count, increaseCount, decreaseCount];
}

export default useCounter;
