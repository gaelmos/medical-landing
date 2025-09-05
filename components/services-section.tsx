import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Users } from "lucide-react"

export function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-block bg-primary-foreground text-primary px-4 py-2 rounded-md mb-4">Servicios</div>
          <h2 className="text-3xl font-bold mb-6">Tecnología Médica Avanzada</h2>
          <p className="text-primary-foreground/90 max-w-3xl mx-auto">
            Utilizamos inteligencia artificial de última generación para la detección temprana y precisa del cáncer de
            páncreas, mejorando significativamente las posibilidades de tratamiento exitoso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-primary-foreground text-primary border-0">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Diagnóstico con IA</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Análisis automatizado de imágenes médicas utilizando algoritmos de aprendizaje profundo para detectar
                anomalías con precisión superior al 95%.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Leer Más
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-primary-foreground text-primary border-0">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Profesionales</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Ofrecemos médicos especializados con años de experiencia, los cuales se pueden conectar con pacientes en
                minutos de manera virtual.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Leer Más
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
