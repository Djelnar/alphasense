import * as Types from '../../../../types.generated'

import { GraphQLClient, RequestOptions } from 'graphql-request'
import gql from 'graphql-tag'
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders']
export type SmallWidgetQueryQueryVariables = Types.Exact<{
  lat: Types.Scalars['Float']['input']
  lon: Types.Scalars['Float']['input']
  tempUnit?: Types.InputMaybe<Types.TempUnit>
}>

export type SmallWidgetQueryQuery = {
  __typename?: 'Query'
  getWeather?: {
    __typename?: 'WeatherData'
    current?: {
      __typename?: 'CurrentData'
      temp?: number | null
      condition?: string | null
      daylight?: boolean | null
    } | null
  } | null
}

export const SmallWidgetQueryDocument = gql`
  query SmallWidgetQuery($lat: Float!, $lon: Float!, $tempUnit: TempUnit) {
    getWeather(lat: $lat, lon: $lon, tempUnit: $tempUnit) {
      current {
        temp
        condition
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
    SmallWidgetQuery(
      variables: SmallWidgetQueryQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<SmallWidgetQueryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SmallWidgetQueryQuery>(
            SmallWidgetQueryDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'SmallWidgetQuery',
        'query',
        variables,
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
