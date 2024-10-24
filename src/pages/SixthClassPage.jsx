import styled from "styled-components";
import { useState, useEffect } from "react";
import { IdeasFuerza } from "../components/sections/IdeasFuerza";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CierreUno } from "../components/CierreUno";

export const SixthClassPage = () => {

    const navigate = useNavigate();

    const dialogamosQuestions = [
        "¿Qué es una biopsia?",
        "¿Para qué se hace una biopsia?",
        "¿Cuáles son los tipos de biopsia?",
        "¿Cuáles son los métodos de obtención de biopsia?"
    ];

    return (
        <ClassContainer>
            {/* Sección de introducción */}
            <Section>
                <FlexContainer>
                    <BackButton onClick={() => navigate(-1)}>
                        <FaArrowLeft />
                    </BackButton>
                    <ClassTitle style={{ color: "purple" }}>BIÓPSIAS.</ClassTitle>
                    <BackButton>
                        <FaArrowRight />
                    </BackButton>
                </FlexContainer>

                <VideoWrapper>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7hQa-tf5jmE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                <SectionTitle>¿Qué es una biopsia?</SectionTitle>
                <ClassDescription>
                    Una biopsia es un procedimiento que se realiza para extraer una muestra de tejido o de células del cuerpo para su análisis en un laboratorio. Las biopsias se usan frecuentemente para diagnosticar cáncer, pero también pueden identificar infecciones y otros desórdenes.
                </ClassDescription>
                <img src="https://asocolderma.org.co/sites/default/files/enfermedad/biopsia-de-la-piel_0.jpg" alt="biopsia" />
            </Section>

            {/* Tipos de biopsia */}
            <Section>
                <SectionTitle>Tipos de biopsia</SectionTitle>
                <ClassDescription>
                    <strong>* Biopsia incisional:</strong> Es la biopsia en la que se corta o se extirpa quirúrgicamente sólo un trozo de tejido, masa o tumor. Este tipo de biopsia se utiliza más a menudo en los tumores de tejidos blandos como el cerebro, hígado, pulmón, riñón, para distinguir patología benigna de la maligna, porque estos órganos no se pueden extirpar, o porque la lesión es muy grande o difusa. <br />
                    <strong>* Biopsia excisional:</strong> Una biopsia excisional es la extirpación completa de un órgano o un tumor, generalmente sin márgenes, que se realiza normalmente en quirófano bajo anestesia general o local y con cirugía mayor o menor respectivamente.
                </ClassDescription>
                <img src="https://i.pinimg.com/originals/0e/24/e5/0e24e5c9fa17c8b3a52a42d30033278d.png" alt="Tipos de biopsia" />
                <ClassDescription>
                    <strong>* Biopsia endoscópica:</strong> Es la biopsia obtenida por medio de un endoscopio que se inserta por un orificio natural. El endoscopio contiene un sistema de luz y de visualización para observar las lesiones de órganos huecos o cavidades corporales junto con pinzas que discurren a lo largo del tubo del endoscopio y que pueden extirpar pequeños fragmentos de la superficie interna del órgano o cavidad. <br />
                    <strong>* Biopsia colposcópica:</strong> Es la biopsia en la que se obtiene tejido de la vagina o del cuello del útero y que realizan los ginecólogos ante una prueba de Papanicolaou positiva, para descartar un cáncer de cérvix o de vagina, mediante un colposcopio.
                </ClassDescription>
                <img src="https://hospital.vallhebron.com/sites/hospital/files/styles/crop_16_9_large/public/colposcopia-552.jpg?itok=hSOK7UZu" alt="Biopsia endoscópica" />
                <ClassDescription>
                    <strong>* Punción-aspiración con aguja fina (PAAF):</strong> Es la biopsia obtenida mediante la punción con una aguja de escaso calibre conectada a una jeringa y la realización de una aspiración enérgica. Se obtiene generalmente células aisladas que se extienden sobre una laminilla. Más que una biopsia es una citología. La PAAF suele utilizarse para obtener muestras de órganos profundos como el páncreas y el pulmón, guiadas por TAC o ecografía. El inconveniente de la citología es que no es un diagnóstico de certeza. <br />
                    <strong>* Biopsia por perforación:</strong> También se llama punch. Es la biopsia de piel, que se realiza con una cuchilla cilíndrica hueca que obtiene un cilindro de 2 a 4 milímetros, bajo anestesia local y un punto de sutura. Su finalidad es diagnóstica.
                </ClassDescription>
                <img src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/11/15/17/35/ca00083_-ds00439_-my00169_im03539_c7_punchbiopsy_jpg.jpg" alt="PAAF y perforación" />
            </Section>

            {/* Conservación y transporte de muestras */}
            <Section>
                <SectionTitle>Conservación y transporte de las muestras</SectionTitle>
                <ClassDescription>
                Las muestras acompañadas de las correspondientes solicitudes, deben remitirse a la Unidad de Recepción de Muestras por los distintos sistemas habilitados dependiendo de: - Su Procedencia: Atención Primaria, Unidades de Extracción y Recogida de Muestras ubicadas en los distintos Hospitales y Plantas de Hospitalización - el Laboratorio de destino: Urgencias, Laboratorios Programados.El sistema de envío de muestras por tubo neumático es un procedimiento rápido y de probada eficacia. Salvo escasas excepciones (frascos de hemocultivo...), no daña las muestras ni produce interferencias en la posterior medición de magnitudes bioquímicas, hematológicas o en la realización de gasometrías.</ClassDescription>
                <img src="https://i.ytimg.com/vi/2ab9IzEsvV4/maxresdefault.jpg" alt="Transporte de muestras" />
                <ClassDescription>
                Las muestras deberían permanecer el mínimo tiempo posible en el control de enfermería antes de ser enviada por tubo neumático al laboratorio. El tiempo óptimo entre la extracción de la sangre y su recepción en el laboratorio debería ser inferior a una hora. Estos retrasos en la recepción de los resultados son la causa más importante de prolongación indebida del tiempo de respuesta del Laboratorio, y contribuye notablemente a la demora en los Laboratorios Programados y pueden ser causa de alteraciones en determinadas magnitudes bioquímicas y hematológicas. Por ejemplo, la concentración de glucosa puede disminuir hasta un 10% en una muestra de sangre almacenada durante dos horas a temperatura ambiente; un frotis de sangre periférica requiere ser realizado dentro de las tres primeras horas desde la extracción para que los leucocitos conserven bien su morfología, etc.</ClassDescription>
                <img src="https://www.bupasalud.com/sites/default/files/styles/640_x_400/public/articulos/2018-01/fotos/prediabetes-glucosa-alterada-ayunas.jpg?itok=dOw6oG9p" alt="Concentración de glucosa" />
                <ClassDescription>
                El sistema de embalaje/envasado que deberá utilizarse para todas las sustancias infecciosas, es el sistema básico de embalaje/envasado triple P650 que comprende las tres capas siguientes:• Recipiente primario. Un recipiente impermeable que contiene la muestra. El recipiente se envuelve en material absorbente suficiente para absorber todo el fluido en caso de rotura.• Embalaje/envase secundario. Un segundo embalaje/envase, impermeable y duradero que encierra y protege el recipiente primario. • Embalaje/envase exterior. Los embalajes/envases secundarios se colocan en embalajes/envases exteriores con un material amortiguador adecuado. Los embalajes/envases exteriores protegen el contenido de los elementos exteriores, como daños físicos, mientras el bulto se encuentra en tránsito. Ninguna de las caras del embalaje exterior tendrá dimensiones inferiores a 10 × 10 cm.                </ClassDescription>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Triple_embalaje_esquema.png/500px-Triple_embalaje_esquema.png" alt="Sistema de embalaje" />
            </Section>

            {/* Vídeos adicionales */}
            <Section>
                <SectionTitle>Vídeo: Toma de muestra: Raspado de piel</SectionTitle>
                <VideoWrapper>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9n0ffMUFzqk?si=ch55GPfyBfqbgG12" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                </VideoWrapper>
            </Section>
            <Section>
                <SectionTitle>TEST DE KOH 10%</SectionTitle>
                <VideoWrapper>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TzIUU32adKo?si=hwSTMTdJ2bExPrDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                </VideoWrapper>
            </Section>

            {/* Cuestionario final */}
            <Section>
                <SectionTitle>Cuestionario</SectionTitle>
                <QuestionList>
                    <QuestionItem>1. ¿Qué es el test micológico con KOH?</QuestionItem>
                    <QuestionItem>2. ¿Para qué se utiliza el test micológico con KOH?</QuestionItem>
                    <QuestionItem>3. ¿Cómo se realiza el procedimiento del test micológico con KOH?</QuestionItem>
                    <QuestionItem>4. ¿Qué efecto tiene el KOH en la muestra de tejido?</QuestionItem>
                    <QuestionItem>5. ¿Qué tipos de muestras se pueden analizar con este test?</QuestionItem>
                    <QuestionItem>6. ¿Cuánto tiempo se tarda en obtener resultados del test con KOH?</QuestionItem>
                    <QuestionItem>7. ¿Quiénes son los candidatos para hacerse el test micológico con KOH?</QuestionItem>
                    <QuestionItem>8. ¿Es el test micológico con KOH un procedimiento doloroso?</QuestionItem>
                    <QuestionItem>9. ¿Qué estructuras fúngicas se pueden observar en un resultado positivo?</QuestionItem>
                    <QuestionItem>10. ¿Es el test micológico con KOH completamente preciso?</QuestionItem>
                </QuestionList>
            </Section>

            <Section>
                <CierreUno />
                <IdeasFuerza />
            </Section>

        </ClassContainer>
    )
}

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

    img{
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

    img{
        border-radius: 8px;
        width: 100%;
        object-fit: cover;
    }
`;
