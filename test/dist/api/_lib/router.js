"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const utils_1 = require("./utils");
const router = new router_1.default();
router.get('/hello', (ctx) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.body = 'server is running...';
});
router.get('/page', async (ctx) => {
    const { link } = ctx.query;
    if (link) {
        const browser = await (0, utils_1.pptr)();
        const page = await browser.newPage();
        await page.goto(Array.isArray(link) ? link[0] : link);
        await (0, utils_1.delay)(1000);
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
exports.default = router;
