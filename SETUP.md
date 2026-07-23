# Instruções de Configuração - Luxore Website

## Primeiro Setup (após extrair o ZIP)

Siga os passos abaixo para que o projeto funcione corretamente no seu VS Code:

### 1. Instalar Dependências
```bash
npm install
```
ou se preferir usar pnpm:
```bash
pnpm install
```

### 2. Executar o Servidor de Desenvolvimento
```bash
npm run dev
```
ou com pnpm:
```bash
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### 3. Build para Produção
```bash
npm run build
npm start
```

## Se os Elementos Desaparecerem

Se após rodar `npm install` e `npm run dev` os estilos não aparecerem, tente:

### Opção 1: Limpar Cache e Reinstalar
```bash
# Delete node_modules e lock file
rm -rf node_modules package-lock.json
# ou se estiver no Windows
rmdir /s /q node_modules
del package-lock.json

# Reinstale
npm install
npm run dev
```

### Opção 2: Limpar Cache do Next.js
```bash
rm -rf .next
npm run dev
```

### Opção 3: Verificar Imports no globals.css
O arquivo `app/globals.css` deve começar com:
```css
@import 'tailwindcss';
```

Se falta essa linha, os estilos Tailwind não serão carregados.

## Arquivos Importantes

- **app/layout.tsx** - Layout principal com tema aplicado
- **app/globals.css** - Estilos globais e tema Tailwind
- **tailwind.config.js** - Configuração do Tailwind
- **postcss.config.mjs** - Configuração do PostCSS
- **components.json** - Configuração do shadcn/ui

## Dependências Principais

- Next.js 16.2.6
- React 19
- Tailwind CSS 4.3.3
- Framer Motion 12.42.2
- shadcn/ui

## Troubleshooting

**Problema: Estilos não aparecem**
- Verifique se `node_modules` foi instalado
- Verifique se `app/globals.css` tem `@import 'tailwindcss'` no início
- Tente: `npm run build` seguido de `npm start`

**Problema: Vídeo não aparece**
- Certifique-se de que `public/videos/hero-video.mp4` existe
- Se não existir, coloque seu vídeo em `public/videos/hero-video.mp4`

**Problema: Animações não funcionam**
- Verifique se `framer-motion` foi instalado: `npm list framer-motion`
- Se não, instale: `npm install framer-motion`

## Suporte

Todos os componentes estão em `components/` e são totalmente customizáveis.
O site está 100% responsivo e funciona em desktop e mobile.
