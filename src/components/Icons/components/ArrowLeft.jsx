import React from "react";

export const ArrowLeft = (props) => {
    return (
        <svg className="arrowLeft" onClick={props.prevClick} width={props.size} height={props.size} viewBox="0 0 24 24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
            <path fill="none" d="M0 0h24v24H0V0z"/>
        </svg>
    )
}
