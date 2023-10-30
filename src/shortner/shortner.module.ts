import { Module } from '@nestjs/common';
import { ShortnerService } from './shortner.service';
import { ShortnerController } from './shortner.controller';

@Module({
  controllers: [ShortnerController],
  providers: [ShortnerService],
})
export class ShortnerModule {}
