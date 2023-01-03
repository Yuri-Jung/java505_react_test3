// Info.jsx

import React from "react";

const styles={
    fakeImg : {
        height :200,
        backgroundColor : "#aaa",
    },
};

function Info(){
    return(
        <div>
            <h2>About me</h2>
            <h5>Photo of me:</h5>
            <div style={styles.fakeImg}>Fake Image</div>
            {/*위 처럼하면 style값 가져올 수 있다*/}
            <p>아무노래나 틀터</p>
        </div>

    )
}
export default Info;