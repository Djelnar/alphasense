import React from 'react'
import styled from 'styled-components'
import { HourlyData, Maybe } from '../../../../types.generated'
import {
  formatHour,
  formatTemperature,
  getWeatherConditionImageAndDescription,
} from '../utils'

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 8px 0;
`
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Hour = styled.div``
const Condition = styled.div`
  padding: 8px 0;
`

const ConditionImage = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  object-fit: cover;
  object-position: center;
`
const Temp = styled.div``

interface Props {
  timeZone: string
  data?: Maybe<HourlyData>
}
export function WeatherSectionMedium({ data, timeZone }: Props) {
  const preparedKeys = Array.from({ length: 6 }).map((_, index) => index + 1)

  return (
    <Root>
      {preparedKeys.map((key) => {
        const { conditionImageURL, conditionImageDescription } =
          getWeatherConditionImageAndDescription(
            data?.condition?.[key],
            data?.daylight?.[key],
          )

        return (
          <Item key={key}>
            <Hour>{formatHour(timeZone, data?.time?.[key])}</Hour>
            <Condition>
              <ConditionImage
                src={conditionImageURL}
                alt={conditionImageDescription}
              />
            </Condition>
            <Temp>{formatTemperature(data?.temp?.[key])}</Temp>
          </Item>
        )
      })}
    </Root>
  )
}
