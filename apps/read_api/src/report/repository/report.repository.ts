import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IReportRepository } from './report.repository.interface';
import { WeatherAgggregationDto } from './dto/weather.aggregation.dto';
import { Weather } from './weather.schema';

interface IBuildAggregationParams {
  sensorIds?: string[];
  startDate: Date;
  endDate: Date;
}

@Injectable()
export class ReportRepository implements IReportRepository {
  constructor(
    @InjectModel('Weather') private readonly weatherModel: Model<Weather>,
  ) {}
  async getWeatherBySensorIds(
    sensorIds: string[],
    startDate: Date,
    endDate: Date,
  ): Promise<WeatherAgggregationDto[]> {
    const aggregationPipeline = this.buildAggregation({
      sensorIds,
      startDate,
      endDate,
    });
    return this.weatherModel.aggregate(aggregationPipeline).exec();
  }

  async getWeatherbyAllSensorIds(
    startDate: Date,
    endDate: Date,
  ): Promise<WeatherAgggregationDto[]> {
    const aggregationPipeline = this.buildAggregation({ startDate, endDate });
    return this.weatherModel.aggregate(aggregationPipeline).exec();
  }

  private buildAggregation({
    sensorIds = [],
    startDate,
    endDate,
  }: IBuildAggregationParams): any[] {
    const groupFields: any = {};

    Object.keys(this.weatherModel.schema.obj).forEach((key) => {
      if (key !== 'sensor_id' && key !== 'createdAt') {
        groupFields[`avg${key.charAt(0).toUpperCase() + key.slice(1)}`] = {
          $avg: `$${key}`,
        };
        groupFields[`min${key.charAt(0).toUpperCase() + key.slice(1)}`] = {
          $min: `$${key}`,
        };
        groupFields[`max${key.charAt(0).toUpperCase() + key.slice(1)}`] = {
          $max: `$${key}`,
        };
        groupFields[`sum${key.charAt(0).toUpperCase() + key.slice(1)}`] = {
          $sum: `$${key}`,
        };
      }
    });

    const hasSensorIds = sensorIds.length > 0;

    return [
      {
        $match: {
          ...(hasSensorIds && { sensor_id: { $in: sensorIds } }),
          createdAt: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $group: {
          _id: null,
          ...groupFields,
          weatherData: { $push: '$$ROOT' },
        },
      },
    ];
  }
}
