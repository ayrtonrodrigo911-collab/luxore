'use client'

import Image from 'next/image'
import { AnimatedElement } from '@/components/animated-element'

const articles = [
  {
    title: 'A Série da Hidratação: Pedra e Luz Solar',
    image: '/blog-1.png',
  },
  {
    title: 'A Arte do Ritual Noturno',
    image: '/blog-2.png',
  },
  {
    title: 'Soluções para Pele Sensível',
    image: '/blog-3.png',
  },
]

export default function Journal() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex justify-between items-end">
          <AnimatedElement animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              Do Blog
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fade-up">
            <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition">
              Ver Mais →
            </a>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <AnimatedElement 
              key={article.title} 
              animation="fade-up"
              delay={index * 0.1}
            >
              <div className="group cursor-pointer">
              <div className="relative h-48 md:h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition">
                {article.title}
              </h3>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Newsletter */}
        <AnimatedElement animation="scale">
          <div className="bg-secondary rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4">
            20% de Desconto no Seu Primeiro Pedido
          </h3>
          <p className="text-muted-foreground mb-6">
            Receba 20% de desconto na sua primeira compra
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Digite seu email"
              className="px-4 py-3 rounded-none border border-border text-foreground placeholder:text-muted-foreground flex-1 max-w-md"
            />
            <button className="bg-foreground text-background px-8 py-3 rounded-none font-medium hover:bg-primary transition">
              Inscrever
            </button>
          </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}
