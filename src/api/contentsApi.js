import axios from 'axios';

const baseURL = '';

function getHeaders() {
    return {
      Accept: 'application/json',
    };
}

function parseContents(item) {
  const contentsName = item.contents_name;
  const genre = item.genre;
  const actors = item.actors;
  const thumbnailURL = item.thumbnail_url;
  const categoryName = item.category_name;
  const contentsPath = item.contents_path;
  const modifyDate = item.modify_date;

  return {
    contentsName,
    genre,
    actors,
    thumbnailURL,
    categoryName,
    contentsPath,
    modifyDate,
  };
}

function parsePagination(_page, _size) {
  const page = _page;
  const size = _size;

  return {
    page,
    size
  };
}

export function getContents(categoryId, sort, order,
  page='1', size='10') {
    const headers = getHeaders();
    const url = `http://118.34.135.195:9000/contents/${categoryId}?sort=${sort}&order=${order}&page=${page}&size=${size}`;
    // const url = `http://localhost:9000/contents/${categoryId}?sort=${sort}&order=${order}&page=${page}&size=${size}`;
    const params = {
      sort: sort,
      order: order
    }
  return new Promise((resolve, reject) => {
    axios.get(url, { params, headers })
      .then((res) => {
        const items = res.data;

        const pagination = parsePagination(page, size);
        const contents = items.map((item) => parseContents(item));
        
        // console.log('before : ' + JSON.stringify(contents));
        resolve({
          pagination,
          contents
        });
      })
      .catch((e) => {
        reject(e);
      });
  });
}





