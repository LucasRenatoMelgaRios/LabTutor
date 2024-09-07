// src/context/AuthContext.js
import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para el usuario logueado
  const navigate = useNavigate();

  // Función para iniciar sesión
  const login = async (dni, codigo) => {
    try {
      // Realizamos una petición a la API de Mock
      const response = await axios.get('https://66ca61e159f4350f064f0e88.mockapi.io/api/labtutor/users');
      const students = response.data; // Datos de los estudiantes
      
      console.log("Datos recibidos de la API:", students); // Verifica si students es un array
      
      // Buscamos si hay algún estudiante que coincida con el DNI y código
      const student = students.find(student => 
        String(student.dni).trim() === String(dni).trim() && 
        student.codigo_estudiante.trim().toUpperCase() === codigo.trim().toUpperCase()
      );
  
      if (student) {
        // Si coincide, mostramos en consola quién es el usuario que ha ingresado
        console.log("Usuario logueado:", student);
        
        // Guardamos la información del estudiante en el estado y localStorage
        setUser({ id: student.id, nombre: student.nombre });
        localStorage.setItem('user', JSON.stringify({ id: student.id, nombre: student.nombre }));
        navigate('/home'); // Navegar después de iniciar sesión
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al cargar los datos del estudiante', error);
      alert('Error al intentar iniciar sesión. Inténtalo de nuevo más tarde.');
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Eliminamos el usuario de localStorage
    navigate('/login');
  };

  // Efecto para restaurar el usuario desde localStorage al cargar la aplicación
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Restauramos el usuario si existe
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
