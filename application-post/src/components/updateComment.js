import React, { useState } from 'react';
import useComment from '../hooks/commentHook';

const UpdateComment = ({comment}) => {
    const[commentCopy, setCommentCopy] = useState(comment);
    const{updateComment} = useComment();
    const onChangeHandler = (e) => {
        setCommentCopy({...commentCopy,[e.target.name]:e.target.value});
    } 
    const saveCommentSubmit = async () => {
        await updateComment(commentCopy);
        window.location.reload();
    }
    return (
    <>  
        <div>Change Comments</div>
        <div>
            <label>Change Title</label>
            <input type="text" name="title" value = {commentCopy.title} onChange = {onChangeHandler}/>
        </div>
        <div>
            <label>Change Description</label>
            <input type="text"name="description" value = {commentCopy.description} onChange = {onChangeHandler} />
        </div>
        <button onClick = {saveCommentSubmit}>Save Comment</button>
    </>
    )
}

export default UpdateComment;