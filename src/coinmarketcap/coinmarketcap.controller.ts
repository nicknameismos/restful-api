import { Controller, Get } from '@nestjs/common';
import { CoinmarketcapService } from './coinmarketcap.service';

@Controller('coinmarketcap')
export class CoinmarketcapController {
  constructor(private readonly coinmarketcapService: CoinmarketcapService) {}

  @Get()
  async getCryptoData(): Promise<any> {
    return this.coinmarketcapService.getCryptoData();
  }
}
