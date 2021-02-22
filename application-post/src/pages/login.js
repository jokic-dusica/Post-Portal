import React,{useState} from 'react';
import useUser from '../hooks/userHook';
import { withRouter } from "react-router-dom";
import loginStyle from '../pages/login.module.css';


const Login = (props) => {
    const[user, setUser] = useState({username:"",password:""});
    const {login} = useUser();
    const inputHandlerUser = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }
    const loginUser = async() => {
        let token =  await login(user);
        localStorage.setItem("token",token.access_token);
        if(token){
            props.history.push('/');
        }
    }
    return <>
        <form className = {`${loginStyle.loginForm} col-12`}>
            <div>
                <label className = {loginStyle.labelLogin}>Username</label>
                <input onChange={inputHandlerUser} type="text" name="username"/>
            </div>
            <div>
                <label className = {loginStyle.labelLogin}>Password</label>
                <input onChange={inputHandlerUser} type="password" name="password"/>
            </div>
            <button className = {loginStyle.signBtn} type="button" onClick = {loginUser}>Sign in</button>
        </form>
    </>
}

export default withRouter(Login);


