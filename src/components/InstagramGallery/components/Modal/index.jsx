import React, { Component } from "react";
import { Location, Close, ArrowLeft, ArrowRight } from "../../../Icons";
import { checkIfMobile } from "../../../../util";

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
        if (post.videos) {
            const videoUrl = checkIfMobile() 
                ?  post.videos.low_resolution.url 
                : post.videos.standard_resolution.url;

            return <video src={videoUrl} loop={true} autoPlay />
        } 

        const imgUrl = checkIfMobile() 
            ? post.images.low_resolution.url 
            : post.images.standard_resolution.url;

        return <img src={imgUrl} />
    }

    render() {
        const { currentPost, currentIndex } = this.props;
            ? <div className="location">
                <Location size="18" colour="#656565" />
                {post.location.name}
            </div>
            : null;

        const likesCount = post.likes
            ? <div className="likesCount">
                {post.likes.count === 1 ? `${post.likes.count} like` : `${post.likes.count} likes`}</div>
            : null;

        const arrowLeft = currentIndex - 1 !== -1 ? <ArrowLeft size={32} prevClick={this.props.prevPost} /> : null;
        const arrowRight = currentIndex + 1 !== 12 ? <ArrowRight size={32} nextClick={this.props.nextPost} /> : null;

        return (
            <div className="modal" onClick={() => this.props.modalClose()}>
                <div className="postContainer" onClick={(e) => e.stopPropagation()}>
                    {!checkIfMobile() ?
                        <>
                            {arrowLeft}
                            {arrowRight}
                            <Close size={24} colour="#fff" click={this.props.modalClose} />
                        </>
                        : null
                    }
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
