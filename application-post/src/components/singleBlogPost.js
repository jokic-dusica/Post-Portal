import React,{useState,useEffect} from 'react';
import data from '../data/data';
import {Link, withRouter} from 'react-router-dom';
import usePost from '../hooks/postHook';


const SingleBlogPost = (props) => {
    const [blog,setBlog] = useState(props.blog);
    const {deletePost} = usePost();
    const deletePostSubmit = async(id) => {
        let data = await deletePost(id);
        window.location.reload();
    }
    return (
        <>     
            <div className = "col-3 single-blog-post">
                <h3>{blog?.title}</h3>
                <p>{blog?.description}</p>
                <img src = {`data:image/gif;base64,${blog?.photo}`}/>
                <div>
                    <Link to = {`/single/${blog.id}`} >View More</Link>
                </div>
                <div> 
                    <button onClick = {() => {deletePostSubmit(blog.id)}}>Delete</button>
                </div>
            </div>  
        </>
    )
}
/*Ako idemo preko props.history.push*/
//export default withRouter(SingleBlogPost);
export default SingleBlogPost;