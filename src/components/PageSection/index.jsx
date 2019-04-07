import React from "react";
import "./style.css";

export const PageSection = (props) => {
    return (
        <div className="section">
            {props.children}
        </div>
    )
}