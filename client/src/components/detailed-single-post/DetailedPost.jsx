import React from 'react';
import fakeImg from "../../img/pexels-photo-5052851.jpeg";
import "./DetailedPost.css";
import DetailedPostHeader from "./DetailedPostHeader";

const DetailedPost = () => {
    return (
        <div className="detailed-post">
            <img className="detailed-post-image" src={fakeImg} alt=""/>
            <DetailedPostHeader/>
            <span className="post-author">Author: Lorem</span>
            <p className="detailed-post-text">
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
                nostrum omnis quas quasi, quis, rat
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
                nostrum omnis quas quasi, quis, ratione
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
                nostrum omnis quas quasi, quis, rationeione sequi similique ullam veniam veritatis voluptas voluptatum.
            </p>
        </div>
    );
}

export default DetailedPost;