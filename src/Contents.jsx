// Contents.jsx

import React from "react";

const styles={
    fakeImg : {
        height :200,
        backgroundColor : "#aaa",
    },
};

function Contents(){
    return(
        <div>
            <div className = {"col-sm-8" }>
                <h2>제목</h2>
                <h5>부제목, 2023-01-03</h5>
                <div style = {styles.fakeImg}></div>
                <p>아무글자</p>
                <p>내용 아무거나</p>
            </div>
        </div>
    );

}

export default Contents;