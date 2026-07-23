'use client'

import { Button } from '@/components/ui/button'
import { AnimatedElement } from '@/components/animated-element'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Video Banner with Blue Overlay - Full Screen Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          animate={{ scale: isScrolled ? 1.05 : 1 }}
          transition={{ duration: 0.8 }}
        >
          <video
            src="/videos/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Very Light Blue Overlay */}
        <div className="absolute inset-0 bg-blue-500 opacity-5" />
      </div>

      {/* Text Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-start">
        <div className="max-w-2xl px-6 md:px-12">
          <AnimatedElement animation="fade-up" delay={0.1}>
            <div className="text-sm uppercase tracking-widest text-white mb-6 drop-shadow-lg">
              Cuidados Dermatológicos Formulados
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" delay={0.2}>
            <h1 className="text-5xl md:text-6xl font-light leading-tight text-white mb-8 drop-shadow-lg">
              Sua beleza natural, expressa com cuidado
            </h1>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" delay={0.3}>
            <p className="text-lg text-white mb-8 max-w-md leading-relaxed drop-shadow-lg">
              Nossas fórmulas são desenvolvidas em colaboração com dermatologistas para garantir máximo conforto e resultados visíveis para todos os tipos de pele.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" delay={0.4}>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="text-sm text-white drop-shadow-lg">Sem Crueldade Animal</div>
              <div className="text-sm text-white drop-shadow-lg">Testado por Dermatologista</div>
              <div className="text-sm text-white drop-shadow-lg">Ingredientes Naturais</div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" delay={0.5}>
            <div>
              <Button className="bg-white text-black hover:bg-gray-100 font-medium px-8 py-6 rounded-none">
                Compre a Coleção
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}
