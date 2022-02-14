import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useStateValue} from "../Context";
import PostsEmpty from "../components/posts-empty/PostsEmpty";
import MyPostsContainer from "../components/my-posts/MyPostsContainer";
import {useNavigate} from "react-router-dom";

const MyPosts = () => {
    const {user} = useStateValue();
    const navigate = useNavigate();
    const [myPosts, setMyPosts] = useState([]);
    useEffect(() => {
        const getPosts = () => {
            axios.get(`/posts?username=${user.username}`)
                .then((res) => setMyPosts(res.data))
                .catch((err) => console.error(err));
        }
        return user ? getPosts() : navigate("/");
    },[myPosts, navigate, user]);
    return (
        <div>
            {
                myPosts.length > 0 ? <MyPostsContainer posts={myPosts}/> : <PostsEmpty/>
            }
        </div>
    );
}

export default MyPosts;