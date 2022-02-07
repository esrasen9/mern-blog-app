import React from 'react';
import "./NewPost.css";
import NewPostForm from "./NewPostForm";
import fakeImg from "../../img/pexels-photo-547125.jpeg";
const NewPost = () => {
    return (
        <div className="new-post-container">
            <h1>Add a New Post!</h1>
            <img className="new-post-image" src={fakeImg} alt=""/>
            <NewPostForm/>
        </div>
    );
}

export default NewPost;