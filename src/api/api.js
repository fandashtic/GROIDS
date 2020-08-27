//import config from 'appConfig.json';
import axios from 'axios';
import {apiUrl,DevAPIUrl} from 'appConfig.json'
export default axios.create({
  baseURL: DevAPIUrl,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, OPTIONS',
    'Access-Control-Allow-Headers': '*'
  }
});

