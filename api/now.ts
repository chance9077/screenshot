import app from './lib/app';

export default (req: any, res: any) => {
  app.callback()(req, res);
}