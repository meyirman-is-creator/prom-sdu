'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
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

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl text-center">
                        Угадай, кто будет хедлайнером?
                    </DialogTitle>
                </DialogHeader>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    {ARTISTS.map((artist) => (
                        <div
                            key={artist.id}
                            onClick={() => setSelectedArtist(artist.id)}
                            className={cn(
                                'relative aspect-square cursor-pointer rounded-lg overflow-hidden transition-all',
                                selectedArtist === artist.id
                                    ? 'ring-4 ring-primary scale-105'
                                    : 'hover:scale-105'
                            )}
                        >
                            <Image
                                src={artist.image}
                                alt={artist.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-3">
                                <h3 className="text-white font-semibold">{artist.name}</h3>
                            </div>
                            {selectedArtist === artist.id && (
                                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                                    <div className="bg-primary text-primary-foreground rounded-full p-2">
                                        <Check className="h-6 w-6" />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-6">
                    <Button
                        onClick={handleSubmit}
                        disabled={!selectedArtist}
                        size="lg"
                        className="px-8"
                    >
                        Подтвердить выбор
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}