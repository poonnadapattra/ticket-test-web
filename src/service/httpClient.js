import axios from 'axios';

const httpClient = axios.create({
  baseURL: "http://localhost:8080/api"
});

// httpClient.defaults.withCredentials = true;

export default httpClient;