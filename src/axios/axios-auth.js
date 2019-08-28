import axios from 'axios';

const axiosAuth = axios.create({
	baseURL:
		'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCOcUCI2YMZXtVJkuOcYMAttj8XXDMyR7M',
});

export default axiosAuth;
