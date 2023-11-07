import { type DateString } from '@/shared/kernel'

export type MonitoredQuantity = 'precipitation' | 'temperature'
export type StartYear = number
export type EndYear = number

export interface ChartItem {
  t: DateString
  v: number
}
export type Chart = ChartItem[]

export interface MeteoArchiveData {
  monitoredQuantity: MonitoredQuantity
}
