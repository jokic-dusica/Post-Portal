import React,{useEffect,useState} from 'react';
import data from '../data/data';
import CommentPost from '../components/commentPost';
import BlogPost from '../components/blogPost/blogPost';
import CommentForm from '../components/commentForm/commentForm';
import usePost from '../hooks/postHook';
import useComment from '../hooks/commentHook';
import UpdatePost from '../components/updatePost/updatePost';

const BlogPostDetails = (props) => {
    const [blogInfo, setBlogInfo] = useState();
    const[comments, setComments] = useState([]);
    let passedId = props.match.params.id;
    const {getPostById} = usePost();
    const{getAllComment} = useComment();
    useEffect(async () => {       
        let blogData = await getPostById(passedId);
            setBlogInfo(blogData);
        let comment = await getAllComment(passedId);
            setComments(comment);  
    }, [passedId]);
    const [inputText, setInputText] = useState({title: "", date: "", author: ""});

    return (
        <>
            {blogInfo?.description}
            {comments && comments.map(onecomment => {
                return <CommentPost key={onecomment.id} comment = {onecomment}/>
            })}
            {
                blogInfo && 
                <>
                <CommentForm 
                    inputText={inputText} 
                    post={blogInfo} 
                    updatePost={setBlogInfo} 
                    setInputText= {setInputText}
                />
                <UpdatePost post = {blogInfo}/>
                </>
            }
            
        </>
    )
}

export default BlogPostDetails;
