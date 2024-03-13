import { ApolloServer } from '@apollo/server'
import assert from 'assert'
import { ContextValue } from '..'
import { resolvers } from '../resolvers.generated'
import { typeDefs } from '../typeDefs.generated'
import { WeatherDataSource } from '../weather/data-source'

describe('getWeather SMALL', () => {
  it('returns all data for query', async () => {
    const testServer = new ApolloServer<ContextValue>({
      typeDefs,
      resolvers,
    })

    const weatherDataSource = new WeatherDataSource()
    weatherDataSource.getCurrentWeatherData = jest.fn(async () => ({
      current: {
        time: '2024-03-11T19:15',
        temperature_2m: 9.8,
        is_day: 0 as 1 | 0,
        weather_code: 2,
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
    expect(data.current.temp).toEqual(10)
    expect(data.current.condition).toEqual('2')
    expect(data.current.daylight).toEqual(false)
    expect(data.hourly).toBeUndefined()
    expect(data.daily).toBeUndefined()
  })
})
