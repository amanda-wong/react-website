import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomePage from "../../pages/HomePage/index.jsx";
import AboutPage from "../../pages/AboutPage/index.jsx";
import ContactPage from "../../pages/ContactPage/index.jsx";
import "./style.css";

class App extends Component {
    render () {
        return (
            <div id="app">
                <Router>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about" exact component={AboutPage} />
                    <Route path="/contact" exact component={ContactPage} />
                </Router>
            </div>
        );
    }

}

export default App;