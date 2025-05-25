'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Link from 'next/link'
import { Mail, Lock, LogIn } from 'lucide-react'

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
            console.log('Login attempt:', values)
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
        <div className="card max-w-md mx-auto">
            <div className="card-header text-center">
                <LogIn className="w-12 h-12 mx-auto mb-4 text-gradient" />
                <h3 className="card-title">Вход в систему</h3>
                <p className="card-description">
                    Введите ваши данные для доступа к доплате
                </p>
            </div>
            <div className="card-content">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            <Mail className="w-4 h-4 inline mr-2" />
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="form-input"
                            placeholder="your.email@example.com"
                            {...form.register('email')}
                        />
                        {form.formState.errors.email && (
                            <p className="text-sm text-danger mt-2">
                                {form.formState.errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            <Lock className="w-4 h-4 inline mr-2" />
                            Пароль
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="form-input"
                            placeholder="••••••••"
                            {...form.register('password')}
                        />
                        {form.formState.errors.password && (
                            <p className="text-sm text-danger mt-2">
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

                <div className="mt-6 text-center">
                    <Link href="/auth/forgot-password" className="text-primary hover:underline">
                        Забыли пароль?
                    </Link>
                </div>
            </div>
        </div>
    )
}