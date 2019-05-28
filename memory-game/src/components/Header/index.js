import React from "react";
// import "./style.css";

function Header(props) {
    return (
        <div className="row bg-primary text-center">
            <h1 className="col-md-6">Memory Game!</h1>
            {props.children}
        </div>
    )
}

export default Header;