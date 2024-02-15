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
    const parsedStartDate = this.createStartDate(startDate);
    const parsedEndDate = this.createEndDate(startDate, endDate);

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
    const parsedStartDate = this.createStartDate(startDate);
    const parsedEndDate = this.createEndDate(startDate, endDate);

    const weatherData = await this.repository.getWeatherbyAllSensorIds(
      parsedStartDate,
      parsedEndDate,
    );
    if (!weatherData || weatherData.length === 0) {
      throw new NotFoundException('Weather data not found');
    }

    return new ReportModel(weatherData[0]);
  }

  private createStartDate(startDate: string) {
    if (!startDate) {
      const today = new Date();
      today.setUTCHours(0, 0, 0, 0);
      return today as Date;
    }
    return new Date(startDate);
  }

  private createEndDate(startDate: string, endDate: string) {
    if (!startDate || !endDate) {
      const todayEnd = new Date();
      todayEnd.setUTCHours(23, 59, 59, 999);
      return todayEnd as Date;
    }

    const dateEnd = new Date(endDate);
    dateEnd.setUTCHours(23, 59, 59, 999);
    return dateEnd as Date;
  }
}
