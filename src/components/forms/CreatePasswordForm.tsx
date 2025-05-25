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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import { auth } from '@/lib/auth'

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
        return <div>Проверка ссылки...</div>
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Создание пароля</CardTitle>
                <CardDescription>
                    Создайте пароль для доступа к личному кабинету
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...(form as any)}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Новый пароль</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="••••••••" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Минимум 8 символов, включая заглавные и строчные буквы, и цифры
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
                                    <FormLabel>Подтвердите пароль</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="••••••••" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? 'Создание...' : 'Создать пароль'}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}