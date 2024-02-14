export interface IReportRepository {
  getWeatherBySensorIds(
    sensorIds: string[],
    startDate: Date,
    endDate: Date,
  ): Promise<any>;
  getWeatherbyAllSensorIds(startDate: Date, endDate: Date): Promise<any>;
}
