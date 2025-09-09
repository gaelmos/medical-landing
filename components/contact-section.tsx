import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section>
      <div className="py-16 px-4 bg-back"></div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md mb-4">Contacto</div>
          <h2 className="text-3xl font-bold text-foreground mb-4">¿Necesitas una Consulta?</h2>
          <p className="text-muted-foreground text-center">
            Estaremos aquí para ayudar. Contáctanos para agendar una cita o resolver tus dudas.
          </p>
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Envianos un Mensaje</CardTitle>
            <p className="text-sm text-muted-foreground">
              Completa el formulario y nos pondremos en contacto contigo a la brevedad.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Nombre y Apellido" className="bg-input border-border" />
            <Input type="email" placeholder="Correo Electrónico" className="bg-input border-border" />
            <Input type="tel" placeholder="Teléfono" className="bg-input border-border" />
            <Textarea placeholder="Mensaje" rows={4} className="bg-input border-border resize-none" />
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
              Enviar Mensaje
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
