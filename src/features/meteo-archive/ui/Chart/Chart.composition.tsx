import { useSlicedChart } from '../../insrastructure/store'
import { MeteoArchiveChart as Component } from './Chart'

export const MeteoArchiveChart = () => <Component
    useSlicedChart={useSlicedChart}
/>
