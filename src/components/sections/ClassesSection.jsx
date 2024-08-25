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
    padding: 20px;
    justify-content: center;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    img {
        width: clamp(200px, 5vw, 650px);
    }
`;

const Title = styled.h2`
    font-size: clamp(22px, 1.5vw, 36px);
    font-weight: 500;
`;

const ClassesContainer = styled.div`
    padding-left: 300px;
    padding-right: 300px;
`;

const ClassesGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    margin-top: 20px;
`;

const ClassCard = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(229, 231, 235);
    overflow: hidden; /* Asegura que no haya desbordamiento de contenido */
    height: 100%; /* Hace que la card ocupe todo el espacio disponible */

    h3, p{
        text-align: left;
    }
`;

const ImageContainer = styled.div`
    height: auto;

    img {
        width: 100%;
        height: 200px; /* Ajusta la altura según lo necesario */
        object-fit: cover;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex-grow: 1; /* Hace que el contenido ocupe el espacio restante */
    justify-content: space-between; /* Distribuye el contenido verticalmente */
`;

const FechaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    color: #07bdbd;

    p{
        color: #07bdbd;
        font-size: clamp(12px, 0.7vw, 19px);
    }

    svg{
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
    text-decoration: none; /* Elimina el subrayado */
    color: inherit; /* Hereda el color del elemento padre */
    display: block; /* Asegura que el enlace ocupe todo el espacio del bloque */
`;