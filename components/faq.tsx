'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatedElement } from '@/components/animated-element'

const faqs = [
  {
    question: 'Esses produtos são adequados para pele sensível?',
    answer: 'Sim, nossos produtos são feitos com ingredientes suaves e são adequados para a maioria dos tipos de pele sensível. Recomendamos fazer um pequeno teste de sensibilidade antes do uso regular.',
  },
  {
    question: 'Qual é a melhor forma de armazenar os produtos?',
    answer: 'Guarde seus produtos em um local fresco e seco, longe da luz solar direta e do calor excessivo. Sempre mantenha os recipientes bem fechados para manter a frescura e eficácia.',
  },
  {
    question: 'Quando posso esperar ver resultados visíveis?',
    answer: 'Os resultados variam de pessoa para pessoa, mas muitos clientes começam a notar melhorias em poucas semanas de uso consistente. A aplicação regular ajuda a alcançar os melhores resultados.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedElement animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-12 text-center">
            Perguntas Frequentes
          </h2>
        </AnimatedElement>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedElement 
              key={index}
              animation="fade-up"
              delay={index * 0.1}
            >
              <div
              key={index}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 flex items-center justify-between hover:bg-secondary transition"
              >
                <h3 className="text-lg font-medium text-foreground text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-6 bg-secondary border-t border-border">
                  <p className="text-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}
