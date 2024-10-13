import styled from "styled-components";
import { useState, useEffect } from "react";
import { IdeasFuerza } from "../components/sections/IdeasFuerza";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CierreUno } from "../components/CierreUno";
import imagen1 from "../assets/classes/class4/imagen1.PNG"
import imagen2 from "../assets/classes/class4/imagen2.PNG"
import imagen3 from "../assets/classes/class4/imagen3.PNG"

export const FifthClassPage = () => {

    const navigate = useNavigate();

    const dialogamosQuestions = [
        "¿Qué factores pueden influir en la calidad de la muestra durante la etapa preanalítica?",
        "¿Qué importancia tiene el tiempo de ayuno en las pruebas de laboratorio, y cómo puede afectar los resultados si no se respeta?",
        "¿Cómo influye el transporte de las muestras al laboratorio en la etapa preanalítica?",
        "¿Qué errores comunes ocurren durante la fase preanalítica y cómo se pueden prevenir?"
    ];

    return (
        <ClassContainer>
            {/* Sección de introducción */}
            <Section>
                <FlexContainer>
                    <BackButton onClick={() => navigate(-1)}>
                        <FaArrowLeft />
                    </BackButton>
                    <ClassTitle style={{ color: "purple" }}>Recepción Y CONTROL DE MUESTRAS.</ClassTitle>
                    <BackButton>
                        <FaArrowRight />
                    </BackButton>
                </FlexContainer>

                <VideoWrapper>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CIzcv5U6eSs?si=sU2eAAUCp6KwQSjh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                     </VideoWrapper>
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
                <SectionTitle>CRITERIOS PARA EL RECHAZO DE UNA PETICIÓN ANALÍTICA POR EL LABORATORIO CLINICO</SectionTitle>
                <ClassDescription style={{ display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "center", gap: "20px" }}>
                    Los mejores sistemas de medición en el laboratorio pueden quedar invalidados si los resultados no pueden llegar a la historia del paciente por una inadecuada identificación del mismo, de las muestras, del médico responsable o del lugar al que deben ser enviados.De igual forma una preparación inadecuada del paciente, errores o mala práctica en la obtención de las muestras, o el incorrecto transporte de las mismas pueden ocasionar interferencias y resultados “erróneos” que deben ser evitados.
                    <img src="https://img.freepik.com/fotos-premium/covid-19-investigacion-medica-diagnostico-trabajadores-salud-concepto-cuarentena-medico-pasante-mascara-medica-guantes-clinica-laboratorio-que-prueba-muestra-orina-muestra-rechazo-gesto-rechazo_1258-57380.jpg?w=360" alt="" />
                </ClassDescription>
            </Section>
            <Section>
                <SectionTitle>Una petición analítica puede ser rechazada por el Laboratorio por uno de los siguientes motivos:</SectionTitle>
                <div style={{display: "flex", gap:"10px", justifyContent:"space-around", flexDirection:"column"}}>
                <ItemList style={{display: "flex", gap:"2px", justifyContent:"space-around", flexWrap:"wrap"}}>
                    <Item>
                        <ItemNumber>1</ItemNumber>
                        <ItemContent>
                            Petición mal rellenada
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber>2</ItemNumber>
                        <ItemContent>
                        Muestra mal identificada
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber>3</ItemNumber>
                        <ItemContent>
                        Muestra incorrecta
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber>4</ItemNumber>
                        <ItemContent>
                        Muestra inexistente 
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber>5</ItemNumber>
                        <ItemContent style={{color: "red"}}>
                        Muestra insuficiente
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber>6</ItemNumber>
                        <ItemContent>
                        Muestra coagulada 
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber>7</ItemNumber>
                        <ItemContent>
                        Muestra deteriorada 
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber>8</ItemNumber>
                        <ItemContent>
                        Muestras mal obtenidas por el paciente
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber>9</ItemNumber>
                        <ItemContent>
                        Relativos al transporte de las muestras
                        </ItemContent>
                    </Item>
                </ItemList>
                <div style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
                    <img style={{height:"500px", width:"40%", borderRadius:"10px"}} src="https://aravet.es/wp-content/uploads/2021/08/RAYA.jpg" alt="" />
                </div>
                </div>
            </Section>

            <Section>
                <SectionTitle>ANALIZANDO A DETALLE</SectionTitle>
                <ClassDescription>
                <h3>0. Petición mal rellenada</h3>
                La solicitud carece de uno o más de los siguientes datos:
                </ClassDescription>
                <ClassDescription>
                - Nombre y apellidos del paciente (o no son legibles) 
                </ClassDescription>
                <ClassDescription>
                - Fecha de nacimiento (o edad)
                </ClassDescription>
                <ClassDescription>
                 - Número de Historia Clínica (u otro tipo de identificación numérica)
                </ClassDescription>
                <ClassDescription>
                 - Determinaciones analíticas que se solicitan
                </ClassDescription>
                <ClassDescription>
                 - Hojas de petición erróneas, sin petición, sin etiquetado de copias, etc. 
                </ClassDescription>
                <InfoContainer>
                    <QuestionList>
                    <Item>
                        <ItemNumber style={{backgroundColor:"#005f66", borderRadius:"100%", padding:"20px", color:"#16b1a4", width:"30px", height:"30px"}}>1</ItemNumber>
                        <ItemContent>
                           <h3 style={{color:"#b80c0c"}}>Muestra incorrecta</h3>
                           <p>- El tubo enviado no es el adecuado para la petición analítica solicitad. </p>
                           <p>- Preparación inad</p>
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber style={{backgroundColor:"#005f66", borderRadius:"100%", padding:"20px", color:"#16b1a4", width:"30px", height:"30px"}}>2</ItemNumber>
                        <ItemContent>
                           <h3 style={{color:"#8a620d"}}>Muestra inexistente</h3>
                           <p>No se adjunta en el envío de petición analítica el tubo o contenedor correspondiente a una o varias de las determinaciones solicitadas.</p>
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber style={{backgroundColor:"#005f66", borderRadius:"100%", padding:"20px", color:"#16b1a4", width:"30px", height:"30px"}}>3</ItemNumber>
                        <ItemContent>
                           <h3 style={{color:"#4700ee"}}>Muestra deteriorada</h3>
                           <p>Son aquellas muestras que se han estropeado durante el transporte (se rompe, se derrama, se descongela, se extravía...) o en su manipulación dentro del laboratorio (rotura en la centrifugación, extravío...). </p>
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber style={{backgroundColor:"#005f66", borderRadius:"100%", padding:"20px", color:"#16b1a4", width:"30px", height:"30px"}}>4</ItemNumber>
                        <ItemContent>
                           <h3 style={{color:"#0d198a"}}>Relativas al transporte de las muestras </h3>
                           <p>- Excesivo intervalo entre la obtención de la muestra y su recepción en el Laboratorio.</p>
                           <p>- Temperatura inadecuada de transporte. </p>
                           <p>- Recipiente roto.</p>
                           <p>- Muestra parcialmente derramada y/o hojas de petición manchadas.</p>
                        </ItemContent>
                    </Item>                        
                    </QuestionList>
                </InfoContainer>
            </Section>
            <ClassDescription>
                <h3>5.  Muestra Coagulada</h3>
                La muestra presenta coágulos visibles en un tubo con anticoagulante (EDTA, Heparina, Citrato). Si una muestra se coagula inmediatamente después de la extracción, se debe, generalmente a una extracción dificultosa o a una mezcla insuficiente de la sangre con el anticoagulante; se debe proceder a una nueva extracción, y desde luego, no  se debe nunca extraer el coágulo y enviar el tubo “sin coágulo” al laboratorio pues ello puede ocasionar resultados analíticos falsos que pueden ocasionar importantes problemas diagnósticos o terapéuticos al paciente.                
                </ClassDescription>
                <InfoContainer>
                    <QuestionList>
                    <Item>
                        <ItemNumber style={{backgroundColor:"#005f66", borderRadius:"100%", padding:"20px", color:"#16b1a4", width:"30px", height:"30px"}}>6</ItemNumber>
                        <ItemContent>
                           <h3 style={{color:"#8a0d0d"}}>Muestra mal identificada</h3>
                           <p>Se considera que una muestra no está bien identificada en las siguientes circunstancias:</p>
                           <p>- La muestra no está identificada (no código de barras o nombre).</p>
                           <p>- El código de barras de la solicitud y de la muestra son distintos</p>
                           <p>- El código de barras no está bien colocado, está despegado, o ha sido manipulado.</p>
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber style={{backgroundColor:"#005f66", borderRadius:"100%", padding:"20px", color:"#16b1a4", width:"30px", height:"30px"}}>7</ItemNumber>
                        <ItemContent>
                           <h3 style={{color:"#af7200"}}>Muestras mal obtenidas por el paciente</h3>
                           <p>Se considera que una muestra no está bien obtenida en las siguientes circunstancias:</p>
                           <p>- No se siguen las instrucciones dadas verbalmente y por escrito(preparación del paciente, obtención de la muestra,…)</p>
                           <p>- Muestra incompleta.</p>
                           <p>- Recipiente inadecuado</p>
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemNumber style={{backgroundColor:"#005f66", borderRadius:"100%", padding:"20px", color:"#16b1a4", width:"30px", height:"30px"}}>8</ItemNumber>
                        <ItemContent>
                           <h3 style={{color:"#0f0d8a"}}>Muestra insuficiente</h3>
                           <p>Debido a dos posibilidades:</p>
                           <p>- La cantidad de muestra extraída no alcanza el nivel adecuado; una exacta proporción de sangre y anticoagulante es fundamental en el proceso analítico; esta es una de las causas de rechazo más frecuentes de la petición de estudio de coagulación. </p>
                           <p> - La cantidad de muestra extraída no es suficiente para realizar todas las pruebas analíticas solicitadas. </p>
                        </ItemContent>
                    </Item>                     
                    </QuestionList>
                </InfoContainer>
                <ClassDescription style={{marginTop:"20px", marginBottom:"20px"}}>
                Cuando se produzca algún criterio de rechazo, en el Laboratorio de Rutina, la petición será devuelta a su origen para que se hagan las oportunas correcciones. En el Laboratorio, se comenzará a procesar la petición, pero no se enviarán los resultados hasta que la petición no esté debidamente completada, especialmente si existe alguna duda sobre la identificación del paciente, de la muestra o del destino al que deben enviarse los resultados.El rechazo por el Laboratorio de una petición analítica obedece a una máxima en la práctica del Laboratorio Clínico: “Es mejor no dar un resultado analítico que dar un resultado erróneo”
                <img style={{marginTop:"20px"}} src="https://media.istockphoto.com/id/606244098/es/v%C3%ADdeo/paciente-recibe-una-soluci%C3%B3n-salina.jpg?s=640x640&k=20&c=3QPAljkJtP6sZ649QW50VKCv0wslZPHbCu5OViiyKlI=" alt="" />
                </ClassDescription>
            <Section>
                <ClassTitle>Vídeo: Recolección de muestra de esputo</ClassTitle>
                <VideoWrapper>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ILp2DNX9-Ss?si=xXgw2LLkObrMkZHT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </VideoWrapper>
            </Section>
            <Section>
                <ClassTitle>PROCEDIMIENTO DE OBTENCION</ClassTitle>
                <ClassDescription>
                1. Indicar al paciente que se ponga de pie.
                </ClassDescription>
                <ClassDescription>
                2. Solicitar que haga un movimiento inspiratorio profundo, llenando de aire los pulmones.                </ClassDescription>
                <ClassDescription>
                3. Indicar al paciente que vacie los pulmones con una sola espiracion, tosiendo al mismo tiempo tan fuerte y profundamente como pueda.                </ClassDescription>
                <ClassDescription>
                4. Solicitar que escupa en el interior del recipiente rotulado. 
                </ClassDescription>
                <ClassDescription>
                5. Tapar el recipiente y en una bolsa plastica llevarla al laboratorio inmediatamente.
                </ClassDescription>
            </Section>
            <Section>
            <ClassTitle>TINCION ZIEHL NEELSENBACILOSCOPIA</ClassTitle>
                <VideoWrapper>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/H3APlERaTtg?si=LkwyUSzyava5WWIV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                </VideoWrapper>
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
                        <Question>1.¿Qué es la tinción de Ziehl-Neelsen y para qué se utiliza?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>2.¿Qué microorganismos se identifican con la tinción de Ziehl-Neelsen?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>3.¿Cuál es el principio detrás de la tinción de Ziehl-Neelsen?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>4.¿Cuáles son los principales reactivos utilizados en esta técnica?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>5.¿Cuál es el procedimiento básico para realizar la tinción de Ziehl-Neelsen?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>6.¿Por qué es necesario calentar la muestra durante el proceso de tinción?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>7.¿Qué color adquieren las bacterias ácido-alcohol resistentes tras la tinción?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>
                        8.¿Qué función cumple el ácido-alcohol en la tinción de Ziehl-Neelsen?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>9.¿Qué importancia tiene el colorante de contraste en esta técnica?</Question>
                    </QuestionItem>
                    <QuestionItem>
                        <Question>10.¿Cuáles son las principales aplicaciones clínicas de la tinción de Ziehl-Neelsen?</Question>
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

const InfoContainer = styled.div`
    background-color: #16b1a4;
    padding: clamp(20px, 3vw, 30px);
    border-radius: 10px;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    margin-top: 20px;
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
    align-items: center;
    margin-bottom: clamp(8px, 1.5vw, 15px);
    gap: 20px;
`;

const ItemNumber = styled.span`
    font-size: clamp(1rem, 1.2vw, 1.5rem);
    color: #005a6d;
    font-weight: bold;
    margin-right: 6px;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const ItemContent = styled.div`
    font-size: clamp(0.9rem, 1vw, 1.2rem);
    color: #333;
    line-height: 1.5;
    display: flex;
    flex-direction: column;

    p{
        color:#04424b;
    }
`;