import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";  // Icono de React
import { FaHtml5 } from "react-icons/fa";  // Icono de HTML5
import { FaCss3Alt } from "react-icons/fa"; // Icono de CSS3
import { FaJsSquare } from "react-icons/fa"; // Icono de JavaScript
import { FaGraduationCap, FaBookOpen, FaChalkboardTeacher, FaVideo } from 'react-icons/fa';
import { IoBookOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
import imagen from "../assets/image.png";
import hero1 from "../assets/hero1.png"
import hero2 from "../assets/hero2.png"
import hero3 from "../assets/hero3.png"
import hero4 from "../assets/hero4.png"

import logo from "../assets/logo.png"; // Asegúrate de que esta ruta sea correcta

export const LandingPage = () => {
  const navigate = useNavigate(); // Instancia de useNavigate

  const handleLogin = () => {
    navigate("/login"); // Redirige a la página de login
  };

  return (
    <PageContainer>
      <Navbar>
        <LogoContainer>
          <LogoImage src={logo} alt="LabTutor Logo" />
          <LogoText>LabTutor</LogoText>
        </LogoContainer>
        <NavButtons>
          <ButtonNav secondary onClick={handleLogin}>Iniciar sesión</ButtonNav>
        </NavButtons>
      </Navbar>

      <HeroSection>
        <HeroContent>
          <Title>
            Potenciando tu aprendizaje con <span style={{
              background: 'linear-gradient(90deg, #15d1c1 0%, #6487fa 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              LabTutor
            </span>:
          </Title>
          <Title>
            el tutor inteligente de laboratorio clínico!
          </Title>
          <Subtitle>
            Explora tus clases más a detalle con más recursos hechos para tu aprendizaje:
            videos, libros, artículos de clase, glosario, foros y más!
          </Subtitle>
          <ButtonContainer>
            <Button primary>Inscribirse ahora</Button>
            <Button secondary onClick={handleLogin}>Comenzar</Button>
          </ButtonContainer>
        </HeroContent>
        <HeroImageContainer>
          <HeroImage src={imagen} alt="Hero" />

        </HeroImageContainer>


      </HeroSection>

      {/* Sección de tecnologías con íconos de React Icons */}
      {/* <h2 style={{textAlign:"center", margin:"30px"}}>Plataforma desarrollada con:</h2> */}
      <SponsorSection>
        <LogoText>Desarrollado con:</LogoText>
        <SponsorLogo>
          <FaReact size={80} color="#0a4658" /> {/* React Icon */}
          <IconLabel>React 18</IconLabel>
        </SponsorLogo>
        <SponsorLogo>
          <FaHtml5 size={80} color="#0a4658" /> {/* HTML5 Icon */}
          <IconLabel>HTML5</IconLabel>
        </SponsorLogo>
        <SponsorLogo>
          <FaCss3Alt size={80} color="#0a4658" /> {/* CSS3 Icon */}
          <IconLabel>CSS3</IconLabel>
        </SponsorLogo>
        <SponsorLogo>
          <FaJsSquare size={80} color="#0a4658" /> {/* JavaScript Icon */}
          <IconLabel>JavaScript</IconLabel>
        </SponsorLogo>
      </SponsorSection>

      {/* Nueva sección de Beneficios */}
      <BenefitsSection>
        <BenefitsImageContainer>
          <ImageGridElement style={{ borderTopLeftRadius: "60px", borderBottomRightRadius: "60px", backgroundColor: "#15d1c1" }} >
            <BenefitsImage
              src={hero1} alt="Beneficios" first />
          </ImageGridElement>
          <ImageGridElement style={{ borderTopRightRadius: "60px", borderBottomLeftRadius: "60px", backgroundColor: "#6487fa" }}>
            <BenefitsImage src={hero2} alt="Beneficios" />
          </ImageGridElement>
          <ImageGridElement style={{ borderTopRightRadius: "60px", borderBottomLeftRadius: "60px", backgroundColor: "#6487fa" }}>
            <BenefitsImage src={hero3} alt="Beneficios" />
          </ImageGridElement>
          <ImageGridElement style={{ borderTopLeftRadius: "60px", borderBottomRightRadius: "60px", backgroundColor: "#15d1c1" }}>
            <BenefitsImage src={hero4} alt="Beneficios" />
          </ImageGridElement>

        </BenefitsImageContainer>

        <BenefitsContent>
      <BenefitsTitle>
        <span style={{
          background: 'linear-gradient(90deg, #15d1c1 0%, #6487fa 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Beneficios
        </span> De Nuestro Aprendizaje en Línea
      </BenefitsTitle>
      
      <BenefitItem>
        <BenefitIcon style={{backgroundColor:"#6487fa"}}>
          <FaGraduationCap color="#ffffff" />
        </BenefitIcon>
        <BenefitText>
          <h4>Recursos de clases en línea</h4>
          <p>Obtén los recursos de las clases más extras elegidos especialmente para tu aprendizaje.</p>
        </BenefitText>
      </BenefitItem>

      <BenefitItem>
        <BenefitIcon>
          <IoBookOutline  color="#ffffff" />
        </BenefitIcon>
        <BenefitText>
          <h4>Glosario</h4>
          <p>Mejora tus comprensión y entendimiento de diversas clases con el glosario incluido en los artículos de clase.</p>
        </BenefitText>
      </BenefitItem>

      <BenefitItem>
        <BenefitIcon style={{backgroundColor:"#6487fa"}}>
          <FaChalkboardTeacher color="#ffffff" />
        </BenefitIcon>
        <BenefitText>
          <h4>Foros</h4>
          <p>Debate y comparte tu opinión en los foros de cada clase.</p>
        </BenefitText>
      </BenefitItem>

      <BenefitItem>
        <BenefitIcon>
          <FaVideo color="#ffffff" />
        </BenefitIcon>
        <BenefitText>
          <h4>Videos</h4>
          <p>Accede a una gran cantidad de videos por clase para profundizar más en los temas.</p>
        </BenefitText>
      </BenefitItem>
    </BenefitsContent>
      </BenefitsSection>
    </PageContainer>
  );
};

// Styled Components

const PageContainer = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #b2ebf2; /* Cambié el color del fondo para mejor armonía */
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #b2ebf2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const LogoImage = styled.img`
  width: 50px;
  height: auto;
`;

const LogoText = styled.h1`
  font-size: clamp(1.8rem, 2.5vw, 2rem);
  font-weight: bold;
  color: #000000;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
    margin-top: 10px;
  }
`;

const ButtonNav = styled.button`
  padding: 12px 25px;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  background-color: #6487fa;
  &:hover {
      background-color: #6576bb;
  }

  @media (max-width: 380px) {
    padding: 12px 15px;

  }

`;

const Button = styled.button`
  padding: 12px 25px;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  ${(props) =>
    props.primary &&
    `
    background-color: #6487fa;
    &:hover {
      background-color: #6576bb;
    }
  `}

  ${(props) =>
    props.secondary &&
    `
    background-color: transparent;
    color: #5f7bfc;
    border: 2px solid #5871e2;
    &:hover {
      background-color: #ACB6E5;
      color: white;
    }
  `}
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #b2ebf2;
  margin-bottom: 40px;
  padding: 0px 300px;

  @media (max-width: 1700px) {
    padding: 80px 200px;
  }

  @media (max-width: 1500px) {
    padding: 80px 100px;
  }

  @media (max-width: 1380px) {
    padding: 80px 50px;
  }

  @media (max-width: 1332px) {
    flex-direction: column;
    text-align: center;
    padding: 50px;
    gap: 20px;
  }

  @media (max-width: 1050px) {
    padding: 80px 50px;
    flex-direction: column;
  }

  @media (max-width: 852px) {
    align-items: center;
    padding: 80px 150px;
  }

  @media (max-width: 600px) {
    align-items: center;
    padding: 80px 20px;
  }
`;


const HeroContent = styled.div`
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: bold;
  color: #333;
`;

const Subtitle = styled.p`
  margin: 20px 0;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: #555;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 852px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const HeroImage = styled.img`
  overflow: hidden;
  background: linear-gradient(90deg, #15d1c1 00%, #6487fa 100%); /* Degradado de verde agua a morado claro */
  border-radius: 100%;
  width: 100%;
  transform: scaleX(-1); /* Rotar la imagen en el eje X */
`;


const HeroImageContainer = styled.div`
  height: 100%;
  width: clamp(350px, 60%, 700px);

  /* background-color: purple; */
  border: 5px dotted #38c1d3; /* Borde de 2px, punteado y de color negro */
  border-radius: 100%;
  padding: 20px;


`;

const SponsorSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  background: linear-gradient(90deg, #15d1c1 00%, #6487fa 100%); /* Degradado de verde agua a morado claro */

  @media (max-width: 852px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const SponsorLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const IconLabel = styled.span`
  font-size: 1rem;
  color: #333;
  font-weight: bold;
`;

// BENEFITS

const BenefitsSection = styled.section`
  display: flex;
  padding: 80px 300px;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  background-color: #b2ebf2;
  justify-content: center;
  margin-top: 50px;

  @media (max-width: 1700px) {
    padding: 80px 200px;
  }

  @media (max-width: 1500px) {
    padding: 80px 100px;
  }

  @media (max-width: 1380px) {
    padding: 80px 50px;
  }

  @media (max-width: 1332px) {
    flex-direction: column;
    text-align: center;
    padding: 50px;
    gap: 20px;
  }

  @media (max-width: 1050px) {
    padding: 80px 50px;
    flex-direction: column;
  }

  @media (max-width: 852px) {
    align-items: center;
    padding: 80px 150px;
  }

  @media (max-width: 600px) {
    align-items: center;
    padding: 80px 20px;
  }
`;
const BenefitsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${(props) => (props.first ? 'center' : 'center top')}; /* Condicional para la primera imagen */
  border-radius: 20px;
`;

const ImageGridElement = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const BenefitsImageContainer = styled.div`
  border: 5px dotted #38c1d3;
  display: grid;
  grid-template-columns: repeat(2, 280px); /* Ancho fijo para las columnas */
  grid-template-rows: repeat(2, 280px); /* Alto fijo para las filas */
  border-radius: 80px;
  justify-content: center;
  align-content: center;
  width: 600px; /* Ancho fijo */
  height: 600px; /* Ajuste de alto */
  margin: 0 auto; /* Centrado horizontal */

  @media (max-width: 1500px) {
    width: 500px; /* Ancho fijo */
    height: 500px; /* Ajuste de alto */

    grid-template-columns: repeat(2, 230px); /* Ancho fijo para las columnas */
    grid-template-rows: repeat(2, 230px); /* Alto fijo para las filas */
  }

  @media (max-width: 1050px) {
    width: 465px; /* Ancho fijo */
    height: 465px; /* Ajuste de alto */

    grid-template-columns: repeat(2, 215px); /* Ancho fijo para las columnas */
    grid-template-rows: repeat(2, 215px); /* Alto fijo para las filas */
  }

  @media (max-width: 510px) {
    width: 365px; /* Ancho fijo */
    height: 365px; /* Ajuste de alto */

    grid-template-columns: repeat(2, 165px); /* Ancho fijo para las columnas */
    grid-template-rows: repeat(2, 165px); /* Alto fijo para las filas */
  }

  @media (max-width: 400px) {
    width: 265px; /* Ancho fijo */
    height: 265px; /* Ajuste de alto */

    grid-template-columns: repeat(2, 115px); /* Ancho fijo para las columnas */
    grid-template-rows: repeat(2, 115px); /* Alto fijo para las filas */
  }
`;



const BenefitsContent = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 852px) {
    max-width: 100%;
    text-align: center;
  }
`;

const BenefitsTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  svg{
    font-size: 10px;
  }
`;

const BenefitIcon = styled.span`
  font-size: 1.8rem;
  background-color: #38c1d3;
  border-radius: 100%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 1.8rem; /* Cambia el tamaño del icono */
  }
`;

const BenefitText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  color: #7c7878;
  gap: 5px;

  h4{
    font-size: 1.4rem;
    color: #000000;
  }
`;