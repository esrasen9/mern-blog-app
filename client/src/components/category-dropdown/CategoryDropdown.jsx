import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import uuid from "react-uuid";
import "./Dropdown.css";
import {MdOutlineCategory} from "react-icons/md";

const CategoryDropdown = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("/categories")
            .then((categories) => setCategories([...categories.data]));
    }, [])

    return (
        <div className="dropdown">
            <button className="drop-button menu-item">Categories <MdOutlineCategory size={40}/></button>
            <div className="dropdown-content">
                <Link className="category-link" to={`/`}>All</Link>
                {
                    categories.map((category) => (
                        <Link key={uuid()} className="category-link" to={`/?category=${category.name}`}>
                            {category.name}
                        </Link>))
                }
            </div>
        </div>
    );
}

export default CategoryDropdown;