import React from "react";
import "./style.css";

function Score(props) {
    return (
        <div className="col-md-6">
            <div className="row">
                <h2 className="col-md-6 score">
                    Score = {props.score}
                </h2>
                <h2 className="col-md-6 score">
                    High Score = {props.high}
                </h2>
            </div>
        </div>
    )
}

export default Score;