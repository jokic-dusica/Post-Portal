import React, {useState} from 'react';
import useUser from '../hooks/userHook';
import {withRouter} from 'react-router-dom';

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
            <div>Modal za Usera</div>
            <input type="text" value={userForEdit.name} name="name" onChange = {onChangeHandler}/>
            <button onClick = {submitUserHandler}>Sacuvaj</button>
            <div className = "col-12">
                <input type="file" onChange = {fileHandler} />
            </div>
        </>
    )
}

export default withRouter(UserModal);