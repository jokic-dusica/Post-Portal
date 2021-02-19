import React, {useState} from 'react';
import user from '../data/user';
import UserModal from '../components/userModal';

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
            <div className = "col-12 user-profil">
                <div className = "row">
                    <div className = "col-12">
                        <span>{user?.name}</span>                   
                        <span>{user?.username}</span>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-12">
                        <img src = {`data:image/gif;base64,${user?.photo}`}/>
                    </div>
                </div>
                {userModal == true && <UserModal user={user}/>}              
                <button onClick = {showModal}>Izmeni profil</button>
            </div>
        </>
    )
}



export default UserProfil;