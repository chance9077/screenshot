"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_mount_1 = __importDefault(require("koa-mount"));
const koa_favicon_1 = __importDefault(require("koa-favicon"));
const router_1 = __importDefault(require("./router"));
const app = new koa_1.default();
// favicon
app.use((0, koa_favicon_1.default)(`${__dirname}/favicon.png`));
// API router
app.use((0, koa_mount_1.default)('/api', router_1.default.routes())).use(router_1.default.allowedMethods());
exports.default = app;
