import { WeatherDto } from '../model/weather.dto';
import { Weather } from '../model/weather.schema';

export interface ISensorRepository {
  saveWeather(data: WeatherDto): Promise<Weather>;
}
