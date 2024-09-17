import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext'; // Import the auth context
import styled from 'styled-components';
import { gsap } from 'gsap';

export const LoginPage = () => {
  const [dni, setDni] = useState('');
  const [codigo, setCodigo] = useState('');
  const { login } = useAuth(); // Use the useAuth hook to access the login function
  const loginCardRef = useRef(null); // Reference for animation

  // GSAP Animation for the login form (pop-up effect)
  useEffect(() => {
    gsap.fromTo(
      loginCardRef.current, 
      { scale: 0, opacity: 0 }, // Initial scale to 0 and opacity 0
      { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' } // Scale up to 1 with a "pop-up" effect
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login) {
      // Call login passing DNI and codigo
      login(dni, codigo); 
    } else {
      console.error('login is not a function');
    }
  };

  return (
    <LoginContainer>
      <LoginCard ref={loginCardRef}>
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

// Styled-components styles

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%);
`;

const LoginCard = styled.div`
  background-color: white;
  padding: clamp(20px, 5vw, 40px);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  transform-origin: center; /* Set the transform origin to the center for scaling effect */

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: clamp(1.5rem, 2vw, 2rem);
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: clamp(0.875rem, 1vw, 1rem);
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: clamp(0.875rem, 1vw, 1rem);
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #74ebd5;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: clamp(1rem, 2vw, 1.25rem);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    background-color: #65c4b8;
    transform: scale(1.05); // Slightly scales up the button on hover
  }

  &:active {
    transform: scale(0.95); // Scales down the button on click
  }
`;
