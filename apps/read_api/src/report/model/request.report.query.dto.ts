import { IsDateString, IsOptional, IsString } from 'class-validator';

export class GetWeatherAllQueryDto {
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;
}

export class GetWeatherBySensorId {
  @IsString()
  sensorIds: string;

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;
}
