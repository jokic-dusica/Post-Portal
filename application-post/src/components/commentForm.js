import React, {useState} from 'react';
import BlogPostDetails from '../pages/blogPostDetails';

const CommentForm = ({setInputText, post, updatePost, inputText}) => {
    const inputTextHandler = (e) => {
        console.log(e);
        setInputText({...inputText,[e.target.name]:e.target.value})
    };
    const submitHandlerComment = (e) => {
        if(validateInput() == true) {
            post.comment.push(inputText);
            updatePost(
             post
             );
            setInputText({author:"",date:"",title:""});
        }
        else {
            return ;
        }
    }
    const[errorValidationResult, setErrorValidationResult] = useState({showErrorMessage: false, errorMessage: ""});
    const validateInput = () => {
        if(inputText.author == "" || !inputText.author || inputText.date == "" || !inputText.date || inputText.title == "" || !inputText.title){
            setErrorValidationResult({showErrorMessage: true, errorMessage:"Molimo popunite sva polja!"})
            return false;
        }
        else {
            setErrorValidationResult({showErrorMessage: false, errorMessage:""});
            return true;
        }
    }
    return (
        <>       
        <div className = "container">
            <div className = "row">
                <div className = "col-6">
                    <form>
                        {errorValidationResult.showErrorMessage == true && <p>{errorValidationResult.errorMessage}</p>}
                        <label>Unesite svoje ime i prezime:</label>
                        <input value={inputText.date} name="date" onChange = {inputTextHandler} type="text"/>
                        <input value={inputText.title} name="title" onChange = {inputTextHandler} type="text"/>
                        <input value={inputText.author} name="author" onChange = {inputTextHandler} type="text"/>
                        <div onClick = {submitHandlerComment}>Publish</div>
                    </form>
                </div>            
            </div>
        </div>       
    </>
    )
}


export default CommentForm;
