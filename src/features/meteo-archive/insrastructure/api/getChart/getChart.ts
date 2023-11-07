import { type GetChart } from '../../../core/ports.output'
import { type ApiRequest } from '@/shared/kernel'
import { toDomain, type ChartDataDTO } from './getChart.serialization'
import { getData } from '@/utils'
import { type Chart } from '../../../core/types'

interface Dependencies {
  request: ApiRequest<ChartDataDTO>
}

export const createGetChart =
  ({ request }: Dependencies): GetChart =>
    async (data) => {
      // request()
      const result = await getData<Chart>(`/${data.monitoredQuantity}.json`)
      const items = toDomain(result)
      return items
    }
