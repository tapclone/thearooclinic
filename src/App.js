import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from './Components/AdminPanel/AdminLogin';
import AdminMain from './Components/AdminPanel/AdminMain';
import AboutPage from './Pages/AboutPage';
import AdminBlogPage from './Pages/AdminBlogPage';
import AdminDoctorsPage from './Pages/AdminDoctorsPage';
import AdminGalleryPage from './Pages/AdminGalleryPage';
import BlogPage from './Pages/BlogPage';
import BlogSinglePage from './Pages/BlogSinglePage';
import GalleryPage from './Pages/GalleryPage';
import Homepage from './Pages/Homepage'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Homepage/>}></Route>
      <Route exact path="/about" element={<AboutPage/>}></Route>
      <Route exact path="/gallery" element={<GalleryPage/>}></Route>
      <Route exact path="/adminLogin" element={<AdminLogin/>}></Route>
      <Route exact path="/blog" element={<BlogPage/>}></Route>
      <Route exact path="/blogSingle" element={<BlogSinglePage/>}></Route>
      <Route exact path="/admin" element={<AdminGalleryPage/>}></Route>
      <Route exact path="/adminBlog" element={<AdminBlogPage/>}></Route>
      <Route exact path="/adminAddDoctors" element={<AdminDoctorsPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App