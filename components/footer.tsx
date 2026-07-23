import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Closing CTA */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-center border-b border-secondary">
        <h2 className="text-4xl md:text-5xl font-light mb-4">
          Pronto para Sua Melhor Pele Ainda?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Comece sua jornada de cuidados com a pele com Luxore hoje
        </p>
        <button className="bg-background text-foreground px-8 py-3 rounded-none font-medium hover:bg-secondary transition">
          Compre Agora
        </button>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-medium mb-4 text-lg">LUXORE</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Página Inicial</a></li>
              <li><a href="#" className="hover:text-white transition">Comprar</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-lg">SUPORTE</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Entre em Contato</a></li>
              <li><a href="#" className="hover:text-white transition">Informações de Envio</a></li>
              <li><a href="#" className="hover:text-white transition">Suporte</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-lg">LEGAL</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition">Termos de Serviço</a></li>
              <li><a href="#" className="hover:text-white transition">Política de Reembolso</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-lg">REDES SOCIAIS</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                📱
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                💬
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                🎵
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                ▶️
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>© 2026 LUXORE. Todos os direitos reservados.</p>
          <p>Feito com cuidado para uma pele naturalmente bonita</p>
        </div>
      </div>
    </footer>
  )
}
