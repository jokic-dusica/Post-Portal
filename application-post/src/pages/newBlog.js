import React, {useState, useEffect} from 'react';
import usePost from '../hooks/postHook';
import {withRouter} from 'react-router-dom';
import useUser from '../hooks/userHook';
import style from "../pages/mystyle.module.css";

const NewBlog = (props) => {
    const[newBlog, setNewBlog] = useState({title:"",description:"",date: new Date(), likes:0, dislike:0,user:null})
    const{saveNewPost} = usePost();
    const{getLogged} = useUser();
    
    useEffect(async() => {
        let loggedUser = await getLogged();
        setNewBlog({...newBlog,user:loggedUser});
    },[])
    const inputTextHandler = (e) => {
        setNewBlog({...newBlog,[e.target.name]:e.target.value})
    }
    const createNewPost = async() => {
        let newBlogData = await saveNewPost(newBlog);
        props.history.push('/');
    }
    return (
        <>
        <div className={style.test}>
            <label>Unesite Naslov</label>
            <input type="text" name="title" onChange = {inputTextHandler}/>
        </div>
        <div>
            <label>Unesite Opis</label>
            <input type="text" name="description" onChange = {inputTextHandler}/>
        </div>
        <button onClick = {createNewPost}>Dodaj</button>
        </>
    )

}

export default withRouter(NewBlog);