import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import { PropsWithChildren } from 'react'
import { LargeWidgetQueryQuery } from '../queries/large.generated'
import { MediumWidgetQueryQuery } from '../queries/medium.generated'
import { useWeatherQuery } from '../use-weather-query'
import { TempUnit, WeatherSize } from '../weather.types'

describe('query for getting weather', () => {
  it('returns current data for small widget', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: PropsWithChildren) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(
      () =>
        useWeatherQuery({
          lat: 60,
          lon: 25,
          name: 'Helsinki',
          size: WeatherSize.SMALL,
          timeZone: 'Europe/Helsinki',
          units: TempUnit.Celsius,
        }),
      { wrapper },
    )

    await waitFor(() =>
      expect(result.current.data?.getWeather?.current).toBeTruthy(),
    )
  })

  it('returns current data for medium widget', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: PropsWithChildren) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(
      () =>
        useWeatherQuery({
          lat: 60,
          lon: 25,
          name: 'Helsinki',
          size: WeatherSize.MEDIUM,
          timeZone: 'Europe/Helsinki',
          units: TempUnit.Celsius,
        }),
      { wrapper },
    )

    await waitFor(() => {
      expect(result.current.data?.getWeather?.current).toBeTruthy()
      expect(
        (result.current.data as MediumWidgetQueryQuery)?.getWeather?.hourly,
      ).toBeTruthy()
    })
  })

  it('returns current data for large widget', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: PropsWithChildren) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(
      () =>
        useWeatherQuery({
          lat: 60,
          lon: 25,
          name: 'Helsinki',
          size: WeatherSize.LARGE,
          timeZone: 'Europe/Helsinki',
          units: TempUnit.Celsius,
        }),
      { wrapper },
    )

    await waitFor(() => {
      expect(result.current.data?.getWeather?.current).toBeTruthy()
      expect(
        (result.current.data as LargeWidgetQueryQuery)?.getWeather?.hourly,
      ).toBeTruthy()
      expect(
        (result.current.data as LargeWidgetQueryQuery)?.getWeather?.daily,
      ).toBeTruthy()
    })
  })
})
