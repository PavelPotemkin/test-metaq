import { UiButton } from '@/shared/ui'
import { type SetMonitoredQuantity, type SelectMonitoredQuantity } from '../../core/ports.input'
import './style.css'

interface Props {
  useMonitoredQuantity: SelectMonitoredQuantity
  setMonitoredQuantity: SetMonitoredQuantity
}

export const MeteoArchiveMonitoredQuantity = ({ useMonitoredQuantity, setMonitoredQuantity }: Props) => {
  const monitoredQuantity = useMonitoredQuantity()

  return (
    <div className="meteo-archive-monitoring-quantity">
      <UiButton
        mode={monitoredQuantity === 'temperature' ? 'primary' : 'secondary'}
        onClick={() => { void setMonitoredQuantity('temperature') }}
      >
        Температура
      </UiButton>

      <UiButton
        mode={monitoredQuantity === 'precipitation' ? 'primary' : 'secondary'}
        onClick={() => { void setMonitoredQuantity('precipitation') }}
      >
        Осадки
      </UiButton>
    </div>
  )
}
