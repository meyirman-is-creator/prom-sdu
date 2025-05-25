import { Metadata } from 'next'
import PrepaymentForm from '@/components/forms/PrepaymentForm'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
    title: 'Предоплата - SDU Prom 2025',
    description: 'Внесите предоплату за выпускной',
}

export default function PrepaymentPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50 py-12">
                <div className="container mx-auto max-w-2xl px-4">
                    <h1 className="mb-8 text-center text-3xl font-bold">Предоплата за выпускной</h1>
                    <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-800">
                        <p className="text-lg font-semibold">
                            Внимание! Оплата принимается только через Kaspi
                        </p>
                        <p className="mt-2">Реквизиты: 4400430216816501 - Айдана Б.</p>
                        <p className="mt-1">Сумма предоплаты: 25,000 тенге</p>
                    </div>
                    <PrepaymentForm />
                </div>
            </main>
        </>
    )
}