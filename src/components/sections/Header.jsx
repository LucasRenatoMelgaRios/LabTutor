import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaClipboardList, FaBars, FaTimes, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { GiPapers } from "react-icons/gi";
import { MdForum } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useAuth } from "../../context/AuthContext";
import { ImExit } from "react-icons/im";
import logo from "../../assets/logo.png"

export const Header = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth(); // Obtener el usuario del contexto de autenticación
    const [isOpen, setIsOpen] = useState(false);
    const [isForumsOpen, setIsForumsOpen] = useState(false); // Estado para el submenú de foros
    const logoRef = useRef(null); // Referencia al logo
    const menuIconRef = useRef(null); // Referencia al ícono de menú (hamburguesa)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleForums = () => {
        setIsForumsOpen(!isForumsOpen);
    };

    const closeSubMenuForum = () => {
        setIsForumsOpen(false);
    };

    const handleNavigation = (path) => {
        navigate(path);
        toggleMenu(); // Cerrar el menú después de la navegación
    };

    const forumLinks = Array.from({ length: 9 }, (_, i) => i + 1); // Crea un array con números del 1 al 9

    // Animaciones con GSAP para la aparición del logo y menú
    useEffect(() => {
        gsap.fromTo(logoRef.current,
            { opacity: 0, y: -20 }, // Estado inicial: oculto y desplazado hacia arriba
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" } // Aparece con desplazamiento hacia abajo
        );

        gsap.fromTo(menuIconRef.current,
            { opacity: 0, scale: 0.8 }, // Estado inicial: oculto y más pequeño
            { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.75)" } // Aparece con efecto de rebote
        );
    }, []); // Solo se ejecuta cuando el componente carga

    return (
        <>
            <MainContainer>
                <TitleContainer onClick={() => navigate('/home')} ref={logoRef}>
                    <img src={logo} alt="LabTutor Logo" />
                    <p>LabTutor</p>
                </TitleContainer>
                <MenuIcon onClick={toggleMenu} ref={menuIconRef}>
                    <FaBars size={24} />
                </MenuIcon>
                <SideMenu isOpen={isOpen}>
                    <CloseButton onClick={() => {
                        toggleMenu();
                        closeSubMenuForum();
                    }}>
                        <FaTimes size={24} />
                    </CloseButton>

                    {/* Mostrar Notas o Notas Profesor dependiendo del ID del usuario */}
                    {user?.id === "51" ? (
                        <DropdownItem onClick={() => handleNavigation('/notasProfesor')}>
                            <FlexContainer>
                                <FaClipboardList size={20} />
                                <span>Registro</span>
                            </FlexContainer>
                        </DropdownItem>
                    ) : (
                        <DropdownItem onClick={() => handleNavigation('/notas')}>
                            <FlexContainer>
                                <FaClipboardList size={20} />
                                <span>Notas</span>
                            </FlexContainer>
                        </DropdownItem>
                    )}

                    <DropdownItem onClick={() => handleNavigation('/syllabus')}>
                        <FlexContainer>
                            <GiPapers size={20} />
                            <span>Syllabus</span>
                        </FlexContainer>
                    </DropdownItem>

                    {/* Foros */}
                    <DropdownItem onClick={toggleForums}>
                        <FlexContainer>
                            <MdForum size={20} />
                            <span>Foros</span>
                            {isForumsOpen ? <FaAngleUp size={16} /> : <FaAngleDown size={16} />} {/* Icono para abrir/cerrar */}
                        </FlexContainer>
                    </DropdownItem>
                    <SubMenu isOpen={isForumsOpen}>
                        {forumLinks.map((forum) => (
                            <DropdownItem style={{ fontSize: "1.2em", marginLeft: "25px" }} key={forum} onClick={() => handleNavigation(`/foro/${forum}`)}>
                                <FlexContainer>
                                    <span>Foro {forum}</span>
                                </FlexContainer>
                            </DropdownItem>
                        ))}
                    </SubMenu>

                    {/* Cerrar sesión */}
                    <DropdownItem onClick={() => {
                        logout();
                        toggleMenu();
                    }}>
                        <FlexContainer>
                            <ImExit size={30} />
                            <span>Cerrar sesión</span>
                        </FlexContainer>
                    </DropdownItem>
                </SideMenu>
                {isOpen && <Backdrop onClick={toggleMenu} />}
            </MainContainer>
        </>
    );
};


// Estilos para el contenedor principal
const MainContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: clamp(10px, 2vw, 20px); /* Responsive padding */
    background-color: #b2ebf2; /* Cambié el color del fondo para mejor armonía */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    align-items: center;
    box-sizing: border-box;
    position: relative;
    z-index: 1000;
    background: linear-gradient(90deg, #15d1c1 00%, #6487fa 100%); /* Degradado de verde agua a morado claro */

`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: #ffff;

    img {
        width: clamp(30px, 5vw, 50px); /* Responsive width for logo */
        border-radius: 10px;
        
    }

    p {
        font-size: clamp(1rem, 2.5vw, 1.5rem); /* Responsive font size */
        font-weight: bold;

    }
`;


const MenuIcon = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;

    svg {
        font-size: clamp(24px, 3vw, 30px);
        color: #ffffff;
    
    }
`;

const SideMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 220px;
    background: linear-gradient(20deg, #15d1c1 00%, #6487fa 100%); /* Degradado de verde agua a morado claro */
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    box-sizing: border-box;
    z-index: 1500;
    transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const CloseButton = styled.div`
    align-self: flex-end;
    margin-bottom: 20px;
    cursor: pointer;


    svg {
        font-size: clamp(24px, 3vw, 30px);
        color: #4543b8;
        transition: color 0.3s ease;

        &:hover {
            color: #3f60bb;
        }
    }
`;

const DropdownItem = styled.div`
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    cursor: pointer;
    font-size: clamp(1rem, 2vw, 1.5rem);
    color: #333;
    width: 100%;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.2s ease;
    color: #ffff;


    &:hover {
        transform: translateX(5px);
    }

    svg {
        font-size: clamp(16px, 2.5vw, 20px);
        color: #ffffff;
    }
`;

// Contenedor flex para alinear ícono y texto
const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px; /* Espacio entre el icono y el texto */
`;

// Añadimos animación suave al submenú
const SubMenu = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 20px;
    max-height: ${(props) => (props.isOpen ? '300px' : '0')}; /* Limitar la altura para activar el scroll */
    overflow-y: auto; /* Habilitar el scroll vertical */
    overflow-x: hidden;
    transition: max-height 0.4s ease-in-out; /* Añade una transición suave */
    scrollbar-width: thin; /* Hace que el scroll sea más delgado */
    scrollbar-color: #ccc #f1f1f1; /* Color del scroll */
    
    /* Estilos para el scrollbar en navegadores basados en WebKit (Chrome, Safari) */
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }
`;

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1400;
    cursor: pointer;
`;
