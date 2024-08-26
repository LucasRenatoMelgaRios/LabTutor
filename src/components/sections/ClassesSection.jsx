import styled from "styled-components"
import { CiCalendarDate } from "react-icons/ci";
import { GiTeacher } from "react-icons/gi";
import { Link } from "react-router-dom";  // Importa Link

export const ClassesSection = () => {

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
            title: "Otra Clase",
            fecha: "Julio 20, 2024",
            profesor: "Otro Profesor",
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
            <TitleContainer>
                <h1>Extracción y recolección de muestras biológicas humanas</h1>
                <img src="https://img.freepik.com/fotos-premium/representacion-3d-nino-pequeno-bata-laboratorio-gafas-sosteniendo-matraz_1057-16674.jpg" alt="" />
            </TitleContainer>
            <ClassesContainer>
                <Title>Clases</Title>
                <ClassesGridContainer>
                    {classesData.map((clase) => (
                        <StyledLink to={`/class/${clase.id}`} key={clase.id}>
                            <ClassCard>
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
const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 5%;
    justify-content: center;
    box-sizing: border-box;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;

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

    &:hover {
        transform: scale(1.05);
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