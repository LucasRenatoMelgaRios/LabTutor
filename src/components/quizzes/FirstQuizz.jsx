import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid'; // Para generar IDs únicos
import { PostGradeService } from "../../services/PostGradeService";
import { PostStudentDataService } from "../../services/PostStudentDataService";


export const FirstQuizz = () => {
    const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm();
    const navigate = useNavigate();
    const quizDuration = 15 * 60; // 15 minutes in seconds
    const [timeLeft, setTimeLeft] = useState(quizDuration); // Default 15 minutes
    const [score, setScore] = useState(null);
    const [isRetakeAllowed, setIsRetakeAllowed] = useState(false);
    const [studentId, setStudentId] = useState(null); // Para almacenar el ID del estudiante
    const [droppedItems, setDroppedItems] = useState({
        blank1: '',
        blank2: '',
        blank3: '',
        blank4: '',
        blank5: '',
        blank6: '',
    });
    const [selectedItem, setSelectedItem] = useState(null);

    // Ejecutar scrollToTop cuando el componente se monta
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    useEffect(() => {
        const quizStartTime = localStorage.getItem('quizStartTime');
        if (quizStartTime) {
            const elapsedTime = Math.floor((Date.now() - parseInt(quizStartTime, 10)) / 1000);
            setTimeLeft(Math.max(quizDuration - elapsedTime, 0));
        } else {
            localStorage.setItem('quizStartTime', Date.now());
        }
    }, []);

    useEffect(() => {
        if (timeLeft > 0 && !isRetakeAllowed) {
            const timerId = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        } else if (timeLeft === 0 && !isRetakeAllowed) {
            handleSubmit(onSubmit)();
        }
    }, [timeLeft, isRetakeAllowed]);

    const onSelectItem = (item) => {
        setSelectedItem(item);
    };

    const onBlankSpaceClick = (target) => {
        if (selectedItem) {
            const newDroppedItems = { ...droppedItems };
            newDroppedItems[target] = selectedItem;
            setDroppedItems(newDroppedItems);
            setSelectedItem(null); // Clear selection after "dropping"
        }
    };

    const onSubmit = async (data) => {
        let calculatedScore = 0;

        // Pregunta 1: Relacionar (2 puntos de 7)
        const relationPoints = 2 / 8; // Cada respuesta correcta en esta sección vale 0.25 puntos
        if (data.question1_1 === "Contiene información hormonal") calculatedScore += relationPoints;
        if (data.question1_2 === "Contiene información renal") calculatedScore += relationPoints;
        if (data.question1_3 === "Muestra ideal para prueba de ADN") calculatedScore += relationPoints;
        if (data.question1_4 === "Se obtiene por hisopado bucal") calculatedScore += relationPoints;
        if (data.question1_5 === "Se obtiene por biopsia") calculatedScore += relationPoints;
        if (data.question1_6 === "Se obtiene mediante punción lumbar") calculatedScore += relationPoints;
        if (data.question1_7 === "Permite el estudio de la Genética") calculatedScore += relationPoints;
        if (data.question1_8 === "Se obtiene por puncion articular") calculatedScore += relationPoints;

        // Pregunta 2: Marcar V o F (2 puntos de 7)
        const trueFalsePoints = 2 / 8; // Cada respuesta correcta en esta sección vale 0.25 puntos
        if (data.question2_1 === "V") calculatedScore += trueFalsePoints;
        if (data.question2_2 === "V") calculatedScore += trueFalsePoints;
        if (data.question2_3 === "V") calculatedScore += trueFalsePoints;
        if (data.question2_4 === "F") calculatedScore += trueFalsePoints;
        if (data.question2_5 === "V") calculatedScore += trueFalsePoints;
        if (data.question2_6 === "V") calculatedScore += trueFalsePoints;
        if (data.question2_7 === "V") calculatedScore += trueFalsePoints;
        if (data.question2_8 === "V") calculatedScore += trueFalsePoints;

        // Pregunta 3: Arrastrar al espacio en blanco (3 puntos de 7)
        const dragDropPoints = 3 / 6; // Cada respuesta correcta en esta sección vale 0.5 puntos
        if (droppedItems.blank1 === "biológico") calculatedScore += dragDropPoints;
        if (droppedItems.blank2 === "genética") calculatedScore += dragDropPoints;
        if (droppedItems.blank3 === "enfermedades") calculatedScore += dragDropPoints;
        if (droppedItems.blank4 === "biopsia") calculatedScore += dragDropPoints;
        if (droppedItems.blank5 === "protocolos") calculatedScore += dragDropPoints;
        if (droppedItems.blank6 === "confiables") calculatedScore += dragDropPoints;

        setScore(calculatedScore);

        // Generar un ID para el estudiante si no existe
        const generatedStudentId = studentId || uuidv4();
        if (!studentId) {
            setStudentId(generatedStudentId);

            // Crear el estudiante en el sistema con el ID generado
            await PostStudentDataService({
                idEstudiante: generatedStudentId, // Usar el mismo ID generado para idEstudiante
                nombre: data.studentName
            });
        }

        // Crear la nota para el quiz actual utilizando el idEstudiante
        await PostGradeService({
            estudianteId: generatedStudentId, // Usar el idEstudiante generado manualmente
            quizId: "1", // Cambia este valor según el quiz actual
            nota: calculatedScore
        });

        setIsRetakeAllowed(true);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const handleRetakeQuiz = () => {
        clearErrors();
        reset();
        setTimeLeft(quizDuration);
        setScore(null);
        setIsRetakeAllowed(false);
        localStorage.setItem('quizStartTime', Date.now());
    };
    
    const closeModal = () => {
        setScore(null);
    };

    return (
        <QuizContainer>
            <BackButton onClick={() => navigate(-1)}>Regresar</BackButton>
            <QuizTitle>Quiz: Laboratorio de Biología</QuizTitle>
            <StudentName>
                <label>Nombre del estudiante:</label>
                <input type="text" {...register("studentName", {
                    required: !isRetakeAllowed,
                    validate: value => value.trim().split(/\s+/).length >= 3
                })} disabled={isRetakeAllowed} />
                {errors.studentName && <ErrorMessage>Debe ingresar al menos tres palabras (nombre y dos apellidos).</ErrorMessage>}
            </StudentName>
            {!isRetakeAllowed && <Timer>Tiempo restante: {formatTime(timeLeft)}</Timer>}
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <Question>
                    <p>1. Relacionar: (2 puntos)</p>
                    <QuestionContent>
                        <SelectContainer>
                            <label>Sangre</label>
                            <select {...register("question1_1", { required: !isRetakeAllowed })} disabled={isRetakeAllowed}>
                                <option value="">Seleccione...</option>
                                <option value="Contiene información hormonal">Contiene información hormonal</option>
                                <option value="Contiene información renal">Contiene información renal</option>
                                <option value="Muestra ideal para prueba de ADN">Muestra ideal para prueba de ADN</option>
                                <option value="Se obtiene por hisopado bucal">Se obtiene por hisopado bucal</option>
                                <option value="Se obtiene mediante punción lumbar">Se obtiene mediante punción lumbar</option>
                                <option value="Permite el estudio de la Genética">Permite el estudio de la Genética</option>
                                <option value="Se obtiene por puncion articular">Se obtiene por puncion articular</option>
                                <option value="Se obtiene por biopsia">Se obtiene por biopsia</option>
                            </select>
                            {errors.question1_1 && <ErrorMessage>Esta pregunta es obligatoria.</ErrorMessage>}
                        </SelectContainer>

                        <SelectContainer>
                            <label>Orina</label>
                            <select {...register("question1_2", { required: !isRetakeAllowed })} disabled={isRetakeAllowed}>
                                <option value="">Seleccione...</option>
                                <option value="Contiene información hormonal">Contiene información hormonal</option>
                                <option value="Contiene información renal">Contiene información renal</option>
                                <option value="Muestra ideal para prueba de ADN">Muestra ideal para prueba de ADN</option>
                                <option value="Se obtiene por hisopado bucal">Se obtiene por hisopado bucal</option>
                                <option value="Se obtiene mediante punción lumbar">Se obtiene mediante punción lumbar</option>
                                <option value="Permite el estudio de la Genética">Permite el estudio de la Genética</option>
                                <option value="Se obtiene por puncion articular">Se obtiene por puncion articular</option>
                                <option value="Se obtiene por biopsia">Se obtiene por biopsia</option>
                            </select>
                            {errors.question1_2 && <ErrorMessage>Esta pregunta es obligatoria.</ErrorMessage>}
                        </SelectContainer>

                        <SelectContainer>
                            <label>Saliva</label>
                            <select {...register("question1_3", { required: !isRetakeAllowed })} disabled={isRetakeAllowed}>
                                <option value="">Seleccione...</option>
                                <option value="Contiene información hormonal">Contiene información hormonal</option>
                                <option value="Contiene información renal">Contiene información renal</option>
                                <option value="Muestra ideal para prueba de ADN">Muestra ideal para prueba de ADN</option>
                                <option value="Se obtiene por hisopado bucal">Se obtiene por hisopado bucal</option>
                                <option value="Se obtiene mediante punción lumbar">Se obtiene mediante punción lumbar</option>
                                <option value="Permite el estudio de la Genética">Permite el estudio de la Genética</option>
                                <option value="Se obtiene por puncion articular">Se obtiene por puncion articular</option>
                                <option value="Se obtiene por biopsia">Se obtiene por biopsia</option>
                            </select>
                            {errors.question1_3 && <ErrorMessage>Esta pregunta es obligatoria.</ErrorMessage>}
                        </SelectContainer>

                        <SelectContainer>
                            <label>Células</label>
                            <select {...register("question1_4", { required: !isRetakeAllowed })} disabled={isRetakeAllowed}>
                                <option value="">Seleccione...</option>
                                <option value="Contiene información hormonal">Contiene información hormonal</option>
                                <option value="Contiene información renal">Contiene información renal</option>
                                <option value="Muestra ideal para prueba de ADN">Muestra ideal para prueba de ADN</option>
                                <option value="Se obtiene por hisopado bucal">Se obtiene por hisopado bucal</option>
                                <option value="Se obtiene mediante punción lumbar">Se obtiene mediante punción lumbar</option>
                                <option value="Permite el estudio de la Genética">Permite el estudio de la Genética</option>
                                <option value="Se obtiene por puncion articular">Se obtiene por puncion articular</option>
                                <option value="Se obtiene por biopsia">Se obtiene por biopsia</option>
                            </select>
                            {errors.question1_4 && <ErrorMessage>Esta pregunta es obligatoria.</ErrorMessage>}
                        </SelectContainer>

                        <SelectContainer>
                            <label>Tejido</label>
                            <select {...register("question1_5", { required: !isRetakeAllowed })} disabled={isRetakeAllowed}>
                                <option value="">Seleccione...</option>
                                <option value="Contiene información hormonal">Contiene información hormonal</option>
                                <option value="Contiene información renal">Contiene información renal</option>
                                <option value="Muestra ideal para prueba de ADN">Muestra ideal para prueba de ADN</option>
                                <option value="Se obtiene por hisopado bucal">Se obtiene por hisopado bucal</option>
                                <option value="Se obtiene mediante punción lumbar">Se obtiene mediante punción lumbar</option>
                                <option value="Permite el estudio de la Genética">Permite el estudio de la Genética</option>
                                <option value="Se obtiene por puncion articular">Se obtiene por puncion articular</option>
                                <option value="Se obtiene por biopsia">Se obtiene por biopsia</option>
                            </select>
                            {errors.question1_5 && <ErrorMessage>Esta pregunta es obligatoria.</ErrorMessage>}
                        </SelectContainer>

                        <SelectContainer>
                            <label>LCR (Líquido cefalorraquídeo)</label>
                            <select {...register("question1_6", { required: !isRetakeAllowed })} disabled={isRetakeAllowed}>
                                <option value="">Seleccione...</option>
                                <option value="Contiene información hormonal">Contiene información hormonal</option>
                                <option value="Contiene información renal">Contiene información renal</option>
                                <option value="Muestra ideal para prueba de ADN">Muestra ideal para prueba de ADN</option>
                                <option value="Se obtiene por hisopado bucal">Se obtiene por hisopado bucal</option>
                                <option value="Se obtiene mediante punción lumbar">Se obtiene mediante punción lumbar</option>
                                <option value="Permite el estudio de la Genética">Permite el estudio de la Genética</option>
                                <option value="Se obtiene por puncion articular">Se obtiene por puncion articular</option>
                                <option value="Se obtiene por biopsia">Se obtiene por biopsia</option>
                            </select>
                            {errors.question1_6 && <ErrorMessage>Esta pregunta es obligatoria.</ErrorMessage>}
                        </SelectContainer>

                        <SelectContainer>
                            <label>ADN</label>
                            <select {...register("question1_7", { required: !isRetakeAllowed })} disabled={isRetakeAllowed}>
                                <option value="">Seleccione...</option>
                                <option value="Contiene información hormonal">Contiene información hormonal</option>
                                <option value="Contiene información renal">Contiene información renal</option>
                                <option value="Muestra ideal para prueba de ADN">Muestra ideal para prueba de ADN</option>
                                <option value="Se obtiene por hisopado bucal">Se obtiene por hisopado bucal</option>
                                <option value="Se obtiene mediante punción lumbar">Se obtiene mediante punción lumbar</option>
                                <option value="Permite el estudio de la Genética">Permite el estudio de la Genética</option>
                                <option value="Se obtiene por puncion articular">Se obtiene por puncion articular</option>
                                <option value="Se obtiene por biopsia">Se obtiene por biopsia</option>
                            </select>
                            {errors.question1_7 && <ErrorMessage>Esta pregunta es obligatoria.</ErrorMessage>}
                        </SelectContainer>

                        <SelectContainer>
                            <label>Líquido sinovial</label>
                            <select {...register("question1_8", { required: !isRetakeAllowed })} disabled={isRetakeAllowed}>
                                <option value="">Seleccione...</option>
                                <option value="Contiene información hormonal">Contiene información hormonal</option>
                                <option value="Contiene información renal">Contiene información renal</option>
                                <option value="Muestra ideal para prueba de ADN">Muestra ideal para prueba de ADN</option>
                                <option value="Se obtiene por hisopado bucal">Se obtiene por hisopado bucal</option>
                                <option value="Se obtiene mediante punción lumbar">Se obtiene mediante punción lumbar</option>
                                <option value="Permite el estudio de la Genética">Permite el estudio de la Genética</option>
                                <option value="Se obtiene por puncion articular">Se obtiene por puncion articular</option>
                                <option value="Se obtiene por biopsia">Se obtiene por biopsia</option>
                            </select>
                            {errors.question1_8 && <ErrorMessage>Esta pregunta es obligatoria.</ErrorMessage>}
                        </SelectContainer>
                    </QuestionContent>
                </Question>

                <Question>
                    <p>2. Marque verdadero ( V ) o falso ( F ): (2 puntos)</p>
                    <QuestionContent>
                        <SelectContainer>
                            <label>a) El sudor es una muestra biológica humana.</label>
                            <label>
                                <input type="radio" value="V" {...register("question2_1", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Verdadero
                            </label>
                            <label>
                                <input type="radio" value="F" {...register("question2_1", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Falso
                            </label>
                        </SelectContainer>

                        <SelectContainer>
                            <label>b) Una muestra biológica se usa para diagnosticar enfermedades.</label>
                            <label>
                                <input type="radio" value="V" {...register("question2_2", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Verdadero
                            </label>
                            <label>
                                <input type="radio" value="F" {...register("question2_2", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Falso
                            </label>
                        </SelectContainer>

                        <SelectContainer>
                            <label>c) El líquido pleural es una muestra obtenida por un método invasivo.</label>
                            <label>
                                <input type="radio" value="V" {...register("question2_3", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Verdadero
                            </label>
                            <label>
                                <input type="radio" value="F" {...register("question2_3", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Falso
                            </label>
                        </SelectContainer>

                        <SelectContainer>
                            <label>d) El líquido pericárdico es una muestra obtenida por un método no invasivo.</label>
                            <label>
                                <input type="radio" value="V" {...register("question2_4", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Verdadero
                            </label>
                            <label>
                                <input type="radio" value="F" {...register("question2_4", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Falso
                            </label>
                        </SelectContainer>

                        <SelectContainer>
                            <label>e) La orina se puede usar para el diagnóstico de la TBC.</label>
                            <label>
                                <input type="radio" value="V" {...register("question2_5", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Verdadero
                            </label>
                            <label>
                                <input type="radio" value="F" {...register("question2_5", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Falso
                            </label>
                        </SelectContainer>

                        <SelectContainer>
                            <label>f) Algunas muestras biológicas son tomadas por los médicos.</label>
                            <label>
                                <input type="radio" value="V" {...register("question2_6", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Verdadero
                            </label>
                            <label>
                                <input type="radio" value="F" {...register("question2_6", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Falso
                            </label>
                        </SelectContainer>

                        <SelectContainer>
                            <label>g) El suero y el plasma son muestras diferentes.</label>
                            <label>
                                <input type="radio" value="V" {...register("question2_7", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Verdadero
                            </label>
                            <label>
                                <input type="radio" value="F" {...register("question2_7", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Falso
                            </label>
                        </SelectContainer>

                        <SelectContainer>
                            <label>h) La orina se usa para medir la evolución de la diabetes.</label>
                            <label>
                                <input type="radio" value="V" {...register("question2_8", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Verdadero
                            </label>
                            <label>
                                <input type="radio" value="F" {...register("question2_8", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Falso
                            </label>
                        </SelectContainer>
                    </QuestionContent>
                </Question>

                <Question>
                    <p>3. Completar al espacio en blanco: (3 puntos) <span style={{fontSize:"14px"}}>*selecciona tu respuesta y luego el espacio en blanco*</span> </p>
                    <QuestionContent>
                        <TextBlock>
                            Las muestras biológicas son materiales de origen 
                            <BlankSpace 
                                onClick={() => onBlankSpaceClick('blank1')}
                            >
                                {droppedItems.blank1 || '____________'}
                            </BlankSpace> 
                            que se recolectan y utilizan para realizar análisis, investigaciones y diagnósticos en diversos campos científicos y médicos. Estas muestras contienen información 
                            <BlankSpace 
                                onClick={() => onBlankSpaceClick('blank2')}
                            >
                                {droppedItems.blank2 || '____________'}
                            </BlankSpace>, 
                            biomoléculas o células que permiten obtener datos valiosos sobre la salud, 
                            <BlankSpace 
                                onClick={() => onBlankSpaceClick('blank3')}
                            >
                                {droppedItems.blank3 || '____________'}
                            </BlankSpace>, procesos biológicos y diversos aspectos de la vida.
                            La recolección de muestras biológicas se realiza mediante técnicas específicas, como la extracción de sangre, la 
                            <BlankSpace 
                                onClick={() => onBlankSpaceClick('blank4')}
                            >
                                {droppedItems.blank4 || '____________'}
                            </BlankSpace>, el frotis, el hisopado o la punción lumbar, entre otras. Estas técnicas se llevan a cabo siguiendo unos 
                            <BlankSpace 
                                onClick={() => onBlankSpaceClick('blank5')}
                            >
                                {droppedItems.blank5 || '____________'}
                            </BlankSpace> 
                            adecuados para garantizar la integridad de la muestra y obtener resultados precisos y 
                            <BlankSpace 
                                onClick={() => onBlankSpaceClick('blank6')}
                            >
                                {droppedItems.blank6 || '____________'}
                            </BlankSpace>.
                        </TextBlock>
                    </QuestionContent>
                    
                    <DraggableItems>
                        {['biológico', 'genética', 'enfermedades', 'biopsia', 'protocolos', 'confiables'].map(item => (
                            !Object.values(droppedItems).includes(item) && (
                                <DraggableItem
                                    key={item}
                                    onClick={() => onSelectItem(item)}
                                    isSelected={selectedItem === item}
                                >
                                    {item}
                                </DraggableItem>
                            )
                        ))}
                    </DraggableItems>
                    
                </Question>


                <SubmitButton type="submit" disabled={isRetakeAllowed}>Enviar Respuestas</SubmitButton>
            </form>
            {score !== null && (
                <ScoreModal>
                    <ScoreContent>
                        <h2>¡Quiz completado!</h2>
                        <p>Has respondido correctamente {score.toFixed(2)} de 7 puntos.</p>
                        <ModalButton onClick={closeModal}>Cerrar</ModalButton>
                    </ScoreContent>
                </ScoreModal>
            )}
        </QuizContainer>
    );
};
// Estilos

const QuizContainer = styled.div`
    padding: 20px;
    max-width: clamp(500px, 75%, 900px);
    margin: 0 auto;
    border-radius: 10px;
`;

const QuizTitle = styled.h1`
    font-size: clamp(1.5rem, 2vw, 2.5rem);
    color: #005a6d;
    margin-bottom: 20px;
    text-align: center;
`;

const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;

    label {
        font-size: clamp(0.9rem, 1.2vw, 1rem);
        color: #555;
        margin-bottom: 5px;
    }

    select, input[type="text"] {
        padding: 8px;
        font-size: clamp(0.9rem, 1vw, 1rem);
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    input[type="radio"] {
        margin-right: 10px;
    }
`;

const StudentName = styled.div`
    margin-bottom: 20px;

    label {
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        color: #333;
    }

    input {
        margin-top: 5px;
        width: 100%;
        padding: 10px;
        font-size: clamp(1rem, 1.2vw, 1.2rem);
        border: 1px solid #ccc;
        border-radius: 5px;
    }
`;

const Timer = styled.div`
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    color: #e53935;
    margin-bottom: 20px;
    text-align: center;
`;

const Question = styled.div`
    margin-bottom: 20px;

    p {
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        color: #333;
        margin-bottom: 10px;
    }
`;

const QuestionContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const TextBlock = styled.div`
    font-size: 1rem;
    line-height: 1.5;
    color: #333;
`;

const BlankSpace = styled.span`
    display: inline-block;
    min-width: 100px;
    border-bottom: 1px dashed #000;
    margin: 0 5px;
    padding: 2px;
    cursor: pointer;
    background-color: #f0f8ff;
    text-align: center;
`;

const DraggableItems = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;

const DraggableItem = styled.div`
    padding: 10px 20px;
    background-color: #ccc;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    user-select: none;

    &:hover {
        background-color: #bbb;
    }
`;

const SubmitButton = styled.button`
    background-color: #005a6d;
    color: white;
    padding: 10px 20px;
    font-size: clamp(1rem, 1.2vw, 1.2rem);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #004a5a;
    }
`;

const BackButton = styled.button`
    background-color: #ccc;
    color: #333;
    padding: 10px 20px;
    font-size: clamp(1rem, 1.2vw, 1.2rem);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #bbb;
    }
`;

const ScoreModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

const ScoreContent = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    max-width: 400px;
    width: 100%;
`;

const ModalButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #005a6d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #004a5a;
    }
`;

const ErrorMessage = styled.span`
color: red;
font-size: clamp(0.8rem, 1vw, 0.9rem);
`;
