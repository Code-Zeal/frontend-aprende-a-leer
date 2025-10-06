import { Button } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Inicio() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  return (
    <div className="flex flex-col justify-evenly items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Datos del estudiante</h2>
        {!user ? (
          <div className="text-center text-gray-500">
            No hay datos disponibles.
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700">Nombre:</span>
              <span className="text-gray-900">{user.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700">Correo electrónico:</span>
              <span className="text-gray-900">{user.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700">Edad:</span>
              <span className="text-gray-900">{user.age}</span>
            </div>
          </div>
        )}
      </div>
<Link to="/aprende" >
  <Button color='yellow' className="w-full hover:cursor-pointer max-w-md bg-white rounded-xl shadow-lg p-8 text-gray-100 font-bold">Repite conmigo</Button>
</Link>
    </div>
  )
}

export default Inicio