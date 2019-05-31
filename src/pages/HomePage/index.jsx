import React, { Component } from "react";
import { PageSection, InstagramGallery } from "../../components";
import "./style.css";

class HomePage extends Component {
    
    render() {
        const backgroundImage = { 
            backgroundImage: "url('../../../assets/images/lake_hero.jpg')",
            filter: "grayscale(100%)"
        };

        return (
            <PageSection styles={backgroundImage}>
                <h1 className="intro">Hi, I'm Amanda and I'm a front-end developer in Nelson B.C.</h1>
            </PageSection>
        );
    }
}

export default HomePage;