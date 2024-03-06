import React from 'react';
import { Link, Outlet } from 'react-router-dom'; 
import { blogdata } from '../../data/blogdata';
import './BlogPage.css';

function BlogPage() {
  return (
    <>
      <h1>BlogPage</h1> 
      <ul className='container'>
        {blogdata.map(post => (
          <BlogLink key={post.id} post={post}/>
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