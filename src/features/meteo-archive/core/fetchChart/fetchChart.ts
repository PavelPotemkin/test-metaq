import { type FetchChart } from '../ports.input'
import { type SaveChart, type GetChart, type ReadMonitoredQuantity } from '../ports.output'

interface Deps {
  readMonitoredQuantity: ReadMonitoredQuantity
  getChart: GetChart
  saveChart: SaveChart
}

export const createFetchChart = ({
  readMonitoredQuantity,
  getChart,
  saveChart
}: Deps): FetchChart => async () => {
  const monitoredQuantity = readMonitoredQuantity()

  const response = await getChart({
    monitoredQuantity
  })

  saveChart(response)
}
