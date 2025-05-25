'use client'

import Link from 'next/link'
import { useCountdown } from '@/hooks/useCountdown'
import { Calendar, MapPin, Sparkles } from 'lucide-react'

export default function HeroSection() {
  const targetDate = new Date('2025-06-22T18:00:00')
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  return (
    <section className="hero-section">
      <div className="hero-bg" />

      <div className="container">
        <div className="hero-content">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient backdrop-blur text-white text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Только 200 мест
            </div>
          </div>

          <h1 className="hero-title">
            Выпускной
            <br />
            SDU 2025
          </h1>

          <p className="hero-subtitle">
            Финальный отсчёт до легендарного вечера, который запомнится навсегда
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-primary" />
              <span>22 июня 2025</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Almaty</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/payment/prepayment">
              <button className="btn btn-primary">
                Зарегистрироваться сейчас
              </button>
            </Link>
            <Link href="/#about">
              <button className="btn btn-secondary">
                Узнать больше
              </button>
            </Link>
          </div>

          <div className="countdown-grid">
            <div className="countdown-item">
              <div className="countdown-number">{days}</div>
              <div className="countdown-label">Дней</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{hours}</div>
              <div className="countdown-label">Часов</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{minutes}</div>
              <div className="countdown-label">Минут</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{seconds}</div>
              <div className="countdown-label">Секунд</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}