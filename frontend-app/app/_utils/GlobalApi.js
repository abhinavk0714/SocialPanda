import { PostponedPathnameNormalizer } from "next/dist/server/future/normalizers/request/postponed";

const { default: axios } = require("axios");

//created axios client to create endpoint
const axiosClient=axios.create({
    baseURL:'http://localhost:8000',
});

const createUser = (data) => axiosClient.post('/user', data);
const getUserByEmail = (email) => axiosClient.get(`/user/${email}`);

const createPost = (data) => axiosClient.post('/post', data);
const getAllPosts = () => axiosClient.get('/post');

const onPostLike = (postId, data) => axiosClient.put("/post/like/"+postId, data)

export default{
    createUser,
    getUserByEmail,
    createPost,
    getAllPosts,
    onPostLike
}