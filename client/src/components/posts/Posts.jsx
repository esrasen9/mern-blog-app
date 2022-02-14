import React from 'react';
import "./Posts.css";
import Post from "../post/Post";
import uuid from 'react-uuid'
import {useStateValue} from "../../Context";
import CategoryDropdown from "../category-dropdown/CategoryDropdown";

const Posts = () => {
    const {posts} = useStateValue();
    return (
        <div className="posts-container">
            <h2 className="posts-title">Read Now</h2>
            <CategoryDropdown/>
            <div className="posts">
                {
                    posts.map((post) => (<Post key={uuid()} post={post}/>))
                }
            </div>
        </div>
    );
}

export default Posts;