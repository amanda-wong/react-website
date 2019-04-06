import React from "react";
import MenuItem from "../MenuItem/index.jsx";
import "./style.css";

const Menu = () => {
    return (
        <div className="menu">
            <MenuItem page="/about" pageName="about" /> 
            <MenuItem page="/blog" pageName="blog" />
            <MenuItem page="/contact" pageName="contact" />
        </div>
    );
}

/* 
About - Experience (links to Work), technologies,  / Personal
Work - Snippets of work I've done, Problem, Solution, Technologies used
Contact - Form
*/

export default Menu;