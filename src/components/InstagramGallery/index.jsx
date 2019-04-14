import React, { Component } from "react";
import { Location } from "../Icons";
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

    handlePostClick(i) {
        this.setState({ postIndex: i });
    }

    formatDate(date) {
        const dateCreated = new Date(parseInt(date) * 1000); // Instagram api stores in sec not ms
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const monthCreated = months[dateCreated.getMonth()];
        const dayCreated = dateCreated.getDate();
        const yearCreated = dateCreated.getFullYear();
        return `${monthCreated} ${dayCreated}, ${yearCreated}`;
    }

    buildModal(i) {
        const post = this.state.posts[i];

        const imageUrl = window.innerWidth < 480
            ? post.images.low_resolution.url
            : post.images.standard_resolution.url;

        const caption = post.caption.text;
        const location = post.location
            ? <div className="location">
                <Location size="20" colour="#656565" />
                {post.location.name}
            </div>
            : null;

        const likesCount = post.likes
            ? <div className="likesCount">
                {post.likes.count === 1 ? `${post.likes.count} like` : `${post.likes.count} likes`}</div>
            : null;

        const datePosted = post.created_time;

        return (
            <div className="modal">
                <div className="postContainer">
                    <div className="imageWrap">
                        <img src={imageUrl} />
                    </div>
                    <div className="postDetails">
                        {location}
                        <p className="caption">{caption}</p>
                        <div className="postMeta">
                            {likesCount}
                            <span>{this.formatDate(datePosted)}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        console.log("STATE: ", this.state)
        const instagramGallery = this.state.posts ? this.buildGallery() : null;
        const { postIndex } = this.state;
        const modal = postIndex ? this.buildModal(postIndex) : null;

        return (
            <>
                {instagramGallery}
                {modal}
            </>
        );
    }
}