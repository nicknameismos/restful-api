import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoinmarketcapModule } from './coinmarketcap/coinmarketcap.module';
import { CoinmarketcapService } from './coinmarketcap/coinmarketcap.service';
import { CoinmarketcapController } from './coinmarketcap/coinmarketcap.controller';

@Module({
  imports: [CoinmarketcapModule],
  controllers: [AppController, CoinmarketcapController],
  providers: [AppService, CoinmarketcapService],
})
export class AppModule {}
