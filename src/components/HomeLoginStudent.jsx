import React, { useState } from 'react';
import axios from 'axios';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import wallpaper from '../assets/wallpaper.png';
import { toast } from 'react-toastify';
const HomeLoginStudent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [register, setRegister] = useState('');

    const [regName, setRegName] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [regAge, setRegAge] = useState('');
    const [regError, setRegError] = useState('');
    const [regSuccess, setRegSuccess] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://192.168.0.108:3000/auth/login', {
                email,
                password,
            });
            // Guarda los datos del usuario en localStorage
            localStorage.setItem('user', JSON.stringify(response.data));
            console.log('Login successful:', response.data);
            setError('');
            // Si el login es exitoso, redirige
             navigate('/inicio');
        } catch (err) {
            console.error('Login error:', err);
            if(err.response?.data?.error === 'Usuario no existe'){
                setRegister(true);
            }
            setError(err.response?.data?.error || 'Login failed' );
        }
    };
    const notify = () => toast("Registro exitoso. Ahora puedes iniciar sesión");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/auth/register', {
                name: regName,
                email: regEmail,
                password: regPassword,
                age: regAge,
            });
            notify();
            setRegSuccess('Registro exitoso. Ahora puedes iniciar sesión.');
            setRegError('');
            setError('');
            setRegister(false);
            setRegName('');
            setRegEmail('');
            setRegPassword('');
            setRegAge('');
        } catch (err) {
            setRegError(err.response?.data?.error || 'Error al registrar');
            setRegSuccess('');
        }
    };
    const handleCloseRegister = () => {
        setRegister(false);
        setRegError('');
        setRegSuccess('');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
        >
           <form className="flex max-w-md flex-col gap-4 bg-black/90 px-14 py-16 rounded-lg bg-opacity-50" onSubmit={handleSubmit}>
          <h2 >Bienvenido, por favor ingresa tus datos</h2>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Correo</Label>
        </div>
        <TextInput id="email1" type="email" placeholder="correo@ejemplo.com" required value={email} onChange={e => {setEmail(e.target.value)
          setRegEmail(e.target.value)
        }} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Contraseña</Label>
        </div>
        <TextInput id="password1" type="password" required value={password} onChange={e => {
          setPassword(e.target.value)
          setRegPassword(e.target.value)
        }} />
      </div>
      {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
      <Button type="submit">Ingresar</Button>
    </form>
    {register && (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
        <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md relative text-black">
            <button
                className="absolute top-2 right-2 text-gray-900 hover:text-gray-700 hover:scale-110 transition-transform hover:cursor-pointer"
                onClick={handleCloseRegister}
            >
                Salir
            </button>
            <h2 className="text-xl font-bold mb-4">Registro de usuario</h2>
            <form className="flex flex-col gap-4 " onSubmit={handleRegister}>
                <div>
                    <Label htmlFor="regName">Nombre</Label>
                    <TextInput id="regName" className='text-white placeholder:text-white' placeholder='Nombre' type="text" required value={regName} onChange={e => setRegName(e.target.value)} />
                </div>
                <div>
                    <Label htmlFor="regEmail">Correo</Label>
                    <TextInput id="regEmail" className='text-white placeholder:text-white' placeholder='Correo' type="email" required value={regEmail} onChange={e => setRegEmail(e.target.value)} />
                </div>
                <div>
                    <Label htmlFor="regPassword">Contraseña</Label>
                    <TextInput id="regPassword" className='text-white placeholder:text-white' placeholder='Contraseña' type="password" required value={regPassword} onChange={e => setRegPassword(e.target.value)} />
                </div>
                <div>
                    <Label htmlFor="regAge">Edad</Label>
                    <TextInput id="regAge" className='text-white placeholder:text-white' placeholder='Edad' type="number" required value={regAge} onChange={e => setRegAge(e.target.value)} />
                </div>
                {regError && <div className="text-red-500 text-sm mb-2">{regError}</div>}
                {regSuccess && <div className="text-green-500 text-sm mb-2">{regSuccess}</div>}
                <Button type="submit">Registrarse</Button>
            </form>
        </div>
    </div>
)}
        </div>
    );
};

export default HomeLoginStudent;