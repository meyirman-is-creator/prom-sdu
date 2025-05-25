import { Users, Heart, Zap, Trophy } from 'lucide-react'

export default function AboutSection() {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">О событии</h2>
                <p className="section-subtitle">
                    Больше, чем просто выпускной — это начало новой истории
                </p>

                <div className="max-w-4xl mx-auto">
                    <div className="card mb-6 sm:mb-8">
                        <div className="card-content space-y-4 sm:space-y-6">
                            <p className="text-base sm:text-lg leading-relaxed">
                                Мы верим, что этот выпускной должен стать событием, о котором будут говорить не только в стенах SDU, но и за его пределами.
                            </p>
                            <p className="text-base sm:text-lg leading-relaxed">
                                Мы — студенты факультета <span className="text-gradient font-bold">Information Systems / Computer Science</span> — берём инициативу в свои руки, чтобы создать нечто большее, чем просто торжество.
                            </p>
                            <p className="text-base sm:text-lg leading-relaxed">
                                Мы хотим показать, что <span className="text-gradient font-bold">SDU развивается и становится сильнее</span> благодаря студентам, которые не боятся действовать.
                            </p>
                            <div className="p-4 sm:p-6 bg-gradient rounded-xl sm:rounded-2xl text-center">
                                <p className="text-lg sm:text-xl font-bold text-white">
                                    Наша цель — вовлечь каждого
                                </p>
                                <p className="text-base sm:text-lg text-white/90 mt-2">
                                    Этот выпускной — не для зрителей. Он для участников. Для команды. Для SDU.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="stats-grid">
                        <div className="card text-center p-4 sm:p-6">
                            <Users className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-gradient" />
                            <div className="stat-number">200</div>
                            <div className="stat-label">Гостей</div>
                        </div>
                        <div className="card text-center p-4 sm:p-6">
                            <Heart className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-gradient" />
                            <div className="stat-number">160</div>
                            <div className="stat-label">Записались</div>
                        </div>
                        <div className="card text-center p-4 sm:p-6">
                            <Zap className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-gradient" />
                            <div className="stat-number">40</div>
                            <div className="stat-label">Мест осталось</div>
                        </div>
                        <div className="card text-center p-4 sm:p-6">
                            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-gradient" />
                            <div className="stat-number">1</div>
                            <div className="stat-label">Легендарная ночь</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}