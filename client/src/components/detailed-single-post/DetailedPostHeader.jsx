import React from 'react';
import PostControlButtons from "./PostControlButtons";

const DetailedPostHeader = ({title}) => {
    return (
        <div className="detailed-post-header">
            <h1 className="detailed-post-title">{title}</h1>
            <PostControlButtons/>
        </div>
    );
}

export default DetailedPostHeader;