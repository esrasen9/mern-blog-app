import React from 'react';
import {MdAddPhotoAlternate, MdPublish} from "react-icons/md";

const NewPostForm = () => {
    return (
        <form className="new-post-form">
            <div className="new-post-inputs">
                <input type="text" placeholder="Enter title here" className="new-post-title"/>
                <label htmlFor="file-input">
                    <MdAddPhotoAlternate className="add-photo-icon" size={60}/>
                </label>
                <input type="file" id="file-input" className="file-input"/>
            </div>
            <p className="new-post-text">
                <textarea className="new-post-textarea" placeholder="Write something here..."/>
            </p>
            <button className="publish-button">
                Publish <MdPublish size={35}/>
            </button>
        </form>
    );
}

export default NewPostForm;