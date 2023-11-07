import { fetchChart } from '../../core'
import { MeteoArchiveSection as Component } from './Section'

export const MeteoArchiveSection = () => <Component
  fetchChart={fetchChart}
/>
