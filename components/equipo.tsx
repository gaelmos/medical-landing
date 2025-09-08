export function TeamSection() {
  const teamMembers = [
    {
      name: "Elian Engelberg",
      role: "UX-UI",
      image: "/team/elian-engelberg.png",
    },
    {
      name: "Tobias Sendyk",
      role: "Back-End",
      image: "/team/tobias-sendyk.jpg",
    },
    {
      name: "Pedro Tome",
      role: "IA",
      image: "/team/pedro-tome.jpg",
    },
    {
      name: "Gael Moszenberg",
      role: "IA",
      image: "/team/gael-moszenberg.jpg",
    },
    {
      name: "Pablo Vives",
      role: "Front-End",
      image: "/team/pablo-vives.jpg",
    },
  ]

  return (
    <section id="equipo" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-800 text-white px-6 py-2 rounded text-sm font-medium mb-6">Equipo</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
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
      </div>
    </section>
  )
}
