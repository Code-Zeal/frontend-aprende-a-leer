import React, { useEffect, useState } from 'react';
import mainImg from '../../assets/palabras/main.png';
import mamaImg from '../../assets/palabras/mama.png';
import papaImg from '../../assets/palabras/papa.png';
import mesaImg from '../../assets/palabras/mesa.png';
import sapoImg from '../../assets/palabras/sapo.png';
import patoImg from '../../assets/palabras/pato.png';
import lupaImg from '../../assets/palabras/lupa.png';
import damaImg from '../../assets/palabras/dama.png';
import peloImg from '../../assets/palabras/pelo.png';
import solImg from '../../assets/palabras/sol.png';
import lunaImg from '../../assets/palabras/luna.png';
import frecuentes from '../../assets/palabras/palabras-frecuentes.png';
import casaImg from '../../assets/palabras/casa.png';
import osoImg from '../../assets/palabras/oso.png';
import ratonImg from '../../assets/palabras/ratón.png';
import florImg from '../../assets/palabras/flor.png';
import perroImg from '../../assets/palabras/perro.png';
import gatoImg from '../../assets/palabras/gato.png';
import verdeImg from '../../assets/palabras/verde.png';
import comerImg from '../../assets/palabras/comer.png';
import libroImg from '../../assets/palabras/libro.png';
import azulImg from '../../assets/palabras/azul.png';
import { Button, Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

import { Volume2, ChevronLeft, ChevronRight } from "lucide-react"

const audioMain = 'https://audio.jukehost.co.uk/dmaexbzQB6FNrIG73vrb7HxwdwfmgQTb'

const words = [
   { word: 'Mamá', image: mamaImg, audio: 'https://audio.jukehost.co.uk/CwZ8q6Ulk6ieP9m032wpY7BxG7oY3at3' },
    { word: 'Papá', image: papaImg, audio: 'https://audio.jukehost.co.uk/HyAgtazl41BsrdAH3x1sn5ggm2EvePJh' },
    { word: 'Mesa', image: mesaImg, audio: 'https://audio.jukehost.co.uk/o64VUim3DkwV77KmcEwWqgfMD9tU7Ktv' },
    { word: 'Sapo', image: sapoImg, audio: 'https://audio.jukehost.co.uk/zwJvVFbo4m45Xzvq04MU1ex80Fij7Vmc' },
    { word: 'Pato', image: patoImg, audio: 'https://audio.jukehost.co.uk/cRgncAXWDoX0xl0RvCbpdogtx8c0XV3O' },
    { word: 'Lupa', image: lupaImg, audio: 'https://audio.jukehost.co.uk/vyePyQgZFHbxgAyLaACMeEaKOkt8Ag95' },
    { word: 'Dama', image: damaImg, audio: 'https://audio.jukehost.co.uk/tmPxzSjvJxoUN7bGRSWOrPh1Fp2iYtVn' },
    { word: 'Pelo', image: peloImg, audio: 'https://audio.jukehost.co.uk/1fG5Br7Y3TsmzjVs9Fmm1m9RNorxn12x' },
    { word: 'Sol', image: solImg, audio: 'https://audio.jukehost.co.uk/FtdogAIeXtuIJWzItsqUbUt0xkD8XgSA' },
    { word: 'Luna', image: lunaImg, audio: 'https://audio.jukehost.co.uk/9iqfMMIrpEZzzIS3DUEwTiaUB27WKq6c' },
    {word: 'Con', image: frecuentes, audio: 'https://audio.jukehost.co.uk/Gp9QesSRUYZ2QtdrUavvfJdSA2oBbQjh' },
    {word: 'En', image: frecuentes, audio: 'https://audio.jukehost.co.uk/iZITmrm518hBW97xGq86MZ52uYMwTWfl' },
    {word: 'Es', image: frecuentes, audio: 'https://audio.jukehost.co.uk/TgrllTvx3GKscLlcIcCgwEjaC3lQ9FRp' },
    {word: 'Está', image: frecuentes, audio: 'https://audio.jukehost.co.uk/WVE4jGRe7br2ukUaQHqGxAWLEUPA15Yc' },
    {word: 'Que', image: frecuentes, audio: 'https://audio.jukehost.co.uk/Bzwd5hRaG5euruBkZtQDKy901vErmeY6' },
    {word: 'Yo', image: frecuentes, audio: 'https://audio.jukehost.co.uk/ltWcfXb7GttkM26trZKLlCZvDSyMgVC7' },
    {word: 'El', image: frecuentes, audio: 'https://audio.jukehost.co.uk/zuKCDF0Lgh9OvUwBg2HJvq9rDpLZQREy' },
    {word: 'La', image: frecuentes, audio: 'https://audio.jukehost.co.uk/gcvloXSxP0nJCWSgIFvprXqCpGPWvNrI' },
    {word: 'Un', image: frecuentes, audio: 'https://audio.jukehost.co.uk/GLX90BvFxoIxjQ585cKwkSjF01YTQRXA' },
    {word: 'Una', image: frecuentes, audio: 'https://audio.jukehost.co.uk/FMRLQNph7qBXCmeu17ueJrUksA1BEQCw' },
    { word: 'Casa', image: casaImg, audio: 'https://audio.jukehost.co.uk/I22dMDoXTH5OjFRnIdr82IRunX0kCd29' },
    { word: 'Oso', image: osoImg, audio: 'https://audio.jukehost.co.uk/pWeyWY3RrfGtRddCELccjdCRApGAb8Oh' },
    { word: 'Ratón', image: ratonImg, audio: 'https://audio.jukehost.co.uk/oPG2kMGJpfFIEAuEv3AWN63yxiDTvfed' },
    { word: 'Flor', image: florImg, audio: 'https://audio.jukehost.co.uk/QjrOI1puoZSP3D8dgxPBf2ZNbFND1S9W' },
    { word: 'Perro', image: perroImg, audio: 'https://audio.jukehost.co.uk/e2jDsRUx1beMra4eazBdKA8SWr4EhhYz' },
    { word: 'Gato', image: gatoImg, audio: 'https://audio.jukehost.co.uk/S4tBYnMB5czQ9a6tBpdW260GvEXaxHft' },
    { word: 'Verde', image: verdeImg, audio: 'https://audio.jukehost.co.uk/i3AwMoKMQEgjrHblp80bSpuKmxSSFVVW' },
    { word: 'Comer', image: comerImg, audio: 'https://audio.jukehost.co.uk/UazJqypuyToH3Thd1JjNSCIhh8LwgOh5' },
    { word: 'Libro', image: libroImg, audio: 'https://audio.jukehost.co.uk/WmiFy0g5FOF85SOQDVq5S3yWAsmuWW2w' },
    { word: 'Azul', image: azulImg, audio: 'https://audio.jukehost.co.uk/uzbj8sLwuXC9VgHCkFZ3jMig1rmjcArU' },
]

export default function Nivel3() {
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
      navigate('/aprende/nivel4')
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
