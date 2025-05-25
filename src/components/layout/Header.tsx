'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="header">
            <div className="container header-container">
                <Link href="/" className="header-logo">
                    <Sparkles className="w-6 h-6" />
                    SDU PROM 2025
                </Link>

                <nav className="header-nav">
                    <Link href="/#about">О событии</Link>
                    <Link href="/#program">Программа</Link>
                    <Link href="/#headliner">Хедлайнер</Link>
                    <Link href="/#payment">Оплата</Link>
                    <Link href="/#faq">FAQ</Link>
                    <Link href="/payment/prepayment">
                        <button className="btn btn-primary">
                            Зарегистрироваться
                        </button>
                    </Link>
                </nav>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <>
                            <span></span>
                            <span></span>
                            <span></span>
                        </>
                    )}
                </button>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-background z-50 pt-20">
                    <nav className="flex flex-col items-center gap-6 p-8">
                        <Link href="/#about" onClick={() => setIsMenuOpen(false)}>
                            О событии
                        </Link>
                        <Link href="/#program" onClick={() => setIsMenuOpen(false)}>
                            Программа
                        </Link>
                        <Link href="/#headliner" onClick={() => setIsMenuOpen(false)}>
                            Хедлайнер
                        </Link>
                        <Link href="/#payment" onClick={() => setIsMenuOpen(false)}>
                            Оплата
                        </Link>
                        <Link href="/#faq" onClick={() => setIsMenuOpen(false)}>
                            FAQ
                        </Link>
                        <Link href="/payment/prepayment" onClick={() => setIsMenuOpen(false)}>
                            <button className="btn btn-primary">
                                Зарегистрироваться
                            </button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}