import React from 'react';
import postNotFoundImg from "../../img/undraw_wall_post_re_y78d.svg";
import "./PostsNotFound.css";
import {useNavigate} from "react-router-dom";

const PostsNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="no-post-container">
            <img className="no-post-image" src={postNotFoundImg} alt=""/>
            <div className="no-post-content">
                <p className="no-post-message">
                    You haven't yet published any blog entries.Let's get started.
                </p>
                <button onClick={() => navigate("/write")} className="write-button">Write</button>
            </div>
        </div>
    );
}

export default PostsNotFound;