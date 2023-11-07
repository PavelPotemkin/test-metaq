import { saveEndYear } from '../../insrastructure/store'
import { createSetEndYear } from './setEndYear'

export const setEndYear = createSetEndYear({
  saveEndYear
})
