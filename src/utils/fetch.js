const axios = require('axios');
const fetchData = require('./fetchData');

const fetchHtml = async (baseUrl, { params }) => {
  try {
    return await axios.get(baseUrl, {
      params,
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

const fetchHtmls = async (baseUrl, { params }) => {
  try {
    console.log('=======fetch htmls', params);
    return Promise.allSettled(
      params.map((param) => {
        return axios.get(baseUrl, param);
      })
    ).then((result) => {
      console.dir(result, { depth: 1 });
      return result.map((item) => item.value?.data);
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

module.exports = {
  fetchHtml,
  fetchHtmls,
};
