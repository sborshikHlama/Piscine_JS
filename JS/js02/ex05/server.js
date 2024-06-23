const axios = require('axios');
const http = require('http');
const {post} = require("axios");

const server = http.createServer();
const API_URL = "https://jsonplaceholder.typicode.com";

const getRandomNumber = () => {
    return Math.floor((Math.random() * 100 )+ 1);
}

const getPosts = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/posts/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching post with ID ${id}: ${error.message}`);
    }
}

const getComments = async (postId) => {
    try {
        const response = await axios.get(`${API_URL}/comments`, { params: { postId } });
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching comments for post ID ${postId}: ${error.message}`);
    }
}

const getPlaceholder = async () => {
    const postIds = Array.from({length: 5}, getRandomNumber);

    try {
        const posts = await Promise.all(postIds.map(getPosts));

        for (const post of posts) {
            console.log(`Title: ${post.title}`);
            console.log(post.body);
            console.log('---');

            try {
               const comments = await getComments(post.id);
               comments.forEach(comment => {
                   console.log(`Commented by: ${comment.name}`);
                   console.log(`Email: ${comment.email}`);
                   console.log(comment.body);
                   console.log('---');
               })
            } catch (error) {
                console.log(`Error fetching ${error.message}`);
            }
        }
    } catch (error) {
        console.log(`Error fetching post with ID ${post.id}`);
    }
}

server.listen(8080, () => console.log(`Listening on port 8080`));
getPlaceholder();

