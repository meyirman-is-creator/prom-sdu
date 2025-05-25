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
            <main className="min-h-screen bg-gray-50 py-12">
                <div className="container max-w-md px-4">
                    <h1 className="mb-8 text-center text-3xl font-bold">Вход в систему</h1>
                    <LoginForm />
                </div>
            </main>
        </>
    )
}