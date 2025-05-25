import { PROGRAM_ITEMS } from '@/lib/constants'
import { Clock } from 'lucide-react'

export default function ProgramSection() {
    return (
        <section id="program" className="section">
            <div className="container">
                <h2 className="section-title">Программа вечера</h2>
                <p className="section-subtitle">
                    Каждая минута продумана для вашего удовольствия
                </p>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-3 sm:space-y-4">
                        {PROGRAM_ITEMS.map((item, index) => (
                            <div key={index} className="program-item">
                                <div className="program-icon">{item.icon}</div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                                        <span className="program-time">{item.time}</span>
                                    </div>
                                    <div className="program-title">{item.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 sm:mt-12 text-center">
                        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient rounded-full text-white">
                            <span className="text-base sm:text-lg font-semibold">Дресс-код: Smart Casual</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}