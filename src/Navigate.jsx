//Navigate.jsx

import React from "react";
import {Link, Outlet} from "react-router-dom";

function Navigate(){
    return(
        <div>
            <nav className={"navbar navbar-expand-sm bg-dark navbar-dark"}>
                <div className = {"container-fluid"}>
                    <ul className = {"navbar-nav" }>
                        <li className = {"nav-item" }>
                            <Link to={"/"} className = {"nav-link active" }>Main</Link>
                        </li>
                        <li className = {"nav-item" }>
                            <Link to={"/board"} className = {"nav-link active" }>Board</Link>
                        </li>
                        <li className = {"nav-item" }>
                            <Link to={"/about"} className = {"nav-link active" }>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </div>

    )
}

export default Navigate;