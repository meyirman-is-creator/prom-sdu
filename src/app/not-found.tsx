import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="mt-4 text-xl">Страница не найдена</p>
            <Link href="/" className="mt-8">
                <Button>Вернуться на главную</Button>
            </Link>
        </div>
    )
}