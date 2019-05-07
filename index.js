const puppeteer = require('puppeteer');

(async () => {
  let movieUrl = 'https://www.imdb.com/title/tt0848228/';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(movieUrl, { waitUntil: 'networkidle2'});  

  let data = await page.evaluate(() => {
    let title = document.querySelector('div[class=title_wrapper] > h1').innerText;
    let rating = document.querySelector('span[itemprop=ratingValue]').innerText;
    let ratingCount = document.querySelector('span[itemprop=ratingCount]').innerText;
    let duration = document.querySelector('time[datetime=PT143M]').innerText;

    return {
      title,
      rating,
      ratingCount,
      duration
    }
  });

  console.log(data, 'data');

  // debugger;

  await browser.close();

})();