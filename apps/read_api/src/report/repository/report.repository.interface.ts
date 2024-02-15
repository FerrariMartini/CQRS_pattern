import { WeatherAgggregationDto } from './dto/weather.aggregation.dto';

export interface IReportRepository {
  getWeatherBySensorIds(
    sensorIds: string[],
    startDate: Date,
    endDate: Date,
  ): Promise<WeatherAgggregationDto[]>;
  getWeatherbyAllSensorIds(
    startDate: Date,
    endDate: Date,
  ): Promise<WeatherAgggregationDto[]>;
}
