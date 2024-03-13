import { ApolloServer } from '@apollo/server'
import assert from 'assert'
import { ContextValue } from '..'
import { resolvers } from '../resolvers.generated'
import { typeDefs } from '../typeDefs.generated'
import { WeatherDataSource } from '../weather/data-source'

describe('getWeather MEDIUM', () => {
  it('returns all data for query', async () => {
    const testServer = new ApolloServer<ContextValue>({
      typeDefs,
      resolvers,
    })

    const weatherDataSource = new WeatherDataSource()
    weatherDataSource.getCurrentWeatherData = jest.fn(async () => ({
      current: {
        time: '2024-03-11T19:15',
        temperature_2m: 11.3,
        is_day: 1 as 1 | 0,
        weather_code: 95,
      },
    }))
    weatherDataSource.getHourlyWeatherData = jest.fn(async () => ({
      hourly: {
        time: [
          '2024-03-11T19:00',
          '2024-03-11T20:00',
          '2024-03-11T21:00',
          '2024-03-11T22:00',
          '2024-03-11T23:00',
          '2024-03-12T00:00',
          '2024-03-12T01:00',
        ],
        temperature_2m: [10, 9.3, 8.7, 8.4, 8.1, 7.6, 7.7],
        weather_code: [2, 1, 2, 2, 3, 3, 3],
        is_day: [0, 0, 0, 0, 0, 0, 0] as (1 | 0)[],
      },
    }))

    const response = await testServer.executeOperation(
      {
        query: `#graphql
        query GetWeatherTestQuery(
          $lat: Float!
          $lon: Float!
          $tempUnit: TempUnit
        ) {
          getWeather(lat: $lat, lon: $lon, tempUnit: $tempUnit) {
            current {
              temp
              condition
              daylight
            }
            hourly {
              time
              temp
              condition
              daylight
            }
          }
        }
      `,
        variables: { lat: 60, lon: 25, tempUnit: 'celsius' },
      },
      {
        contextValue: {
          dataSources: {
            weatherDataSource,
          },
        },
      },
    )

    assert(response.body.kind === 'single')
    expect(response.body.singleResult.errors).toBeUndefined()
    expect(response.body.singleResult.data).toBeDefined()
    const data = response.body.singleResult.data!.getWeather as any
    expect(data.current).toBeDefined()
    expect(data.current.temp).toEqual(11)
    expect(data.current.condition).toEqual('95')
    expect(data.current.daylight).toEqual(true)
    expect(data.hourly).toBeDefined()
    expect(data.hourly.time).toStrictEqual([
      1710183600, 1710187200, 1710190800, 1710194400, 1710198000, 1710201600,
      1710205200,
    ])
    expect(data.hourly.temp).toStrictEqual([10, 9, 9, 8, 8, 8, 8])
    expect(data.hourly.condition).toStrictEqual([
      '2',
      '1',
      '2',
      '2',
      '3',
      '3',
      '3',
    ])
    expect(data.hourly.daylight).toStrictEqual([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ])
    expect(data.daily).toBeUndefined()
  })
})
