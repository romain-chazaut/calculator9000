import React from "react";

function EqualButton(props) {
    return (
        <button className="equal-button" onClick={props.onClick}>
            =
        </button>
    );
}

export default EqualButton;
