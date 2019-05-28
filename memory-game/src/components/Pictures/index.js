import React from "react";
import "./style.css";

function Picture(props) {
    return (
        <div className="card" onClick={() => props.select(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
}

export default Picture