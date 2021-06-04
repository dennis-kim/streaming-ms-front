import axios from 'axios';

const baseURL = '';

function getHeaders() {
    return {
        Accept: 'application/json',
    };
}

export function getContents(id) {
    const params = {
    };
    const headers = getHeaders();
    const url = `${baseURL}/contents/${id}`;
        return new Promise((resolve, reject) => {
        axios.get(url, { params, headers })
          .then((response) => {
            resolve(response);
          })
          .catch((e) => {
            reject(e);
          });
    });
}