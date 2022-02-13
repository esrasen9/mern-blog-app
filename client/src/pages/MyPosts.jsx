import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useStateValue} from "../Context";
import PostsNotFound from "../components/posts-not-found/PostsNotFound";
import MyPostsContainer from "../components/my-posts/MyPostsContainer";

const MyPosts = () => {
    const {user} = useStateValue();
    const [myPosts, setMyPosts] = useState([]);
    useEffect(() => {
        if(user){
            axios.get(`/posts?username=${user.username}`)
                .then((res) => setMyPosts(res.data));
        }
    },[myPosts]);
    return (
        <div>
            {
                myPosts.length > 0 ? <MyPostsContainer posts={myPosts}/> : <PostsNotFound/>
            }
        </div>
    );
}

export default MyPosts;