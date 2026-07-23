'use client'

import Image from 'next/image'
import { AnimatedElement } from '@/components/animated-element'

export default function Trending() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex justify-between items-end">
          <AnimatedElement animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              Tendências em Alta
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fade-up">
            <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition">
              Ver Mais →
            </a>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Item 1 */}
          <AnimatedElement animation="fade-left">
            <div className="relative group overflow-hidden rounded-lg">
            <div className="relative h-96 md:h-full">
              <Image
                src="/trending-1.png"
                alt="Performance-Driven Skincare Ritual"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-xl md:text-2xl font-light text-white mb-2">
                Ritual de Cuidados de Alto Desempenho
              </h3>
              <p className="text-sm text-gray-200">
                Alcance resultados visíveis com nossos séruns formulados cientificamente
              </p>
              <button className="mt-4 bg-white text-foreground px-6 py-2 rounded-none font-medium text-sm w-fit hover:bg-secondary transition">
                Ler Mais
              </button>
            </div>
            </div>
          </AnimatedElement>

          {/* Item 2 */}
          <AnimatedElement animation="fade-right">
            <div className="relative group overflow-hidden rounded-lg">
            <div className="relative h-96 md:h-full">
              <Image
                src="/trending-2.png"
                alt="Nourishment That Works For You"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-xl md:text-2xl font-light text-white mb-2">
                Nutrição que Funciona para Você
              </h3>
              <p className="text-sm text-gray-200">
                Fórmulas suaves mas eficazes para todos os tipos de pele
              </p>
              <button className="mt-4 bg-white text-foreground px-6 py-2 rounded-none font-medium text-sm w-fit hover:bg-secondary transition">
                Ler Mais
              </button>
            </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}
