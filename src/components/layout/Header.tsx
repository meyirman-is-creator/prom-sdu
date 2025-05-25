'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'

export default function Header() {
    const { user } = useAuth()

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-16 items-center">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="text-xl font-bold text-slate-900">SDU PROM 2025</span>
                </Link>

                <nav className="flex flex-1 items-center justify-end space-x-6 text-sm font-medium">
                    <Link href="/#about" className="transition-colors text-slate-700 hover:text-slate-900">
                        О событии
                    </Link>
                    <Link href="/#program" className="transition-colors text-slate-700 hover:text-slate-900">
                        Программа
                    </Link>
                    <Link href="/#headliner" className="transition-colors text-slate-700 hover:text-slate-900">
                        Хедлайнер
                    </Link>
                    <Link href="/#payment" className="transition-colors text-slate-700 hover:text-slate-900">
                        Оплата
                    </Link>
                    <Link href="/#faq" className="transition-colors text-slate-700 hover:text-slate-900">
                        FAQ
                    </Link>

                    {user ? (
                        <Link href="/payment/final">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Личный кабинет</Button>
                        </Link>
                    ) : (
                        <Link href="/payment/prepayment">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Зарегистрироваться</Button>
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    )
}