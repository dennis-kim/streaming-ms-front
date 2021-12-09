import axios from 'axios';

const DOMAIN = 'msnas.i234.me';
const PORT = '9000';

function getHeaders() {
    return {
      Accept: 'application/json',
    };
}

function parseContents(item) {
  const contentsName = item.contents_name;
  const subContentsName = item.sub_contents_name;
  const genre = item.genre;
  const actors = item.actors;
  const thumbnailURL = item.thumbnail_url;
  const categoryName = item.category_name;
  const contentsPath = item.contents_path;
  const modifyDate = item.modify_date;

  return {
    contentsName,
    subContentsName,
    genre,
    actors,
    thumbnailURL,
    categoryName,
    contentsPath,
    modifyDate,
  };
}

function parseGenres(item) {
  const genreId = item.genre_id;
  const genre = item.genre;
  const isClick = false;

  return {
    genreId,
    genre,
    isClick,
  };
}

function parseSeries(item) {
  const seriesId = item.series_id;
  const seriesName = item.series_name;
  const isClick = false;

  return {
    seriesId,
    seriesName,
    isClick,
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

export function getContents(categoryId, seriesId, sort, order, page='1', size='10') {
    const headers = getHeaders();
    let url = `http://${DOMAIN}:${PORT}`;
    url += `/contents/${categoryId}`
    url += `?`

    if(seriesId > 0) {
      url += `&series=${seriesId}`
    }

    url += `&sort=${sort}&order=${order}&page=${page}&size=${size}`;

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

export function getGenres(categoryId) {
    const headers = getHeaders();
    const url = `http://${DOMAIN}:${PORT}/genres/${categoryId}`;
  return new Promise((resolve, reject) => {
    axios.get(url, { headers })
      .then((res) => {
        const items = res.data;

        const genres = items.map((item) => parseGenres(item));
        resolve({
          genres
        });
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export function getSeries(categoryId) {
  const headers = getHeaders();
  const url = `http://${DOMAIN}:${PORT}/series/${categoryId}`;
  return new Promise((resolve, reject) => {
    axios.get(url, { headers })
      .then((res) => {
        const items = res.data;

        const series = items.map((item) => parseSeries(item));
        resolve({
          series
        });
      })
      .catch((e) => {
        reject(e);
      });
  });
}