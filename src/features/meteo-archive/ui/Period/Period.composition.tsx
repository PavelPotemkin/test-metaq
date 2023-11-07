import { setEndYear, setStartYear } from '../../core'
import { useEndYear, useStartYear } from '../../insrastructure/store'
import { MeteoArchivePeriod as Component } from './Period'

export const MeteoArchivePeriod = () => <Component
  useStartYear={useStartYear}
  useEndYear={useEndYear}
  setStartYear={setStartYear}
  setEndYear={setEndYear}
/>
