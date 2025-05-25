'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from '@/lib/constants'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQSection() {
    const [openItem, setOpenItem] = useState<number | null>(null)

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? null : index)
    }

    return (
        <section id="faq" className="section">
            <div className="container">
                <h2 className="section-title">Часто задаваемые вопросы</h2>
                <p className="section-subtitle">
                    Всё, что нужно знать о выпускном
                </p>

                <div className="max-w-3xl mx-auto">
                    <div className="accordion">
                        {FAQ_ITEMS.map((item, index) => (
                            <div key={index} className="accordion-item">
                                <button
                                    className="accordion-trigger"
                                    onClick={() => toggleItem(index)}
                                >
                                    <span className="flex items-center gap-3">
                                        <HelpCircle className="w-5 h-5 text-primary" />
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform duration-300 ${openItem === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {openItem === index && (
                                    <div className="accordion-content">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-lg mb-4">Остались вопросы?</p>
                        <Link href="https://t.me/yermanovberik" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">
                                Написать организаторам
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

import Link from 'next/link'