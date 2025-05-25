'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
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
} from '@/components/ui/form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import { api, uploadFile } from '@/lib/api'
import { useAuth } from '@/hooks/useAuth'
import FileUpload from '@/components/forms/FileUpload'
import CompatibilityQuiz from '@/components/forms/CompatibilityQuiz'

const formSchema = z.object({
    table_preferences: z.string().optional(),
    telegram_contacts: z.string().optional(),
    table_size: z.number().min(1).max(12),
    receipt_file: z.any(),
})

export default function FinalPaymentForm() {
    const router = useRouter()
    const { toast } = useToast()
    const { user } = useAuth()
    const [loading, setLoading] = useState(false)
    const [receiptFile, setReceiptFile] = useState<File | null>(null)
    const [showQuiz, setShowQuiz] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            table_preferences: user?.table_preferences || '',
            telegram_contacts: user?.telegram_contacts || '',
            table_size: user?.table_size || 1,
        },
    })

    useEffect(() => {
        if (user) {
            form.reset({
                table_preferences: user.table_preferences || '',
                telegram_contacts: user.telegram_contacts || '',
                table_size: user.table_size || 1,
            })
        }
    }, [user, form])

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!receiptFile) {
            toast({
                title: 'Ошибка',
                description: 'Пожалуйста, загрузите чек об оплате',
                variant: 'destructive',
            })
            return
        }

        if (values.table_size < 12) {
            setShowQuiz(true)
            return
        }

        await submitPayment(values)
    }

    async function submitPayment(values: z.infer<typeof formSchema>, quizAnswers?: any) {
        setLoading(true)
        try {
            // Upload receipt
            const uploadResponse = await uploadFile(receiptFile!, '/payments/upload-receipt')

            // Submit final payment
            await api.post('/payments/final', {
                ...values,
                receipt_url: uploadResponse.data.url,
                compatibility_answers: quizAnswers,
            })

            toast({
                title: 'Доплата принята',
                description: 'Спасибо! До встречи на выпускном!',
            })

            router.push('/')
        } catch (error: any) {
            toast({
                title: 'Ошибка',
                description: error.response?.data?.detail || 'Не удалось обработать доплату',
                variant: 'destructive',
            })
        } finally {
            setLoading(false)
        }
    }

    const handleQuizComplete = (answers: any) => {
        const formValues = form.getValues()
        submitPayment(formValues, answers)
    }

    if (showQuiz) {
        return <CompatibilityQuiz onComplete={handleQuizComplete} />
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Доплата за выпускной</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...(form as any)}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="table_preferences"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>С кем вы хотите сидеть за одним столом?</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Имена друзей" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="telegram_contacts"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Телеграмм ник и айдишки ваших друзей</FormLabel>
                                    <FormControl>
                                        <Input placeholder="@friend1, @friend2" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="table_size"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Сколько людей за вашим столом? (максимум 12)</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            min={1}
                                            max={12}
                                            {...field}
                                            onChange={(e) => field.onChange(parseInt(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormItem>
                            <FormLabel>Квитанция об оплате (PDF)</FormLabel>
                            <FileUpload
                                onFileSelect={setReceiptFile}
                                acceptedTypes=".pdf"
                                maxSize={10 * 1024 * 1024} // 10MB
                            />
                            <FormMessage />
                        </FormItem>

                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? 'Обработка...' : 'Отправить'}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}