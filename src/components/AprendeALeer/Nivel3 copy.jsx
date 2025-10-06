import React, { useEffect, useState } from 'react';
import main from '../../assets/Silabas.png';
import mamaImg from '../../assets/mamá.png';
import papaImg from '../../assets/papá.png';
import mesaImg from '../../assets/mesa.png';
import sapoImg from '../../assets/sapo.png';
import patoImg from '../../assets/pato.png';
import lupaImg from '../../assets/lupa.png';
import damaImg from '../../assets/dama.png';
import peloImg from '../../assets/pelo.png';
import solImg from '../../assets/sol.png';
import lunaImg from '../../assets/luna.png';
import laImg from '../../assets/la.png';
import elImg from '../../assets/el.png';
import unImg from '../../assets/un.png';
import unaImg from '../../assets/una.png';
import yoImg from '../../assets/yo.png';
import esImg from '../../assets/es.png';
import estaImg from '../../assets/está.png';
import conImg from '../../assets/con.png';
import enImg from '../../assets/en.png';
import queImg from '../../assets/que.png';
import casaImg from '../../assets/casa.png';
import osoImg from '../../assets/oso.png';
import ratonImg from '../../assets/ratón.png';
import florImg from '../../assets/flor.png';
import perroImg from '../../assets/perro.png';
import gatoImg from '../../assets/gato.png';
import verdeImg from '../../assets/verde.png';
import comerImg from '../../assets/comer.png';
import libroImg from '../../assets/libro.png';
import azulImg from '../../assets/azul.png';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const palabras = [
  { palabra: 'mamá', imagen: mamaImg, audio: '' },
  { palabra: 'papá', imagen: papaImg, audio: '' },
  { palabra: 'mesa', imagen: mesaImg, audio: '' },
  { palabra: 'sapo', imagen: sapoImg, audio: '' },
  { palabra: 'pato', imagen: patoImg, audio: '' },
  { palabra: 'lupa', imagen: lupaImg, audio: '' },
  { palabra: 'dama', imagen: damaImg, audio: '' },
  { palabra: 'pelo', imagen: peloImg, audio: '' },
  { palabra: 'sol', imagen: solImg, audio: '' },
  { palabra: 'luna', imagen: lunaImg, audio: '' },
  { palabra: 'la', imagen: laImg, audio: '' },
  { palabra: 'el', imagen: elImg, audio: '' },
  { palabra: 'un', imagen: unImg, audio: '' },
  { palabra: 'una', imagen: unaImg, audio: '' },
  { palabra: 'yo', imagen: yoImg, audio: '' },
  { palabra: 'es', imagen: esImg, audio: '' },
  { palabra: 'está', imagen: estaImg, audio: '' },
  { palabra: 'con', imagen: conImg, audio: '' },
  { palabra: 'en', imagen: enImg, audio: '' },
  { palabra: 'que', imagen: queImg, audio: '' },
  { palabra: 'casa', imagen: casaImg, audio: '' },
  { palabra: 'oso', imagen: osoImg, audio: '' },
  { palabra: 'ratón', imagen: ratonImg, audio: '' },
  { palabra: 'flor', imagen: florImg, audio: '' },
  { palabra: 'perro', imagen: perroImg, audio: '' },
  { palabra: 'gato', imagen: gatoImg, audio: '' },
  { palabra: 'verde', imagen: verdeImg, audio: '' },
  { palabra: 'comer', imagen: comerImg, audio: '' },
  { palabra: 'libro', imagen: libroImg, audio: '' },
  { palabra: 'azul', imagen: azulImg, audio: '' },
];

const audioInicio = 'https://audio.jukehost.co.uk/63dlhh7EOclHtkOYvXdhm6AS0tycpeZG'; // Repite conmigo

function Nivel3() {
  const [indice, setIndice] = useState(-1); // -1 para audio de inicio
  const [audio, setAudio] = useState(new Audio(audioInicio));
  const navigate = useNavigate();

  useEffect(() => {
    audio.pause();
    audio.currentTime = 0;
    audio.play().catch(error => console.error("Error reproduciendo el audio:", error));
  }, [audio]);

  const siguiente = () => {
    if (indice < palabras.length - 1) {
      setIndice(indice + 1);
      if (palabras[indice + 1].audio) {
        setAudio(new Audio(palabras[indice + 1].audio));
      }
    } else {
      alert("¡Felicidades! Has completado el nivel 3.");
      setIndice(-1); // Reiniciar al estado inicial
      navigate('/aprende/nivel3');
    }
  };

  const repetir = () => {
    if (indice === -1) {
      setAudio(new Audio(audioInicio));
    } else {
      if (palabras[indice].audio) {
        setAudio(new Audio(palabras[indice].audio));
      }
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      {indice === -1 ? (
        <div>
          <h2 className='text-2xl font-bold'>¡Repite conmigo!</h2>
          <img className='w-3/4 md:w-4/12 ml-auto mr-auto' src={main} alt="Abecedario" />
          <Button className='ml-auto mr-auto hover:cursor-pointer' color="green" onClick={siguiente}>Comenzar</Button>
        </div>
      ) : (
        <div>
          <div className='flex flex-col items-center relative w-3/4 md:w-1/4 mx-auto'>
            <span className='text-xl font-bold mb-2'>{palabras[indice].palabra}</span>
            <img
              className='w-full h-64 object-contain'
              src={palabras[indice].imagen}
              alt={palabras[indice].palabra}
            />
          </div>
          <Button className='ml-auto mr-auto hover:cursor-pointer' color="green" onClick={repetir}>🔊 Repetir palabra</Button>
          <br /><br />
          <button onClick={siguiente}>Siguiente</button>
        </div>
      )}
    </div>
  );
}

export default Nivel3;