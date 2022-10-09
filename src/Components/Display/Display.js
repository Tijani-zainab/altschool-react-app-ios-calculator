import React from "react";
import "./Display.css";

const Display = (props) => {
    return (
        <div className="display">
            <div className="display__input">{props.input}</div>
        </div>
    );
};

export default Display;