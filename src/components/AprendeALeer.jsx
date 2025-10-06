import { Link } from "react-router-dom"

export default function AprendeALeer() {
  const niveles = [
    {
      id: 1,
      titulo: "Abecedario",
      descripcion: "Aprende las letras del alfabeto",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      ruta: "/aprende/Nivel1",
      icono: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <text x="10" y="15" fontSize="8" fontWeight="bold" fill="currentColor">
            ABC
          </text>
        </svg>
      ),
    },
    {
      id: 2,
      titulo: "Sílabas",
      descripcion: "Combina letras para formar sílabas",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
      ruta: "/aprende/Nivel2",
      icono: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
    },
    {
      id: 3,
      titulo: "Palabras",
      descripcion: "Forma palabras completas",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      ruta: "/aprende/Nivel3",
      icono: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      id: 4,
      titulo: "Frases",
      descripcion: "Lee y comprende frases completas",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      ruta: "/aprende/Nivel4",
      icono: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="16" y2="17" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Lecturas Mágica
              </h1>
              <p className="text-muted-foreground mt-1">Tu aventura de aprendizaje</p>
            </div>
            <Link
              to="/inicio"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg transition-all"
            >
              Volver
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-foreground mb-4">Aprende a Leer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige tu nivel y comienza tu viaje mágico hacia la lectura
          </p>
        </div>

        {/* Niveles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {niveles.map((nivel) => (
            <Link
              key={nivel.id}
              to={nivel.ruta}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Número del nivel */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                <span className={`text-2xl font-bold bg-gradient-to-br ${nivel.color} bg-clip-text text-transparent`}>
                  {nivel.id}
                </span>
              </div>

              {/* Contenido */}
              <div className="p-8">
                <div
                  className={`inline-flex p-4 rounded-2xl ${nivel.bgColor} mb-6 text-gray-700 group-hover:scale-110 transition-transform duration-300`}
                >
                  {nivel.icono}
                </div>

                <h3 className="text-3xl font-bold text-foreground mb-3">{nivel.titulo}</h3>

                <p className="text-lg text-muted-foreground mb-6">{nivel.descripcion}</p>

                {/* Botón */}
                <div
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${nivel.color} text-white font-semibold group-hover:gap-4 transition-all`}
                >
                  <span>Comenzar</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Decoración de fondo */}
              <div
                className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${nivel.color} opacity-10 group-hover:scale-150 transition-transform duration-500`}
              />
            </Link>
          ))}
        </div>

        {/* Mensaje motivacional */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg px-8 py-6 max-w-2xl">
            <p className="text-2xl font-semibold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Cada nivel es una nueva aventura. ¡Tú puedes lograrlo!
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
