"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pptr = void 0;
const chrome_aws_lambda_1 = __importDefault(require("chrome-aws-lambda"));
const puppeteer_core_1 = __importDefault(require("puppeteer-core"));
const options = async () => process.env.NODE_ENV === 'development'
    ? {
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        headless: false,
        ignoreHTTPSErrors: true
    } : {
    args: chrome_aws_lambda_1.default.args,
    executablePath: await chrome_aws_lambda_1.default.executablePath,
    headless: chrome_aws_lambda_1.default.headless,
    ignoreHTTPSErrors: true
};
const pptr = async () => {
    const browser = await puppeteer_core_1.default.launch(await options());
    setTimeout(() => browser.close(), 10 * 1000);
    return browser;
};
exports.pptr = pptr;
