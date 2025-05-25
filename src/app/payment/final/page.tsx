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
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gradient mb-4">Доплата за выпускной</h1>
                        <p className="text-xl text-secondary">Последний шаг до незабываемого вечера</p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="card bg-gradient mb-8">
                            <div className="card-content text-white space-y-4">
                                <div className="flex items-center gap-3">
                                    <CreditCard className="w-8 h-8" />
                                    <div>
                                        <p className="text-2xl font-bold">
                                            Оплата только через Kaspi
                                        </p>
                                        <p className="text-lg opacity-90">
                                            Реквизиты: 4400430227275929 - Берік Е.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-3xl font-bold">
                                    Сумма: 25,000 ₸
                                </div>
                            </div>
                        </div>

                        <div className="card mb-8">
                            <div className="card-content flex items-start gap-3">
                                <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold mb-2">Важная информация:</p>
                                    <ul className="space-y-1 text-secondary">
                                        <li>• Выберите друзей для совместной рассадки</li>
                                        <li>• Укажите размер столика (до 12 человек)</li>
                                        <li>• Заполните анкету совместимости для лучшей рассадки</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <FinalPaymentForm />

                        <div className="mt-8 text-center">
                            <PartyPopper className="w-12 h-12 mx-auto mb-4 text-gradient" />
                            <p className="text-lg text-secondary">
                                После оплаты вы получите финальное подтверждение и все детали мероприятия
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}