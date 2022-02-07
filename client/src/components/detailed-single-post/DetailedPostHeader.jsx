import React from 'react';
import PostControlButtons from "./PostControlButtons";

const DetailedPostHeader = () => {
    return (
        <div className="detailed-post-header">
            <h1 className="detailed-post-title">My Post</h1>
            <PostControlButtons/>
        </div>
    );
}

export default DetailedPostHeader;