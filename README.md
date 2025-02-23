# Weather Data System

## Overview
This project is designed to receive, store, and query weather data while providing statistical insights—such as minimum, maximum, sum, and average values—for key attributes like temperature and humidity.

## Index
- Project
- Development Approach
- How to Run the Github Project
- Improvements

## Project
The system efficiently manages weather data by:
- **Ingesting:** Receiving and storing weather data.
- **Querying:** Providing statistical insights (min, max, sum, average) for temperature, humidity, and other metrics.

## Development Approach
We adopted the **CQRS (Command Query Responsibility Segregation)** pattern and structured the project as a monorepo with two separate applications:

- **Application 01 (Write API):** Responsible for ingesting and storing data in the database.
- **Application 02 (Read API):** Focuses on retrieving data from the database.

### Key Benefits
- **Scalability:** Each application (Write API or Read API) can be scaled independently according to varying request volumes.
- **Extensibility:** Easily integrate additional features such as an API Gateway, Load Balancer, and SQS to enhance resilience and secure data access through client authorization validation.

### Database Choice: MongoDB
We chose MongoDB because it:
- **Accommodates Dynamic Data:** Easily incorporates new attributes into the entity model.
- **Optimizes Query Performance:** Provides superior performance through optimized indexing and querying capabilities.
  
![image](https://github.com/user-attachments/assets/ae14d441-c02e-43ce-8923-2d18baee0800)

For more details on the CQRS pattern, refer to [AWS Prescriptive Guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-data-persistence/cqrs-pattern.html).

## How to Run the Github Project
To run this project on your local machine, Docker Compose is used to ensure all applications (Write API, Read API, and MongoDB) work correctly.

### Prerequisites
- **Docker**
- **Docker Compose (v3.8)**

### Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/FerrariMartini/952aebd6-fbd7-44fc-809e-057989fb07a9
   ```

2. **Start the Application Containers:**
   ```bash
   docker compose up (Using the new Docker Compose syntax)
   docker-compose up (Or using the old Docker Compose syntax)
   ```
   This command builds Docker images for all services defined in the docker-compose.yml file, starts the containers, and seeds the database using the init-mongo.js file.

3. **Stop the Containers:**
   ```bash
   docker compose down (Using the new Docker Compose syntax)
   docker-compose down (Or using the old Docker Compose syntax)
   ```
4. **Accessing the Applications and Data:**
  After starting the containers, you can explore the API endpoints via Swagger:
   ```bash
     Write API: http://localhost:4000/api/
     Read API: http://localhost:5000/api/
   ```
   
5. **Example of Requests:**

   5.1 Create Weather Entry:
   ```bash
   curl --location 'http://localhost:4000/api/weather' \
   --header 'Content-Type: application/json' \
   --data '{
    "sensor_id": "s10",
    "temperature": 60,
    "humidity": 80,
    "wind_speed": 100
   }'
   ```
  
   5.2 Retrieve Data by Sensor IDs:
   ```bash
   curl --location 'http://localhost:5000/api/report/ids?sensorIds=s3,s10&startDate=2024-02-01&endDate=2024-02-15'
   ```
  
   5.3 Retrieve Data by All Sensors:
   ```bash
   curl --location 'http://localhost:5000/api/report/?startDate=2024-02-01&endDate=2024-02-15'
   ````

6. **Improvements:**
- Testing: Implement additional tests to ensure robust functionality.
- Documentation: Enhance Swagger documentation for improved API clarity.
- Scalability Analysis: Collect more detailed information about sensor data volumes to refine our implementation approach and architectural design.
- Production Readiness: Improve the Docker configuration to better support production deployments.
