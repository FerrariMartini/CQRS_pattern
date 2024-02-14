import { Module } from '@nestjs/common';
import { SensorModule } from './sensor/sensor.module';
import { HealthService } from './health/health.app.service';
import { HealthController } from './health/health.app.controller';
import { MongooseModule } from '@nestjs/mongoose';

const DB_CONECTION = process.env.MONGO_URI || 'mongodb://localhost/db';

@Module({
  imports: [MongooseModule.forRoot(DB_CONECTION), SensorModule],
  controllers: [HealthController],
  providers: [HealthService],
})
export class AppModule {}
