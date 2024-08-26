import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid'; // Para generar IDs únicos
import { PostGradeService } from "../../services/PostGradeService"
import { PostStudentDataService } from "../../services/PostStudentDataService"

export const FirstQuizz = () => {
    const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm();
    const navigate = useNavigate();
    const [hints, setHints] = useState({});
    const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
    const [score, setScore] = useState(null);
    const [isRetakeAllowed, setIsRetakeAllowed] = useState(false);
    const [studentId, setStudentId] = useState(null); // Para almacenar el ID del estudiante

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

    useEffect(() => {
        if (!isRetakeAllowed && timeLeft > 0) {
            const timerId = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        } else if (timeLeft === 0 && !isRetakeAllowed) {
            alert('El tiempo ha terminado. El quiz se enviará automáticamente.');
            handleSubmit(onSubmit)();
        }
    }, [timeLeft, isRetakeAllowed]);

    const onSubmit = async (data) => {
        let calculatedScore = 0;

        // Lógica para calificar las respuestas...
        if (data.question1_a === "Micosis superficial") calculatedScore++;
        if (data.question1_b === "Levadura lipófila") calculatedScore++;
        if (data.question1_c === "Micosis cutáneas") calculatedScore++;
        if (data.question1_d === "Onicomicosis") calculatedScore++;
        if (data.question1_e === "Micosis subcutáneas") calculatedScore++;
        if (data.question1_f === "Micosis oportunista") calculatedScore++;
        if (data.question1_g === "Meningoencefalitis") calculatedScore++;
        if (data.question1_h === "Reacciones alérgicas") calculatedScore++;

        if (data.question2_1 === "Verdadero") calculatedScore++;
        if (data.question2_2 === "Falso") calculatedScore++;
        if (data.question2_3 === "Falso") calculatedScore++;
        if (data.question2_4 === "Verdadero") calculatedScore++;

        if (data.question3 === "3.3") calculatedScore++;

        if (data.question4_1 === "bipartición") calculatedScore++;
        if (data.question4_2 === "hifas") calculatedScore++;
        if (data.question4_3 === "Ascomycota") calculatedScore++;
        if (data.question4_4 === "agar sabouraud") calculatedScore++;

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
    const toggleHint = (question) => {
        setHints(prevHints => ({ ...prevHints, [question]: !prevHints[question] }));
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const handleRetakeQuiz = () => {
        clearErrors();
        reset();
        setTimeLeft(1800);
        setScore(null);
        setIsRetakeAllowed(false);
    };
    
    const closeModal = () => {
        setScore(null);
    };

    return (
        <QuizContainer>
            <BackButton onClick={() => navigate(-1)}>Regresar</BackButton>
            <QuizTitle>Quiz: Micosis y Hongos</QuizTitle>
            <StudentName>
                <label>Nombre del estudiante:</label>
                <input type="text" {...register("studentName", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                {errors.studentName && <ErrorMessage>Este campo es obligatorio.</ErrorMessage>}
            </StudentName>
            {!isRetakeAllowed && <Timer>Tiempo restante: {formatTime(timeLeft)}</Timer>}
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <Question>
                    <p>1. Relacionar: (2 puntos)</p>
                    <QuestionContent>
                        <SelectContainer>
                            <label>Pitiriasis versicolor</label>
                            <select {...register("question1_a", { required: !isRetakeAllowed })} disabled={isRetakeAllowed}>
                                <option value="">Seleccione...</option>
                                <option value="Micosis superficial">Micosis superficial</option>
                                <option value="Levadura lipófila">Levadura lipófila</option>
                                <option value="Micosis cutáneas">Micosis cutáneas</option>
                                <option value="Onicomicosis">Onicomicosis</option>
                                <option value="Micosis subcutáneas">Micosis subcutáneas</option>
                                <option value="Micosis oportunista">Micosis oportunista</option>
                                <option value="Meningoencefalitis">Meningoencefalitis</option>
                                <option value="Reacciones alérgicas">Reacciones alérgicas</option>
                            </select>
                            {errors.question1_a && <ErrorMessage>Esta pregunta es obligatoria.</ErrorMessage>}
                        </SelectContainer>

                        <SelectContainer>
                            <label>Malassezia</label>
                            <select {...register("question1_b", { required: !isRetakeAllowed })} disabled={isRetakeAllowed}>
                                <option value="">Seleccione...</option>
                                <option value="Micosis superficial">Micosis superficial</option>
                                <option value="Levadura lipófila">Levadura lipófila</option>
                                <option value="Micosis cutáneas">Micosis cutáneas</option>
                                <option value="Onicomicosis">Onicomicosis</option>
                                <option value="Micosis subcutáneas">Micosis subcutáneas</option>
                                <option value="Micosis oportunista">Micosis oportunista</option>
                                <option value="Meningoencefalitis">Meningoencefalitis</option>
                                <option value="Reacciones alérgicas">Reacciones alérgicas</option>
                            </select>
                            {errors.question1_b && <ErrorMessage>Esta pregunta es obligatoria.</ErrorMessage>}
                        </SelectContainer>

                        <SelectContainer>
                            <label>Dermatofitosis</label>
                            <select {...register("question1_c", { required: !isRetakeAllowed })} disabled={isRetakeAllowed}>
                                <option value="">Seleccione...</option>
                                <option value="Micosis superficial">Micosis superficial</option>
                                <option value="Levadura lipófila">Levadura lipófila</option>
                                <option value="Micosis cutáneas">Micosis cutáneas</option>
                                <option value="Onicomicosis">Onicomicosis</option>
                                <option value="Micosis subcutáneas">Micosis subcutáneas</option>
                                <option value="Micosis oportunista">Micosis oportunista</option>
                                <option value="Meningoencefalitis">Meningoencefalitis</option>
                                <option value="Reacciones alérgicas">Reacciones alérgicas</option>
                            </select>
                            {errors.question1_c && <ErrorMessage>Esta pregunta es obligatoria.</ErrorMessage>}
                        </SelectContainer>

                        <SelectContainer>
                            <label>Tiña de las uñas</label>
                            <select {...register("question1_d", { required: !isRetakeAllowed })} disabled={isRetakeAllowed}>
                                <option value="">Seleccione...</option>
                                <option value="Micosis superficial">Micosis superficial</option>
                                <option value="Levadura lipófila">Levadura lipófila</option>
                                <option value="Micosis cutáneas">Micosis cutáneas</option>
                                <option value="Onicomicosis">Onicomicosis</option>
                                <option value="Micosis subcutáneas">Micosis subcutáneas</option>
                                <option value="Micosis oportunista">Micosis oportunista</option>
                                <option value="Meningoencefalitis">Meningoencefalitis</option>
                                <option value="Reacciones alérgicas">Reacciones alérgicas</option>
                            </select>
                            {errors.question1_d && <ErrorMessage>Esta pregunta es obligatoria.</ErrorMessage>}
                        </SelectContainer>

                        <SelectContainer>
                            <label>Esporotricosis</label>
                            <select {...register("question1_e", { required: !isRetakeAllowed })} disabled={isRetakeAllowed}>
                                <option value="">Seleccione...</option>
                                <option value="Micosis superficial">Micosis superficial</option>
                                <option value="Levadura lipófila">Levadura lipófila</option>
                                <option value="Micosis cutáneas">Micosis cutáneas</option>
                                <option value="Onicomicosis">Onicomicosis</option>
                                <option value="Micosis subcutáneas">Micosis subcutáneas</option>
                                <option value="Micosis oportunista">Micosis oportunista</option>
                                <option value="Meningoencefalitis">Meningoencefalitis</option>
                                <option value="Reacciones alérgicas">Reacciones alérgicas</option>
                            </select>
                            {errors.question1_e && <ErrorMessage>Esta pregunta es obligatoria.</ErrorMessage>}
                        </SelectContainer>

                        <SelectContainer>
                            <label>Candidosis</label>
                            <select {...register("question1_f", { required: !isRetakeAllowed })} disabled={isRetakeAllowed}>
                                <option value="">Seleccione...</option>
                                <option value="Micosis superficial">Micosis superficial</option>
                                <option value="Levadura lipófila">Levadura lipófila</option>
                                <option value="Micosis cutáneas">Micosis cutáneas</option>
                                <option value="Onicomicosis">Onicomicosis</option>
                                <option value="Micosis subcutáneas">Micosis subcutáneas</option>
                                <option value="Micosis oportunista">Micosis oportunista</option>
                                <option value="Meningoencefalitis">Meningoencefalitis</option>
                                <option value="Reacciones alérgicas">Reacciones alérgicas</option>
                            </select>
                            {errors.question1_f && <ErrorMessage>Esta pregunta es obligatoria.</ErrorMessage>}
                        </SelectContainer>

                        <SelectContainer>
                            <label>Criptococosis</label>
                            <select {...register("question1_g", { required: !isRetakeAllowed })} disabled={isRetakeAllowed}>
                                <option value="">Seleccione...</option>
                                <option value="Micosis superficial">Micosis superficial</option>
                                <option value="Levadura lipófila">Levadura lipófila</option>
                                <option value="Micosis cutáneas">Micosis cutáneas</option>
                                <option value="Onicomicosis">Onicomicosis</option>
                                <option value="Micosis subcutáneas">Micosis subcutáneas</option>
                                <option value="Micosis oportunista">Micosis oportunista</option>
                                <option value="Meningoencefalitis">Meningoencefalitis</option>
                                <option value="Reacciones alérgicas">Reacciones alérgicas</option>
                            </select>
                            {errors.question1_g && <ErrorMessage>Esta pregunta es obligatoria.</ErrorMessage>}
                        </SelectContainer>

                        <SelectContainer>
                            <label>Aspergilosis</label>
                            <select {...register("question1_h", { required: !isRetakeAllowed })} disabled={isRetakeAllowed}>
                                <option value="">Seleccione...</option>
                                <option value="Micosis superficial">Micosis superficial</option>
                                <option value="Levadura lipófila">Levadura lipófila</option>
                                <option value="Micosis cutáneas">Micosis cutáneas</option>
                                <option value="Onicomicosis">Onicomicosis</option>
                                <option value="Micosis subcutáneas">Micosis subcutáneas</option>
                                <option value="Micosis oportunista">Micosis oportunista</option>
                                <option value="Meningoencefalitis">Meningoencefalitis</option>
                                <option value="Reacciones alérgicas">Reacciones alérgicas</option>
                            </select>
                            {errors.question1_h && <ErrorMessage>Esta pregunta es obligatoria.</ErrorMessage>}
                        </SelectContainer>
                    </QuestionContent>
                </Question>

                <Question>
                    <p>2. Marque verdadero ( V ) o falso ( F ): (2 puntos)</p>
                    <QuestionContent>
                        <SelectContainer>
                            <label>2.1. Los hongos son microorganismos eucarióticos.</label>
                            <label>
                                <input type="radio" value="Verdadero" {...register("question2_1", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Verdadero
                            </label>
                            <label>
                                <input type="radio" value="Falso" {...register("question2_1", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Falso
                            </label>
                        </SelectContainer>

                        <SelectContainer>
                            <label>2.2. La mayoría de los hongos poseen una pared no rígida.</label>
                            <label>
                                <input type="radio" value="Verdadero" {...register("question2_2", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Verdadero
                            </label>
                            <label>
                                <input type="radio" value="Falso" {...register("question2_2", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Falso
                            </label>
                        </SelectContainer>

                        <SelectContainer>
                            <label>2.3. Los hongos son fotosintéticos.</label>
                            <label>
                                <input type="radio" value="Verdadero" {...register("question2_3", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Verdadero
                            </label>
                            <label>
                                <input type="radio" value="Falso" {...register("question2_3", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Falso
                            </label>
                        </SelectContainer>

                        <SelectContainer>
                            <label>2.4. La mayoría de los hongos causan micosis.</label>
                            <label>
                                <input type="radio" value="Verdadero" {...register("question2_4", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Verdadero
                            </label>
                            <label>
                                <input type="radio" value="Falso" {...register("question2_4", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                Falso
                            </label>
                        </SelectContainer>
                    </QuestionContent>
                </Question>

                <Question>
                    <p>3. Subraye la alternativa incorrecta: (2 puntos)</p>
                    <QuestionContent>
                        <SelectContainer>
                            <label>
                                <input type="radio" value="3.1" {...register("question3", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                3.1. Casi todos los hongos son aerobios estrictos o facultativos.
                            </label>
                            <label>
                                <input type="radio" value="3.2" {...register("question3", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                3.2. Los hongos son quimiotróficos y secretan enzimas degradativas.
                            </label>
                            <label>
                                <input type="radio" value="3.3" {...register("question3", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                3.3. Casi todos los hongos patógenos son endógenos.
                            </label>
                            <label>
                                <input type="radio" value="3.4" {...register("question3", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                                3.4. La mayor parte de micosis son de tratamiento difícil.
                            </label>
                        </SelectContainer>
                    </QuestionContent>
                </Question>

                <Question>
                    <p>4. Completar: (2 puntos)</p>
                    <QuestionContent>
                        <SelectContainer>
                            <label>4.1. La mayor parte de las levaduras se reproducen por:</label>
                            <input type="text" {...register("question4_1", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                            {errors.question4_1 && <ErrorMessage>Este campo es obligatorio.</ErrorMessage>}
                        </SelectContainer>

                        <SelectContainer>
                            <label>4.2. Filamentos tubulares ramificados de los hongos:</label>
                            <input type="text" {...register("question4_2", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                            {errors.question4_2 && <ErrorMessage>Este campo es obligatorio.</ErrorMessage>}
                        </SelectContainer>

                        <SelectContainer>
                            <label>4.3. La mayor parte de los hongos patógenos son miembros del filo:</label>
                            <input type="text" {...register("question4_3", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                            {errors.question4_3 && <ErrorMessage>Este campo es obligatorio.</ErrorMessage>}
                        </SelectContainer>

                        <SelectContainer>
                            <label>4.4. El medio micológico tradicional es:</label>
                            <input type="text" {...register("question4_4", { required: !isRetakeAllowed })} disabled={isRetakeAllowed} />
                            {errors.question4_4 && <ErrorMessage>Este campo es obligatorio.</ErrorMessage>}
                        </SelectContainer>
                    </QuestionContent>
                </Question>

                <SubmitButton type="submit" disabled={isRetakeAllowed}>Enviar Respuestas</SubmitButton>
            </form>
            {score !== null && (
                <ScoreModal>
                    <ScoreContent>
                        <h2>¡Quiz completado!</h2>
                        <p>Has respondido correctamente {score} de 16 preguntas.</p>
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

const ErrorMessage = styled.span`
    color: red;
    font-size: clamp(0.8rem, 1vw, 0.9rem);
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

    ul {
        list-style-type: none;
        padding: 0;
        margin-top: 20px;
        text-align: left;
    }

    li {
        font-size: clamp(1rem, 1.2vw, 1.2rem);
        color: ${props => props.correct ? 'green' : 'red'};
        margin-bottom: 10px;
    }
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







