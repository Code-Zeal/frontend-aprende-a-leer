import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactHowler from 'react-howler';
import { Button } from 'flowbite-react';

function AprendeALeer() {
    const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio('h'));


  useEffect(() => {
    // Reproducir audio cuando cambia el nivel
    if (audio.src) {
      audio.play().catch(error => console.error("Error reproduciendo el audio:", error));
    }
  }, [audio]);

  return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-purple-200">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl p-8">
        <Link onClick={() => {
          setPlaying(true)
          console.log('Playing state:', playing);
          
          }}to="nivel1" className="block h-full">
          <div className="bg-white rounded-xl shadow-2xl p-16 flex flex-col items-center justify-center hover:scale-105 transition-all border-2 border-blue-300 flowbite-card h-full">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">El Abecedario</h2>
            <p className="text-lg text-gray-600">Comienza a aprender las letras y sonidos básicos.</p>
          </div>
        </Link>
        <Link to="nivel2" className="block h-full">
          <div className="bg-white rounded-xl shadow-2xl p-16 flex flex-col items-center justify-center hover:scale-105 transition-all border-2 border-green-300 flowbite-card h-full">
            <h2 className="text-4xl font-bold text-green-700 mb-4">Nivel 2</h2>
            <p className="text-lg text-gray-600">Avanza con sílabas y palabras sencillas.</p>
          </div>
        </Link>
        <Link to="nivel3" className="block h-full">
          <div className="bg-white rounded-xl shadow-2xl p-16 flex flex-col items-center justify-center hover:scale-105 transition-all border-2 border-yellow-300 flowbite-card h-full">
            <h2 className="text-4xl font-bold text-yellow-700 mb-4">Nivel 3</h2>
            <p className="text-lg text-gray-600">Lee frases cortas y mejora tu comprensión.</p>
          </div>
        </Link>
        <Link to="nivel4" className="block h-full">
          <div className="bg-white rounded-xl shadow-2xl p-16 flex flex-col items-center justify-center hover:scale-105 transition-all border-2 border-purple-300 flowbite-card h-full">
            <h2 className="text-4xl font-bold text-purple-700 mb-4">Nivel 4</h2>
            <p className="text-lg text-gray-600">Desafía tu lectura con textos más largos.</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default AprendeALeer