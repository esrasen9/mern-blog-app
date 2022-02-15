import React from 'react';
import defaultImage from "../../img/defaultPost.jpeg"
import PostDetail from "./PostDetail";
import "./Post.css";

const Post = ({post}) => {
    const {postImage} = post;

    return (
        <div className="post">
            <img className="post-image" src={postImage || defaultImage} alt=""/>
            <PostDetail post={post}/>
        </div>
    );
}

export default Post;