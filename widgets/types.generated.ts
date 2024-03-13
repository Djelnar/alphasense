export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CurrentData = {
  __typename?: 'CurrentData';
  condition?: Maybe<Scalars['String']['output']>;
  daylight?: Maybe<Scalars['Boolean']['output']>;
  temp?: Maybe<Scalars['Int']['output']>;
};

export type DailyData = {
  __typename?: 'DailyData';
  condition?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  maxTemp?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  minTemp?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  time?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type HourlyData = {
  __typename?: 'HourlyData';
  condition?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  daylight?: Maybe<Array<Maybe<Scalars['Boolean']['output']>>>;
  temp?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  time?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type Query = {
  __typename?: 'Query';
  getWeather?: Maybe<WeatherData>;
};


export type QueryGetWeatherArgs = {
  lat: Scalars['Float']['input'];
  lon: Scalars['Float']['input'];
  tempUnit?: InputMaybe<TempUnit>;
};

export enum TempUnit {
  Celsius = 'celsius',
  Fahrenheit = 'fahrenheit'
}

export type WeatherData = {
  __typename?: 'WeatherData';
  current?: Maybe<CurrentData>;
  daily?: Maybe<DailyData>;
  hourly?: Maybe<HourlyData>;
};
