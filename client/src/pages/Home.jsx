import React, {Component} from 'react';
import Banner from "../components/banner/Banner";
import Posts from "../components/posts/Posts";

class Home extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Posts/>
            </div>
        );
    }
}

export default Home;