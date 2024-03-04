import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "../../data/blogdata";
import { useAuth } from "../../auth";

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();

    const blogpost = blogdata.find(post => post.slug === slug);

    const canDelete = auth.user?.rol?.delete || blogpost.author === auth.user?.name;
    const canEdit = auth.user?.rol?.write;


    const returnToBlog = () => {
      navigate('/blog', { replace: true });
      // navigate(-1);//vuelve al historial anterior
    };

  return (
    <>
      <h2>{blogpost.title}</h2>
      <p>{blogpost.content}</p>
      {canEdit && (
        <button>Editar</button>
      )}
      <p>{blogpost.author}</p>
      <button onClick={returnToBlog}>Volver al blog</button>

      {canDelete && (
        <button>Eliminar Blogspot</button>
      )}
    </>
  );
}

export { BlogPost };
