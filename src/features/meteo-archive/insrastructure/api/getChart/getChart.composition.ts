import { api } from '@/services/network'
import { createGetChart } from './getChart'

export const getChart = createGetChart({
  request: api
})
