import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://react-burger-builder-cc7b1.firebaseio.com/',
});

export default axiosInstance;
