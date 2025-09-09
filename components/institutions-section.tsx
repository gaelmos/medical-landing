import { Card, CardContent } from "@/components/ui/card"

export function InstitutionsSection() {
  return (
    <section className="py-16 px-4 bg-white" >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md mb-4">Instituciones</div>
          <h2 className="text-3xl font-bold text-center text-gray-800">Instituciones Colaboradoras</h2>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card className="bg-white border-2 border-teal-500 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <div className="text-center">
                  
                  <img src="rof.jpg" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-800">Hospital Roffo</h3>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-teal-500 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <div className="text-center">
                  
                  <img src="itl.png" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-800">Hospital Italiano</h3>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-teal-500 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-600 mb-2">IAF</div>
                  <div className="text-[10px] text-pink-600 font-semibold">INSTITUTO</div>
                  <div className="text-[10px] text-pink-600 font-semibold">ALEXANDER</div>
                  <div className="text-[10px] text-pink-600 font-semibold">FLEMING</div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-800">Hospital Fleming</h3>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-teal-500 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <div className="text-center">
                  
                  <img src="aus.jpg" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-800">Hospital Austral</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
