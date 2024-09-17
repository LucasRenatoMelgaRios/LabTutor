import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ClassesSection } from "../components/sections/ClassesSection";

export const HomePage = () => {
    const [showMessage, setShowMessage] = useState(true);
    const messageRef = useRef(null); // Referencia para el mensaje
    const backdropRef = useRef(null); // Referencia para el fondo oscurecido

    // Animación para mostrar el mensaje cuando el componente se monta
    useEffect(() => {
        if (showMessage) {
            gsap.fromTo(
                messageRef.current,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
            );

            gsap.to(backdropRef.current, { opacity: 0.5, duration: 0.8 }); // Oscurecer el fondo
        }
    }, [showMessage]);

    // Función para cerrar el mensaje con animación
    const handleCloseMessage = () => {
        gsap.to(messageRef.current, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: "back.in(1.7)",
            onComplete: () => setShowMessage(false), // Cerrar el mensaje después de la animación
        });

        gsap.to(backdropRef.current, { opacity: 0, duration: 0.5 }); // Restaurar el fondo
    };

    return (
        <>
            <MainContainer>
                {/* Mostrar el mensaje solo si está activo */}
                {showMessage && (
                    <>
                        {/* Fondo oscurecido */}
                        <Backdrop ref={backdropRef} />

                        <InfoMessage ref={messageRef}>
                            <MessageContent>
                                <h2>¡Novedad!</h2>
                                <p>
                                    Ahora puedes ganar <span>monedas</span> y subir de <span>nivel</span> acumulando{" "}
                                    <span>experiencia</span>. Usa las monedas para comprar cosas en la tienda y alcanzar
                                    nuevos logros. ¡Cada actividad te dará más experiencia para subir de nivel!
                                </p>
                                <Button onClick={handleCloseMessage}>Entendido</Button>
                            </MessageContent>
                        </InfoMessage>
                    </>
                )}
                <ClassesSection />
            </MainContainer>
        </>
    );
};

const MainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

// Estilos para el contenedor del mensaje
const InfoMessage = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: clamp(15px, 2vw, 40px);
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px 0;
  width: 100%;
  text-align: center;
  position: absolute;
  z-index: 1001;
  margin-top: 250px;

  @media (max-width: 768px) {
    max-width: 90%;
    margin-top: 150px;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    margin-top: 100px;
  }
`;

const MessageContent = styled.div`
  h2 {
    color: #4a90e2;
    margin-bottom: clamp(10px, 1vw, 20px);
    font-size: clamp(1.5rem, 2.5vw, 2rem);
  }

  p {
    color: #555;
    font-size: clamp(1rem, 1.5vw, 1.3rem);
    line-height: 1.5;
    margin-bottom: clamp(15px, 1vw, 20px);

    span {
      font-weight: bold;
      color: #ffb74d; /* Resalta monedas, niveles y experiencia */
    }
  }
`;

// Estilos para el botón
const Button = styled.button`
  background-color: #4a90e2;
  color: white;
  padding: clamp(10px, 1vw, 15px) clamp(20px, 2vw, 30px);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ab8;
  }
`;

// Fondo oscurecido
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.5s ease;
`;
