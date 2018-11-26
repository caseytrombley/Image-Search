import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d3f7324bba4520fdb883f93c60e9c3ca6ab52d0d4da9768249ab61039739e10c'
    }
});

