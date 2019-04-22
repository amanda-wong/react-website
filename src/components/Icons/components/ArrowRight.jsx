import React from "react";

export const ArrowRight = (props) => {
    return (
        <svg className="arrowRight" onClick={props.nextClick} width={props.size} height={props.size} viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            <path fill="none" d="M0 0h24v24H0V0z"/>
        </svg>
    )
}
