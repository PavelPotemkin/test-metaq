import { type SetEndYear } from '../ports.input'
import { type SaveEndYear } from '../ports.output'

interface Deps {
  saveEndYear: SaveEndYear
}

export const createSetEndYear = ({
  saveEndYear
}: Deps): SetEndYear => (endYear) => {
  saveEndYear(endYear)
}
