import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Maybe } from '../../../types.generated'
import { WeatherSectionLarge } from './sections/large'
import { WeatherSectionMedium } from './sections/medium'
import { WeatherSectionSmall } from './sections/small'
import { WeatherSize, WeatherStyle, WeatherUIProps } from './weather.types'

const getBackgroundColor = (isDaytime?: Maybe<boolean>) => {
  return isDaytime ? '#00b8ff' : '#06071d'
}

const Root = styled.div<{
  $style?: WeatherStyle
  $daylight?: Maybe<boolean> | null
  $size: WeatherSize
}>`
  &,
  & > * {
    box-sizing: border-box;
  }

  font-size: 16px;
  font-family: Helvetica, Arial, sans-serif;

  max-width: ${(p) => (p.$size === WeatherSize.SMALL ? 160 : 320)}px;
  width: 100%;
  padding: 8px 16px;
  background-color: ${(p) => getBackgroundColor(p.$daylight)};
  overflow: hidden;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari, Chrome, Opera, Samsung */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Edge, IE */
  user-select: none; /* Modern browsers */

  ${(p) =>
    p.$style === WeatherStyle.ELEVATED &&
    css`
      border-radius: 16px;
      box-shadow: rgba(150, 150, 150, 1.4) 0px 23px 46px 10px;
      text-shadow: ${p.$daylight
        ? '1px 1px 13px #0000007f'
        : '1px 1px 10px #ffffff7f'};
    `}
  ${(p) =>
    p.$style === WeatherStyle.FLAT &&
    css`
      border-radius: 0;
      box-shadow: none;
      text-shadow: none;
    `}
`

export const WeatherUI: React.FC<WeatherUIProps> = ({
  style,
  size,
  data,
  name,
  timeZone,
}) => {
  const current = data?.current
  const [daylight, setDaylight] = useState(false)
  useEffect(() => {
    if (current?.daylight != null) {
      setDaylight(current?.daylight)
    }
  }, [current?.daylight])

  return (
    <Root $style={style} $daylight={daylight} $size={size}>
      <WeatherSectionSmall name={name} data={data?.current} size={size} />
      {[WeatherSize.MEDIUM, WeatherSize.LARGE].includes(size) && (
        <WeatherSectionMedium timeZone={timeZone} data={data?.hourly} />
      )}
      {size === WeatherSize.LARGE && (
        <WeatherSectionLarge timeZone={timeZone} data={data?.daily} />
      )}
    </Root>
  )
}
