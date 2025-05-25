'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ARTISTS } from '@/lib/constants'
import { Card, CardContent } from '@/components/ui/card'

export default function ArtistsSection() {
    const [hoveredArtist, setHoveredArtist] = useState<string | null>(null)

    return (
        <section id="headliner" className="py-20 bg-white">
            <div className="container px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
                    Хедлайнер вечера
                </h2>
                <p className="text-xl text-center text-slate-600 mb-12">
                    Один из этих артистов выйдет на сцену!
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {ARTISTS.map((artist) => (
                        <Card
                            key={artist.id}
                            className="overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 bg-white border border-slate-200 shadow-sm"
                            onMouseEnter={() => setHoveredArtist(artist.id)}
                            onMouseLeave={() => setHoveredArtist(null)}
                        >
                            <CardContent className="p-0 relative aspect-square">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                <Image
                                    src={artist.image}
                                    alt={artist.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                                    <h3 className="text-white font-semibold text-lg">
                                        {artist.name}
                                    </h3>
                                </div>
                                {hoveredArtist === artist.id && (
                                    <div className="absolute inset-0 bg-blue-600/20 backdrop-blur-sm flex items-center justify-center z-30">
                                        <div className="text-white text-6xl animate-pulse">?</div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}