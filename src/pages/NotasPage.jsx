import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from "../context/AuthContext"; // Obtener usuario del contexto
import axios from 'axios';

export const NotasPage = () => {
    const { user } = useAuth(); // Obtenemos el usuario autenticado desde el AuthContext
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await axios.get('https://66ca61e159f4350f064f0e88.mockapi.io/api/labtutor/users');
                const studentData = response.data.find((item) => item.id === user.id); // Comparar el ID del usuario logueado
                if (studentData) {
                    setStudent(studentData); // Asignamos los datos del estudiante si lo encontramos
                } else {
                    setError('No se encontraron datos del estudiante.');
                }
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                setError('Hubo un error al obtener los datos del estudiante.');
                setLoading(false);
            }
        };

        fetchStudentData();
    }, [user.id]);

    // Función para calcular el promedio ponderado
    const calcularPromedio = (notas) => {
        // Verificamos si todas las notas están presentes y no son nulas
        if (notas.every(nota => nota !== null && nota !== undefined)) {
            const [nota1, nota2, nota3] = notas;
            const promedio = (nota1 * 0.45 + nota2 * 0.35 + nota3 * 0.2);

            // Redondear hacia arriba si el decimal es .5 o mayor
            return Math.ceil(promedio);
        } else {
            return "-"; // Si alguna nota está ausente, no calculamos el promedio
        }
    };

    // Función para mostrar "-" si una nota es nula o indefinida
    const mostrarNota = (nota) => {
        return nota === null || nota === undefined ? "-" : nota;
    };

    if (loading) {
        return <LoadingMessage>Cargando...</LoadingMessage>;
    }

    if (error) {
        return <ErrorMessage>{error}</ErrorMessage>;
    }

    if (!student || !student.notas) {
        return <ErrorMessage>No se encontraron datos del estudiante</ErrorMessage>;
    }

    const { nombre, notas } = student;

    // Dividimos las notas en 3 semestres (cada semestre tiene 3 exámenes)
    const semestre1 = notas.slice(0, 3).map(n => n.nota);  // Primer semestre: exámenes 1, 2, 3
    const semestre2 = notas.slice(3, 6).map(n => n.nota);  // Segundo semestre: exámenes 4, 5, 6
    const semestre3 = notas.slice(6, 9).map(n => n.nota);  // Tercer semestre: exámenes 7, 8, 9

    return (
        <PageContainer>
            <Title>Notas de {nombre}</Title>
            <NotasContainer>
                {/* Primer Semestre */}
                <NotasCard>
                    <SemesterTitle>Primera etapa</SemesterTitle>
                    <NotaRow><span>P:</span> <Nota>{mostrarNota(semestre1[0])}</Nota></NotaRow>
                    <NotaRow><span>C:</span> <Nota>{mostrarNota(semestre1[1])}</Nota></NotaRow>
                    <NotaRow><span>A:</span> <Nota>{mostrarNota(semestre1[2])}</Nota></NotaRow>
                    <PromedioRow><span>Promedio:</span> <Promedio>{calcularPromedio(semestre1)}</Promedio></PromedioRow>
                </NotasCard>

                {/* Segundo Semestre */}
                <NotasCard>
                    <SemesterTitle>Segunda etapa</SemesterTitle>
                    <NotaRow><span>P:</span> <Nota>{mostrarNota(semestre2[0])}</Nota></NotaRow>
                    <NotaRow><span>C:</span> <Nota>{mostrarNota(semestre2[1])}</Nota></NotaRow>
                    <NotaRow><span>A:</span> <Nota>{mostrarNota(semestre2[2])}</Nota></NotaRow>
                    <PromedioRow><span>Promedio:</span> <Promedio>{calcularPromedio(semestre2)}</Promedio></PromedioRow>
                </NotasCard>

                {/* Tercer Semestre */}
                <NotasCard>
                    <SemesterTitle>Tercera etapa</SemesterTitle>
                    <NotaRow><span>P:</span> <Nota>{mostrarNota(semestre3[0])}</Nota></NotaRow>
                    <NotaRow><span>C:</span> <Nota>{mostrarNota(semestre3[1])}</Nota></NotaRow>
                    <NotaRow><span>A:</span> <Nota>{mostrarNota(semestre3[2])}</Nota></NotaRow>
                    <PromedioRow><span>Promedio:</span> <Promedio>{calcularPromedio(semestre3)}</Promedio></PromedioRow>
                </NotasCard>
            </NotasContainer>
        </PageContainer>
    );
};
// Styled Components
const PageContainer = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 40px;
    font-size: 2rem;
    color: #333;
`;

const NotasContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const NotasCard = styled.div`
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    /* Estilos responsive: Cuando la pantalla es pequeña (mobile), las columnas se convierten en filas */
    @media (max-width: 600px) {
        padding: 15px;
    }
`;

const SemesterTitle = styled.h2`
    font-size: 1.3rem;
    color: #005a6d;
    margin-bottom: 10px;
`;

const NotaRow = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;
    padding: 5px 0;
`;

const PromedioRow = styled(NotaRow)`
    font-weight: bold;
    border-top: 1px solid #ccc;
    padding-top: 10px;
`;

const Nota = styled.span`
    color: #333;
`;

const Promedio = styled.span`
    color: #005a6d;
    font-weight: bold;
`;

const LoadingMessage = styled.div`
    text-align: center;
    font-size: 1.5rem;
    color: #333;
    margin-top: 50px;
`;

const ErrorMessage = styled.div`
    text-align: center;
    font-size: 1.5rem;
    color: #e53935;
    margin-top: 50px;
`;

export default NotasPage;
