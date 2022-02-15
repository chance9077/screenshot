import chromium from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

const options = async () =>
  process.env.NODE_ENV === 'development'
    ? {
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      headless: false,
      ignoreHTTPSErrors: true
    } : {
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true
    };

export const pptr = async () => {
  const browser = await puppeteer.launch(await options());
  setTimeout(() => browser.close(), 10 * 1000);
  return browser;
}