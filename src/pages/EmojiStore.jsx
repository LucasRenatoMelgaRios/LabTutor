import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import axios from 'axios';
import { useAuth } from "../context/AuthContext"; // Obtener usuario del contexto
import emoji1 from "../assets/emojis/emoji1.png";
import emoji2 from "../assets/emojis/emoji2.png";
import emoji3 from "../assets/emojis/emoji3.png";
import emoji4 from "../assets/emojis/emoji4.png";
import emoji5 from "../assets/emojis/emoji5.png";
import emoji6 from "../assets/emojis/emoji6.png";
import emoji7 from "../assets/emojis/emoji7.png";
import emoji8 from "../assets/emojis/emoji8.png";
import emoji9 from "../assets/emojis/emoji9.png";
import { FaCoins, FaQuestionCircle } from 'react-icons/fa';

const emojiData = [
  { id: 1, name: 'Cool guy', price: '100', image: emoji1 },
  { id: 2, name: 'Lawren', price: '150', image: emoji2 },
  { id: 3, name: 'Robert', price: '120', image: emoji3 },
  { id: 4, name: 'Andy', price: '130', image: emoji4 },
  { id: 5, name: 'Robert', price: '170', image: emoji5 },
  { id: 6, name: 'Emily', price: '170', image: emoji6 },
  { id: 7, name: 'Machine', price: '170', image: emoji7 },
  { id: 8, name: 'Machine', price: '170', image: emoji8 },
  { id: 9, name: 'Glass', price: '170', image: emoji9 },
];

export const EmojiStore = ( {updateEmojis} ) => {
  const storeRef = useRef(null);
  const infoIconRef = useRef(null);
  const [showInfo, setShowInfo] = useState(false);
  const [popUpPosition, setPopUpPosition] = useState({ top: 0, left: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null); // Estado para el emoji seleccionado
  const [showModal, setShowModal] = useState(false); // Estado para mostrar/ocultar el modal de confirmación de compra
  const [showInsufficientFundsModal, setShowInsufficientFundsModal] = useState(false); // Estado para mostrar/ocultar el modal de fondos insuficientes
  const [emojisComprados, setEmojisComprados] = useState([]); // Estado para almacenar los emojis comprados

  const { user } = useAuth(); // Obtenemos el usuario autenticado desde el AuthContext

  // Función que detecta si es desktop o móvil según la resolución
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsDesktop(true); // Es desktop
    } else {
      setIsDesktop(false); // Es móvil
    }
  };

  useEffect(() => {
    gsap.fromTo(
      storeRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power3.out' }
    );

    handleResize(); // Detectar al cargar la página
    window.addEventListener('resize', handleResize); // Detectar al cambiar el tamaño de la ventana

    // Obtener la información del usuario al cargar la página
    const fetchUserData = async () => {
      try {
        if (user) { // Verificar si el usuario está autenticado
          const response = await axios.get(`https://66ca61e159f4350f064f0e88.mockapi.io/api/labtutor/users/${user.id}`);
          setEmojisComprados(response.data.emojisComprados || []); // Guardar los emojis comprados en el estado
        }
      } catch (error) {
        console.error('Error al obtener la información del usuario:', error);
      }
    };

    fetchUserData();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [user]); // Ejecutar el efecto solo cuando el usuario cambie

  const handleInfoClick = () => {
    if (infoIconRef.current) {
      const rect = infoIconRef.current.getBoundingClientRect();
      const top = rect.bottom + window.scrollY - 80; // Posicionado debajo del ícono
      let left = rect.left + window.scrollX;

      // Si hay menos espacio a la derecha, ajustamos la posición
      if (window.innerWidth - rect.right < 250) {
        left = window.innerWidth - 260; // Dejar un margen a la derecha
      }

      setPopUpPosition({ top, left });
    }

    setShowInfo(!showInfo);
  };

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji); // Guarda el emoji seleccionado en el estado
    setShowModal(true); // Muestra el modal de confirmación de compra
  };

  const handleConfirmPurchase = async () => {
    try {
        if (!user) return;

        const response = await axios.get(`https://66ca61e159f4350f064f0e88.mockapi.io/api/labtutor/users/${user.id}`);
        const userData = response.data;

        if (userData.monedas >= selectedEmoji.price) {
            const updatedEmojis = [...userData.emojisComprados, selectedEmoji.id];
            const updatedMonedas = userData.monedas - selectedEmoji.price;

            await axios.put(`https://66ca61e159f4350f064f0e88.mockapi.io/api/labtutor/users/${user.id}`, {
                emojisComprados: updatedEmojis,
                monedas: updatedMonedas,
            });

            setEmojisComprados(updatedEmojis);
            updateEmojis(updatedEmojis); // Asegúrate de llamar a esta función
            setShowModal(false);
        } else {
            setShowModal(false);
            setShowInsufficientFundsModal(true);
        }
    } catch (error) {
        console.error('Error al confirmar la compra:', error);
    }
};

  const handleCancelPurchase = () => {
    setShowModal(false); // Cierra el modal de confirmación de compra
  };

  const handleCloseInsufficientFundsModal = () => {
    setShowInsufficientFundsModal(false); // Cierra el modal de fondos insuficientes
  };

  return (
    <StoreContainer>
      <HeaderContainer>
        <h1>Tienda de coleccionables</h1>
        <InfoIcon 
          ref={infoIconRef} 
          onMouseEnter={() => isDesktop && setShowInfo(true)}  // Solo mostrar en hover si es desktop
          onMouseLeave={() => isDesktop && setShowInfo(false)} 
          onClick={() => !isDesktop && handleInfoClick()} // Si es móvil, usar click
        >
          <FaQuestionCircle size={24} />
        </InfoIcon>

        {showInfo && (
          <PopUpContainer style={{ top: popUpPosition.top, left: popUpPosition.left }}>
            <PopUpText>
              Compra coleccionables para usarlos en foros y personalizar tu perfil.
            </PopUpText>
          </PopUpContainer>
        )}
      </HeaderContainer>

      <EmojiGrid ref={storeRef}>
        {emojiData.map((emoji) => {
          const isPurchased = emojisComprados.includes(emoji.id);
          return (
            <EmojiCard
              key={emoji.id}
              onMouseEnter={(e) => !isPurchased && gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 })}
              onMouseLeave={(e) => !isPurchased && gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })}
              onClick={() => !isPurchased && handleEmojiClick(emoji)} // Deshabilitar el click si está comprado
              style={{
                opacity: isPurchased ? 0.5 : 1, // Apagar la tarjeta si está comprada
                cursor: isPurchased ? 'not-allowed' : 'pointer' // Cambiar el cursor si está comprada
              }}
            >
              <EmojiImage src={emoji.image} alt={emoji.name} />
              <EmojiInfo>
                <EmojiName>{emoji.name}</EmojiName>
                <EmojiPrice>
                  {emoji.price} <FaCoins />
                </EmojiPrice>
                {isPurchased && <PurchasedLabel>Comprado!</PurchasedLabel>} {/* Etiqueta de comprado */}
              </EmojiInfo>
            </EmojiCard>
          );
        })}
      </EmojiGrid>

      {/* Modal de confirmación de compra */}
      {showModal && (
        <ModalOverlay>
          <ModalContainer>
            <h2>Confirmar compra</h2>
            <p>¿Deseas comprar el emoji "{selectedEmoji.name}" por {selectedEmoji.price} monedas?</p>
            <ButtonGroup>
              <ConfirmButton onClick={handleConfirmPurchase}>Confirmar</ConfirmButton>
              <CancelButton onClick={handleCancelPurchase}>Cancelar</CancelButton>
            </ButtonGroup>
          </ModalContainer>
        </ModalOverlay>
      )}

      {/* Modal de fondos insuficientes */}
      {showInsufficientFundsModal && (
        <ModalOverlay>
          <InsufficientFundsModal>
            <h2>Fondos insuficientes</h2>
            <p>No tienes suficientes monedas para comprar este emoji.</p>
            <ButtonGroup>
              <WarningButton onClick={handleCloseInsufficientFundsModal}>Cerrar</WarningButton>
            </ButtonGroup>
          </InsufficientFundsModal>
        </ModalOverlay>
      )}
    </StoreContainer>
  );
}

//COnfirm purchase modal

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ConfirmButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const CancelButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

const PurchasedLabel = styled.div`
  background: #d4edda;
  color: #155724;
  border-radius: 5px;
  padding: 5px;
  font-size: 12px;
  margin-top: 5px;
`;


// Styled components
const StoreContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  text-align: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;

  h1 {
    color: #4a90e2;
    margin-right: 10px;
  }
`;

const InfoIcon = styled.div`
  cursor: pointer;
  color: #4a90e2;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffb74d;
  }
`;

// Pop-up en forma de globo de texto
const PopUpContainer = styled.div`
  position: absolute;
  width: 250px;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;

  /* Estilo de globo de historieta */
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: 20px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
  }

  @media (max-width: 730px) {
    width: 200px; /* Ajuste para pantallas pequeñas */
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

const PopUpText = styled.p`
  font-size: 1rem;
  color: #333;
  text-align: left;
`;

const EmojiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
`;

const EmojiCard = styled.div`
  position: relative;
  background: linear-gradient(145deg, #babcff, #9fd5e6);
  border-radius: 15px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #ddd;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    z-index: 0;
    pointer-events: none;
    background: linear-gradient(145deg, #59e4ee, transparent) no-repeat;
    background-size: 300% 300%;
    animation: neonBorder 2s linear infinite;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  @keyframes neonBorder {
    0% {
      background-position: 0% 50%;
    }
    25% {
      background-position: 100% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    75% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

const EmojiImage = styled.img`
  width: 30px;
  height: 50px;
  margin-bottom: 10px;
`;

const EmojiInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmojiName = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 5px;
`;

const EmojiPrice = styled.p`
  font-size: 1rem;
  color: #4d77ff;
  font-weight: bold;
`;


const InsufficientFundsModal = styled(ModalContainer)`
  background: #fff3cd;
  color: #856404;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WarningButton = styled.button`
  background-color: #ffc107;
  color: #212529;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e0a800;
  }
`;
