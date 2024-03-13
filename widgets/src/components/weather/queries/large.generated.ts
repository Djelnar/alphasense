import * as Types from '../../../../types.generated'

import { GraphQLClient, RequestOptions } from 'graphql-request'
import gql from 'graphql-tag'
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders']
export type LargeWidgetQueryQueryVariables = Types.Exact<{
  lat: Types.Scalars['Float']['input']
  lon: Types.Scalars['Float']['input']
  tempUnit?: Types.InputMaybe<Types.TempUnit>
}>

export type LargeWidgetQueryQuery = {
  __typename?: 'Query'
  getWeather?: {
    __typename?: 'WeatherData'
    current?: {
      __typename?: 'CurrentData'
      temp?: number | null
      condition?: string | null
      daylight?: boolean | null
    } | null
    hourly?: {
      __typename?: 'HourlyData'
      condition?: Array<string | null> | null
      time?: Array<number | null> | null
      temp?: Array<number | null> | null
      daylight?: Array<boolean | null> | null
    } | null
    daily?: {
      __typename?: 'DailyData'
      time?: Array<number | null> | null
      condition?: Array<string | null> | null
      maxTemp?: Array<number | null> | null
      minTemp?: Array<number | null> | null
    } | null
  } | null
}

export const LargeWidgetQueryDocument = gql`
  query LargeWidgetQuery($lat: Float!, $lon: Float!, $tempUnit: TempUnit) {
    getWeather(lat: $lat, lon: $lon, tempUnit: $tempUnit) {
      current {
        temp
        condition
        daylight
      }
      hourly {
        condition
        time
        temp
        daylight
      }
      daily {
        time
        condition
        maxTemp
        minTemp
      }
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  _variables,
) => action()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    LargeWidgetQuery(
      variables: LargeWidgetQueryQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<LargeWidgetQueryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<LargeWidgetQueryQuery>(
            LargeWidgetQueryDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'LargeWidgetQuery',
        'query',
        variables,
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
