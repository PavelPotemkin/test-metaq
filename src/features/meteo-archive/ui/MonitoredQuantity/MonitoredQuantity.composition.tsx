import { setMonitoredQuantity } from '../../core'
import { useMonitoredQuantity } from '../../insrastructure/store'
import { MeteoArchiveMonitoredQuantity as Component } from './MonitoredQuantity'

export const MeteoArchiveMonitoredQuantity = () => <Component
  useMonitoredQuantity={useMonitoredQuantity}
  setMonitoredQuantity={setMonitoredQuantity}
/>
