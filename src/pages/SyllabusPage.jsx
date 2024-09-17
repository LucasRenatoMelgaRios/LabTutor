import React from 'react';
import styled from 'styled-components';

export const SyllabusPage = () => {
  return (
    <Container>
      <Header>
        <h1>Syllabus: Muestras Biológicas Humanas</h1>
        <Subtitle>Instituto de Educación Superior Tecnológico Público Naranjillo</Subtitle>
      </Header>

      <Section>
        <h2>Información General</h2>
        <Info>
          <p><strong>Programa de estudios:</strong> Laboratorio Clínico y Anatomía Patológica</p>
          <p><strong>Módulo:</strong> Extracción y recolección de muestras biológicas humanas</p>
          <p><strong>Unidad didáctica:</strong> Muestras biológicas humanas</p>
          <p><strong>Tipo de unidad didáctica:</strong> Formación específica</p>
          <p><strong>Créditos:</strong> 03</p>
          <p><strong>Duración:</strong> 18 semanas (90 horas semestrales)</p>
          <p><strong>Horario:</strong> Lunes (8:00 a.m. – 12:05 p.m.)</p>
          <p><strong>Docente:</strong> Lic. Biólogo Rogelio Melgar Pérez</p>
        </Info>
      </Section>

      <Section>
        <h2>Sumilla</h2>
        <p>
          La unidad didáctica corresponde al área del programa de estudios y es de naturaleza teórico-práctica. 
          Tiene como propósito desarrollar en el estudiante la capacidad de aplicar y afianzar los conocimientos, 
          habilidades y destrezas en la extracción y recepción de muestras biológicas humanas de acuerdo a las 
          indicaciones y protocolos establecidos.
        </p>
      </Section>

      <Section>
        <h2>Competencias</h2>
        <ul>
          <li>Efectuar la extracción y recepción de muestras biológicas humanas teniendo en cuenta las solicitudes de análisis.</li>
          <li>Aplicar medidas de bioseguridad según la normativa vigente.</li>
        </ul>
      </Section>

      <Section>
        <h2>Metodología</h2>
        <p>Se utilizarán los siguientes métodos durante el desarrollo de la unidad:</p>
        <ul>
          <li>Método expositivo con medios audiovisuales</li>
          <li>Método interactivo con participación del alumnado</li>
          <li>Método demostrativo en prácticas de laboratorio</li>
        </ul>
      </Section>

      <Section>
        <h2>Evaluación</h2>
        <p>
          El sistema de calificación es vigesimal y la nota mínima aprobatoria es 13. La evaluación se realizará
          en base a actividades prácticas y teóricas.
        </p>
        <EvaluationTable>
          <thead>
            <tr>
              <th>Rubro</th>
              <th>Instrumento</th>
              <th>Peso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Evaluación práctica (EP)</td>
              <td>Lista de cotejo</td>
              <td>66.6%</td>
            </tr>
            <tr>
              <td>Evaluación final (EF)</td>
              <td>Prueba escrita mixta</td>
              <td>33.3%</td>
            </tr>
          </tbody>
        </EvaluationTable>
      </Section>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  h1 {
    font-size: 2.5rem;
    color: #333;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const Section = styled.section`
  margin-bottom: 30px;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #1a73e8;
  }

  p {
    font-size: 1rem;
    color: #333;
  }

  ul {
    padding-left: 20px;
    list-style-type: disc;

    li {
      margin-bottom: 8px;
    }
  }
`;

const Info = styled.div`
  p {
    font-size: 1rem;
    margin-bottom: 5px;

    strong {
      color: #555;
    }
  }
`;

const EvaluationTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

export default SyllabusPage;
