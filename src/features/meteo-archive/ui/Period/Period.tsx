import { UiSelect } from '@/shared/ui'
import './style.css'
import { type SelectEndYear, type SelectStartYear, type SetEndYear, type SetStartYear } from '../../core/ports.input'
import { getYearsByPeriod } from '../../core/utils'
import { END_YEAR, START_YEAR } from '../../core/constants'
import { useMemo } from 'react'

interface Props {
  useStartYear: SelectStartYear
  useEndYear: SelectEndYear
  setStartYear: SetStartYear
  setEndYear: SetEndYear
}

export const MeteoArchivePeriod = ({ useStartYear, useEndYear, setStartYear, setEndYear }: Props) => {
  const startYear = useStartYear()
  const endYear = useEndYear()

  const startYearItems = useMemo(() => getYearsByPeriod(START_YEAR, endYear), [endYear])
  const endYearItems = useMemo(() => getYearsByPeriod(startYear, END_YEAR), [startYear])

  return (
    <div className="meteo-archive-period">
      <UiSelect
        value={String(startYear)}
        options={startYearItems}
        onChange={(year) => { void setStartYear(+year) } }
      />

      <UiSelect
        value={String(endYear)}
        options={endYearItems}
        onChange={(year) => { void setEndYear(+year) } }
      />
    </div>
  )
}
