import axios from 'axios';
import store from '../store/store';
import { URI } from './constant';

// Create an instance of axios
const api = axios.create({
  baseURL: `${URI}/Api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
