import { Routes, Route } from 'react-router-dom';
import HomeLoginStudent from './components/HomeLoginStudent.jsx';
import LoginAdmin from './components/LoginAdmin.jsx';
import Inicio from './components/Inicio.jsx';
import AprendeALeer from './components/AprendeALeer.jsx';
import Nivel1 from './components/AprendeALeer/Nivel1.jsx';
import Nivel2 from './components/AprendeALeer/Nivel2.jsx';
import Nivel3 from './components/AprendeALeer/Nivel3.jsx';
import Nivel4 from './components/AprendeALeer/Nivel4.jsx';
import HomeAdmin from './components/HomeAdmin.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLoginStudent />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/aprende"  element={<AprendeALeer />} />
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