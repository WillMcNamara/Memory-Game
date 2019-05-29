import React from "react";
import "./style.css";

function Main(props) {
    return (
        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}

export default Main;