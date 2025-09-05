export function StatsSection() {
  return (
    <section id="stats-section" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md mb-4">Nosotros</div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Avanzados en Medicina de Precisión</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              En PIA Belgrano, combinamos la experiencia médica tradicional con la innovación tecnológica más avanzada.
              Nuestro equipo multidisciplinario está compuesto por oncólogos, radiólogos, ingenieros en IA y científicos
              de datos.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-muted-foreground mb-2">95%</div>
                <p className="text-sm text-muted-foreground">Precisión en Diagnósticos</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
                <p className="text-sm text-muted-foreground">Pacientes Atendidos</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-60 bg-muted rounded-lg flex items-center justify-center">
              <img
                src="/professional-doctor-with-stethoscope-in-medical-of.png"
                alt="Doctor profesional en consulta médica"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
