import React, { useEffect, useState } from 'react'
import M from '../../assets/S-M.png';
import P from '../../assets/S-P.png';
import S from '../../assets/S-S.png';
import L from '../../assets/S-L.png';
import T from '../../assets/S-T.png';
import main from '../../assets/Silabas.png';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
const abecedario = [
  { silaba: 'Ma', audio: 'https://audio.jukehost.co.uk/votRGFpGs6huZR1FT1aADmGFItZ0yaCY' },
  { silaba: 'Me', audio: 'https://audio.jukehost.co.uk/12BBFrkCYODqz4U6XnuEHgYQZkoRj2HJ' },
  { silaba: 'Mi', audio: 'https://audio.jukehost.co.uk/S2hxZIm6aUxUYDtipDwrhY2KZZioaQLo' },
  { silaba: 'Mo', audio: 'https://audio.jukehost.co.uk/Tog4ZC4IToxWTMp89kHDPeQfQROK8iCL' },
  { silaba: 'Mu', audio: 'https://audio.jukehost.co.uk/QYlVCHrkXZHtyLpVMjJr2stGyS9ARIqu' },
  { silaba: 'Pa', audio: 'https://audio.jukehost.co.uk/LFNfTkDas07MrEkdSlw226P3idsN6OBK' },
  { silaba: 'Pe', audio: 'https://audio.jukehost.co.uk/eNYTCVVbV7pvcNnZBPdX60GE6hoomndu' },
  { silaba: 'Pi', audio: 'https://audio.jukehost.co.uk/03tZXKkxNF6zFsz725OlHhW6OKxHWXN9' },
  { silaba: 'Po', audio: 'https://audio.jukehost.co.uk/sGJIiYWyFjs616E7fliZXwFCQ6HWwkXP' },
  { silaba: 'Pu', audio: 'https://audio.jukehost.co.uk/cnLCPgLKfyjHt9pwscmv8k5m3xhgW8h8' },
  { silaba: 'Ta', audio: 'https://audio.jukehost.co.uk/JiOhk7f5u5KCDWacnrgg1Ca2JTi6TBMH' },
  { silaba: 'Te', audio: 'https://audio.jukehost.co.uk/1Q6ghJroG2sLfq0xhL81FhEusY0NzaQk' },
  { silaba: 'Ti', audio: 'https://audio.jukehost.co.uk/QZBAA8mSdVySP8AUjCqT1XIrkEv0OXkj' },
  { silaba: 'To', audio: 'https://audio.jukehost.co.uk/32jY1pb7qQnZoA7tufjXwN7dVKxFa9XP' },
  { silaba: 'Tu', audio: 'https://audio.jukehost.co.uk/NyppdIfX62Zak5I6OY4fJz028BtS9xbD' },
  { silaba: 'La', audio: 'https://audio.jukehost.co.uk/OJcID3Cf9zf8eBMV8qxcCAsVlxZKNhzj' },
  { silaba: 'Le', audio: 'https://audio.jukehost.co.uk/l2YXEzlF9AVlIzj4TKByQtuEUkzQkxyE' },
  { silaba: 'Li', audio: 'https://audio.jukehost.co.uk/aGaI733AzQrI8JZafSOlJDtpdEOXHdDU' },
  { silaba: 'Lo', audio: 'https://audio.jukehost.co.uk/Qw0KjUhFCq8az0FJ9QabKlaYviBfG8dH' },
  { silaba: 'Lu', audio: 'https://audio.jukehost.co.uk/T9d6inZvqxnTpbOXjoSJJoiU9LQBKCv5' },
  { silaba: 'Sa', audio: 'https://audio.jukehost.co.uk/Dh9FJ61ftc8VnDav4ToZzQ1nc9eH1dNU' },
  { silaba: 'Se', audio: 'https://audio.jukehost.co.uk/3y3dP2EVrEsNp44CiVs3IVlbP4dbicpm' },
  { silaba: 'Si', audio: 'https://audio.jukehost.co.uk/SbuoafJCHfm8rHZaGbvZ0kxQNldzijOU' },
  { silaba: 'So', audio: 'https://audio.jukehost.co.uk/ht9C57S6izymO8brNolSy9ioLha2Y6LW' },
  { silaba: 'Su', audio: 'https://audio.jukehost.co.uk/FVFvljtNdYMNF8otpzGFQDGO3QxUUXEA' },

];

const audioInicio = 'https://audio.jukehost.co.uk/63dlhh7EOclHtkOYvXdhm6AS0tycpeZG'; // Repite conmigo

function Nivel2() {
     const [indice, setIndice] = useState(-1); // -1 para audio de inicio
    const [audio, setAudio] = useState(new Audio(audioInicio));
    const navigate = useNavigate();
  
    useEffect(() => {
      audio.pause();
      audio.currentTime = 0;
      audio.play().catch(error => console.error("Error reproduciendo el audio:", error));
    }, [audio]);
  
    const siguiente = () => {
      if (indice <= 23) {
        console.log(indice);
        setIndice(indice + 1);
        setAudio(new Audio(abecedario[indice + 1].audio));
      }else{
        console.log('Final del abecedario alcanzado');
        
        // Aquí puedes manejar lo que sucede cuando se llega al final del abecedario
        alert("¡Felicidades! Has completado el nivel 2.");
        setIndice(-1); // Reiniciar al estado inicial
        //reedirigir a otra página si es necesario
        navigate('/aprende/nivel3');
      }
    };
  
    const repetir = () => {
      if (indice === -1) {
        setAudio(new Audio(audioInicio));
      } else {
        setAudio(new Audio(abecedario[indice].audio));
      }
    };
    function getImagenPorSilaba(indice) {
      console.log(indice,);
      
      if (indice === -1) return main;
      const silaba = abecedario[indice]?.silaba || '';
      const letra = silaba.charAt(0);
      console.log(letra);
      
      switch (letra) {
        case 'M': return M;
        case 'P': return P;
        case 'S': return S;
        case 'L': return L;
        case 'T': return T;
      }
    }
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
              <img className='w-full' src={getImagenPorSilaba(indice)} alt="Abecedario" />
            </div>
            <Button className='ml-auto mr-auto hover:cursor-pointer' color="green" onClick={repetir}>🔊 Repetir letra</Button>
            <br /><br />
            <button onClick={siguiente} >Siguiente</button>
          </div>
        )}
      </div>
    );
  }
  
  export default Nivel2