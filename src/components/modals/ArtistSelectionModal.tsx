'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check, Music2, Sparkles } from 'lucide-react'
import { ARTISTS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface ArtistSelectionModalProps {
    isOpen: boolean
    onClose: () => void
    onSelect: (artistId: string) => void
}

export default function ArtistSelectionModal({
    isOpen,
    onClose,
    onSelect,
}: ArtistSelectionModalProps) {
    const [selectedArtist, setSelectedArtist] = useState<string | null>(null)

    const handleSubmit = () => {
        if (selectedArtist) {
            onSelect(selectedArtist)
        }
    }

    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content max-w-5xl" onClick={(e) => e.stopPropagation()}>
                <div className="text-center mb-8">
                    <Music2 className="w-16 h-16 mx-auto mb-4 text-gradient" />
                    <h2 className="text-3xl font-bold text-gradient mb-2">
                        Угадай хедлайнера!
                    </h2>
                    <p className="text-lg text-secondary">
                        Кто из этих артистов выступит на выпускном? Ваш голос важен!
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    {ARTISTS.map((artist) => (
                        <div
                            key={artist.id}
                            onClick={() => setSelectedArtist(artist.id)}
                            className={cn(
                                'relative aspect-[3/4] cursor-pointer rounded-2xl overflow-hidden transition-all duration-300',
                                selectedArtist === artist.id
                                    ? 'scale-105 shadow-xl shadow-primary/50'
                                    : 'hover:scale-105 hover:shadow-lg'
                            )}
                        >
                            <Image
                                src={artist.image}
                                alt={artist.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="text-white font-bold text-lg">{artist.name}</h3>
                            </div>

                            {selectedArtist === artist.id && (
                                <div className="absolute inset-0 bg-primary/30 backdrop-blur-sm flex items-center justify-center animate-fadeIn">
                                    <div className="bg-white rounded-full p-3 shadow-2xl">
                                        <Check className="h-8 w-8 text-primary" />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={onClose}
                        className="btn btn-secondary"
                    >
                        Отмена
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={!selectedArtist}
                        className="btn btn-primary"
                    >
                        <Sparkles className="w-5 h-5 mr-2" />
                        Подтвердить выбор
                    </button>
                </div>
            </div>
        </div>
    )
}