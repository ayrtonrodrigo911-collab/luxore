# Guia de Solução de Problemas - Luxore Website

## Problema: Elementos Desaparecem após `npm install`

Este é o problema mais comum quando exporta o projeto em ZIP. Aqui estão as soluções:

### Causa Raiz

O Tailwind CSS não está sendo carregado corretamente. Isso geralmente acontece porque:
1. O arquivo `globals.css` não tem o import correto
2. A compilação do PostCSS não rodou
3. Cache do Next.js está corrompido

### Solução 1: Limpar e Reinstalar (RECOMENDADO)

**Windows:**
```bash
npm run clean:win
npm run dev
```

**Mac/Linux:**
```bash
npm run clean
npm run dev
```

Isso vai:
- Remover a pasta `.next` (cache do Next.js)
- Remover `node_modules` completamente
- Reinstalar todas as dependências
- Reconstruir o Tailwind CSS

### Solução 2: Verificar o globals.css

O arquivo `app/globals.css` DEVE começar com:
```css
@import 'tailwindcss';
@import 'tw-animate-css';
@import 'shadcn/tailwind.css';
```

Se essas linhas não estiverem lá, os estilos não carregarão!

### Solução 3: Limpar Cache Manualmente

**Windows (Command Prompt):**
```bash
rmdir /s /q .next
rmdir /s /q node_modules
del package-lock.json
npm install
npm run dev
```

**Windows (PowerShell):**
```bash
Remove-Item -Recurse -Force .next
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
npm run dev
```

**Mac/Linux:**
```bash
rm -rf .next
rm -rf node_modules
rm package-lock.json
npm install
npm run dev
```

### Solução 4: Usar npm cache clean

```bash
npm cache clean --force
npm install
npm run dev
```

## Problema: Porta 3000 já está em uso

Se receber erro "Port 3000 is already in use":

```bash
npm run dev -- -p 3001
```

Isso vai rodar na porta 3001 em vez de 3000.

## Problema: Vídeo não aparece no hero

Verifique se o arquivo do vídeo está em:
```
public/videos/hero-video.mp4
```

Se não tiver, coloque seu vídeo lá. Se quiser usar outro nome, atualize em `components/hero.tsx`:
```tsx
src="/videos/seu-video.mp4"
```

## Problema: Animações não funcionam

Verifique se o Framer Motion foi instalado:
```bash
npm list framer-motion
```

Se não aparecer, instale:
```bash
npm install framer-motion
```

## Problema: Build falha com erros de TypeScript

Execute:
```bash
npm run build
```

Se tiver muitos erros, você pode ignorá-los (já estão configurados para ignorar):
```bash
npm run dev
```

O servidor de desenvolvimento vai funcionar mesmo com erros.

## Problema: Imagens não carregam

Todas as imagens devem estar em:
```
public/
├── hero.png
├── products/
│   ├── radiance-boost.png
│   ├── velvet-milk.png
│   ├── vitamin-c.png
│   └── lip-serum.png
├── trending-1.png
├── trending-2.png
├── ritual-1.png
├── ritual-2.png
├── ritual-3.png
├── blog-1.png
├── blog-2.png
├── blog-3.png
└── videos/
    └── hero-video.mp4
```

## Problema: Tailwind não está sendo aplicado

1. Abra DevTools (F12)
2. Vá para a aba "Elements"
3. Procure por `<html>` e veja se tem a classe `bg-background`
4. Verifique se a classe tem estilos no arquivo: `Styles` ou `Computed`

Se não tiver estilos:
- Feche o VS Code
- Delete `node_modules` e `.next`
- Reabra VS Code
- Execute `npm install && npm run dev`

## Verificação de Setup Correto

Após rodar `npm install`, você deve ter:

✓ Pasta `node_modules` com ~600+ pastas
✓ Arquivo `package-lock.json` criado
✓ Arquivo `.next` não deve existir ainda (será criado ao rodar dev)

Se algum desses não existir, algo deu errado com o npm install.

## Scripts Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar versão de produção
npm start

# Limpar tudo e reinstalar (Mac/Linux)
npm run clean

# Limpar tudo e reinstalar (Windows)
npm run clean:win

# Verificar linting
npm run lint
```

## Contato com Suporte

Se nenhuma dessas soluções funcionar:

1. Verifique se está usando Node.js 18+:
   ```bash
   node --version
   ```

2. Verifique se tem npm 9+:
   ```bash
   npm --version
   ```

3. Tente usar pnpm em vez de npm:
   ```bash
   npm install -g pnpm
   pnpm install
   pnpm dev
   ```

4. Se mesmo assim não funcionar, crie um novo projeto Next.js e copie os arquivos manualmente.
