import { type Selector } from '@/shared/kernel'
import { type EndYear, type StartYear, type MonitoredQuantity, type Chart } from './types'

export type SetMonitoredQuantity = (monitoredQuantity: MonitoredQuantity) => Promise<void>
export type SetStartYear = (startYear: StartYear) => void
export type SetEndYear = (startYear: EndYear) => void

export type SelectMonitoredQuantity = Selector<MonitoredQuantity>
export type SelectStartYear = Selector<StartYear>
export type SelectEndYear = Selector<EndYear>
export type SelectSlicedChart = Selector<Chart>

export type FetchChart = () => Promise<void>
