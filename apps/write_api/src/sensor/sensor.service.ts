import { Injectable } from '@nestjs/common';
import { Weather } from './model/weather.schema';
import { SensorRepository } from './repository/sensor.repository';
import { WeatherDto } from './model/weather.dto';

@Injectable()
export class SensorService {
  constructor(private readonly repository: SensorRepository) {}
  async createWeather(data: WeatherDto): Promise<Weather> {
    const created = await this.repository.saveWeather(data);
    return created;
  }
}
