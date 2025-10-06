
import { Button, Card } from "flowbite-react"
import { User, Mail, Calendar, BookOpen, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Inicio() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header con nombre de la app */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Lecturas Mágicas
            </h1>
            <Sparkles className="w-8 h-8 text-pink-600" />
          </div>
          <p className="text-muted-foreground">Tu aventura de lectura comienza aquí</p>
        </div>

        <Card className="overflow-hidden shadow-xl">
          {/* Mitad superior - Datos del usuario */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Mi Perfil</h2>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="bg-white/30 p-3 rounded-full">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm opacity-90">Nombre</p>
                  <p className="text-xl font-semibold">{user?.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="bg-white/30 p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm opacity-90">Correo</p>
                  <p className="text-lg font-medium">{user?.email
                      ? user.email.length > 14
                      ? user.email.slice(0, 14) + "..."
                      : user.email
                      : ""}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="bg-white/30 p-3 rounded-full">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm opacity-90">Edad</p>
                  <p className="text-xl font-semibold">{user?.age} años</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mitad inferior - Botón para entrar al juego */}
          <div className="p-8 bg-white">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">¿Listo para aprender?</h3>
              <p className="text-muted-foreground">Descubre el mundo mágico de la lectura</p>
            </div>

            <a href="/aprende" className="block">
              <Button
                size="lg"
                className="w-full h-20 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <BookOpen className="w-8 h-8 mr-3" />
                Entrar al Juego
                <Sparkles className="w-6 h-6 ml-3" />
              </Button>
            </a>

            <p className="text-center text-sm text-muted-foreground mt-4">¡Cada lectura es una nueva aventura! ✨</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
