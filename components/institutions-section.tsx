import { Card, CardContent } from "@/components/ui/card"

export function InstitutionsSection() {
  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md mb-4">Instituciones</div>
          <h2 className="text-3xl font-bold text-center text-foreground">Instituciones Colaboradoras</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-muted-foreground/10 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-muted-foreground rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs font-bold text-muted-foreground">ROFFO</div>
                    <div className="text-[8px] text-muted-foreground">HOSPITAL</div>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-card-foreground">Hospital Roffo</h3>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-muted-foreground/10 rounded-full flex items-center justify-center">
                <div className="relative">
                  <div className="w-12 h-8 bg-red-500 rounded-sm flex items-center justify-center">
                    <div className="w-2 h-6 bg-white absolute"></div>
                    <div className="w-6 h-2 bg-white absolute"></div>
                  </div>
                  <div className="text-[8px] text-muted-foreground mt-1 text-center">ITALIANO</div>
                </div>
              </div>
              <h3 className="font-semibold text-card-foreground">Hospital Italiano</h3>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-muted-foreground/10 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-pink-600 font-bold text-lg">IAF</div>
                  <div className="text-[8px] text-muted-foreground">INSTITUTO</div>
                  <div className="text-[8px] text-muted-foreground">FLEMING</div>
                </div>
              </div>
              <h3 className="font-semibold text-card-foreground">Hospital Fleming</h3>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-muted-foreground/10 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary rounded-full mx-auto mb-1 flex items-center justify-center">
                    <div className="text-white text-xs">★</div>
                  </div>
                  <div className="text-[8px] text-muted-foreground">AUSTRAL</div>
                  <div className="text-[8px] text-muted-foreground">30</div>
                </div>
              </div>
              <h3 className="font-semibold text-card-foreground">Hospital Austral</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
