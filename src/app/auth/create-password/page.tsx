import { Metadata } from 'next'
import CreatePasswordForm from '@/components/forms/CreatePasswordForm'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
    title: 'Создание пароля - SDU Prom 2025',
    description: 'Создайте пароль для входа в систему',
}

export default function CreatePasswordPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen py-20">
                <div className="container px-4">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gradient mb-4">Создание пароля</h1>
                        <p className="text-secondary">Защитите свой аккаунт надежным паролем</p>
                    </div>
                    <CreatePasswordForm />
                </div>
            </main>
        </>
    )
}