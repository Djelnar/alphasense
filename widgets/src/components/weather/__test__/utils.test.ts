import {
  formatHour,
  formatTemperature,
  formatWeekday,
  getWeatherConditionImageAndDescription,
} from '../utils'

describe('formatHour', () => {
  it('formats to hour correctly for timezone', () => {
    const date = new Date('2024-02-29T19:04:01')
    const dateAPIFormat = Number(date) / 1000
    const formatted = formatHour('Europe/Helsinki', dateAPIFormat)
    expect(formatted).toBe('21')
  })
  it('formats to hour correctly for timezone', () => {
    const date = new Date('2024-02-29T19:04:01')
    const dateAPIFormat = Number(date) / 1000
    const formatted = formatHour('America/New_York', dateAPIFormat)
    expect(formatted).toBe('14')
  })
  it('formats to hour correctly for timezone', () => {
    const date = new Date('2024-02-29T19:04:01')
    const dateAPIFormat = Number(date) / 1000
    const formatted = formatHour('Asia/Seoul', dateAPIFormat)
    expect(formatted).toBe('04')
  })
  it('returns dash for nullish date value', () => {
    const formatted = formatHour('Asia/Seoul', null)
    expect(formatted).toBe('-')
  })
})

describe('formatTemperature', () => {
  it('formats temperature', () => {
    const formatted = formatTemperature(32)
    expect(formatted).toBe('32º')
  })
  it('returns dash for nullish temperature', () => {
    const formatted = formatTemperature()
    expect(formatted).toBe('-')
  })
  it('displays zero correctly', () => {
    const formatted = formatTemperature(-0)
    expect(formatted).toBe('0º')
  })
})

describe('formatWeekday', () => {
  it('formats to weekday correctly for timezone', () => {
    const date = new Date('2024-02-29T02:04:01')
    const dateAPIFormat = Number(date) / 1000
    const formatted = formatWeekday('Europe/Helsinki', dateAPIFormat)
    expect(formatted).toBe('Thu')
  })
  it('formats to weekday correctly for timezone', () => {
    const date = new Date('2024-02-29T02:04:01')
    const dateAPIFormat = Number(date) / 1000
    const formatted = formatWeekday('America/New_York', dateAPIFormat)
    expect(formatted).toBe('Wed')
  })
  it('formats to weekday correctly for timezone', () => {
    const date = new Date('2024-02-29T20:04:01')
    const dateAPIFormat = Number(date) / 1000
    const formatted = formatWeekday('Asia/Seoul', dateAPIFormat)
    expect(formatted).toBe('Fri')
  })
  it('returns dash for nullish date value', () => {
    const formatted = formatWeekday('Asia/Seoul', null)
    expect(formatted).toBe('-')
  })
})

describe('getWeatherConditionImageAndDescription', () => {
  it('returns correct description', () => {
    const result = getWeatherConditionImageAndDescription('1', false)
    expect(result.conditionImageDescription).toBe('Mainly Clear')
  })

  it('returns correct description for null value', () => {
    const result = getWeatherConditionImageAndDescription(null, false)
    expect(result.conditionImageDescription).toBe('-')
  })
})
