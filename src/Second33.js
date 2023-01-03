// Second33.js

import React from "react";

const styles = {
    img : {
        display:" block",
        float: "left",
        marginRight : 100,
        marginLeft : 100,

    }
}

function Second33(){
    return(
        <div className = "mt-5 p-5">
            <img src = "/image/bread.png" style={styles.img}/>
        </div>
    )
}
export default Second33;