//MainPhoto.js

import React from "react";

const styles={
    img : {
        margin: "auto",
        display: "block",
        position: "relative",
    },

    text :{
        position: "absolute",
        fontSize : "50px",
        textAlign : "left",
        top: "75%",
        right: "75%",
        // transform: "translate( -150%, -100% )",
        color: "black",
        fontWeight : 100
    }
};


function MainPhoto(){
    return (
        <div>
            <img src = "/image/hamburger.jpg" style={styles.img}/>
            <span style = {styles.text}>Le Catering</span>
        </div>
    )
}

export default MainPhoto;