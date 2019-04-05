import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const MenuItem = (props) => {
    return (
        <Link className="menu-item" to={props.page}>
            {props.pageName}
        </Link>
    );
}

export default MenuItem;