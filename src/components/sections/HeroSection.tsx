'use client'

import Link from 'next/link'
import { useCountdown } from '@/hooks/useCountdown'

export default function HeroSection() {
  const targetDate = new Date('2025-06-22T18:00:00')
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center">
      <div className="container px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
          Выпускной SDU 2025: Финальный отсчёт
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-slate-600">
          Стань частью легендарного вечера. Только 200 мест!
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <Link href="/payment/prepayment">
            <button className="btn btn-blue text-lg px-8">
              Зарегистрироваться
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
          <div className="countdown-box">
            <div className="text-3xl font-bold text-slate-900">{days}</div>
            <div className="text-sm text-slate-600">дней</div>
          </div>
          <div className="countdown-box">
            <div className="text-3xl font-bold text-slate-900">{hours}</div>
            <div className="text-sm text-slate-600">часов</div>
          </div>
          <div className="countdown-box">
            <div className="text-3xl font-bold text-slate-900">{minutes}</div>
            <div className="text-sm text-slate-600">минут</div>
          </div>
          <div className="countdown-box">
            <div className="text-3xl font-bold text-slate-900">{seconds}</div>
            <div className="text-sm text-slate-600">секунд</div>
          </div>
        </div>
      </div>
    </section>
  )
}