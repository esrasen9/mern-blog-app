import React, {useEffect, useState} from 'react';
import "./DetailedPost.css";
import DetailedPostHeader from "./DetailedPostHeader";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const DetailedPost = () => {
    const [post, setPost] = useState({});
    const {id} = useParams();
    const {description, postImage, username, createdAt} = post;
    const imgSrc = `http://localhost:5001/${postImage}`

    useEffect(() => {
        axios.get(`/posts/${id}`)
            .then((response) => setPost(response.data));
    }, []);
    return (
        <div className="detailed-post">
            {postImage && <img className="detailed-post-image" src={imgSrc} alt=""/>}
            <DetailedPostHeader post={post}/>
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