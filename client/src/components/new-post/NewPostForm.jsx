import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {MdAddPhotoAlternate, MdPublish} from "react-icons/md";
import axios from "axios";
import {useStateValue} from "../../Context";
import FileBase64 from 'react-file-base64';

const NewPostForm = () => {
    const {user} = useStateValue();
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            username: user?.username,
            title: e.target.title.value,
            description: e.target.description.value
        }
        if (file) {
            newPost.postImage = file;
        }
        axios.post("/posts", newPost)
            .then((res) => navigate(`/posts/${res.data._id}`))
            .catch((err) => console.error(err));
    }

    return (
        <>
            {file && <img className="new-post-image"
                          src={file} alt=""/>}
            <form onSubmit={handleSubmit} className="new-post-form">
                <div className="new-post-inputs">
                    <input type="text" name="title" placeholder="Enter title here" className="new-post-title"/>
                    <FileBase64 onDone={({base64}) => setFile(base64)} multiple={false} type="file" id="file"
                                name="file" className="file-input"/>
                </div>
                <p className="new-post-text">
                    <textarea name="description" className="new-post-textarea" placeholder="Write something here..."/>
                </p>
                <button className="publish-button" type="submit">
                    Publish <MdPublish size={35}/>
                </button>
            </form>
        </>
    );
}

export default NewPostForm;