import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"; // Importa useNavigate
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importa la flecha hacia atrás


export const FirstClassPage = () => {
    const navigate = useNavigate(); // Inicializa useNavigate

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    // Ejecutar scrollToTop cuando el componente se monta
    useEffect(() => {
        scrollToTop();
    }, []);
    const definitions = [
        {
            word: "Genética",
            description: "La genética es el campo de la biología que busca comprender cómo se transmiten las características hereditarias.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaGHYJzOUFlw6ZKXNrhqJeGd3h2YF-TGlfg&s"
        },
        {
            word: "ADN",
            description: "El ADN es la molécula que contiene la información genética.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaGHYJzOUFlw6ZKXNrhqJeGd3h2YF-TGlfg&s"
        },
        {
            word: "Venopunción",
            description: "La venopunción es el proceso de acceder a una vena con una aguja, generalmente para extraer sangre o administrar un tratamiento intravenoso.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaGHYJzOUFlw6ZKXNrhqJeGd3h2YF-TGlfg&s"
        },
        {
            word: "Biopsia",
            description: "Una biopsia es un procedimiento médico en el que se extrae una pequeña muestra de tejido para ser examinada en un laboratorio.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaGHYJzOUFlw6ZKXNrhqJeGd3h2YF-TGlfg&s"
        },
        {
            word: "Frotis",
            description: "El frotis es una técnica de recolección de células de una superficie, como la piel o el cuello uterino, para su examen microscópico.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaGHYJzOUFlw6ZKXNrhqJeGd3h2YF-TGlfg&s"
        },
        {
            word: "Punción lumbar",
            description: "La punción lumbar es un procedimiento en el que se inserta una aguja en la columna vertebral para obtener líquido cefalorraquídeo.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaGHYJzOUFlw6ZKXNrhqJeGd3h2YF-TGlfg&s"
        },
        {
            word: "Líquido cefalorraquídeo",
            description: "El líquido cefalorraquídeo es un fluido que circula alrededor del cerebro y la médula espinal, protegiendo y nutriendo el sistema nervioso central.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaGHYJzOUFlw6ZKXNrhqJeGd3h2YF-TGlfg&s"
        },
        {
            word: "Anticoagulante",
            description: "Un anticoagulante es una sustancia que previene la coagulación de la sangre, utilizada comúnmente en tubos de ensayo durante la recolección de muestras de sangre.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaGHYJzOUFlw6ZKXNrhqJeGd3h2YF-TGlfg&s"
        },
        {
            word: "Homogeneizar",
            description: "Homogeneizar significa mezclar o agitar una sustancia para que sus componentes se distribuyan de manera uniforme.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaGHYJzOUFlw6ZKXNrhqJeGd3h2YF-TGlfg&s"
        },
        {
            word: "Hisopado",
            description: "El hisopado es un método de recolección de muestras utilizando un hisopo, comúnmente utilizado para recolectar células de la garganta o la nariz.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaGHYJzOUFlw6ZKXNrhqJeGd3h2YF-TGlfg&s"
        },
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
                        <FaArrowLeft /> {/* Flecha hacia atrás */}
                    </BackButton>
                    <ClassTitle>Muestras Biológicas Humanas</ClassTitle>
                    <BackButton>
                        <FaArrowRight /> {/* Flecha hacia atrás */}
                    </BackButton>
                </FlexContainer>
                <VideoWrapper>
                    <iframe
                        src="https://www.youtube.com/embed/mtfe2vvetSo"
                        title="Extracción de Muestra Sanguínea"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </VideoWrapper>
                <ContentWrapper>
                    <ClassDescription>
                        El <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[0])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[0])} className="hover-word">Genética</HoverWord> es el campo de la biología que busca comprender cómo se transmiten las características hereditarias. El <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[1])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[1])} className="hover-word">ADN</HoverWord> es la molécula que contiene la información genética.
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

            {/* Sección de tipos de muestras biológicas */}
            <Section>
                <SectionTitle>Tipos de muestras biológicas</SectionTitle>
                <VideoWrapper>
                    <iframe
                        src="https://www.youtube.com/embed/mtfe2vvetSo"
                        title="Extracción de Muestra Sanguínea"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </VideoWrapper>
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
                    <iframe
                        src="https://www.youtube.com/embed/mtfe2vvetSo"
                        title="Extracción de Muestra Sanguínea"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </VideoWrapper>
                <ContentWrapper>
                    <InstructionList>
                        <Instruction>
                            1. Colocar al paciente en posición adecuada/cómoda (sentado) con el brazo elegido para la punción en hiperextensión.
                        </Instruction>
                        <Instruction>
                            2. Seleccionar la zona de punción en la que se realizará la punción venosa teniendo en cuenta el calibre y movilidad de la vena.
                        </Instruction>
                        <Instruction>
                            3. Colocar la ligadura a 7 o 8 centímetros por encima de la zona de punción elegida durante un tiempo no superior a un minuto. Pedir al paciente que mantenga el puño cerrado a ser posible.
                        </Instruction>
                        <Instruction>
                            4. Aplicar solución antiséptica (alcohol 70 %) y dejar secar.
                        </Instruction>
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
                    <PracticeImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaGHYJzOUFlw6ZKXNrhqJeGd3h2YF-TGlfg&s" alt="Extracción de sangre" />
                </ContentWrapper>
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
            <Section>
                <QuizButtonWrapper>
                    <Link to="/firstQuizz">
                        <QuizButton>Tomar el Quiz</QuizButton>
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

const PracticeImage = styled.img`
    width: clamp(250px, 40%, 350px);
    height: auto;
    border-radius: 10px;
    margin-top: 20px;
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