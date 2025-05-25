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

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="card-title">Предоплата</h3>
                                <div className="px-3 py-1 bg-gradient rounded-full text-white text-sm font-medium">
                                    Этап 1
                                </div>
                            </div>
                        </div>
                        <div className="card-content space-y-4">
                            <p>Внесите предоплату до 25 мая для бронирования места</p>
                            <div className="text-4xl font-bold text-gradient">25,000 ₸</div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span>Гарантированное место</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span>Доступ в закрытый Telegram</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary" />
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
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="card-title">Доплата</h3>
                                <div className="px-3 py-1 bg-secondary rounded-full text-white text-sm font-medium">
                                    Этап 2
                                </div>
                            </div>
                        </div>
                        <div className="card-content space-y-4">
                            <p>Для тех, кто уже внес предоплату</p>
                            <div className="text-4xl font-bold text-gradient">25,000 ₸</div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span>Выбор столика</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span>Анкета совместимости</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary" />
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
                            <Lock className="w-12 h-12 mx-auto mb-4" />
                            <h4 className="text-xl font-bold mb-2">Безопасная оплата через Kaspi</h4>
                            <p>
                                После внесения предоплаты вы будете добавлены в закрытый Telegram-канал
                                <strong className="block mt-2">SDU PROM Final Composition</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}