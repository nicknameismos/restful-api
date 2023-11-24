/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CoinmarketcapService {
  async getCryptoData(): Promise<any> {
    try {
      const API_KEY = '12a8d4ca-0eec-440b-a969-fe3017ceaee3';
      const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
      const response = await axios.get(url, {
        headers: {
          'X-CMC_PRO_API_KEY': API_KEY,
        },
        params: {
          limit: 100,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error fetching data');
    }
  }
}
