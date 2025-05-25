import { PROGRAM_ITEMS } from '@/lib/constants'
import { Card, CardContent } from '@/components/ui/card'

export default function ProgramSection() {
    return (
        <section id="program" className="py-20 bg-slate-50">
            <div className="container px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
                    Программа вечера
                </h2>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {PROGRAM_ITEMS.map((item, index) => (
                            <Card key={index} className="bg-white border border-slate-200 shadow-sm">
                                <CardContent className="flex items-center p-6">
                                    <div className="text-4xl mr-6">{item.icon}</div>
                                    <div className="flex-1">
                                        <div className="text-xl font-semibold text-slate-900">{item.time}</div>
                                        <div className="text-slate-600">{item.title}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}