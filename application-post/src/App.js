import './App.css';
import Store from '../src/components/index';
import data from '../src/data/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../src/pages/NavBar';
import BlogPost from './components/blogPost/blogPost.js';
import SingleBlogPost from './components/singlePost/singleBlogPost';
import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import BlogPostDetails from '../src/pages/blogPostDetails';
import MyProfil from './pages/myProfil';
import Login from './pages/login';
import axios from 'axios';
import Register from './pages/register';
import NewBlog from '../src/pages/newBlog';
import styles from '../src/appstyle.module.css'

function App() {

  axios.interceptors.request.use(function(config){
    let token = localStorage.getItem("token");
    if(token){
      config.headers ={
      'Authorization': `Bearer ${token}`

      }
    }
    return config;
  }
  , function(error) {
    return Promise.reject(error);
  })
  return (
    <Router>
      <>
        <div className="App">     
          <Nav/>
          <div className = {styles.wrapperbox}>
            <div className = "container">
              <div className = "row">
                  <Switch>
                    <Route exact path="/" component = {BlogPost} />
                    <Route path = "/single/:id" component = {BlogPostDetails}/>
                    <Route path = "/my-profil" component = {MyProfil}/>
                    <Route path="/login" component = {Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path = "/new-blog" component = {NewBlog}/>
                  </Switch>         
              </div>
            </div>        
          </div>
        </div>
        </>
    </Router>
  );
}



export default App;
