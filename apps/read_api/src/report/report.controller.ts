import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportModel } from './model/report';
import { ApiCreatedResponse, ApiQuery } from '@nestjs/swagger';
import {
  GetWeatherAllQueryDto,
  GetWeatherBySensorId,
} from './model/request.report.query.dto';

@Controller('report')
export class ReportController {
  constructor(private readonly service: ReportService) {}
  @Get()
  @ApiCreatedResponse({
    description:
      'Retrieve all weather sensor data from the database within a specified date range.',
  })
  @ApiQuery({ type: GetWeatherAllQueryDto })
  async getWeatherAll(
    @Query(new ValidationPipe({ transform: true }))
    query: GetWeatherAllQueryDto,
  ): Promise<ReportModel> {
    const { startDate, endDate } = query;
    return this.service.getAllWeather(startDate, endDate);
  }

  @Get('ids')
  @ApiCreatedResponse({
    description:
      'Retrieve sensors data by sensors id from the database within a specified date range.',
  })
  @ApiQuery({ type: GetWeatherBySensorId })
  async getWeatherBySensorId(
    @Query(new ValidationPipe({ transform: true }))
    query: GetWeatherBySensorId,
  ): Promise<ReportModel> {
    const { sensorIds, startDate, endDate } = query;
    return this.service.getWeatherBySensorIds(sensorIds, startDate, endDate);
  }
}
