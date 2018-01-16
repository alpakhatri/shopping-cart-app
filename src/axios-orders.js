import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-burger-builder-d3c5a.firebaseio.com/"
});

export default instance;
