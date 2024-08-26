import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";

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
    justify-content: space-between;
    padding: clamp(10px, 2vw, 20px); /* Responsive padding */
    background-color: #d1eeea;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    align-items: center;
    box-sizing: border-box; /* Ensure padding is included in width */
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    img{
        width: clamp(30px, 5vw, 50px); /* Responsive width for logo */
        border-radius: 10px;
    }

    p{
        font-size: clamp(1rem, 2.5vw, 1.5rem); /* Responsive font size */
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
    padding: clamp(5px, 1vw, 10px) clamp(10px, 2vw, 20px); /* Responsive padding */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: clamp(0.8rem, 2vw, 1rem); /* Responsive font size */
    transition: background-color 0.3s;

    &:hover {
        background-color: #004a5a;
    }

    svg {
        font-size: clamp(16px, 2.5vw, 20px); /* Responsive icon size */
    }
`;
