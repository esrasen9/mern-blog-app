import React from 'react';
import Home from './pages/Home';
import Write from './pages/Write';
import ProfileSettings from './pages/ProfileSettings';
import Sign from './pages/Sign';
import About from './components/about/About';
import MyPosts from './pages/MyPosts';
import DetailedPost from './components/detailed-single-post/DetailedPost';

const pages = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/write',
    element: <Write />,
  },
  {
    path: '/settings',
    element: <ProfileSettings />,
  },
  {
    path: '/sign',
    element: <Sign />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/myposts',
    element: <MyPosts />,
  },
  {
    path: '/posts/:id',
    element: <DetailedPost />,
  },
];

export default pages;
