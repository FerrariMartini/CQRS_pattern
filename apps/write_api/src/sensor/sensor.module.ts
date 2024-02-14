import { Module } from '@nestjs/common';
import { SensorController } from './sensor.controller';
import { SensorService } from './sensor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Weather, WeatherSchema } from './model/weather.schema';
import { SensorRepository } from './repository/sensor.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Weather.name, schema: WeatherSchema }]),
  ],
  controllers: [SensorController],
  providers: [SensorService, SensorRepository],
})
export class SensorModule {}
