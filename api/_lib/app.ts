import Koa from 'koa';
import mount from 'koa-mount';
import favicon from 'koa-favicon';
import router from './router';

const app = new Koa();

// favicon
app.use(favicon(`${__dirname}/favicon.png`));

// API router
app.use(mount('/api', router.routes())).use(router.allowedMethods());

export default app;
