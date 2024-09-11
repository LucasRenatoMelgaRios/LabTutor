import styled from "styled-components"
import { CiCalendarDate } from "react-icons/ci";
import { GiTeacher } from "react-icons/gi";
import { Link } from "react-router-dom";  // Importa Link
import { useAuth } from "../../context/AuthContext";

export const ClassesSection = () => {

    const { user } = useAuth(); // Obtén el nombre del usuario desde el contexto


    const getSaludo = () => {
        const hora = new Date().getHours();
        if (hora < 12) {
            return "Buenos días";
        } else if (hora < 18) {
            return "Buenas tardes";
        } else {
            return "Buenas noches";
        }
    };

    const obtenerPrimerNombre = (nombreCompleto) => {
        const [apellidos, nombres] = nombreCompleto.split(", ");
        const primerNombre = nombres.split(" ")[0]; // Obtiene solo el primer nombre
        return primerNombre;
    };

    const classesData = [
        {
            id: 1,
            title: "Muestras Biológicas Humanas",
            fecha: "Agosto 12, 2024",
            profesor: "Rogelio Melgar Pérez",
            img: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/625d6f41-519c-4d72-adf9-382db270fbf5/thumb_man_coding_app_square.png"
        },
        {
            id: 2,
            title: "Factores Condicionantes de la Muestra",
            fecha: "Septiembre 12, 2024",
            profesor: "Rogelio Melgar Pérez",
            img: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/625d6f41-519c-4d72-adf9-382db270fbf5/thumb_man_coding_app_square.png"
        },
        {
            id: 3,
            title: "Clase Adicional",
            fecha: "Junio 14, 2024",
            profesor: "Un Profesor Más",
            img: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/625d6f41-519c-4d72-adf9-382db270fbf5/thumb_man_coding_app_square.png"
        },
        {
            id: 4,
            title: "Laboratorio de Química",
            fecha: "Septiembre 5, 2024",
            profesor: "Ana López Martínez",
            img: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/625d6f41-519c-4d72-adf9-382db270fbf5/thumb_man_coding_app_square.png"
        },
        {
            id: 5,
            title: "Genética Molecular",
            fecha: "Octubre 15, 2024",
            profesor: "Carlos Díaz Sánchez",
            img: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/625d6f41-519c-4d72-adf9-382db270fbf5/thumb_man_coding_app_square.png"
        },
        {
            id: 6,
            title: "Microbiología",
            fecha: "Noviembre 20, 2024",
            profesor: "Lucía García Fernández",
            img: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/625d6f41-519c-4d72-adf9-382db270fbf5/thumb_man_coding_app_square.png"
        },
        {
            id: 7,
            title: "Inmunología Básica",
            fecha: "Diciembre 1, 2024",
            profesor: "Marta Torres Muñoz",
            img: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/625d6f41-519c-4d72-adf9-382db270fbf5/thumb_man_coding_app_square.png"
        },
        {
            id: 8,
            title: "Bioquímica",
            fecha: "Enero 10, 2025",
            profesor: "Roberto Sánchez Pérez",
            img: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/625d6f41-519c-4d72-adf9-382db270fbf5/thumb_man_coding_app_square.png"
        },
        {
            id: 9,
            title: "Biotecnología",
            fecha: "Febrero 18, 2025",
            profesor: "Elena Ruiz González",
            img: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/625d6f41-519c-4d72-adf9-382db270fbf5/thumb_man_coding_app_square.png"
        },
        {
            id: 10,
            title: "Farmacología",
            fecha: "Marzo 3, 2025",
            profesor: "Isabel Moreno Pérez",
            img: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/625d6f41-519c-4d72-adf9-382db270fbf5/thumb_man_coding_app_square.png"
        }
    ];

    return (
        <MainContainer>
            <SaludoContainer>
                {/* Muestra el saludo seguido del primer nombre del usuario */}
                <h2>{getSaludo()}, {user ? obtenerPrimerNombre(user.nombre) : "Usuario"}! Que vamos a aprender hoy?</h2>
            </SaludoContainer>
            <TitleContainer>
                <h1>MUESTRAS BIOLÓGICAS HUMANAS</h1>
            </TitleContainer>
            <ClassesContainer>
                <Title>Clases</Title>
                <ClassesGridContainer>
                    {classesData.map((clase, index) => (
                        <StyledLink to={`/class/${clase.id}`} key={clase.id}>
                            <ClassCard index={index}>
                                <ImageContainer>
                                    <img src={clase.img} alt={clase.title} />
                                </ImageContainer>
                                <ContentContainer>
                                    <FechaContainer>
                                        <p>{clase.fecha}</p>
                                        <CiCalendarDate />
                                    </FechaContainer>
                                    <h3>{clase.title}</h3>
                                    <ProfesorContainer>
                                        <p>{clase.profesor}</p>
                                        <GiTeacher />
                                    </ProfesorContainer>
                                </ContentContainer>
                            </ClassCard>
                        </StyledLink>
                    ))}
                </ClassesGridContainer>

            </ClassesContainer>
        </MainContainer>
    )
}
const SaludoContainer = styled.div`
    margin-bottom: 20px;
    text-align: center;

    h2 {
        font-size: clamp(18px, 4vw, 36px);
        font-weight: 500;
        color: #333;
    }
`;

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 5%;
    justify-content: center;
    box-sizing: border-box;
    animation: fadeIn 1s ease-in-out;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1{
        font-size: clamp(20px, 3.2vw, 200px);
    }

    img {
        width: clamp(150px, 50%, 400px);
        margin-bottom: 20px;
    }
`;

const Title = styled.h2`
    font-size: clamp(18px, 4vw, 36px);
    font-weight: 500;
    margin-bottom: 20px;
`;

const ClassesContainer = styled.div`
    padding: 0;
    width: 100%;
    margin: 0 auto;
`;

const ClassesGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Ajuste para pantallas pequeñas */
    gap: 20px;
    margin-top: 20px;
    width: 100%;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const ClassCard = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(229, 231, 235);
    overflow: hidden;
    height: 100%;
    transition: transform 0.3s ease;
    opacity: 0;
    transform: scale(0.95); /* Empieza ligeramente más pequeña */

    /* Animación suave */
    animation: fadeInCard 0.5s ease forwards;
    animation-delay: ${({ index }) => index * 0.1}s; /* Retraso progresivo según el índice */

    &:hover {
        transform: scale(1.05);
    }

    @keyframes fadeInCard {
        0% {
            opacity: 0;
            transform: scale(0.95);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    h3, p {
        text-align: left;
        margin: 5px 0;
    }
`;


const ImageContainer = styled.div`
    height: auto;

    img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex-grow: 1;
    justify-content: space-between;
`;

const FechaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    color: #07bdbd;

    p {
        color: #07bdbd;
        font-size: clamp(12px, 0.7vw, 19px);
    }

    svg {
        font-size: 20px;
        font-weight: bold;
    }
`;

const ProfesorContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: block;
`;