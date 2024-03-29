import React from 'react';
import { Link, Outlet } from 'react-router-dom'; 
// import { blogdata } from '../../data/blogdata';
import { useData } from '../../data/dataContext';
import { CreatePost } from "../../Components/CreatePost";
import './BlogPage.css';

function BlogPage() {
  const [createPost, setCreatePost ] = React.useState(false);
  const blogdata = useData();
  return (
    <>
      <h1>BlogPage</h1> 
      <ul className='container'>
        {blogdata.data.map((post) => (
          <BlogLink key={post.slug} post={post}/>
          ))}
      </ul>
      <Outlet />
      {!createPost && <button onClick={()=> setCreatePost(true)}>Nuevo Post</button>}
      {createPost && <CreatePost setCreatePost={setCreatePost} />}  
    </>
  );
}

function BlogLink({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
}

export { BlogPage };