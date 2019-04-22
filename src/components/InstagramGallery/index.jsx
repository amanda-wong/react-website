import React, { Component } from "react";
import { Modal } from "./components/Modal/index.jsx";
import "./style.css";

export class InstagramGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {};
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

        // if (window) {
        //     window.addEventListener("", this.handleResize.bind(this));
        // }
    }

    handleApiRequest(data) {    // only includes square posts
        let posts = data.filter((post) => {
            const image = post.images.low_resolution;
            if (image.height === image.width) {
                return post;
            }
        }).slice(0, 12);

        this.setState({ posts });
    }

    buildGallery() {
        const { posts } = this.state;

        if (!posts) {
            return;
        };

        return (
            <div className="instagramGallery">
                {posts.map((post, i) =>
                    <li className="post" key={i} onClick={() => this.handlePostClick(i)}>
                        <img src={`${post.images.low_resolution.url}`} />
                    </li>)}
            </div>
        );
    }

    closeModal() {
        this.setState({ postIndex: undefined });
    }

    getPrevPost(index) {
        const prevIndex = index - 1;
        this.setState({ postIndex: prevIndex});
    }

    getNextPost(index) {
        const nextIndex = index + 1;
        this.setState({ postIndex: nextIndex});
    }

    handlePostClick(i) {
        this.setState({ postIndex: i });
    }

    render() {
        console.log(this.state);
        
        const instagramGallery = this.state.posts ? this.buildGallery() : null;
        const { postIndex, posts } = this.state;
        const isValidNumber = postIndex > -1;
        const currentPost = posts && isValidNumber ? posts[postIndex] : null;
        const modal = isValidNumber
            ? <Modal 
                currentIndex={postIndex}
                currentPost={currentPost}
                modalClose={() => this.closeModal()} 
                prevPost={() => this.getPrevPost(postIndex)} 
                nextPost={() => this.getNextPost(postIndex)} />
            : null;
            
        return (
            <>
                {instagramGallery}
                {modal}
            </>
        );
    }
}