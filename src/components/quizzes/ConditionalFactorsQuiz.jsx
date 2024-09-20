import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const QuizContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  color: #000;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  color: #000;
  font-weight: bold;
  margin: 20px 0 10px;
`;

const QuestionContainer = styled.div`
  margin-bottom: 15px;
`;

const QuestionText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin-bottom: 5px;
`;

const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const LetterLabel = styled.span`
  font-size: 16px;
  margin-right: 5px;
  font-weight: bold;
  width: 30px;
`;

const AnswerText = styled.span`
  font-size: 16px;
  width: 300px;
  display: inline-block;
`;

const AnswerInput = styled.input`
  width: 30px;
  padding: 5px;
  font-size: 16px;
  text-align: center;
`;

const TrueFalseContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const TrueFalseLabel = styled.span`
  font-size: 16px;
  margin-right: 10px;
  font-weight: bold;
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const ResultMessage = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.success ? 'green' : 'red')};
  text-align: center;
  margin-top: 20px;
`;

// Respuestas correctas para el nuevo quiz
const correctAnswers = {
  question1: 'AHFEDGBC', // Respuestas concatenadas para relacionar
  question2: ['V', 'V', 'V', 'V', 'F', 'F', 'F', 'V'], // Verdadero o Falso
};

export const ConditionalFactorsQuiz = () => {
  const { user, setUser } = useAuth(); // Obtener el usuario del contexto de autenticación
  const [answers, setAnswers] = useState({
    question1: ['', '', '', '', '', '', '', ''], // Respuesta de relacionar
    question2: ['', '', '', '', '', '', '', ''], // Respuesta de verdadero o falso
  });
  const [score, setScore] = useState(null);
  const [resultMessage, setResultMessage] = useState('');

  // Calcular el puntaje del quiz
  const calculateScore = () => {
    let totalScore = 0;

    // Comparar las respuestas de la primera pregunta
    if (answers.question1.join('') === correctAnswers.question1) {
      totalScore += 5; // Puntaje de la primera pregunta
    }

    // Comparar las respuestas de la segunda pregunta
    correctAnswers.question2.forEach((answer, index) => {
      if (answer === answers.question2[index]) {
        totalScore += 1.25; // Puntaje de cada respuesta de verdadero/falso
      }
    });

    return totalScore;
  };

  // Calcular recompensas en monedas y experiencia
  const calculateRewards = (finalScore) => {
    const correctAnswersCount = Math.round(finalScore / 1.25); // Cada respuesta correcta cuenta 1.25 puntos
    const coinsEarned = correctAnswersCount * 15; // 15 monedas por respuesta correcta
    const xpEarned = correctAnswersCount * 2; // 2 puntos de experiencia por respuesta correcta

    return { coinsEarned, xpEarned };
  };

  // Manejar el envío del formulario
  const handleSubmit = async () => {
    const finalScore = calculateScore();
    setScore(finalScore);

    const { coinsEarned, xpEarned } = calculateRewards(finalScore);

    try {
      // Verifica si las monedas y experiencia del usuario están definidas, si no, inicialízalas en 0
      const currentCoins = user.monedas || 0;
      const currentXP = user.experiencia || 0;

      // Actualizar la nota, monedas y experiencia del usuario en la API
      const updatedUser = {
        ...user,
        notas: { ...user.notas, '2': finalScore }, // Cambiar nota a la posición '2'
        monedas: currentCoins + coinsEarned, // Sumar monedas actuales y ganadas
        experiencia: currentXP + xpEarned, // Sumar experiencia actual y ganada
      };

      // Debug: Mostrar el objeto actualizado
      console.log("Usuario actualizado:", updatedUser);

      // Actualizar los datos del usuario en la API
      await axios.put(
        `https://66ca61e159f4350f064f0e88.mockapi.io/api/labtutor/users/${user.id}`,
        updatedUser
      );

      // Actualizar el contexto de usuario
      setUser(updatedUser);

      setResultMessage(
        `¡Quiz completado! Tu puntaje es: ${finalScore}. 
         Has ganado ${coinsEarned} monedas y ${xpEarned} puntos de experiencia.`
      );
    } catch (error) {
      console.error('Error al actualizar la nota:', error);
      setResultMessage('Error al guardar tu puntaje. Inténtalo de nuevo.');
    }
  };

  return (
    <QuizContainer>
      <Title>TEST DE FACTORES CONDICIONANTES DE LA MUESTRA</Title>
      <SectionTitle>1. Relacionar:</SectionTitle>
      {[
        { letter: 'a', text: 'Sexo', answer: 'Factor modificable' },
        { letter: 'b', text: 'Raza', answer: 'Proteína hepática' },
        { letter: 'c', text: 'Dieta', answer: 'Presión arterial' },
        { letter: 'd', text: 'Ayuno', answer: 'Sustancia interferente' },
        { letter: 'e', text: 'Esfingomanómetro', answer: 'Factor inmodificable' },
        { letter: 'f', text: 'Alcohol', answer: 'Factor preanalítico' },
        { letter: 'g', text: 'LDH', answer: 'Enzima' },
        { letter: 'h', text: 'Fibrinógeno', answer: 'Factor no controlable' },
      ].map((item, index) => (
        <QuestionContainer key={index}>
          <AnswerContainer>
            <LetterLabel>{item.letter})</LetterLabel>
            <AnswerText>{item.text}</AnswerText>
            <AnswerInput
              type="text"
              maxLength="1"
              value={answers.question1[index]}
              onChange={(e) =>
                setAnswers({
                  ...answers,
                  question1: answers.question1.map((item, i) =>
                    i === index ? e.target.value.toUpperCase() : item
                  ),
                })
              }
            />
            <AnswerText>{item.answer}</AnswerText>
          </AnswerContainer>
        </QuestionContainer>
      ))}

      <SectionTitle>
        2. Marcar verdadero ( V ) o falso ( F ) según convenga:
      </SectionTitle>
      {[
        'a) La aldosterona es una hormona',
        'b) Tras una comida se observan variaciones en la glucosa',
        'c) El ejercicio físico puede alterar las magnitudes biológicas',
        'd) Los medicamentos puede interferir magnitudes biológicas.',
        'e) La postura no influye en los componentes sanguíneos.',
        'f) El embarazo es un factor modificable',
        'g) El ayuno no es necesario para la prueba de glucosa',
        'h) El tabaco provoca interferencias en las pruebas de laboratorio',
      ].map((text, index) => (
        <QuestionContainer key={index}>
          <TrueFalseContainer>
            <TrueFalseLabel>{text}</TrueFalseLabel>
            <label>
              <input
                type="radio"
                name={`question2_${index}`}
                value="V"
                checked={answers.question2[index] === 'V'}
                onChange={() =>
                  setAnswers({
                    ...answers,
                    question2: answers.question2.map((item, i) =>
                      i === index ? 'V' : item
                    ),
                  })
                }
              />
              V
            </label>
            <label style={{ marginLeft: '20px' }}>
              <input
                type="radio"
                name={`question2_${index}`}
                value="F"
                checked={answers.question2[index] === 'F'}
                onChange={() =>
                  setAnswers({
                    ...answers,
                    question2: answers.question2.map((item, i) =>
                      i === index ? 'F' : item
                    ),
                  })
                }
              />
              F
            </label>
          </TrueFalseContainer>
        </QuestionContainer>
      ))}

      <SubmitButton onClick={handleSubmit}>Enviar Respuestas</SubmitButton>

      {resultMessage && (
        <ResultMessage success={score >= 5}>{resultMessage}</ResultMessage>
      )}
    </QuizContainer>
  );
};
