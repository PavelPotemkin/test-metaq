import { END_YEAR, START_YEAR } from '../constants'
import { type SetMonitoredQuantity } from '../ports.input'
import { type SaveChart, type GetChart, type SaveMonitoredQuantity, type SaveStartYear, type SaveEndYear } from '../ports.output'

interface Deps {
  getChart: GetChart
  saveChart: SaveChart
  saveMonitoredQuantity: SaveMonitoredQuantity
  saveStartYear: SaveStartYear
  saveEndYear: SaveEndYear
}

export const createSetMonitoredQuantity = ({
  getChart,
  saveChart,
  saveStartYear,
  saveEndYear,
  saveMonitoredQuantity
}: Deps): SetMonitoredQuantity => async (monitoredQuantity) => {
  const response = await getChart({
    monitoredQuantity
  })

  saveChart(response)
  saveStartYear(START_YEAR)
  saveEndYear(END_YEAR)
  saveMonitoredQuantity(monitoredQuantity)
}
