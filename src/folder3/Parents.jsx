// Parents.jsx
// 부모 컴포넌트
import React from "react";
import Child from "./Child";

function Parents(props){
    return(
        <div>
            <h1>Parents 컴포넌트 영역</h1>
            <Child value={"부모 데이터"}/>
        </div>
    )
}

export default Parents;