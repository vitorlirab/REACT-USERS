import axios from 'axios';

const api = axios.create({
  baseURL: 'https://spring-rest-users.herokuapp.com',
});
export default api;
