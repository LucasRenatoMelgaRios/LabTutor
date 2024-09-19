import React from 'react';
import styled from 'styled-components';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

export const FichaDeEvaluacionPage = ({ pdfUrl }) => {
  return (
    <Container>
      <h2>Visualizador de PDF</h2>
      <PDFContainer>
        <Worker workerUrl="/LabTutor/pdf.worker.min.js">
        <Viewer fileUrl="/LabTutor/FICHA%20DE%20EVALUACION%20DE%20PRACTICA.pdf" />
        </Worker>
      </PDFContainer>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const PDFContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .rpv-core__viewer {
    width: 80vw; // Ocupa el 80% del ancho
    height: 90vh; // Ocupa el 90% del alto

    @media (max-width: 1200px) {
      width: 90vw; // En pantallas medianas ocupa el 90% del ancho
      height: 85vh; // En pantallas medianas ocupa el 85% del alto
    }

    @media (max-width: 768px) {
      width: 100vw; // En pantallas pequeñas ocupa el 100% del ancho
      height: 80vh; // En pantallas pequeñas ocupa el 80% del alto
    }
  }
`;

