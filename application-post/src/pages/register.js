import axios from 'axios';
import React,{useState} from 'react';
import useUser from '../hooks/userHook';
import {withRouter} from 'react-router-dom'


const Register = (props) => {
    const[registerUser, setRegisterUser] = useState({name:"", username:"", password:""});
    const{register} = useUser();
    const inputTextHandler = (e) => {
        setRegisterUser({...registerUser,[e.target.name]:e.target.value})
    }
    const registerConfirm = async() => {
        let responseData = await register(registerUser);
        if(responseData){
            props.history.push('/login');
        }
    }
    return (
        <>
            <div>
                <label>Unesite ime i prezime</label>
                <input type="text" name="name" onChange={inputTextHandler}/>
                <label>Unesite username</label>
                <input type="text" name="username" onChange={inputTextHandler}/>
                <label>Unesite password</label>
                <input type="password" name="password" onChange={inputTextHandler}/>
                <button onClick = {registerConfirm}>Register</button>
            </div>
        </>
    )
}


export default withRouter(Register);