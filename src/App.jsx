import { Routes, Route } from 'react-router-dom';
import HomeLoginStudent from './components/HomeLoginStudent/';
import LoginAdmin from './components/LoginAdmin';
import Inicio from './components/Inicio';
import AprendeALeer from './components/AprendeALeer';
import Nivel1 from './components/AprendeALeer/Nivel1';
import Nivel2 from './components/AprendeALeer/Nivel2';
import Nivel3 from './components/AprendeALeer/Nivel3';
import Nivel4 from './components/AprendeALeer/Nivel4';
import HomeAdmin from './components/HomeAdmin';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLoginStudent />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/aprende" element={<AprendeALeer />} />
        <Route path="/aprende/nivel1" element={<Nivel1 />} />
        <Route path="/aprende/nivel2" element={<Nivel2 />} />
        <Route path="/aprende/nivel3" element={<Nivel3 />} />
        <Route path="/aprende/nivel4" element={<Nivel4 />} />

        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/admin/inicio" element={<HomeAdmin />} />
      </Routes>
    </>
  );
}

export default App;