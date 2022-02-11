import React, {useEffect} from 'react';
import Banner from "../components/banner/Banner";
import Posts from "../components/posts/Posts";
import {useStateValue} from "../Context";
import axios from "axios";

const Home = () =>  {
    const {posts, setPosts} = useStateValue();

    useEffect(()=> {
        axios.get("/posts")
            .then((posts) => setPosts([...posts.data]))
            .catch((err) => console.error(err));
    },[]);

    return (
        <div>
            <Banner/>
            <Posts/>
        </div>
    );
}

export default Home;