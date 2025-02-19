export class CurrentWeatherData {
    current: {
        temperature_2m: number;
        relative_humidity_2m: number;
        cloud_cover: number;
        pressure_msl: number;
        wind_speed_10m: number;
      };
    
      constructor(data?: any) {
        this.current = data?.current ? {
          temperature_2m: data.current.temperature_2m || 0,
          relative_humidity_2m: data.current.relative_humidity_2m || 0,
          cloud_cover: data.current.cloud_cover || 0,
          pressure_msl: data.current.pressure_msl || 0,
          wind_speed_10m: data.current.wind_speed_10m || 0,
        } : {
          temperature_2m: 0,
          relative_humidity_2m: 0,
          cloud_cover: 0,
          pressure_msl: 0,
          wind_speed_10m: 0,
        };
      }
}
