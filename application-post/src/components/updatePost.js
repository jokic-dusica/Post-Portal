import React, {useEffect, useState} from 'react';
import usePost from '../hooks/postHook';

const UpdatePost = ({post}) => {
    const[postCopy, setPostCopy] = useState(post);
    const{changePost, uploadPostImage} = usePost();
    const inputChangeHandler = (e) => {
        setPostCopy({...postCopy,[e.target.name]:e.target.value});
    }
    const updatePostSubmit = async () => {
        console.log(postCopy);
        await changePost(postCopy);
        window.location.reload();
    }

    const fileInputHandler = async (e) => {
        var file = e.target.files[0];
        var data = new FormData();
        data.append("id",post.id);
        data.append("file", file);
        await uploadPostImage(data);
    }
    return (
        <>
        <div className = "col-12">
            <label>Change Post Description</label>
            <input type="text" name="description" value={postCopy?.description} onChange = {inputChangeHandler}/>
            <button onClick = {updatePostSubmit}>Update Description of Post</button>
        </div>
        <div className = "col-12">
            <label>Upload Image For Your Post</label>
            <input type="file" onChange = {fileInputHandler}/>
        </div>
        </>
    )
}

export default UpdatePost;