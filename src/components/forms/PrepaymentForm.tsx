'use client'

import { useState } from 'react'
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import { api, uploadFile } from '@/lib/api'
import FileUpload from '@/components/forms/FileUpload'
import ArtistSelectionModal from '@/components/modals/ArtistSelectionModal'

const formSchema = z.object({
    full_name: z.string().min(1, 'Обязательное поле'),
    email: z.string().email('Введите корректный email'),
    personal_email: z.string().email('Введите корректный email'),
    phone: z.string().min(10, 'Введите корректный номер телефона'),
    team_preference: z.string().min(1, 'Выберите предпочтение'),
    telegram_nick: z.string().min(1, 'Обязательное поле'),
    receipt_file: z.any(),
})

export default function PrepaymentForm() {
    const router = useRouter()
    const { toast } = useToast()
    const [loading, setLoading] = useState(false)
    const [receiptFile, setReceiptFile] = useState<File | null>(null)
    const [showArtistModal, setShowArtistModal] = useState(false)
    const [submittedUserId, setSubmittedUserId] = useState<string | null>(null)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            full_name: '',
            email: '',
            personal_email: '',
            phone: '',
            team_preference: '',
            telegram_nick: '',
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!receiptFile) {
            toast({
                title: 'Ошибка',
                description: 'Пожалуйста, загрузите чек об оплате',
                variant: 'destructive',
            })
            return
        }

        setLoading(true)
        try {
            // Upload receipt
            const uploadResponse = await uploadFile(receiptFile, '/payments/upload-receipt')

            // Submit prepayment
            const response = await api.post('/payments/prepayment', {
                ...values,
                receipt_url: uploadResponse.data.url,
            })

            setSubmittedUserId(response.data.user_id)
            setShowArtistModal(true)

            toast({
                title: 'Предоплата принята',
                description: 'Спасибо за регистрацию! Проверьте вашу почту.',
            })
        } catch (error: any) {
            toast({
                title: 'Ошибка',
                description: error.response?.data?.detail || 'Не удалось обработать предоплату',
                variant: 'destructive',
            })
        } finally {
            setLoading(false)
        }
    }

    const handleArtistSelection = async (artistId: string) => {
        if (!submittedUserId) return

        try {
            await api.post('/users/artist-vote', {
                user_id: submittedUserId,
                artist_id: artistId,
            })

            setShowArtistModal(false)
            router.push('/')
        } catch (error) {
            console.error('Failed to save artist selection:', error)
            router.push('/')
        }
    }

    return (
        <>
            <Card>
                <CardContent className="p-6">
                    <Form {...form as any}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="full_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>ФИО</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Иванов Иван Иванович" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="grid md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>SDU Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="example@stu.sdu.edu.kz" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="personal_email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Персональная почта</FormLabel>
                                            <FormControl>
                                                <Input placeholder="example@gmail.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Номер телефона</FormLabel>
                                            <FormControl>
                                                <Input placeholder="+7 777 123 45 67" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="telegram_nick"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Telegram ник</FormLabel>
                                            <FormControl>
                                                <Input placeholder="@username" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="team_preference"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Есть ли у вас предпочтения по команде?</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Выберите вариант" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="friends">Хочу быть с друзьями</SelectItem>
                                                <SelectItem value="new">Хочу познакомиться с новыми людьми</SelectItem>
                                            </SelectContent>
                                        </Select>
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

            <ArtistSelectionModal
                isOpen={showArtistModal}
                onClose={() => setShowArtistModal(false)}
                onSelect={handleArtistSelection}
            />
        </>
    )
}