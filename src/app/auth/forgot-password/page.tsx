import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Header from '@/components/layout/Header'
import Link from 'next/link'
import { Mail, ArrowLeft, Send } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Восстановление пароля - SDU Prom 2025',
    description: 'Восстановите доступ к вашему аккаунту',
}

export default function ForgotPasswordPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen py-20">
                <div className="container px-4">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gradient mb-4">Восстановление пароля</h1>
                        <p className="text-secondary">Введите email для получения инструкций</p>
                    </div>

                    <div className="card max-w-md mx-auto">
                        <div className="card-header text-center">
                            <Mail className="w-12 h-12 mx-auto mb-4 text-gradient" />
                            <h3 className="card-title">Забыли пароль?</h3>
                            <p className="card-description">
                                Не волнуйтесь, мы отправим вам инструкции по восстановлению
                            </p>
                        </div>
                        <div className="card-content">
                            <form className="space-y-6">
                                <div>
                                    <Label htmlFor="email" className="form-label">
                                        <Mail className="w-4 h-4 inline mr-2" />
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        className="form-input"
                                        placeholder="Введите ваш email"
                                        required
                                    />
                                </div>

                                <Button type="submit" className="btn btn-primary w-full">
                                    <Send className="w-5 h-5 mr-2" />
                                    Отправить инструкции
                                </Button>
                            </form>

                            <div className="mt-6 text-center">
                                <Link href="/auth/login" className="inline-flex items-center text-primary hover:underline">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Вернуться к входу
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}