import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaClipboardList, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext"; // Ensure you import the auth context
import { ImExit } from "react-icons/im";

export const Header = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
        toggleMenu(); // Close the menu after navigation
    };

    return (
        <>
            <MainContainer>
                <TitleContainer onClick={() => navigate('/')}>
                    <img src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/625d6f41-519c-4d72-adf9-382db270fbf5/thumb_man_coding_app_square.png" alt="LabTutor Logo" />
                    <p>LabTutor</p>
                </TitleContainer>
                <MenuIcon onClick={toggleMenu}>
                    <FaBars size={24} />
                </MenuIcon>
                <SideMenu isOpen={isOpen}>
                    <CloseButton onClick={toggleMenu}>
                        <FaTimes size={24} />
                    </CloseButton>
                    <DropdownItem onClick={() => handleNavigation('/notas')} >
                        <FaClipboardList size={20} />
                        Notas
                    </DropdownItem>
                    <DropdownItem onClick={() => {
                        logout();
                        toggleMenu(); // Close the menu after logout
                    }}>
                        <ImExit />
                        Cerrar sesión
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
    background-color: #d1eeea;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    align-items: center;
    box-sizing: border-box;
    position: relative;
    z-index: 1000;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    img {
        width: clamp(30px, 5vw, 50px); /* Responsive width for logo */
        border-radius: 10px;
    }

    p {
        font-size: clamp(1rem, 2.5vw, 1.5rem); /* Responsive font size */
        font-weight: bold;
        color: #333;
    }
`;

const MenuIcon = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;

    svg {
        font-size: clamp(24px, 3vw, 30px);
        color: #333;
    }
`;

// Menú lateral que cubre el 100% del alto de la pantalla
const SideMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 200px;
    background-color: #ffffff;
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

// Botón para cerrar el menú
const CloseButton = styled.div`
    align-self: flex-end; /* Alinea el botón al final */
    margin-bottom: 20px; /* Espacio debajo del botón */
    cursor: pointer;

    svg {
        font-size: clamp(24px, 3vw, 30px);
        color: #333;
        transition: color 0.3s ease;

        &:hover {
            color: #ff5f5f; /* Cambio de color en hover */
        }
    }
`;

// Estilos para los ítems del menú
const DropdownItem = styled.div`
    padding: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: clamp(1rem, 2vw, 1.5rem);
    color: #333;
    width: 100%;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #e0f4f4;
        transform: translateX(5px);
    }

    svg {
        font-size: clamp(16px, 2.5vw, 20px);
        color: #007a7a;
    }
`;

// Fondo oscuro que aparece detrás del menú
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

