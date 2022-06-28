"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataHttp = void 0;
require('dotenv').config();
const axios_1 = __importDefault(require("axios"));
const BASE_URL = process.env.API_BASE_URL;
const validateError = () => { };
class DataHttp {
    static getToken = async (email) => {
        try {
            const GET_TOKEN_URL = `${BASE_URL}/token?email=${email}`;
            const tokenResponse = await axios_1.default.get(GET_TOKEN_URL);
            return tokenResponse.data.token;
        }
        catch (err) {
            console.log('A problem occurred while trying to obtain the token.');
            return '';
        }
    };
    static getBlocks = async (token) => {
        try {
            const GET_BLOCK_URL = `${BASE_URL}/blocks?token=${token}`;
            const blocksResponse = await axios_1.default.get(GET_BLOCK_URL);
            return blocksResponse.data.data;
        }
        catch (err) {
            console.log('A problem occurred while trying to obtain the blocks.');
            return [];
        }
    };
    static login = async (email) => {
        const getTokenResponse = await this.getToken(email);
        const getBlocksResponse = await this.getBlocks(getTokenResponse);
        this.check(getBlocksResponse, getTokenResponse);
    };
    static compare = async (blocks, token, currentIndex = 0, nextIndex = 1) => {
        if (currentIndex <= blocks.length && nextIndex <= blocks.length) {
            let successIndex = 0;
            const CHECK_BLOCK_URL = `${BASE_URL}/check?token=${token}`;
            const blocksData = {
                blocks: [blocks[currentIndex], blocks[nextIndex]],
            };
            const validateBlocksResponse = await axios_1.default.post(CHECK_BLOCK_URL, blocksData);
            const validateBlocks = validateBlocksResponse.data.message;
            if (validateBlocks == false) {
                this.compare(blocks, token, currentIndex, nextIndex + 1);
            }
            else {
                console.table({ currentIndex, nextIndex });
                successIndex = nextIndex;
                [blocks[currentIndex + 1], blocks[successIndex]] = [blocks[successIndex], blocks[currentIndex + 1]];
                let nextEvalIndex = currentIndex + 1;
                nextIndex = nextEvalIndex + 1;
                this.compare(blocks, token, nextEvalIndex, nextIndex);
            }
        }
        else {
            this.validate(blocks, token);
        }
        return blocks;
    };
    static validate = async (blocks, token) => {
        const SEND_VALIDATE_URL = `${BASE_URL}/check?token=${token}`;
        const validateResponse = await axios_1.default.post(SEND_VALIDATE_URL, {
            encoded: blocks.join(''),
        });
        const validateMessage = validateResponse.data.message;
        console.log({ validateMessage });
    };
    static check = async (blocks, token) => {
        DataHttp.compare(blocks, token);
    };
}
exports.DataHttp = DataHttp;
