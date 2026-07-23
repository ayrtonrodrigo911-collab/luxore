'use client'

import { AnimatedElement } from '@/components/animated-element'

const reviews = [
  {
    initials: 'SB',
    name: 'Sofia Benites',
    text: 'Minha pele nunca ficou tão clara. O sérum penetra lindamente e vi um brilho real em duas semanas.',
    verified: true,
    rating: 5,
  },
  {
    initials: 'NC',
    name: 'Nicolas Costa',
    text: 'Delicado o suficiente para minha pele sensível, mas genuinamente eficaz. A textura se sente luxuosa e um pouco dura bastante.',
    verified: true,
    rating: 5,
  },
  {
    initials: 'AM',
    name: 'Alessandra Marques',
    text: 'A primeira rotina que realmente mantive. Vermelhidão desapareceu e minha pele se sente calma e hidratada o dia todo.',
    verified: true,
    rating: 5,
  },
]

export default function Reviews() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedElement animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4 text-center">
            O Que Nossos Clientes Dizem
          </h2>
        </AnimatedElement>
        <AnimatedElement animation="fade-up">
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Descubra o que nossos clientes têm a dizer sobre sua jornada de cuidados com a pele
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <AnimatedElement 
              key={review.name} 
              animation="fade-up"
              delay={index * 0.1}
            >
              <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                {review.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-medium text-sm">
                  {review.initials}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{review.name}</p>
                  {review.verified && (
                    <p className="text-xs text-muted-foreground">Comprador Verificado</p>
                  )}
                </div>
              </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}
