import type { CurrentDataResolvers } from '../../types.generated'

export const CurrentData: CurrentDataResolvers = {
  condition: async (_parent, _arg, _ctx) => {
    return _parent.current.weather_code.toString()
  },
  daylight: async (_parent, _arg, _ctx) => {
    return Boolean(_parent.current.is_day)
  },
  temp: async (_parent, _arg, _ctx) => {
    return Number(_parent.current.temperature_2m.toFixed(0))
  },
}
