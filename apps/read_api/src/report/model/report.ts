import { WeatherAgggregationDto } from '../repository/dto/weather.aggregation.dto';
import { Weather } from '../repository/weather.schema';

export class ReportModel {
  private avgTemperature: number;
  private minTemperature: number;
  private maxTemperature: number;
  private sumTemperature: number;
  private avgHumidity: number;
  private minHumidity: number;
  private maxHumidity: number;
  private sumHumidity: number;
  private avgWind_speed: number;
  private minWind_speed: number;
  private maxWind_speed: number;
  private sumWind_speed: number;
  private weatherData: Weather[];

  constructor(weatherData: WeatherAgggregationDto) {
    this.avgTemperature = weatherData.avgTemperature;
    this.minTemperature = weatherData.minTemperature;
    this.maxTemperature = weatherData.maxTemperature;
    this.sumTemperature = weatherData.sumTemperature;
    this.avgHumidity = weatherData.avgHumidity;
    this.minHumidity = weatherData.minHumidity;
    this.maxHumidity = weatherData.maxHumidity;
    this.sumHumidity = weatherData.sumHumidity;
    this.avgWind_speed = weatherData.avgWind_speed;
    this.minWind_speed = weatherData.minWind_speed;
    this.maxWind_speed = weatherData.maxWind_speed;
    this.sumWind_speed = weatherData.sumWind_speed;
    this.weatherData = weatherData.weatherData;
  }
}
