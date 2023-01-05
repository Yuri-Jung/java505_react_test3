//RequestForm.jsx
// textarea 사용하기

import React, {useState} from "react";

function RequestForm(props) {
    const [value, setValue] = useState("요청 사항을 입력하세요")

    //이거 넣어준거밖에 없음
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 요청사항 : ' + value);
        event.preventDefault(); //화면 재랜더링하는 것을 막아준다.
    }

    return(
        <form onSubmit={handleSubmit} className={"container"}>
            <div className={"my-3"}>
                {/*!!!!!!반드시!! onChange를 넣어줘야합니다!!! 이거 없으면 수정이 안됩니다!! 기존값만 계속 나타날거다.!!!!!*/}
                <label for={"user-contents"} className={"form-label"}>요청사항 : < / label >
                <textarea value={value} className={'form-control'} onChange={handleChange}/>
            </div>
            <div className={"my-3"}>
                <button type={"submit"} className = {"btn btn-primary"}>제출</button>
            </div>
        </form>
    )
}
export default RequestForm;