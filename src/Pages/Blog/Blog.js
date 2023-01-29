import React from 'react'
import BlogCard1 from './BlogCard1'
import BlogCard2 from './BlogCard2'
import BlogCard3 from './BlogCard3'

const Blog = () => {
  return (
    <div className="mt-5">
      {/* 📌📌 Blog 1 */}
      <BlogCard1></BlogCard1>
      {/* 📌📌 Blog 2 */}
      <BlogCard2></BlogCard2>
      {/* 📌📌 Blog 3 */}
      <BlogCard3></BlogCard3>
      {/* 📌📌 Blog 4 */}
    </div>
  )
}

export default Blog
