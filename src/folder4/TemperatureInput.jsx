//TemperatureInput.jsx

import React,{useState} from "react";

const scalesNames = {
    c: "섭씨",
    f: "화씨",
}

function TemperatureInput(props){
    
    // input 태그의 값이 변경 이벤트 발생 시 동작할 함수, event 객체를 매개변수로 가져온다
    const handleChange = (event) => {
        
        // 부모 컴포넌트에서 전달받은 props 중 이름이 onTemperatureChange인 함수를 실행한다
        // onTemperatureChange함수는 부모 컴포넌트의 state 값을 수정하는 함수
        // 자식 컴포넌트의 값이 부모 컴포넌트로 전달이 된다
        props.onTemperatureChange(event.target.value);
    };


    return(
        <fieldset>
            <legend>
                {/*온도*/}
                온도를 입력해주세요 (단위 : {scalesNames[props.scale]})
            </legend>
            {/*단위*/}
            {/* onChange는 input 태그의 값 변경 시 발생하는 이벤트 중 하나.
            해당 이벤트에 handleChange라는 함수를 연동시켰다. */}
            <input value={props.temperature} onChange={handleChange}/>
        </fieldset>
    );
}

export default TemperatureInput;














