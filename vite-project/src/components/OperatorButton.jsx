import React from 'react';

function OperatorButton(props) {
    return (
        <button className="operator-button" onClick={() => props.onClick(props.value)}>
            {props.value}
        </button>
    );
}

export default OperatorButton;