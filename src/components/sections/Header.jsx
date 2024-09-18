import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaClipboardList, FaBars, FaTimes, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaUserAlt, FaCoins } from "react-icons/fa"; // Icono de usuario y monedas
import { BiSolidCoinStack } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { LuStore } from "react-icons/lu";

import axios from 'axios'; // Para hacer la consulta a la API
import { GiPapers } from "react-icons/gi";
import { MdForum } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useAuth } from "../../context/AuthContext";
import { ImExit } from "react-icons/im";
import logo from "../../assets/logo.png"

export const Header = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // Controla la visibilidad del modal
    const [userData, setUserData] = useState(null);
    const [showBubble, setShowBubble] = useState(false); // Controla la visibilidad del mensaje burbuja

    const [isForumsOpen, setIsForumsOpen] = useState(false);
    const logoRef = useRef(null);
    const menuIconRef = useRef(null);
    const modalRef = useRef(null);
    const bubbleRef = useRef(null); // Referencia para la burbuja

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
        toggleMenu();
    };

    const forumLinks = Array.from({ length: 9 }, (_, i) => i + 1);

    const getExperienceMax = (nivel) => nivel * 100;

    const fetchUserData = async () => {
        try {
            const response = await axios.get('https://66ca61e159f4350f064f0e88.mockapi.io/api/labtutor/users');
            const currentUser = response.data.find(u => u.id === user?.id);
            setUserData(currentUser);
        } catch (error) {
            console.error('Error al obtener los datos del usuario:', error);
        }
    };

    useEffect(() => {
        if (user) {
            fetchUserData();
        }
    }, [user]);

    useEffect(() => {
        gsap.fromTo(logoRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        gsap.fromTo(menuIconRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.75)" }
        );
    }, []);

    // Mostrar el mensaje burbuja solo en pantallas pequeñas la primera vez
    useEffect(() => {
        if (window.innerWidth <= 768 && !localStorage.getItem("mobileStatsBubbleSeen")) {
            setShowBubble(true);
            gsap.fromTo(bubbleRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 });
        }
    }, []);

    const toggleModal = () => {
        if (!isModalOpen) {
            setIsModalOpen(true);
            setTimeout(() => {
                gsap.fromTo(
                    modalRef.current,
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
                );
            }, 0);
        } else {
            gsap.to(modalRef.current, {
                scale: 0,
                opacity: 0,
                duration: 0.5,
                ease: "back.in(1.7)",
                onComplete: () => setIsModalOpen(false),
            });
        }
    };

    useEffect(() => {
        if (logoRef.current) {
            // Asegúrate de que el ref no sea null
            gsap.fromTo(
                logoRef.current,
                { opacity: 0, y: -20 }, // Estado inicial
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" } // Estado final
            );
        }

        if (menuIconRef.current) {
            // Asegúrate de que el ref no sea null
            gsap.fromTo(
                menuIconRef.current,
                { opacity: 0, scale: 0.8 }, // Estado inicial
                { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.75)" } // Estado final
            );
        }
    }, []);
    
    // Función para ocultar el mensaje burbuja y guardarlo en localStorage
    const closeBubble = () => {
        setShowBubble(false);
        localStorage.setItem("mobileStatsBubbleSeen", "true");
    };

    if (!userData) {
        return null;
    }

    const { nombre, monedas, nivel, experiencia } = userData;
    const experienciaMax = getExperienceMax(nivel);

    return (
        <>
            <MainContainer>
                <TitleContainer onClick={() => navigate('/home')} ref={logoRef}>
                    <img src={logo} alt="LabTutor Logo" />
                    <p>LabTutor</p>
                </TitleContainer>

                {/* Stats del usuario solo visibles en pantallas grandes */}
                <DesktopMenu>
                    <StatsContainer>
                        <UserInfo>
                            <FaUserAlt size={20} />
                            <span>{nombre}</span>
                        </UserInfo>

                        <StatItem>
                            <FaCoins size={20} style={{ marginRight: '5px', color: '#382fb3' }} />
                            <StatValue>{monedas}</StatValue>
                        </StatItem>

                        <StatItem>
                            <span>Nivel:</span> <StatValue>{nivel}</StatValue>
                        </StatItem>

                        <StatItem>
                            <ProgressBarContainer>
                                <ProgressBar>
                                    <ProgressFill style={{ width: `${(experiencia / experienciaMax) * 100}%` }} />
                                </ProgressBar>
                                <ExpDetails>{experiencia} / {experienciaMax} XP</ExpDetails>
                            </ProgressBarContainer>
                        </StatItem>
                    </StatsContainer>
                </DesktopMenu>

                {/* Botón de usuario visible solo en pantallas pequeñas */}
                <MobileUserButton onClick={toggleModal}>
                    <FaUserAlt size={24} />
                    {/* Mensaje burbuja visible solo si no se ha mostrado antes */}
                    {showBubble && (
                        <BubbleMessage ref={bubbleRef}>
                            Toca aquí para ver tus estadísticas!
                            <CloseBubbleButton onClick={closeBubble}>✕</CloseBubbleButton>
                        </BubbleMessage>
                    )}
                </MobileUserButton>

                {/* Menú de hamburguesa */}
                <MenuIcon onClick={toggleMenu} ref={menuIconRef}>
                    <FaBars size={24} />
                </MenuIcon>

                {/* Modal con las estadísticas del usuario */}
                {isModalOpen && (
                    <ModalBackdrop onClick={toggleModal}  ref={modalRef} >
                        <Modal ref={modalRef} onClick={(e) => e.stopPropagation()}>
                            <p><strong>Monedas:</strong> {monedas} <BiSolidCoinStack color="#00cedd"/>
                            </p>
                            <p><strong>Nivel:</strong> {nivel}<FaStar color="#00cedd" />
                            </p>
                            <p><strong>Experiencia:</strong> {experiencia} / {experienciaMax} XP</p>
                            <ProgressBarContainer>
                                <ProgressBar>
                                    <ProgressFill style={{ width: `${(experiencia / experienciaMax) * 100}%` }} />
                                </ProgressBar>
                            </ProgressBarContainer>
                            <CloseModalButton onClick={toggleModal}>Cerrar</CloseModalButton>
                        </Modal>
                    </ModalBackdrop>
                )}

                <SideMenu isOpen={isOpen}>
                    <CloseButton onClick={toggleMenu}>
                        <FaTimes size={24} />
                    </CloseButton>

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
                    <DropdownItem onClick={() => handleNavigation('/emojisStore')}>
                        <FlexContainer>
                        <LuStore size={20} />
                        <span>Tienda</span>
                        </FlexContainer>
                    </DropdownItem>

                    {/* Foros */}
                    <DropdownItem onClick={toggleForums}>
                        <FlexContainer>
                            <MdForum size={20} />
                            <span>Foros</span>
                            {isForumsOpen ? <FaAngleUp size={16} /> : <FaAngleDown size={16} />}
                        </FlexContainer>
                    </DropdownItem>
                    <SubMenu isOpen={isForumsOpen}>
                        {forumLinks.map((forum) => (
                            <DropdownItem key={forum} onClick={() => handleNavigation(`/foro/${forum}`)}>
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
            </MainContainer>
        </>
    );
};
// Estilos

const MainContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: clamp(10px, 2vw, 20px);
    background-color: #b2ebf2;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    align-items: center;
    position: relative;
    z-index: 1000;
    background: linear-gradient(90deg, #15d1c1 0%, #6487fa 100%);
`;

const MobileUserButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    
    svg {
        font-size: clamp(20px, 3vw, 24px);
        color: #ffffff;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1500;
`;

const Modal = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const CloseModalButton = styled.button`
    background-color: #15d1c1;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0bb4a5;
    }
`;
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: #ffffff;

    img {
        width: clamp(30px, 5vw, 50px);
        border-radius: 10px;
    }

    p {
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        font-weight: bold;
    }
`;

const StatsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const StatItem = styled.div`
    display: flex;
    align-items: center;
    font-size: clamp(0.9rem, 1.5vw, 1.2rem);
    color: #ffffff;
    font-weight: bold;

    span {
        margin-right: 5px;
    }
`;

const StatValue = styled.span`
    font-size: clamp(1rem, 1.5vw, 1.3rem);
    color: #342ac9;
`;

const DesktopMenu = styled.div`
    display: none;
    
    @media (min-width: 768px) {
        display: flex;
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
    width: 200px;
    background: linear-gradient(20deg, #15d1c1 0%, #6487fa 100%);
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
    box-sizing: border-box;
    z-index: 1500;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
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

const ProgressBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
`;

const ProgressFill = styled.div`
    height: 100%;
    background-color: #76c7c0;
    transition: width 0.3s ease-in-out;
`;

const ExpDetails = styled.span`
    font-size: clamp(0.8rem, 1.2vw, 1rem);
    color: #ffffff;
    margin-top: 5px;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    color: #ffffff;
    font-weight: bold;

    span {
        margin-left: 8px;
    }

    svg {
        color: #ffffff;
    }
`;


const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px; /* Espacio entre el icono y el texto */
`;

//Mensaje de novedad


const BubbleMessage = styled.div`
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ffffff;
    color: #333;
    padding: 8px 12px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    font-size: 0.9rem;
    text-align: center;
    z-index: 1600;

    &:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        border-width: 10px;
        border-style: solid;
        border-color: #ffffff transparent transparent transparent;
    }
`;

const CloseBubbleButton = styled.button`
    background: none;
    border: none;
    color: #333;
    font-size: 0.9rem;
    margin-left: 8px;
    cursor: pointer;
`;

