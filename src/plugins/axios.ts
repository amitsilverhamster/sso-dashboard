import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:3002', // Replace with your API base URL
    baseURL: 'https://api.socialsecurityofficeus.com/api', // Replace with your API base URL

    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;