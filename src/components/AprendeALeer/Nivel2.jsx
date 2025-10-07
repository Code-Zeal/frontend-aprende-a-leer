import React, { useEffect, useState } from 'react';
import mainImg from '../../assets/main.png';
import LImg from '../../assets/S-L.png';
import MImg from '../../assets/S-M.png';
import PImg from '../../assets/S-P.png';
import SImg from '../../assets/S-S.png';
import TImg from '../../assets/S-T.png';
import { Button, Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

import { Volume2, ChevronLeft, ChevronRight } from "lucide-react"

const audioMain = 'https://audio.jukehost.co.uk/63dlhh7EOclHtkOYvXdhm6AS0tycpeZG'

const words = [
   { word: 'M con la A Ma', image: MImg, audio: 'https://audio.jukehost.co.uk/votRGFpGs6huZR1FT1aADmGFItZ0yaCY' },
    { word: 'M con la E Me', image: MImg, audio: 'https://audio.jukehost.co.uk/12BBFrkCYODqz4U6XnuEHgYQZkoRj2HJ' },
    { word: 'M con la I Mi', image: MImg, audio: 'https://audio.jukehost.co.uk/S2hxZIm6aUxUYDtipDwrhY2KZZioaQLo' },
    { word: 'M con la O Mo', image: MImg, audio: 'https://audio.jukehost.co.uk/Tog4ZC4IToxWTMp89kHDPeQfQROK8iCL' },
    { word: 'M con la U Mu', image: MImg, audio: 'https://audio.jukehost.co.uk/QYlVCHrkXZHtyLpVMjJr2stGyS9ARIqu' },
    { word: 'P con la A Pa', image: PImg, audio: 'https://audio.jukehost.co.uk/LFNfTkDas07MrEkdSlw226P3idsN6OBK' },
    { word: 'P con la E Pe', image: PImg, audio: 'https://audio.jukehost.co.uk/eNYTCVVbV7pvcNnZBPdX60GE6hoomndu' },
    { word: 'P con la I Pi', image: PImg, audio: 'https://audio.jukehost.co.uk/03tZXKkxNF6zFsz725OlHhW6OKxHWXN9' },
    { word: 'P con la O Po', image: PImg, audio: 'https://audio.jukehost.co.uk/sGJIiYWyFjs616E7fliZXwFCQ6HWwkXP' },
    {word: 'P con la U Pu', image: PImg, audio: 'https://audio.jukehost.co.uk/cnLCPgLKfyjHt9pwscmv8k5m3xhgW8h8' },
    {word: 'T con la A ta', image: TImg, audio: 'https://audio.jukehost.co.uk/JiOhk7f5u5KCDWacnrgg1Ca2JTi6TBMH' },
    {word: 'T con la E te', image: TImg, audio: 'https://audio.jukehost.co.uk/1Q6ghJroG2sLfq0xhL81FhEusY0NzaQk' },
    {word: 'T con la I ti', image: TImg, audio: 'https://audio.jukehost.co.uk/QZBAA8mSdVySP8AUjCqT1XIrkEv0OXkj' },
    {word: 'T con la O to', image: TImg, audio: 'https://audio.jukehost.co.uk/32jY1pb7qQnZoA7tufjXwN7dVKxFa9XP' },
    {word: 'T con la U tu', image: TImg, audio: 'https://audio.jukehost.co.uk/NyppdIfX62Zak5I6OY4fJz028BtS9xbD' },
     {word: 'L con la A la', image: LImg, audio: 'https://audio.jukehost.co.uk/OJcID3Cf9zf8eBMV8qxcCAsVlxZKNhzj' },
    {word: 'L con la E le', image: LImg, audio: 'https://audio.jukehost.co.uk/l2YXEzlF9AVlIzj4TKByQtuEUkzQkxyE' },
    {word: 'L con la I li', image: LImg, audio: 'https://audio.jukehost.co.uk/aGaI733AzQrI8JZafSOlJDtpdEOXHdDU' },
    {word: 'L con la O lo', image: LImg, audio: 'https://audio.jukehost.co.uk/Qw0KjUhFCq8az0FJ9QabKlaYviBfG8dH' },
    {word: 'L con la U lu', image: LImg, audio: 'https://audio.jukehost.co.uk/T9d6inZvqxnTpbOXjoSJJoiU9LQBKCv5' },
    {word: 'S con la A sa', image: SImg, audio: 'https://audio.jukehost.co.uk/Dh9FJ61ftc8VnDav4ToZzQ1nc9eH1dNU' },
    {word: 'S con la E se', image: SImg, audio: 'https://audio.jukehost.co.uk/3y3dP2EVrEsNp44CiVs3IVlbP4dbicpm' },
    {word: 'S con la I si', image: SImg, audio: 'https://audio.jukehost.co.uk/SbuoafJCHfm8rHZaGbvZ0kxQNldzijOU' },
    {word: 'S con la O so', image: SImg, audio: 'https://audio.jukehost.co.uk/ht9C57S6izymO8brNolSy9ioLha2Y6LW' },
    {word: 'S con la U su', image: SImg, audio: 'https://audio.jukehost.co.uk/FVFvljtNdYMNF8otpzGFQDGO3QxUUXEA' },
  
]

export default function Nivel2() {
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
      navigate('/aprende/nivel3')
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
                {currentIndex + 1}/{totalWords} sílabas
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
