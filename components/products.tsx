'use client'

import Image from 'next/image'
import { AnimatedElement } from '@/components/animated-element'

const products = [
  {
    name: 'Sérum Intenso Radiance',
    price: 'R$ 250',
    image: '/products/radiance-boost.png',
  },
  {
    name: 'Limpador Velvet Milk',
    price: 'R$ 200',
    image: '/products/velvet-milk.png',
  },
  {
    name: 'Sérum Vitamina C',
    price: 'R$ 250',
    image: '/products/vitamin-c.png',
  },
  {
    name: 'Sérum para Lábios',
    price: 'R$ 199',
    image: '/products/lip-serum.png',
  },
]

export default function Products() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex justify-between items-end">
          <AnimatedElement animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              Acreditamos que cuidados com a pele são um ritual, não uma rotina
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fade-up">
            <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition">
              Ver Mais →
            </a>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <AnimatedElement 
              key={product.name} 
              animation="fade-up" 
              delay={index * 0.1}
            >
              <div className="flex flex-col">
                <div className="relative h-64 md:h-80 mb-6 bg-secondary rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.price}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}
