import React, { Component } from "react";
import "./style.css";

export class InstagramGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const token = '36678597.c769071.94c9b79038254991a8af374f77cd33f1';
        fetch(`https://api.instagram.com/v1/users/self/media/recent?access_token=${token}`, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            referrer: "no-referrer"
        })
            .then(response => response.json())
            .then(data => this.handleApiRequest(data.data));
    }

    handleApiRequest(data) {    // only includes square posts
        const posts = data.filter((post) => {
            const image = post.images.low_resolution;
            if (image.height === image.width) {
                return post;
            }
        });

        this.setState({ posts });
    }

    buildBlocks() {
        const { posts } = this.state;

        if (!posts) {
            return;
        };

        return (
            <div className="instagramGallery">
                {posts.map((post, i) =>
                    <li className="post" key={i}>
                        <div className="imageWrap">
                            <img src={`${post.images.low_resolution.url}`} />
                        </div>
                    </li>)}
            </div>
        );
    }

    render() {
        console.log(this.state.posts)
        const instagramGallery = this.state.posts
            ? this.buildBlocks()
            : null;

        return instagramGallery;
    }
}