import React, {useEffect, useState} from 'react';
import "./DetailedPost.css";
import DetailedPostHeader from "./DetailedPostHeader";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const DetailedPost = () => {
    const [post, setPost] = useState({});
    const {id} = useParams();
    const {description, postImage, title, username, createdAt} = post;
    useEffect(() => {
        axios.get(`/posts/${id}`)
            .then((response) => setPost(response.data));
    }, []);
    return (
        <div className="detailed-post">
            {postImage && <img className="detailed-post-image" src={postImage} alt=""/>}
            <DetailedPostHeader username={username} title={title}/>
            <div className="post-sub-title">
                <Link className="user-posts-link" to={`/?username=${username}`}>
                    <span className="post-author">Author: {username}</span>
                </Link>
                <span className="post-date">{new Date(createdAt).toDateString()}</span>
            </div>
            <p className="detailed-post-text">{description}</p>
        </div>
    );
}

export default DetailedPost;