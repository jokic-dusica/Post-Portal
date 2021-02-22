import axios from 'axios';
import React,{useState} from 'react';
import useUser from '../hooks/userHook';
import {withRouter} from 'react-router-dom';
import registerStyle from './registerStyle.module.css';


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
            <div className = {`${registerStyle.registerHolder} col-12`}>
                <label>Your Name and Surname</label>
                <input className = {registerStyle.inputStyle} type="text" name="name" onChange={inputTextHandler}/>
                <label>Username</label>
                <input className = {registerStyle.inputStyle}  type="text" name="username" onChange={inputTextHandler}/>
                <label>Password</label>
                <input className = {registerStyle.inputStyle}  type="password" name="password" onChange={inputTextHandler}/>
                <button className = {registerStyle.registerBtn} onClick = {registerConfirm}>Register</button>
            </div>
        </>
    )
}


export default withRouter(Register);