//ThemedButton.jsx
// 컨텍스트

import React from "react";

const styles = {
    bg : {
        backgroundColor : "white"
    }
}

// 최종위치
function Button(props){
    // 부모에게서 전달받은 theme를 사용하고 있음
    if (props.theme === "dark"){
        styles.bg.backgroundColor = "black";
    }
    else {
        styles.bg.backgroundColor = "white";
    }

    return <button style={styles.bg}>테마 적용 버튼</button>
}

function ThemedButton(props) {
    // 자식 컴포넌트로 theme로 전달
    return <Button theme = {props.theme}/>
}

export default ThemedButton;