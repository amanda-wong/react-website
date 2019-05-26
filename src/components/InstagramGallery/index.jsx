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
        fetch(`https://api.instagram.com/v1/users/self/media/recent?access_token=${token}`)
            .then(response => response.json())
            .then(data => this.handleApiRequest(data.data));

        if (window) {
            window.addEventListener("keydown", (e) => this.handleKeyPress(e));
        }
    }

    handleKeyPress(e) {
        const noCurrentImage = this.props.postIndex == undefined;
        const currentImageIndex = this.state.postIndex;
        
        if(e.keyCode === 39 && noCurrentImage) {
            this.getNextPost(currentImageIndex) 
        }
        
        if(e.keyCode === 37 && noCurrentImage) {
            this.getPrevPost(currentImageIndex) 
        }
        
        if (e.keyCode === 27 && noCurrentImage) {
            this.closeModal();
        }
    }

    handleApiRequest(data) {    // filter to include square posts
        let posts = data.filter(post => {
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
                    <li className="post" key={i} onClick={ () => this.handlePostClick(i) }>
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

    createModal() {
        const { postIndex, posts } = this.state;
        const hasPosts = postIndex > -1;
        const currentPost = posts && hasPosts 
            ? posts[postIndex] 
            : null;

        return hasPosts
            ? <Modal 
                currentIndex={postIndex}
                currentPost={currentPost}
                modalClose={() => this.closeModal()} 
                prevPost={() => this.getPrevPost(postIndex)} 
                nextPost={() => this.getNextPost(postIndex)} />
            : null;
    }

    render() {
        console.log("<======== this.state =======>", this.state);
        
        return (
            <>
                {this.state.posts && this.buildGallery()}
                {this.createModal()}
            </>
        );
    }
}