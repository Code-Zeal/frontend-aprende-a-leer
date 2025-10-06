import React, { useEffect, useState } from 'react';
import mainImg from '../../assets/frases/main.png';
import anaOsoImg from '../../assets/frases/ana-tiene-un-oso.jpg';
import dameManoImg from '../../assets/frases/dame-la-mano.jpg';
import aguaAzulImg from '../../assets/frases/el-agua-es-azul.jpg';
import casaRojaImg from '../../assets/frases/esa-casa-es-roja.jpg';
import leoCuentoImg from '../../assets/frases/leo-un-cuento.jpg';
import duelePieImg from '../../assets/frases/me-duele-el-pie.jpg';
import mamaAmaImg from '../../assets/frases/mi-mama-me-ama.jpg';
import papaRieImg from '../../assets/frases/mi-papa-rie.jpg';
import PerroComeImg from '../../assets/frases/mi-perro-come-pan.jpg';
import SubeMesaImg from '../../assets/frases/sube-a-la-mesa.jpg';
import titoAmigoImg from '../../assets/frases/tito-es-mi-amigo.jpg';
import TomaPelotaImg from '../../assets/frases/toma-la-pelota.jpg';
import veoFlorImg from '../../assets/frases/veo-una-flor.jpg';
import voyCineImg from '../../assets/frases/voy-al-cine.jpg';
import { Button, Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

import { Volume2, ChevronLeft, ChevronRight } from "lucide-react"

const audioMain = 'https://audio.jukehost.co.uk/8Rbq1qvgP6LieJG6xHoMATdXvt15tv6K'

const words = [
   { word: 'Ana tiene un oso', image: anaOsoImg, audio: 'https://audio.jukehost.co.uk/kFtprPdB4d9DvzWLpgzKQ0mU6pxPPmO1' },
    { word: 'Dame la mano', image: dameManoImg, audio: 'https://audio.jukehost.co.uk/hhpqG3pVgE96JEODX8bgOFte5yrLWHGX' },
    { word: 'El agua es azul', image: aguaAzulImg, audio: 'https://audio.jukehost.co.uk/GXYkfyjfrAFJNzfesBonlWOYwFn6pKS2' },
    { word: 'Esa casa es roja', image: casaRojaImg, audio: 'https://audio.jukehost.co.uk/rtHMGx6mlSbsRpumDTL4DzrUA7Ha3yu1' },
    { word: 'Leo un cuento', image: leoCuentoImg, audio: 'https://audio.jukehost.co.uk/qfXBbpNi1JCHRaV71R2kvM2nw8oRD1o3' },
    { word: 'Me duele el pie', image: duelePieImg, audio: 'https://audio.jukehost.co.uk/GhPssr3Ae6KoYzl81rc8IhSqZV6uWWAJ' },
    { word: 'Mi mamá me ama', image: mamaAmaImg, audio: 'https://audio.jukehost.co.uk/VuCN9utk0zNjLzBhZp6jw1ZivPY8eXCX' },
    { word: 'Mi papá ríe', image: papaRieImg, audio: 'https://audio.jukehost.co.uk/8NzPQE70tkjCOI44Y5CLMEqUjK6jSFUQ' },
    { word: 'Mi perro come pan', image: PerroComeImg, audio: 'https://audio.jukehost.co.uk/m5G1H98LdeWjVmVY865UBqQF8e9zG638' },
    { word: 'Sube a la mesa', image: SubeMesaImg, audio: 'https://audio.jukehost.co.uk/d0a0hcXufOL5D91rYunFDB14zYHFeKPm' },
    { word: 'Tito es mi amigo', image: titoAmigoImg, audio: 'https://audio.jukehost.co.uk/ulezKA8XG5SybJO8ev4wWEI3184KKtuO' },
    { word: 'Toma la pelota', image: TomaPelotaImg, audio: 'https://audio.jukehost.co.uk/SM6eY8bfnUMYfOMQFvXQn9GT9maS2ZGB' },
    { word: 'Veo una flor', image: veoFlorImg, audio: 'https://audio.jukehost.co.uk/k6GbjojvpFs2J1EA1LHRlMTobSzY7zJE' },
    { word: 'Voy al cine', image: voyCineImg, audio: 'https://audio.jukehost.co.uk/bpbGU6T3A7PToD9V4wLaWFhXigi6pR8V' },
   
]

export default function Nivel4() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showStart, setShowStart] = useState(true)
  const audioRef = React.useRef(null)
  const navigate = useNavigate()

  const currentWord = words[currentIndex]
  const totalWords = words.length

  const playMainAudio = () => {
    setIsPlaying(true)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    audioRef.current = new window.Audio(audioMain)
    audioRef.current.onended = () => {
      setIsPlaying(false)
    }
    audioRef.current.play()
  }

  const speakWord = () => {
    setIsPlaying(true)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    audioRef.current = new window.Audio(currentWord.audio)
    audioRef.current.onended = () => {
      setIsPlaying(false)
    }
    audioRef.current.play()
  }

  const handleNext = () => {
    if (currentIndex < totalWords - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      navigate('/aprende')
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  useEffect(() => {
    if (showStart) {
      playMainAudio()
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [showStart])

  if (showStart) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 relative">
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
        <div className="relative z-10 w-full max-w-xl flex flex-col items-center space-y-8">
          <img src={mainImg} alt="Inicio" className="w-64 h-64 object-contain rounded-3xl shadow-2xl border-4 border-primary/30" />
          <Button
            size="xl"
            className="bg-accent text-accent-foreground font-bold text-2xl px-8 py-4 rounded-2xl shadow-lg hover:bg-accent/90"
            onClick={() => setShowStart(false)}
            disabled={isPlaying}
          >
            Empezar
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 relative">
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-2xl space-y-6">
        {/* Header con contador y progreso */}
        <div className="flex items-center justify-between bg-primary/90 backdrop-blur-md rounded-3xl px-6 py-4 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">{currentIndex + 1}</span>
            </div>
            <div className="text-primary-foreground">
              <p className="text-sm font-medium opacity-90">Progreso</p>
              <p className="text-xl font-bold">
                {currentIndex + 1}/{totalWords} palabras
              </p>
            </div>
          </div>

          {/* Barra de progreso */}
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-xs ml-6">
            <div className="flex-1 h-3 bg-primary-foreground/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-secondary transition-all duration-500 ease-out rounded-full"
                style={{ width: `${((currentIndex + 1) / totalWords) * 100}%` }}
              />
            </div>
            <span className="text-primary-foreground font-bold text-sm">
              {Math.round(((currentIndex + 1) / totalWords) * 100)}%
            </span>
          </div>
        </div>

        {/* Card principal con la palabra e imagen */}
        <Card className="overflow-hidden shadow-2xl border-4 border-primary/20 bg-card/95 backdrop-blur-md">
          <div className="p-8 md:p-12 space-y-6">
            {/* Palabra arriba */}
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-wider">{currentWord.word}</h1>
            </div>

            {/* Imagen en el medio */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-muted shadow-xl border-4 border-secondary/30">
                <img
                  src={currentWord.image || "/placeholder.svg"}
                  alt={currentWord.word}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Botones abajo */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
              
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                size="lg"
                variant="outline"
                className="bg-blue-600 cursor-pointer flex-1 h-14 text-lg font-bold rounded-2xl border-2 hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6 mr-2" />
                Anterior
              </Button>

              <Button
                onClick={speakWord}
                disabled={isPlaying}
                size="lg"
                className="flex-1 h-14 text-lg font-bold rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-transform shadow-lg"
              >
                <Volume2 className={`w-6 h-6 mr-2 ${isPlaying ? "animate-pulse" : ""}`} />
                {isPlaying ? "Escuchando..." : "Escuchar"}
              </Button>

              <Button
                onClick={handleNext}
                size="lg"
                variant="outline"
                className="flex-1 h-14 text-lg font-bold rounded-2xl border-2 hover:scale-105 transition-transform bg-blue-600 cursor-pointer"
              >
                Siguiente
                <ChevronRight className="w-6 h-6 ml-2" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Indicador de progreso móvil */}
        <div className="md:hidden bg-primary/90 backdrop-blur-md rounded-3xl px-6 py-3 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-3 bg-primary-foreground/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-secondary transition-all duration-500 ease-out rounded-full"
                style={{ width: `${((currentIndex + 1) / totalWords) * 100}%` }}
              />
            </div>
            <span className="text-primary-foreground font-bold text-sm whitespace-nowrap">
              {Math.round(((currentIndex + 1) / totalWords) * 100)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
