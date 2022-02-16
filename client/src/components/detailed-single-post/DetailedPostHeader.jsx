import React from 'react';
import PostControlButtons from "./PostControlButtons";
import {useStateValue} from "../../Context";

const DetailedPostHeader = ({post}) => {
    const {username,title,_id} = post;
    const {user} = useStateValue();
    return (
        <div className="detailed-post-header">
            <h1 className="detailed-post-title">{title}</h1>
            {user?.username === username && <PostControlButtons id={_id}/>}
        </div>
    );
}

export default DetailedPostHeader;