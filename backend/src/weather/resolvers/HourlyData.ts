import type { HourlyDataResolvers } from '../../types.generated'

export const HourlyData: HourlyDataResolvers = {
  condition: (_parent, _arg, _ctx) => {
    return _parent.hourly.weather_code.map((v) => v.toString())
  },
  temp: (_parent, _arg, _ctx) => {
    return _parent.hourly.temperature_2m.map((v) => Number(v.toFixed(0)))
  },
  time: (_parent, _arg, _ctx) => {
    return _parent.hourly.time.map((t) =>
      Number((new Date(t).getTime() / 1000).toFixed()),
    )
  },
  daylight: (_parent, _arg, _ctx) => {
    return _parent.hourly.is_day.map((v) => Boolean(v))
  },
}
