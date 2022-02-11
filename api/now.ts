import app from '../lib/app';

export default (req, res) => {
  app.callback()(req, res);
}