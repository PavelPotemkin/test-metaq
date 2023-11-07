import { MeteoArchiveSection } from '@/features/meteo-archive'
import React from 'react'

export const MainPage = () => {
  return (
    <section className="container">
        <h1>
            Архив метеослужбы
        </h1>

        <MeteoArchiveSection />
    </section>
  )
}
