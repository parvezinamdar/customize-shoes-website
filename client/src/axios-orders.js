import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://customizeshoes-d37f3.firebaseio.com/'
});

export default instance;