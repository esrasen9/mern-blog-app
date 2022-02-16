import React from 'react';
import "./NewPost.css";
import NewPostForm from "./NewPostForm";

const NewPost = () => {
    return (
        <div className="new-post-container">
            <h1>Add a New Post!</h1>
            <NewPostForm/>
        </div>
    );
}

export default NewPost;