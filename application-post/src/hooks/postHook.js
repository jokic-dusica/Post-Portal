import axios from 'axios';

const mainUrl = "/api/posts";

export default function usePost(){

    const getAllPost = async () =>{
        let postList = [];
       let response = await axios.get(mainUrl);
       return response.data;
    }
    
    const getPostById = async (id) => {
        let url =`${mainUrl}/${id}`; 
        let response = await axios.get(url);
        return response.data;
    }

    const saveNewPost = async(newBlogObject) => {
        let response = await axios.post(mainUrl, newBlogObject);
        return response.data;
    }

    const deletePost = async(id) => {
        let url = `${mainUrl}/${id}`;
        let response = await axios.delete(url);
        return response.data;
    }

    const changePost = async(post) => {
        let url = `${mainUrl}/${post.id}`;
        let response =  await axios.put(url, post);
        return response.data;
    }

    const uploadPostImage = async (data) => {
        let url = `${mainUrl}/image`;
        let response = await axios.post(url, data);
        return response.data;
    }

    const searchPost = async (text) => {
        let url = `${mainUrl}/search/${text}`;
        let response = await axios.get(url);
        return response.data;
    }

    return {
        getAllPost,
        getPostById,
        saveNewPost,
        deletePost,
        changePost,
        uploadPostImage,
        searchPost
    }
}