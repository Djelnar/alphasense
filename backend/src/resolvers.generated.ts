/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { CurrentData } from './weather/resolvers/CurrentData';
import    { DailyData } from './weather/resolvers/DailyData';
import    { HourlyData } from './weather/resolvers/HourlyData';
import    { getWeather as Query_getWeather } from './weather/resolvers/Query/getWeather';
import    { WeatherData } from './weather/resolvers/WeatherData';
    export const resolvers: Resolvers = {
      Query: { getWeather: Query_getWeather },
      
      
      CurrentData: CurrentData,
DailyData: DailyData,
HourlyData: HourlyData,
WeatherData: WeatherData
    }