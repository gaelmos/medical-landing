import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-16 px-4 bg-backgronund">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-800 text-white px-6 py-2 rounded text-sm font-medium mb-6">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-balance">
            Testimonios de médicos y pacientes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-white border-2 border-primary rounded-2xl">
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">JB</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Dr. Jorge Barrios</p>
                  <p className="text-sm text-gray-600">Médico</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Esta plataforma ha revolucionado la forma en que atiendo a mis pacientes. La comunicación es más fluida
                y eficiente."
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 bg-white border-2 border-primary rounded-2xl">
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">PL</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Pablo Lopez</p>
                  <p className="text-sm text-gray-600">Paciente</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Poder consultar con mi médico desde casa ha sido increíble. El servicio es excelente y muy fácil de
                usar."
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 bg-white border-2 border-primary rounded-2xl">
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">LM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Luis Morales</p>
                  <p className="text-sm text-gray-600">Paciente</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Ahorro tiempo y dinero en traslados. La atención médica online es el futuro de la salud."
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 bg-white border-2 border-primary rounded-2xl">
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">CM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Carlos Medina</p>
                  <p className="text-sm text-gray-600">Paciente</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "La plataforma es muy intuitiva y segura. Me siento cómodo compartiendo mi información médica aquí."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
