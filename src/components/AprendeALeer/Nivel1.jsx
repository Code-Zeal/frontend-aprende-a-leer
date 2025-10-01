import React, { useEffect, useState } from 'react'
import kid from '../../assets/Gemini_Generated_Image_eiw9tfeiw9tfeiw9.png';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
const abecedario = [
  { letra: 'A', audio: 'https://audio.jukehost.co.uk/ydvtxaWht6ZmJ5L42izdYv4JrqS9ucal' },
  { letra: 'B', audio: 'https://audio.jukehost.co.uk/gwxL8a7Lg6CmaoUIRo5syHGf0vZwVpx7' },
  { letra: 'C', audio: 'https://audio.jukehost.co.uk/ViofP81bpH5ISYOeHdBTfY7ew2rWn2pS' },
  { letra: 'D', audio: 'https://audio.jukehost.co.uk/qBFoaorgtzpOSwa11L6NG83fGJ6yd1Dy' },
  { letra: 'E', audio: 'https://audio.jukehost.co.uk/LKfGeeqV1Cl6y3uPVal8cdW8n40OuxEn' },
  { letra: 'F', audio: 'https://audio.jukehost.co.uk/7g2oEDGjv5WCLAEPgELIq26YJyKYdG4R' },
  { letra: 'G', audio: 'https://audio.jukehost.co.uk/li06fl83O3DZuHme1righ11tKBTBOhZf' },
  { letra: 'H', audio: 'https://audio.jukehost.co.uk/HH81HGqLdHrzlZSWWhJ7sG2BPkgaypI2' },

  { letra: 'I', audio: 'https://audio.jukehost.co.uk/J5Vj9XnJXlexXcTIQSxVOkNBQ0q4dSgw' },
  { letra: 'J', audio: 'https://audio.jukehost.co.uk/RY6aMhv47NWqVBynIdMNuYNWXXRq622p' },
  { letra: 'K', audio: 'https://audio.jukehost.co.uk/acI1EY82QqWTAroGx5TFZApoE8cn9i8a' },
  { letra: 'L', audio: 'https://audio.jukehost.co.uk/vmmdds4Hg0havSPpfNPZaowhSIooOfiP' },
  { letra: 'M', audio: 'https://audio.jukehost.co.uk/TSCGDv8CHtzMIRN8kJT4SkzN89ZvfWEa' },
  { letra: 'N', audio: 'https://audio.jukehost.co.uk/l2YX5vYoKXaTNDAH0wBcfcn0AL1AMPgC' },
  { letra: 'Ñ', audio: 'https://audio.jukehost.co.uk/mTkuZXwjhSXbIB489jsTpZzMHljwIKU1' },
  { letra: 'O', audio: 'https://audio.jukehost.co.uk/iviEv9kH4lVE4zOkJkhoUhKfk36MTiZb' },
  { letra: 'P', audio: 'https://audio.jukehost.co.uk/81ZKRxxB9M3lV2XKj9QhTyoRi47YC7pL' },
  { letra: 'Q', audio: 'https://audio.jukehost.co.uk/tIcxFpSg0puKJk2UImYBF6FY68WSGhM1' },
  { letra: 'R', audio: 'https://audio.jukehost.co.uk/ioDNH2OG0PtidZQIwE0P2Kt5EcDnYBmS' },
  { letra: 'S', audio: 'https://audio.jukehost.co.uk/p8YBDkgcDUUOcCQYRHpHLgKYm7t9j599' },
  { letra: 'T', audio: 'https://audio.jukehost.co.uk/RarXIwkpiHj3EKblYQGlZK7LEj5yw7r1' },
  { letra: 'U', audio: 'https://audio.jukehost.co.uk/1FORBf8Tf9mSNrZN6EmOQwIRg2hsOjk5' },
  { letra: 'V', audio: 'https://audio.jukehost.co.uk/zmEFCQst6S5X9mSzFAEP0VYQOoMWqhhc' },
  { letra: 'W', audio: 'https://audio.jukehost.co.uk/85oOsHhQDORYiQxvi1zrmvSckaSjDhTr' },
  { letra: 'X', audio: 'https://audio.jukehost.co.uk/KOdIjsEzuhIpxqgBJsKXiQvVDDhSNBHj' },
  { letra: 'Y', audio: 'https://audio.jukehost.co.uk/FhqT3svEbqSp5egVz4MrsuOCQtgdzgj0' },
  { letra: 'Z', audio: 'https://audio.jukehost.co.uk/xOl92m3UMXP7I2Sy9g4utVnzL0PGTVdw' },
];

const audioInicio = 'https://audio.jukehost.co.uk/PRQyhbtKKwJoPV4LtZcO7iEJZghwOWCt'; // Repite conmigo

function Nivel1() {
     const [indice, setIndice] = useState(-1); // -1 para audio de inicio
    const [audio, setAudio] = useState(new Audio(audioInicio));
    const navigate = useNavigate();
  
    useEffect(() => {
      audio.pause();
      audio.currentTime = 0;
      audio.play().catch(error => console.error("Error reproduciendo el audio:", error));
    }, [audio]);
  
    const siguiente = () => {
      if (indice <= 25) {
        console.log(indice);
        setIndice(indice + 1);
        setAudio(new Audio(abecedario[indice + 1].audio));
      }else{
        console.log('Final del abecedario alcanzado');
        
        // Aquí puedes manejar lo que sucede cuando se llega al final del abecedario
        alert("¡Felicidades! Has completado el nivel 1.");
        setIndice(-1); // Reiniciar al estado inicial
        //reedirigir a otra página si es necesario
        navigate('/aprende/nivel2');
      }
    };
  
    const repetir = () => {
      if (indice === -1) {
        setAudio(new Audio(audioInicio));
      } else {
        setAudio(new Audio(abecedario[indice].audio));
      }
    };
  
    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        {indice === -1 ? (
          <div>
            <h2 className='text-2xl font-bold'>¡Repite conmigo!</h2>
            <img className='w-3/4 md:w-5/12 ml-auto mr-auto' src={kid} alt="Abecedario" />
            <Button className='ml-auto mr-auto hover:cursor-pointer' color="green" onClick={siguiente}>Comenzar</Button>
          </div>
        ) : (
          <div>
            <div className='flex flex-col items-center relative w-3/4 md:w-4/12 mx-auto'>
              <img className='w-full' src={kid} alt="Abecedario" />
              <span
                className='absolute inset-0 flex items-center justify-center text-6xl md:text-8xl font-bold text-black drop-shadow-lg pointer-events-none top-34 md:top-70 left-0'
          
              >
                {abecedario[indice].letra}
              </span>
            </div>
            <Button className='ml-auto mr-auto hover:cursor-pointer' color="green" onClick={repetir}>🔊 Repetir letra</Button>
            <br /><br />
            <button onClick={siguiente} >Siguiente</button>
          </div>
        )}
      </div>
    );
  }
  
  export default Nivel1