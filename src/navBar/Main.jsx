import React from "react";
import Info from "../Info";
import LinkList from "../LinkList";
import Contents from "../Contents";

function Main(){
    return(
        <div>
            <div className = {"container mt-5" }>
                <div className={"row"}>
                    <div className={"col-sm-4"}>
                        <Info/>
                        <LinkList/>
                        <hr className={"d-sm-none"}/>
                    </div>
                    <div className = {"col-sm-8" }>
                        <Contents/>
                        <Contents/>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Main;


