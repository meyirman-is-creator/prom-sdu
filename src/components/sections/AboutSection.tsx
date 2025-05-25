import { Card, CardContent } from '@/components/ui/card'

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
                    О событии
                </h2>

                <div className="max-w-4xl mx-auto">
                    <Card className="bg-white border border-slate-200 shadow-sm">
                        <CardContent className="p-8">
                            <p className="text-lg mb-4 text-slate-700">
                                Мы верим, что этот выпускной должен стать событием, о котором будут говорить не только в стенах SDU, но и за его пределами.
                            </p>
                            <p className="text-lg mb-4 text-slate-700">
                                Мы — студенты факультета <strong className="text-slate-900">Information Systems / Computer Science</strong> — берём инициативу в свои руки, чтобы создать нечто большее, чем просто торжество.
                            </p>
                            <p className="text-lg mb-4 text-slate-700">
                                Мы хотим показать, что <strong className="text-slate-900">SDU развивается и становится сильнее</strong> благодаря студентам, которые не боятся действовать. Таким, как <strong className="text-slate-900">ты, как мы — как каждый из нас</strong>.
                            </p>
                            <p className="text-lg mb-4 text-slate-700">
                                Мы продумали всё — от рассадки до развлечений — чтобы этот вечер стал по-настоящему тёплым, весёлым и живым.
                            </p>
                            <p className="text-lg font-semibold text-slate-800">
                                <strong className="text-slate-900">Наша цель — вовлечь каждого.</strong> Неважно, насколько ты общителен — ты точно не останешься в стороне.
                            </p>
                            <p className="text-lg font-semibold mt-4 text-slate-800">
                                Этот выпускной — не для зрителей. Он для <strong className="text-slate-900">участников. Для команды. Для SDU.</strong>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="mt-12 grid grid-cols-2 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold text-blue-600 mb-2">160</div>
                            <div className="text-slate-600">уже записались</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-slate-600 mb-2">40</div>
                            <div className="text-slate-600">мест осталось</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}