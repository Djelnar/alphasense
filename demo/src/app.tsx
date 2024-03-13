import { TempUnit, Weather, WeatherSize, WeatherStyle } from 'widgets'
import styles from './app.module.css'

const locations = [
  {
    lat: 61,
    lon: 25,
    size: WeatherSize.LARGE,
    style: WeatherStyle.ELEVATED,
    name: 'Helsinki',
    timeZone: 'Europe/Helsinki',
  },
  {
    lat: 60,
    lon: 30,
    size: WeatherSize.SMALL,
    style: WeatherStyle.ELEVATED,
    name: 'Saint Petersburg',
    timeZone: 'Europe/Moscow',
  },
  {
    lat: 34,
    lon: -118,
    size: WeatherSize.SMALL,
    units: TempUnit.Fahrenheit,
    name: 'Los Angeles',
    timeZone: 'America/Los_Angeles',
  },
  {
    lat: 41,
    lon: 2,
    size: WeatherSize.MEDIUM,
    style: WeatherStyle.ELEVATED,
    name: 'Barcelona',
    timeZone: 'Europe/Madrid',
  },
  {
    lat: 37,
    lon: 127,
    size: WeatherSize.MEDIUM,
    units: TempUnit.Fahrenheit,
    name: 'Seoul',
    timeZone: 'Asia/Seoul',
  },
  {
    lat: 52,
    lon: 13,
    size: WeatherSize.LARGE,
    style: WeatherStyle.ELEVATED,
    name: 'Berlin',
    timeZone: 'Europe/Berlin',
  },
  {
    lat: 40,
    lon: -74,
    size: WeatherSize.LARGE,
    units: TempUnit.Fahrenheit,
    name: 'New York',
    timeZone: 'America/New_York',
  },
  {
    lat: 21,
    lon: -158,
    size: WeatherSize.MEDIUM,
    units: TempUnit.Fahrenheit,
    name: 'Honolulu',
    style: WeatherStyle.FLAT,
    timeZone: 'Pacific/Honolulu',
  },
  {
    lat: -34,
    lon: -18,
    size: WeatherSize.SMALL,
    name: 'Cape Town',
    timeZone: 'Africa/Johannesburg',
  },
]

export function App() {
  return (
    <div className={styles.root}>
      {locations.map((l) => (
        <div className={styles.item} key={`${l.lat}${l.lon}`}>
          <Weather
            lat={l.lat}
            lon={l.lon}
            name={l.name}
            timeZone={l.timeZone}
            size={l.size}
            style={l.style}
            units={l.units}
          />
        </div>
      ))}
    </div>
  )
}
