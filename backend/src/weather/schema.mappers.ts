import { QuerygetWeatherArgs, RequireFields } from 'src/types.generated'

export interface CurrentDataMapper {
  current: {
    time: string
    temperature_2m: number
    is_day: 1 | 0
    weather_code: number
  }
}
export interface HourlyDataMapper {
  hourly: {
    time: string[]
    temperature_2m: number[]
    weather_code: number[]
    is_day: (1 | 0)[]
  }
}
export interface DailyDataMapper {
  daily: {
    time: string[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    weather_code: number[]
  }
}

export type WeatherDataMapper = RequireFields<QuerygetWeatherArgs, 'tempUnit'>
