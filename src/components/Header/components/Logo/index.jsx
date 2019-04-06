import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Logo = () => {
    const logoText = "{ a | w }";
    
    return (
        <Link className="logo" to="/">{logoText}</Link>
    );
}

export default Logo;