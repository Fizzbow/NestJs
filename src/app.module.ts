import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeController } from './coffee/coffee.controller';
import { CoffeeService } from './coffee/coffee.service';
import { CoffeeModule } from './coffee/coffee.module';

@Module({
  controllers: [AppController, CoffeeController],
  providers: [AppService, CoffeeService],
  imports: [CoffeeModule],
})
export class AppModule {}
