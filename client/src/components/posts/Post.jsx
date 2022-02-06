import React from 'react';
import fakeImg from "../../img/pexels-photo-5052851.jpeg"
import PostDetail from "./PostDetail";

const Post = () => {
    return (
        <div className="post">
            <img className="post-image" src={fakeImg} alt=""/>
            <PostDetail/>
        </div>
    );
}

export default Post;