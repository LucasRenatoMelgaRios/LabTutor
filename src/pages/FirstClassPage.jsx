import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"; // Importa useNavigate
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importa la flecha hacia atrás
import { CierreUno } from "../components/CierreUno";
import imagen1 from "../assets/classes/class1/imagen1.PNG"
import imagen2 from "../assets/classes/class1/imagen2.PNG"
import imagen3 from "../assets/classes/class1/imagen3.PNG"
import imagen4 from "../assets/classes/class1/imagen4.PNG"
import imagen5 from "../assets/classes/class1/imagen5.PNG"
import imagen6 from "../assets/classes/class1/imagen6.PNG"
import imagen7 from "../assets/classes/class1/imagen7.PNG"
import imagen8 from "../assets/classes/class1/imagen8.PNG"
import { IdeasFuerza } from "../components/sections/IdeasFuerza";


export const FirstClassPage = () => {
    const navigate = useNavigate(); // Inicializa useNavigate

    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth",
    //     });
    // };
    // // Ejecutar scrollToTop cuando el componente se monta
    // useEffect(() => {
    //     scrollToTop();
    // }, []);
    const definitions = [
        {
            word: "muestras biológicas",
            description: "Una muestra biológica es una cantidad limitada de sustancia o material proveniente de un organismo.",
            image: "https://example.com/biological-sample-image.jpg"
        },
        {
            word: "órganos completos",
            description: "Los órganos completos son partes del cuerpo con funciones específicas, como el corazón, los pulmones, el hígado, etc.",
            image: "https://example.com/organ-image.jpg"
        },
        {
            word: "tejidos",
            description: "Los tejidos son grupos de células similares que trabajan juntas para realizar una función específica en el cuerpo.",
            image: "https://example.com/tissue-image.jpg"
        },
        {
            word: "células",
            description: "Las células son las unidades estructurales y funcionales más pequeñas de los organismos vivos.",
            image: "https://example.com/cell-image.jpg"
        },
        {
            word: "ADN",
            description: "El ADN es la molécula que contiene la información genética.",
            image: "https://example.com/dna-image.jpg"
        },
        {
            word: "ARN",
            description: "El ARN es una molécula similar al ADN que juega un papel crucial en la síntesis de proteínas.",
            image: "https://example.com/rna-image.jpg"
        },
        {
            word: "proteínas",
            description: "Las proteínas son moléculas esenciales para la estructura, función y regulación de las células del cuerpo.",
            image: "https://example.com/protein-image.jpg"
        },
        {
            word: "fluidos corporales",
            description: "Los fluidos corporales incluyen sangre, orina, saliva, etc., y transportan sustancias dentro del cuerpo.",
            image: "https://example.com/body-fluid-image.jpg"
        },
        {
            word: "humor vítreo",
            description: "El humor vítreo es el líquido gelatinoso que se encuentra en el ojo, entre el cristalino y la retina.",
            image: "https://example.com/vitreous-humor-image.jpg"
        },
        {
            word: "líquido cefalorraquídeo",
            description: "El líquido cefalorraquídeo es un fluido que circula alrededor del cerebro y la médula espinal, protegiendo y nutriendo el sistema nervioso central.",
            image: "https://example.com/cerebrospinal-fluid-image.jpg"
        },
        {
            word: "enfermedades",
            description: "Las enfermedades son alteraciones de la salud que afectan el normal funcionamiento del organismo.",
            image: "https://example.com/disease-image.jpg"
        },
        {
            word: "genotipos particulares",
            description: "El genotipo es la constitución genética de un organismo, representando su combinación específica de alelos.",
            image: "https://example.com/genotype-image.jpg"
        },
        {
            word: "ancestría",
            description: "La ancestría se refiere a los orígenes familiares o genealógicos de un individuo.",
            image: "https://example.com/ancestry-image.jpg"
        }
    ];


    const [hoveredWord, setHoveredWord] = useState(null);
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

    const handleMouseEvent = (event, word) => {
        const rect = event.target.getBoundingClientRect();
        const modalWidth = 300; // Ancho máximo del modal
        const modalHeight = 200; // Altura estimada del modal

        const spaceRight = window.innerWidth - rect.right;
        const spaceLeft = rect.left;
        const spaceBottom = window.innerHeight - rect.bottom;

        let top = rect.top + window.scrollY;
        let left = spaceRight >= modalWidth ? rect.right + window.scrollX : rect.left - modalWidth + window.scrollX;

        if (window.innerWidth <= 730) {
            // Ajuste para pantallas pequeñas
            top = rect.bottom + window.scrollY + 10;
            left = window.innerWidth / 2 - modalWidth / 2;
            setIsMobile(true);
        } else {
            // Ajuste para pantallas grandes
            if (spaceBottom < modalHeight) {
                top = rect.bottom + window.scrollY - modalHeight;
            } else {
                top = rect.top + window.scrollY;
            }
            setIsMobile(false);
        }

        setPosition({ top, left });
        setHoveredWord(word);
    };

    const handleMouseLeave = () => {
        if (!isTouchDevice && !isMobile) {
            setHoveredWord(null);
        }
    };

    const handleClickOutside = (event) => {
        if (hoveredWord && !event.target.closest(".hover-container") && !event.target.closest(".hover-word")) {
            setHoveredWord(null);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [hoveredWord]);


    return (
        <ClassContainer>

            {/* Sección de introducción */}
            {/* Botón de regresar */}

            {/* Sección de introducción */}
            <Section>
                <FlexContainer>
                    <BackButton onClick={() => navigate(-1)}>
                        <FaArrowLeft />
                    </BackButton>
                    <ClassTitle>Muestras Biológicas Humanas</ClassTitle>
                    <BackButton>
                        <FaArrowRight />
                    </BackButton>
                </FlexContainer>

                <ContentWrapper>
                    <ClassDescription>
                        Las <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[0])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[0])} className="hover-word">muestras biológicas</HoverWord> son una cantidad limitada de cualquier sustancia o material proveniente de un organismo; pueden ser <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[1])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[1])} className="hover-word">órganos completos</HoverWord>, <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[2])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[2])} className="hover-word">tejidos</HoverWord>, <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[3])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[3])} className="hover-word">células</HoverWord>, <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[4])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[4])} className="hover-word">ADN</HoverWord>, <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[5])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[5])} className="hover-word">ARN</HoverWord>, <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[6])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[6])} className="hover-word">proteínas</HoverWord> o <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[7])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[7])} className="hover-word">fluidos corporales</HoverWord> como orina, saliva, sangre, sudor, <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[8])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[8])} className="hover-word">humor vítreo</HoverWord>, <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[9])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[9])} className="hover-word">líquido cefalorraquídeo</HoverWord>, etc. Este material es utilizado para representar y estudiar <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[10])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[10])} className="hover-word">enfermedades</HoverWord>, <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[11])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[11])} className="hover-word">genotipos particulares</HoverWord>, pruebas de paternidad o <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[12])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[12])} className="hover-word">ancestría</HoverWord>. La palabra ‘muestra’ implica una menor cantidad tomada de una mayor.
                    </ClassDescription>
                    {hoveredWord && (
                        <HoverContainer style={{ top: position.top, left: position.left }} className="hover-container">
                            <HoverImage src={hoveredWord.image} alt={hoveredWord.word} />
                            <HoverDescription>{hoveredWord.description}</HoverDescription>
                        </HoverContainer>
                    )}
                    <ClassImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOhbN3uugJXdXaPBcO0OAAcDPr0qew-b-kIw&s" alt="Muestras Biológicas Humanas" />
                </ContentWrapper>
            </Section>

            {/* Sección de video y dialogamos */}


            {/* Sección de tipos de muestras biológicas */}
            <Section>
                <SectionTitle>Tipos de muestras biológicas</SectionTitle>
                <VideoWrapper>
                    <iframe
                        src="https://www.youtube.com/embed/mtfe2vvetSo"
                        title="Extracción de Muestra Sanguínea"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </VideoWrapper>
                <FlexSection>

                    <DialogamosContainer>
                        <DialogamosTitle>Dialogamos</DialogamosTitle>
                        <QuestionList>
                            <QuestionItem>
                                <Question>* ¿Qué son las muestras biológicas?</Question>
                            </QuestionItem>
                            <QuestionItem>
                                <Question>* ¿Cuáles son los tipos de muestras biológicas?</Question>
                            </QuestionItem>
                            <QuestionItem>
                                <Question>* ¿Por qué se necesitan las muestras biológicas?</Question>
                            </QuestionItem>
                            <QuestionItem>
                                <Question>* ¿Qué nos indican los colores de los tubos?</Question>
                            </QuestionItem>
                        </QuestionList>
                    </DialogamosContainer>
                </FlexSection>
                <ContentWrapper>
                    <ClassDescription>
                        La recolección de muestras biológicas se realiza mediante técnicas específicas, como la <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[2])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[2])} className="hover-word">venopunción</HoverWord>, la <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[3])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[3])} className="hover-word">biopsia</HoverWord>, el <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[4])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[4])} className="hover-word">frotis</HoverWord>, el <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[9])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[9])} className="hover-word">hisopado</HoverWord> o la <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[5])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[5])} className="hover-word">punción lumbar</HoverWord>, entre otras. Estas técnicas se llevan a cabo siguiendo unos protocolos adecuados para garantizar la integridad de la muestra y obtener resultados precisos y confiables.
                    </ClassDescription>
                </ContentWrapper>

                <ItemList>
                    <Item>
                        <ItemNumber>1</ItemNumber>
                        <ItemContent>
                            <strong>Sangre:</strong> La sangre es una de las muestras biológicas más comunes y se obtiene a través de una venopunción. Contiene información valiosa sobre el sistema inmunológico, la composición sanguínea, los niveles de nutrientes y hormonas, así como la presencia de enfermedades y condiciones médicas.
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber>2</ItemNumber>
                        <ItemContent>
                            <strong>Orina:</strong> La orina es otra muestra biológica ampliamente utilizada. Se recolecta mediante la micción y puede proporcionar información sobre el funcionamiento renal, los niveles de sustancias químicas, la presencia de drogas, toxinas o enfermedades metabólicas.
                        </ItemContent>
                    </Item>

                    <Item>
                        <ItemNumber>3</ItemNumber>
                        <ItemContent>
                            <strong>Saliva:</strong> La saliva contiene una variedad de biomoléculas, como ADN, ARN, proteínas y hormonas. Es una muestra no invasiva y fácil de recolectar, lo que la hace ideal para pruebas de paternidad, estudios genéticos, análisis de enfermedades orales y diagnóstico de infecciones.
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber>4</ItemNumber>
                        <ItemContent>
                            <strong>Células:</strong> Las células pueden obtenerse de diferentes formas, como hisopado bucal, raspado de piel o muestras de líquidos corporales. Estas muestras permiten estudiar características celulares, realizar cultivos celulares, analizar marcadores de superficie y evaluar la expresión de genes.
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber>5</ItemNumber>
                        <ItemContent>
                            <strong>Tejido:</strong> El tejido, obtenido a través de biopsias o cirugías, es crucial para estudios histológicos y moleculares detallados. Permite analizar la estructura celular, identificar tumores, evaluar la presencia de células anormales y estudiar los cambios genéticos y epigenéticos asociados a enfermedades.
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber>6</ItemNumber>
                        <ItemContent>
                            <strong>Líquido cefalorraquídeo (LCR):</strong> El LCR se encuentra en el espacio subaracnoideo del cerebro y la médula espinal. Se obtiene mediante una punción lumbar y se utiliza para diagnosticar enfermedades neurológicas, detectar infecciones y medir la presión intracraneal.
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber>7</ItemNumber>
                        <ItemContent>
                            <strong>ADN y ARN:</strong> El ADN y el ARN son moléculas esenciales en la genética. El ADN se extrae de muestras como sangre, tejido o saliva, mientras que el ARN se obtiene de tejidos o células. Estas moléculas permiten el estudio de la genética, la identificación de mutaciones y la expresión génica.
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber>8</ItemNumber>
                        <ItemContent>
                            <strong>Líquido sinovial:</strong> El líquido sinovial se encuentra en las articulaciones y se obtiene mediante una punción articular. Proporciona información sobre la inflamación, la presencia de cristales o infecciones en las articulaciones, y es útil para el diagnóstico de enfermedades reumáticas.
                        </ItemContent>
                    </Item>
                </ItemList>
            </Section>

            {/* Sección práctica: Extracción de muestra sanguínea */}
            <Section>
                <SectionTitle>Práctica #01: Extracción de Muestra Sanguínea</SectionTitle>
                <VideoWrapper>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kkGeAMKSDnk?si=CsYdlFJR6-o6h9o7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </VideoWrapper>
                <ContentWrapper>
                    <InstructionList>
                    <Instruction>1. Colocar al paciente en posición adecuada/cómoda (sentado) con el brazo elegido para la punción en hiperextensión.</Instruction>
                        <IntructionTextContainer>
                        <img src={imagen1} alt="" />
                        <img src={imagen2} alt="" />
                        </IntructionTextContainer>

                        <Instruction>
                            2. Seleccionar la zona de punción en la que se realizará la punción venosa teniendo en cuenta el calibre y movilidad de la vena.
                        </Instruction>
                        <IntructionTextContainer>
                        <img src={imagen3} alt="" />
                        <img src={imagen4} alt="" />

                        </IntructionTextContainer>
                        <Instruction>
                            3. Colocar la ligadura a 7 o 8 centímetros por encima de la zona de punción elegida durante un tiempo no superior a un minuto. Pedir al paciente que mantenga el puño cerrado a ser posible.
                        </Instruction>
                        <IntructionTextContainer>
                        <img src={imagen5} alt="" />
                        <img src={imagen6} alt="" />

                        </IntructionTextContainer>
                        <Instruction>
                            4. Aplicar solución antiséptica (alcohol 70 %) y dejar secar.
                        </Instruction>
                        <IntructionTextContainer>
                        <img src={imagen7} alt="" />
                        <img src={imagen8} alt="" />

                        </IntructionTextContainer>
                        <Instruction>
                            5. Puncionar la vena con ángulo de 20º el 30º.
                        </Instruction>
                    </InstructionList>
                </ContentWrapper>
                <ContentWrapper>
                    <InstructionList>
                        <Instruction>
                            6. Llenar el tubo hasta la marca indicativa.
                        </Instruction>
                        <Instruction>
                            7. Homogeneizar el tubo con <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[7])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[7])} className="hover-word">anticoagulante</HoverWord> (mezclar suavemente invirtiendo el tubo) inmediatamente después de la extracción para evitar alteraciones en la muestra sanguínea.
                        </Instruction>
                        <Instruction>
                            8. Pedir al paciente que abra el puño.
                        </Instruction>
                        <Instruction>
                            9. Retirar la ligadura.
                        </Instruction>
                        <Instruction>
                            10. Presionar en la zona de punción con algodón durante varios segundos y sujetar con esparadrapo, indicarle al paciente que presione la zona durante unos 3 a 5 minutos manteniendo el brazo extendido.
                        </Instruction>
                    </InstructionList>
                </ContentWrapper>
            </Section>

            <Section>
                <CierreUno/>
                <IdeasFuerza/>
            </Section>

            {/* Sección del cuestionario */}
            <Section>
                <SectionTitle>Cuestionario del informe grupal</SectionTitle>
                <QuestionList>
                    <QuestionItem>
                        <Question>1. ¿Qué es una muestra biológica humana?</Question>

                    </QuestionItem>
                    <QuestionItem>
                        <Question>2. ¿Para qué se utilizan las muestras biológicas humanas en la medicina?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>3. ¿Qué tipos de muestras biológicas humanas existen?</Question>

                    </QuestionItem>
                    <QuestionItem>
                        <Question>4. ¿Cómo se recolecta una muestra biológica humana?</Question>

                    </QuestionItem>
                    <QuestionItem>

                    </QuestionItem>
                    <QuestionItem>
                        <Question>6. ¿Qué precauciones deben tomarse al manipular muestras biológicas humanas?</Question>

                    </QuestionItem>
                    <QuestionItem>
                        <Question>7. ¿Cuánto tiempo se pueden conservar las muestras biológicas humanas?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>8. ¿Por qué es importante almacenar correctamente las muestras biológicas humanas?</Question>

                    </QuestionItem>
                    <QuestionItem>
                        <Question>9. ¿Cómo se identifica una muestra biológica humana para evitar errores?</Question>

                    </QuestionItem>
                    <QuestionItem>
                        <Question>10. ¿Qué información se debe registrar al recolectar una muestra biológica humana?</Question>

                    </QuestionItem>
                </QuestionList>
            </Section>
            {/* Sección del botón para el quiz */}
            <Section style={{display: "flex"}}>
                <QuizButtonWrapper>
                    <Link to="/firstQuizz">
                        <QuizButton disabled>Tomar el Quiz</QuizButton>
                    </Link>
                </QuizButtonWrapper>
                <QuizButtonWrapper>
                    <Link to="/foro/1">
                        <QuizButton>Foro</QuizButton>
                    </Link>
                </QuizButtonWrapper>
            </Section>
        </ClassContainer>

    );
};

// Estilos
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

const ClassDescription = styled.p`
    font-size: clamp(0.9rem, 1.2vw, 1.2rem);
    color: #333;
    line-height: 1.5;
`;

const ClassImage = styled.img`
    width: 100%;
    background-color: #8a0a8a;
    height: auto;
    border-radius: 10px;
`;

const Section = styled.div`
    margin-bottom: clamp(15px, 4vw, 30px);
`;

const SectionTitle = styled.h2`
    font-size: clamp(1.2rem, 1.8vw, 2rem);
    color: #005a6d;
    margin-bottom: 15px;
    text-align: left;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: clamp(8px, 1.5vw, 15px);
    margin-top: 20px;

    img {
        margin-top: 15px;
        border-radius: 10px;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
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

const InstructionList = styled.ol`
    list-style: decimal;
    font-size: clamp(0.9rem, 1.2vw, 1.2rem);
    color: #333;
    line-height: 1.5;
    padding-left: 20px;
`;

const Instruction = styled.li`
    margin-bottom: clamp(8px, 1.5vw, 15px);
    list-style: none;
`;

const IntructionTextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px;
    max-width: 100%;

    img{
        width: 50%;
    }
`;

const VideoWrapper = styled.div`
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
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

const HoverWord = styled.span`
    color: #005a6d;
    cursor: pointer;
    font-weight: bold;
    position: relative;
    &:hover {
        text-decoration: underline;
    }
`;

const HoverContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    padding: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    z-index: 1000;
    max-width: 300px;
    width: 90vw;
    transition: all 0.2s ease;

    &.mobile {
        top: unset;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        max-width: clamp(250px, 90%, 300px);
    }
`;
const HoverImage = styled.img`
    width: 100%;
    max-width: 150px;
    height: auto;
    margin-bottom: 10px;
`;

const HoverDescription = styled.p`
    font-size: clamp(0.9rem, 1rem, 1.2rem);
    color: #333;
    text-align: center;
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

const FlexContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;


const FlexSection = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; /* Permite que los elementos se ajusten si no hay suficiente espacio */

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
    }
`;

const DialogamosContainer = styled.div`
    background-color: #f0f8ff;
    padding: clamp(20px, 3vw, 30px);
    border-radius: 10px;
    width: 100%; /* Para que ocupe el 100% del ancho disponible */
    max-width: 500px; /* Ajusta según sea necesario */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 0 auto; /* Centra el contenedor dentro de su sección */
`;


const DialogamosTitle = styled.h2`
    font-size: clamp(1.5rem, 2vw, 2.2rem);
    color: #005a6d;
    margin-bottom: 20px;
    text-align: center;
`;


