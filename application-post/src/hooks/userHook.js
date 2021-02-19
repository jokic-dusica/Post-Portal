import axios from 'axios';

const authUrl = "/api/auth";
const mainUrl = "/api/users";

export default function useUser() {

    const login = async(loginObject) => {
        let loginUrl = `${authUrl}/login`;
        const headers = {
            'Content-Type': 'application/json',
        }
        
        let response = await axios.post(loginUrl,loginObject,{headers:headers});
        return response.data
    }

    const register = async(registerObject) => {
        let response = await axios.post(mainUrl, registerObject)
        return response.data;
    }

    const getLogged = async() => {
        let url = `${mainUrl}/logged`;
        let response = await axios.get(url);
        return response.data;       
    }

    const updateUser = async (userObject) => {
        let url = `${mainUrl}/${userObject.id}`;
        let response = await axios.put(url, userObject);
        return response.data;
    }

    
    const uploadImage = async (data) => {
        let url = `${mainUrl}/image`;
        let response = await axios.post(url, data);
        return response.data;
    }


    return {
        login,
        register,
        getLogged,
        updateUser,
        uploadImage
    }   
}