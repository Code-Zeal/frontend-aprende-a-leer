import axios from "axios"
import { Badge, Card } from "flowbite-react"
import { ShieldCheck, User, Mail, Calendar, BookOpen, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export default function HomeAdmin() {
  // Datos de ejemplo del administrador
 const [adminData, setAdminData] = useState(null)
 const [students, setStudents] = useState([])
   useEffect(() => {
     const data = localStorage.getItem('admin')
     if (data) {
       setAdminData(JSON.parse(data))
     }
   }, [])
   
   //peticion a la api para obtener los estudiantes
   const fetchStudents = async () => {
     try {
        const response = await axios.get('https://aprende-a-leer.fly.dev/user/getStudents');
        console.log(response.data);
        
        setStudents(response.data);
     } catch (error) {
       console.error('Error fetching students:', error);
     }
   }
  useEffect(() => {
  fetchStudents();
  }, [])

  // Lista de estudiantes de ejemplo
  const estudiantes = students

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header con nombre de la app */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Lecturas Mágicas
            </h1>
            <Sparkles className="w-8 h-8 text-pink-600" />
          </div>
          <p className="text-muted-foreground">Panel de Control Administrativo</p>
        </div>

        {/* Información del administrador */}
        <Card className="mb-6 overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/30 p-4 rounded-full backdrop-blur-sm">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <div className="text-white">
                <p className="text-sm opacity-90">Administrador</p>
                <h2 className="text-2xl font-bold">{adminData?.name}</h2>
              </div>
            </div>
          </div>
        </Card>

        {/* Lista de estudiantes */}
        <Card className="overflow-hidden shadow-xl">
          <div className="bg-white p-6">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-foreground">Lista de Estudiantes</h3>
              <Badge variant="secondary" className="ml-auto">
                {estudiantes.length} estudiantes
              </Badge>
            </div>

            <div className="space-y-4">
              {estudiantes.map((estudiante) => (
                <Card key={estudiante.id} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Avatar y nombre */}
                    <div className="flex items-center gap-3 flex-1">
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{estudiante.name}</p>
                      </div>
                    </div>

                    {/* Correo */}
                    <div className="flex items-center gap-2 flex-1">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">{estudiante.email}</p>
                    </div>

                    {/* Edad */}
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">{estudiante.age} años</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
