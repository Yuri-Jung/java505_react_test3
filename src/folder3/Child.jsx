// Child.jsx
// 자식 컴포넌트 Parents.jsx의 자식이다.

import React from "react";

function Child(props){
    return(
        <div>
            <h3>Child 컴포넌트 영역</h3>
            
            <p>전달받은 값 : {props.value}</p>
        </div>
    )
}

export default Child;