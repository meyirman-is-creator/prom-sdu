'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from '@/components/ui/form'
import { useToast } from '@/components/ui/use-toast'
import { auth } from '@/lib/auth'
import { Shield, Lock, CheckCircle, AlertCircle } from 'lucide-react'

const formSchema = z.object({
    password: z.string()
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .regex(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
        .regex(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
        .regex(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру'),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
})

export default function CreatePasswordForm() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const { toast } = useToast()
    const [loading, setLoading] = useState(false)
    const [validating, setValidating] = useState(true)

    const userId = searchParams.get('id')
    const token = searchParams.get('token')

    useEffect(() => {
        if (!userId || !token) {
            toast({
                title: 'Ошибка',
                description: 'Недействительная ссылка',
                variant: 'destructive',
            })
            router.push('/')
        } else {
            setValidating(false)
        }
    }, [userId, token, router, toast])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: '',
            confirmPassword: '',
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!userId || !token) return

        setLoading(true)
        try {
            await auth.createPassword(userId, token, values.password)
            toast({
                title: 'Пароль создан',
                description: 'Вы будете перенаправлены на страницу доплаты',
            })
            router.push('/payment/final')
        } catch (error: any) {
            toast({
                title: 'Ошибка',
                description: error.response?.data?.detail || 'Не удалось создать пароль',
                variant: 'destructive',
            })
        } finally {
            setLoading(false)
        }
    }

    if (validating) {
        return (
            <div className="loading-container">
                <div className="text-center">
                    <div className="spinner mx-auto mb-4"></div>
                    <p className="text-gradient font-semibold animate-pulse">Проверка ссылки...</p>
                </div>
            </div>
        )
    }

    const passwordStrength = form.watch('password')
    const hasUpperCase = /[A-Z]/.test(passwordStrength)
    const hasLowerCase = /[a-z]/.test(passwordStrength)
    const hasNumber = /[0-9]/.test(passwordStrength)
    const hasMinLength = passwordStrength?.length >= 8

    return (
        <div className="card max-w-md mx-auto">
            <div className="card-header text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-gradient" />
                <h3 className="card-title">Создание пароля</h3>
                <p className="card-description">
                    Создайте надежный пароль для доступа к личному кабинету
                </p>
            </div>
            <div className="card-content">
                <Form {...(form as any)}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="form-label">
                                        <Lock className="w-4 h-4 inline mr-2" />
                                        Новый пароль
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            className="form-input"
                                            placeholder="••••••••"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        <div className="mt-3 space-y-2">
                                            <div className={`flex items-center gap-2 text-sm ${hasMinLength ? 'text-green-400' : 'text-secondary'}`}>
                                                {hasMinLength ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                                                Минимум 8 символов
                                            </div>
                                            <div className={`flex items-center gap-2 text-sm ${hasUpperCase ? 'text-green-400' : 'text-secondary'}`}>
                                                {hasUpperCase ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                                                Заглавная буква
                                            </div>
                                            <div className={`flex items-center gap-2 text-sm ${hasLowerCase ? 'text-green-400' : 'text-secondary'}`}>
                                                {hasLowerCase ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                                                Строчная буква
                                            </div>
                                            <div className={`flex items-center gap-2 text-sm ${hasNumber ? 'text-green-400' : 'text-secondary'}`}>
                                                {hasNumber ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                                                Цифра
                                            </div>
                                        </div>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="form-label">
                                        <Lock className="w-4 h-4 inline mr-2" />
                                        Подтвердите пароль
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            className="form-input"
                                            placeholder="••••••••"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="btn btn-primary w-full" disabled={loading}>
                            {loading ? 'Создание...' : 'Создать пароль'}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}