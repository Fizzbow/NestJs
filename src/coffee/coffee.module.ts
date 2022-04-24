import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';

@Module({
    imports:[CoffeeModule],
    controllers:[AppController],
    providers:[AppService]
})
export class CoffeeModule {}
