import { IsDateString, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetWeatherAllQueryDto {
  @ApiProperty({
    type: String,
    description: 'Inital Date to query data. Formated: 2024-02-01',
  })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiProperty({
    type: String,
    description: 'End Date to query data. Formated: 2024-02-01',
  })
  @IsOptional()
  @IsDateString()
  endDate?: string;
}

export class GetWeatherBySensorId {
  @ApiProperty({
    type: String,
    description: 'Sensors ids to query data. Formated: s1,s2',
  })
  @IsString()
  sensorIds: string;

  @ApiProperty({
    type: String,
    description: 'Inital Date to query data. Formated: 2024-02-01',
  })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiProperty({
    type: String,
    description: 'End Date to query data. Formated: 2024-02-01',
  })
  @IsOptional()
  @IsDateString()
  endDate?: string;
}
