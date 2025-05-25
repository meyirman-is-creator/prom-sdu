import { CheckCircle, X } from 'lucide-react'

interface SuccessModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    description: string
}

export default function SuccessModal({
    isOpen,
    onClose,
    title,
    description,
}: SuccessModalProps) {
    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content max-w-md" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-6">
                        <CheckCircle className="w-12 h-12 text-green-400" />
                    </div>

                    <h3 className="text-2xl font-bold text-gradient mb-3">
                        {title}
                    </h3>

                    <p className="text-lg text-secondary mb-8">
                        {description}
                    </p>

                    <button
                        onClick={onClose}
                        className="btn btn-primary"
                    >
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    )
}