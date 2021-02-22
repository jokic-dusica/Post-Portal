import React, {useState,useEffect} from 'react';
import SingleBlogPost from '../singlePost/singleBlogPost';
import data from '../../data/data';
import usePost from '../../hooks/postHook';
import blogPostStyle from '../blogPost/blogPost.module.css';

const BlogPost = () => {
    const[blogs, setBlogs] =  useState([]);
    const[text, setText] = useState();
    const {getAllPost, searchPost} = usePost();
   
    useEffect( async () => {
        let posts = await getAllPost();
        setBlogs(posts);
    }, [])

    const inputHandler = (e) => {
        let textSearch = e.target.value;
        setText(textSearch);
    }

    const searchPostSubmit = async () => {
        let searchPostData = await searchPost(text);
        setBlogs(searchPostData);
        setText("");
    }

    return (
        <>
            <div className = {`${blogPostStyle.searchPost} col-12`}>
                <label>Search Posts</label>
                <input className = {blogPostStyle.inputStyle} type="text" name="search" onChange = {inputHandler} />
                <button className = {blogPostStyle.searchBtn} onClick = {searchPostSubmit}>Search</button>
            </div>
            {blogs.map( bl => {
               return  <SingleBlogPost key={bl.id} blog={bl} />
            })}
        </>
    )
}

export default BlogPost;