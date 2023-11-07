import { getChart } from '../../insrastructure/api/getChart'
import { readMonitoredQuantity, saveChart } from '../../insrastructure/store'
import { createFetchChart } from './fetchChart'

export const fetchChart = createFetchChart({
  readMonitoredQuantity,
  getChart,
  saveChart
})
