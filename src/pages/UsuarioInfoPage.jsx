import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useAuth } from "../context/AuthContext";

export const UsuarioInfoPage = () => {
    const [usuario, setUsuario] = useState(null);
    const [nuevoCodigo, setNuevoCodigo] = useState('');
    const { user } = useAuth(); // Obtén el usuario desde el contexto

    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                const response = await axios.get(`https://66ca61e159f4350f064f0e88.mockapi.io/api/labtutor/users/${user.id}`);
                setUsuario(response.data);
            } catch (error) {
                console.error('Error al obtener los datos del usuario', error);
            }
        };

        fetchUsuario();
    }, [user.id]); // Dependencia del ID del usuario

    const handleCambioCodigo = async () => {
        try {
            await axios.put(`https://66ca61e159f4350f064f0e88.mockapi.io/api/labtutor/users/${usuario.id}`, {
                codigo: nuevoCodigo
            });
            alert('Código de usuario cambiado exitosamente');
            setNuevoCodigo('');
            setUsuario((prev) => ({ ...prev, codigo: nuevoCodigo }));
        } catch (error) {
            console.error('Error al cambiar el código de usuario', error);
        }
    };

    if (!usuario) {
        return <h1>Cargando...</h1>;
    }

    return (
        <Container>
            <Header>
                <h1>Perfil de Usuario con DNI:</h1>
                <GifsContainer>
                <img src="https://rule34.xxx/counter/7.gif" alt="" />
                <img src="https://rule34.xxx/counter/2.gif" alt="" />
                <img src="https://rule34.xxx/counter/9.gif" alt="" />
                <img src="https://rule34.xxx/counter/4.gif" alt="" />
                <img src="https://rule34.xxx/counter/9.gif" alt="" />
                <img src="https://rule34.xxx/counter/5.gif" alt="" />
                <img src="https://rule34.xxx/counter/3.gif" alt="" />
                <img src="https://rule34.xxx/counter/7.gif" alt="" />

                </GifsContainer>
       
            </Header>
            <ProfileSection>
                <h2>Información del Usuario</h2>
                <UserInfo>
                    <p><strong>Nombre:</strong> {usuario.nombre}</p>
                    <p><strong>DNI:</strong> {usuario.dni}</p>
                    <p><strong>Código de Usuario:</strong> {usuario.codigo}</p>
                    <p><strong>Monedas:</strong> {usuario.monedas}</p>
                    <p><strong>Experiencia:</strong> {usuario.experiencia}</p>
                    <p><strong>Nivel:</strong> {usuario.nivel}</p>
                </UserInfo>
                <ChangeCodeSection>
                    <h3>Cambiar Código de Usuario</h3>
                    <InputContainer>
                        <Input 
                            type="text" 
                            placeholder="Nuevo Código" 
                            value={nuevoCodigo} 
                            onChange={(e) => setNuevoCodigo(e.target.value)} 
                        />
                        <Button onClick={handleCambioCodigo}>Cambiar Código</Button>
                    </InputContainer>
                </ChangeCodeSection>
            </ProfileSection>
        </Container>
    );
};

// Styled components
const Container = styled.div`
    padding: clamp(20px, 5vw, 40px);
    margin: 0 auto;
    background: linear-gradient(90deg, #15d1c1 0%, #6487fa 100%);
    width: 100%;
    height: 100vh;
`;

const Header = styled.header`
    background: linear-gradient(90deg, #6487fa 0%, #15d1c1 100%);
    color: #fff;
    text-align: center;
    padding: clamp(20px, 5vw, 30px);
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-direction: column;
`;

const GifsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 50px;
        @media (max-width: 500px) {
            width: 40px;
        }

        @media (max-width: 410px) {
            width: 35px;
        }

        @media (max-width: 370px) {
            width: 30px;
        }

        @media (max-width: 320px) {
            width: 25px;
        }
    }
    

    
`;

const ProfileSection = styled.section`
    background-color: #fff;
    padding: clamp(20px, 5vw, 30px);
    border-radius: 0 0 10px 10px;
    margin-top: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const UserInfo = styled.div`
    margin-bottom: 20px;
    p {
        margin: clamp(10px, 1vw, 15px) 0; /* Espaciado entre líneas */
        font-size: clamp(1rem, 2vw, 1.2rem);
    }
`;

const ChangeCodeSection = styled.div`
    margin-top: 20px;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    padding: clamp(10px, 1vw, 15px);
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    flex: 1; /* Ocupa todo el espacio disponible */
    font-size: clamp(1rem, 2vw, 1.2rem);
`;

const Button = styled.button`
    padding: clamp(10px, 1vw, 15px);
    background-color: #004d65;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: clamp(1rem, 2vw, 1.2rem);

    &:hover {
        background-color: #003d55;
    }
`;

// Media Queries
const mediaQueries = `
  @media (max-width: 600px) {
    /* Ajustes para móviles */
    ${Container} {
      padding: 15px;
    }

    ${Header} {
      padding: 15px;
    }

    ${ProfileSection} {
      padding: 15px;
    }
    
    ${Input} {
      padding: 8px;
    }

    ${Button} {
      padding: 8px;
    }
  }

  @media (min-width: 601px) and (max-width: 800px) {
    /* Ajustes para tablets */
    ${Container} {
      padding: 20px;
    }

    ${Header} {
      padding: 20px;
    }

    ${ProfileSection} {
      padding: 20px;
    }
  }
`;

export default UsuarioInfoPage;
