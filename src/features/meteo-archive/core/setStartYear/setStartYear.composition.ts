import { saveStartYear } from '../../insrastructure/store'
import { createSetStartYear } from './setStartYear'

export const setStartYear = createSetStartYear({
  saveStartYear
})
