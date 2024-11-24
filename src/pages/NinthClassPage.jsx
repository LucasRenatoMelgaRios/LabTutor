import styled from "styled-components";
import { useState, useEffect } from "react";
import { IdeasFuerza } from "../components/sections/IdeasFuerza";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CierreUno } from "../components/CierreUno";

export const NinthClassPage = () => {
  const navigate = useNavigate();

  const dialogamosQuestions = [
    "¿De que estan compuestas las heces?",
    "¿De que depende el aspecto de las heces?",
    "¿Que indica unas heces duras?",
    "¿Que indican las heces negras?",
  ];

  return (
    <ClassContainer>
      {/* Sección de introducción */}
      <Section>
        <FlexContainer>
          <BackButton onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </BackButton>
          <ClassTitle style={{ color: "purple" }}>Heces</ClassTitle>
          <BackButton>
            <FaArrowRight />
          </BackButton>
        </FlexContainer>

        <VideoWrapper>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Dno0L4fILcg?si=90NXtTXNuXZr6ID2"
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
        <SectionTitle>HECES</SectionTitle>
        <ClassDescription>
          Las heces, también denominado excremento, deposición, materia fecal,
          pupú, o caca, es el conjunto de los desperdicios sólidos o líquidos
          que constituyen el producto final del proceso de la digestión. Están
          formados por los restos de los alimentos que no son absorbidos por el
          aparato digestivo, tales como fibras y otros componentes que no son
          útiles para el ser en cuestión. Asimismo, en su composición hay
          células del epitelio intestinal que se descaman durante el proceso de
          absorción de los nutrientes, microorganismos y otras sustancias que
          pueden atravesar el epitelio intestinal.
        </ClassDescription>
        <img
          src="https://m.media-amazon.com/images/I/41RDnTgF-OL.jpg"
          alt="CACA"
        />
        <SectionTitle>Apariencia y consistencia</SectionTitle>

        <ClassDescription>
          La apariencia y la consistencia de la heces representan un importante
          papel en el enfoque clínico del paciente con trastornos
          gastrointestinales. La descripción hecha por el propio paciente de sus
          heces, así como los cambios en su consistencia, es fundamental a la
          hora de valorar la posible presencia de alteraciones como la diarrea o
          el estreñimiento. Con tal fin, se han propuesto algunas escalas
          visuales descriptivas. La más ampliamente utilizada es la escala de
          Bristol, que incluye una clasificación dividida en siete patrones.
        </ClassDescription>
        <img
          src="https://www.familiaysalud.es/sites/default/files/bristol.jpg"
          alt="Escala de bristol"
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
          expulsen al toser. Las «heces ideales» son pardas, se hunden y tienen
          aspecto de morcilla con grietas en la superficie (tipo 3 de la escala
          de Bristol) o bien de salchicha o serpiente, lisa y blanda (tipo 4 de
          la escala de Bristol).​ Las heces duras se producen cuando existe
          estreñimiento. Las heces pastosas, blandas o líquidas son heces
          diarreicas.
        </ClassDescription>
      </Section>

      {/* Tipos de biopsia */}
      <Section>
        <SectionTitle>COLOR</SectionTitle>
        <ClassDescription>
          El color normal de las heces es pardo, de diferente intensidad. Se
          debe a la presencia de estercobilina y varía de acuerdo a la ingestión
          de alimentos y medicamentos. Asimismo, algunas afecciones pueden
          modificar su color.Estas son algunas de las posibles variaciones en el
          color de las heces y sus causas:
        </ClassDescription>

        <ClassDescription>
          <p>
            {" "}
            <span style={{ color: "#e9be00" }}>
              {" "}
              Pálidas o de color arcilla:
            </span>{" "}
            Las heces pálidas o de color arcilla pueden estar causadas por
            problemas en el sistema biliar, que incluye el sistema de drenaje de
            la vesícula biliar, el hígado y el páncreas.
          </p>
          <p>
            {" "}
            <span style={{ color: "#ca501f" }}>Negras o rojas:</span> Pueden ser
            debidas a la ingestión de determinadas sustancias​ o a la presencia
            de sangre,​ que puede provenir de cualquier parte del tubo
            digestivo, desde la boca hasta el ano.
          </p>
          <p>
            {" "}
            <span style={{ color: "#27e900" }}>Verdes:</span> La ingestión de
            clorofila, presente en plantas verdes, alimentos vegetales, algunos
            cosméticos y suplementos naturales, puede tornar las heces de color
            verde.
          </p>
          <p>
            <span style={{ color: "#966600" }}>Grisáceas:</span> Esto puede ser
            un Las heces de color grisáceo y deshechas suelen indicar
            estrechamiento de los conducto biliares o malabsorción de lípidos.
            Heces grises y muy deshechas, con cierta acumulación de grasa,
            pueden ser debidas a enfermedad del páncreas.
          </p>
        </ClassDescription>
        <img src="https://media.telemetro.com/adjuntos/311/migration/vidayestilo/saludytrabajo/dicen-heces-salud_MEDFIL20160410_0002.jpg" />
      </Section>

      {/* Conservación y transporte de muestras */}
      <Section>
        <SectionTitle>Análisis de heces</SectionTitle>
        <ClassDescription>
          Las heces se pueden analizar para determinar la presencia de bacterias
          y/o parásitos en el tubo digestivo. En el intestino humano viven
          numerosos microorganismos, necesarios para el proceso digestivo, pero
          en ocasiones se infecta con bacterias o parásitos nocivos que pueden
          provocar diversos trastornos. En tales casos, probablemente será
          necesario examinar las heces al microscopio, cultivarlas y hacer otras
          pruebas para ayudar a esclarecer la causa del problema.Otros estudios
          en heces (como la presencia de sangre oculta o el aumento en el
          contenido de grasa) son útiles para evaluar la presencia de diversos
          trastornos.
        </ClassDescription>
        <img
          src="https://www.webconsultas.com/sites/default/files/styles/wch_image_schema/public/media/0d/migrated/como-analisis-heces.jpg"
          alt=""
        />
      </Section>
      {/* Vídeos adicionales */}
      <Section>
        <SectionTitle>Vídeo: Test de Thevenon: Procedimiento</SectionTitle>
        <VideoWrapper>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/s9fNFYUOKzg?si=C7cS6nLTxwzRaZkh"
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

  p {
    margin-top: 10px;
  }
`;
