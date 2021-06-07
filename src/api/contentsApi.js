import axios from 'axios';

const baseURL = '';

function getHeaders() {
    return {
        Accept: 'application/json',
    };
}

export function getContents(baseId, sort, order) {
  const headers = getHeaders();
  const url = `http://118.34.135.195:9000/contents/${baseId}`;
  const params = {
    sort: sort,
    order: order
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