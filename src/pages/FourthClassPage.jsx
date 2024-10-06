import styled from "styled-components";
import { useState, useEffect } from "react";
import { IdeasFuerza } from "../components/sections/IdeasFuerza";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CierreUno } from "../components/CierreUno";
import imagen1 from "../assets/classes/class4/imagen1.PNG"
import imagen2 from "../assets/classes/class4/imagen2.PNG"
import imagen3 from "../assets/classes/class4/imagen3.PNG"

export const FourthClassPage = () => {

    const navigate = useNavigate();

    const dialogamosQuestions = [
        "¿Cuál es la importancia de la identificacion de pacientes y muestras de laboratorio?",
        "¿Cuáles son los datos basicos para identificar al paciente?",
        "¿Por qué se necesita rotular las muestras?",
        "¿Qué errores se pueden cometer en la idenficacion del paciente?"
    ];

    return (
        <ClassContainer>
            {/* Sección de introducción */}
            <Section>
                <FlexContainer>
                    <BackButton onClick={() => navigate(-1)}>
                        <FaArrowLeft />
                    </BackButton>
                    <ClassTitle style={{ color: "purple" }}>Normas de calidad en el proceso pre analítico.</ClassTitle>
                    <BackButton>
                        <FaArrowRight />
                    </BackButton>
                </FlexContainer>

                <VideoWrapper>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/myaI8YRQOcc?si=DSyhr6Ha_oWHSXWV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                </VideoWrapper>
            </Section>

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

            <Section>
                <SectionTitle>IDENTIFICACIÓN DEL PACIENTE Y DE LA MUESTRA</SectionTitle>
                <ClassDescription style={{display:"flex", flexDirection:"column", alignContent:"center", justifyContent:"center", gap:"20px"}}>
                    Antes de proceder a extraer la muestra se debe examinar la solicitud para constatar que ha sido correctamente rellenada. En una solicitud debe constar, como mínimo, el nombre y dos apellidos del paciente, su edad, documento de identidad (DNI), el código del médico peticionario y la firma del mismo, la fecha de extracción o recogida de la muestra, el diagnóstico o sospecha diagnóstica y las pruebas de laboratorio que se solicitan. Lo ideal es utilizar etiquetas identificativas del paciente, ya que esta incluye todos los datos que identifican inequívocamente al paciente.
                    <img src={imagen1} alt="" />
                </ClassDescription>
                <ClassDescription style={{ marginTop: "20px", display:"flex", flexDirection:"column", alignContent:"center", justifyContent:"center", gap:"20px" }}>
                    El correcto rellenado de estos datos facilitará las actuaciones del Laboratorio y la correcta interpretación de los resultados. El no rellenado de estos datos podrá ser motivo de rechazo por parte del Laboratorio.Recuerde que toda solicitud incompleta conlleva un retraso en la recepción de los resultados y puede hacer necesaria una nueva extracción en caso de que haya dudas sobre la identidad del paciente o de la muestra. La confusión en los nombres o el intercambio de peticiones o muestras entre dos pacientes puede tener muy serias consecuencias en su  diagnóstico o/y tratamiento.
                    <img src={imagen2} alt="" />
                </ClassDescription>
                <ClassDescription style={{ marginTop: "20px", display:"flex", flexDirection:"column", alignContent:"center", justifyContent:"center", gap:"20px"}}>
                    En el momento de la extracción de sangre, es necesario cerciorarse, de que el paciente al que se va a realizar la extracción es el mismo cuyos datos figuran en la solicitud.Cuando se solicitan en la misma hoja de petición determinaciones en muestras de sangre y orina u otros líquidos biológicos se esperará a tener todas las muestras para remitirlas al Laboratorio o se cumplimentará una solicitud para cada una de ellas.En las hojas de petición en que se soliciten determinaciones analíticas seriadas (perfiles glucémicos, etc.) debe constar la hora en que han de realizarse las mismas.La muestra debe quedar perfectamente identificada en el momento de la extracción, con el nombre, dos apellidos y ubicación del paciente en el centro de salud.
                    <img src={imagen3} alt="" />
                </ClassDescription>
            </Section>
            <Section>
                <SectionTitle>RECOGIDA DE MUESTRAS DE HECES(Instrucciones para el paciente)</SectionTitle>
                <h3>PREPARACION DEL PACIENTE</h3>
                <ClassDescription>
                    - No es necesario seguir ningún tipo de dieta.
                </ClassDescription>
                <ClassDescription>
                    - No se pueden recoger las muestras de heces durante periodos menstruales.
                </ClassDescription>
                <h3>RECIPIENTE</h3>
                <ClassDescription>
                    Se recomienda utilizar un recolector específico de muestras, que se facilitará en el Laboratorio. En caso de no disponer de este recolector específico, las heces deben recogerse en frascos, bien limpios, de boca ancha y cierre hermético.
                </ClassDescription>
                <h2 style={{ color: "green", marginTop: "20px" }}>Técnica de recogida:</h2>
                <ItemList>
                    <Item>
                        <ItemNumber>1</ItemNumber>
                        <ItemContent>
                            Recoger las heces en un recipiente limpio y seco. En caso de tener el recolector específico puede utilizar una bolsa grande de plástico colocada en la taza del water y seguir el punto 2. En caso de disponer del frasco estéril de boca ancha debe procurar no llenarlo.Tenga la precaución de orinar antes de recoger la muestra. No se pueden mezclar las heces con orina.
                        </ItemContent>
                    </Item>

                    <Item>
                        <ItemNumber>2</ItemNumber>
                        <ItemContent>
                            En caso de tener el recolector específico, abrir el tubo recolector, sacando el tapón que contiene el aplicador.          
                        </ItemContent>
                    </Item>

                    <Item>
                        <ItemNumber>3</ItemNumber>
                        <ItemContent>
                        Introducir el aplicador en 4-5 zonas diferentes de las heces, cubriendo la parte inferior del mismo al menos 1 cm.
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber>4</ItemNumber>
                        <ItemContent>
                        Meter el aplicador con las heces en el tubo.    
                         </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber>5</ItemNumber>
                        <ItemContent>
                            Cerrar el tapón
                        </ItemContent>
                    </Item>
                </ItemList>
            </Section>

            <Section>
                <SectionTitle>PRACTICA: examen simple de heces</SectionTitle>
                <VideoWrapper>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Wb9kqBdxhqw?si=lk6dce9ekYCvd_vF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </VideoWrapper>
            </Section>
            <Section>
                <CierreUno/>
                <IdeasFuerza/>
            </Section>

            
            {/* Sección del Cuestionario */}
            <Section>
                <SectionTitle>Cuestionario</SectionTitle>
                <QuestionList>
                    <QuestionItem>
                        <Question>1. ¿Qué es un examen simple de heces y cuál es su propósito?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>2. Cuáles son las condiciones más comunes que se pueden diagnosticar con un examen simple de heces?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>3. ¿Qué tipo de microorganismos se analizan en una muestra de heces?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>4. ¿Cuáles son los pasos principales para recolectar adecuadamente una muestra de heces?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>5. ¿Qué recomendaciones se deben seguir antes de realizarse un examen de heces?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>6. ¿Qué diferencias existen entre un examen simple de heces y otros estudios más específicos de heces como coprocultivo?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>7. ¿Qué significan los resultados anormales en un examen de heces?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>8. ¿Cuánto tiempo suelen tardar en entregarse los resultados de un examen simple de heces?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>9. ¿Existen factores que puedan afectar los resultados de un examen de heces?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>10. ¿Qué condiciones del tracto digestivo pueden ser detectadas con un examen de heces?</Question>
                    </QuestionItem>
                </QuestionList>
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
`;

const SectionTitle = styled.h2`
    font-size: clamp(1.2rem, 1.8vw, 2rem);
    color: #005a6d;
    margin-bottom: 15px;
    text-align: center;
`;

const InstructionContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InstructionTitle = styled.h3`
    font-size: 1.5rem;
    color: #005a6d;
`;

const InstructionDescription = styled.p`
    font-size: 1rem;
    color: #333;
`;

const InstructionSteps = styled.ol`
    margin: 15px 0;
    padding-left: 20px;
`;

const StepItem = styled.li`
    font-size: 1rem;
    color: #333;
`;

const InstructionImage = styled.img`
    width: 100%;
    max-width: 400px;
    height: auto;
    margin-top: 10px;
    border-radius: 10px;
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

const QuizButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const QuizButton = styled.button`
    background-color: #005a6d;
    color: white;
    padding: 10px 20px;
    font-size: clamp(1rem, 1.2vw, 1.2rem);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    transition: background-color 0.3s;

    &:hover {
        background-color: #004a5a;
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


const ItemList = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 10px;
`;

const Item = styled.li`
    display: flex;
    align-items: flex-start;
    margin-bottom: clamp(8px, 1.5vw, 15px);
`;

const ItemNumber = styled.span`
    font-size: clamp(1rem, 1.2vw, 1.5rem);
    color: #005a6d;
    font-weight: bold;
    margin-right: 12px;
`;

const ItemContent = styled.div`
    font-size: clamp(0.9rem, 1vw, 1.2rem);
    color: #333;
    line-height: 1.5;
`;