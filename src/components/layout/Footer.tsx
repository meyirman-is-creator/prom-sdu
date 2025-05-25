import Link from 'next/link'
import { Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="container py-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-slate-600">
                            © 2025 SDU PROM. Организационный комитет SDU 2025
                        </p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link
                            href="https://www.instagram.com/awesomeaydana/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-slate-900"
                        >
                            <Instagram className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://t.me/yermanovberik"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-slate-900"
                        >
                            <MessageCircle className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}