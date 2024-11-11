import styled from "styled-components";
import { useState, useEffect } from "react";
import { IdeasFuerza } from "../components/sections/IdeasFuerza";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CierreUno } from "../components/CierreUno";

export const SeventhClassPage = () => {
  const navigate = useNavigate();

  const dialogamosQuestions = [
    "¿Que es la orina?",
    "¿Cual es el volumen normal de orina / 24 h?",
    "¿Que indica la presencia de glucosa en orina?",
    "¿Que indica una orina alcalina? ",
  ];

  return (
    <ClassContainer>
      {/* Sección de introducción */}
      <Section>
        <FlexContainer>
          <BackButton onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </BackButton>
          <ClassTitle style={{ color: "purple" }}>ORINA</ClassTitle>
          <BackButton>
            <FaArrowRight />
          </BackButton>
        </FlexContainer>

        <VideoWrapper>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jP-T6dPJ3yQ?si=9FjI4AgiPv3UaXfr"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>{" "}
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
        <SectionTitle>Orina</SectionTitle>
        <ClassDescription>
          La orina es un líquido acuoso transparente y amarillento, de olor
          característico, secretado por los riñones y enviado al exterior por el
          aparato urinario. La orina puede servir para determinar la presencia
          de algunas enfermedades. Después de la producción de orina por los
          riñones, este recorre los uréteres hasta la vejiga urinaria, donde se
          almacena y después es expulsado al exterior del cuerpo a través de la
          uretra, mediante la micción.{" "}
        </ClassDescription>
        <img
          src="https://usercontent.one/wp/www.webfisio.es/wp-content/uploads/2021/05/urinario-971x1024.jpg?media=1718886053"
          alt="biopsia"
        />
      </Section>

      {/* Tipos de biopsia */}
      <Section>
        <SectionTitle>FUNCIONES DE LA ORINA</SectionTitle>
        <p>
          Las funciones de la orina influyen sobre la homeostasis por las
          siguientes razones:
        </p>
        <ClassDescription>
          <p>
            {" "}
            * Eliminación de sustancias tóxicas producidas por el metabolismo
            celular como la urea.
          </p>
          <p>
            {" "}
            * Eliminación de sustancias tóxicas como la ingesta de drogas y
            alcohol.
          </p>
          <p>
            * Control electrolítico, al regular la excreción sobre todo de sodio
            y potasio.
          </p>
          <p>
            {" "}
            * Control de la presión arterial, a través de la regulación hídrica
            o de la volemia.
          </p>

          <p> * Control del equilibrio ácido-base.</p>
        </ClassDescription>
      </Section>

      {/* Conservación y transporte de muestras */}
      <Section>
        <SectionTitle>COMPOSICION DE LA ORINA</SectionTitle>
        <ClassDescription>
          En los seres humanos, la orina normal suele ser un líquido
          transparente o amarillento.La orina normal contiene un 95 % de agua,
          un 2 % de sales minerales y 3 % de urea y ácido úrico, y
          aproximadamente 20 g de urea por litro. Cerca de la mitad de los
          sólidos son urea, el principal producto de degradación del metabolismo
          de las proteínas. El resto incluye nitrógeno, cloruros, cetosteroides,
          fósforo, amonio, creatinina y ácido úrico.
        </ClassDescription>
        <img
          src="https://diarioenfermero.es/wp-content/uploads/2023/04/medico-sostiene-lata-analisis-orina-su-mano-muestra-orina-examen-scaled.jpg"
          alt="Transporte de muestras"
        />
        <SectionTitle>AlTERACIONES DE LA ORINA</SectionTitle>

        <ClassDescription>
          <p>
            * Glucosuria: es la presencia de glucosa en la orina y aparece sobre
            todo en la diabetes mellitus.
          </p>
          <p>
            {" "}
            * Hematuria: es la presencia de sangre en la orina, y deben
            descartarse, entre otras cosas: infección urinaria, litiasis
            urinaria, glomerulonefritis, neoplasia (cáncer de vejiga, uréter,
            riñón, próstata)
          </p>
          <p> * Bacteriuria: es la presencia de bacterias en la orina.</p>
          <p>
            {" "}
            * Piuria: es la presencia de Piocitos (Leucocitos) formadores de pus
            en la orina.
          </p>
          <p>
            {" "}
            * Proteinuria: es la presencia de proteínas en la orina, como suele
            observarse en: glomerulonefritis, infección urinaria,
            intoxicaciones, diabetes y otras.
          </p>
        </ClassDescription>
        <img
          src="https://s2.abcstatics.com/abc/www/multimedia/salud/2023/02/20/muestra-orina-RKextZqw3bYT2jLhsQ2GagO-1200x840@abc.jpg"
          alt="Concentración de glucosa"
        />
      </Section>

      {/* Vídeos adicionales */}
      <Section>
        <SectionTitle>Vídeo: Test de embarazo con orina</SectionTitle>
        <VideoWrapper>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5TiQvWgasdg?si=V_0F6AZz6Us7kpqq"
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
            1.¿Cómo funciona la prueba de embarazo en orina?
          </QuestionItem>
          <QuestionItem>
            2.¿Cuándo es el mejor momento para realizar una prueba de embarazo
            en orina?
          </QuestionItem>
          <QuestionItem>
            3.¿Cuánto tiempo se debe esperar para leer el resultado de la prueba
            de embarazo en orina?{" "}
          </QuestionItem>
          <QuestionItem>
            4.¿Puede una prueba de embarazo en orina dar un falso positivo o
            falso negativo?{" "}
          </QuestionItem>
          <QuestionItem>
            5.¿Es necesario hacer la prueba de embarazo en la primera orina de
            la mañana?{" "}
          </QuestionItem>
          <QuestionItem>
            6.¿Qué significa un resultado positivo en la prueba de embarazo en
            orina?{" "}
          </QuestionItem>
          <QuestionItem>
            7.¿Por qué a veces puede aparecer una línea muy tenue en la prueba
            de embarazo en orina?
          </QuestionItem>
          <QuestionItem>
            8.¿Cuánto tiempo después de la concepción puede detectarse un
            embarazo mediante una prueba en orina?{" "}
          </QuestionItem>
          <QuestionItem>
            9.¿Qué tan precisas son las pruebas de embarazo en orina?
          </QuestionItem>
          <QuestionItem>
            10.¿Es necesario confirmar el resultado de una prueba de embarazo en
            orina con otra prueba?{" "}
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
