import puppeteer from 'puppeteer';

const options = {
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-infobars', '--window-position=0,0', '--ignore-certifcate-errors', '--ignore-certifcate-errors-spki-list',],
  headless: true,
  ignoreHTTPSErrors: true
};

const pptr = async () => {
  const browser = await puppeteer.launch(options);
  setTimeout(() => browser.close(), 30 * 1000);
  return browser;
}

export default pptr;