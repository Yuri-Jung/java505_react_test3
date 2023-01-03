//LinkList.jsx

import React from "react";
function LinkList(){
    return(
        // <ul className = {"nav nav=pills flex-column" }>
        <ul className="nav nav-pills flex-column">
            <li className = {"nav-item" }>
                <a className = {"nav-link active" } href = {"#"}>Active</a>
            </li>
            <li className={"nav-item"}>
                <a className = {"nav-link" } href = {"#"}>Link</a>
            </li>
            <li className={"nav-item"}>
                <a className = {"nav-link" } href = {"#"}>Link</a>
            </li>
            <li className={"nav-item"}>
                <a className = {"nav-link" } href = {"#"}>Disabled</a>
            </li>
        </ul>
    )
}
export default LinkList;