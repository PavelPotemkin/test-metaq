import { useStore, createStore } from 'zustand'
import { type Chart, type MonitoredQuantity } from '../../core/types'
import { END_YEAR, START_YEAR } from '../../core/constants'
import { type SaveChart, type ReadMonitoredQuantity, type SaveEndYear, type SaveMonitoredQuantity, type SaveStartYear } from '../../core/ports.output'
import { type SelectSlicedChart, type SelectEndYear, type SelectMonitoredQuantity, type SelectStartYear } from '../../core/ports.input'
import { getSliceByPeriod } from '../../core/utils'

interface State {
  monitoredQuantity: MonitoredQuantity
  startYear: number
  endYear: number
  chart: Chart
}

const store = createStore<State>(() => ({
  monitoredQuantity: 'temperature',
  startYear: START_YEAR,
  endYear: END_YEAR,
  chart: []
}))

export const saveMonitoredQuantity: SaveMonitoredQuantity = (monitoredQuantity) => { store.setState({ monitoredQuantity }) }
export const saveStartYear: SaveStartYear = (startYear) => { store.setState({ startYear }) }
export const saveEndYear: SaveEndYear = (endYear) => { store.setState({ endYear }) }
export const saveChart: SaveChart = (chart) => { store.setState({ chart }) }

export const readMonitoredQuantity: ReadMonitoredQuantity = () => store.getState().monitoredQuantity

export const useMonitoredQuantity: SelectMonitoredQuantity = () => useStore(store, (vm) => vm.monitoredQuantity)
export const useStartYear: SelectStartYear = () => useStore(store, (vm) => vm.startYear)
export const useEndYear: SelectEndYear = () => useStore(store, (vm) => vm.endYear)
export const useSlicedChart: SelectSlicedChart = () => useStore(store, (vm) => getSliceByPeriod({
  items: vm.chart,
  startYear: vm.startYear,
  endYear: vm.endYear
}))
