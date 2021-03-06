import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdAddPhotoAlternate, MdPublish } from 'react-icons/md';
import axios from 'axios';
import { useStateValue } from '../../Context';

function NewPostForm() {
  const { user } = useStateValue();
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const createCategoryArray = (e) => {
    let arr = e.target.value.split(' ');
    arr = categories.filter((c) => c !== '');
    setCategories([...arr]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      username: user?.username,
      title: e.target.title.value,
      description: e.target.description.value,
    };

    if (file) {
      const data = new FormData();
      const name = Date.now() + file.name;
      data.append('name', name);
      data.append('file', file);
      newPost.postImage = name;
      axios.post('/upload', data)
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    }

    if (categories) {
      newPost.categories = categories;
    }
    axios.post('/posts', newPost)
      .then((res) => navigate(`/posts/${res.data._id}`))
      .catch((err) => console.error(err));
  };

  return (
    <>
      {file && (
      <img
        className="new-post-image"
        src={URL.createObjectURL(file)}
        alt=""
      />
      )}
      <form onSubmit={handleSubmit} className="new-post-form">
        <div className="new-post-inputs">
          <input required type="text" name="title" placeholder="Enter title here" className="new-post-title" />
          <label htmlFor="file">
            <MdAddPhotoAlternate className="add-photo-icon" size={60} />
          </label>
          <input onChange={(e) => setFile(e.target.files[0])} type="file" name="file" id="file" className="file-input" />
        </div>
        <input onChange={createCategoryArray} type="text" name="categories" placeholder="Categories..." className="new-post-categories" />
        <p className="new-post-text">
          <textarea required name="description" className="new-post-textarea" placeholder="Write something here..." />
        </p>
        <button className="publish-button" type="submit">
          Publish
          {' '}
          <MdPublish size={35} />
        </button>
      </form>
    </>
  );
}

export default NewPostForm;
