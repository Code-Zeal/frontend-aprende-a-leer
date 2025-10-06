import React, { useEffect, useState } from 'react';
import mainImg from '../../assets/abc/main.png';
import A from '../../assets/abc/A.png';
import B from '../../assets/abc/B.png';
import C from '../../assets/abc/C.png';
import D from '../../assets/abc/D.png';
import E from '../../assets/abc/E.png';
import F from '../../assets/abc/F.png';
import G from '../../assets/abc/G.png';
import H from '../../assets/abc/H.png';
import I from '../../assets/abc/I.png';
import J from '../../assets/abc/J.png';
import K from '../../assets/abc/K.png';
import L from '../../assets/abc/L.png';
import M from '../../assets/abc/M.png';
import N from '../../assets/abc/N.png';
import Ñ from '../../assets/abc/Ñ.png';
import O from '../../assets/abc/O.png';
import P from '../../assets/abc/P.png';
import Q from '../../assets/abc/Q.png';
import R from '../../assets/abc/R.png';
import S from '../../assets/abc/S.png';
import T from '../../assets/abc/T.png';
import U from '../../assets/abc/U.png';
import V from '../../assets/abc/V.png';
import W from '../../assets/abc/W.png';
import X from '../../assets/abc/X.png';
import Y from '../../assets/abc/Y.png';
import Z from '../../assets/abc/Z.png';
import { Button, Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

import { Volume2, ChevronLeft, ChevronRight } from "lucide-react"

const audioMain = 'https://audio.jukehost.co.uk/PRQyhbtKKwJoPV4LtZcO7iEJZghwOWCt'

const words = [
   { word: 'A', image: A, audio: 'https://audio.jukehost.co.uk/ydvtxaWht6ZmJ5L42izdYv4JrqS9ucal' },
   {word:'B', image:B, audio:'https://audio.jukehost.co.uk/gwxL8a7Lg6CmaoUIRo5syHGf0vZwVpx7'},
    {word:'C', image:C, audio:'https://audio.jukehost.co.uk/ViofP81bpH5ISYOeHdBTfY7ew2rWn2pS'},
    {word:'D', image:D, audio:'https://audio.jukehost.co.uk/qBFoaorgtzpOSwa11L6NG83fGJ6yd1Dy'},
    {word:'E', image:E, audio:'https://audio.jukehost.co.uk/LKfGeeqV1Cl6y3uPVal8cdW8n40OuxEn'},
    {word:'F', image:F, audio:'https://audio.jukehost.co.uk/7g2oEDGjv5WCLAEPgELIq26YJyKYdG4R'},
    {word:'G', image:G, audio:'https://audio.jukehost.co.uk/li06fl83O3DZuHme1righ11tKBTBOhZf'},
    {word:'H', image:H, audio:'https://audio.jukehost.co.uk/HH81HGqLdHrzlZSWWhJ7sG2BPkgaypI2'},
    {word:'I', image:I, audio:'https://audio.jukehost.co.uk/J5Vj9XnJXlexXcTIQSxVOkNBQ0q4dSgw'},
    {word:'J', image:J, audio:'https://audio.jukehost.co.uk/RY6aMhv47NWqVBynIdMNuYNWXXRq622p'},
    {word:'K', image:K, audio:'https://audio.jukehost.co.uk/acI1EY82QqWTAroGx5TFZApoE8cn9i8a'},
    {word:'L', image:L, audio:'https://audio.jukehost.co.uk/vmmdds4Hg0havSPpfNPZaowhSIooOfiP'},
    {word:'M', image:M, audio:'https://audio.jukehost.co.uk/TSCGDv8CHtzMIRN8kJT4SkzN89ZvfWEa'},
    {word:'N', image:N, audio:'https://audio.jukehost.co.uk/l2YX5vYoKXaTNDAH0wBcfcn0AL1AMPgC'},
    {word:'Ñ', image:Ñ, audio:'https://audio.jukehost.co.uk/mTkuZXwjhSXbIB489jsTpZzMHljwIKU1'},
    {word:'O', image:O, audio:'https://audio.jukehost.co.uk/iviEv9kH4lVE4zOkJkhoUhKfk36MTiZb'},
    {word:'P', image:P, audio:'https://audio.jukehost.co.uk/81ZKRxxB9M3lV2XKj9QhTyoRi47YC7pL'},
    {word:'Q', image:Q, audio:'https://audio.jukehost.co.uk/tIcxFpSg0puKJk2UImYBF6FY68WSGhM1'},
    {word:'R', image:R, audio:'https://audio.jukehost.co.uk/ioDNH2OG0PtidZQIwE0P2Kt5EcDnYBmS'},
    {word:'S', image:S, audio:'https://audio.jukehost.co.uk/p8YBDkgcDUUOcCQYRHpHLgKYm7t9j599'},
    {word:'T', image:T, audio:'https://audio.jukehost.co.uk/RarXIwkpiHj3EKblYQGlZK7LEj5yw7r1'},
    {word:'U', image:U, audio:'https://audio.jukehost.co.uk/1FORBf8Tf9mSNrZN6EmOQwIRg2hsOjk5'},
    {word:'V', image:V, audio:'https://audio.jukehost.co.uk/zmEFCQst6S5X9mSzFAEP0VYQOoMWqhhc'},
    {word:'W', image:W, audio:'https://audio.jukehost.co.uk/85oOsHhQDORYiQxvi1zrmvSckaSjDhTr'},
    {word:'X', image:X, audio:'https://audio.jukehost.co.uk/KOdIjsEzuhIpxqgBJsKXiQvVDDhSNBHj'},
    {word:'Y', image:Y, audio:'https://audio.jukehost.co.uk/FhqT3svEbqSp5egVz4MrsuOCQtgdzgj0'},
    {word:'Z', image:Z, audio:'https://audio.jukehost.co.uk/xOl92m3UMXP7I2Sy9g4utVnzL0PGTVdw'},
]

export default function Nivel1() {
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
      navigate('/aprende/nivel2')
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
