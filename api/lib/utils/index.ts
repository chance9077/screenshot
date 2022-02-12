export * from './puppeteer';

export const delay = async (duration: number) =>
  new Promise(resolve => setTimeout(resolve, duration));