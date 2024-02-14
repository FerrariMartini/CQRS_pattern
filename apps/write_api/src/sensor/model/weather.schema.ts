import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class Weather {
  @Prop({ required: true })
  sensor_id: string;
  @Prop({ required: true })
  temperature: number;
  @Prop({ required: true })
  humidity: number;
  @Prop({ required: true })
  wind_speed: number;
}

export type WeatherDocument = HydratedDocument<Weather>;
export const WeatherSchema = SchemaFactory.createForClass(Weather);
