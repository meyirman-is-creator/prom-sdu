'use client'

import { useToast } from "@/components/ui/use-toast"
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react'

export function Toaster() {
    const { toasts } = useToast()

    return (
        <div className="fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
            {toasts.map(({ id, title, description, action, variant = 'default', ...props }) => {
                const Icon = variant === 'destructive' ? AlertCircle : CheckCircle

                return (
                    <div
                        key={id}
                        className={`
                            relative mb-4 flex w-full items-start gap-3 rounded-xl p-4 
                            backdrop-blur-md shadow-xl animate-slideIn
                            ${variant === 'destructive'
                                ? 'bg-red-500/10 border border-red-500/20 text-red-100'
                                : 'bg-green-500/10 border border-green-500/20 text-green-100'
                            }
                        `}
                    >
                        <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${variant === 'destructive' ? 'text-red-400' : 'text-green-400'
                            }`} />

                        <div className="flex-1 space-y-1">
                            {title && (
                                <div className="text-sm font-semibold leading-none">
                                    {title}
                                </div>
                            )}
                            {description && (
                                <div className="text-sm opacity-90">
                                    {description}
                                </div>
                            )}
                        </div>

                        {action}

                        <button
                            onClick={() => {
                                const event = new CustomEvent('toast-dismiss', { detail: id })
                                window.dispatchEvent(event)
                            }}
                            className="absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity hover:opacity-100 focus:opacity-100 focus:outline-none group-hover:opacity-100"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                )
            })}
        </div>
    )
}