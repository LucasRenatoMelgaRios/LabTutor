import React from 'react';
import styled from 'styled-components';
import Fondo from "../../assets/fondoCierre2.jpg"; // La misma imagen de fondo utilizada anteriormente
import { GiMicroscope } from "react-icons/gi";
import { GiDrippingTube } from "react-icons/gi";
import { FaHeadSideMask } from "react-icons/fa";


const IdeasSection = styled.div`
  background-image: url(${Fondo}); /* Imagen de fondo */
  background-size: cover; /* Cubrir todo el fondo */
  background-position: center; /* Centrar la imagen */
  background-repeat: no-repeat; /* No repetir la imagen */
  padding: clamp(20px, 5vw, 40px);
  border-radius: 10px;
  margin-top: clamp(20px, 5vw, 30px);
`;

const IdeasOverlay = styled.div`
  border-radius: 10px;
  padding: clamp(20px, 5vw, 40px);
  text-align: center;
`;

const IdeasTitle = styled.h2`
  font-size: clamp(3rem, 3vw, 2rem);
  color: #000000;
  margin-bottom: 200px;
  
`;

const IdeaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: clamp(10px, 3vw, 30px);
`;

const IdeaBox = styled.div`
  background-color: #004d65;
  color: #fff;
  padding: clamp(10px, 2vw, 20px);
  border-radius: 10px;
  width: clamp(100px, 30%, 200px);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IdeaIcon = styled.div`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  margin-bottom: clamp(5px, 1vw, 10px);
`;

const IdeaText = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1.2rem);
`;

export const IdeasFuerza = () => {
  return (
    <IdeasSection>
      {/* Fondo con transparencia en el contenido */}
      <IdeasOverlay>
        <IdeasTitle>IDEAS FUERZA</IdeasTitle>
        <IdeaContainer>
          <IdeaBox>
            <IdeaIcon><GiMicroscope />
            </IdeaIcon>
            <IdeaText>IDEA 1</IdeaText>
          </IdeaBox>
          <IdeaBox>
            <IdeaIcon><GiDrippingTube />
            </IdeaIcon>
            <IdeaText>IDEA 2</IdeaText>
          </IdeaBox>
          <IdeaBox>
            <IdeaIcon><FaHeadSideMask />
            </IdeaIcon>
            <IdeaText>IDEA 3</IdeaText>
          </IdeaBox>
        </IdeaContainer>
      </IdeasOverlay>
    </IdeasSection>
  );
};
