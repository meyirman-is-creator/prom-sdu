import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PaymentSection() {
    return (
        <section id="payment" className="py-20 bg-slate-50">
            <div className="container px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
                    Оплата
                </h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="bg-white border border-slate-200 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-slate-900">Предоплата</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-slate-700">Внесите предоплату до 25 мая для бронирования места</p>
                            <p className="text-2xl font-bold mb-4 text-slate-900">25,000 тенге</p>
                            <Link href="/payment/prepayment">
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Внести предоплату</Button>
                            </Link>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border border-slate-200 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-slate-900">Доплата</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-slate-700">Для тех, кто уже внес предоплату</p>
                            <p className="text-2xl font-bold mb-4 text-slate-900">25,000 тенге</p>
                            <Link href="/auth/login">
                                <Button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900" variant="secondary">
                                    Войти для доплаты
                                </Button>
                            </Link>
                            <p className="text-sm text-slate-600 mt-2">
                                Нужно создать пароль? <Link href="/" className="text-blue-600 hover:underline">Создать</Link>
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-slate-600">
                        После внесения предоплаты вы будете добавлены в закрытый Telegram-канал <strong className="text-slate-900">SDU PROM Final Composition</strong>
                    </p>
                </div>
            </div>
        </section>
    )
}