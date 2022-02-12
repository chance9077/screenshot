"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const now_1 = __importDefault(require("../api/now"));
const hostname = 'localhost';
const port = 8080;
const server = http_1.default.createServer(now_1.default);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
