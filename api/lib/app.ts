import Koa from 'koa';

const hello = (ctx: Koa.Context) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.body = 'hello world!';
}

const app = new Koa();

app.use(hello);

export default app;
