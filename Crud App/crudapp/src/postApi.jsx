import axios from "axios";
import Posts from "./components/Posts";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPost = ()=>{
    return api.get("/posts")

}

export const deletePost = (id)=>{
    return api.delete("/posts/"+id)
}

export const addpost = (post)=>{
    return api.post("/posts",post)
}


export const updatePost = (id)=>{
    return api.put("/posts/"+id)
}