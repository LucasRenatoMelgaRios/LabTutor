import styled from "styled-components";
import { useState, useEffect } from "react";
import { IdeasFuerza } from "../components/sections/IdeasFuerza";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CierreUno } from "../components/CierreUno";

export const EightClassPage = () => {
  const navigate = useNavigate();

  const dialogamosQuestions = [
    "¿De donde proviene el esputo?",
    "¿Cual es el mejor momento para recolectar el esputo?",
    "¿Cuales son algunas caracteristicas del esputo?",
    "¿Donde se debe conservar la muestra de esputo? ",
  ];

  return (
    <ClassContainer>
      {/* Sección de introducción */}
      <Section>
        <FlexContainer>
          <BackButton onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </BackButton>
          <ClassTitle style={{ color: "purple" }}>Esputo</ClassTitle>
          <BackButton>
            <FaArrowRight />
          </BackButton>
        </FlexContainer>

        <VideoWrapper>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ILp2DNX9-Ss?si=7LMS_CRbc99uxo-p"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
      </Section>

      {/* Preguntas de dialogamos */}
      <Section>
        <DialogamosContainer>
          <DialogamosTitle>Dialogamos</DialogamosTitle>
          <QuestionList>
            {dialogamosQuestions.map((question, index) => (
              <QuestionItem key={index}>
                <Question>* {question}</Question>
              </QuestionItem>
            ))}
          </QuestionList>
        </DialogamosContainer>
      </Section>

      {/* Explicación de qué es una biopsia */}
      <Section>
        <SectionTitle>
          ESPUTO: Origen, características físico-químicas y biológicas.
        </SectionTitle>
        <ClassDescription>
          El esputo es un material viscoso que se produce en los pulmones y que
          se expulsa al toser. También se le conoce como flema. El esputo puede
          contener: moco, restos celulares, microorganismos, sangre, pus.El
          esputo puede ser un indicador de infecciones o enfermedades crónicas
          que afectan los pulmones o las vías respiratorias. Para detectar
          bacterias u hongos que están infectando los pulmones o las vías
          respiratorias, se puede realizar un cultivo de esputo.
        </ClassDescription>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/85/Sputum.JPG"
          alt="biopsia"
        />

        <ClassDescription>
          Normalmente en las vías respiratorias bajas se produce una pequeña
          cantidad de secreción sero mucosa (100 ml o menos al día) que
          usualmente es deglutida inadvertidamente. Se trata de un gel acuoso
          que contiene glicoproteínas, anticuerpos, lípidos y otras sustancias.
          Su composición depende del clima, de la genética y del estado del
          sistema inmunitario. 
        </ClassDescription>
        <img
          src="https://laboratorioclinilab.wordpress.com/wp-content/uploads/2017/09/images.jpg"
          alt="biopsia"
        />

        <ClassDescription>
          Cuando la cantidad aumenta por inflamación o irritación causada por
          enfermedades se produce obstrucción que dificulta la función
          respiratoria y se requiere la expulsión del material mediante la
          expectoración siendo síntoma importante desde el punto de vista de la
          semiología clínica al igual que el examen del producto de esa acción
          es decir el esputo.El esputo no es lo mismo que un escupitajo o la
          saliva. El esputo contiene células del sistema inmunitario que ayudan
          a combatir bacterias, hongos y otras sustancias extrañas en los
          pulmones o las vías respiratorias. El espesor del esputo ayuda a
          atrapar el material extraño. Esto permite que los pelitos diminutos de
          las vías respiratorias llamados cilios lo empujen por la boca y lo
          expulsen al toser.
        </ClassDescription>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV42lYSJgPqn3CTKwSyf-Qcw8wu-3EtKZGug&s"
          alt="biopsia"
        />
      </Section>

      {/* Tipos de biopsia */}
      <Section>
        <SectionTitle>COLORES DEL ESPUTO</SectionTitle>
        <ClassDescription>
          <p>
            {" "}
            <span style={{ color: "#00e9d5" }}> Transparente:</span> En general,
            significa que no tiene una infección.
          </p>
          <p>
            {" "}
            <span style={{ color: "#9c9e95" }}>Blanco o gris:</span> Es normal,
            pero una cantidad abundante puede significar enfermedad pulmonar.
          </p>
          <p>
            {" "}
            <span style={{ color: "#27e900" }}>
              Amarillo oscuro o verde:
            </span>{" "}
            Significa hay una infección bacteriana, como neumonía. Es común en
            las personas con fibrosis quística.{" "}
          </p>
          <p>
            <strong>Negro:</strong> Esto suele ocurrir en personas que fuman y
            es un signo común de la enfermedad del pulmón negro
          </p>
          <p>
            <span style={{ color: "#966600" }}>Marrón:</span> Esto puede ser un
            signo de sangre vieja. Esto puede ocurrir si tiene fibrosis
            quística, neumonía bacteriana, bronquitis bacteriana o alguna otra
            enfermedad pulmonar.{" "}
          </p>
          <p>
            {" "}
            <span style={{ color: "#e900ca" }}>Rosado:</span> Puede ser signo de
            edema pulmonar, una acumulación excesiva de líquido en los pulmones.
          </p>
          <p>
            <span style={{ color: "#ff0000" }}>Rojo:</span> Puede ser un signo
            temprano de cáncer de pulmón. También puede ser un signo de embolia
            pulmonar. {" "}
          </p>
        </ClassDescription>
        <img src="https://fotografias.larazon.es/clipping/cmsimages01/2023/09/08/AD500B47-B0F4-4EB1-8D23-3FEE487B62CC/esputo-diferentes-colores-utilizado-como-indicador-grado-inflamacion-pulmones_69.jpg?crop=3024,1701,x0,y560&width=1280&height=720&optimize=low&format=jpg" alt="" />
      </Section>

      {/* Conservación y transporte de muestras */}
      <Section>
        <SectionTitle>OBTENCION DEL ESPUTO: PRINCIPIOS GENERALES</SectionTitle>
        <ClassDescription>
          <p>
            {" "}
            <strong> Una buena muestra:</strong> Es aquella que proviene del
            arbol bronquial y se obtiene despues de un esfuerzo de tos. 
          </p>
          <p>
            {" "}
            <strong>Muestra suficiente:</strong> Es aquella con un volumen
            aproximado de 5 a 10 mL.
          </p>
          <p>
            *La hora de obtencion puede ser a cualquier hora del dia, de
            preferencia debera ser el primer esputo de la mañana y siempre antes
            del desayuno.
          </p>
          <p>
            *El ambiente donde se obtiene la muestra debe tener buena
            ventilacion y debe prohibirse la presencia de otras personas, al
            momento de la obtencion de la muestra.  
          </p>
        </ClassDescription>
      </Section>
      {/* Vídeos adicionales */}
      <Section>
        <SectionTitle>Vídeo: Tincion Gram</SectionTitle>
        <VideoWrapper>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/s9fNFYUOKzg?si=RwUaR7-hqSsEvqad"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
      </Section>

      {/* Cuestionario final */}
      <Section>
        <SectionTitle>Cuestionario</SectionTitle>
        <QuestionList>
          <QuestionItem>
            1.¿Qué es la tinción de Gram y cuál es su propósito principal en
            microbiología?
          </QuestionItem>
          <QuestionItem>
            2.¿Cuáles son los pasos básicos que se deben seguir para realizar
            una tinción de Gram?
          </QuestionItem>
          <QuestionItem>
            3.¿Por qué las bacterias se clasifican en Gram (+) y Gram (-) a
            través de esta tinción?
          </QuestionItem>
          <QuestionItem>
            4.¿Qué papel juega la pared celular en la clasificación mediante la
            tinción de Gram?
          </QuestionItem>
          <QuestionItem>
            5.¿Qué color presentan las bacterias Gram positivas y las Gram
            negativas al final del proceso?
          </QuestionItem>
          <QuestionItem>
            6.¿Cuál es la función del cristal violeta en la tinción de Gram y
            cómo actúa en las bacterias?
          </QuestionItem>
          <QuestionItem>
            7.¿Qué importancia tiene la aplicación de lugol en el procedimiento
            de la tinción de Gram?
          </QuestionItem>
          <QuestionItem>
            8.¿Qué ocurre en la etapa de decoloración con alcohol o acetona y
            cómo afecta a bacterias Gram positivas y Gram negativas?
          </QuestionItem>
          <QuestionItem>
            9.¿Para qué se utiliza la safranina en la tinción de Gram, y por qué
            es importante en la diferenciación final?{" "}
          </QuestionItem>
          <QuestionItem>
            10.¿Cuáles son algunas limitaciones de la tinción de Gram en la
            identificación de bacterias?
          </QuestionItem>
        </QuestionList>
      </Section>

      <Section>
        <CierreUno />
        <IdeasFuerza />
      </Section>
    </ClassContainer>
  );
};

// Estilos (mismos que en el primer código)
const ClassContainer = styled.div`
  padding: 20px;
  max-width: clamp(500px, 75%, 900px);
  margin: 0 auto;
`;

const ClassTitle = styled.h1`
  font-size: clamp(1.5rem, 2vw, 2.5rem);
  color: #005a6d;
  margin-bottom: 20px;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: clamp(15px, 4vw, 30px);

  img {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.2rem, 1.8vw, 2rem);
  color: #005a6d;
  margin-bottom: 15px;
  text-align: center;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const BackButton = styled.button`
  background-color: #005a6d;
  color: white;
  padding: 10px;
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: background-color 0.3s;
  width: fit-content;

  &:hover {
    background-color: #004a5a;
  }

  svg {
    margin-right: 5px;
    font-size: 1.5rem;
  }
`;

const DialogamosContainer = styled.div`
  background-color: #f0f8ff;
  padding: clamp(20px, 3vw, 30px);
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const DialogamosTitle = styled.h2`
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  color: #005a6d;
  margin-bottom: 20px;
  text-align: center;
`;

const QuestionList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const QuestionItem = styled.li`
  margin-bottom: 20px;
  font-size: 1.2rem;
`;

const Question = styled.p`
  font-size: clamp(1rem, 1.2vw, 1.5rem);
  color: #333;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
  border-radius: 10px;
  margin: 0 auto;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const ClassDescription = styled.p`
  font-size: clamp(0.9rem, 1.2vw, 1.2rem);
  color: #333;
  line-height: 1.5;

  img {
    border-radius: 8px;
    width: 100%;
    object-fit: cover;
  }
`;
