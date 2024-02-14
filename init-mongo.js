db = db.getSiblingDB('db');

db.weathers.insertMany([
  {
    sensor_id: 's1',
    temperature: 20,
    humidity: 100,
    wind_speed: 50,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sensor_id: 's1',
    temperature: 100,
    humidity: 50,
    wind_speed: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sensor_id: 's2',
    temperature: 1240,
    humidity: 20,
    wind_speed: 350,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sensor_id: 's2',
    temperature: 20,
    humidity: 100,
    wind_speed: 50,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]);

print('Weather data seeded successfully');
