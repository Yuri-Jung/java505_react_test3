// SecondFont.js

import React from "react";

const styles = {
    font :{
        display:" block",
        float: "right",
        lineHeight:"50px",
        // color : "red"
        // height: 800,
        // lineHeight: 800


    }
}




function SecondFont(){
    return(
        <div className={"container text:center"}>
            <div className={styles.img}>

            <h2 >About Catering</h2><br/>
            <p >Tradition since 1889</p>
            <p >The Catering was founded in blabla by
                Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</p>
            <br/>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    )
}
export default SecondFont;