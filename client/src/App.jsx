import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import {pages} from "./pages";
import uuid from 'react-uuid'
import DetailedPost from "./components/detailed-single-post/DetailedPost";

function App() {
    return (
        <div className="app">
            <Header/>
            <Routes>
                {
                    pages.map((page) => (<Route key={uuid()} exact="true" path={page.path} element={page.element}/>))
                }
                <Route path="/posts/:id" element={<DetailedPost/>}/>
            </Routes>
        </div>
    );
}

export default App;
