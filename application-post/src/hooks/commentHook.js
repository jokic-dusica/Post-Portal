import axios from 'axios';

const mainUrl = "/api/comments";

export default function useComment (){

    const getAllComment = async (id) => {
        let postUrl = `${mainUrl}/post/${id}`;
        let response = await axios.get(postUrl);
        return response.data;
    }

    const updateComment = async (comment) => {
        let postUrl = `${mainUrl}/${comment.id}`;
        let response = await axios.put(postUrl,comment);
        return response.data;
    }

    const deleteComment = async (id) => {
        let url = `${mainUrl}/${id}`;
        let response = await axios.delete(url);
        return response.data;
    }

    return {
        getAllComment,
        updateComment,
        deleteComment
    }
}