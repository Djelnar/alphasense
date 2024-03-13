import React, { Fragment } from 'react'
import styled from 'styled-components'
import { DailyData, Maybe } from '../../../../types.generated'
import {
  formatTemperature,
  formatWeekday,
  getWeatherConditionImageAndDescription,
} from '../utils'

const Root = styled.div`
  color: #fff;
  padding: 8px 0;
  display: grid;
  grid-template-columns: 40px repeat(3, 1fr);
  place-items: center start;

  & :nth-child(4n + 2) {
    justify-self: center;
  }
`
const Weekday = styled.div``
const Condition = styled.div``
const Temp = styled.div``
const ConditionImage = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  object-fit: cover;
  object-position: center;
`

interface Props {
  timeZone: string
  data?: Maybe<DailyData>
}
export function WeatherSectionLarge({ data, timeZone }: Props) {
  const preparedKeys = Array.from({ length: 5 }).map((_, index) => index + 1)

  return (
    <Root>
      {preparedKeys.map((key) => {
        const { conditionImageURL, conditionImageDescription } =
          getWeatherConditionImageAndDescription(data?.condition?.[key], true)

        return (
          <Fragment key={key}>
            <Weekday>{formatWeekday(timeZone, data?.time?.[key])}</Weekday>
            <Condition>
              <ConditionImage
                src={conditionImageURL}
                alt={conditionImageDescription}
              />
            </Condition>
            <Temp>Low: {formatTemperature(data?.minTemp?.[key])}</Temp>
            <Temp>High: {formatTemperature(data?.maxTemp?.[key])}</Temp>
          </Fragment>
        )
      })}
    </Root>
  )
}
