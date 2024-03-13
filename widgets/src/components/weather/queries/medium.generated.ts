import * as Types from '../../../../types.generated'

import { GraphQLClient, RequestOptions } from 'graphql-request'
import gql from 'graphql-tag'
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders']
export type MediumWidgetQueryQueryVariables = Types.Exact<{
  lat: Types.Scalars['Float']['input']
  lon: Types.Scalars['Float']['input']
  tempUnit?: Types.InputMaybe<Types.TempUnit>
}>

export type MediumWidgetQueryQuery = {
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
  } | null
}

export const MediumWidgetQueryDocument = gql`
  query MediumWidgetQuery($lat: Float!, $lon: Float!, $tempUnit: TempUnit) {
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
    MediumWidgetQuery(
      variables: MediumWidgetQueryQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<MediumWidgetQueryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<MediumWidgetQueryQuery>(
            MediumWidgetQueryDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'MediumWidgetQuery',
        'query',
        variables,
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
