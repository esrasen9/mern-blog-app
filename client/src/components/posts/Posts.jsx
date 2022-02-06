import React from 'react';
import "./Posts.css";
import Post from "./Post";

const Posts = () => {
    return (
        <div className="posts-container">
            <h2 className="posts-title">Read Now</h2>
            <div className="posts">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default Posts;