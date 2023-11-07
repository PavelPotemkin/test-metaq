import { type Chart } from '../../../core/types'

export type ChartDataDTO = Chart

export const toDomain = (data: ChartDataDTO) => data
