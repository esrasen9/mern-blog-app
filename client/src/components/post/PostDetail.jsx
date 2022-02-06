import React from 'react';

const PostDetail = () => {
    return (
        <div className="post-details">
            <div className="post-header">
                <h1 className="post-title">New Post</h1>
                <div className="post-category-info">
                    <span className="post-category">Life</span>
                    |
                    <span className="post-category"> Tech</span>
                </div>
            </div>
            <p className="post-text">
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Aliquam atque debitis dolore ipsa l
                ibero maxime nihil quam qui quis rem!
                Aperiam doloribus labore sapiente.
                Animi blanditiis cum debitis doloribus
                ducimus earum eligendi harum natus praesentium
                quos, recusandae rem reprehenderit saepe unde
                vitae! Corporis deserunt eaque exercitatione
                m mollitia numquam rerum similique sunt ullam. Dolor, suscipit voluptatum. Doloremque esse eveniet,
                excepturi ipsum, libero magni maiores optio rem sit tempore ut voluptatem? Delectus dolorum ex explicabo
                id nam nihil, ratione sit voluptatem. Ab accusantium beatae commodi itaque laudantium maxime neque
                nostrum omnis quas quasi, quis, ratione sequi similique ullam veniam veritatis voluptas voluptatum.
            </p>
            <hr/>
            <span className="post-date">1 hour ago</span>
        </div>
    );
}

export default PostDetail;