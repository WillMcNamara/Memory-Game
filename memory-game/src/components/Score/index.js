import React from "react";
import "./style.css";

function Score(props) {
    return (
        <div>
            <div className="col-md-3 score">
                Score = {props.score}
            </div>
            <div className="col-md-3 score">
                High Score = {props.high}
            </div>
        </div>
    )
}

export default Score;