import type { Meta, StoryObj } from '@storybook/react'
import { WeatherSize, WeatherStyle } from '.'
import { WeatherUIProps } from './weather.types'
import { WeatherUI } from './weather-ui'

const meta = {
  component: WeatherUI,
  title: 'Weathers example',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof WeatherUI>

export default meta
type Story = StoryObj<typeof meta>

export const SmallHelsinki = {
  args: {
    size: WeatherSize.MEDIUM,
    style: WeatherStyle.ELEVATED,
    name: 'Helsinki',
    timeZone: 'Europe/Helsinki',
    data: {
      current: {
        condition: '45',
        daylight: true,
        temp: 13,
      },
      hourly: {
        condition: ['0', '0', '2', '1', '3', '45', '95'],
        temp: [13, 12, 14, 10, 11, 9, 8],
        daylight: [true, true, true, false, false, false, false],
        time: [
          1700000000, 1700003600, 1700007200, 1700010800, 1700014400,
          1700018000, 1700021600,
        ],
      },
    },
  } satisfies WeatherUIProps,
} satisfies Story
export const SmallSaintPetersburg = {
  args: {
    size: WeatherSize.SMALL,
    style: WeatherStyle.ELEVATED,
    name: 'Saint Petersburg',
    timeZone: 'Europe/Moscow',

    data: {
      current: {
        temp: -1,
        condition: '1',
        daylight: true,
      },
    },
  } satisfies WeatherUIProps,
} satisfies Story
export const MediumBarcelona = {
  args: {
    size: WeatherSize.MEDIUM,
    style: WeatherStyle.ELEVATED,
    name: 'Barcelona',
    timeZone: 'Europe/Madrid',
    data: {
      current: {
        temp: 14,
        condition: '0',
        daylight: false,
      },
      hourly: {
        condition: ['0', '0', '0', '0', '0', '3', '3'],
        time: [
          1710100800, 1710104400, 1710108000, 1710111600, 1710115200,
          1710118800, 1710122400,
        ],
        temp: [13, 13, 13, 13, 13, 12, 12],
        daylight: [false, false, false, false, false, false, false],
      },
    },
  } satisfies WeatherUIProps,
} satisfies Story
export const MediumSeoul = {
  args: {
    size: WeatherSize.MEDIUM,
    style: WeatherStyle.FLAT,
    name: 'Seoul',
    timeZone: 'Asia/Seoul',

    data: {
      current: {
        temp: 30,
        condition: '2',
        daylight: false,
      },
      hourly: {
        condition: ['2', '2', '2', '3', '3', '3', '3'],
        time: [
          1710100800, 1710104400, 1710108000, 1710111600, 1710115200,
          1710118800, 1710122400,
        ],
        temp: [29, 31, 35, 40, 43, 45, 48],
        daylight: [false, false, false, true, true, true, true],
      },
    },
  } satisfies WeatherUIProps,
} satisfies Story
export const LargeBerlin = {
  args: {
    size: WeatherSize.LARGE,
    style: WeatherStyle.ELEVATED,
    name: 'Berlin',
    timeZone: 'Europe/Berlin',
    data: {
      current: {
        temp: 8,
        condition: '3',
        daylight: false,
      },
      hourly: {
        condition: ['3', '3', '3', '3', '3', '3', '3'],
        time: [
          1710100800, 1710104400, 1710108000, 1710111600, 1710115200,
          1710118800, 1710122400,
        ],
        temp: [8, 8, 7, 7, 7, 7, 7],
        daylight: [false, false, false, false, false, false, false],
      },
      daily: {
        time: [
          1710028800, 1710115200, 1710201600, 1710288000, 1710374400,
          1710460800,
        ],
        condition: ['3', '3', '3', '2', '3', '80'],
        maxTemp: [12, 14, 14, 13, 15, 16],
        minTemp: [2, 6, 5, 4, 5, 6],
      },
    },
  } satisfies WeatherUIProps,
} satisfies Story
export const LargeNewYork = {
  args: {
    size: WeatherSize.LARGE,
    name: 'New York',
    timeZone: 'America/New_York',
    style: WeatherStyle.FLAT,
    data: {
      current: {
        temp: 41,
        condition: '0',
        daylight: true,
      },
      hourly: {
        condition: ['0', '3', '1', '0', '0', '3', '3'],
        time: [
          1710100800, 1710104400, 1710108000, 1710111600, 1710115200,
          1710118800, 1710122400,
        ],
        temp: [44, 41, 40, 38, 38, 37, 36],
        daylight: [true, false, false, false, false, false, false],
      },
      daily: {
        time: [
          1710028800, 1710115200, 1710201600, 1710288000, 1710374400,
          1710460800,
        ],
        condition: ['65', '3', '3', '3', '3', '3'],
        maxTemp: [49, 45, 60, 65, 67, 69],
        minTemp: [41, 35, 41, 47, 49, 59],
      },
    },
  } satisfies WeatherUIProps,
} satisfies Story
