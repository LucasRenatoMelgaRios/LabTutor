import styled from "styled-components";

export const ThirdClassPage = () => {
    return (
        <ClassContainer>
            <ClassTitle>Clase Adicional</ClassTitle>
            <ClassImage src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/625d6f41-519c-4d72-adf9-382db270fbf5/thumb_man_coding_app_square.png" alt="Clase Adicional" />
            <ClassContent>
                <p>En esta clase adicional, se cubrirán temas avanzados en el área...</p>
                <VideoContainer>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/VIDEO_ID" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </VideoContainer>
                <p>Información complementaria y referencias...</p>
            </ClassContent>
        </ClassContainer>
    );
};

// Utiliza los mismos estilos definidos anteriormente
const ClassContainer = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
`;

const ClassTitle = styled.h1`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
`;

const ClassImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
`;

const ClassContent = styled.div`
    font-size: 1.2rem;
    color: #666;
    line-height: 1.6;
`;

const VideoContainer = styled.div`
    margin: 20px 0;
    iframe {
        width: 100%;
        height: 315px;
    }
`;