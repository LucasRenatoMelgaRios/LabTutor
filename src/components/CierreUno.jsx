import React from 'react';
import styled from 'styled-components';
import Fondo from "../assets/fondoCierre.jpg"; // Importamos la imagen

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-image: url(${Fondo}); /* Imagen de fondo */
  background-size: cover; /* Ajuste para que cubra todo */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que se repita */
  border-radius: 10px;
`;

// Aplica transparencia solo al contenido de las secciones o elementos
const Section = styled.section`
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-weight: bold;
`;


const Header = styled.header`
  background-color: rgba(0, 77, 101, 0.8); /* Color con transparencia */
  color: #75d1dd;
  text-align: center;
  padding: clamp(20px, 5vw, 40px);
  border-radius: 10px 10px 0 0;
`;

const HeaderTitle = styled.h1`
  font-size: clamp(1.5rem, 3vw, 3rem);
  margin: 0;
`;


const CircleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: clamp(10px, 2vw, 30px);
  width: 100%;
`;

const Circle = styled.div`
  width: clamp(100px, 20vw, 200px);
  height: clamp(100px, 20vw, 200px);
  background-color: rgba(255, 255, 255, 0.9); /* Círculos con transparencia */
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: clamp(5px, 1vw, 15px);
`;

const CircleTitle = styled.h2`
  font-size: clamp(1rem, 2vw, 1.5rem);
  margin: 0;
`;

const CircleText = styled.p`
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  color: #3d7a8c;
`;

export const CierreUno = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>CIERRE: METACOGNICIÓN</HeaderTitle>
      </Header>
      <Section>
        <CircleContainer>
          <Circle>
            <CircleTitle>P1</CircleTitle>
            <CircleText>¿Qué aprendimos?</CircleText>
          </Circle>
          <Circle>
          <CircleTitle>P2</CircleTitle>
          <CircleText>¿Cómo lo aprendimos?</CircleText>
          </Circle>
          <Circle>
          <CircleTitle>P3</CircleTitle>
          <CircleText>¿Para qué sirve lo que aprendimos?</CircleText>
          </Circle>
          <Circle>
          <CircleTitle>P4</CircleTitle>
          <CircleText>¿Dónde aplicaremos lo aprendido?</CircleText>
          </Circle>
        </CircleContainer>
      </Section>
    </Container>
  );
};
