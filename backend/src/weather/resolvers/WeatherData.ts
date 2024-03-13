import { ContextValue } from 'src'
import type { WeatherDataResolvers } from '../../types.generated'

export const WeatherData: WeatherDataResolvers<ContextValue> = {
  current: async (_parent, _arg, _ctx) => {
    return _ctx.dataSources.weatherDataSource.getCurrentWeatherData(_parent)
  },
  daily: async (_parent, _arg, _ctx) => {
    return _ctx.dataSources.weatherDataSource.getDailyWeatherData(_parent)
  },
  hourly: async (_parent, _arg, _ctx) => {
    return _ctx.dataSources.weatherDataSource.getHourlyWeatherData(_parent)
  },
}
