import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISensorRepository } from './sensor.repository.interface';
import { WeatherDto } from '../model/weather.dto';
import { Weather } from '../model/weather.schema';

@Injectable()
export class SensorRepository implements ISensorRepository {
  constructor(
    @InjectModel('Weather') private readonly weatherModel: Model<Weather>,
  ) {}
  async saveWeather(data: WeatherDto): Promise<Weather> {
    const createdWeather = new this.weatherModel(data);
    return await createdWeather.save();
  }
}
