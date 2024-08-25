import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetGradeService } from '../services/GetGradeService';
import { GetStudentDataService } from '../services/GetStudentDataService';

export const NotasPage = () => {
    const [students, setStudents] = useState([]);
    const [grades, setGrades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1); // Página actual
    const quizCount = 9; // Número total de quizzes

    useEffect(() => {
        const fetchData = async () => {
            try {
                const studentsData = await GetStudentDataService();
                setStudents(studentsData);

                const gradesData = await GetGradeService();
                setGrades(gradesData);

                setLoading(false);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= quizCount) {
            setCurrentPage(page);
        }
    };
    const handlePageInputChange = (e) => {
        const value = e.target.value;
        // Permite solo números
        if (/^\d*$/.test(value)) {
            setCurrentPage(value === '' ? '' : parseInt(value, 10));
        }
    };
    
    const handlePageInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            const page = parseInt(e.target.value, 10);
            if (!isNaN(page) && page >= 1 && page <= quizCount) {
                setCurrentPage(page);
            }
        }
    };

    if (loading) {
        return <LoadingMessage>Cargando...</LoadingMessage>;
    }

    const currentQuizIndex = currentPage - 1; // Índice del quiz actual
    const studentsWithGrades = students.filter(student => 
        grades.some(g =>
            g.estudianteId === student.idEstudiante &&
            g.quizId === (currentQuizIndex + 1).toString()
        )
    );

    return (
        <PageContainer>
            <Title>Notas de los Estudiantes por Quiz</Title>
            <QuizSection>
                <QuizTitle>Quiz {currentPage}</QuizTitle>
                {studentsWithGrades.length > 0 ? (
                    <StyledTable>
                        <thead>
                            <tr>
                                <TableHeader>Estudiante</TableHeader>
                                <TableHeader>Nota</TableHeader>
                            </tr>
                        </thead>
                        <tbody>
                            {studentsWithGrades.map(student => {
                                const grade = grades.find(g =>
                                    g.estudianteId === student.idEstudiante &&
                                    g.quizId === (currentQuizIndex + 1).toString()
                                );

                                return (
                                    <TableRow key={student.id}>
                                        <TableCell>{student.nombre}</TableCell>
                                        <TableCell>{grade ? grade.nota : 'Sin nota'}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </tbody>
                    </StyledTable>
                ) : (
                    <NoGradesMessage>No hay notas disponibles para este quiz.</NoGradesMessage>
                )}
            </QuizSection>
            <Pagination>
                <PageButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Anterior
                </PageButton>
                <PageInput
                    type="number"
                    value={currentPage}
                    onChange={handlePageInputChange}
                    onKeyPress={handlePageInputKeyPress}
                    min="1"
                    max={quizCount}
                />
                <PageButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === quizCount}>
                    Siguiente
                </PageButton>
            </Pagination>
        </PageContainer>
    );
};

// Styled Components
const PageContainer = styled.div`
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 40px;
    font-size: 2rem;
    color: #333;
`;

const QuizSection = styled.div`
    margin-bottom: 40px;
`;

const QuizTitle = styled.h2`
    font-size: 1.5rem;
    color: #005a6d;
    margin-bottom: 20px;
`;

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
`;

const TableHeader = styled.th`
    padding: 10px;
    background-color: #005a6d;
    color: white;
    text-align: left;
    font-weight: bold;
    border-bottom: 2px solid #004a5a;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

const TableCell = styled.td`
    padding: 10px;
    border-bottom: 1px solid #ddd;
`;

const NoGradesMessage = styled.div`
    text-align: center;
    font-size: 1.2rem;
    color: #e53935;
    margin-top: 20px;
`;

const LoadingMessage = styled.div`
    text-align: center;
    font-size: 1.5rem;
    color: #333;
    margin-top: 50px;
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const PageButton = styled.button`
    background-color: #005a6d;
    color: white;
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    &:hover:enabled {
        background-color: #004a5a;
    }
`;

const PageInput = styled.input`
    width: 50px;
    text-align: center;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    -moz-appearance: textfield; /* Firefox */
    appearance: textfield; /* Chrome */
    
    /* Desactivar flechas de incremento/decremento en Chrome */
    &::-webkit-inner-spin-button, 
    &::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }

    &:focus {
        border-color: #005a6d;
    }
`;
export default NotasPage;
