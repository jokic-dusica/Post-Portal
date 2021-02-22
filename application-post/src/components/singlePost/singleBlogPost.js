import React,{useState,useEffect} from 'react';
import data from '../../data/data';
import {Link, withRouter} from 'react-router-dom';
import usePost from '../../hooks/postHook'
import styles from '../singlePost/singleblogpost.module.css';


const SingleBlogPost = (props) => {
    const [blog,setBlog] = useState(props.blog);
    const {deletePost} = usePost();
    const deletePostSubmit = async(id) => {
        let data = await deletePost(id);
        window.location.reload();
    }
    return (
        <>     
           
                <div className = {`${styles.wrapperbox} col-3`}>
                    <h3>{blog?.title}</h3>
                    <p>{blog?.description}</p>
                    <div className = {styles.wrapperImage}>
                        <img src = {`data:image/gif;base64,${blog?.photo}`}/>
                    </div>              
                    <div className = {styles.viewMoreBtn}>
                        <Link to = {`/single/${blog.id}`} >View More</Link>
                    </div>
                    <div> 
                        <button className = {styles.deleteBtn} onClick = {() => {deletePostSubmit(blog.id)}}>Delete</button>
                    </div>
                </div>  
                    
        </>
    )
}
/*Ako idemo preko props.history.push*/
//export default withRouter(SingleBlogPost);
export default SingleBlogPost;