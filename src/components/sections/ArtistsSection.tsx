'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ARTISTS } from '@/lib/constants'
import { Music } from 'lucide-react'

export default function ArtistsSection() {
    const [hoveredArtist, setHoveredArtist] = useState<string | null>(null)

    return (
        <section id="headliner" className="section">
            <div className="container">
                <h2 className="section-title">Хедлайнер вечера</h2>
                <p className="section-subtitle">
                    Один из этих артистов выйдет на сцену. Угадай кто?
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto">
                    {ARTISTS.map((artist) => (
                        <div
                            key={artist.id}
                            className="artist-card"
                            onMouseEnter={() => setHoveredArtist(artist.id)}
                            onMouseLeave={() => setHoveredArtist(null)}
                        >
                            <Image
                                src={artist.image}
                                alt={artist.name}
                                fill
                                className="artist-image"
                            />
                            <div className="artist-overlay">
                                <h3 className="artist-name">{artist.name}</h3>
                            </div>
                            {hoveredArtist === artist.id && (
                                <div className="absolute inset-0 bg-gradient opacity-40 flex items-center justify-center">
                                    <div className="text-white text-4xl sm:text-6xl animate-pulse">?</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-6 sm:mt-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-surface backdrop-blur">
                        <Music className="w-4 h-4 sm:w-5 sm:h-5 text-gradient" />
                        <span className="text-gradient font-semibold text-sm sm:text-base">
                            Голосуй при регистрации и влияй на выбор!
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}