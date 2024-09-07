import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Importar el contexto de autenticación
import styled from 'styled-components';

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
    <LoginContainer>
      <LoginCard>
        <Title>Iniciar Sesión</Title>
        <Form onSubmit={handleSubmit}>
          <Label>DNI:</Label>
          <Input 
            type="text" 
            value={dni} 
            onChange={(e) => setDni(e.target.value)} 
            placeholder="Ingresa tu DNI"
          />
          <Label>Código de Estudiante:</Label>
          <Input 
            type="text" 
            value={codigo} 
            onChange={(e) => setCodigo(e.target.value)} 
            placeholder="Ingresa tu código"
          />
          <SubmitButton type="submit">Iniciar Sesión</SubmitButton>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
};

// Estilos con styled-components

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%);
`;

const LoginCard = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  text-align: left;
  font-size: 1rem;
  color: #555;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #74ebd5;
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  font-size: 1.1rem;
  background-color: #74ebd5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #66d1c1;
  }
`;

