import { Maybe, TempUnit, WeatherData } from '../../../types.generated'

export enum WeatherSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}
export enum WeatherStyle {
  FLAT = 'FLAT',
  ELEVATED = 'ELEVATED',
}

export interface WeatherProps {
  lat: number
  lon: number
  name: string
  timeZone: string
  units?: TempUnit
  size?: WeatherSize
  style?: WeatherStyle
}

export interface WeatherUIProps {
  name: string
  timeZone: string
  size: WeatherSize
  style: WeatherStyle
  data?: Maybe<WeatherData>
}

export { TempUnit }
