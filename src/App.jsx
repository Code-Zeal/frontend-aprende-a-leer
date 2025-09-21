import { Routes, Route } from 'react-router-dom';
import HomeLoginStudent from './components/HomeLoginStudent/';
import LoginAdmin from './components/LoginAdmin';
import Inicio from './components/Inicio';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLoginStudent />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/aprende" element={<HomeLoginStudent />} />

        <Route path="/admin" element={<LoginAdmin />} />
      </Routes>
    </>
  );
}

export default App;