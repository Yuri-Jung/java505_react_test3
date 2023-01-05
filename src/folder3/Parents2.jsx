// Parents2.jsx
// 부모 컴포넌트
import React, {useState} from "react";
import Child2 from "./Child2";

function Parents2(props){
    // childData를 state로 설정
    const [childData, setChildData] = useState('');

    return(
        <div>
            <h1>Parents2 컴포넌트 영역</h1>
            {/*자식 컴포넌트 호출*/}
            {/*자식 컴포넌트 호출 시 value, childValue라는 키에 데이터를 저장해서 전달*/}
            {/* childValue 키에 setState() 함수를 저장해서 전달 */}
            <Child2 value={"부모 데이터2"} childValue ={setChildData}/>

            {/* 현재 state 중 childData 변수를 화면에 출력 */}
            <h3>Child2컴포넌트에서 전달받은 데이터 : {childData}</h3>
        </div>
    )
}

export default Parents2;