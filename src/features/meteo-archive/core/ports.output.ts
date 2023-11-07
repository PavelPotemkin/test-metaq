import { type Selector } from '@/shared/kernel'
import { type StartYear, type MonitoredQuantity, type EndYear, type MeteoArchiveData, type Chart } from './types'

export type SaveMonitoredQuantity = (monitoredQuantity: MonitoredQuantity) => void
export type SaveStartYear = (startYear: StartYear) => void
export type SaveEndYear = (startYear: EndYear) => void
export type SaveChart = (chart: Chart) => void

export type ReadMonitoredQuantity = Selector<MonitoredQuantity>

export type GetChart = (data: MeteoArchiveData) => Promise<Chart>
