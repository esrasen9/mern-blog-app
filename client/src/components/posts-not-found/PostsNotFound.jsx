import React from 'react';
import postNotFoundImg from "../../img/undraw_wall_post_re_y78d.svg";
import "./PostsNotFound.css";

const PostsNotFound = () => {
    return (
        <div className="no-post-container">
            <img className="no-post-image" src={postNotFoundImg} alt=""/>
            <div className="no-post-content">
                <p className="no-post-message">
                    You haven't yet published any blog entries.Let's get started.
                </p>
                <button className="write-button">Write</button>
            </div>
        </div>
    );
}

export default PostsNotFound;