import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-4">
          <span className="inline-block bg-teal-600 text-white px-4 py-2 rounded text-sm font-medium mb-6">
            Testimonios
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 text-balance">
          Lo que dicen nuestros
          <br />
          Médicos y Pacientes
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gray-50 border-l-4 border-l-teal-600">
            <CardContent className="space-y-4">
              <Quote className="w-8 h-8 text-teal-600" />
              <p className="text-gray-700 leading-relaxed italic">
                "La precisión del diagnóstico con IA ha revolucionado nuestra práctica médica. Podemos detectar
                anomalías que antes pasaban desapercibidas."
              </p>
              <div className="pt-4">
                <p className="font-semibold text-gray-800">Dr. María González</p>
                <p className="text-sm text-gray-600">Oncóloga - Hospital Italiano</p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 bg-gray-50 border-l-4 border-l-green-500">
            <CardContent className="space-y-4">
              <Quote className="w-8 h-8 text-green-500" />
              <p className="text-gray-700 leading-relaxed italic">
                "Gracias a la detección temprana, mi tratamiento fue exitoso. El equipo médico me brindó confianza en
                todo momento."
              </p>
              <div className="pt-4">
                <p className="font-semibold text-gray-800">Carlos Mendoza</p>
                <p className="text-sm text-gray-600">Paciente</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
