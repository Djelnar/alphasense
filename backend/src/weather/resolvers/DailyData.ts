import type { DailyDataResolvers } from '../../types.generated'

export const DailyData: DailyDataResolvers = {
  condition: (_parent, _arg, _ctx) => {
    return _parent.daily.weather_code.map((v) => v.toString())
  },
  maxTemp: (_parent, _arg, _ctx) => {
    return _parent.daily.temperature_2m_max.map((t) => Number(t.toFixed(0)))
  },
  minTemp: (_parent, _arg, _ctx) => {
    return _parent.daily.temperature_2m_min.map((t) => Number(t.toFixed(0)))
  },
  time: (_parent, _arg, _ctx) => {
    return _parent.daily.time.map((t) =>
      Number((new Date(t).getTime() / 1000).toFixed()),
    )
  },
}
