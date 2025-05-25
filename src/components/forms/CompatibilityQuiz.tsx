'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const questions = [
    {
        id: 'social_preference',
        question: 'Как вы обычно чувствуете себя в компании новых людей?',
        options: [
            'Мне нравится знакомиться с новыми людьми и быть в центре внимания',
            'Зависит от настроения и ситуации',
            'Предпочитаю находиться в кругу знакомых людей',
        ],
    },
    {
        id: 'conversation_style',
        question: 'Вы бы предпочли:',
        options: [
            'Вести разговор и вовлекать всех в общую беседу',
            'Спокойно участвовать и иногда вставлять комментарии',
            'Слушать и наблюдать со стороны',
        ],
    },
    {
        id: 'performance_comfort',
        question: 'Насколько вам комфортно выступать на публике?',
        options: [
            'Очень люблю выступать, мне это доставляет удовольствие',
            'Могу, если попросят или будет подходящая компания',
            'Предпочитаю не выступать на публике',
        ],
    },
    {
        id: 'singing_attitude',
        question: 'Как вы относитесь к пению (караоке)?',
        options: [
            'Обожаю петь и делаю это при любой возможности',
            'Пою иногда',
            'Не пою и не люблю караоке',
        ],
    },
    {
        id: 'erudition_level',
        question: 'Как бы вы оценили свою эрудицию?',
        options: [
            'Я знаю массу интересных фактов и обожаю интеллектуальные игры',
            'У меня хороший запас знаний, и я иногда участвую в таких играх',
            'Не считаю себя эрудитом и не увлекаюсь интеллектуальными играми',
        ],
    },
    {
        id: 'photography_preference',
        question: 'Любите ли вы снимать на мероприятиях?',
        options: [
            'Да, мне нравится фиксировать интересные моменты и делать контент',
            'Иногда снимаю, если что-то особенно любопытное происходит',
            'Предпочитаю просто наслаждаться моментом и не отвлекаться на съёмку',
        ],
    },
    {
        id: 'improvisation_tendency',
        question: 'Как бы вы оценили свою склонность к импровизации?',
        options: [
            'Я легко и охотно импровизирую, спонтанные идеи – моя стихия',
            'Склонность к импровизации у меня средняя',
            'Мне сложно импровизировать – предпочитаю заранее обдуманные сценарии',
        ],
    },
    {
        id: 'music_knowledge',
        question: 'Как вы оцениваете свои знания в музыке?',
        options: [
            'Я отлично разбираюсь в музыке',
            'Мои знания довольно хорошие, но в некоторых темах могу допускать ошибки',
            'У меня базовые знания, которые позволяют отвечать на простые вопросы',
        ],
    },
    {
        id: 'meme_familiarity',
        question: 'Насколько вы знакомы с миром мемов?',
        options: [
            'Я в курсе самых свежих мемов',
            'Я знаком с популярными мемами',
            'Мемы – не моя стихия',
        ],
    },
    {
        id: 'dance_willingness',
        question: 'Готовы ли вы выйти на танцпол?',
        options: [
            'Да, с удовольствием!',
            'Скорее да, но всё зависит от настроения',
            'Предпочитаю наблюдать за танцующими',
        ],
    },
]

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

    return (
        <Card>
            <CardHeader>
                <CardTitle>Анкета для рассадки</CardTitle>
                <p className="text-sm text-muted-foreground">
                    Вопрос {currentQuestion + 1} из {questions.length}
                </p>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <h3 className="text-lg font-medium">{currentQ.question}</h3>

                    <RadioGroup value={currentAnswer} onValueChange={handleAnswer}>
                        {currentQ.options.map((option, index) => (
                            <div key={index} className="flex items-start space-x-2 mb-3">
                                <RadioGroupItem value={option} id={`option-${index}`} />
                                <Label htmlFor={`option-${index}`} className="text-sm cursor-pointer">
                                    {option}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>

                    <Button
                        onClick={handleNext}
                        disabled={!currentAnswer}
                        className="w-full"
                    >
                        {currentQuestion < questions.length - 1 ? 'Далее' : 'Завершить'}
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}