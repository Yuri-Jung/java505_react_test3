// ThirdFont.js
import React from "react";
const styles = {
    font : {
        display:" block",
        float: "left",

        marginRight : 100,
        marginLeft : 500,
        marginTop:200,
        lineHeight:"60px",

        },
        big : {
        fontSize: 200,
        }
    }


function ThirdFont(){
    return (
        <div style={styles.font}>
            <h2>Our Menu</h2>
            <div class = "big">Bread Basket</div>
            <p className={"fs-5"}>
                Assortment of fresh baked fruit breads and muffins 5.50
            </p>
            <div class = "big">Belgian Waffle</div>
            <div class = "small">Vanilla flavored batter with malted flour 7.50</div>
            <div class = "big">Scrambled eggs</div>
            <div class = "small">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</div>

            <div class = "big">Blueberry Pancakes</div>
            <div class = "small">With syrup, butter and lots of berries 8.50</div>
        </div>
    )
}
export default ThirdFont;