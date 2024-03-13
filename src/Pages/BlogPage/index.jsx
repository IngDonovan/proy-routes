import React from 'react';
import { Link, Outlet } from 'react-router-dom'; 
// import { blogdata } from '../../data/blogdata';
import { useData } from '../../data/dataContext';
import './BlogPage.css';

function BlogPage() {
  const blogdata = useData();
  return (
    <>
      <h1>BlogPage</h1> 
      <ul className='container'>
        {blogdata.data.map((post, index) => (
          <BlogLink key={index} post={post}/>
          ))}
      </ul>
      <Outlet />
    </>
  );
}

function BlogLink({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`} >{post.title}</Link>
    </li>
  );
}

export { BlogPage };