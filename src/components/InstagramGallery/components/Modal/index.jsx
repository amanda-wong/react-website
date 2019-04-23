import React, { Component } from "react";
import { Location, Close, ArrowLeft, ArrowRight } from "../../../Icons";
import { checkIfSmallScreen } from "../../../../util";

export class Modal extends Component {
    constructor(props) {
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

    getPost() {
        const { currentPost } = this.props;
        const datePosted = currentPost.created_time;
        const caption = currentPost.caption &&
            <p className="caption">{currentPost.caption.text}</p>;

        const location = currentPost.location
            ? <div className="location">
                <Location size="18" colour="#656565" />
                {currentPost.location.name}
            </div>
            : null;

        const likesCount = currentPost.likes
            ? <div className="likesCount">
                {currentPost.likes.count === 1
                    ? `${currentPost.likes.count} like`
                    : `${currentPost.likes.count} likes`}
            </div>
            : null;

        return (
            <div className="postContainer" onClick={(e) => e.stopPropagation()}>
                {this.getControls()}
                {location}
                {this.getMedia(currentPost)}
                <div className="postDetails">
                    {caption}
                    <div className="postMeta">
                        {likesCount}
                        {this.formatDate(datePosted)}
                    </div>
                </div>
            </div>
        )
    }

    getControls() {
        const { currentIndex } = this.props;
        const arrowLeft = currentIndex - 1 !== -1
            ? <ArrowLeft size={32} prevClick={this.props.prevPost} />
            : null;

        const arrowRight = currentIndex + 1 !== 12
            ? <ArrowRight size={32} nextClick={this.props.nextPost} />
            : null;

        if (!checkIfSmallScreen()) {
            return (
                <>
                    {arrowLeft}
                    {arrowRight}
                    <Close size={24} colour="#fff" click={this.props.modalClose} />
                </>
            )
        }
    }

    getMedia(post) {
        let media = null;

        if (post.videos) {
            const videoUrl = checkIfSmallScreen()
                ? post.videos.low_resolution.url
                : post.videos.standard_resolution.url;

            media = <video src={videoUrl} loop={true} autoPlay muted />

        } else {
            const imageUrl = post.images && post.images.standard_resolution.url;
            media = <img src={imageUrl} />
        }

        return (
            <div className="mediaWrap">
                {media}
            </div>
        )
    }

    render() {
        return (
            <div className="modal" onClick={this.props.modalClose}>
                {this.getPost()}
            </div>
        );
    }
};
