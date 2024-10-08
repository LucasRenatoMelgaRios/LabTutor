import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { FaSmile } from "react-icons/fa"; // Icono de emoji
import emoji1 from "../../assets/emojis/emoji1.png";
import emoji2 from "../../assets/emojis/emoji2.png";
import emoji3 from "../../assets/emojis/emoji3.png";
import emoji4 from "../../assets/emojis/emoji4.png";
import emoji5 from "../../assets/emojis/emoji5.png";
import emoji6 from "../../assets/emojis/emoji6.png";
import emoji7 from "../../assets/emojis/emoji7.png";
import emoji8 from "../../assets/emojis/emoji8.png";
import emoji9 from "../../assets/emojis/emoji9.png";
export const ThirdClassForum = () => {
    const { user } = useAuth();
    const [comments, setComments] = useState([]);
    const [replyingTo, setReplyingTo] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [acquiredEmojis, setAcquiredEmojis] = useState([]);
  
    const inputRef = useRef(); 
  
    const API_COMMENTS_URL = "https://66ca61e159f4350f064f0e88.mockapi.io/api/labtutor/comentarios";
    const API_USER_URL = "https://66ca61e159f4350f064f0e88.mockapi.io/api/labtutor/users"; 
  
    useEffect(() => {
      const fetchComments = async () => {
        try {
          const response = await axios.get(API_COMMENTS_URL);
          setComments(response.data.filter(comment => comment.preguntaId === 3));
        } catch (error) {
          console.error("Error al obtener comentarios:", error);
        }
      };
      fetchComments();
    }, []);
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`${API_USER_URL}/${user.id}`); 
          const userEmojis = response.data.emojisComprados; 
          setAcquiredEmojis(userEmojis); 
        } catch (error) {
          console.error("Error al obtener datos del usuario:", error);
        }
      };
  
      fetchUserData();
    }, [user.id]); 
  
    const handleAddComment = async () => {
      const commentText = inputRef.current.innerHTML.trim(); 
      if (!commentText) {
        setErrorMessage("El comentario no puede estar vacío.");
        return;
      }
  
      const commentWithEmojis = extractEmojis(commentText);
  
      const comment = {
        author: user.nombre,
        content: commentWithEmojis,
        date: new Date().toLocaleString(),
        replies: [],
        preguntaId: 3,
      };
      try {
        const response = await axios.post(API_COMMENTS_URL, comment);
        setComments([response.data, ...comments]);
        inputRef.current.innerHTML = ""; 
        setErrorMessage("");
        setShowEmojiPicker(false);
      } catch (error) {
        console.error("Error al agregar comentario:", error);
      }
    };
  
    const handleAddReply = async (commentId, replyContent) => {
      if (!replyContent.trim()) {
        setErrorMessage("La respuesta no puede estar vacía.");
        return;
      }
  
      const commentToUpdate = comments.find(comment => comment.id === commentId);
      const updatedComment = {
        ...commentToUpdate,
        replies: [
          ...commentToUpdate.replies,
          {
            author: user.nombre,
            content: replyContent,
            date: new Date().toLocaleString(),
          }
        ]
      };
  
      try {
        const response = await axios.put(`${API_COMMENTS_URL}/${commentId}`, updatedComment);
        setComments(comments.map(comment => comment.id === commentId ? response.data : comment));
        setReplyingTo(null);
        setErrorMessage("");
      } catch (error) {
        console.error("Error al agregar respuesta:", error);
      }
    };
  
    const customEmojis = [
      { id: 1, src: emoji1, name: ":emoji1:" },
      { id: 2, src: emoji2, name: ":emoji2:" },
      { id: 3, src: emoji3, name: ":emoji3:" },
      { id: 4, src: emoji4, name: ":emoji4:" },
      { id: 5, src: emoji5, name: ":emoji5:" },
      { id: 6, src: emoji6, name: ":emoji6:" },
      { id: 7, src: emoji7, name: ":emoji7:" },
      { id: 8, src: emoji8, name: ":emoji8:" },
      { id: 9, src: emoji9, name: ":emoji9:" },
    ];
  
    const filteredEmojis = customEmojis.filter(emoji => acquiredEmojis.includes(emoji.id));
  
    const onCustomEmojiClick = (emoji) => {
      const imgTag = `<img src="${emoji.src}" alt="${emoji.name}" class="custom-emoji"/>`;
      inputRef.current.innerHTML += imgTag; 
      handleInputChange(); 
    };
  
    const handleInputChange = () => {
      const currentInput = inputRef.current.innerHTML;
      let updatedInput = currentInput;
  
      customEmojis.forEach(emoji => {
        const regex = new RegExp(`(${emoji.name})`, "g"); 
        updatedInput = updatedInput.replace(regex, imgTag); 
      });
  
      inputRef.current.innerHTML = updatedInput; 
      placeCaretAtEnd(inputRef.current); 
    };
  
    const placeCaretAtEnd = (el) => {
      el.focus();
      const range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    };
  
    const extractEmojis = (htmlText) => {
      let extractedText = htmlText;
      customEmojis.forEach(emoji => {
        const regex = new RegExp(`<img[^>]*alt="${emoji.name}"[^>]*>`, "g");
        extractedText = extractedText.replace(regex, emoji.name);
      });
      return extractedText;
    };
  
    const renderWithEmojis = (text) => {
      let formattedText = text;
      customEmojis.forEach(emoji => {
        const regex = new RegExp(emoji.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "g");
        formattedText = formattedText.replace(regex, `<img src="${emoji.src}" alt="${emoji.name}" class="custom-emoji"/>`);
      });
      return formattedText;
    };
  
    return (
      <MainContainer>
        <QuestionContainer>
          <QuestionBox>
            <h2>¿Cuáles son los errores más comunes que pueden ocurrir durante la recolección de orina y cómo se pueden evitar?</h2>
            <p>Escribe tu respuesta y abre debate con tus compañeros.</p>
          </QuestionBox>
  
          <CommentsSection>
            <CommentForm>
              <TextAreaContainer>
                <EditableInput
                  ref={inputRef}
                  contentEditable="true"
                  placeholder="Escribe un comentario..."
                  onInput={handleInputChange} 
                />
                <EmojiButton onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                  <FaSmile size={24} />
                </EmojiButton>
              </TextAreaContainer>
              {showEmojiPicker && (
                <EmojiPickerContainer>
                  {filteredEmojis.length > 0 ? (
                    filteredEmojis.map((emoji) => (
                      <CustomEmojiButton key={emoji.id} onClick={() => onCustomEmojiClick(emoji)}>
                        <img src={emoji.src} alt={emoji.name} />
                      </CustomEmojiButton>
                    ))
                  ) : (
                    <p>Compra emojis en la tienda!</p>
                  )}
                </EmojiPickerContainer>
              )}
              {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
              <SubmitButton onClick={handleAddComment}>Enviar</SubmitButton>
            </CommentForm>
  
            {comments.map(comment => (
              <Comment key={comment.id}>
                <CommentHeader>
                  <UserName>{comment.author}</UserName>
                  <CommentDate>{comment.date}</CommentDate>
                </CommentHeader>
                <CommentBody dangerouslySetInnerHTML={{ __html: renderWithEmojis(comment.content) }} />
                <ReplyButton onClick={() => setReplyingTo(comment.id)}>Responder</ReplyButton>
  
                <RepliesContainer>
                  {comment.replies.map((reply, index) => (
                    <Reply key={index}>
                      <CommentHeader>
                        <UserName>{reply.author}</UserName>
                        <CommentDate>{reply.date}</CommentDate>
                      </CommentHeader>
                      <CommentBody dangerouslySetInnerHTML={{ __html: renderWithEmojis(reply.content) }} />
                    </Reply>
                  ))}
                </RepliesContainer>
  
                {replyingTo === comment.id && (
                  <CommentForm>
                    <textarea
                      placeholder="Escribe una respuesta..."
                      onBlur={(e) => handleAddReply(comment.id, e.target.value)}
                    />
                    <SubmitButton onClick={() => handleAddReply(comment.id, inputRef.current.innerHTML)}>Responder</SubmitButton>
                  </CommentForm>
                )}
              </Comment>
            ))}
          </CommentsSection>
        </QuestionContainer>
      </MainContainer>
    );
  };

// Styled Components
const MainContainer = styled.section`
  width: 100%;
  background-color: #f9fbfc;
  display: flex;
  justify-content: center;
  position: relative; /* Asegura que el contenedor principal sea relativo */
`;

const QuestionContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 15px;
  padding: clamp(20px, 3vw, 30px);
`;

const QuestionBox = styled.div`
  margin-bottom: clamp(20px, 3vw, 30px);

  h2 {
    font-size: clamp(24px, 4vw, 28px); 
    color: #333;
    font-weight: bold;
  }

  p {
    font-size: clamp(16px, 2.5vw, 18px);
    color: #666;
  }
`;

const CommentsSection = styled.div`
  margin-top: clamp(20px, 4vw, 30px);
`;

const CommentForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: clamp(20px, 4vw, 30px);
  width: 100%;
  position: relative; /* Asegura que el formulario sea relativo */
`;

const TextAreaContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d1eeea;
  border-radius: 10px;
  padding: 10px;
  background-color: #f9fbfc;
  position: relative;
  min-height: 40px;
  max-height: 150px;
  overflow-y: auto;

  img.custom-emoji {
    width: 20px; /* Tamaño de emoji en el input */
    height: 20px;
    vertical-align: middle;
  }
`;

const EditableInput = styled.div`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  padding: 10px;
  font-size: clamp(14px, 2.5vw, 16px);
  min-height: 40px;
  max-height: 150px;
  overflow-y: auto;

  &:empty::before {
    content: attr(placeholder);
    color: #999;
  }
`;

const EmojiButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #3498db;
  margin-left: 10px;
`;

const EmojiPickerContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50px;
  z-index: 100;
  background-color: #fff;
  border: 1px solid #d1eeea;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  max-height: 200px;
  overflow-y: auto;
`;



const SubmitButton = styled.button`
  align-self: flex-end;
  padding: clamp(8px, 2vw, 12px) clamp(16px, 3vw, 24px);
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: clamp(12px, 2vw, 14px);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const ErrorLabel = styled.label`
  color: red;
  font-size: clamp(12px, 2vw, 14px);
  margin-bottom: 10px;
`;



const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: clamp(5px, 1vw, 10px);
`;

const UserName = styled.span`
  font-weight: bold;
  color: #333;
  font-size: clamp(14px, 2.5vw, 16px);
`;

const CommentDate = styled.span`
  font-size: clamp(12px, 2vw, 14px);
  color: #888;
`;

const CommentBody = styled.div`
  font-size: clamp(14px, 2.5vw, 16px);
  color: #555;
  margin-bottom: 10px;

  img.custom-emoji {
    width: 20px;
    height: 30px;
    vertical-align: middle;
  }
`;

const ReplyButton = styled.button`
  background-color: transparent;
  border: none;
  color: #3498db;
  cursor: pointer;
  font-size: clamp(12px, 2vw, 14px);

  &:hover {
    color: #2980b9;
    text-decoration: underline;
  }
`;

const RepliesContainer = styled.div`
  margin-top: 10px;
  padding-left: clamp(10px, 3vw, 20px); 
  border-left: 2px solid #d1eeea;
`;

const Reply = styled.div`
  margin-bottom: clamp(10px, 2vw, 20px);
  background-color: #f5f5f5;
  padding: clamp(8px, 2vw, 12px);
  border-radius: 5px;
  border: 1px solid #d1eeea;

  img.custom-emoji {
    width: 20px;
    height: 30px;
    vertical-align: middle;
  }
`;

const Comment = styled.div`
  margin-bottom: clamp(10px, 2vw, 20px);
  padding: clamp(15px, 2vw, 20px);
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #d1eeea;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  img.custom-emoji {
    width: 20px;
    height: 30px;
    vertical-align: middle;
  }
`;

const CustomEmojiButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;

  &:hover {
    background-color: #f0f0f0;
  }

  img {
    width: 20px;
    height: 30px;
  }
`;