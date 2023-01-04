// Accommodate.jsx

import React,{useState, useEffect} from "react";
import useCounter from "./UseCounter";

const MAX_CAPACITY = 10; //최댓값

function Accommodate(props){
    // state를 사용하기 위해 useState()를 설정
    const [isFull, setIsFull] = useState(false); //기본값은 false, 수정할려면 setIsFull을 사용해야한다
    // 해당 컴포넌트 내부에서 생성해야 할 state 객체 및 setState()를 커스텀 훅을 통해서 생성함
    // 커스텀 훅을 사용했기 때문에 재활용까지 가능함.
    const [count, increaseCount, decreaseCount] = useCounter(0);

    //원래는 아래처럼 직접 다 만들어야 했어야 했음
    // const [count ,setCont] = useState(0);
    // const increaseCount=( )=> {
    //
    // }

    // 커스텀 훅

// 리액트에서 사용하는 훅이 아닌 사용자가 필요에 의해서 생성하여 사용하는 훅
// 이름에 접두사로 use를 사용하고 함수 내부에서 다른 훅을 호출하는 단순 자바스크립트 함수
// 파라미터 및 반환값을 사용자가 직접 지정할 수 있음
// 중복되는 로직을 커스텀 훅으로 설정하여 재사용을 하기 위함
// 이름의 접두사로 use를 사용하지 않을 경우 함수 내부에서 훅을 사용하는지 판단할 수 없음


    // 리액트 생명주기 함수를 사용하기 위해서 useEffect를 설정함.
    // 의존성 배열이 없을 경우 componentDidMount, componentWillUnmount를 실행하는 것과 같은 효과
    useEffect(()=>{
        console.log("============");
        console.log("useEffect() is called");
        console.log(`isFull : ${isFull}`);
    },[]);
    
    // useEffect 두 번째 사용되고 있음. 반복가능
    // 의존성 배열에 count를 설정하여 count값이 수정되면 componentDidUpdate를 실행하는 것과 같은 효과
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log("현재 count 값 : " + count);
    }, [count]);
    
    return(
        <div>
            {/*현재 state로 설정된 count의 값을 출력*/}
            <p>{`총 ${count}명 수용했습니다.`}</p>
            {/*커스텀 훅을 통해 만들어진 사용자 입장 / 퇴장 함수를 버튼에 등록 */}
            <button onClick={increaseCount} disabled={isFull} className={"btn btn-success"}>입장</button>
            <button onClick={decreaseCount} className = {"btn btn-primary" }>퇴장</button>
            {/* if문을 사용하지 못하기 때문에 삼항연산자 등을 사용해야한다.*/}
            {/* &&일 때 앞의 값이 false라면 뒤의 것 자체 실행하지 않는다. 랜더링 자체가 되지않음 ->console창에 아무것도 뜨지 않음
            true,true 여야지만 안의 내용이 출력된다*/}
            {isFull && <p style={{color :"red"}}>정원이 가득찼습니다</p>}
        </div>
    )
}

export default Accommodate;