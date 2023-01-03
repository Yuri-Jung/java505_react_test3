// ThirdPhoto.js

import React from "react";
const styles = {
    img : {
        display:" block",
        float: "right",
        marginTop :100,
        marginRight : 300,
        // marginLeft : 300,
    }
}
function ThirdPhoto(){
    return (
        <div>
            <img src = "/image/3.png" style={styles.img}/>
        </div>
    )
}
export default ThirdPhoto;