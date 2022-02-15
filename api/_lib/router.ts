import Router from '@koa/router';
import { pptr } from './utils';

const router = new Router();

router.get('/hello', (ctx) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.body = 'server is running...';
});

router.get('/page', async (ctx) => {
  const { link } = ctx.query;

  if (link) {
    const browser = await pptr();
    const page = await browser.newPage();
    await page.goto(Array.isArray(link) ? link[0] : link);

    const img = await page.screenshot({
      fullPage: true,
      type: 'webp',
      quality: 1,
      encoding: 'base64'
    });
  
    browser.close();
  
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.type = 'text/html';
    ctx.body = `
      <!DOCTYPE>
      <html>
        <body>
          <img src="data:image/webp;base64,${img}" />
        </body>
      </html>
    `;

    return;
  }

  ctx.body = 'error params.';
});

export default router;