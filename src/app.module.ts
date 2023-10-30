import { Module } from '@nestjs/common';
import { ShortnerModule } from './shortner/shortner.module';

@Module({
  imports: [ShortnerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
