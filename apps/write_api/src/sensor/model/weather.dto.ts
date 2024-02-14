import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class WeatherDto {
  @ApiProperty({
    type: String,
    description: 'sensor Id which collect the data',
  })
  @IsString()
  sensor_id: string;

  @ApiProperty({ type: Number, description: 'weather temperature' })
  @IsNumber()
  temperature: number;

  @ApiProperty({ type: Number, description: 'weather humidity' })
  @IsNumber()
  humidity: number;

  @ApiProperty({ type: Number, description: 'weather wind speed' })
  @IsNumber()
  wind_speed: number;
}
