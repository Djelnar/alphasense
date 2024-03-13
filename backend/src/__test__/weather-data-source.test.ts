import { WeatherDataSource } from '../weather/data-source'

const mockLogger = jest.fn()
jest.mock('@apollo/datasource-rest', () => {
  const { RESTDataSource } = jest.requireActual('@apollo/datasource-rest')
  class MockRESTDataSource extends RESTDataSource {
    constructor() {
      super()
      this.trace = (url: string, request: null, fn: () => Promise<void>) => {
        mockLogger(url)
        return fn()
      }
    }
  }
  return {
    RESTDataSource: MockRESTDataSource,
  }
})

describe('WeatherDataSource', () => {
  it('getCurrentWeatherData URL is formed correctly', async () => {
    const datasource = new WeatherDataSource()
    await datasource.getCurrentWeatherData({
      lat: 60,
      lon: 25,
      tempUnit: 'celsius',
    })

    expect(JSON.stringify(mockLogger.mock.calls[0][0])).toBe(
      JSON.stringify(
        'https://api.open-meteo.com/v1/forecast?latitude=60&longitude=25&temperature_unit=celsius&current=temperature_2m%2Cis_day%2Cweather_code',
      ),
    )
  })

  it('getHourlyWeatherData URL is formed correctly', async () => {
    const datasource = new WeatherDataSource()
    await datasource.getHourlyWeatherData({
      lat: 60,
      lon: 25,
      tempUnit: 'celsius',
    })

    expect(JSON.stringify(mockLogger.mock.calls[0][0])).toBe(
      JSON.stringify(
        'https://api.open-meteo.com/v1/forecast?latitude=60&longitude=25&temperature_unit=celsius&hourly=temperature_2m%2Cis_day%2Cweather_code&past_hours=0&forecast_hours=7',
      ),
    )
  })

  it('getDailyWeatherData URL is formed correctly', async () => {
    const datasource = new WeatherDataSource()
    await datasource.getDailyWeatherData({
      lat: 60,
      lon: 25,
      tempUnit: 'celsius',
    })

    expect(JSON.stringify(mockLogger.mock.calls[0][0])).toBe(
      JSON.stringify(
        'https://api.open-meteo.com/v1/forecast?latitude=60&longitude=25&temperature_unit=celsius&daily=temperature_2m_max%2Ctemperature_2m_min%2Cweather_code&forecast_days=6',
      ),
    )
  })
})

afterEach(() => jest.clearAllMocks())
