require('dotenv').config();
import axios from 'axios';

import { IToken } from 'interfaces/token.interface';
import { IBlocks } from 'interfaces/blocks.interface';
import { ICompareResponse } from 'interfaces/compareResponse.interface';

const BASE_URL = process.env.API_BASE_URL;

const validateError = () => {};

export class DataHttp {
  static getToken = async (email: string): Promise<string> => {
    try {
      const GET_TOKEN_URL = `${BASE_URL}/token?email=${email}`;
      const tokenResponse: { data: IToken } = await axios.get(GET_TOKEN_URL);
      return tokenResponse.data.token;
    } catch (err) {
      console.log('A problem occurred while trying to obtain the token.');
      return '';
    }
  };

  static getBlocks = async (token: string): Promise<string[]> => {
    try {
      const GET_BLOCK_URL = `${BASE_URL}/blocks?token=${token}`;
      const blocksResponse: { data: IBlocks } = await axios.get(GET_BLOCK_URL);
      return blocksResponse.data.data;
    } catch (err) {
      console.log('A problem occurred while trying to obtain the blocks.');
      return [];
    }
  };

  static login = async (email: string) => {
    const getTokenResponse = await this.getToken(email!);
    const getBlocksResponse = await this.getBlocks(getTokenResponse!);
    this.check(getBlocksResponse, getTokenResponse);
  };

  static compare = async (blocks: Array<string>, token: string, currentIndex: number = 0, nextIndex: number = 1) => {
    if (currentIndex <= blocks.length && nextIndex <= blocks.length) {
      let successIndex: number = 0;

      const CHECK_BLOCK_URL = `${BASE_URL}/check?token=${token}`;

      const blocksData = {
        blocks: [blocks[currentIndex], blocks[nextIndex]],
      };

      const validateBlocksResponse: { data: ICompareResponse } = await axios.post(CHECK_BLOCK_URL, blocksData);
      const validateBlocks = validateBlocksResponse.data.message;

      if (validateBlocks == false) {
        this.compare(blocks, token, currentIndex, nextIndex + 1);
      } else {
        console.table({ currentIndex, nextIndex });
        successIndex = nextIndex;

        [blocks[currentIndex + 1], blocks[successIndex]] = [blocks[successIndex], blocks[currentIndex + 1]];

        let nextEvalIndex = currentIndex + 1;
        nextIndex = nextEvalIndex + 1;

        this.compare(blocks, token, nextEvalIndex, nextIndex);
      }
    } else {
      this.validate(blocks, token);
    }
    return blocks;
  };

  static validate = async (blocks: Array<string>, token: string) => {
    const SEND_VALIDATE_URL = `${BASE_URL}/check?token=${token}`;
    const validateResponse: { data: ICompareResponse } = await axios.post(SEND_VALIDATE_URL, {
      encoded: blocks.join(''),
    });
    const validateMessage = validateResponse.data.message;
    console.log({ validateMessage });
  };

  static check = async (blocks: Array<string>, token: string) => {
    DataHttp.compare(blocks, token);
  };
}
