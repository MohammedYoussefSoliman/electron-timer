import Axios from 'axios';

export const apiUrl = Axios.create({ baseURL: 'http://18.133.140.38/api' });