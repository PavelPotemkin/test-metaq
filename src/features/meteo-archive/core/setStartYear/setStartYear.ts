import { type SetStartYear } from '../ports.input'
import { type SaveStartYear } from '../ports.output'

interface Deps {
  saveStartYear: SaveStartYear
}

export const createSetStartYear = ({
  saveStartYear
}: Deps): SetStartYear => async (startYear) => {
  saveStartYear(startYear)
}
