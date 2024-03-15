import React from "react";
import { useNavigate } from "react-router-dom";

const dataContext = React.createContext();

const initialData = [{
    title: 'Que es React?',
    slug: 'que-es-react',
    content: 'React es el mejor Framework de Javascript',
    author: 'patito',
    approved: false, 
},{
    title: 'Que es Vue?',
    slug: 'que-es-vue',
    content: 'Vue es el mejor Framework de Javascript',
    author: 'nicol', 
    approved: false, 
},{
    title: 'Que es Angular?',
    slug: 'que-es-angular',
    content: 'Angular es el mejor Framework de Javascript',
    author: 'dian', 
    approved: false, 
}];

function DataProvider({children}) {
    const [data, setData] = React.useState(initialData);
    const navigate = useNavigate();

    const addData = (newElement) => {
        setData(data => [...data, newElement]);
        navigate('/blog');
    }

    const deleteData = (text) => {
        const obj1 = data.filter(e => e.title !== text);
        console.log(obj1);
        setData([...obj1]);
        navigate('/blog'); 
    }

    const changeStatus = (text) => {
        const eleFound = data.find(e => e.title === text );
        const indFound = data.indexOf(eleFound);
        console.log(indFound)

        const editedElement = {
            title: `${data[indFound].title}`,
            slug: `${data[indFound].slug}`,
            content: `${data[indFound].content}`,
            author: `${data[indFound].author}`, 
            approved: !data[indFound].approved, 
        };
        const editedArray = data.map(e => e.title === text ? editedElement : e );
        setData([...editedArray]);
        navigate('/blog')
    }

    const editData = (array) => {
        const eleFound = data.find(e => e.title === array[0] );
        const indFound = data.indexOf(eleFound);

        const editedElement = {
            title: `${array[1].title}`,
            slug: `${array[1].slug}`,
            content: `${array[1].content}`,
            author: `${data[indFound].author}`, 
            approved: array[1].approved, 
        };
        const editedArray = data.map(e => e.title === array[0] ? editedElement : e );
        console.log(editedArray);
        
        setData([...editedArray]);
        console.log(data);
        navigate('/blog')
    }
    const blogdata = {data, addData, deleteData, editData, changeStatus};
    
    return(
        <dataContext.Provider value={blogdata}>
            {children}
        </dataContext.Provider>
    );
}

function useData(){
    const data = React.useContext(dataContext);
    return data;
}

export { DataProvider, useData };