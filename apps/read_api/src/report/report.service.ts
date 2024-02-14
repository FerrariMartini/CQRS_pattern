import { Injectable, NotFoundException } from '@nestjs/common';
import { ReportRepository } from './repository/report.repository';
import { ReportModel } from './model/report';

@Injectable()
export class ReportService {
  constructor(private readonly repository: ReportRepository) {}

  async getWeatherBySensorIds(
    ids: string,
    startDate: string,
    endDate: string,
  ): Promise<ReportModel> {
    const parsedIds = ids.split(',');
    const parsedStartDate = startDate
      ? new Date(startDate)
      : this.createStartDate();
    const parsedEndDate = endDate ? new Date(endDate) : this.createEndDate();
    const weatherData = await this.repository.getWeatherBySensorIds(
      parsedIds,
      parsedStartDate,
      parsedEndDate,
    );
    if (!weatherData || weatherData.length === 0) {
      throw new NotFoundException('Weather data not found');
    }
    return new ReportModel(weatherData[0]);
  }

  async getAllWeather(
    startDate: string,
    endDate: string,
  ): Promise<ReportModel> {
    const parsedStartDate = startDate
      ? new Date(startDate)
      : this.createStartDate();
    const parsedEndDate = endDate ? new Date(endDate) : this.createEndDate();

    const weatherData = await this.repository.getWeatherbyAllSensorIds(
      parsedStartDate,
      parsedEndDate,
    );
    if (!weatherData || weatherData.length === 0) {
      throw new NotFoundException('Weather data not found');
    }

    return new ReportModel(weatherData[0]);
  }

  private createStartDate() {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate());
  }
  private createEndDate() {
    const today = new Date();
    return new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      23,
      59,
      59,
      999,
    );
  }
}
