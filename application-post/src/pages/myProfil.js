import React, {useState, useEffect} from 'react';
import UserProfil from '../components/userProfil/userProfil';
import user from '../data/user';
import useUser from '../hooks/userHook';

const MyProfil = () => {
    const {getLogged} = useUser();
    const [users, setUser] = useState();
    useEffect( async () => {
        let response = await getLogged();
        setUser(response);
    },[])
    return (
        <>
            <UserProfil user={users} setUser = {setUser}/>          
        </>
    )
}



export default MyProfil;