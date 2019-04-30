import React from "react";
import "./style.css";

export const PageSection = (props) => {
    const styles = props.styles ? props.styles : null;
        
    return (
        <div className="page-section" style={styles}> 
            {props.children}
        </div>
    );
}