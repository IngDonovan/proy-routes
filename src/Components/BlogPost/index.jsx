import React from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { blogdata } from "../../data/blogdata";
import { useAuth } from "../../auth";
import { EditPost } from '../EditPost';
import { useData } from "../../data/dataContext";

import './BlogPost.css';

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const blogdata = useData();
  const auth = useAuth();

  const [editPost, setEditPost] = React.useState(false);
  const blogpost = blogdata.data.find(post => post.slug === slug);

    // const blogpost = blogdata.find(post => post.slug === slug);

  const canDelete = auth.user?.rol?.delete || blogpost.author === auth.user?.name;
  const canEdit = auth.user?.rol?.write;

  const returnToBlog = () => {
    navigate('/blog', { replace: true });
    // navigate(-1);//vuelve al historial anterior
  };

  return (
    <section className="cont-section">
      <h2>{blogpost?.title}</h2>
      <p>{blogpost?.content}</p>
      <p>Author: {blogpost?.author}</p>
      {canDelete && (
        <button
          onClick={() => blogdata.deleteData(blogpost.title)}
        >
          Eliminar Blogspot
        </button>
      )}
      {/* {canEdit && (
        <button onClick={() => setEditPost(true)}>Editar Blog</button>
      )}
      {editPost && (
        <EditPost 
        setEditPost={setEditPost} 
        oldTitle={blogpost.title} 
        oldContent={blogpost.content} 
        oldAuthor={blogpost.author} 
        oldApproved={blogpost.approved}
        />
      )}  */}
      <button onClick={returnToBlog}>Volver al blog</button>
    </section>
  );
}

export { BlogPost };

