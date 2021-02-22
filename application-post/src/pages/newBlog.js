import React, {useState, useEffect} from 'react';
import usePost from '../hooks/postHook';
import {withRouter} from 'react-router-dom';
import useUser from '../hooks/userHook';
import newBlogStyle from '../pages/newBlog.module.css';

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
        <div className = {`${newBlogStyle.newBlogWrapper} col-12`}>
            <div>
                <label className = {newBlogStyle.labelStyle} >Write your Title</label>
                <input className = {newBlogStyle.inputStyle} type="text" name="title" onChange = {inputTextHandler}/>
            </div>
            <div>
                <label className = {newBlogStyle.labelStyle} >Write Your Description of Post</label>
                <input className = {newBlogStyle.inputStyle} type="text" name="description" onChange = {inputTextHandler}/>
            </div>
            <button className = {newBlogStyle.addNewBtn} onClick = {createNewPost}>Add New Post</button>
        </div>       
        </>
    )

}

export default withRouter(NewBlog);