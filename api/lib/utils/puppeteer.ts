import puppeteer from 'puppeteer';

const options = {
  headless: false
};

const pptr = async () => {
  const browser = await puppeteer.launch(options);
  setTimeout(() => browser.close(), 30 * 1000);
  return browser;
}

export default pptr;