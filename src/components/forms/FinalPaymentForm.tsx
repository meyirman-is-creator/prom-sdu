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
import { useToast } from '@/components/ui/use-toast'
import { api, uploadFile } from '@/lib/api'
import { useAuth } from '@/hooks/useAuth'
import FileUpload from '@/components/forms/FileUpload'
import CompatibilityQuiz from '@/components/forms/CompatibilityQuiz'
import { Users, MessageCircle, Hash, FileText, CheckCircle2 } from 'lucide-react'

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
            const uploadResponse = await uploadFile(receiptFile!, '/payments/upload-receipt')

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
        return (
            <div className="max-w-2xl mx-auto">
                <CompatibilityQuiz onComplete={handleQuizComplete} />
            </div>
        )
    }

    return (
        <div className="card">
            <div className="card-header text-center">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-gradient" />
                <h3 className="card-title">Финальный шаг</h3>
                <p className="card-description">
                    Выберите столик и завершите оплату
                </p>
            </div>
            <div className="card-content">
                <Form {...(form as any)}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="table_preferences"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="form-label">
                                        <Users className="w-4 h-4 inline mr-2" />
                                        С кем вы хотите сидеть за одним столом?
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="form-input"
                                            placeholder="Имена друзей через запятую"
                                            {...field}
                                        />
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
                                    <FormLabel className="form-label">
                                        <MessageCircle className="w-4 h-4 inline mr-2" />
                                        Телеграмм ники ваших друзей
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="form-input"
                                            placeholder="@friend1, @friend2"
                                            {...field}
                                        />
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
                                    <FormLabel className="form-label">
                                        <Hash className="w-4 h-4 inline mr-2" />
                                        Сколько людей за вашим столом?
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="form-input"
                                            type="number"
                                            min={1}
                                            max={12}
                                            {...field}
                                            onChange={(e) => field.onChange(parseInt(e.target.value))}
                                        />
                                    </FormControl>
                                    <p className="text-sm text-secondary mt-1">
                                        Максимум 12 человек за столом
                                    </p>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormItem>
                            <FormLabel className="form-label">
                                <FileText className="w-4 h-4 inline mr-2" />
                                Квитанция об оплате (PDF)
                            </FormLabel>
                            <FileUpload
                                onFileSelect={setReceiptFile}
                                acceptedTypes=".pdf"
                                maxSize={10 * 1024 * 1024}
                            />
                            <FormMessage />
                        </FormItem>

                        <Button type="submit" className="btn btn-primary w-full" disabled={loading}>
                            {loading ? 'Обработка...' : 'Завершить оплату'}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}