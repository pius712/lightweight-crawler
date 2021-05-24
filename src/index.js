const { fetchHtml } = require('./utils/fetch');
const { fetchHtmls } = require('./utils/fetch');
const { dummy } = require('./dummy');
const { isHtml } = require('./utils/dom');
const fs = require('fs').promises;
const { Document } = require('./dom');
// import fs from 'fs/promises';
console.log(__dirname);

async function main() {
  const responses = await fetchHtmls(
    'https://movie.naver.com/movie/bi/mi/basic.nhn',
    {
      params: dummy,
    }
  );
  responses.map((data) => {
    if (data && !isHtml(data)) {
      console.log(data);
      console.log('shit');
    } else {
      const document = new Document(data);
      console.log(document.getElementByClassName('count'));
    }
  });
}

main();
