"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const data_http_1 = require("./http/data.http");
const router = express_1.default.Router();
const app = (0, express_1.default)();
const testEmail = 'fmonrroyv@gmail.com';
router.get('/login', (req, res, next) => {
    data_http_1.DataHttp.login(testEmail);
});
app.use('/', router);
app.listen(8888, () => {
    console.log(`server running on port 8888`);
});
