import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { TransactionResponse } from './app.const';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/health')
  getHealth(): { status: string; timestamp: string } {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('txs-from-block/:blockId')
  getTransactionsFromBlock(@Param('blockId') blockId: string): Promise<TransactionResponse> {
    return this.appService.getTransactionsFromBlock(blockId);
  }
}
