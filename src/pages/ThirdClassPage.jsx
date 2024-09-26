import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CierreUno } from "../components/CierreUno";
import tabla from "../assets/classes/class3/tabla.PNG"
import imagen1 from "../assets/classes/class2/imagen1.PNG";
import imagen2 from "../assets/classes/class2/imagen2.PNG";
import imagen3 from "../assets/classes/class2/imagen3.PNG";
import imagen4 from "../assets/classes/class2/imagen4.PNG";
import imagen5 from "../assets/classes/class2/imagen5.PNG";
import imagen6 from "../assets/classes/class2/imagen6.PNG";
import imagen7 from "../assets/classes/class2/imagen7.PNG";
import imagen8 from "../assets/classes/class2/imagen8.PNG";
import { IdeasFuerza } from "../components/sections/IdeasFuerza";

export const ThirdClassPage = () => {
    const navigate = useNavigate();

    // Preguntas para la sección de "Dialogamos"
    const dialogamosQuestions = [
        "¿Por qué se utiliza la primera orina de la mañana?",
        "¿Qué es el chorro intermedio?",
        "¿Por qué se debe eliminar el primer chorro?",
        "¿En qué casos se rechaza la muestra de orina?"
    ];

    const instructions = [
        {
            title: "Recolección de Orina para Adultos",
            description: "La muestra idónea es la primera micción de la mañana, ya que es la más concentrada. No obstante, en determinaciones urgentes, se recogerá la primera orina que realice el paciente. Es suficiente un volumen de orina de 5-10 mL. Normalmente el propio paciente recogerá la muestra de orina por lo que se le debe explicar los pasos a seguir:",
            steps: [
                "1) Se lavará las manos con agua y jabón.",
                "2) A los hombres, se les indicará que deben retraer completamente el prepucio, manteniéndolo retraído hasta que se haya recogido la muestra de orina. A las mujeres se les explicará que deben sujetar el frasco sin que éste tome contacto con la vulva, la pierna o la ropa.",
                "3) La orina debe recogerse, tras desechar los primeros 20-25 mL, en recipientes estériles."
            ],
            image: "https://www.mskcc.org/sites/default/files/patient_ed/clean_catch_urine_collection_instructions-156613/urine_collection-fig_6.png"
        },
        {
            title: "Recolección de Orina para Niños",
            description: "En niños y niñas mayores, la recogida se realiza de forma similar a la de los adultos. En los niños más pequeños se recogerá en colectores o bolsas estériles especialmente diseñadas para ello. La sistemática es:",
            steps: [
                "1) Lavado de los genitales y área perineal con agua y jabón.",
                "2) Colocar la bolsa de plástico o el colector.",
                "3) Vigilar la bolsa cada 30 minutos, y tan pronto como el niño haya orinado, se retirará y enviará al laboratorio. Si la micción no se ha realizado en una hora, se repite la operación colocando una nueva bolsa."
            ],
            image: "https://www.familiaysalud.es/sites/default/files/bolsa_de_orina2.png"
        },
        {
            title: "Recolección de Orina para pacientes imposibilitados",
            description: "En pacientes ingresados con imposibilidad de recoger la muestra por sí mismos, se procederá a realizar sondaje vesical con las medidas asépticas habituales. En pacientes con sonda vesical permanente, la recogida de orina se realizará de la siguiente manera:",
            steps: [
                "1) Limpiar una zona del catéter con una gasa humedecida en alcohol; dejar secar completamente.",
                "2) Pinchar directamente el catéter con aguja y jeringa a través de la zona desinfectada, aspirando 5-10 mL.",
                "3) Pasar la orina a un recipiente estéril. No recoger nunca orina de la bolsa de recolección."
            ],
            image: "https://femora.sergas.es/Probas-diagnosticas/PublishingImages/32/V%C3%ADdeo%20m%C3%B3bil.JPG"
        }
    ];

    const [hoveredInstruction, setHoveredInstruction] = useState(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
        };

        handleResize(); // Verifica en el montaje inicial
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleMouseEvent = (event, instruction) => {
        const rect = event.target.getBoundingClientRect();
        const modalWidth = 300;
        const modalHeight = 200;

        const spaceRight = window.innerWidth - rect.right;
        const spaceLeft = rect.left;
        const spaceBottom = window.innerHeight - rect.bottom;

        let top = rect.top + window.scrollY;
        let left = spaceRight >= modalWidth ? rect.right + window.scrollX : rect.left - modalWidth + window.scrollX;

        if (window.innerWidth <= 730) {
            top = rect.bottom + window.scrollY + 10;
            left = window.innerWidth / 2 - modalWidth / 2;
            setIsMobile(true);
        } else {
            if (spaceBottom < modalHeight) {
                top = rect.bottom + window.scrollY - modalHeight;
            } else {
                top = rect.top + window.scrollY;
            }
            setIsMobile(false);
        }

        setPosition({ top, left });
        setHoveredInstruction(instruction);
    };

    const handleMouseLeave = () => {
        if (!isTouchDevice && !isMobile) {
            setHoveredInstruction(null);
        }
    };

    const handleClickOutside = (event) => {
        if (hoveredInstruction && !event.target.closest(".hover-container") && !event.target.closest(".hover-word")) {
            setHoveredInstruction(null);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [hoveredInstruction]);

    return (
        <ClassContainer>

            {/* Sección de introducción */}
            <Section>
                <FlexContainer>
                    <BackButton onClick={() => navigate(-1)}>
                        <FaArrowLeft />
                    </BackButton>
                    <ClassTitle style={{ color: "green" }}>Instrucciones para el paciente</ClassTitle>
                    <BackButton>
                        <FaArrowRight />
                    </BackButton>
                </FlexContainer>

                <VideoWrapper>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/A6DAupI458Y?si=RaMG0u7k6xOwXMgg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </VideoWrapper>
            </Section>

            {/* Sección de dialogamos */}
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

            {/* Sección de Instrucciones */}
            <Section>
                {instructions.map((instruction, index) => (
                    <InstructionContainer key={index}>
                        <InstructionTitle>{instruction.title}</InstructionTitle>
                        <InstructionDescription>{instruction.description}</InstructionDescription>
                        <InstructionSteps>
                            {instruction.steps.map((step, stepIndex) => (
                                <StepItem key={stepIndex}>{step}</StepItem>
                            ))}
                        </InstructionSteps>
                        <InstructionImage src={instruction.image} alt={`Imagen ${instruction.title}`} />
                    </InstructionContainer>
                ))}
            </Section>
                <h2 style={{textAlign:"center", fontSize:"2vw"}}>Recoleccion de muestra de orina en varones</h2>
            <VideoWrapper style={{marginBottom: "50px"}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/guB2I2XcHho?si=GnzkFDqFU5a-iNrS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>               
             </VideoWrapper>
             <Section style={{display: "flex", justifyContent:"center", flexDirection:"column", alignContent:"center"}}>
             <h2 style={{textAlign:"center", fontSize:"2vw"}}>Examen completo de orina</h2>
                <img src={tabla} alt="" />
             </Section>
            <Section>
                <CierreUno />
                <IdeasFuerza />
            </Section>

            {/* Sección del Cuestionario */}
            <Section>
                <SectionTitle>Cuestionario</SectionTitle>
                <QuestionList>
                    <QuestionItem>
                        <Question>1. ¿Cuál es el procedimiento correcto para la recolección de una muestra de orina?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>2. ¿Qué factores pueden afectar la calidad de una muestra de orina?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>3. ¿Cuánto tiempo puede almacenarse una muestra de orina antes de ser analizada sin comprometer su calidad?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>4. ¿Es necesario seguir alguna preparación especial antes de recolectar una muestra de orina, como ayuno o evitar ciertos medicamentos?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>5. ¿Qué tipo de recipiente debe usarse para la recolección de orina y cómo debe estar esterilizado?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>6. ¿Existen diferencias en la recolección de muestras de orina según el tipo de análisis (por ejemplo, análisis de rutina, cultivo, orina de 24 horas)?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>7. ¿Cómo se debe recolectar una muestra de orina de un paciente pediátrico o de una persona con movilidad reducida?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>8. ¿Qué medidas deben tomarse para evitar la contaminación de la muestra durante el proceso de recolección?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>9. ¿Cómo afecta la hidratación del paciente a los resultados del análisis de orina?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>10. ¿Cuáles son los errores más comunes que pueden ocurrir durante la recolección de orina y cómo se pueden evitar?</Question>
                    </QuestionItem>
                </QuestionList>
            </Section>



            {/* Botones para Quiz y Foro */}
            <Section style={{ display: "flex" }}>
                <QuizButtonWrapper>
                    <Link to="/urineCollectionQuiz">
                        <QuizButton>Tomar el Quiz</QuizButton>
                    </Link>
                </QuizButtonWrapper>
                <QuizButtonWrapper>
                    <Link to="/foro/urineCollection">
                        <QuizButton>Foro</QuizButton>
                    </Link>
                </QuizButtonWrapper>
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