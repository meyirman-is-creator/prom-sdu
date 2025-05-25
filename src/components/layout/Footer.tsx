import Link from 'next/link'
import { Instagram, MessageCircle, Sparkles } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                            <Sparkles className="w-5 h-5 text-gradient" />
                            <span className="font-bold text-gradient">SDU PROM 2025</span>
                        </div>
                        <p className="footer-text">
                            © 2025 Организационный комитет SDU
                        </p>
                    </div>

                    <div className="footer-links">
                        <Link
                            href="https://www.instagram.com/awesomeaydana/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <Instagram className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://t.me/yermanovberik"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <MessageCircle className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}