export function TeamSection() {
  const teamMembers = [
    {
      name: "Elian Engelberg",
      role: "UX-UI",
      image: "/equipo/elian.png",
    },
    {
      name: "Tobias Sendyk",
      role: "Back-End",
      image: "/equipo/tobi.png",
    },
    {
      name: "Pedro Tome",
      role: "IA",
      image: "/equipo/pedro.png",
    },
    {
      name: "Gael Moszenberg",
      role: "IA",
      image: "/equipo/gael.png",
    },
    {
      name: "Pablo Vives",
      role: "Front-End",
      image: "/equipo/pablo.png",
    },
  ]

  return (
    <section id="equipo" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="inline-block bg-blue-800 text-white px-6 py-2 rounded text-sm font-medium mb-6">Equipo</span>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="flex justify-center gap-24">
            {teamMembers.slice(0, 2).map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto bg-gray-200">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-24">
            {teamMembers.slice(2, 4).map((member, index) => (
              <div key={index + 2} className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto bg-gray-200">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto bg-gray-200">
                <img
                  src={teamMembers[4].image || "/placeholder.svg"}
                  alt={teamMembers[4].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{teamMembers[4].name}</h3>
              <p className="text-sm text-gray-600">{teamMembers[4].role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}