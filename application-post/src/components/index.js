import React, {useState} from 'react';
import data from '../data/data';
import BlogPost from './blogPost/blogPost';


function Store() {
    //const[blogs, setBlog] = useState(data);
    //console.log(data);
    return (
        <>
            <div>
                <BlogPost/>
            </div>
        </>
    )
}


export default Store;