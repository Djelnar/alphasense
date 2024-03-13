import { RESTDataSource } from '@apollo/datasource-rest'
import { QuerygetWeatherArgs, RequireFields } from 'src/types.generated'

type WeatherQueryParams = RequireFields<QuerygetWeatherArgs, 'tempUnit'>
export class WeatherDataSource extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api.open-meteo.com/v1/'
  }

  async getCurrentWeatherData({ lat, lon, tempUnit }: WeatherQueryParams) {
    const params = new URLSearchParams({
      latitude: String(lat),
      longitude: String(lon),
      temperature_unit: tempUnit,
      current: ['temperature_2m', 'is_day', 'weather_code'].join(','),
    })
    return this.get<{
      current: {
        time: string
        temperature_2m: number
        is_day: 1 | 0
        weather_code: number
      }
    }>(`forecast`, { params })
  }

  async getHourlyWeatherData({ lat, lon, tempUnit }: WeatherQueryParams) {
    const params = new URLSearchParams({
      latitude: String(lat),
      longitude: String(lon),
      temperature_unit: tempUnit,
      hourly: ['temperature_2m', 'is_day', 'weather_code'].join(','),
      past_hours: '0',
      forecast_hours: '7',
    })
    return this.get<{
      hourly: {
        time: string[]
        temperature_2m: number[]
        weather_code: number[]
        is_day: (1 | 0)[]
      }
    }>(`forecast`, { params })
  }

  async getDailyWeatherData({ lat, lon, tempUnit }: WeatherQueryParams) {
    const params = new URLSearchParams({
      latitude: String(lat),
      longitude: String(lon),
      temperature_unit: tempUnit,
      daily: ['temperature_2m_max', 'temperature_2m_min', 'weather_code'].join(
        ',',
      ),
      forecast_days: '6',
    })
    return this.get<{
      daily: {
        time: string[]
        weather_code: number[]
        temperature_2m_max: number[]
        temperature_2m_min: number[]
      }
    }>(`forecast`, { params })
  }
}
