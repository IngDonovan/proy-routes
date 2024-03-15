import React from "react";
import { useAuth } from "../../auth";
import { useData } from "../../data/dataContext";

function EditPost({setEditPost, oldTitle, oldContent, oldAuthor, oldApproved}) {
    const [title, setTitle] = React.useState(oldTitle);
    const [content, setContent] = React.useState(oldContent);
    const [author, setAuthor] = React.useState(oldAuthor);
    const auth = useAuth();

    const blogdata = useData();

    const resetGaps = () => {
        setTitle(title);
        setContent(content);
        setAuthor(author);
        setEditPost(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(auth.user)
        let newAuthor; 
        if(auth.user){
            newAuthor = auth.user.name;
        } else {
            newAuthor = author; 
        }
        // blogdata.editData({
        //     title: `${title}`,
        //     slug: `${title.toLowerCase().replaceAll(' ', '-')}`,
        //     content: `${content}`,
        //     author: `${newAuthor}`,
        //     approved: false,  
        // });
        const editedData = {
            title: title,
            slug: title.toLowerCase().replaceAll(' ', '-'),
            content: content,
            author: newAuthor,
            approved: false,
          };
        //   console.log(editedData);
          blogdata.editData([oldTitle, editedData]);
        // resetGaps();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Titulo:
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                /> <br />
            </label>
            <label>
                Contenido:
                <textarea 
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea><br />
            </label>
            <label>
                Autor:
                {!auth.user &&
                    <input 
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    ></input>
                }
                {auth.user &&
                    <input 
                    type="text"
                    readOnly
                    value={auth.user.name}
                    ></input>
                }
                <br />
            </label>
            <button type="submit">Guardar</button>
            <button type="button" onClick={() => resetGaps()}>Cancelar</button>
        </form>
    )
}

export { EditPost };