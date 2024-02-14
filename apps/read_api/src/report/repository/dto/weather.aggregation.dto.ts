export interface WeatherAgggregationDto {
  _id: null;
  avgTemperature: number;
  minTemperature: number;
  maxTemperature: number;
  sumTemperature: number;
  avgHumidity: number;
  minHumidity: number;
  maxHumidity: number;
  sumHumidity: number;
  avgWind_speed: number;
  minWind_speed: number;
  maxWind_speed: number;
  sumWind_speed: number;
  weatherData: {
    _id: string;
    sensor_id: string;
    temperature: number;
    humidity: number;
    wind_speed: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];
}
