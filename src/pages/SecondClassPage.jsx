import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CierreUno } from "../components/CierreUno";
import imagen1 from "../assets/classes/class2/imagen1.PNG"
import imagen2 from "../assets/classes/class2/imagen2.PNG"
import imagen3 from "../assets/classes/class2/imagen3.PNG"
import imagen4 from "../assets/classes/class2/imagen4.PNG"
import imagen5 from "../assets/classes/class2/imagen5.PNG"
import imagen6 from "../assets/classes/class2/imagen6.PNG"
import imagen7 from "../assets/classes/class2/imagen7.PNG"
import imagen8 from "../assets/classes/class2/imagen8.PNG"

export const SecondClassPage = () => {
    const navigate = useNavigate();

    // Preguntas para la sección de "Dialogamos"
    const dialogamosQuestions = [
        "¿Cuáles son los métodos para la recolección sanguínea?",
        "¿Para qué se usa la sangre arterial?",
        "¿Qué nos indican los colores de los tubos?",
        "¿Para qué se usa la punción cutánea?"
    ];

    const definitions = [
        {
            word: "preanalíticos",
            description: "Los factores preanalíticos son todas las variables que influyen en una muestra antes de su análisis en laboratorio.",
            image: "https://www.vegalab.com.mx/cdn/shop/articles/shutterstock_1401235820-1-1706x960.jpg?v=1664899239"
        },
        {
            word: "ayuno",
            description: "El ayuno es la abstención voluntaria de ingerir alimentos y bebidas por un periodo determinado, generalmente recomendado antes de ciertas pruebas médicas.",
            image: "https://images.theconversation.com/files/573720/original/file-20240206-24-zhxxaz.jpg?ixlib=rb-4.1.0&rect=25%2C25%2C5582%2C3673&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
        },
        {
            word: "esfingomanómetros",
            description: "Esfingomanómetros son dispositivos utilizados para medir la presión arterial.",
            image: "https://www.dhmaterialmedico.com/material-medico/thumbs/tensiometro-aneroide-riester-minimus-ii-ng-1-tubo-brazalete-velcro-adultos-1712045091.jpg"
        },
        {
            word: "triglicéridos",
            description: "Los triglicéridos son el tipo más común de grasa en el cuerpo. Se almacenan en las células grasas y son usados como fuente de energía.",
            image: "https://www.webconsultas.com/sites/default/files/styles/wch_image_schema/public/articulos/trigliceridos__0.jpg"
        },
        {
            word: "magnitudes biológicas",
            description: "Las magnitudes biológicas son las cantidades que pueden ser medidas en los organismos vivos, como la glucosa, proteínas, hormonas, etc.",
            image: "https://www.clarin.com/2023/05/14/5aOAHBgW4_720x0__1.jpg"
        },
        {
            word: "etanol",
            description: "El etanol es un tipo de alcohol presente en bebidas alcohólicas y también usado como combustible y solvente.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsHpyaEEb93CtOT0HY-Mq8ArJ_dAFoFw7C7Q&s"
        },
        {
            word: "capilar",
            description: "Capilar se refiere a los vasos sanguíneos pequeños que conectan las arteriolas y las vénulas. En el contexto médico, se utiliza para describir las muestras de sangre obtenidas de la punta del dedo.",
            image: "https://www.valida.es/wp-content/uploads/2021/06/capilares-arteria-vena.jpg"
        },
        {
            word: "dedo anular",
            description: "El dedo anular es el cuarto dedo de la mano, normalmente utilizado para la extracción de muestras de sangre capilar debido a su accesibilidad.",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Annulaire5.png"
        },
        {
            word: "incisión",
            description: "Una incisión es un corte pequeño hecho en la piel, comúnmente con una lanceta, para la recolección de sangre capilar.",
            image: "https://lirp.cdn-website.com/4baf1a71/dms3rep/multi/opt/150622155634_cicatriz_640x360_thinkstock_nocredit-560x315-640w.jpg"
        },
        {
            word: "intravascular",
            description: "El espacio intravascular es el compartimento dentro de los vasos sanguíneos donde se encuentra la sangre circulante.",
            image: "https://static.docsity.com/documents_first_pages/2022/04/12/654e18169a52eddb4e7cada7e68292c7.png"
        },
        {
            word: "intravenosa",
            description: "La infusión intravenosa es la administración de medicamentos o fluidos directamente en una vena.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDuDYtsqfftbO4DWWUe1Nhco6BjNMrTGVQHg&s"
        },
        {
            word: "LDH",
            description: "La lactato deshidrogenasa (LDH) es una enzima presente en casi todos los tejidos del cuerpo y es usada como marcador de daño celular.",
            image: "https://labindustrias.com/wp-content/uploads/2023/12/Lactato-deshidrogenasa-LDH-BR.jpg"
        },
        {
            word: "per se",
            description: "Per se es una locución latina que significa 'por sí mismo', utilizada en medicina para referirse a efectos intrínsecos o inherentes de una condición o tratamiento.",
            image: "https://milapsuslinguae.wordpress.com/wp-content/uploads/2017/03/latin.jpg?w=1200"
        },
        {
            word: "fibrinógeno",
            description: "El fibrinógeno es una proteína producida por el hígado que ayuda en la coagulación de la sangre.",
            image: "https://previews.123rf.com/images/molekuul/molekuul1210/molekuul121000126/16083491-estructura-qu%C3%ADmica-de-fibrin%C3%B3geno-humano-factor-i-de-prote%C3%ADnas-el-fibrin%C3%B3geno-es-una-prote%C3%ADna.jpg"
        },
        {
            word: "cortisol",
            description: "El cortisol es una hormona esteroide producida por las glándulas suprarrenales que ayuda a controlar el estrés y regular el metabolismo.",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Cortisol2.svg"
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
            <Section>
                <FlexContainer>
                    <BackButton onClick={() => navigate(-1)}>
                        <FaArrowLeft />
                    </BackButton>
                    <ClassTitle style={{color: "red"}}>Factores Condicionantes de la Muestra</ClassTitle>
                    <BackButton>
                        <FaArrowRight />
                    </BackButton>
                </FlexContainer>

                <VideoWrapper>
                    <iframe
                        src="https://www.youtube.com/embed/KdT1nJEoFF8"
                        title="Factores Condicionantes de la Muestra"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
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

            {/* Sección de teoría: FACTORES CONDICIONANTES DE LA MUESTRA */}
            <Section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <SectionTitle>Factores Condicionantes de la Muestra</SectionTitle>
                <ClassDescription>
                    Se han descrito factores <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[0])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[0])} className="hover-word">preanalíticos</HoverWord> que pueden afectar de forma decisiva a la calidad de los resultados finales. Algunos de los factores relacionados con el paciente son inmodificables y por tanto no controlables, es decir, no podemos actuar sobre ellos (sexo, edad, raza, embarazo, etc.), sin embargo, la correcta identificación de los mismos puede ayudarnos a evitar interpretaciones erróneas. Existen otro grupo de factores preanalíticos que sí son modificables y sobre los que conviene actuar adoptando medidas de homogeneización que nos van a permitir minimizar la influencia que estos factores ejercen sobre el resultado final. La determinación de ciertas magnitudes requiere una preparación previa por parte del paciente (dieta, medicación, <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[1])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[1])} className="hover-word">ayuno</HoverWord>, selección de día del ciclo menstrual, etc.) y en algunas ocasiones los especímenes son recogidos por el paciente en su propio domicilio (orina, heces, etc.) por lo que es necesario que previamente reciba las instrucciones, verbales y por escrito, necesarias para asegurar una correcta preparación.
                </ClassDescription>
                {hoveredWord && (
                    <HoverContainer style={{ top: position.top, left: position.left }} className="hover-container" onMouseEnter={() => setHoveredWord(hoveredWord)}  // Mantiene el hover
                        onMouseLeave={handleMouseLeave}  // Desaparece cuando se quita el hover
                    >
                        <HoverImage src={hoveredWord.image} alt={hoveredWord.word} />
                        <HoverDescription>{hoveredWord.description}</HoverDescription>
                    </HoverContainer>
                )}
                <ClassDescription>
                    En términos generales: Ante cualquier extracción sanguínea es recomendable que el paciente realice un <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[1])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[1])} className="hover-word">ayuno</HoverWord> previo de 8-12 horas, si ello no está contraindicado. Ante una prueba funcional, es recomendable que el paciente realice reposo continuo en cama y ayuno de 8 horas. Estas pruebas se realizarán bajo control médico, disponiéndose de los medios de control adecuados (<HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[2])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[2])} className="hover-word">esfingomanómetros</HoverWord>, tiras para la determinación de glucosa, etc.), y de los fármacos necesarios para interrupción de la prueba funcional si fuera preciso.
                </ClassDescription>
            </Section>

            {/* Sección de parte práctica: PREPARACIÓN DEL PACIENTE */}

            <Section>
                <SectionTitle>Preparación del Paciente</SectionTitle>
                <ContentWrapper>
                    {/* Imagen del paciente ejercitándose */}
                    <ImageContainer>
                        <img src="https://grupoctagon.com/blog/wp-content/uploads/2020/04/the-modern-barranco-beneficios-trotar-aire-libre1.jpg" alt="Paciente ejercitándose" />
                    </ImageContainer>

                    {/* Lista de factores para la preparación del paciente */}
                    <DescriptionContainer>
                        <OrderedList>
                            <ListItem>
                                <ItemTitle color="#d9232d">Dieta y ayuno</ItemTitle>
                                <ItemDescription>
                                    La dieta y la ingesta de líquidos pueden tener influencia en varias magnitudes bioquímicas y hematológicas. Tras una comida se observan notables variaciones en la concentración de diversos componentes, glucosa, urea, <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[3])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[3])} className="hover-word">triglicéridos</HoverWord>, recuento leucocitario, etc.
                                </ItemDescription>
                            </ListItem>

                            <ListItem>
                                <ItemTitle color="#f25730">Ejercicio físico</ItemTitle>
                                <ItemDescription>
                                    El ejercicio físico reciente también puede alterar notablemente el resultado de algunas <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[4])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[4])} className="hover-word">magnitudes biológicas</HoverWord>. Esto se debe a cambios hormonales, cambios en la distribución de volumen entre distintos compartimientos y a pérdida de volumen por sudoración.
                                </ItemDescription>
                            </ListItem>

                            <ListItem>
                                <ItemTitle color="#005a6d">Medicación</ItemTitle>
                                <ItemDescription>
                                    La toma de determinados medicamentos puede interferir en el resultado de numerosas magnitudes biológicas.
                                </ItemDescription>
                            </ListItem>

                            <ListItem>
                                <ItemTitle color="#7431da">Otras interferencias</ItemTitle>
                                <ItemDescription>
                                    La ingesta aguda o crónica de <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[5])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[5])} className="hover-word">etanol</HoverWord>, el hábito de fumar, y las drogas de adicción también provocan interferencias en las determinaciones de laboratorio, por lo que deberían ser tenidas en cuenta en la interpretación de los resultados.
                                </ItemDescription>
                            </ListItem>
                        </OrderedList>
                    </DescriptionContainer>
                </ContentWrapper>
            </Section>

            {/* Sección de Consideraciones */}

            <Section>
                <SectionTitle>Consideraciones Previas a la Extracción</SectionTitle>
                <ContentWrapper>
                    {/* Imagen relacionada con la extracción */}
                    <ImageContainer>
                        <img src="https://mejorconsalud.as.com/wp-content/uploads/2022/04/examen-sangre-laboratorio-paciente.jpg" alt="Extracción de sangre" />
                    </ImageContainer>

                    {/* Texto con las palabras resaltadas */}
                    <DescriptionContainer>
                        <OrderedList>
                            <ListItem>
                                <ItemTitle color="#4349a0">Postura</ItemTitle>
                                <ItemDescription>
                                    La posición del cuerpo influye en la concentración de los componentes de la sangre. Un cambio desde la posición horizontal a la vertical produce un movimiento de agua desde el compartimento <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[9])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[9])} className="hover-word">intravascular</HoverWord> al intersticial: la consecuencia es una reducción del volumen plasmático, con el consiguiente aumento en la concentración sanguínea de componentes celulares y macromoleculares.
                                </ItemDescription>
                            </ListItem>

                            <ListItem>
                                <ItemTitle color="#9d43a0">Infusiones y Transfusiones</ItemTitle>
                                <ItemDescription>
                                    La contaminación de las muestras de laboratorio por soluciones de infusión <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[10])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[10])} className="hover-word">intravenosa</HoverWord>, es la forma de interferencia preanalítica más común y más relevante en el paciente hospitalizado. La transfusión sanguínea durante o en las horas previas a la extracción de sangre puede producir cambios en la concentración de potasio, en la <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[11])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[11])} className="hover-word">LDH</HoverWord> y otras magnitudes.
                                </ItemDescription>
                            </ListItem>

                            {/* Nueva sección de intervenciones diagnósticas */}
                            <ListItem>
                                <ItemTitle color="#a73f78">Intervenciones diagnósticas y terapéuticas</ItemTitle>
                                <ItemDescription>
                                    Numerosas pruebas diagnósticas e intervenciones terapéuticas pueden producir interferencias en las determinaciones analíticas de un laboratorio. La cirugía, punciones, biopsias, inyecciones intramusculares, endoscopia, utilización de medios de contraste, diálisis, radioterapia, inducen <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[12])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[12])} className="hover-word">per se</HoverWord>, un aumento de los llamados "reactantes de fase aguda" (Proteína C Reactiva, <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[13])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[13])} className="hover-word">fibrinógeno</HoverWord>).
                                </ItemDescription>
                                <ItemDescription>
                                    Además, muchas de estas intervenciones diagnóstico terapéuticas, producen ansiedad y stress emocional en el paciente, y los consiguientes cambios hormonales (aldosterona, catecolaminas, <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[14])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[14])} className="hover-word">cortisol</HoverWord>) pueden ser responsables de alteraciones, muchas veces subestimadas, en los resultados del laboratorio.
                                </ItemDescription>
                            </ListItem>
                        </OrderedList>
                    </DescriptionContainer>
                </ContentWrapper>
            </Section>



            {/* Sección de parte práctica: extracción de muestra sanguínea PUNCIÓN CAPILAR */}
            <Section>
                <SectionTitle>Práctica #01: Extracción de Muestra Sanguínea - Punción Capilar</SectionTitle>
                <VideoWrapper style={{ marginBottom: "30px" }}>
                    <iframe
                        src="https://www.youtube.com/embed/8kAugAMq_8c?t=88"
                        title="Extracción de Muestra Sanguínea - Punción Capilar"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </VideoWrapper>
                <ClassDescription>
                    La punción <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[6])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[6])} className="hover-word">capilar</HoverWord> es un método común utilizado para recolectar pequeñas cantidades de sangre, generalmente de la punta del <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[7])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[7])} className="hover-word">dedo anular</HoverWord>. Este procedimiento es ideal para pacientes pediátricos o adultos que requieren pruebas de control rápido de glucosa o hemoglobina. La técnica consiste en limpiar el área con un antiséptico, hacer una pequeña <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[8])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[8])} className="hover-word">incisión</HoverWord> con una lanceta estéril y recoger la sangre en un tubo capilar.
                </ClassDescription>
            </Section>

            {/* Sección de teoría: Cómo extraer sangre capilar */}
            <Section>
                <SectionTitle>Toma de muestra de sangre capilar</SectionTitle>
                <ContentWrapper>
                    {/* Primer conjunto de imágenes (1 a 4) */}
                    <ImageGrid>
                        <ImageContainer>
                            <img src={imagen1} alt="Paso 1" />
                        </ImageContainer>
                        <ImageContainer>
                            <img src={imagen2} alt="Paso 2" />
                        </ImageContainer>
                        <ImageContainer>
                            <img src={imagen3} alt="Paso 3" />
                        </ImageContainer>
                        <ImageContainer>
                            <img src={imagen4} alt="Paso 4" />
                        </ImageContainer>
                    </ImageGrid>
                    <ClassDescription>
                        <OrderedList>
                            <ListItem>
                                1. Lávese bien las manos y póngase guantes bien ajustados. Asegúrese de que todos los elementos para la toma de muestra de sangre <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[6])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[6])} className="hover-word">capilar</HoverWord> y la realización de la prueba estén disponibles y al alcance de la mano.
                            </ListItem>
                            <ListItem>
                                2. Seleccione el <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[7])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[7])} className="hover-word">dedo anular</HoverWord>, idealmente de la mano no dominante. El paciente no debe usar un anillo en el dedo, ya que puede obstruir la circulación sanguínea.
                            </ListItem>
                            <ListItem>
                                3. Asegúrese de que la mano del paciente esté caliente y relajada y de que el paciente esté cómodamente sentado. La punción debe hacerse ligeramente descentrada desde la porción carnosa, cerca del costado de la yema del dedo.
                            </ListItem>
                            <ListItem>
                                4. Desinfectar y secar completamente el sitio de punción. El alcohol puede diluir la muestra. Secar bien antes de la toma.
                            </ListItem>
                        </OrderedList>
                    </ClassDescription>
                </ContentWrapper>

                {/* Segundo conjunto de imágenes (5 a 8) */}
                <ContentWrapper>
                    <ImageGrid>
                        <ImageContainer>
                            <img src={imagen5} alt="Paso 5" />
                        </ImageContainer>
                        <ImageContainer>
                            <img src={imagen6} alt="Paso 6" />
                        </ImageContainer>
                        <ImageContainer>
                            <img src={imagen7} alt="Paso 7" />
                        </ImageContainer>
                        <ImageContainer>
                            <img src={imagen8} alt="Paso 8" />
                        </ImageContainer>
                    </ImageGrid>
                    <ClassDescription>
                        <OrderedList>
                            <ListItem>
                                5. Suavemente masajee el dedo hacia la punta para aumentar el flujo sanguíneo. Evite pasar el primer nudillo.
                            </ListItem>
                            <ListItem>
                                6. Haga la <HoverWord onMouseEnter={(e) => handleMouseEvent(e, definitions[8])} onMouseLeave={handleMouseLeave} onClick={(e) => handleMouseEvent(e, definitions[8])} className="hover-word">incisión</HoverWord> en el lado de la yema del dedo con la palma hacia arriba, para facilitar el sangrado. Aplique sólo una ligera presión hacia la yema del dedo hasta que aparezca una gota de sangre.
                            </ListItem>
                            <ListItem>
                                7. Limpie la primera gota y asegúrese de que haya un flujo de sangre libre. Deje de agarrar el dedo al limpiar una gota.
                            </ListItem>
                            <ListItem>
                                8. Asegúrese de tener una gota de sangre de suficiente tamaño.
                            </ListItem>
                        </OrderedList>
                    </ClassDescription>
                </ContentWrapper>
            </Section>



            <Section>
                <CierreUno />
            </Section>

            {/* Sección del cuestionario */}
            <Section>
                <SectionTitle>Cuestionario</SectionTitle>
                <QuestionList>
                    <QuestionItem>
                        <Question>1. ¿Qué es la punción capilar y en qué casos se utiliza?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>2. ¿Cuáles son las principales ventajas de la punción capilar frente a otros métodos de extracción de sangre?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>3. ¿Qué áreas del cuerpo son las más comunes para realizar una punción capilar?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>4. ¿Cuáles son los cuidados previos que se deben tener antes de realizar una punción capilar?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>5. ¿Qué cantidad de sangre se puede obtener a través de una punción capilar y para qué pruebas es suficiente?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>6. ¿Cuáles son las complicaciones más comunes que pueden surgir al realizar una punción capilar?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>7. ¿En qué pacientes está contraindicado el uso de la punción capilar?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>8. ¿Cómo influye la temperatura ambiente en la efectividad de una punción capilar?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>9. ¿Cuál es la técnica correcta para realizar una punción capilar segura y efectiva?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>10. ¿Qué cuidados post-procedimiento se deben tener tras una punción capilar?</Question>
                    </QuestionItem>
                </QuestionList>
            </Section>

            {/* Botones para Quiz y Foro */}
            <Section style={{ display: "flex" }}>
                <QuizButtonWrapper>
                    <Link to="/secondQuizz">
                        <QuizButton>Tomar el Quiz</QuizButton>
                    </Link>
                </QuizButtonWrapper>
                <QuizButtonWrapper>
                    <Link to="/foro/2">
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

const ClassDescription = styled.p`
    font-size: clamp(0.9rem, 1.2vw, 1.2rem);
    color: #333;
    line-height: 1.5;
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



const HoverWord = styled.span`
    color: #005a6d;
    cursor: pointer;
    font-weight: bold;
    position: relative;
    white-space: nowrap; /* Evitar saltos de línea innecesarios */

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

const ContentWrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 1164px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        max-width: 500px; /* Limita el ancho máximo de la imagen */
    }

    @media (max-width: 1164px) {
        order: 1; /* La imagen aparecerá después en dispositivos móviles */
    }
`;

const DescriptionContainer = styled.div`
    flex: 1.5;
    display: flex;
    flex-direction: column;

    @media (max-width: 1164px) {
        order: 2; /* El texto de la preparación aparece antes en móviles */
        text-align: center; /* Opcional, si quieres centrar el texto en móviles */
    }
`;

const OrderedList = styled.ol`
    list-style: none;
    padding: 0;
    margin: 0;
    counter-reset: item;
`;

const ListItem = styled.li`
    counter-increment: item;
    /* display: flex;
    flex-direction: column; */
    margin-bottom: 20px;
    position: relative;
`;

const ItemTitle = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.color || "#000"};
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    &::before {
        content: counter(item);
        margin-right: 10px;
        background-color: ${(props) => props.color || "#000"};
        color: white;
        border-radius: 100%;
        padding: 9px;
        font-size: 1rem;
        line-height: 1.5;
    }
`;

const ItemDescription = styled.p`
    font-size: 1rem;
    color: #333;
    line-height: 1.5;
`;


const ImageGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    margin-top: 20px;
`;

