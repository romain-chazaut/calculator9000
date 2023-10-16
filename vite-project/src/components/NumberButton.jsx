import React from 'react';

function NumberButton(props) {
    return (
        <button className="number-button" onClick={() => props.onClick(props.value)}>
            {props.value}
        </button>
    );
}

export default NumberButton;