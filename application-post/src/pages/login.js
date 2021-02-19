import React,{useState} from 'react';
import useUser from '../hooks/userHook';
import { withRouter } from "react-router-dom";


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
        <form>
            <div>
                <label>Username</label>
                <input onChange={inputHandlerUser} type="text" name="username"/>
            </div>
            <div>
                <label>Password</label>
                <input onChange={inputHandlerUser} type="password" name="password"/>
            </div>
            <button type="button" onClick = {loginUser}>Sign in</button>
        </form>
    </>
}

export default withRouter(Login);


