import axios from 'axios';

const baseurl = 'https://portfolio-backend-theta.vercel.app/';
const instance = axios.create({
  baseURL: baseurl,
});
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
