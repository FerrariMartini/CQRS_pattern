import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { WeatherDto } from './model/weather.dto';
import { Weather } from './model/weather.schema';

@Controller('weather')
export class SensorController {
  constructor(private readonly service: SensorService) {}

  @Post()
  async saveWeatherData(
    @Body(ValidationPipe) weatherDto: WeatherDto,
  ): Promise<Weather> {
    return this.service.createWeather(weatherDto);
  }
}
