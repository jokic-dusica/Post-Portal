import React,{useState,useEffect} from 'react';
import logo from '../img/logoo.png';
import {Link, withRouter} from 'react-router-dom'


function Nav() {
    const[token, setToken] = useState()
    useEffect(() => {
        let token = localStorage.getItem("token");
        setToken(token);
    },[])
    const logOut = () => {
        localStorage.removeItem("token");
        setToken(null);
    }
    return (
        <>
        <section className = "nav-bar">
            <nav className = "container">
                    <div className = "row">
                        <div className = "col-3">
                            <Link to="/"><img src={logo}></img> </Link>                  
                        </div>
                        <div className = "col-9 main-navigation">
                            <ul className = "nav-bar-item">
                                {token && <li><Link to="/my-profil">My Profil</Link></li>}
                                {!token && <li><Link to="/login">Login</Link></li>}
                                {token && <li><Link  onClick={logOut}>Log out</Link></li>}
                                {!token && <li><Link to="/register">Register</Link></li>}
                                {token && <li><Link to="/new-blog">Create Post</Link></li>}
                            </ul>
                        </div>
                    </div>
                </nav>
        </section>
        </>
    )
}
export default Nav;