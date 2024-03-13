import { Maybe } from '../../../types.generated'
import WMOCodeImages from './wmo-code-images.json'

export function formatTemperature(temperature?: Maybe<number>) {
  if (temperature == null) {
    return '-'
  }
  return `${temperature}º`
}

export function formatWeekday(timeZone: string, time?: Maybe<number>) {
  if (time == null) {
    return '-'
  }
  return new Date(time * 1000).toLocaleString([], {
    weekday: 'short',
    timeZone,
  })
}

export function formatHour(timeZone: string, time?: Maybe<number>) {
  if (time == null) {
    return '-'
  }
  return new Date(time * 1000).toLocaleString([], {
    hour: 'numeric',
    hour12: false,
    timeZone,
  })
}

export function getWeatherConditionImageAndDescription(
  condition: Maybe<string> = null,
  daylight: Maybe<boolean> = false,
) {
  const daylightProp = daylight ? 'day' : 'night'
  const conditionImageObject =
    WMOCodeImages?.[condition as keyof typeof WMOCodeImages]
  const conditionImageURL =
    conditionImageObject?.[daylightProp]?.image ?? WMOCodeImages[0].night.image
  const conditionImageDescription =
    conditionImageObject?.[daylightProp]?.description ?? '-'

  return {
    conditionImageURL,
    conditionImageDescription,
  }
}
