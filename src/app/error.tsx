'use client'

import { useEffect } from 'react'
import { AlertCircle } from 'lucide-react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="error-container">
                <AlertCircle className="w-16 h-16 text-danger mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Что-то пошло не так!</h2>
                <p className="text-secondary mb-8">
                    Произошла ошибка при загрузке страницы
                </p>
                <button
                    onClick={reset}
                    className="btn btn-primary"
                >
                    Попробовать снова
                </button>
            </div>
        </div>
    )
}