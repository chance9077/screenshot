import Router from '@koa/router';
import pptr from './utils/puppeteer';

const router = new Router();

router.get('/hello', (ctx) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.body = 'server is running...';
});

router.get('/page', async (ctx) => {
  const { link } = ctx.query;

  if (link) {
    const browser = await pptr();
    // const page = await browser.newPage();
    // await page.goto(Array.isArray(link) ? link[0] : link);
    
    // await new Promise(resolve => setTimeout(() => resolve(''), 1.5 * 1000));

    // const img = await page.screenshot({
    //   fullPage: true,
    //   type: 'webp',
    //   quality: 50
    // });
  
    browser.close();
  
    ctx.set('Access-Control-Allow-Origin', '*');
    // ctx.type = 'image/webp';
    // ctx.body = img;
    ctx.body = link;

    return;
  }

  ctx.body = 'error params.';
});

export default router;