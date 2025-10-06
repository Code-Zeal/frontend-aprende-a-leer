import React, { useState } from 'react';
import axios from 'axios';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
// import wallpaper from '../assets/wallpaper.png';
const LoginAdmin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://aprende-a-leer.fly.dev/auth/loginAdmin', {
                email,
                password,
            });
            // Guarda los datos del usuario en localStorage
            localStorage.setItem('user', JSON.stringify(response.data));
            console.log('Login successful:', response.data);
            setError('');
            // Si el login es exitoso, redirige
             navigate('/admin/inicio');
        } catch (err) {
            console.error('Login error:', err);
            if(err.response?.data?.error === 'Usuario no existe'){
                setError('Usuario no existe');
            }
            setError(err.response?.data?.error || 'Login failed' );
        }
    };
  
    return (
        <div className="flex flex-col items-center justify-center h-screen"
      style={{
      
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
          setEmail(e.target.value)
        }} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Contraseña</Label>
        </div>
        <TextInput id="password1" type="password" required value={password} onChange={e => {
          setPassword(e.target.value)
        }} />
      </div>
      {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
      <Button type="submit">Ingresar</Button>
    </form>
   
        </div>
    );
};

export default LoginAdmin;