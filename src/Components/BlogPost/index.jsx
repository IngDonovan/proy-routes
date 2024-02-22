import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogdata } from "../../data/blogdata";

function BlogPost() {
    const { slug } = useParams();

    const blogpost = blogdata.find(post => post.slug === slug);

  return (
    <>
      <h2>{blogpost.title}</h2>
      <p>{blogpost.content}</p>
      <p>{blogpost.author}</p>
    </>
  );
}

export { BlogPost };
