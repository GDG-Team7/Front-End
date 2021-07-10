import axios, {AxiosRequestConfig} from 'axios';

const baseURL: string = 'http://localhost:5000';
const timeout: number = 1000 * 5;

const request = axios.create({
  baseURL,
  timeout,
});

// axios request interceptor
request.interceptors.request.use(
  config => {
    return config;
  },

  error => {
    return Promise.reject(error);
  },
);

// axios response interceptor
request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default request;

// export const Get = (url: string, config?: AxiosRequestConfig) => {
//   return request.get(url, config);
// };
