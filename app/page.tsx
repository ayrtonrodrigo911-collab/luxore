import Header from '@/components/header'
import Hero from '@/components/hero'
import Products from '@/components/products'
import Trending from '@/components/trending'
import Process from '@/components/process'
import Ritual from '@/components/ritual'
import Journal from '@/components/journal'
import Reviews from '@/components/reviews'
import FAQ from '@/components/faq'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Products />
      <Trending />
      <Process />
      <Ritual />
      <Journal />
      <Reviews />
      <FAQ />
      <Footer />
    </main>
  )
}
