import React from "react";
import MenuItem from "../MenuItem/index.jsx";
import "./style.css";

const Menu = () => {
    return (
        <div className="menu">
            <MenuItem page="/" pageName="Home" />
            <MenuItem page="/about" pageName="About" />
            <MenuItem page="/blog" pageName="Blog" />
            <MenuItem page="/contact" pageName="Contact" />
        </div>
    );
}

// TODO: Identify menu items

export default Menu;