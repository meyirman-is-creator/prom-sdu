import { Metadata } from 'next'
import FinalPaymentForm from '@/components/forms/FinalPaymentForm'
import Header from '@/components/layout/Header'
import { CreditCard, Info, PartyPopper } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Доплата - SDU Prom 2025',
    description: 'Внесите оставшуюся сумму за выпускной',
}

export default function FinalPaymentPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen py-20">
                <div className="container px-4">
                    <div className="text-center mb-8 sm:mb-12">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gradient mb-3 sm:mb-4">Доплата за выпускной</h1>
                        <p className="text-lg sm:text-xl text-secondary">Последний шаг до незабываемого вечера</p>
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
                                            Реквизиты: 4400430227275929 - Берік Е.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-3xl sm:text-4xl font-bold">
                                    Сумма: 25,000 ₸
                                </div>
                            </div>
                        </div>

                        <div className="card mb-6 sm:mb-8">
                            <div className="card-content flex items-start gap-3">
                                <Info className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                                <div>
                                    <p className="font-semibold mb-2 text-sm sm:text-base">Важная информация:</p>
                                    <ul className="space-y-1 text-secondary text-xs sm:text-sm">
                                        <li>• Выберите друзей для совместной рассадки</li>
                                        <li>• Укажите размер столика (до 12 человек)</li>
                                        <li>• Заполните анкету совместимости для лучшей рассадки</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <FinalPaymentForm />

                        <div className="mt-6 sm:mt-8 text-center">
                            <PartyPopper className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-gradient" />
                            <p className="text-base sm:text-lg text-secondary px-4">
                                После оплаты вы получите финальное подтверждение и все детали мероприятия
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}