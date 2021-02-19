import React,{useEffect,useState} from 'react';
import UpdateComment from './updateComment';
import useComment from '../hooks/commentHook';

const CommentPost = ({comment}) => {
    const[userModal, setUserModal] = useState(false);
    const {deleteComment} = useComment();
    const showModal = () => {
        if(userModal == false) {
            setUserModal(true);
        }
        else {
            setUserModal(false)
        }
    }
    const deleteCommentSubmit = async () => {
        await deleteComment(comment.id);
        window.location.reload();
    }

    return (
        <>
            <div className = "container">
                <div className = "row">
                    <div className = "col-6">
                        <div className = "item">
                            <h2 className = "title-of-person">{comment?.title}</h2>
                        </div>
                        <div className = "title-comment">
                            <p>{comment?.description}</p>
                            <p>{comment.user.name}</p>
                            <p>{comment?.user.username}</p>
                            {userModal == true && <UpdateComment  comment={comment} />}   
                            <button onClick = {showModal}>Change comment</button>
                            <button onClick = {deleteCommentSubmit}>Delete Comment</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentPost;
