import axios from 'axios';

// axios instance for github
const githubClient = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default githubClient;
