import React, { Component } from "react";
import { Location, Close } from "../../../Icons";

export class Modal extends Component {
    constructor(props){
        super(props);
    }

    formatDate(date) {
        const dateCreated = new Date(parseInt(date) * 1000); // Instagram api stores in sec not ms
        const months = [
            'Jan', 'Feb', 'Mar',
            'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec'
        ];
        const monthCreated = months[dateCreated.getMonth()];
        const dayCreated = dateCreated.getDate();
        const yearCreated = dateCreated.getFullYear();
        return <span>{`${monthCreated} ${dayCreated}, ${yearCreated}`}</span>;
    }

    getMedia(post) {
        const isMobile = window.innerWidth < 480;

        if (post.videos) {
            const videoUrl = isMobile 
                ?  post.videos.low_resolution.url 
                : post.videos.standard_resolution.url;

            return <video src={videoUrl} loop={true} autoPlay />
        } 

        const imgUrl = isMobile 
            ? post.images.low_resolution.url 
            : post.images.standard_resolution.url;

        return <img src={imgUrl} />
    }

    render() {
        const post = this.props.currentPost;
        const datePosted = post.created_time;
        const caption = post.caption && post.caption.text; 
        const location = post.location
            ? <div className="location">
                <Location size="18" colour="#656565" />
                {post.location.name}
            </div>
            : null;

        const likesCount = post.likes
            ? <div className="likesCount">
                {post.likes.count === 1 ? `${post.likes.count} like` : `${post.likes.count} likes`}</div>
            : null;

        return (
            <div className="modal" onClick={() => this.props.modalClose()}>
                <div className="postContainer" onClick={(e) => e.stopPropagation()}>
                    <Close size={20} colour="#fff" click={() => this.props.modalClose()}/>
                    {location}
                    <div className="mediaWrap">
                        {this.getMedia(post)}
                    </div>
                    <div className="postDetails">
                        <p className="caption">{caption}</p>
                        <div className="postMeta">
                            {likesCount}
                            {this.formatDate(datePosted)}
                        </div>
                    </div>
                </div>
            </div >
        );
    }
};
