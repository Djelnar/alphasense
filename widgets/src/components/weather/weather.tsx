import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useRef } from 'react'
import { TempUnit } from '../../../types.generated'
import { useWeatherQuery } from './use-weather-query'
import { WeatherProps, WeatherSize, WeatherStyle } from './weather.types'
import { WeatherUI } from './weather-ui'

const WeatherInner: React.FC<WeatherProps> = ({
  lat,
  lon,
  style = WeatherStyle.FLAT,
  size = WeatherSize.MEDIUM,
  units = TempUnit.Celsius,
  name,
  timeZone,
}) => {
  const { data } = useWeatherQuery({
    size,
    lat,
    lon,
    name,
    timeZone,
    units,
  })

  return (
    <WeatherUI
      name={name}
      timeZone={timeZone}
      size={size}
      style={style}
      data={data?.getWeather}
    />
  )
}

export const Weather = (props: WeatherProps) => {
  const queryClient = useRef(new QueryClient())

  return (
    <QueryClientProvider client={queryClient.current}>
      <WeatherInner {...props} />
    </QueryClientProvider>
  )
}
