import { Phone, Instagram, Facebook, Twitter, MapPin } from "lucide-react"

export function Header() {
  return (
    <header>
      <div className="bg-primary text-primary-foreground px-4 py-2 text-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>URGENCIAS +54 9 2323 541169</span>
          </div>
          <div className="flex items-center gap-3">
            <Instagram className="w-4 h-4 hover:opacity-80 cursor-pointer" />
            <Facebook className="w-4 h-4 hover:opacity-80 cursor-pointer" />
            <Twitter className="w-4 h-4 hover:opacity-80 cursor-pointer" />
            <MapPin className="w-4 h-4 hover:opacity-80 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-lg">PIA</span>
            </div>
            <div>
              <div className="font-bold text-xl text-primary">PIA</div>
              <div className="text-sm text-gray-600">Belgrano</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-primary hover:text-primary/80 transition-colors font-medium">
              INICIO
            </a>
            <a href="#nosotros" className="text-primary hover:text-primary/80 transition-colors font-medium">
              NOSOTROS
            </a>
            <a href="#servicios" className="text-primary hover:text-primary/80 transition-colors font-medium">
              SERVICIOS
            </a>
            <a href="#instituciones" className="text-primary hover:text-primary/80 transition-colors font-medium">
              INSTITUCIONES
            </a>
            <a href="#testimonios" className="text-primary hover:text-primary/80 transition-colors font-medium">
              TESTIMONIOS
            </a>
            <a href="#equipo" className="text-primary hover:text-primary/80 transition-colors font-medium">
              EQUIPO
            </a>
            <a href="#contacto" className="text-primary hover:text-primary/80 transition-colors font-medium">
              CONTACTO
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
