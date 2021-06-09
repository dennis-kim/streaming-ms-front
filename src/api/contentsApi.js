import axios from 'axios';

const baseURL = '';

function getHeaders() {
    return {
        Accept: 'application/json',
    };
}

export function getContents(baseId, sort, order,
    page='1', size='10') {
  const headers = getHeaders();
  const url = `http://118.34.135.195:9000/contents/${baseId}?sort=${sort}&order=${order}&page=${page}&size=${size}`;
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