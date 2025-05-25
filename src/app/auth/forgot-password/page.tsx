import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
    title: 'Восстановление пароля - SDU Prom 2025',
    description: 'Восстановите доступ к вашему аккаунту',
}

export default function ForgotPasswordPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50 py-12">
                <div className="container mx-auto max-w-md px-4">
                    <h1 className="mb-8 text-center text-3xl font-bold">Восстановление пароля</h1>
                    <form className="space-y-4">
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Введите ваш email"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Отправить ссылку для восстановления
                        </Button>
                    </form>
                </div>
            </main>
        </>
    )
}