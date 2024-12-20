import { useEffect, useRef } from "react";
import styled from "styled-components"
import { CiCalendarDate } from "react-icons/ci";
import { GiTeacher } from "react-icons/gi";
import { Link } from "react-router-dom";  // Importa Link
import { useAuth } from "../../context/AuthContext";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const ClassesSection = () => {
    const classesGridRef = useRef(null); // Referencia para el grid de clases
    const { user } = useAuth(); // Obtén el nombre del usuario desde el contexto

    useEffect(() => {
        // Animación para las tarjetas de clase
        if (classesGridRef.current) {
            gsap.fromTo(
                classesGridRef.current.children,
                { opacity: 0, y: 50, scale: 0.9 }, // Estado inicial (invisible, desplazado y escalado)
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2, // Retardo entre tarjetas
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: classesGridRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }
    }, []);

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
        if (nombreCompleto) {
            // Verifica si el nombre completo contiene una coma
            if (nombreCompleto.includes(",")) {
                const [apellidos, nombres] = nombreCompleto.split(", ");
                if (nombres) {
                    return nombres.split(" ")[0]; // Obtiene solo el primer nombre
                }
            } else {
                // Si no hay coma, simplemente divide el nombre completo y devuelve el primer nombre
                return nombreCompleto.split(" ")[0];
            }
        }
        return "Usuario";
    };
    

    // Verifica si el usuario existe antes de intentar acceder a su nombre
    const primerNombre = user ? obtenerPrimerNombre(user.nombre) : "Usuario";

    const classesData = [
        {
            id: 1,
            title: "Muestras Biológicas Humanas",
            fecha: "Agosto 12, 2024",
            profesor: "Rogelio Melgar Pérez",
            img: "https://www.ufv.es/cetys/blog/wp-content/uploads/2023/06/cerrar-cientifico-borroso-sosteniendo-placa-petri-scaled.jpg"
        },
        {
            id: 2,
            title: "Factores Condicionantes de la Muestra",
            fecha: "Septiembre 12, 2024",
            profesor: "Rogelio Melgar Pérez",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSo9Y2fQiCDXoRMKB9rmjcJiUwud4pM9HIhw&s"
        },
        {
            id: 3,
            title: "Instrucciones para el paciente",
            fecha: "Septiembre 19, 2024",
            profesor: "Rogelio Melgar Pérez",
            img: "https://s2.abcstatics.com/abc/www/multimedia/salud/2023/02/20/muestra-orina-RKextZqw3bYT2jLhsQ2GagO-1200x840@abc.jpg"
        },
        {
            id: 4,
            title: "Normas de calidad en el proceso pre analítico",
            fecha: "Octubre 9, 2024",
            profesor: "Rogelio Melgar Pérez",
            img: "https://www.vegalab.com.mx/cdn/shop/articles/shutterstock_1401235820-1-1706x960.jpg?v=1664899239"
        },
        {
            id: 5,
            title: "Recepción y Control De Muestras",
            fecha: "Octubre 14, 2024",
            profesor: "Rogelio Melgar Pérez",
            img: "https://www.ceac.es/sites/default/files/2021/11/ceac-07-11.jpg"
        },
        {
            id: 6,
            title: "Biopsias",
            fecha: "Noviembre 25, 2024",
            profesor: "Lucía García Fernández",
            img: "https://asocolderma.org.co/sites/default/files/enfermedad/biopsia-de-la-piel_0.jpg"
        },
        {
            id: 7,
            title: "Orina",
            fecha: "Noviembre 11, 2024",
            profesor: "Rogelio Melgar Pérez",
            img: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/04/21/16820723915934.jpg"
             },
        {
            id: 8,
            title: "Esputo",
            fecha: "Noviembre 21, 2024",
            profesor: "Rogelio Melgar Pérez",
            img: "https://st4.depositphotos.com/2977159/21147/i/450/depositphotos_211473840-stock-photo-removing-phlegm-baby-nose-using.jpg"
        },
        {
            id: 9,
            title: "Heces",
            fecha: "Noviembre 25, 2024",
            profesor: "Rogelio Melgar Pérez",
            img: "https://laboatlas.com/wp-content/uploads/2017/02/blastocystis-300x202.jpg"
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
                <h2>{getSaludo()}, {primerNombre}! Listo para aprender?</h2>
            </SaludoContainer>
            <TitleContainer>
                <h1>MUESTRAS BIOLÓGICAS HUMANAS</h1>
            </TitleContainer>
            <ClassesContainer>
                <Title>Clases</Title>
                <ClassesGridContainer ref={classesGridRef}>
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
        color: transparent; /* Hace el texto transparente para que el gradiente se vea */
        background: linear-gradient(90deg, #15d1c1 0%, #6487fa 100%);
        -webkit-background-clip: text; /* Aplicar el background-clip en navegadores basados en WebKit */
        background-clip: text; /* Clip del background al texto */
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

    p{
        color: transparent; /* Hace el texto transparente para que el gradiente se vea */
        background: linear-gradient(90deg, #15d1c1 0%, #6487fa 100%);
        -webkit-background-clip: text; /* Aplicar el background-clip en navegadores basados en WebKit */
        background-clip: text; /* Clip del background al texto */
    }

    svg{
        color: #7b86e9;
    }
    
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: block;
`;