# Luxore - Premium Skincare Website

Website luxuoso e responsivo para marca de cuidados com a pele dermatológicos. Construído com Next.js 16, React 19, Tailwind CSS 4 e Framer Motion.

## Início Rápido

### 1. Instalar Dependências
```bash
npm install
```

### 2. Rodar Servidor de Desenvolvimento
```bash
npm run dev
```

Acesse `http://localhost:3000` no seu navegador.

### 3. Build para Produção
```bash
npm run build
npm start
```

## Problema: Elementos Desaparecem?

Se após `npm install` os estilos não aparecerem, execute:

```bash
npm run clean:win  # Windows
# ou
npm run clean      # Mac/Linux
```

Veja [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) para mais soluções.

## Recursos

- ✓ Hero Section com vídeo em background e overlay azul
- ✓ Produtos com grid responsivo
- ✓ Seção de tendências com cards animados
- ✓ Ritual de skincare em 3 etapas
- ✓ Blog com newsletter signup
- ✓ Avaliações de clientes com 5 estrelas
- ✓ FAQ expandível
- ✓ Animações suaves ao rolar a página
- ✓ Totalmente responsivo (mobile/tablet/desktop)
- ✓ 100% em Português Brasileiro

## Estrutura do Projeto

```
.
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── header.tsx          # Navegação
│   ├── hero.tsx            # Hero section com vídeo
│   ├── products.tsx        # Produtos
│   ├── trending.tsx        # Tendências
│   ├── process.tsx         # Benefícios
│   ├── ritual.tsx          # Ritual de skincare
│   ├── journal.tsx         # Blog
│   ├── reviews.tsx         # Avaliações
│   ├── faq.tsx             # Perguntas frequentes
│   ├── footer.tsx          # Footer
│   ├── animated-element.tsx # Component de animação
│   └── ui/                 # Componentes shadcn/ui
├── hooks/
│   └── use-scroll-animation.ts
├── public/
│   ├── hero.png
│   ├── products/
│   ├── blog-*.png
│   ├── ritual-*.png
│   ├── trending-*.png
│   └── videos/
│       └── hero-video.mp4
├── tailwind.config.js      # Configuração Tailwind
├── postcss.config.mjs      # Configuração PostCSS
├── next.config.mjs         # Configuração Next.js
└── package.json
```

## Customização

### Cores
Edite `app/globals.css` para mudar as cores do tema:
```css
:root {
  --background: #f5f1ed;
  --foreground: #1a1a1a;
  --accent: #c9b8a8;
  /* ... outras cores */
}
```

### Conteúdo
Todo o conteúdo de texto está nos componentes em `components/`. Procure pelos strings em português para editar.

### Vídeo Hero
Se quiser usar outro vídeo, coloque-o em `public/videos/` e atualize o path em `components/hero.tsx`.

## Dependências Principais

- **Next.js 16** - Framework React
- **React 19** - UI Library
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animações
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones

## Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Build para produção |
| `npm start` | Inicia servidor de produção |
| `npm run clean` | Limpa cache e reinstala (Mac/Linux) |
| `npm run clean:win` | Limpa cache e reinstala (Windows) |
| `npm run lint` | Verifica linting |

## Documentação Adicional

- [SETUP.md](./SETUP.md) - Instruções detalhadas de setup
- [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) - Soluções de problemas comuns

## Performance

- Lazy loading de imagens
- Otimização de animações com Framer Motion
- CSS crítico carregado inline
- Suporte a SSR com Next.js

## Browser Support

- Chrome (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Edge (últimas 2 versões)

## License

Este projeto é para uso pessoal e comercial. Sinta-se livre para customizar e usar como quiser.

## Contato

Para mais informações ou suporte, consulte [TROUBLESHOOTING.md](./TROUBLESHOOTING.md).

---

Desenvolvido com ❤️ usando v0.app
