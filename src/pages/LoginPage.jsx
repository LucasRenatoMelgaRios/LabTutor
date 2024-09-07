// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Importar el contexto de autenticación

export const LoginPage = () => {
  const [dni, setDni] = useState('');
  const [codigo, setCodigo] = useState('');
  const { login } = useAuth(); // Usar el hook useAuth para acceder a la función login

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login) {
        login(dni, codigo); // Invoca login si está disponible
    } else {
        console.error('login is not a function');
    }
};

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>DNI:</label>
        <input 
          type="text" 
          value={dni} 
          onChange={(e) => setDni(e.target.value)} 
        />
        <label>Código de Estudiante:</label>
        <input 
          type="text" 
          value={codigo} 
          onChange={(e) => setCodigo(e.target.value)} 
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};
