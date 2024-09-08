import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { CiCalendarDate } from "react-icons/ci";
import { GiTeacher } from "react-icons/gi";
import { Link } from "react-router-dom";  // Importa Link
import { useAuth } from "../../context/AuthContext"; // Obtener usuario del contexto

export const FirstClassForum = () => {
    const { user } = useAuth(); // Obtén el usuario desde el AuthContext
    const [comments, setComments] = useState([]); // Estado para los comentarios
    const [newComment, setNewComment] = useState(""); // Estado para el nuevo comentario
    const [replyingTo, setReplyingTo] = useState(null); // Estado para respuestas
    const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error

    const API_COMMENTS_URL = "https://66ca61e159f4350f064f0e88.mockapi.io/api/labtutor/comentarios"; // Ruta de la API para comentarios

    // Función para obtener los comentarios desde la API al montar el componente
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(API_COMMENTS_URL);
                setComments(response.data);
            } catch (error) {
                console.error("Error al obtener comentarios:", error);
            }
        };
        fetchComments();
    }, []);

    // Función para agregar un comentario a la API
    const handleAddComment = async () => {
        if (!newComment.trim()) {
            setErrorMessage("El comentario no puede estar vacío.");
            return;
        }

        const comment = {
            author: user.nombre,
            content: newComment,
            date: new Date().toLocaleString(),
            replies: [],
        };
        try {
            const response = await axios.post(API_COMMENTS_URL, comment);
            setComments([response.data, ...comments]); // Ahora agrega el comentario al principio
            setNewComment("");
            setErrorMessage("");
        } catch (error) {
            console.error("Error al agregar comentario:", error);
        }
    };

    // Función para responder a un comentario en la API
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

    return (
        <>
            <MainContainer>
                <QuestionContainer>
                    <QuestionBox>
                        <h2>Título de la Pregunta</h2>
                        <p>Descripción de la pregunta o detalles adicionales sobre el tema en discusión.</p>
                    </QuestionBox>

                    <CommentsSection>
                        {/* Formulario para agregar nuevo comentario */}
                        <CommentForm>
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Escribe un comentario..."
                            />
                            {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
                            <SubmitButton onClick={handleAddComment}>Enviar</SubmitButton>
                        </CommentForm>

                        {/* Mostrar todos los comentarios */}
                        {comments.map(comment => (
                            <Comment key={comment.id}>
                                <CommentHeader>
                                    <UserName>{comment.author}</UserName>
                                    <CommentDate>{comment.date}</CommentDate>
                                </CommentHeader>
                                <CommentBody>{comment.content}</CommentBody>
                                <ReplyButton onClick={() => setReplyingTo(comment.id)}>Responder</ReplyButton>

                                {/* Mostrar respuestas */}
                                <RepliesContainer>
                                    {comment.replies.map((reply, index) => (
                                        <Reply key={index}>
                                            <CommentHeader>
                                                <UserName>{reply.author}</UserName>
                                                <CommentDate>{reply.date}</CommentDate>
                                            </CommentHeader>
                                            <CommentBody>{reply.content}</CommentBody>
                                        </Reply>
                                    ))}
                                </RepliesContainer>

                                {/* Formulario de respuesta */}
                                {replyingTo === comment.id && (
                                    <CommentForm>
                                        <textarea
                                            placeholder="Escribe una respuesta..."
                                            onBlur={(e) => handleAddReply(comment.id, e.target.value)}
                                        />
                                        <SubmitButton onClick={() => handleAddReply(comment.id, newComment)}>Responder</SubmitButton>
                                    </CommentForm>
                                )}
                            </Comment>
                        ))}
                    </CommentsSection>
                </QuestionContainer>
            </MainContainer>
        </>
    );
};

// Styled Components (sin cambios en esta parte, pero con la adición del ErrorLabel)

const MainContainer = styled.section`
    width: 100%;
    padding: clamp(10px, 5vw, 20px); 
    background-color: #f9fbfc;
    display: flex;
    justify-content: center;
`;

const QuestionContainer = styled.div`
    width: clamp(80%, 70vw, 60%);
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
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

    textarea {
        width: 100%;
        height: clamp(80px, 5vw, 120px); 
        padding: clamp(10px, 2vw, 15px);
        border: 1px solid #d1eeea;
        border-radius: 10px;
        font-size: clamp(14px, 2.5vw, 16px);
        margin-bottom: 10px;
        resize: none;
        background-color: #f9fbfc;
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
    }
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

const Comment = styled.div`
    margin-bottom: clamp(10px, 2vw, 20px);
    padding: clamp(15px, 2vw, 20px);
    background-color: #ffffff;
    border-radius: 10px;
    border: 1px solid #d1eeea;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
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
`;
