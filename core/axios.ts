import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:4000'
  // withCredentials: true
});

// axios.interceptors.request.use(config => {
//   if (typeof window !== undefined) {
//     config.headers.Authorization = window.localStorage.getItem('token');
//   }

//   return config;
// });

export { axios };