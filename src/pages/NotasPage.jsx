import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useAuth } from "../context/AuthContext"; // Obtener usuario del contexto
import axios from 'axios';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar ScrollTrigger en GSAP
gsap.registerPlugin(ScrollTrigger);

export const NotasPage = () => {
    const { user } = useAuth(); // Obtenemos el usuario autenticado desde el AuthContext
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const titleRef = useRef(null); // Referencia para el título
    const cardsRef = useRef([]); // Referencia para las tarjetas de notas

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

    useEffect(() => {
        if (!loading && student) { // Esperamos a que los datos estén listos y el estado de carga sea falso
            // Animación del título
            if (titleRef.current) {
                gsap.from(titleRef.current, {
                    opacity: 1,
                    y: -0,
                    duration: 1,
                    ease: 'power3.out'
                });
            }

            // Animación de las tarjetas
            if (cardsRef.current.length > 0) {
                gsap.fromTo(
                    cardsRef.current,
                    { opacity: 0, y: 50 }, // Estado inicial
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.3, // Retraso entre cada tarjeta
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: cardsRef.current[0], // Activar la animación al llegar a la primera tarjeta
                            start: "top 80%", // Iniciar cuando el 80% del contenedor está visible
                            end: "bottom 20%",
                            toggleActions: "play none none none" // Reproducir la animación solo una vez
                        }
                    }
                );
            }
        }
    }, [loading, student]);

    // Función para calcular el promedio ponderado
    const calcularPromedio = (notas) => {
        const notasValidas = [notas["1"], notas["2"], notas["3"]].filter(nota => nota !== null && nota !== undefined);
        if (notasValidas.length === 3) {
            const [nota1, nota2, nota3] = [notas["1"], notas["2"], notas["3"]];
            const promedio = (nota1 * 0.45 + nota2 * 0.35 + nota3 * 0.2);
            return Math.ceil(promedio);
        } else {
            return "-";
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

    return (
        <PageContainer>
            <Title ref={titleRef}>Notas de {nombre}</Title>
            <NotasContainer>
                {/* Primera Etapa */}
                <NotasCard ref={(el) => (cardsRef.current[0] = el)}>
                    <SemesterTitle>Primera etapa</SemesterTitle>
                    <NotaRow><span>P:</span> <Nota>{mostrarNota(notas["1"])}</Nota></NotaRow>
                    <NotaRow><span>C:</span> <Nota>{mostrarNota(notas["2"])}</Nota></NotaRow>
                    <NotaRow><span>A:</span> <Nota>{mostrarNota(notas["3"])}</Nota></NotaRow>
                    <PromedioRow><span>Promedio:</span> <Promedio>{calcularPromedio(notas)}</Promedio></PromedioRow>
                </NotasCard>

                {/* Segunda Etapa */}
                <NotasCard ref={(el) => (cardsRef.current[1] = el)}>
                    <SemesterTitle>Segunda etapa</SemesterTitle>
                    <NotaRow><span>P:</span> <Nota>{mostrarNota(notas["4"])}</Nota></NotaRow>
                    <NotaRow><span>C:</span> <Nota>{mostrarNota(notas["5"])}</Nota></NotaRow>
                    <NotaRow><span>A:</span> <Nota>{mostrarNota(notas["6"])}</Nota></NotaRow>
                </NotasCard>

                {/* Tercera Etapa */}
                <NotasCard ref={(el) => (cardsRef.current[2] = el)}>
                    <SemesterTitle>Tercera etapa</SemesterTitle>
                    <NotaRow><span>P:</span> <Nota>{mostrarNota(notas["7"])}</Nota></NotaRow>
                    <NotaRow><span>C:</span> <Nota>{mostrarNota(notas["8"])}</Nota></NotaRow>
                    <NotaRow><span>A:</span> <Nota>{mostrarNota(notas["9"])}</Nota></NotaRow>
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
