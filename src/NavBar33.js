//NavBar33.js

import React from "react";

function NavBar33(){
    return(
        <div>

            <nav className="navbar navbar-expand-md navbar-white bg-white fixed-top" id="nav-scroll">
                <div className="container">
                    <a href="#" className="navbar-brand">Gomet au Catering</a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navBar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navBar">
                        <ul className="navbar-nav  ">
                            <li className="nav-item">
                                <a href="#home" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                    <a href="#about" className="nav-link">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar33;