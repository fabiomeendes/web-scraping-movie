const puppeteer = require('puppeteer');

(async () => {
  let movieUrl = 'https://www.imdb.com/title/tt0848228/';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(movieUrl);  

  await browser.close();
})();