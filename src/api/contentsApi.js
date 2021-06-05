import axios from 'axios';

const baseURL = '';

function getHeaders() {
    return {
        Accept: 'application/json',
    };
}

export function getContents() {
  return axios.get(
    `http://118.34.135.195:9000/contents/1`
  );
}