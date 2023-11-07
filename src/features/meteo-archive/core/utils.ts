import { type Chart, type ChartItem, type EndYear, type StartYear } from './types'

export const getYearsByPeriod = (startYear: StartYear, endYear: EndYear) => new Array((endYear + 1) - startYear).fill(null).map((_, idx) => ({
  value: String(endYear - idx),
  label: String(endYear - idx)
}))

const findItemIdxByYear = (array: ChartItem[], target: string) => {
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const currentElement = array[mid].t.substring(0, 4)

    if (currentElement === target) {
      return mid
    } else if (target < currentElement) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}

export const getSliceByPeriod = ({ startYear, endYear, items }: {
  startYear: StartYear
  endYear: EndYear
  items: Chart
}): Chart => {
  const leftIdx = findItemIdxByYear(items, String(startYear))
  const rightIdx = findItemIdxByYear(items, String(endYear))
  return items.slice(leftIdx, rightIdx)
}
