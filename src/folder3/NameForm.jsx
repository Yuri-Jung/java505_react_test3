//NameForm.jsx
// 텍스트 박스를 이용한 이벤트

import React, {useState} from "react";

function NameForm(props){
    //변수 value를 state로 설정, 기본값은 빈 문자열.

    const [value, setValue] = useState(''); //기본값을 비웠다

    
    // event 발생 시 동작하는 함수
    // 매개변수로 자바스크립트의 event 객체를 가져온다.
    // 실제 이벤트가 발생한 태그의 정보가 담겨져 있다.(input 태그)
    
    const handleChange = (event) => {
        //state로 설정된 변수 value의 값을 변경하는 setValue() 함수 실행
        // 여기서 event는 자바스크립트 이벤트 객체다.
        // target => 이벤트를 발생시킨 대상 찾아온다
        // 객체를 통해서 이벤트가 발생한 대상에 대한 정보를 가져옴
        
        //이름을 치면 값이 변경되니까 이벤트가 발생해서 여기로 온다.
        // value : 이벤트가 발생하면서 생긴 값을 가져와라
        
        // 이벤트 발생 대상이 가지고 있는 value 값을 사용하여 state를 변경

        setValue(event.target.value);
    }
    
    // submit 버튼에 이벤트가 발생되면 실행하라
    const handleSubmit = (event) => {
        alert("입력한 이름 : " + value);
        event.preventDefault();
    }


    return(
        <form onSubmit={handleSubmit} className={"container"} action={"#"}>
            <div className={"my-3"}>
                <label for = {"user-name"} className={"form-label"}>이름 : </label>
                {/*input 태그 부분이 중요함*/}
                {/* input 태그의 value를 state로 설정된 변수를 사용하여 화면에 데이터를 출력 */}
                {/* 사용자 입력에 의해서 값이 변경될 경우 event를 발생한다 (onChange)*/}
                <input type={"text"} className = {"form-control"} value={value} onChange={handleChange}/>
            </div>
            <div className = {"my-3"}>
                <button type={'submit'} className={"btn btn-primary"}>제출</button>
            </div>
        </form>
    );
}
export default NameForm;