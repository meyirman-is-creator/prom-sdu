import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="error-container">
                <h1 className="error-title">404</h1>
                <p className="error-message">Страница не найдена</p>
                <p className="text-secondary mb-8">
                    Похоже, вы заблудились на пути к выпускному
                </p>
                <Link href="/">
                    <button className="btn btn-primary">
                        <Home className="w-5 h-5 mr-2" />
                        Вернуться на главную
                    </button>
                </Link>
            </div>
        </div>
    )
}