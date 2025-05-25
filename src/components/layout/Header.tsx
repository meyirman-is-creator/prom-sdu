'use client'

import Link from 'next/link'

export default function Header() {
    return (
        <header className="header">
            <div className="container header-container">
                <Link href="/" className="header-logo">
                    SDU PROM 2025
                </Link>

                <nav className="header-nav">
                    <Link href="/#about">О событии</Link>
                    <Link href="/#program">Программа</Link>
                    <Link href="/#headliner">Хедлайнер</Link>
                    <Link href="/#payment">Оплата</Link>
                    <Link href="/#faq">FAQ</Link>
                    <Link href="/payment/prepayment">
                        <button className="btn btn-blue">Зарегистрироваться</button>
                    </Link>
                </nav>
            </div>
        </header>
    )
}