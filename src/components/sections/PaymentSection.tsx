import Link from 'next/link'
import { CreditCard, Lock, CheckCircle } from 'lucide-react'

export default function PaymentSection() {
    return (
        <section id="payment" className="section">
            <div className="container">
                <h2 className="section-title">Оплата</h2>
                <p className="section-subtitle">
                    Простой и безопасный способ забронировать место
                </p>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="flex items-center justify-between mb-3 sm:mb-4">
                                <h3 className="card-title">Предоплата</h3>
                                <div className="px-2.5 sm:px-3 py-1 bg-gradient rounded-full text-white text-xs sm:text-sm font-medium">
                                    Этап 1
                                </div>
                            </div>
                        </div>
                        <div className="card-content space-y-3 sm:space-y-4">
                            <p className="text-sm sm:text-base">Внесите предоплату до 25 мая для бронирования места</p>
                            <div className="text-3xl sm:text-4xl font-bold text-gradient">25,000 ₸</div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs sm:text-sm">
                                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                                    <span>Гарантированное место</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs sm:text-sm">
                                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                                    <span>Доступ в закрытый Telegram</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs sm:text-sm">
                                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                                    <span>Голосование за артиста</span>
                                </div>
                            </div>
                            <Link href="/payment/prepayment" className="block">
                                <button className="btn btn-primary w-full">
                                    Внести предоплату
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <div className="flex items-center justify-between mb-3 sm:mb-4">
                                <h3 className="card-title">Доплата</h3>
                                <div className="px-2.5 sm:px-3 py-1 bg-secondary rounded-full text-white text-xs sm:text-sm font-medium">
                                    Этап 2
                                </div>
                            </div>
                        </div>
                        <div className="card-content space-y-3 sm:space-y-4">
                            <p className="text-sm sm:text-base">Для тех, кто уже внес предоплату</p>
                            <div className="text-3xl sm:text-4xl font-bold text-gradient">25,000 ₸</div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs sm:text-sm">
                                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                                    <span>Выбор столика</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs sm:text-sm">
                                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                                    <span>Анкета совместимости</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs sm:text-sm">
                                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                                    <span>Финальное подтверждение</span>
                                </div>
                            </div>
                            <Link href="/auth/login" className="block">
                                <button className="btn btn-secondary w-full">
                                    Войти для доплаты
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="card bg-gradient">
                        <div className="card-content text-center text-white">
                            <Lock className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4" />
                            <h4 className="text-lg sm:text-xl font-bold mb-2">Безопасная оплата через Kaspi</h4>
                            <p className="text-sm sm:text-base">
                                После внесения предоплаты вы будете добавлены в закрытый Telegram-канал
                                <strong className="block mt-1 sm:mt-2">SDU PROM Final Composition</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}