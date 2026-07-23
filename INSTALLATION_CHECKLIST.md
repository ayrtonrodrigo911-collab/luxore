# Checklist de Instalação - Luxore Website

Complete estes passos para garantir que o projeto funcione perfeitamente:

## Antes de Começar

- [ ] Verificou se tem Node.js 18+ instalado? `node --version`
- [ ] Verificou se tem npm 9+ instalado? `npm --version`
- [ ] Extraiu o arquivo ZIP para uma pasta no seu computador
- [ ] Abriu a pasta no VS Code

## Primeira Instalação

### Passo 1: Instalar Dependências
```bash
npm install
```
- [ ] Comando rodou sem erros
- [ ] Criou pasta `node_modules`
- [ ] Criou arquivo `package-lock.json`

### Passo 2: Iniciar Servidor
```bash
npm run dev
```
- [ ] Servidor iniciou sem erros
- [ ] Mensagem "ready - started server on 0.0.0.0:3000" apareceu
- [ ] Pode acessar `http://localhost:3000` no navegador

### Passo 3: Verificar Estilos
Abra `http://localhost:3000` e veja se:
- [ ] Header com logo LUXORE aparece
- [ ] Cores estão visíveis (beige, branco, preto)
- [ ] Vídeo aparece no hero section
- [ ] Texto branco está visível sobre o vídeo
- [ ] Botão "Compre a Coleção" está clicável

## Se os Elementos Desaparecerem

Execute em ordem:

```bash
# Opção 1 (RECOMENDADO)
npm run clean:win    # Se estiver no Windows
npm run clean        # Se estiver no Mac/Linux

# Opção 2 (Manual)
# Delete .next e node_modules manualmente
# Depois execute:
npm install
npm run dev
```

- [ ] Após executar, os estilos voltaram

## Verificação de Funcionalidades

### Hero Section
- [ ] Vídeo está visível
- [ ] Overlay azul leve está sobre o vídeo
- [ ] Texto branco está legível
- [ ] Botão é clickável

### Scroll e Animações
- [ ] Ao rolar a página, elementos aparecem suavemente
- [ ] Produtos aparecem com animação fade-up
- [ ] Cards se movem ao rolar

### Responsividade
- [ ] Abra DevTools (F12) e ative "Device Toolbar"
- [ ] Teste tamanhos: 375px (mobile), 768px (tablet), 1920px (desktop)
- [ ] Layout se adapta corretamente em todas as resoluções

### Navegação
- [ ] Header com LUXORE, COMPRAR, COLEÇÕES, BLOG, CONTATO
- [ ] Sem ícone de lupa
- [ ] Sem menu hamburger visível no desktop

### Tradução
- [ ] Tudo em português brasileiro
- [ ] Nenhuma palavra em inglês visível
- [ ] Placeholders também em português

## Build para Produção

```bash
npm run build
npm start
```

- [ ] Build completou sem erros
- [ ] Site roda em modo de produção
- [ ] Todos os estilos estão aplicados

## Arquivos Importantes

- [ ] `app/globals.css` começa com `@import 'tailwindcss'`
- [ ] `public/videos/hero-video.mp4` existe
- [ ] `tailwind.config.js` existe
- [ ] `postcss.config.mjs` existe
- [ ] `components.json` existe

## Customização

Quando quiser modificar:

### Mudar Texto
- [ ] Edite os componentes em `components/`
- [ ] Procure pelo texto que quer mudar
- [ ] Salve o arquivo
- [ ] Página recarrega automaticamente

### Mudar Cores
- [ ] Edite `app/globals.css`
- [ ] Procure por `:root { --background: ...` 
- [ ] Mude os valores de cores
- [ ] Salve e veja as mudanças

### Adicionar Imagens
- [ ] Coloque imagens em `public/`
- [ ] Use o caminho `/nome-da-imagem.png` nos componentes

### Trocar Vídeo Hero
- [ ] Coloque seu vídeo em `public/videos/`
- [ ] Edite `components/hero.tsx`
- [ ] Mude `src="/videos/hero-video.mp4"` para seu vídeo

## Deployment (Opcional)

Para publicar na Vercel:

```bash
npm install -g vercel
vercel
```

- [ ] Loguei na minha conta Vercel
- [ ] Projeto foi importado
- [ ] Site está online em domínio Vercel

## Testes Finais

- [ ] Página carrega rápido
- [ ] Não há erros no console (F12 > Console)
- [ ] Animações são suaves
- [ ] Vídeo reproduce automaticamente
- [ ] Links de navegação funcionam (ainda que vazios)
- [ ] Formário newsletter aceita emails
- [ ] FAQ abre e fecha

## Próximos Passos

1. [ ] Leia `README.md` para mais detalhes
2. [ ] Leia `TROUBLESHOOTING.md` se tiver problemas
3. [ ] Customize cores e conteúdo conforme desejar
4. [ ] Teste em diferentes navegadores
5. [ ] Teste em dispositivos móveis
6. [ ] Faça deploy quando estiver satisfeito

## Precisa de Ajuda?

Se algo não funcionar:

1. Consulte `TROUBLESHOOTING.md`
2. Verifique se completou todos os passos acima
3. Limpe cache: `npm run clean` ou `npm run clean:win`
4. Reinicie o servidor: `npm run dev`

---

✓ Se marcou todos os boxes, seu setup está 100% correto!
