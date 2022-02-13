import React from 'react';
import Post from "../post/Post";
import "./MyPosts.css";
import {FaMicroblog} from "react-icons/fa";
const MyPostsContainer = ({posts}) => {
    return (
        <div className="my-posts-container">
            <h1 className="my-posts-title"> My Writings <FaMicroblog size={35}/></h1>
            <div className="my-posts">
                {
                    posts.map((post)=>(<Post post={post}/>))
                }
            </div>
        </div>
    );
}

export default MyPostsContainer;