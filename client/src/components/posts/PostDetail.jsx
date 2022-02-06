import React from 'react';

const PostDetail = () => {
    const truncateString = (str, num) => {
        if (num > str.length) {
            return str;
        }
        return `${str.substring(0, num)}...`;
    };
    const content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, cumque!"

    return (
        <div className="post-details">
            <h1 className="post-title">New Post</h1>
            <div className="post-category-info">
                <span className="post-category">Life</span>
                <span className="post-category">Tech</span>
            </div>
            <p className="post-content">
                {truncateString(content, 260)}
            </p>
            <hr/>
            <span className="post-date">1 hour ago</span>
        </div>
    );
}

export default PostDetail;