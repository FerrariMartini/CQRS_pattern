import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { WeatherDto } from './model/weather.dto';
import { Weather } from './model/weather.schema';
import { ApiCreatedResponse, ApiBody } from '@nestjs/swagger';

@Controller('weather')
export class SensorController {
  constructor(private readonly service: SensorService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Save weather data collected by sensors' })
  @ApiBody({ type: WeatherDto })
  async saveWeatherData(
    @Body(ValidationPipe) weatherDto: WeatherDto,
  ): Promise<Weather> {
    return this.service.createWeather(weatherDto);
  }
}
