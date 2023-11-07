import { getChart } from '../../insrastructure/api/getChart'
import { saveChart, saveEndYear, saveMonitoredQuantity, saveStartYear } from '../../insrastructure/store'
import { createSetMonitoredQuantity } from './setMonitoredQuantity'

export const setMonitoredQuantity = createSetMonitoredQuantity({
  getChart,
  saveChart,
  saveMonitoredQuantity,
  saveStartYear,
  saveEndYear
})
