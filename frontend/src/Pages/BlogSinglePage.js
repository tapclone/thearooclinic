import React from 'react'
import BlogSingle from '../Components/Blog/BlogSingle'
import Footer from '../Components/Footer/Footer'
import SubHeader from '../Components/Header/SubHeader'

function BlogSinglePage() {
  return (
    <div>
        <SubHeader></SubHeader>
        <BlogSingle></BlogSingle>
        <Footer></Footer>
    </div>
  )
}

export default BlogSinglePage