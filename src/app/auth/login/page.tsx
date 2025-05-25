import { Metadata } from 'next'
import LoginForm from '@/components/forms/LoginForm'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
    title: 'Вход - SDU Prom 2025',
    description: 'Войдите в систему для доплаты',
}

export default function LoginPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen py-20">
                <div className="container px-4">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gradient mb-4">Вход в систему</h1>
                        <p className="text-secondary">Для тех, кто уже внес предоплату</p>
                    </div>
                    <LoginForm />
                </div>
            </main>
        </>
    )
}