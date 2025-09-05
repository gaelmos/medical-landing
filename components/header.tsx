export function Header() {
  return (
    <header className="bg-primary text-primary-foreground px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
            <span className="text-primary font-bold text-sm">PIA</span>
          </div>
          <span className="font-semibold">Belgrano</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#inicio" className="hover:opacity-80 transition-opacity">
            INICIO
          </a>
          <a href="#nosotros" className="hover:opacity-80 transition-opacity">
            NOSOTROS
          </a>
          <a href="#servicios" className="hover:opacity-80 transition-opacity">
            SERVICIOS
          </a>
          <a href="#instituciones" className="hover:opacity-80 transition-opacity">
            INSTITUCIONES
          </a>
          <a href="#contacto" className="hover:opacity-80 transition-opacity">
            CONTACTO
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
          <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
          <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
        </div>
      </div>
    </header>
  )
}
