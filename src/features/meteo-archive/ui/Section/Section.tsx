import { type BaseOption } from '@/shared/kernel'
import { UiButton, UiSelect } from '@/shared/ui'
import './style.css'
import { MeteoArchivePeriod } from '../Period'
import { MeteoArchiveMonitoredQuantity } from '../MonitoredQuantity'
import { MeteoArchiveChart } from '../Chart'
import { type FetchChart } from '../../core/ports.input'
import { useEffect } from 'react'

interface Props {
  fetchChart: FetchChart
}

export const MeteoArchiveSection = ({
  fetchChart
}: Props) => {
  useEffect(() => {
    void fetchChart()
  }, [])

  return (
    <div className="meteo-archive-section">
      <MeteoArchiveMonitoredQuantity />

      <div className="meteo-archive-section__inner">
        <MeteoArchivePeriod />

        <MeteoArchiveChart/>
      </div>
    </div>
  )
}
