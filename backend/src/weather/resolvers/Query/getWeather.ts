import type { QueryResolvers } from '../../../types.generated'

export const getWeather: NonNullable<QueryResolvers['getWeather']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return _arg
}
