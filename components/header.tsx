export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="text-2xl font-light tracking-widest text-foreground">
          LUXORE
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition">
            COMPRAR
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition">
            COLEÇÕES
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition">
            BLOG
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition">
            CONTATO
          </a>
        </div>

      </nav>
    </header>
  )
}
