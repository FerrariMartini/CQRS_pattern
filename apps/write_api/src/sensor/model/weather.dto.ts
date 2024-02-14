import { IsString, IsNumber } from 'class-validator';

export class WeatherDto {
  @IsString()
  sensor_id: string;

  @IsNumber()
  temperature: number;

  @IsNumber()
  humidity: number;

  @IsNumber()
  wind_speed: number;
}
