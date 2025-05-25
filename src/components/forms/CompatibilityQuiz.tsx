'use client'

import { useState } from 'react'
import { questions } from '@/lib/constants'
import { Brain, ArrowRight } from 'lucide-react'

interface CompatibilityQuizProps {
    onComplete: (answers: Record<string, string>) => void
}

export default function CompatibilityQuiz({ onComplete }: CompatibilityQuizProps) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState<Record<string, string>>({})

    const handleAnswer = (value: string) => {
        setAnswers({ ...answers, [questions[currentQuestion].id]: value })
    }

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            onComplete(answers)
        }
    }

    const currentQ = questions[currentQuestion]
    const currentAnswer = answers[currentQ.id]
    const progress = ((currentQuestion + 1) / questions.length) * 100

    return (
        <div className="card">
            <div className="card-header text-center">
                <Brain className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-gradient" />
                <h3 className="card-title">Анкета для рассадки</h3>
                <p className="card-description">
                    Поможем найти идеальную компанию за столом
                </p>
            </div>
            <div className="card-content">
                <div className="quiz-progress mb-4 sm:mb-6">
                    {Array.from({ length: questions.length }).map((_, i) => (
                        <div
                            key={i}
                            className={`quiz-progress-item ${i <= currentQuestion ? 'active' : ''}`}
                        />
                    ))}
                </div>

                <div className="mb-2">
                    <p className="text-xs sm:text-sm text-secondary">
                        Вопрос {currentQuestion + 1} из {questions.length}
                    </p>
                    <div className="text-xs sm:text-sm text-primary font-semibold">
                        {Math.round(progress)}% завершено
                    </div>
                </div>

                <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{currentQ.question}</h4>

                <div className="radio-group mb-6 sm:mb-8">
                    {currentQ.options.map((option, index) => (
                        <div
                            key={index}
                            className={`radio-item ${currentAnswer === option ? 'selected' : ''}`}
                            onClick={() => handleAnswer(option)}
                        >
                            <div className="radio-input" />
                            <label className="flex-1 cursor-pointer">
                                {option}
                            </label>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    disabled={!currentAnswer}
                    className="btn btn-primary w-full"
                >
                    {currentQuestion < questions.length - 1 ? (
                        <>
                            Далее
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                        </>
                    ) : (
                        'Завершить анкету'
                    )}
                </button>
            </div>
        </div>
    )
}