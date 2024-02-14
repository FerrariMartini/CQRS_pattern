import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportModel } from './model/report';
import {
  GetWeatherAllQueryDto,
  GetWeatherBySensorId,
} from './model/request.report.query.dto';

@Controller('report')
export class ReportController {
  constructor(private readonly service: ReportService) {}
  @Get()
  async getWeatherAll(
    @Query(new ValidationPipe({ transform: true }))
    query: GetWeatherAllQueryDto,
  ): Promise<ReportModel> {
    const { startDate, endDate } = query;
    return this.service.getAllWeather(startDate, endDate);
  }

  @Get('ids')
  async getWeatherBySensorId(
    @Query(new ValidationPipe({ transform: true }))
    query: GetWeatherBySensorId,
  ): Promise<ReportModel> {
    const { sensorIds, startDate, endDate } = query;
    return this.service.getWeatherBySensorIds(sensorIds, startDate, endDate);
  }
}
