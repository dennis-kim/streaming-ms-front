import axios from 'axios';

const baseURL = '';

function getHeaders() {
    return {
        Accept: 'application/json',
    };
}

export function getContents(baseId) {
  const headers = getHeaders();
  const url = `http://118.34.135.195:9000/contents/${baseId}`;
  const params = {
    nana:'value333'
  }

  return new Promise((resolve, reject) => {
    axios.get(url, {params, headers})
    .then((res) => {
      resolve(res.data)
    })
    .catch((e) => {
      reject(e)
    })
  })
}