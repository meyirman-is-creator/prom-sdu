import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQ_ITEMS } from '@/lib/constants'

export default function FAQSection() {
    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
                    Часто задаваемые вопросы
                </h2>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {FAQ_ITEMS.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-slate-200">
                                <AccordionTrigger className="text-slate-900 hover:text-slate-700">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <div className="whitespace-pre-line text-slate-700">{item.answer}</div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}