import { Metadata } from 'next'
import PrepaymentForm from '@/components/forms/PrepaymentForm'
import Header from '@/components/layout/Header'
import { CreditCard, Shield, Clock } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Предоплата - SDU Prom 2025',
    description: 'Внесите предоплату за выпускной',
}

export default function PrepaymentPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen py-20">
                <div className="container px-4">
                    <div className="text-center mb-8 sm:mb-12">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gradient mb-3 sm:mb-4">Предоплата за выпускной</h1>
                        <p className="text-lg sm:text-xl text-secondary">Забронируйте место на легендарном вечере</p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="card bg-gradient mb-6 sm:mb-8">
                            <div className="card-content text-white space-y-3 sm:space-y-4">
                                <div className="flex items-center gap-3">
                                    <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                                    <div>
                                        <p className="text-xl sm:text-2xl font-bold">
                                            Оплата только через Kaspi
                                        </p>
                                        <p className="text-base sm:text-lg opacity-90">
                                            Реквизиты: 4400430216816501 - Айдана Б.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-3xl sm:text-4xl font-bold">
                                    Сумма: 25,000 ₸
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <div className="card text-center p-3 sm:p-4">
                                <Clock className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-gradient" />
                                <p className="font-semibold text-sm sm:text-base">До 25 мая</p>
                                <p className="text-xs sm:text-sm text-secondary">Дедлайн оплаты</p>
                            </div>
                            <div className="card text-center p-3 sm:p-4">
                                <Shield className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-gradient" />
                                <p className="font-semibold text-sm sm:text-base">100% Безопасно</p>
                                <p className="text-xs sm:text-sm text-secondary">Гарантия места</p>
                            </div>
                            <div className="card text-center p-3 sm:p-4">
                                <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-gradient" />
                                <p className="font-semibold text-sm sm:text-base">50% от суммы</p>
                                <p className="text-xs sm:text-sm text-secondary">Доплата позже</p>
                            </div>
                        </div>

                        <PrepaymentForm />
                    </div>
                </div>
            </main>
        </>
    )
}