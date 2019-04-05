import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header/index.jsx";
import "./style.css";

class App extends Component {
    render () {
        return (
            <div id="app">
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </div>
        );
    }

}

export default App;