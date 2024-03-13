import { useQuery } from '@tanstack/react-query'
import { DocumentNode } from 'graphql'
import { request } from 'graphql-request'
import { useMemo } from 'react'
import {
  LargeWidgetQueryDocument,
  LargeWidgetQueryQuery,
  LargeWidgetQueryQueryVariables,
} from './queries/large.generated'
import {
  MediumWidgetQueryDocument,
  MediumWidgetQueryQuery,
} from './queries/medium.generated'
import {
  SmallWidgetQueryDocument,
  SmallWidgetQueryQuery,
} from './queries/small.generated'
import { TempUnit, WeatherSize } from './weather.types'

const QUERY_BY_SIZE = {
  [WeatherSize.LARGE]: LargeWidgetQueryDocument,
  [WeatherSize.MEDIUM]: MediumWidgetQueryDocument,
  [WeatherSize.SMALL]: SmallWidgetQueryDocument,
} satisfies { [key in WeatherSize]: DocumentNode }

export const useWeatherQuery = ({
  size,
  lat,
  lon,
  name,
  timeZone,
  units,
}: {
  size: WeatherSize
  lat: number
  lon: number
  timeZone: string
  name: string
  units: TempUnit
}) => {
  const queryToUse = useMemo(() => QUERY_BY_SIZE[size], [size])
  const { error, data } = useQuery({
    refetchInterval: 1000 * 60 * 15,
    retry: true,
    queryKey: ['weatherData', lat, lon, timeZone, name, size, units],
    queryFn: () =>
      request<
        LargeWidgetQueryQuery | MediumWidgetQueryQuery | SmallWidgetQueryQuery,
        LargeWidgetQueryQueryVariables
      >(
        process.env.API_URL ??
          `http://${globalThis?.location?.hostname ?? 'localhost'}:4000/graphql`,
        queryToUse,
        {
          lat,
          lon,
          tempUnit: units,
        },
      ),
  })

  return { data, error }
}
