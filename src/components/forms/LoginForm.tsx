'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Link from 'next/link'

const formSchema = z.object({
    email: z.string().email('Введите корректный email'),
    password: z.string().min(8, 'Пароль должен содержать минимум 8 символов'),
})

export default function LoginForm() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true)
        setError('')
        try {
            // Здесь будет вызов API
            console.log('Login attempt:', values)
            // Временная заглушка
            setTimeout(() => {
                router.push('/payment/final')
            }, 1000)
        } catch (error) {
            setError('Неверный email или пароль')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Вход в систему</h3>
                <p className="card-description">
                    Введите ваши данные для доступа к доплате
                </p>
            </div>
            <div className="card-content">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="form-input"
                            placeholder="your.email@example.com"
                            {...form.register('email')}
                        />
                        {form.formState.errors.email && (
                            <p className="text-sm text-red-800 mt-2">
                                {form.formState.errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Пароль</label>
                        <input
                            id="password"
                            type="password"
                            className="form-input"
                            placeholder="••••••••"
                            {...form.register('password')}
                        />
                        {form.formState.errors.password && (
                            <p className="text-sm text-red-800 mt-2">
                                {form.formState.errors.password.message}
                            </p>
                        )}
                    </div>

                    {error && (
                        <div className="alert alert-error">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary w-full"
                        disabled={loading}
                    >
                        {loading ? 'Вход...' : 'Войти'}
                    </button>
                </form>

                <div className="mt-4 text-center text-sm">
                    <Link href="/auth/forgot-password" className="link-primary">
                        Забыли пароль?
                    </Link>
                </div>
            </div>
        </div>
    )
}