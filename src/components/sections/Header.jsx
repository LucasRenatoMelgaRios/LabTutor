import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa"; // Importa el ícono de React Icons

export const Header = () => {
    const navigate = useNavigate();

    return (
        <>
            <MainContainer>
                <TitleContainer>
                    <img src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/625d6f41-519c-4d72-adf9-382db270fbf5/thumb_man_coding_app_square.png" alt="LabTutor Logo" />
                    <p>LabTutor</p>
                </TitleContainer>
                <ButtonContainer>
                    <NotesButton onClick={() => navigate('/notas')}>
                        <FaClipboardList size={20} />
                        Notas
                    </NotesButton>
                </ButtonContainer>
            </MainContainer>
        </>
    );
}

const MainContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between; /* Ajusta para separar el título del botón */
    padding: 20px;
    background-color: #d1eeea;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    img{
        width: 50px; /* Ajusta el tamaño del logo */
        border-radius: 10px;
    }

    p{
        font-size: 1.5rem;
        font-weight: bold;
        color: #333;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`;

const NotesButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #005a6d;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
        background-color: #004a5a;
    }

    svg {
        margin-right: 5px;
    }
`;
