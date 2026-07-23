'use client'

import { AnimatedElement } from '@/components/animated-element'

export default function Process() {
  const benefits = [
    { number: '01', title: 'Frete Grátis', description: 'Envio padrão em todos os pedidos' },
    { number: '02', title: 'Pagamento Flexível', description: 'Escolha seu método de pagamento preferido' },
    { number: '03', title: 'Entrega Rápida', description: 'Aproveite a entrega rápida para que seus produtos essenciais de cuidados cheguem sem atrasos.' },
    { number: '04', title: 'Suporte Premium', description: 'Obtenha suporte premium de nossa equipe dedicada de cuidados com a pele, garantindo uma experiência perfeita sempre.' },
  ]

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedElement animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-12 text-center">
            O Que Todo Pedido Inclui
          </h2>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedElement 
              key={benefit.number} 
              animation="fade-up"
              delay={index * 0.1}
            >
              <div className="flex flex-col">
              <div className="text-4xl font-light text-muted-foreground mb-4">
                {benefit.number}
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}
