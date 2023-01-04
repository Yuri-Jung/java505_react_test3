// Calculator.jsx
import React, {useState} from "react";

function Calculator(props){

    // const [result, setResult] = useState(0);
    // const
    // const resultPlus = ()=>{
    //     setResult()
    // }
    
    // 계산된 데이터를 저장하고 있을 변수(선생님 버전)
    let calResult = 0; //바깥에 있어야함

    const[num1, setNum1] = useState(0);
    const[num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    
    // '='기호 사용해보기
    const [finalResult, setFinalResult] = useState(0);
    
    // const resultCal = () =>{}

    const plus = () => {
        setFinalResult(parseInt(num1) + parseInt(num2));
        console.log(`덧셈 결과  :  ${finalResult}`);

    //    const number1 = parseInt(num1);
    //    const number2 = parseInt(num2);
    //    calResult = number1 + number2;
    }

    const minus = () => {
        setFinalResult(num1 - num2);
        console.log(`뺄셈 결과  :  ${finalResult}`)
    }

    const multiply = () => {
        setFinalResult(num1 * num2);
        console.log(`곱셈 결과  :  ${finalResult}`)
    }

    const divisioin = () => {
        setFinalResult(num1 / num2);
        console.log(`나눗셈 결과  :  ${finalResult}`)
    }

    const equal = () => {
        setResult(finalResult);
    }


    return(
        <div>
            <br />
            <label className = {"form-label"} >숫자 2개를 입력하고 연산 버튼을 눌러주세요</label><br />
            <input className={"text m-3"} id={"num1"} name={"num1"} onChange={(e)=>setNum1(e.target.value)}/>
            <input className={"text"} id = {"num2" } name={"num2"} onChange={(e)=>setNum2(e.target.value)}/><br />
            <button className={"btn btn-primary m-3"} onClick={plus} > + </button>
            <button className={"btn btn-success m-3"} onClick={minus}>  - </button>
            <button className={"btn btn-success m-3"} onClick={multiply}> * </button>
            <button className={"btn btn-success m-3"} onClick={divisioin}> / </button>
            <button className={"btn btn-success m-3"} onClick={equal}> = </button><br />
            <label className = {"form-label" }>결과값</label><br />
            <input className = {"text" } id={"result"} value = {result}></input>
        </div>
    )
}
export default Calculator;