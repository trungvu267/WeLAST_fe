import axios from 'axios';

const baseURL = 'https://welast-server.onrender.com/';

const network = axios.create({
  baseURL, 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json', 
  }
});

export default network;
