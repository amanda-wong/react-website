import React from "react";
import Menu from "./components/Menu/index.jsx";
import Logo from "./components/Logo/index.jsx";
import "./style.css";

export const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Menu />
        </div>
    );
}