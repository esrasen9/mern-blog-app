import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import uuid from 'react-uuid';
import Header from './components/header/Header';
import pages from './pages';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        {
            pages.map((page) => (<Route key={uuid()} exact="true" path={page.path} element={page.element} />))
        }
      </Routes>
    </div>
  );
}

export default App;
