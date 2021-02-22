import React, {useState} from 'react';
import useUser from '../../hooks/userHook';
import {withRouter} from 'react-router-dom';
import userModalStyle from '../userModal/userModal.module.css';

const UserModal = ({user}) => {                       
    const [userForEdit, setUserForEdit] = useState(user);
    const {updateUser, uploadImage} = useUser();
    const onChangeHandler = (e) => {
        setUserForEdit({...userForEdit, [e.target.name]:e.target.value});
    }
    const submitUserHandler = async () => {
        await updateUser(userForEdit);
        window.location.reload();
    }
    const fileHandler = async (e) => {
        var file = e.target.files[0];
        var data = new FormData();
        data.append("username", user.username);
        data.append("file", file);
        await uploadImage(data);
    }
    return (
        <>
            <div className = {userModalStyle.holder}>
                <div>Change Your Profile</div>
                <input className = {userModalStyle.inputProfile} type="text" value={userForEdit.name} name="name" onChange = {onChangeHandler}/>
                <button className = {userModalStyle.saveBtn} onClick = {submitUserHandler}>Save</button>
                <div className = {`${userModalStyle.wrapperPhoto} col-12`}>
                    <label>Upload Photo</label>
                    <input type="file" onChange = {fileHandler} />
                </div>
            </div>          
        </>
    )
}

export default withRouter(UserModal);