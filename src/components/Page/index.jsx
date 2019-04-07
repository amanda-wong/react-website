import React from "react";
import "./style.css";

export const Page = (props) => {
    return (
        <div className="page">
            {props.children}
        </div>
    );
}