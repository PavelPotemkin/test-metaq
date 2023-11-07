import { useEffect, useRef } from 'react'
import { type SelectSlicedChart } from '../../core/ports.input'
import { type ChartItem } from '../../core/types'
import './style.css'

interface Props {
  useSlicedChart: SelectSlicedChart
}

function drawChart (canvas: HTMLCanvasElement, data: ChartItem[]) {
  const ctx = canvas.getContext('2d')
  if (!ctx || !data.length) {
    return
  }
  const color = '#808080'
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const minX = new Date(data[0].t).getTime()
  const maxX = new Date(data[data.length - 1].t).getTime()
  // const minX = Math.min(...data.map(item => new Date(item.t).getTime()))
  // const maxX = Math.max(...data.map(item => new Date(item.t).getTime()))
  const minY = Math.min(...data.map(item => item.v))
  const maxY = Math.max(...data.map(item => item.v))

  const scaleX = canvas.width / (maxX - minX)
  const scaleY = canvas.height / (maxY - minY)

  ctx.beginPath()
  data.forEach(item => {
    const x = (new Date(item.t).getTime() - minX) * scaleX
    const y = canvas.height - (item.v - minY) * scaleY
    ctx.lineTo(x, y)
  })
  ctx.strokeStyle = color
  ctx.lineWidth = 1
  ctx.stroke()
}

export const MeteoArchiveChart = ({ useSlicedChart }: Props) => {
  const ref = useRef(null)
  const chart = useSlicedChart()

  useEffect(() => {
    const element = ref.current
    if (element) {
      drawChart(element, chart)
    }
  }, [chart])

  return (
    <canvas ref={ref} className='meteo-archive-chart'></canvas>
  )
}
