import React from 'react';
import BlogCard from '../../component/blogCard.js/BlogCard';
import Footer from '../../component/footer/Footer';
import './Blog.css'

const BlogPage = ({len}) => {
  return (
    <div className='bgWhite'>
      <BlogCard len={len}></BlogCard>
      <Footer></Footer>    
    </div>
  );
};

export default BlogPage;