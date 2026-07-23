'use client'

import Image from 'next/image'
import { AnimatedElement } from '@/components/animated-element'

const ritualSteps = [
  {
    number: '01',
    title: 'Limpar',
    description: 'Comece seu ritual com nosso limpador suave mas eficaz',
    image: '/ritual-1.png',
  },
  {
    number: '02',
    title: 'Nutrir',
    description: 'Aplique nossos séruns e essências nutritivos',
    image: '/ritual-2.png',
  },
  {
    number: '03',
    title: 'Restaurar',
    description: 'Finalize com nossos hidratantes restauradores',
    image: '/ritual-3.png',
  },
]

export default function Ritual() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedElement animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4 text-center">
            Um Ritual Simples Para Uma Pele Que
          </h2>
        </AnimatedElement>
        <AnimatedElement animation="fade-up">
          <h3 className="text-4xl md:text-5xl font-light text-foreground text-center mb-12">
            Irrada Naturalmente
          </h3>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ritualSteps.map((step, index) => (
            <AnimatedElement 
              key={step.number} 
              animation="fade-up"
              delay={index * 0.1}
            >
              <div className="flex flex-col">
              <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-sm font-medium text-muted-foreground mb-2">
                ETAPA {step.number}
              </div>
              <h3 className="text-2xl font-light text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}
