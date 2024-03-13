import React from 'react'
import styled, { css } from 'styled-components'
import { CurrentData, Maybe } from '../../../../types.generated'
import {
  formatTemperature,
  getWeatherConditionImageAndDescription,
} from '../utils'
import { WeatherSize } from '../weather.types'

const Right = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const Root = styled.div<{ $size?: WeatherSize }>`
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 8px 0;

  ${(p) =>
    p.$size === WeatherSize.SMALL &&
    css`
      flex-direction: column;
      ${Right} {
        align-self: flex-start;
        align-items: flex-start;
      }
    `}
`
const Left = styled.div`
  align-self: flex-start;
`
const Name = styled.p`
  line-height: 1.4;
  margin: 0;
  font-size: 18px;
`
const Temperature = styled.p`
  line-height: 1;
  margin: 0;
  font-size: 36px;
`
const Condition = styled.p`
  line-height: 1;
  margin: 0;
  font-size: 16px;
`
const ConditionImage = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  object-fit: cover;
  object-position: center;
`
interface Props {
  name: string
  data?: Maybe<CurrentData>
  size: WeatherSize
}
export function WeatherSectionSmall({ name, data, size }: Props) {
  const { conditionImageURL, conditionImageDescription } =
    getWeatherConditionImageAndDescription(data?.condition, data?.daylight)

  return (
    <Root $size={size}>
      <Left>
        <Name>{name}</Name>
        <Temperature>{formatTemperature(data?.temp)}</Temperature>
      </Left>
      <Right>
        <ConditionImage
          src={conditionImageURL}
          alt={conditionImageDescription}
        />
        <Condition>{conditionImageDescription}</Condition>
      </Right>
    </Root>
  )
}
