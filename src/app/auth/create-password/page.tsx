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
            <main className="min-h-screen bg-gray-50 py-12">
                <div className="container mx-auto max-w-md px-4">
                    <h1 className="mb-8 text-center text-3xl font-bold">Создание пароля</h1>
                    <CreatePasswordForm />
                </div>
            </main>
        </>
    )
}