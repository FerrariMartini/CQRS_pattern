import { Module } from '@nestjs/common';
import { HealthService } from './health/health.app.service';
import { HealthController } from './health/health.app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportModule } from './report/report.module';

const DB_CONECTION = process.env.MONGO_URI || 'mongodb://localhost/db';

@Module({
  imports: [MongooseModule.forRoot(DB_CONECTION), ReportModule],
  controllers: [HealthController],
  providers: [HealthService],
})
export class AppModule {}
