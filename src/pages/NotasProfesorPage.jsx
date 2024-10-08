import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export const NotasProfesorPage = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingRowIndex, setEditingRowIndex] = useState(null); // Controla el índice de la fila en edición
    const [studentIds, setStudentIds] = useState([]); // Arreglo de IDs de los estudiantes

    // Fetch data from MockAPI
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://66ca61e159f4350f064f0e88.mockapi.io/api/labtutor/users');

                // Convertimos el ID a string para que coincida con el formato esperado
                const studentsWithStringIds = response.data.map(student => ({
                    ...student,
                    id: String(student.id) // Convertimos el id a string
                }));

                // Almacenamos los IDs de los estudiantes
                setStudentIds(studentsWithStringIds.map(student => String(student.id)));
                setStudents(studentsWithStringIds);
                setLoading(false);
            } catch (err) {
                setError('Error al cargar los datos del estudiante');
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Maneja los cambios en las notas
    const handleNotaChange = (rowIndex, examen, value) => {
        setStudents(prevState => {
            const updatedStudents = [...prevState];
            updatedStudents[rowIndex].notas[examen] = value === '' ? null : Number(value);
            return updatedStudents;
        });
    };

    // Guardar las notas para un estudiante basado en el índice de la fila
    const saveNotas = async (rowIndex) => {
        // Obtener el ID del estudiante basado en el índice de la fila
        const studentId = studentIds[rowIndex];
        const studentToSave = students[rowIndex];

        if (!studentToSave) {
            console.error('Estudiante no encontrado.');
            return;
        }

        try {
            // Realizar la solicitud PUT
            await axios.put(
                `https://66ca61e159f4350f064f0e88.mockapi.io/api/labtutor/users/${studentId}`, // Usamos studentId como string
                {
                    nombre: studentToSave.nombre,
                    dni: studentToSave.dni,
                    codigo_estudiante: studentToSave.codigo_estudiante,
                    notas: studentToSave.notas
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
            setEditingRowIndex(null); // Desactivar modo de edición
        } catch (error) {
            console.error('Error al guardar las notas:', error);
            alert('Error al guardar las notas.');
        }
    };

    // Función para calcular el promedio de las notas válidas
    const calcularPromedio = (notas, examenes) => {
        // Filtrar las notas que no sean null o undefined
        const validNotas = examenes.map(examen => notas[examen]).filter(nota => nota !== null && nota !== undefined);
    
        // Si no hay tres notas completas, no calculamos el promedio
        if (validNotas.length !== 3) return "-";
    
        // Extraemos las notas
        const [nota1, nota2, nota3] = validNotas;
    
        // Calculamos el promedio ponderado
        const promedio = (nota1 * 0.45 + nota2 * 0.35 + nota3 * 0.2);
    
        // Redondear hacia arriba si el decimal es .5 o mayor
        return Math.ceil(promedio); // Redondea hacia arriba el resultado final
    };

    if (loading) {
        return <LoadingMessage>Cargando...</LoadingMessage>;
    }

    if (error) {
        return <ErrorMessage>{error}</ErrorMessage>;
    }

    return (
        <PageContainer>
            <Title>Gestión de Notas de los Estudiantes</Title>
            <StyledTable>
                <thead>
                    <tr>
                        <TableHeader>Estudiante</TableHeader>
                        <TableHeader colSpan="4">Primer Semestre</TableHeader>
                        <TableHeader colSpan="4">Segundo Semestre</TableHeader>
                        <TableHeader colSpan="4">Tercer Semestre</TableHeader>
                        <TableHeader>Acciones</TableHeader>
                    </tr>
                    <tr>
                        <TableHeader></TableHeader>
                        <TableHeader>P</TableHeader>
                        <TableHeader>C</TableHeader>
                        <TableHeader>A</TableHeader>
                        <TableHeader>Promedio</TableHeader>
                        <TableHeader>P</TableHeader>
                        <TableHeader>C</TableHeader>
                        <TableHeader>A</TableHeader>
                        <TableHeader>Promedio</TableHeader>
                        <TableHeader>P</TableHeader>
                        <TableHeader>C</TableHeader>
                        <TableHeader>A</TableHeader>
                        <TableHeader>Promedio</TableHeader>
                        <TableHeader></TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, rowIndex) => {
                        // Omitir el estudiante con ID '51' (el profesor)
                        if (student.id === '51') {
                            return null; // No renderizamos nada si el ID es '51'
                        }

                        const { notas } = student;
                        const semestre1 = ['1', '2', '3']; // Exámenes del primer semestre
                        const semestre2 = ['4', '5', '6']; // Exámenes del segundo semestre
                        const semestre3 = ['7', '8', '9']; // Exámenes del tercer semestre

                        const isEditing = editingRowIndex === rowIndex;

                        return (
                            <TableRow key={student.id}>
                                <TableCell>{student.nombre}</TableCell>

                                {/* Primer Semestre */}
                                {semestre1.map(examen => (
                                    <TableCell key={`sem1-${examen}`}>
                                        {isEditing ? (
                                            <InputNota
                                                type="number"
                                                value={notas[examen] !== null ? notas[examen] : ''}
                                                onChange={(e) => handleNotaChange(rowIndex, examen, e.target.value)}
                                            />
                                        ) : (
                                            notas[examen] !== null ? notas[examen] : "-"
                                        )}
                                    </TableCell>
                                ))}
                                <TableCell>{calcularPromedio(notas, semestre1)}</TableCell>

                                {/* Segundo Semestre */}
                                {semestre2.map(examen => (
                                    <TableCell key={`sem2-${examen}`}>
                                        {isEditing ? (
                                            <InputNota
                                                type="number"
                                                value={notas[examen] !== null ? notas[examen] : ''}
                                                onChange={(e) => handleNotaChange(rowIndex, examen, e.target.value)}
                                            />
                                        ) : (
                                            notas[examen] !== null ? notas[examen] : "-"
                                        )}
                                    </TableCell>
                                ))}
                                <TableCell>{calcularPromedio(notas, semestre2)}</TableCell>

                                {/* Tercer Semestre */}
                                {semestre3.map(examen => (
                                    <TableCell key={`sem3-${examen}`}>
                                        {isEditing ? (
                                            <InputNota
                                                type="number"
                                                value={notas[examen] !== null ? notas[examen] : ''}
                                                onChange={(e) => handleNotaChange(rowIndex, examen, e.target.value)}
                                            />
                                        ) : (
                                            notas[examen] !== null ? notas[examen] : "-"
                                        )}
                                    </TableCell>
                                ))}
                                <TableCell>{calcularPromedio(notas, semestre3)}</TableCell>

                                <TableCell>
                                    {isEditing ? (
                                        <SaveButton onClick={() => saveNotas(rowIndex)}>Guardar</SaveButton>
                                    ) : (
                                        <EditButton onClick={() => setEditingRowIndex(rowIndex)}>Editar</EditButton>
                                    )}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </tbody>
            </StyledTable>
        </PageContainer>
    );
};


// Styled Components
const PageContainer = styled.div`
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 40px;
    font-size: 2rem;
    color: #333;
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

const InputNota = styled.input`
    width: 40px;
    padding: 5px;
    font-size: 1rem;
    text-align: center;

    /* Eliminar las flechas de incremento/decremento en Chrome, Safari, y Edge */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

`;


const EditButton = styled.button`
    background-color: #005a6d;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    margin-right: 5px;

    &:hover {
        background-color: #004a5a;
    }
`;

const SaveButton = styled(EditButton)`
    background-color: #28a745;

    &:hover {
        background-color: #218838;
    }
`;

const DeleteButton = styled.button`
    background-color: #e53935;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
        background-color: #d32f2f;
    }
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

