import React, {useState} from 'react';
import user from '../../data/user';
import UserModal from '../userModal/userModal';
import userProfilStyle from '../userProfil/userProfil.module.css';

const UserProfil = ({user, setUser}) => {
    const[userModal, setUserModal] = useState(false);
    const showModal = () => {
        if(userModal == false) {
            setUserModal(true);
        }
        else {
            setUserModal(false)
        }
    }
    return (
        <>
            <div className = {`${userProfilStyle.userProfilStyle} col-12`}>
                <div className = "row">
                    <div className = {`${userProfilStyle.profilStyle}`}>
                        <span>{user?.name}</span>                   
                        <span>{user?.username}</span>
                    </div>
                </div>
                <div className = "row">
                    <div className = {`${userProfilStyle.wrapperImage} col-12`}>
                        <img src = {`data:image/gif;base64,${user?.photo}`}/>
                    </div>
                </div>
                {userModal == true && <UserModal user={user}/>}              
                <button className = {userProfilStyle.btnChange} onClick = {showModal}>Change Profile</button>
            </div>
        </>
    )
}



export default UserProfil;